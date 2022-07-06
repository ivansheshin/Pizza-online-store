/* eslint-disable no-new */
/* eslint-disable import/no-unresolved */
import 'Style/style.scss';
import assortment from 'Data/assortment.json';
import RenderGoodsCards from 'Script/RenderGoodsCards';
import Filter from 'Script/Filters';
import Sort from 'Script/Sort';
import SelectParameters from 'Script/SelectParameters';
import SelectSize from 'Script/SelectSize';
// import { createPizzaStore } from 'Script/main';
import Basket from 'Script/Basket';

document.addEventListener('DOMContentLoaded', () => {
  // createPizzaStore(assortment);

  const assortmentContainer = document.querySelector('.assortment__list');

  const renderGoods = new RenderGoodsCards(assortment, assortmentContainer);
  renderGoods.render();

  const filterCategories = document.querySelectorAll('.filter-categories__item');
  new Filter(assortmentContainer, filterCategories);

  const sortContainer = document.querySelector('.sort');
  new Sort(assortmentContainer, sortContainer);

  const pizzaInformationContainers = document.querySelectorAll('.pizza-information');
  new SelectParameters(pizzaInformationContainers);

  new SelectSize(assortment);

  new Basket(assortment);
});
