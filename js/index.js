document.addEventListener('DOMContentLoaded', function() {
    // 核心DOM元素
    const elements = {
        navigationContainer: document.getElementById('navigation-container'),
        mainContent: document.querySelector('.main-content'),
        categoryMenu: document.getElementById('category-menu')
    };

    const navigationModule = {
        // 初始化导航系统
        init: function() {
            // 生成分类菜单
            this.renderCategoryMenu();
            // 显示所有分类
            this.renderAllCategories();
        },
        
        // 渲染分类菜单
        renderCategoryMenu: function() {
            if (!navigationData || navigationData.length === 0) return;
            
            let menuHTML = '';
            navigationData.forEach(category => {
                menuHTML += `<button class="category-button" data-category="${category.id}">
                    <i class="${category.icon}"></i> ${category.title}
                </button>`;
            });
            
            elements.categoryMenu.innerHTML = menuHTML;
            
            // 添加点击事件
            const categoryButtons = document.querySelectorAll('.category-button');
            categoryButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const categoryId = e.currentTarget.dataset.category;
                    document.getElementById(`category-${categoryId}`).scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // 更新活跃按钮状态
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    e.currentTarget.classList.add('active');
                });
            });
        },
        
        // 渲染所有分类
        renderAllCategories: function() {
            // 清空现有内容
            elements.navigationContainer.innerHTML = '';
            
            // 检查是否有导航数据
            if (!navigationData || navigationData.length === 0) return;
            
            // 构建所有分类的HTML内容
            let allCategoriesHTML = '';
            
            navigationData.forEach(category => {
                allCategoriesHTML += `
                    <div class="category-section" id="category-${category.id}">
                        <h2 class="nav-category-title"><i class="${category.icon}"></i> ${category.title}</h2>
                        <div class="sites-grid">
                            ${category.links.map(link => this.createSiteCardHTML(link)).join('')}
                        </div>
                    </div>
                    <div style="margin-bottom: 30px;"></div>
                `;
            });
            
            elements.navigationContainer.innerHTML = allCategoriesHTML;
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