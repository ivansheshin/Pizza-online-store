import {foo} from './HTMLcreater';

import '../scss/style.scss'

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

        const arrayTagNames = []
        const assortmentNames = document.querySelectorAll('.assortment__pizza-name')
        assortmentNames.forEach(item =>  arrayTagNames.push(item))
        
        if (e.target.textContent == 'Популярности') {
            const popular = arrayTagNames.slice()
            arrayTagNames.forEach((item, index) =>{
                item.textContent = popular[index].textContent
            })

        }
        // Сортировка по названию
        if (e.target.textContent == 'Названию') {
            

            const sortedNames = arrayTagNames.slice().sort((a, b) => {
                if (a.textContent > b.textContent) return 1
                if (a.textContent < b.textContent) return -1
            })

            arrayTagNames.forEach((item, index) => {
                item.textContent = sortedNames[index].textContent
            })
            console.log(arrayTagNames)
        }

    }))

}
sortAssortmentAndAddPopup()