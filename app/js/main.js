function initListeners() {
    const categories = document.querySelectorAll('.types__item');


//     categories.forEach(item => item.addEventListener('click', () => {
//         const clickedStyle = document.querySelector('.clicked')
//         // if(clickedStyle === 0 || !clickedStyle)
//         console.log(!clickedStyle)
//         item.classList.toggle('clicked')
//         item.classList.toggle('types__item_hover')
        
//         if (clickedStyle){
//             item.classList.remove('clicked');
            
//         }
//         // if(!clickedStyle){
            
//         //     item.classList.toggle('clicked')
//         //     item.classList.toggle('types__item_hover')
//         // } else{
//         //     categories.forEach(item => item.classList.remove('clicked'))
//         //     item.classList.toggle('clicked')
//         //     item.classList.toggle('types__item_hover')
//         // }
        
//     }))

}


const assortment = document.querySelectorAll('.assortment__item')
// Константы для типов пицц
const selectorsClosedPizza = document.querySelectorAll('.closed')
const selectorsSpicyPizza = document.querySelectorAll('.spicy')
const selectorsGrillPizza = document.querySelectorAll('.grill')
const selectorsVegetarianPizza = document.querySelectorAll('.vegetarian')
const selectorsMeatPizza = document.querySelectorAll('.meat')

// Константы для кнопок фильтра
const filterAll = document.querySelector('#all');
const filterMeat = document.querySelector('#meat');
const filterVegetarian = document.querySelector('#vegetarian');
const filterGrill = document.querySelector('#grill');
const filterSpicy = document.querySelector('#spicy');
const filterClosed = document.querySelector('#closed');
// 
// Слушатели на фильтры
filterAll.addEventListener('click', ()=>{
    assortment.forEach(item=>item.style.display = 'block')
})
filterMeat.addEventListener('click', ()=>{
    assortment.forEach(item=>item.style.display = 'none')
    selectorsMeatPizza.forEach(item => item.style.display = 'block')
})
filterVegetarian.addEventListener('click', ()=>{
    assortment.forEach(item=>item.style.display = 'none')
    selectorsVegetarianPizza.forEach(item => item.style.display = 'block')
})
filterGrill.addEventListener('click', ()=>{
    assortment.forEach(item=>item.style.display = 'none')
    selectorsGrillPizza.forEach(item => item.style.display = 'block')
})
filterSpicy.addEventListener('click', ()=>{
    assortment.forEach(item=>item.style.display = 'none')
    selectorsSpicyPizza.forEach(item => item.style.display = 'block')
})
filterClosed.addEventListener('click', ()=>{
    assortment.forEach(item=>item.style.display = 'none')
    selectorsClosedPizza.forEach(item => item.style.display = 'block')
})

// 




initListeners();