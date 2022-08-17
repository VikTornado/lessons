import {
    animate
} from "./helper";

const numAnimate = () => {
    const num1 = document.getElementById('num1')
    const num2 = document.getElementById('num2')
    const num3 = document.getElementById('num3')
    const num4 = document.getElementById('num4')

    let temp = 0
    let startAnimateValue = 0
    let targetAnimateValue1 = +num1.textContent;
    let targetAnimateValue2 = +num2.textContent;
    let targetAnimateValue3 = +num3.textContent;
    let targetAnimateValue4 = +num4.textContent;

    window.addEventListener('scroll', () => {
        const questSection = document.querySelector('.services-arrow')
        const top = document.documentElement.scrollTop
        
        if (top < questSection.offsetTop) {
        } else if (top > questSection.offsetTop) {
            if (temp === 0) {
                animate({
                    duration: 1400,
                    timing: (timeFraction) => timeFraction,
                    draw(progress) {
                        num1.textContent = startAnimateValue + Math.round((targetAnimateValue1 - startAnimateValue) * progress);
                        num2.textContent = startAnimateValue + Math.round((targetAnimateValue2 - startAnimateValue) * progress);
                        num3.textContent = startAnimateValue + Math.round((targetAnimateValue3 - startAnimateValue) * progress);
                        num4.textContent = startAnimateValue + Math.round((targetAnimateValue4 - startAnimateValue) * progress);
                    },
                });
                temp++
            }
        }
    })

    
}

export default numAnimate