export class SelectParameters {
  constructor(pizzaInformationContainers) {
    this.pizzaInformationContainers = pizzaInformationContainers

    this.pizzaTypeItemSelector = 'pizza-information__type-item'
    this.pizzaSelectedTypeItemSelector = 'pizza-information__type-item_selected'

    this.pizzaSizeItemSelector = 'pizza-information__size-item'
    this.pizzaSelectedSizeItemSelector = 'pizza-information__size-item_selected'

    this.init()

  }

  init() {
    this.selectParameters(this.pizzaTypeItemSelector, this.pizzaSelectedTypeItemSelector)
    this.selectParameters(this.pizzaSizeItemSelector, this.pizzaSelectedSizeItemSelector)

  }

  selectParameters(parameter, parameterSelected) {
    this.pizzaInformationContainers.forEach(container => {
      const pizzaParameters = container.querySelectorAll(`.${parameter}`)

      pizzaParameters.forEach((parameter, index) => {
        if (index === 0) parameter.classList.add(parameterSelected)

        parameter.addEventListener('click', ({target}) => {
          const selectedParameter = [...pizzaParameters].find(parameter => parameter.classList.contains(parameterSelected))

          selectedParameter.classList.remove(parameterSelected)
          target.classList.add(parameterSelected)

        })
      })
    })
  }

}