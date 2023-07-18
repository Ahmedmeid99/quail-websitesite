const scrollBtn = document.querySelector('.scroll-btn')

// OnScroll event
window.addEventListener('scroll', () => {

    // Show & Hidden scroll-btn
    if (window.scrollY > 300) {
        scrollBtn.classList.add('show-scroll-btn')
    }
    else if (window.scrollY < 300) {
        scrollBtn.classList.remove('show-scroll-btn')
    }
})

//Scroll to top by scroll-btn
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})