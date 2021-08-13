
export function HTMLCreateGoods(array) {
    array.map(item => {
        const containerForPizza = document.querySelector('.assortment__list');
        containerForPizza.insertAdjacentHTML('beforeend', `
            <div class="assortment__item" >
                <img src="${item.imgAdress}" width="260" alt="${item.altImg}">
                <h2 class="assortment__pizza-name">${item.title}</h2>
                <div class="pizza-information">
                    <div class="pizza-information__type">
                        ${item.dough.map(item => {
                            return `<span>${item}</span>`}).join('')}
                    </div>
                    <div class="pizza-information__size">
                    ${item.sizes.map(item => { 
                        return `<span>${item}</span>`}).join('')}
                    </div>
                </div>
                <div class="assortment__price-to-add">
                    <span class="assortment__price">от ${item.price}</span>
                    <button class="assortment__btn">+Добавить</button>
                </div>
            </div>`)
            
    })
}

