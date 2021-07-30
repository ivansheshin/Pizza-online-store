// Сортировка по виду пиццы
document.addEventListener('DOMContentLoaded', () => {
    // Навешивание стиля на фильтр "Все" при загрузке DOM
    const filterAll = document.querySelector('#all')
    filterAll.classList.add('clicked')

    // Константы для фильтра и его элементов
    const filter = document.querySelector('.types')
    const filterAllItem = document.querySelectorAll('.types__item')

    // Логика фильтра
    filter.addEventListener('click', e => {
        if (e.target.tagName !== 'LI') return

        const filterId = e.target.id;
        const filterItem = e.target
        // Изменение анимации элементов списка у фильтра
        if (!filterItem.classList.contains('clicked')) {
            filterAllItem.forEach(item => item.classList.remove('clicked'))
            filterItem.classList.add('clicked')
        }
        // Отображение товаров в зависимости от выбранного фильтра
        const assortment = document.querySelectorAll('.assortment__item')
        assortment.forEach(item => {
            if (!item.classList.contains(filterId) && filterId !== 'all') {
                item.style.display = 'none'
            } else {
                item.style.display = ''
            }
        })
    })
})
// Сортировка по популярности, названию и цене
function sortAssortmentAndAddPopup() {
    // Сортировка по названию
    let arrayNames = []
    const assortmentNames = document.querySelectorAll('.assortment__pizza-name')

    assortmentNames.forEach(item => {
      let itemObj =  {
            tag: item,
            name: item.textContent,
            parBlock: item.closest('.assortment__item')
        }
        arrayNames.push(itemObj)
        

    })
console.log(arrayNames)

    arrayNames.sort((a, b) =>{
        a.name > b.name?1:-1
    })
    arrayNames.forEach(item => {
        
    })


    // Попап для сортировки
    const sortTag = document.querySelector('.sort')
    const sortList = document.querySelector('.sort__list')
    const sortItem = document.querySelectorAll('.sort__item')
    const sortButton = document.querySelector('.sort__choosen')

    sortTag.addEventListener('click', () => {
        sortList.classList.toggle('open')
    })

    // Изменение текста кнопки при выборе пункта фильтра
    sortItem.forEach(item => item.addEventListener('click', e => {
        sortButton.textContent = e.target.textContent

    }))





}
sortAssortmentAndAddPopup()