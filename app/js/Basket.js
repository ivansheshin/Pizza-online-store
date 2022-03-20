const defaultParams = {
  assortmentItemSelector: '.assortment__item',
  assortmentButtonSelector: '.assortment__btn',
  assortmentActiveButtonSelector: 'assortment__btn_active',
};

export default class Basket {
  constructor(params) {
    this.params = {
      ...defaultParams,
      ...params,
    };

    this.init();
  }

  init() {
    const {
      assortmentItemSelector,
      assortmentButtonSelector,
    } = this.params;

    this.selectedItems = new Set();

    const assortmentItems = document.querySelectorAll(assortmentItemSelector);

    assortmentItems.forEach((assortmentItem) => {
      const assortmentButton = assortmentItem.querySelector(assortmentButtonSelector);
      assortmentItem.addEventListener('click', ({ target }) => this.clickHandler(target, assortmentButton, assortmentItem));
    });
  }

  clickHandler(target, assortmentButton, assortmentItem) {
    const isButton = target === assortmentButton;

    if (!isButton) return;

    const { assortmentActiveButtonSelector } = this.params;

    assortmentButton.classList.toggle(assortmentActiveButtonSelector);
    const isAdded = assortmentButton.classList.contains(assortmentActiveButtonSelector);

    Basket.changeButton(assortmentButton, isAdded);
    this.addToBasket(assortmentItem);
  }

  static changeButton(assortmentButton, isAdded) {
    if (isAdded) {
      assortmentButton.innerText = 'Удалить';
    } else {
      assortmentButton.innerText = '+Добавить';
    }
  }

  addToBasket(assortmentItem) {
    const assortmentItemInfo = {
      itemPrice: assortmentItem.querySelector('.assortment__price').textContent,
      itemAmount: 'Нема пока',
      itemType: assortmentItem.querySelector('.pizza-information__type-item_selected').textContent,
      itemTitle: assortmentItem.querySelector('.assortment__pizza-name').textContent,
    };

    this.selectedItems.add({
      itemPrice: 1,
      itemAmount: 'Нема пока',
      itemType: 2,
      itemTitle: 3,
    });
  }
}
