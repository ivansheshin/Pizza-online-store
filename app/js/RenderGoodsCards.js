export class RenderGoodsCards {
  constructor(data, container) {
    this.data = data;
    this.container = container;
  }

  render() {
    this.data.map(item => {
      this.container.insertAdjacentHTML('beforeend', `
        <div class="assortment__item" data-category="${item.filterKey}">
          <img src="${item.imgAddress}" width="260" alt="${item.altImg}">
          <h2 class="assortment__pizza-name">${item.title}</h2>
          <div class="pizza-information">
            <div class="pizza-information__type">
                  ${item.dough.map(item => `<span class="pizza-information__type-item">${item}</span>`).join('')}
            </div>
            <div class="pizza-information__size">
                   ${item.sizes.map(item => `<span class="pizza-information__size-item">${item}</span>`).join('')}
            </div>
          </div>
          <div class="assortment__price-to-add">
            <span class="assortment__price">от ${item.price}</span>
            <button class="assortment__btn">+Добавить</button>
          </div>
        </div>`)
    })
  }
}
