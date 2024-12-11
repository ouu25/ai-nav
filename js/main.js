// 搜索功能
document.addEventListener('DOMContentLoaded', function() {
    // 搜索功能
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    const cards = document.querySelectorAll('.card');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        let hasResults = false;

        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.description').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            
            if (title.includes(searchTerm) || 
                description.includes(searchTerm) || 
                tags.some(tag => tag.includes(searchTerm))) {
                card.style.display = 'flex';
                hasResults = true;
            } else {
                card.style.display = 'none';
            }
        });

        // 显示搜索结果状态
        const sections = document.querySelectorAll('.category');
        sections.forEach(section => {
            const visibleCards = section.querySelectorAll('.card[style="display: flex"]');
            if (visibleCards.length === 0) {
                section.style.display = 'none';
            } else {
                section.style.display = 'block';
            }
        });
    }

    // 搜索按钮点击事件
    searchButton.addEventListener('click', performSearch);
    
    // 输入框回车事件
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // 实时搜索（可选，取消注释启用）
    // searchInput.addEventListener('input', performSearch);

    // 标签筛选功能
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('tag')) {
            const tagText = e.target.textContent.toLowerCase();
            searchInput.value = tagText;
            performSearch();
        }
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
