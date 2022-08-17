const serviceScroll = () => {
    const questSection = document.querySelector('.push70')
    const up = document.querySelector('.up')
    const upHref = document.querySelector('.up_href')
    window.addEventListener('scroll', () => {
        const top = document.documentElement.scrollTop
        if (top < questSection.offsetTop) {
            up.style.display = 'none'
        } else if (top > questSection.offsetTop) {
            up.style.display = 'block'
        }
    })

    upHref.addEventListener('click', (e) => {
        e.preventDefault();
        const id = upHref.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })
}

export default serviceScroll