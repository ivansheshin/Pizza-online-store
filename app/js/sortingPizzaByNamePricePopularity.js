export function sortAssortmentAndAddPopup() {

    
    popupForSortList()
    // Изменение текста кнопки при выборе пункта фильтра
    sortItem.forEach(item => item.addEventListener('click', e => {
        const filterItem = e.target;
        sortButton.textContent = filterItem.textContent
        if (filterItem.textContent === 'Названию') {
            // const filteredArrayByName = PizzaAssortment;
            PizzaAssortment.sort((frstElem, scndElem) => {
                if (frstElem.title > scndElem.title) return 1;
                if (frstElem.title === scndElem.title) return 0;
                if (frstElem.title < scndElem.title) return -1;
            })
            
        }
    }))

}

function popupForSortList(){
    const sortBlock = document.querySelector('.sort')
    const sortList = document.querySelector('.sort__list')
    const sortItem = document.querySelectorAll('.sort__item')
    const sortButton = document.querySelector('.sort__choosen')

    sortBlock.addEventListener('click', () => {
        sortList.classList.toggle('open')
    })
}