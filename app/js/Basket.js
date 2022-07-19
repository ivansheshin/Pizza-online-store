const defaultParams = {
  assortmentItemSelector: '.assortment__item',
  assortmentButtonSelector: '.assortment__btn',
  assortmentActiveButtonSelector: 'assortment__btn_active',
  amountSelector: '.order__amount',
  sumBasketSelector: '.order__price',
  priceSelector: '.assortment__price',
  pizzaNameSelector: '.assortment__pizza-name',
  pizzaSelectedTypeSelector: '.pizza-information__type-item_selected',
  pizzaSelectedSizeSelector: '.pizza-information__size-item_selected',
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
      priceSelector,
      sumBasketSelector,
      amountSelector,
    } = this.params;

    this.pizzaCollection = [];
    this.sum = 0;

    this.amountGoodsItem = document.querySelector(amountSelector);
    this.sumBasket = document.querySelector(sumBasketSelector);

    this.pizzaCollectionString = localStorage.getItem('pizzaCollection');
    this.pizzaCollectionArr = JSON.parse(this.pizzaCollectionString);

    this.setIdCollectionFromStorage();
    this.setBasketInfoFromStorage();
    const assortmentItems = document.querySelectorAll(assortmentItemSelector);
    assortmentItems.forEach((assortmentItem) => {
      const { pizzaNameSelector, pizzaSelectedTypeSelector, pizzaSelectedSizeSelector } = this.params;

      const pizzaName = assortmentItem.querySelector(this.params.pizzaNameSelector);
      const pizzaSelectedSize = assortmentItem.querySelector(this.params.pizzaSelectedSizeSelector);
      const pizzaSelectedType = assortmentItem.querySelector(this.params.pizzaSelectedTypeSelector);

      const assortmentButton = assortmentItem.querySelector(assortmentButtonSelector);
      this.initBtnsState(assortmentItem, assortmentButton);

      const priceElem = assortmentItem.querySelector(priceSelector);
      this.price = Number(priceElem.id);

      assortmentItem.addEventListener('click', ({ target }) => this.clickHandler(target, assortmentButton, assortmentItem));
      // this.savePizzaCollectionToStorage(assortmentItem);
    });
  }

  clickHandler(target, assortmentButton, assortmentItem) {
    const isButton = target === assortmentButton;

    if (!isButton) return;

    this.switchAddBtnState(assortmentButton, assortmentItem);
    this.setBasketInfoToStorage();
    this.setBasketInfoFromStorage(assortmentItem);
  }

  switchAddBtnState(assortmentButton, assortmentItem) {
    assortmentButton.classList.toggle(this.params.assortmentActiveButtonSelector);
    const isAdded = assortmentButton.classList.contains(this.params.assortmentActiveButtonSelector);

    if (isAdded) {
      assortmentButton.innerText = 'Удалить';
      this.addToBasket(assortmentItem);
    } else {
      assortmentButton.innerText = '+Добавить';
      this.removeFromBasket(assortmentItem);
    }
  }

  addToBasket(assortmentItem) {
    const { pizzaNameSelector, pizzaSelectedTypeSelector, pizzaSelectedSizeSelector } = this.params;

    const pizzaName = assortmentItem.querySelector(pizzaNameSelector);
    const pizzaSelectedSize = assortmentItem.querySelector(pizzaSelectedSizeSelector);
    const pizzaSelectedType = assortmentItem.querySelector(pizzaSelectedTypeSelector);

    this.pizzaCollection.push({
      name: pizzaName.textContent,
      size: pizzaSelectedSize.textContent,
      type: pizzaSelectedType.textContent,
      id: assortmentItem.id,
    });

    this.sum += this.price;
  }

  removeFromBasket(assortmentItem) {
    const index = this.pizzaCollection.findIndex((item) => item.id === assortmentItem.id);
    this.pizzaCollection.splice(index, 1);
    this.sum -= this.price;
  }

  setBasketInfoToStorage() {
    const idCollectionString = JSON.stringify(this.pizzaCollection);
    localStorage.setItem('pizzaCollection', idCollectionString);
    localStorage.setItem('basketSum', this.sum);
    localStorage.setItem('amountGoods', this.pizzaCollection.length);
  }

  setBasketInfoFromStorage() {
    const sum = localStorage.getItem('basketSum');
    const amountAddedPizza = localStorage.getItem('amountGoods');
    if (!sum || !amountAddedPizza) return;

    this.sum = Number(sum);
    this.sumBasket.textContent = sum;
    this.amountGoodsItem.textContent = amountAddedPizza;
  }

  initBtnsState(assortmentItem, assortmentButton) {
    if (!this.pizzaCollectionString) return;
    const idArray = [];
    const sizeArray = [];
    const typeArray = [];

    this.pizzaCollectionArr.forEach((pizzaItem) => {
      idArray.push(pizzaItem.id);
      sizeArray.push(pizzaItem.size);
    });

    console.log(sizeArray);

    const isAddedId = idArray.includes(assortmentItem.id);

    if (isAddedId) {
      assortmentButton.classList.add(this.params.assortmentActiveButtonSelector);
      assortmentButton.innerText = 'Удалить';
    }
  }

  setIdCollectionFromStorage() {
    if (this.pizzaCollectionString) {
      this.pizzaCollection = this.pizzaCollection.concat(this.pizzaCollectionArr);
    }
  }
}

// TODO ноебходимо сохранить размер пиццы и вид теста https://i.imgur.com/DJ7uVl2.png, мб объединить все в одно