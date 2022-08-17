const slider = () => {
    const sliderBlock = document.querySelector('.top-slider')
    const slides = document.querySelectorAll('.item')
    const portfolioDots = document.querySelector('.slick-dots')
    let dots = document.querySelectorAll('.dot')

    const timeInterval = 3000

    let currentSlide = 0
    let interval

    const initDot = () => {
        portfolioDots.innerHTML = ''

        slides.forEach((slide, index) => {
            const dot = document.createElement('li')

            dot.classList.add('dot')
            if (slide.classList.contains('item-active')) {
                dot.classList.add('slick-active')
                currentSlide = index
            }
            portfolioDots.append(dot)
        })
        dots = document.querySelectorAll('.dot')
    }


    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'item-active')
        prevSlide(dots, currentSlide, 'slick-active')
        currentSlide++
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        nextSlide(slides, currentSlide, 'item-active')
        nextSlide(dots, currentSlide, 'slick-active')
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearTimeout(interval)
    }

    if (slides.length > 0) {
        initDot() // добовляем точки в слайдер

        sliderBlock.addEventListener('click', (e) => {
            e.preventDefault()

            if (!e.target.matches('.dot')) {
                return
            }

            prevSlide(slides, currentSlide, 'item-active')
            prevSlide(dots, currentSlide, 'slick-active')

            if (e.target.classList.contains('dot')) {
                dots.forEach((dot, index) => {
                    if (e.target === dot) {
                        currentSlide = index
                    }
                })
            }

            if (currentSlide >= slides.length) {
                currentSlide = 0
            }

            if (currentSlide < 0) {
                currentSlide = slides.length - 1
            }

            nextSlide(slides, currentSlide, 'item-active')
            nextSlide(dots, currentSlide, 'slick-active')
        })
    }


    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot')) {
            stopSlide()
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot')) {
            startSlide(timeInterval)
        }
    }, true)

    startSlide(timeInterval)
}

export default slider