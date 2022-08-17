const sendForm = ({
    formId,
}) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const modal = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')

    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо наш менеджер с вами свяжется'

    const validate = (list) => {
        let success = true
        list.forEach(inputList => {
            if (inputList.name == 'fio' && inputList.value.length < 2) {
                success = false
            }
            if (inputList.name == 'tel' && inputList.value[0] === inputList.value[1]) {
                success = false
            }
        })
        return success
    }

    const sendData = async (data) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => [
            formBody[key] = val
        ])

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText
                    formElements.forEach(input => {
                        if (input.closest('.feedback')) {} else {
                            input.value = ''
                        }
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
                .finally(() => {
                    setTimeout(() => statusBlock.textContent = '', 2000);
                    setTimeout(() => {
                        modal.style.display = 'none'
                        modalOverlay.style.display = 'none'
                        document.body.style.overflow = ''
                    }, 4000);
                })
        } else {
            statusBlock.textContent = 'Данные не валидны!!!'
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место')
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            submitForm()
        })
    } catch (error) {
        console.log(error.message)
    }

}

export default sendForm