// 农历日期转换函数
function getLunarDate(date) {
    // 这只是一个简化的示例，实际应用中你可能需要使用专门的农历计算库
    // 如果需要真实农历转换，可以使用类似 lunar-javascript 这样的库
    const lunarMonths = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月'];
    const lunarDays = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
                       '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
                       '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];
    
    // 这里只是模拟返回，实际应用需要真正的算法
    const month = date.getMonth();
    const day = date.getDate() - 1; // 调整为0-29
    
    return `${lunarMonths[month % 12]} ${lunarDays[day % 30]}`;
}

// 更新时间函数
function updateTime() {
    const now = new Date();
    
    // 更新时间
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}`;
    
    // 更新日期
    const month = now.getMonth() + 1;
    const date = now.getDate();
    document.getElementById('current-date').textContent = `${month}月${date}日`;
    
    // 更新星期
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    document.getElementById('current-weekday').textContent = `星期${weekdays[now.getDay()]}`;
    
    // 更新农历
    document.getElementById('lunar-date').textContent = getLunarDate(now);
}

// 设置搜索引擎切换功能
function setupSearchEngine() {
    const selectedEngine = document.getElementById('selected-engine');
    const engineOptions = document.getElementById('engine-options');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    
    // 搜索引擎配置
    const engines = {
        baidu: {
            url: 'https://www.baidu.com/s',
            param: 'wd',
            icon: 'fa-baidu'
        },
        bing: {
            url: 'https://www.bing.com/search',
            param: 'q',
            icon: 'fa-microsoft'
        },
        google: {
            url: 'https://www.google.com/search',
            param: 'q',
            icon: 'fa-google'
        }
    };
    
    // 显示/隐藏搜索引擎选择菜单
    selectedEngine.addEventListener('click', () => {
        engineOptions.style.display = engineOptions.style.display === 'block' ? 'none' : 'block';
    });
    
    // 点击其他区域隐藏菜单
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-engine-selector')) {
            engineOptions.style.display = 'none';
        }
    });
    
    // 搜索引擎选择
    document.querySelectorAll('.engine-option').forEach(option => {
        option.addEventListener('click', () => {
            const engine = option.getAttribute('data-engine');
            const engineData = engines[engine];
            
            // 更新表单动作和参数
            searchForm.action = engineData.url;
            searchInput.name = engineData.param;
            
            // 更新显示
            selectedEngine.innerHTML = option.innerHTML;
            
            // 隐藏菜单
            engineOptions.style.display = 'none';
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化时间显示
    updateTime();
    // 每分钟更新一次时间
    setInterval(updateTime, 60000);
    
    // 初始化搜索引擎切换
    setupSearchEngine();
});