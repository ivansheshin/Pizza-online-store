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
          <!-- для этих картинок важно указывать высоту через атрибут height -->
          <!-- иначе при медленной загрузке сильно дергается контент -->
          <!-- можешь локально в network 'no throttling' поменять хотя бы на fast 3g, увидишь разницу -->
          <h2 class="assortment__pizza-name">${item.title}</h2>
          <!-- выше по хтмл есть h2 заголовок 'Все пиццы', вряд ли они равнозначны, значит здесь -->
          <!-- должен быть максимум h3 -->
          <div class="pizza-information">
            <div class="pizza-information__type">
                  ${item.dough.map((typeItem) => `<span class="pizza-information__type-item">${typeItem}</span>`).join('')}
            </div>
            <div class="pizza-information__size">
                   ${item.sizes.map((sizeItem) => `<span class="pizza-information__size-item">${sizeItem}</span>`).join('')}
            </div>
            <!-- если уж делаешь доступность с клавы, то почему здесь нельзя выбрать type & size? -->
          </div>
          <div class="assortment__price-to-add">
            <span class="assortment__price">от ${Object.values(item.price)[0]}</span>
            <button class="assortment__btn">+Добавить</button>
          </div>
        </div>`);
    });
  }
}
