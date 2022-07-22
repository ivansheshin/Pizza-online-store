/* eslint-disable no-new */
/* eslint-disable import/no-unresolved */
import 'Style/style.scss';
import assortment from 'Data/assortment.json';
import Filter from 'MainPage/Filters';
import Sort from 'MainPage/Sort';
import SelectParameters from 'MainPage/SelectParameters';
import SelectSize from 'MainPage/SelectSize';
// import { createPizzaStore } from 'MainPage/main';
import Basket from 'MainPage/Basket';
import RenderGoodsCards from './general/RenderGoodsCards';

document.addEventListener('DOMContentLoaded', () => {
  // createPizzaStore(assortment);

  const assortmentContainer = document.querySelector('.assortment__list');

  const renderAssortment = new RenderGoodsCards(assortment, assortmentContainer);
  renderAssortment.render();

  const filterCategories = document.querySelectorAll('.filter-categories__item');
  new Filter(assortmentContainer, filterCategories);

  const sortContainer = document.querySelector('.sort');
  new Sort(assortmentContainer, sortContainer);

  const pizzaInformationContainers = document.querySelectorAll('.pizza-information');
  new SelectParameters(pizzaInformationContainers);

  new SelectSize(assortment);

  new Basket();
});
