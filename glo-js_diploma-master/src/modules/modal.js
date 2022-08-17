const modal = () => {
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalCallback = document.querySelector('.modal-callback')

    const toggleModal = (e) => {
        if (e.target.closest('.callback-btn') || e.target.closest('.button-services') || e.target.closest('.services-item')) {
            e.preventDefault();
            modalCallback.style.display = 'block'
            modalOverlay.style.display = 'block'
        }
        if (e.target.closest('.modal-close') || e.target.closest('.modal-overlay')) {
            modalCallback.style.display = 'none'
            modalOverlay.style.display = 'none'
        }
    }
    document.addEventListener("click", (e) => toggleModal(e));
}

export default modal