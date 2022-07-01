/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */
export function createPizzaStore(assortment) {
  const request = indexedDB.open('PizzaStore');
  let db;

  request.onupgradeneeded = function () {
    const dataBase = request.result;
    dataBase.createObjectStore('assortment', {
      keyPath: 'assortmentKey',
    });
  };

  request.onsuccess = function () {
    db = request.result;
    const transaction = db.transaction('assortment', 'readwrite');
    const assortmentStore = transaction.objectStore('assortment');
    assortment.forEach((assortmentItem) => {
      assortmentStore.add({
        title: assortmentItem.title,
        imgSrc: assortmentItem.imgSrc,
        altImg: assortmentItem.altImg,
        dough: assortmentItem.dough,
        sizes: assortmentItem.sizes,
        price: assortmentItem.price,
        filterKey: assortmentItem.filterKey,
        assortmentKey: assortmentItem.id,
      });
    });
  };
}
