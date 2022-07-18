export default class RenderGoodsCards {
  constructor(data, container) {
    this.data = data;
    this.container = container;
  }

  render() {
    // eslint-disable-next-line array-callback-return
    this.data.map((item) => {
      this.container.insertAdjacentHTML('beforeend', `
        <div class="assortment__item" id="${item.id}" data-category="${item.filterKey}">
          <img src="${item.imgSrc}" width="260" alt="${item.altImg}">
          <h2 class="assortment__pizza-name">${item.title}</h2>
          <div class="pizza-information">
            <div class="pizza-information__type">
                  ${item.dough.map((typeItem) => `<span class="pizza-information__type-item" data-type='${typeItem}'>${typeItem}</span>`).join('')}
            </div>
            <div class="pizza-information__size">
                   ${item.sizes.map((sizeItem) => `<span class="pizza-information__size-item" data-size='${sizeItem}'>${sizeItem}</span>`).join('')}
            </div>
          </div>
          <div class="assortment__price-to-add">
            <span class="assortment__price" id="${Object.values(item.price)[0]}">от ${Object.values(item.price)[0]}</span>
            <button class="assortment__btn">+Добавить</button>
          </div>
        </div>`);
    });
  }
}
