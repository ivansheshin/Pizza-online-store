export class SelectParameters {
  constructor(pizzaInformationContainers) {
    this.pizzaInformationContainers = pizzaInformationContainers
    this.pizzaTypeItemSelector = 'pizza-information__type-item'
    this.pizzaTypeItemSelectedSelector = 'pizza-information__type-item_selected'
    this.pizzaSizeItemSelector = 'pizza-information__size-item'
    this.pizzaSizeItemSelectedSelector = 'pizza-information__size-item_selected'

    this.init()

  }

  init() {
    this.selectParameters(this.pizzaTypeItemSelector, this.pizzaTypeItemSelectedSelector)
    this.selectParameters(this.pizzaSizeItemSelector, this.pizzaSizeItemSelectedSelector)

  }

  selectParameters(parameter, parameterSelected) {
    this.pizzaInformationContainers.forEach(pizzaInformationContainer => {
      const pizzaParameters = pizzaInformationContainer.querySelectorAll(`.${parameter}`)

      pizzaParameters.forEach((pizzaSize, index) => {
        if (index === 0) pizzaSize.classList.add(`${parameterSelected}`)

        pizzaSize.addEventListener('click', ({target}) => {
          const selectedParameter = [...pizzaParameters].find(item => item.classList.contains(`${parameterSelected}`))

          selectedParameter.classList.remove(`${parameterSelected}`)
          target.classList.add(`${parameterSelected}`)

        })
      })
    })
  }

}