const assortment = document.querySelectorAll('.assortment__item')


// Константы для фильтра
const filter = document.querySelector('.types')
const filterAllItem = document.querySelectorAll('types__item')
// 
// Слушатели на фильтры

filter.addEventListener('click', e => {
    if(e.target.tagName !== 'LI') return 

    const filterId = e.target.id;
    const filterItem = e.target

    if(!filterItem.classList.contains('clicked')){
        filterItem.classList.add('clicked')
    } else{
        filterItem.classList.remove('clicked')

    }

    assortment.forEach(item => {
        if (!item.classList.contains(filterId) && filterId !== 'all') {
            item.style.display = 'none'
        } else {
            item.style.display = ''
        }
    })

})