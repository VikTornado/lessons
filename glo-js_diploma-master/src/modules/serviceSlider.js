const serviceSlider = () => {
    const serviceItem = document.querySelectorAll('.services-item')
    const arrowRight = document.querySelector('.arrow-right')
    const arrowLeft = document.querySelector('.arrow-left')
    let position //сколько будет видно карточек

    if (window.outerWidth < 570) {
        position = 1
    } else if (window.outerWidth < 870 && window.outerWidth > 570) {
        position = 2
    } else {
        position = 3
    }

    console.log(window.outerWidth)

    let start = 0

    //проходимся по карточкам и добавляем display none
    serviceItem.forEach(item => {
        if (start < position) {
            start++
        } else {
            item.style.display = 'none'
        }
    })

    start = 0 // обнуляем
    if (start === 0) {
        arrowLeft.style.opacity = 0.2
    }
    arrowLeft.addEventListener('click', () => {
        if (start > 0) {
            start = start - 1
            position = position - 1
            serviceItem[start].style.display = 'block'
            serviceItem[position].style.display = 'none'
            arrowRight.style.opacity = 1
            if (start === 0) {
                arrowLeft.style.opacity = 0.3
            }
        }
    })
    arrowRight.addEventListener('click', () => {
        if (position < serviceItem.length) {
            serviceItem[start++].style.display = 'none'
            serviceItem[position++].style.display = 'block'
            if (position === serviceItem.length) {
                arrowRight.style.opacity = 0.5
            }
            arrowLeft.style.opacity = 1
        }
    })
}

export default serviceSlider