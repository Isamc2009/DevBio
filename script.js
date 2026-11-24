// Atualiza automaticamente o ano do rodapé
const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Anima os elementos durante a rolagem
const elementsToReveal = document.querySelectorAll(".reveal");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {

    elementsToReveal.forEach(element => {
        element.classList.add("visible");
    });

} else {

    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px"
    };

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        observerOptions
    );

    elementsToReveal.forEach(element => {
        revealObserver.observe(element);
    });

}