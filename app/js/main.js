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
  let db;

  request.onupgradeneeded = function() {
    const dataBase = request.result;
    const store = dataBase.createObjectStore('assortment', { keyPath: 'assortmentKey' });
    // const titleIndex = store.createIndex('by_title', 'title', { unique: true });
    // const authorIndex = store.createIndex('by_author', 'author');

    assortment.forEach((assortmentItem) => {
      store.put({
        title: assortmentItem.title,
        // imgAddress: assortmentItem.imgAddress,
        // altImg: assortment.altImg,
        // dough: assortment.dough,
        // sizes: assortment.sizes,
        // price: assortment.price,
        // filterKey: assortment.filterKey,
        assortmentKey: 1,
      });
    });

    // Populate with initial data.
    // store.put({ title: 'Quarry Memories', author: 'Fred', assortmentKey: 123456 });
    // store.put({ title: 'Water Buffaloes', author: 'Fred', assortmentKey: 234567 });
    // store.put({ title: 'Bedrock Nights', author: 'Barney', assortmentKey: 345678 });
  };

  request.onsuccess = function() {
    db = request.result;
  };

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
