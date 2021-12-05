import 'Style/style.scss';
import assortment from 'Data/assortment.json';
import { RenderGoodsCards } from 'Script/RenderGoodsCards';
import { Filter } from 'Script/Filters';
import { Sort } from 'Script/Sort';
import { SelectParameters } from 'Script/SelectParameters';


document.addEventListener('DOMContentLoaded', () => {
  const assortmentContainer = document.querySelector('.assortment__list')

  const renderGoodsCards = new RenderGoodsCards(assortment, assortmentContainer)
  renderGoodsCards.render()

  const filterCategories = document.querySelectorAll('.filter-categories__item')
  new Filter(assortmentContainer, filterCategories)

  const sortContainer = document.querySelector('.sort');
  new Sort(assortmentContainer, sortContainer)

  const pizzaInformationContainers = document.querySelectorAll('.pizza-information');
  new SelectParameters(pizzaInformationContainers)
})
