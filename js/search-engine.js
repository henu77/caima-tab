document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const selectedEngine = document.getElementById('selected-engine');
    const engineOptions = document.getElementById('engine-options');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    
    // 搜索引擎配置
    const engines = {
        baidu: {
            action: 'https://www.baidu.com/s',
            param: 'wd',
            icon: 'fa-baidu'
        },
        bing: {
            action: 'https://www.bing.com/search',
            param: 'q',
            icon: 'fa-microsoft'
        },
        google: {
            action: 'https://www.google.com/search',
            param: 'q',
            icon: 'fa-google'
        }
    };
    
    // 点击选择引擎按钮时显示/隐藏下拉菜单
    selectedEngine.addEventListener('click', function(e) {
        e.stopPropagation();
        engineOptions.classList.toggle('show');
    });
    
    // 点击页面其他地方时关闭下拉菜单
    // document.addEventListener('click', function() {
    //     engineOptions.classList.remove('show');
    // });
    
    // // 阻止下拉菜单点击事件冒泡
    // engineOptions.addEventListener('click', function(e) {
    //     e.stopPropagation();
    // });
    
    // 选择搜索引擎
    document.querySelectorAll('.engine-option').forEach(option => {
        option.addEventListener('click', function() {
            const engine = this.getAttribute('data-engine');
            const engineInfo = engines[engine];
            
            // 更新表单动作和参数
            searchForm.action = engineInfo.action;
            searchInput.name = engineInfo.param;
            
            // 更新显示的引擎
            const iconElement = selectedEngine.querySelector('i:first-child');
            iconElement.className = `fab ${engineInfo.icon}`;
            
            selectedEngine.querySelector('span').textContent = this.querySelector('span').textContent;
            
            // 隐藏下拉菜单
            engineOptions.classList.remove('show');
        });
    });
});
