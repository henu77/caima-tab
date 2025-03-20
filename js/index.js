document.addEventListener('DOMContentLoaded', function() {
    // 核心DOM元素
    const elements = {
        navigationContainer: document.getElementById('navigation-container'),
        sidebar: document.getElementById('sidebar'),
        sidebarNav: document.getElementById('sidebar-nav'), // 使用已存在的sidebar-nav
        mainContent: document.querySelector('.main-content'),
    };
    
    // 删除创建sidebar-nav的代码，使用HTML中已定义的元素
    
    // ============================
    // 导航相关功能
    // ============================
    const navigationModule = {
        // 初始化导航系统
        init: function() {
            this.renderSidebar();
            
            // 默认显示第一个分类的网站并设置为激活状态
            if (navigationData.length > 0) {
                this.renderCategoryLinks(navigationData[0].id);
                const firstNavItem = elements.sidebarNav.querySelector('li');
                if (firstNavItem) {
                    firstNavItem.classList.add('active');
                }
            }
        },
        
        // 渲染侧边栏导航
        renderSidebar: function() {
            // 清空现有内容
            elements.navigationContainer.innerHTML = '';
            elements.sidebarNav.innerHTML = '';
            
            // 生成左侧侧边栏导航
            navigationData.forEach((category) => {
                const li = document.createElement('li');
                li.className = 'sidebar-nav-item';
                li.dataset.categoryId = category.id;
                
                li.innerHTML = `
                    <a href="">
                        <i class="${category.icon}"></i>
                        <span>${category.title}</span>
                    </a>
                `;
                
                // 添加点击事件到链接元素
                const link = li.querySelector('a');
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // 切换激活状态
                    this.setActiveCategory(li);
                    
                    // 显示对应分类的导航链接
                    this.renderCategoryLinks(category.id);
                });
                
                elements.sidebarNav.appendChild(li);
            });
        },
        
        // 设置激活的导航分类
        setActiveCategory: function(element) {
            // 移除所有active类
            document.querySelectorAll('.sidebar-nav li').forEach(item => {
                item.classList.remove('active');
            });
            
            // 添加active类到当前选中项
            element.classList.add('active');
        },
        
        // 其他方法保持不变...
        renderCategoryLinks: function(categoryId) {
            // 清空现有内容
            elements.navigationContainer.innerHTML = '';
            
            // 查找对应分类
            const category = navigationData.find(cat => cat.id === categoryId);
            if (!category) return;
            
            // 添加分类标题
            const titleElement = document.createElement('h2');
            titleElement.className = 'nav-category-title';
            titleElement.innerHTML = `<i class="${category.icon}"></i> ${category.title}`;
            elements.navigationContainer.appendChild(titleElement);
            
            // 创建网站链接容器
            const sitesGrid = document.createElement('div');
            sitesGrid.className = 'sites-grid';
            
            // 生成网站链接卡片
            category.links.forEach(link => {
                sitesGrid.appendChild(this.createSiteCard(link));
            });
            
            elements.navigationContainer.appendChild(sitesGrid);
        },
        
        createSiteCard: function(link) {
            const card = document.createElement('a');
            card.className = 'site-card';
            card.href = link.url;
            card.target = '_blank';
            
            card.innerHTML = `
                <div class="site-icon">
                    <img src="${link.icon}" alt="${link.title}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2248%22 height=%2248%22><rect width=%2248%22 height=%2248%22 fill=%22%23f0f0f0%22 /><text x=%2250%%22 y=%2250%%22 font-size=%2224%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%23333%22>${link.title[0]}</text></svg>'">
                </div>
                <div class="site-info">
                    <div class="site-title">${link.title}</div>
                    ${link.description ? `<div class="site-description">${link.description}</div>` : ''}
                </div>
            `;
            
            return card;
        }
    };

    
    // ============================
    // 布局相关功能
    // ============================
    const layoutModule = {
        // 初始化布局
        init: function() {
            // 确保侧边栏始终显示
            if (elements.sidebar) {
                elements.sidebar.style.transform = 'translateX(0)';
            }
            
            // 确保main-content的margin-left设置正确
            if (elements.mainContent) {
                elements.mainContent.style.marginLeft = '60px';
            }
        }
    };
    
    // 初始化各个模块
    navigationModule.init();
    layoutModule.init();
    

});