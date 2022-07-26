export default class RenderGoodsCards {
  constructor(data, container) {
    this.data = data;
    this.container = container;
  }

  render(method) {
    if (!this.data) {
      this.container?.insertAdjacentHTML('beforeend', RenderGoodsCards[method]());
      return;
    }
    // eslint-disable-next-line array-callback-return
    this.data.map((item) => {
      this.container?.insertAdjacentHTML('beforeend', RenderGoodsCards[method](item));
    });
  }

  static assortmentLayout(item) {
    return `
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
    </div>
    `;
  }

  static cartGoods(item) {
    let layOut;
    if (!item) {
      layOut = `
        <main class="main-empty-cart">
          <h2 class="main-empty-cart__title">Корзина пустая</h2>
          <p class="main-empty-cart__text">Полина, ты еще не заказывала пиццу. Ошибка!<br> Чтобы заказать пиццу,
              перейди на главную страницу.</p>
          <img class="main-empty-cart__image" src="img/empty-cart.png" width="300" alt="Пустая корзина">
          <a class="main-empty-cart__link" href="index.html" aria-label="Вернуться на главную страницу">Вернуться
              назад</a>
        </main>
      `;
    } else {
      layOut = `
      <main class="main-empty-cart">
        <h2 class="main-empty-cart__title">Корзина заполнена нахуй</h2>
        <p class="main-empty-cart__text">Вероятнее всего, ты уже заказала пиццу.<br> Чтобы заказать пиццу,
            перейдите на главную страницу.</p>
        <img class="main-empty-cart__image" src="img/empty-cart.png" width="300" alt="Пустая корзина">
        <a class="main-empty-cart__link" href="index.html" aria-label="Вернуться на главную страницу">Вернуться
            назад</a>
      </main>
    `;
    }

    return layOut;
  }
}
