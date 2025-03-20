document.addEventListener('DOMContentLoaded', function() {
    const dropArea = document.getElementById('drop-area');
    const fileInput = document.getElementById('file-input');
    const extractBtn = document.getElementById('extract-btn');
    const result = document.getElementById('result');
    const downloadLink = document.getElementById('download-link');
    const logElement = document.getElementById('log');
    const progressContainer = document.getElementById('progress-container');
    const progressBar = document.getElementById('progress-bar');
    
    let selectedFile = null;

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
            handleFiles(files);
        }
    }

    // 点击区域选择文件
    dropArea.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });

    function handleFiles(files) {
        if (files.length > 0) {
            selectedFile = files[0];
            logToConsole(`已选择文件: ${selectedFile.name} (${formatFileSize(selectedFile.size)})`);
            extractBtn.disabled = false;
        }
    }

    // Boyer-Moore 搜索算法实现
    function searchPattern(pattern, data) {
        const m = pattern.length;
        const n = data.length;
        
        if (m === 0 || n === 0) {
            return -1;
        }

        // 预处理跳转表
        const jumpTable = new Array(256).fill(m);
        for (let i = 0; i < m - 1; i++) {
            jumpTable[pattern[i]] = m - 1 - i;
        }

        // 搜索模式
        let i = m - 1;
        while (i < n) {
            let j = m - 1;
            while (j >= 0 && data[i] === pattern[j]) {
                i--;
                j--;
            }
            if (j === -1) {
                return i + 1;
            }
            i += Math.max(jumpTable[data[i]] || m, 1);
        }

        return -1;
    }

    // 提取视频
    extractBtn.addEventListener('click', async () => {
        if (!selectedFile) {
            showResult('请先选择一个 JPG 文件', 'error');
            return;
        }

        try {
            result.style.display = 'none';
            downloadLink.style.display = 'none';
            progressContainer.style.display = 'block';
            extractBtn.disabled = true;

            const fileArrayBuffer = await readFileAsArrayBuffer(selectedFile);
            const fileBytes = new Uint8Array(fileArrayBuffer);
            
            logToConsole('开始搜索 MP4 文件头...');

            // 定义 MP4 文件头模式
            const mp4Patterns = [
                new Uint8Array([0x00, 0x00, 0x00, 0x18, 0x66, 0x74, 0x79, 0x70, 0x6D, 0x70, 0x34, 0x32]),
                new Uint8Array([0x00, 0x00, 0x00, 0x1C, 0x66, 0x74, 0x79, 0x70, 0x69, 0x73, 0x6F, 0x6D]),
                new Uint8Array([0x00, 0x00, 0x00, 0x1C, 0x66, 0x74, 0x79, 0x70])
            ];

            let indexOfMp4 = -1;
            
            // 使用 Web Worker 来处理大文件，避免阻塞 UI
            const worker = new Worker(URL.createObjectURL(new Blob([`
                self.onmessage = function(e) {
                    const { fileBytes, mp4Patterns } = e.data;
                    
                    function searchPattern(pattern, data) {
                        const m = pattern.length;
                        const n = data.length;
                        
                        if (m === 0 || n === 0) {
                            return -1;
                        }

                        // 预处理跳转表
                        const jumpTable = new Array(256).fill(m);
                        for (let i = 0; i < m - 1; i++) {
                            jumpTable[pattern[i]] = m - 1 - i;
                        }

                        // 搜索模式
                        let i = m - 1;
                        while (i < n) {
                            let j = m - 1;
                            
                            // 每处理 1MB 数据报告一次进度
                            if (i % (1024 * 1024) === 0) {
                                self.postMessage({ 
                                    type: 'progress', 
                                    progress: (i / n) * 100 
                                });
                            }
                            
                            while (j >= 0 && data[i] === pattern[j]) {
                                i--;
                                j--;
                            }
                            if (j === -1) {
                                return i + 1;
                            }
                            i += Math.max(jumpTable[data[i]] || m, 1);
                        }

                        return -1;
                    }

                    for (let i = 0; i < mp4Patterns.length; i++) {
                        const pattern = mp4Patterns[i];
                        const index = searchPattern(pattern, fileBytes);
                        
                        self.postMessage({ 
                            type: 'patternResult', 
                            patternIndex: i,
                            result: index 
                        });
                        
                        if (index >= 0) {
                            self.postMessage({ 
                                type: 'found', 
                                index: index 
                            });
                            break;
                        }
                    }
                    
                    self.postMessage({ type: 'done' });
                }
            `], { type: 'application/javascript' })));

            worker.onmessage = function(e) {
                const data = e.data;
                
                if (data.type === 'progress') {
                    progressBar.value = data.progress;
                } else if (data.type === 'patternResult') {
                    logToConsole(`模式 ${data.patternIndex + 1} 搜索结果: ${data.result}`);
                } else if (data.type === 'found') {
                    indexOfMp4 = data.index;
                } else if (data.type === 'done') {
                    finishExtraction(indexOfMp4, fileBytes);
                    worker.terminate();
                }
            };

            worker.postMessage({ fileBytes, mp4Patterns });

        } catch (error) {
            logToConsole(`错误: ${error.message}`);
            showResult(`处理失败: ${error.message}`, 'error');
            progressContainer.style.display = 'none';
            extractBtn.disabled = false;
        }
    });

    function finishExtraction(indexOfMp4, fileBytes) {
        progressContainer.style.display = 'none';
        extractBtn.disabled = false;

        if (indexOfMp4 >= 0) {
            logToConsole(`在索引 ${indexOfMp4} 处找到 MP4 文件头`);
            
            // 创建提取的 MP4 文件
            const mp4Data = fileBytes.slice(indexOfMp4);
            const mp4Blob = new Blob([mp4Data], { type: 'video/mp4' });
            
            // 创建下载链接
            const url = URL.createObjectURL(mp4Blob);
            downloadLink.href = url;
            downloadLink.download = `${selectedFile.name.split('.')[0]}.mp4`;
            downloadLink.style.display = 'block';
            
            // 显示成功消息
            showResult(`成功提取视频！文件大小: ${formatFileSize(mp4Data.length)}`, 'success');
            
            // 预览视频
            const videoPreview = document.createElement('video');
            videoPreview.src = url;
            videoPreview.controls = true;
            videoPreview.style.width = '100%';
            videoPreview.style.marginTop = '15px';
            result.appendChild(videoPreview);
        } else {
            showResult('在给定的 JPG 文件中未找到 MP4 视频', 'error');
        }
    }

    // 读取文件为 ArrayBuffer
    function readFileAsArrayBuffer(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(new Error('读取文件失败'));
            reader.readAsArrayBuffer(file);
        });
    }

    // 显示结果消息
    function showResult(message, type) {
        result.textContent = message;
        result.className = type;
        result.style.display = 'block';
    }

    // 记录日志
    function logToConsole(message) {
        const timestamp = new Date().toLocaleTimeString();
        const logMessage = document.createElement('div');
        logMessage.textContent = `[${timestamp}] ${message}`;
        logElement.appendChild(logMessage);
        logElement.scrollTop = logElement.scrollHeight;
    }

    // 格式化文件大小
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
});


