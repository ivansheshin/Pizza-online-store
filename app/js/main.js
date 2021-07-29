const assortment = document.querySelectorAll('.assortment__item')
// Константы для типов пицц
const ClosedPizza = document.querySelectorAll('.closed')
const SpicyPizza = document.querySelectorAll('.spicy')
const GrillPizza = document.querySelectorAll('.grill')
const VegetarianPizza = document.querySelectorAll('.vegetarian')
const MeatPizza = document.querySelectorAll('.meat')

// Константы для фильтра
const filter = document.querySelector('.types')
const filterItem = document.querySelectorAll('types__item')
const filterAll = document.querySelector('#all');
const filterMeat = document.querySelector('#meat');
const filterVegetarian = document.querySelector('#vegetarian');
const filterGrill = document.querySelector('#grill');
const filterSpicy = document.querySelector('#spicy');
const filterClosed = document.querySelector('#closed');
// 
let arrayFiltres = [filterAll, filterMeat, filterVegetarian]
// Слушатели на фильтры

filter.addEventListener('click', e => {
    let filterItem = e.target.id;

    assortment.forEach(item => {
        if (!item.classList.contains(filterItem) && filterItem !== 'all') {
            item.style.display = 'none'
        } else {
            item.style.display = ''
        }
    })


    // assortment.forEach(item=>item.style.display = 'none')
    // pizzaType.forEach(item => item.style.display = 'block')

})