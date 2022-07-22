export default class SelectParameters {
  constructor(pizzaInformationContainers) {
    this.pizzaInformationContainers = pizzaInformationContainers;

    this.pizzaTypeItemSelector = 'pizza-information__type-item';
    this.pizzaSelectedTypeItemSelector = 'pizza-information__type-item_selected';

    this.pizzaSizeItemSelector = 'pizza-information__size-item';
    this.pizzaSelectedSizeItemSelector = 'pizza-information__size-item_selected';

    this.init();
  }

  init() {
    this.selectParameters(this.pizzaTypeItemSelector, this.pizzaSelectedTypeItemSelector);
    this.selectParameters(this.pizzaSizeItemSelector, this.pizzaSelectedSizeItemSelector);
  }

  selectParameters(parameter, parameterSelected) {
    this.pizzaInformationContainers.forEach((container) => {
      const pizzaParameters = container.querySelectorAll(`.${parameter}`);

      pizzaParameters.forEach((parameterItem, index) => {
        if (index === 0) parameterItem.classList.add(parameterSelected);

        parameterItem.addEventListener('click', ({ target }) => {
          const selectedParameter = [...pizzaParameters]
            // eslint-disable-next-line no-shadow
            .find((parameterItem) => parameterItem.classList.contains(parameterSelected));

          selectedParameter.classList.remove(parameterSelected);
          target.classList.add(parameterSelected);
        });
      });
    });
  }
}
