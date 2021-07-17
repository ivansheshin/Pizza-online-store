function initListeners() {
    const categories = document.querySelectorAll('.types__item');


    categories.forEach(item => item.addEventListener('click', () => {
        const clickedStyle = document.querySelector('.clicked')
        item.classList.toggle('clicked')
        item.classList.remove('types__item_hover')
        
    }))

}
initListeners()