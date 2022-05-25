function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', function () {
        // Se estiver visível, remova-o, caso contrário, adicione-o
        //div.classList.toggle("visible");
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = `navLinkFade 0.5s forwards ${(index/5) + 1.50}s`;
            console.log((index/5)+1.50);
        }
    })
}

navSlide();