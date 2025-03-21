document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const selectedEngine = document.getElementById('selected-engine');
    const engineOptions = document.getElementById('engine-options');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    
    // 获取下拉箭头图标
    const arrowIcon = selectedEngine.querySelector('img[src="svg/down.svg"]');
    
    // 切换搜索引擎选项的显示/隐藏
    selectedEngine.addEventListener('click', function() {
        engineOptions.classList.toggle('show');
        
        // 切换箭头图标
        if (engineOptions.classList.contains('show')) {
            arrowIcon.src = 'svg/up.svg'; // 切换为向上箭头
        } else {
            arrowIcon.src = 'svg/down.svg'; // 切换为向下箭头
        }
    });
    
    // 点击引擎选项时更改表单动作
    const engineOptionElements = document.querySelectorAll('.engine-option');
    engineOptionElements.forEach(option => {
        option.addEventListener('click', function() {
            const engine = this.getAttribute('data-engine');
            const engineIcon = this.querySelector('img').src;
            
            // 更新选中的引擎图标
            selectedEngine.querySelector('img:first-child').src = engineIcon;
            
            // 根据选择的引擎更改表单动作和输入名称
            updateSearchForm(engine);
            
            // 隐藏选项并重置箭头
            engineOptions.classList.remove('show');
            arrowIcon.src = 'svg/down.svg';
            
            // 把 arrowIcon 添加到selected-engine中
            selectedEngine.appendChild(arrowIcon);
            console.log(arrowIcon);
        });
    });
    
    // 点击外部区域关闭引擎选项
    document.addEventListener('click', function(event) {
        if (!selectedEngine.contains(event.target) && !engineOptions.contains(event.target)) {
            engineOptions.classList.remove('show');
            arrowIcon.src = 'svg/down.svg'; // 重置为向下箭头
        }
    });
    
    // 更新搜索表单的函数
    function updateSearchForm(engine) {
        switch(engine) {
            case 'baidu':
                searchForm.action = 'https://www.baidu.com/s';
                searchInput.name = 'wd';
                break;
            case 'bing':
                searchForm.action = 'https://www.bing.com/search';
                searchInput.name = 'q';
                break;
            case 'google':
                searchForm.action = 'https://www.google.com/search';
                searchInput.name = 'q';
                break;
        }
    }
});