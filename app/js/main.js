/* eslint-disable no-new */
/* eslint-disable import/no-unresolved */
import 'Style/style.scss';
import assortment from 'Data/assortment.json';
import RenderGoodsCards from 'Script/RenderGoodsCards';
import Filter from 'Script/Filters';
import Sort from 'Script/Sort';
import SelectParameters from 'Script/SelectParameters';
import SelectSize from 'Script/SelectSize';
import Basket from 'Script/Basket';

document.addEventListener('DOMContentLoaded', () => {
  const request = indexedDB.open('PizzaStore');

  const db = request.result;
  const store = db.createObjectStore('books', { keyPath: 'isbn' });
  const titleIndex = store.createIndex('by_title', 'title', { unique: true });
  const authorIndex = store.createIndex('by_author', 'author');

  // Populate with initial data.
  store.put({ title: 'Quarry Memories', author: 'Fred', isbn: 123456 });
  store.put({ title: 'Water Buffaloes', author: 'Fred', isbn: 234567 });
  store.put({ title: 'Bedrock Nights', author: 'Barney', isbn: 345678 });


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

  new Basket();
});
