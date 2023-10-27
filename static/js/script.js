document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const infoContainer = document.querySelector(".info-container");
        const perfilContainer = document.querySelector(".perfil-container");
        infoContainer.classList.add("show");
        perfilContainer.classList.add("show")
    }, 100);
});


let lastScrollPosition = 0;
const activationThreshold = 250;

window.addEventListener('scroll', function() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    const infoContainer = document.querySelector(".info-container");
    const perfilContainer = document.querySelector(".perfil-container");

    if (currentScrollPosition > lastScrollPosition) {
        if (currentScrollPosition > activationThreshold) {
            infoContainer.classList.add('hide');
            perfilContainer.classList.add('hide');
        }
    } else {
        infoContainer.classList.remove('hide');
        perfilContainer.classList.remove('hide');
    }

    lastScrollPosition = currentScrollPosition;
});


function cambiarTestimonio(index) {
    const cards = document.querySelectorAll(".card");
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


document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll('.portfolio-image');
    
    imageContainers.forEach(container => {
        let currentImageIndex = 0;
        const images = container.querySelectorAll('img');
        images[currentImageIndex].style.left = '0';
        
        setInterval(() => {
            images[currentImageIndex].style.left = '-100%';
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].style.left = '0';
        }, 3000);
    });
});

