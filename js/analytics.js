// Google Analytics Event Tracking
document.addEventListener('DOMContentLoaded', function() {
    // 跟踪资源点击
    document.querySelectorAll('.actions a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            const card = this.closest('.card');
            const category = this.closest('.category').querySelector('h2').textContent;
            const resourceName = card.querySelector('h3').textContent;
            
            gtag('event', 'resource_click', {
                'resource_category': category,
                'resource_name': resourceName,
                'outbound_link': this.href
            });
        });
    });

    // 跟踪页面滚动深度
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll > 25 && maxScroll <= 30) {
                gtag('event', 'scroll_depth', { 'depth': '25%' });
            } else if (maxScroll > 50 && maxScroll <= 55) {
                gtag('event', 'scroll_depth', { 'depth': '50%' });
            } else if (maxScroll > 75 && maxScroll <= 80) {
                gtag('event', 'scroll_depth', { 'depth': '75%' });
            } else if (maxScroll > 90) {
                gtag('event', 'scroll_depth', { 'depth': '90%' });
            }
        }
    });

    // 跟踪搜索行为
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('change', function() {
            gtag('event', 'search', {
                'search_term': this.value
            });
        });
    }
});
