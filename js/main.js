// Burger Menu
const burgerBtn = document.querySelector('#burger-btn')
const menu = document.querySelector('.header .menu');
const body = document.querySelector('body')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('hidden')
})

// Navigation animation
const header = document.querySelector('.header')
const courses = document.querySelector('.courses')

window.addEventListener('scroll', () => {
    const coursesTop = courses.getBoundingClientRect().top
    if (coursesTop < 150) {
        header.classList.add('active')
        toTopBtn.classList.add('active')
        return
    }
    header.classList.remove('active')
    toTopBtn.classList.remove('active')
})

// To Top Button
const toTopBtn = document.querySelector('#to-top')

toTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})


// TWEEN MAX ANIMATIONS
TweenMax.from('.main .text-content', 1, {
    opacity: 0,
    x: "-100%",
    delay: .5
})

TweenMax.from('.main .graphic-content', 1, {
    opacity: 0,
    x: "100%",
    delay: .5
})

TweenMax.from('.header', 1, {
    opacity: 0,
    y: "-100%",
    delay: 1.5
})
const counters = document.querySelectorAll('.counter');
const speed = 700;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 25);
        } else {
            counter.innerText = value;
        }

    }

    animate();
});