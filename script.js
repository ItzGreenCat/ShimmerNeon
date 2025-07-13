document.addEventListener('DOMContentLoaded', () => {
    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 监听所有带有 data-aos 属性的元素
    const observerOptions = {
        root: null, // 视口为根元素
        rootMargin: '0px',
        threshold: 0.1 // 当元素10%可见时触发
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // 当元素进入视口时
            if (entry.isIntersecting) {
                const target = entry.target;
                
                // 获取延迟时间 (如果设置了 data-aos-delay)
                const delay = target.getAttribute('data-aos-delay') || '0';
                
                // 确保元素有动画效果，设置延迟后添加动画类
                setTimeout(() => {
                    target.classList.add('aos-animate');
                }, parseInt(delay));

                // 元素动画完成后停止观察
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    // 观察所有具有 data-aos 属性的元素
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });
});
