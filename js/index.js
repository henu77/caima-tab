document.addEventListener('DOMContentLoaded', function() {
    // 核心DOM元素
    const elements = {
        navigationContainer: document.getElementById('navigation-container'),
        mainContent: document.querySelector('.main-content'),
    };

    const navigationModule = {
        // 初始化导航系统
        init: function() {
            // 如果存在导航数据，默认显示第一个分类
            if (navigationData?.length > 0) {
                this.renderCategoryLinks(navigationData[0].id);
            }
        },
        
        // 渲染分类链接
        renderCategoryLinks: function(categoryId) {
            // 清空现有内容
            elements.navigationContainer.innerHTML = '';
            
            // 查找对应分类
            const category = navigationData.find(cat => cat.id === categoryId);
            if (!category) return;
            
            // 构建HTML内容
            const html = `
                <h2 class="nav-category-title"><i class="${category.icon}"></i> ${category.title}</h2>
                <div class="sites-grid">
                    ${category.links.map(link => this.createSiteCardHTML(link)).join('')}
                </div>
            `;
            
            elements.navigationContainer.innerHTML = html;
        },
        
        // 生成网站卡片HTML
        createSiteCardHTML: function(link) {
            return `
                <a class="site-card" href="${link.url}" target="_blank">
                    <div class="site-icon">
                        <img src="${link.icon}" alt="${link.title}" 
                             onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2248%22 height=%2248%22><rect width=%2248%22 height=%2248%22 fill=%22%23f0f0f0%22 /><text x=%2250%%22 y=%2250%%22 font-size=%2224%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%23333%22>${link.title[0]}</text></svg>'">
                    </div>
                    <div class="site-info">
                        <div class="site-title">${link.title}</div>
                        ${link.description ? `<div class="site-description">${link.description}</div>` : ''}
                    </div>
                </a>
            `;
        }
    };
    
    // 初始化导航模块
    navigationModule.init();
});