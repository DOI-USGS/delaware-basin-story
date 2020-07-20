const customScrollObserver = new IntersectionObserver(
        (entries, customScrollObserver) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('enter');
                    customScrollObserver.unobserve(entry.target);
                }
            }, { threshold: [0.3] });
        }
)
export default {
    bind(el) {
       el.classList.add('before-enter');
        customScrollObserver.observe(el)
    }
}
