document.addEventListener('DOMContentLoaded',function() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click',functions (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute(href)).scrollIntoview({
                behaviour: 'smooth'
            });

        });
    });

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;

        count step = (timestamp) => {

            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp)/duration,1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + 'M+';
            if(progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver((entries)=> {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                animateValue(entry.target,0,10,2000);
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.5});

    statusbar.forEach(stat => observer.observe(stat));

   const navLinks = document.querySelectorAll('.nav-links a');
   navLinks.forEach(link => {
    link.addEventListener('mouseenter',()=>{
        link.style.transform = 'translateY(-2px)';
    });

    link.addEventListener('mouseleave',()=>{
        link.style.transform = 'translateY(0)';
    });
   });