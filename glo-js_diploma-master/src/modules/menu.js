const menu = () => {
    const topMenu = document.querySelector('.top-menu')
    const mobileMenu = document.querySelector('.mobile-menu')

    const toggleMenu = (e) => {
        if (e.target.closest('.top-menu')) {
            if (e.target.matches('ul>li>a')) {
                e.preventDefault();
                const id = e.target.getAttribute('href');
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        if (e.target.closest('.mob-menu-btn')) {
            e.preventDefault()
            mobileMenu.style.right = 0 + 'px'
        }
        if (e.target.closest('.mobile-menu-close')) {
            e.preventDefault()
            mobileMenu.style.right = -500 + 'px'
        }
    }

    document.addEventListener("click", (e) => toggleMenu(e));
}

export default menu