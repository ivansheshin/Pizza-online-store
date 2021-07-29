

const assortment = document.querySelectorAll('.assortment__item')
// Константы для типов пицц
const ClosedPizza = document.querySelectorAll('.closed')
const SpicyPizza = document.querySelectorAll('.spicy')
const GrillPizza = document.querySelectorAll('.grill')
const VegetarianPizza = document.querySelectorAll('.vegetarian')
const MeatPizza = document.querySelectorAll('.meat')

// Константы для фильтра
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


filterAll.addEventListener('click', ()=>{
    filterAll.classList.add('clicked')
    assortment.forEach(item=>item.style.display = 'block')
})

function initListenersForFiltres(element, assortment, pizzaType ){
    element.addEventListener('click', ()=>{
        element.classList.add('clicked')
        assortment.forEach(item=>item.style.display = 'none')
        pizzaType.forEach(item => item.style.display = 'block')
    })
}

initListenersForFiltres(filterMeat,assortment,MeatPizza)
initListenersForFiltres(filterVegetarian,assortment,VegetarianPizza)
initListenersForFiltres(filterGrill,assortment,GrillPizza)
initListenersForFiltres(filterSpicy,assortment,SpicyPizza)
initListenersForFiltres(filterClosed,assortment,ClosedPizza)

