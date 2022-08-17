import accordeon from './modules/accordeon'
import menu from './modules/menu'
import modal from './modules/modal'
import numAnimate from './modules/numAnimate'
import sendForm from './modules/sendForm'
import serviceScroll from './modules/serviceScroll'
import serviceSlider from './modules/serviceSlider'
import slider from './modules/slider'
import validateForm from './modules/validateForm'

slider()
modal()
menu()
serviceScroll()
validateForm()
serviceSlider()
accordeon()
sendForm({
    formId: 'form1',
})
numAnimate()