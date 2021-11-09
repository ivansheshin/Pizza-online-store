export class Filter {
  constructor(container, categories) {
    this.container = container
    this.categories = categories
    this.activeCategorySelector = 'filter-categories__item_active'
    this.hideCardSelector = 'assortment__item_hide'
    this.init()
  }

  init() {
    this.categories.forEach(category => category.addEventListener('click', () => {
      this.handleCategorySelect(category)
    }))
  }

  handleCategorySelect(selectedCategory) {
    const activeCategory = [...this.categories]
        .find(category => category.classList.contains(this.activeCategorySelector))
    if (selectedCategory === activeCategory) return

    activeCategory.classList.remove(this.activeCategorySelector)
    selectedCategory.classList.add(this.activeCategorySelector)

    this.filter(selectedCategory)
  }

  filter(selectedCategory) {
    const cards = this.container.querySelectorAll('.assortment__item')
    const selectedCategoryName = selectedCategory.textContent.toLowerCase()
    const unmatchedCards = [...cards].filter(card => card.dataset.category !== selectedCategoryName)

    if (unmatchedCards.length === cards.length) {
      cards.forEach(card => card.classList.remove(this.hideCardSelector))
      return
    }

    const matchedCards = [...cards].filter(card => card.dataset.category === selectedCategoryName)

    unmatchedCards.forEach(unmatchedCard => unmatchedCard.classList.add(this.hideCardSelector))
    matchedCards.forEach(matchedCard => matchedCard.classList.remove(this.hideCardSelector))
  }
}
