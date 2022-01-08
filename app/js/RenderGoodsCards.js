export default class RenderGoodsCards {
  constructor(data, container) {
    this.data = data;
    this.container = container;
    this.init();
  }

  init() {
    this.render();
    this.renderPrice();
  }

  render() {
    // eslint-disable-next-line array-callback-return
    this.data.map((item) => {
      this.container.insertAdjacentHTML('beforeend', `
        <div class="assortment__item" data-category="${item.filterKey}">
          <img src="${item.imgAddress}" width="260" alt="${item.altImg}">
          <h2 class="assortment__pizza-name">${item.title}</h2>
          <div class="pizza-information">
            <div class="pizza-information__type">
                  ${item.dough.map((typeItem) => `<span class="pizza-information__type-item">${typeItem}</span>`).join('')}
            </div>
            <div class="pizza-information__size">
                   ${item.sizes.map((sizeItem) => `<span class="pizza-information__size-item">${sizeItem}</span>`).join('')}
            </div>
          </div>
          <div class="assortment__price-to-add">
            <span class="assortment__price">от ${Object.values(item.price)[0]}</span>
            <button class="assortment__btn">+Добавить</button>
          </div>
        </div>`);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  renderPrice() {
    const pizzaContainer = document.getElementsByClassName('assortment__item');
    [...pizzaContainer].forEach((pizzaContainerItem) => {
      pizzaContainerItem.addEventListener('click', ({ target }) => {
        const pizzaNameElement = pizzaContainerItem.querySelector('.assortment__pizza-name');
        const pizzaName = pizzaNameElement.textContent;
        const pizzaObject = this.data.find((item) => item.title === pizzaName);

        const isSizeItemTarget = target.classList.contains('pizza-information__size-item');

        if (isSizeItemTarget) {
          const choosenSize = target.textContent;
          const returnPrice = pizzaObject.price[choosenSize];

          const pizzaPriceElement = pizzaContainerItem.querySelector('.assortment__price');

          pizzaPriceElement.textContent = `от ${returnPrice}`;
        }
      });
    });
  }
}
