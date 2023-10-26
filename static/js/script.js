document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const infoContainer = document.querySelector(".info-container");
        const perfilContainer = document.querySelector(".perfil-container");
        infoContainer.classList.add("show");
        perfilContainer.classList.add("show")
    }, 100); // Pequeño retraso para asegurar que las transiciones se apliquen correctamente
});


let lastScrollPosition = 0;
const activationThreshold = 250; // Valor límite para activar la animación

window.addEventListener('scroll', function() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    const infoContainer = document.querySelector(".info-container");
    const perfilContainer = document.querySelector(".perfil-container");

    if (currentScrollPosition > lastScrollPosition) {
        // Si estamos desplazándonos hacia abajo y hemos superado el umbral
        if (currentScrollPosition > activationThreshold) {
            infoContainer.classList.add('hide');
            perfilContainer.classList.add('hide');
        }
    } else {
        // Si estamos desplazándonos hacia arriba
        infoContainer.classList.remove('hide');
        perfilContainer.classList.remove('hide');
    }

    // Actualizamos la última posición de desplazamiento
    lastScrollPosition = currentScrollPosition;
});


function cambiarTestimonio(index) {
    const cards = document.querySelectorAll(".testimonio-card");
    const dots = document.querySelectorAll(".dot");

    for (let i = 0; i < cards.length; i++) {
        if (i === index) {
            cards[i].style.display = "block";
            dots[i].classList.add("active");
        } else {
            cards[i].style.display = "none";
            dots[i].classList.remove("active");
        }
    }
}
