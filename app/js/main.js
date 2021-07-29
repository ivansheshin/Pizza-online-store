const assortment = document.querySelectorAll('.assortment__item')
// Константы для фильтра
const filter = document.querySelector('.types')
const filterAllItem = document.querySelectorAll('.types__item')
// 
// Слушатели на фильтры
console.log(filterAllItem)
filter.addEventListener('click', e => {
    if (e.target.tagName !== 'LI') return

    const filterId = e.target.id;
    const filterItem = e.target

    if (!filterItem.classList.contains('clicked')) {
        filterAllItem.forEach(item => item.classList.remove('clicked'))
        filterItem.classList.add('clicked')
    }

    assortment.forEach(item => {
        if (!item.classList.contains(filterId) && filterId !== 'all') {
            item.style.display = 'none'
        } else {
            item.style.display = ''
        }
    })

})