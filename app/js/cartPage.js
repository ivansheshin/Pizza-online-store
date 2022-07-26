import RenderGoodsCards from './general/RenderGoodsCards';
import 'Style/cart.scss';

document.addEventListener('DOMContentLoaded', () => {
  const addedPizzaCollectionString = localStorage.getItem('pizzaCollection');
  const addedPizzaCollectionArr = JSON.parse(addedPizzaCollectionString);
  const basketContentContainer = document.querySelector('.content');
  console.log('хуй');
  const renderBasketGoods = new RenderGoodsCards(addedPizzaCollectionArr, basketContentContainer);
});
