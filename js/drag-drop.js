/**
 * 初始化文件拖放区域
 * @param {HTMLElement} dropArea - 拖放区域元素
 * @param {HTMLInputElement} fileInput - 文件输入元素
 * @param {Function} onFilesSelected - 文件选择回调函数
 * @param {string} acceptTypes - 接受的文件类型（可选）
 * @param {HTMLElement} thumbnailContainer - 缩略图容器（可选）
 */
function initDragDrop(dropArea, fileInput, onFilesSelected, acceptTypes = null, thumbnailContainer = null) {
  // 处理拖放事件
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
  });

  function highlight() {
    dropArea.classList.add('highlight');
  }

  function unhighlight() {
    dropArea.classList.remove('highlight');
  }

  // 处理文件拖放
  dropArea.addEventListener('drop', handleDrop, false);

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    
    if (files.length > 0) {
      if (acceptTypes) {
        // 如果指定了文件类型，进行过滤
        const file = files[0];
        const fileType = file.type;
        const isAccepted = acceptTypes.split(',')
          .some(type => {
            if (type.startsWith('.')) {
              // 扩展名匹配
              return file.name.toLowerCase().endsWith(type.toLowerCase());
            } else {
              // MIME 类型匹配
              return fileType.startsWith(type.trim());
            }
          });
        
        if (isAccepted) {
          // 如果有缩略图容器，生成缩略图
          if (thumbnailContainer) {
            generateThumbnail(file, thumbnailContainer);
          }
          onFilesSelected(file);
        }
      } else {
        // 如果有缩略图容器，生成缩略图
        if (thumbnailContainer) {
          generateThumbnail(files[0], thumbnailContainer);
        }
        onFilesSelected(files[0]);
      }
    }
  }

  // 点击区域选择文件
  dropArea.addEventListener('click', () => {
    fileInput.click();
  });

  // 监听文件选择变化
  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      // 如果有缩略图容器，生成缩略图
      if (thumbnailContainer) {
        generateThumbnail(file, thumbnailContainer);
      }
      onFilesSelected(file);
    }
  });
  
  /**
   * 生成并显示文件缩略图
   * @param {File} file - 选择的文件
   * @param {HTMLElement} container - 缩略图容器
   */
  function generateThumbnail(file, container) {
    container.innerHTML = '';
    container.style.display = 'block';
    
    // 添加文件名和大小信息
    const fileInfo = document.createElement('div');
    fileInfo.className = 'file-info';
    fileInfo.textContent = `${file.name} (${formatFileSize(file.size)})`;
    container.appendChild(fileInfo);
    
    if (file.type.startsWith('image/')) {
      // 处理图片文件
      const img = new Image();
      img.className = 'file-thumbnail';
      container.appendChild(img);
      
      // 使用 FileReader 创建缩略图
      const reader = new FileReader();
      reader.onload = (e) => {
        // 创建一个新的图像对象来调整大小
        const tempImg = new Image();
        tempImg.onload = function() {
          // 创建一个小型画布以生成缩略图
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          // 设置缩略图最大尺寸
          const MAX_WIDTH = 200;
          const MAX_HEIGHT = 200;
          let width = tempImg.width;
          let height = tempImg.height;
          
          // 调整大小但保持纵横比
          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          
          // 在画布上绘制调整大小的图像
          ctx.drawImage(tempImg, 0, 0, width, height);
          
          // 从画布获取数据 URL 并设置为缩略图来源
          img.src = canvas.toDataURL('image/jpeg', 0.7);
        };
        tempImg.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else if (file.type.startsWith('video/')) {
      // 处理视频文件
      const video = document.createElement('video');
      video.className = 'file-thumbnail';
      video.controls = true;
      
      const source = document.createElement('source');
      source.src = URL.createObjectURL(file);
      source.type = file.type;
      
      video.appendChild(source);
      container.appendChild(video);
    } else {
      // 处理其他类型的文件 - 显示通用图标
      const icon = document.createElement('div');
      icon.className = 'file-icon';
      icon.textContent = getFileIcon(file.type);
      container.appendChild(icon);
    }
  }
  
  /**
   * 格式化文件大小
   * @param {number} bytes - 文件大小（字节）
   * @returns {string} 格式化后的文件大小
   */
  function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  
  /**
   * 根据文件类型获取图标
   * @param {string} fileType - 文件MIME类型
   * @returns {string} 文件类型图标
   */
  function getFileIcon(fileType) {
    if (fileType.startsWith('image/')) {
      return '🖼️';
    } else if (fileType.startsWith('video/')) {
      return '🎬';
    } else if (fileType.startsWith('audio/')) {
      return '🎵';
    } else if (fileType.includes('pdf')) {
      return '📄';
    } else {
      return '📁';
    }
  }
}

// 导出为全局函数
window.initDragDrop = initDragDrop;
