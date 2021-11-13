export class SelectParameters {
  constructor() {
    this.pizzaInformationNode = document.querySelector('.pizza-information')
    this.pizzaTypeContainerSelector = 'pizza-information__type'
    this.pizzaSizeContainerSelector = 'pizza-information__size'


    this.init()
  }
  init() {
    this.selectPizzaType()
  }
  selectPizzaType() {
    const pizzaTypeContainer = this.pizzaInformationNode.querySelector(`.${this.pizzaTypeContainerSelector}`)
    console.log(pizzaTypeContainer)
  }
}