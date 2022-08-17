const validateForm = () => {
    const formCallback = document.querySelectorAll('form')

    formCallback.forEach((item) => {
        item.addEventListener('input', (e) => {
            if (e.target.matches('input[name="fio"]')) {
                e.target.value = e.target.value.replace(/[^А-ЯЁа-яё\s]/, '');
            } else if (e.target.matches('input[name="tel"]')) {
                e.target.value = e.target.value.replace(/[^\d\+]/gi, '');
            }
        })
    })

}

export default validateForm