/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Basket.js":
/*!**********************!*\
  !*** ./js/Basket.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Basket)\n/* harmony export */ });\nconst defaultParams = {\n  assortmentItemSelector: '.assortment__item',\n  assortmentButtonSelector: '.assortment__btn',\n  assortmentActiveButtonSelector: 'assortment__btn_active',\n};\n\nclass Basket {\n  constructor(params) {\n    this.params = {\n      ...defaultParams,\n      ...params,\n    };\n\n    this.init();\n  }\n\n  init() {\n    const {\n      assortmentItemSelector,\n      assortmentButtonSelector,\n    } = this.params;\n\n    this.selectedItems = new Set();\n\n    const assortmentItems = document.querySelectorAll(assortmentItemSelector);\n\n    assortmentItems.forEach((assortmentItem) => {\n      const assortmentButton = assortmentItem.querySelector(assortmentButtonSelector);\n      assortmentItem.addEventListener('click', ({ target }) => this.clickHandler(target, assortmentButton, assortmentItem));\n    });\n  }\n\n  clickHandler(target, assortmentButton, assortmentItem) {\n    const isButton = target === assortmentButton;\n\n    if (!isButton) return;\n\n    const { assortmentActiveButtonSelector } = this.params;\n\n    assortmentButton.classList.toggle(assortmentActiveButtonSelector);\n    const isAdded = assortmentButton.classList.contains(assortmentActiveButtonSelector);\n\n    Basket.changeButton(assortmentButton, isAdded);\n    this.addToBasket(assortmentItem);\n  }\n\n  static changeButton(assortmentButton, isAdded) {\n    if (isAdded) {\n      assortmentButton.innerText = 'Удалить';\n    } else {\n      assortmentButton.innerText = '+Добавить';\n    }\n  }\n\n  addToBasket(assortmentItem) {\n    const assortmentItemInfo = {\n      itemPrice: assortmentItem.querySelector('.assortment__price').textContent,\n      itemAmount: 'Нема пока',\n      itemType: assortmentItem.querySelector('.pizza-information__type-item_selected').textContent,\n      itemTitle: assortmentItem.querySelector('.assortment__pizza-name').textContent,\n    };\n\n    this.selectedItems.add({\n      itemPrice: 1,\n      itemAmount: 'Нема пока',\n      itemType: 2,\n      itemTitle: 3,\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./js/Basket.js?");

/***/ }),

/***/ "./js/Filters.js":
/*!***********************!*\
  !*** ./js/Filters.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Filter)\n/* harmony export */ });\nclass Filter {\n  constructor(container, categories) {\n    this.container = container;\n    this.categories = categories;\n    this.activeCategorySelector = 'filter-categories__item_active';\n    this.hideCardSelector = 'assortment__item_hide';\n    this.init();\n  }\n\n  init() {\n    this.categories.forEach((category) => category.addEventListener('click', () => {\n      this.handleCategorySelect(category);\n    }));\n  }\n\n  handleCategorySelect(selectedCategory) {\n    const activeCategory = [...this.categories]\n      .find((category) => category.classList.contains(this.activeCategorySelector));\n    if (selectedCategory === activeCategory) return;\n\n    activeCategory.classList.remove(this.activeCategorySelector);\n    selectedCategory.classList.add(this.activeCategorySelector);\n\n    this.filter(selectedCategory);\n  }\n\n  filter(selectedCategory) {\n    const cards = this.container.querySelectorAll('.assortment__item');\n    const selectedCategoryName = selectedCategory.textContent.toLowerCase();\n    const unmatchedCards = [...cards]\n      .filter((card) => card.dataset.category !== selectedCategoryName);\n\n    if (unmatchedCards.length === cards.length) {\n      cards.forEach((card) => card.classList.remove(this.hideCardSelector));\n      return;\n    }\n\n    const matchedCards = [...cards]\n      .filter((card) => card.dataset.category === selectedCategoryName);\n\n    unmatchedCards.forEach((unmatchedCard) => unmatchedCard.classList.add(this.hideCardSelector));\n    matchedCards.forEach((matchedCard) => matchedCard.classList.remove(this.hideCardSelector));\n  }\n}\n\n\n//# sourceURL=webpack:///./js/Filters.js?");

/***/ }),

/***/ "./js/RenderGoodsCards.js":
/*!********************************!*\
  !*** ./js/RenderGoodsCards.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RenderGoodsCards)\n/* harmony export */ });\nclass RenderGoodsCards {\n  constructor(data, container) {\n    this.data = data;\n    this.container = container;\n  }\n\n  render() {\n    // eslint-disable-next-line array-callback-return\n    this.data.map((item) => {\n      this.container.insertAdjacentHTML('beforeend', `\n        <div class=\"assortment__item\" id=\"${item.id}\"\" data-category=\"${item.filterKey}\">\n          <img src=\"${item.imgAddress}\" width=\"260\" alt=\"${item.altImg}\">\n          <h2 class=\"assortment__pizza-name\">${item.title}</h2>\n          <div class=\"pizza-information\">\n            <div class=\"pizza-information__type\">\n                  ${item.dough.map((typeItem) => `<span class=\"pizza-information__type-item\">${typeItem}</span>`).join('')}\n            </div>\n            <div class=\"pizza-information__size\">\n                   ${item.sizes.map((sizeItem) => `<span class=\"pizza-information__size-item\">${sizeItem}</span>`).join('')}\n            </div>\n          </div>\n          <div class=\"assortment__price-to-add\">\n            <span class=\"assortment__price\">от ${Object.values(item.price)[0]}</span>\n            <button class=\"assortment__btn\">+Добавить</button>\n          </div>\n        </div>`);\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./js/RenderGoodsCards.js?");

/***/ }),

/***/ "./js/SelectParameters.js":
/*!********************************!*\
  !*** ./js/SelectParameters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SelectParameters)\n/* harmony export */ });\nclass SelectParameters {\n  constructor(pizzaInformationContainers) {\n    this.pizzaInformationContainers = pizzaInformationContainers;\n\n    this.pizzaTypeItemSelector = 'pizza-information__type-item';\n    this.pizzaSelectedTypeItemSelector = 'pizza-information__type-item_selected';\n\n    this.pizzaSizeItemSelector = 'pizza-information__size-item';\n    this.pizzaSelectedSizeItemSelector = 'pizza-information__size-item_selected';\n\n    this.init();\n  }\n\n  init() {\n    this.selectParameters(this.pizzaTypeItemSelector, this.pizzaSelectedTypeItemSelector);\n    this.selectParameters(this.pizzaSizeItemSelector, this.pizzaSelectedSizeItemSelector);\n  }\n\n  selectParameters(parameter, parameterSelected) {\n    this.pizzaInformationContainers.forEach((container) => {\n      const pizzaParameters = container.querySelectorAll(`.${parameter}`);\n\n      pizzaParameters.forEach((parameterItem, index) => {\n        if (index === 0) parameterItem.classList.add(parameterSelected);\n\n        parameterItem.addEventListener('click', ({ target }) => {\n          const selectedParameter = [...pizzaParameters]\n            // eslint-disable-next-line no-shadow\n            .find((parameterItem) => parameterItem.classList.contains(parameterSelected));\n\n          selectedParameter.classList.remove(parameterSelected);\n          target.classList.add(parameterSelected);\n        });\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./js/SelectParameters.js?");

/***/ }),

/***/ "./js/SelectSize.js":
/*!**************************!*\
  !*** ./js/SelectSize.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SelectSize)\n/* harmony export */ });\nclass SelectSize {\n  constructor(data) {\n    this.data = data;\n    this.init();\n  }\n\n  init() {\n    const pizzaContainer = document.getElementsByClassName('assortment__item');\n    [...pizzaContainer].forEach((pizzaContainerItem) => {\n      pizzaContainerItem.addEventListener('click', ({ target }) => {\n        this.renderPrice(target, pizzaContainerItem);\n      });\n    });\n  }\n\n  renderPrice(target, pizzaContainerItem) {\n    const pizzaNameElement = pizzaContainerItem.querySelector('.assortment__pizza-name');\n    const pizzaName = pizzaNameElement.textContent;\n    const pizzaObject = this.data.find((item) => item.title === pizzaName);\n\n    const isSizeItemTarget = target.classList.contains('pizza-information__size-item');\n\n    if (isSizeItemTarget) {\n      const choosenSize = target.textContent;\n      const returnPrice = pizzaObject.price[choosenSize];\n\n      const pizzaPriceElement = pizzaContainerItem.querySelector('.assortment__price');\n\n      pizzaPriceElement.textContent = `от ${returnPrice}`;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./js/SelectSize.js?");

/***/ }),

/***/ "./js/Sort.js":
/*!********************!*\
  !*** ./js/Sort.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sort)\n/* harmony export */ });\nclass Sort {\n  constructor(container, sortContainer) {\n    this.container = container;\n    this.sortContainer = sortContainer;\n\n    this.sortMenuSelector = 'sort__list';\n    this.sortMenuItemSelector = 'sort__item';\n    this.sortMenuOpenSelector = 'sort__list_open';\n    this.sortMenuButtonSelector = 'sort__button';\n\n    this.pizzaAssortmentListSelector = 'assortment__list';\n    this.pizzaAssortmentListNode = document.querySelector(`.${this.pizzaAssortmentListSelector}`);\n    this.pizzaNamesSelector = 'assortment__pizza-name';\n    this.pizzaPricesSelector = 'assortment__price';\n\n    this.init();\n  }\n\n  init() {\n    this.changeName();\n    this.openAndCloseMenu();\n    this.sortByName(this.pizzaAssortmentListNode);\n    this.sortByPrice(this.pizzaAssortmentListNode);\n  }\n\n  openAndCloseMenu() {\n    this.sortContainer.addEventListener('click', () => {\n      const menuList = this.sortContainer.querySelector(`.${this.sortMenuSelector}`);\n      menuList.classList.toggle(this.sortMenuOpenSelector);\n    });\n  }\n\n  changeName() {\n    const menuItems = this.sortContainer.querySelectorAll(`.${this.sortMenuItemSelector}`);\n    const menuButton = this.sortContainer.querySelector(`.${this.sortMenuButtonSelector}`);\n\n    menuItems.forEach((menuItem) => menuItem.addEventListener('click', ({\n      target,\n    }) => {\n      menuButton.textContent = target.textContent;\n    }));\n  }\n\n  sortByName(pizzaAssortmentNode) {\n    const pizzaNames = this.pizzaAssortmentListNode.querySelectorAll(`.${this.pizzaNamesSelector}`);\n\n    const sortedPizzaNames = [...pizzaNames]\n      .sort((firstItem, secondItem) => firstItem.textContent.localeCompare(secondItem.textContent));\n\n    const pizzaItems = sortedPizzaNames.map((item) => item.parentNode);\n    const sortNameCriterion = this.sortContainer.querySelector('#name');\n\n    Sort.handleTypeClick(sortNameCriterion, pizzaAssortmentNode, pizzaItems);\n  }\n\n  sortByPrice(pizzaAssortmentNode) {\n    const pizzaPrices = document.getElementsByClassName(`${this.pizzaPricesSelector}`);\n\n    const sortedPizzaPrices = [...pizzaPrices].sort((firstItem, secondItem) => {\n      const firsItemNum = Number(firstItem.textContent.match(/\\d+/));\n      const secondItemNum = Number(secondItem.textContent.match(/\\d+/));\n\n      return firsItemNum - secondItemNum;\n    });\n\n    const pizzaItems = sortedPizzaPrices\n      .map((item) => item.parentNode)\n      .map((innerItem) => innerItem.parentNode);\n\n    const sortPriceCriterion = this.sortContainer.querySelector('#price');\n\n    Sort.handleTypeClick(sortPriceCriterion, pizzaAssortmentNode, pizzaItems);\n  }\n\n  static handleTypeClick(sortCriterion, pizzaAssortmentNode, parentNodeList) {\n    sortCriterion.addEventListener('click', () => pizzaAssortmentNode.append(...parentNodeList));\n  }\n}\n\n\n//# sourceURL=webpack:///./js/Sort.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Style/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var Data_assortment_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Data/assortment.json */ \"./data/assortment.json\");\n/* harmony import */ var Script_RenderGoodsCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Script/RenderGoodsCards */ \"./js/RenderGoodsCards.js\");\n/* harmony import */ var Script_Filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Script/Filters */ \"./js/Filters.js\");\n/* harmony import */ var Script_Sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Script/Sort */ \"./js/Sort.js\");\n/* harmony import */ var Script_SelectParameters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Script/SelectParameters */ \"./js/SelectParameters.js\");\n/* harmony import */ var Script_SelectSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Script/SelectSize */ \"./js/SelectSize.js\");\n/* harmony import */ var Script_Basket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Script/Basket */ \"./js/Basket.js\");\n/* eslint-disable no-new */\n/* eslint-disable import/no-unresolved */\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const request = indexedDB.open('PizzaStore');\n  let db;\n\n  request.onupgradeneeded = function() {\n    const dataBase = request.result;\n    const store = dataBase.createObjectStore('assortment', { keyPath: 'assortmentKey' });\n    // const titleIndex = store.createIndex('by_title', 'title', { unique: true });\n    // const authorIndex = store.createIndex('by_author', 'author');\n\n    Data_assortment_json__WEBPACK_IMPORTED_MODULE_1__.forEach((assortmentItem) => {\n      store.put({\n        title: assortmentItem.title,\n        // imgAddress: assortmentItem.imgAddress,\n        // altImg: assortment.altImg,\n        // dough: assortment.dough,\n        // sizes: assortment.sizes,\n        // price: assortment.price,\n        // filterKey: assortment.filterKey,\n        assortmentKey: 1,\n      });\n    });\n\n    // Populate with initial data.\n    // store.put({ title: 'Quarry Memories', author: 'Fred', assortmentKey: 123456 });\n    // store.put({ title: 'Water Buffaloes', author: 'Fred', assortmentKey: 234567 });\n    // store.put({ title: 'Bedrock Nights', author: 'Barney', assortmentKey: 345678 });\n  };\n\n  request.onsuccess = function() {\n    db = request.result;\n  };\n\n  const assortmentContainer = document.querySelector('.assortment__list');\n\n  const renderGoods = new Script_RenderGoodsCards__WEBPACK_IMPORTED_MODULE_2__.default(Data_assortment_json__WEBPACK_IMPORTED_MODULE_1__, assortmentContainer);\n  renderGoods.render();\n\n  const filterCategories = document.querySelectorAll('.filter-categories__item');\n  new Script_Filters__WEBPACK_IMPORTED_MODULE_3__.default(assortmentContainer, filterCategories);\n\n  const sortContainer = document.querySelector('.sort');\n  new Script_Sort__WEBPACK_IMPORTED_MODULE_4__.default(assortmentContainer, sortContainer);\n\n  const pizzaInformationContainers = document.querySelectorAll('.pizza-information');\n  new Script_SelectParameters__WEBPACK_IMPORTED_MODULE_5__.default(pizzaInformationContainers);\n\n  new Script_SelectSize__WEBPACK_IMPORTED_MODULE_6__.default(Data_assortment_json__WEBPACK_IMPORTED_MODULE_1__);\n\n  new Script_Basket__WEBPACK_IMPORTED_MODULE_7__.default();\n});\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ }),

/***/ "./data/assortment.json":
/*!******************************!*\
  !*** ./data/assortment.json ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"title\":\"Пепперони Фреш с перцем\",\"imgAddress\":\"img/pepe-fresh-pepper.jpeg\",\"altImg\":\"Пепперони Фреш с перцем\",\"dough\":[\"традиционное\",\"тонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":740,\"30\":745,\"40\":750},\"id\":1,\"filterKey\":\"мясная\"},{\"title\":\"Сырная пицца\",\"imgAddress\":\"img/cheeze.jpg\",\"altImg\":\"Сырная пицца\",\"dough\":[\"традиционное\"],\"sizes\":[26,40],\"price\":{\"26\":635,\"40\":640},\"id\":2,\"filterKey\":\"вегетарианская\"},{\"title\":\"Цыпленок барбекю\",\"imgAddress\":\"img/chicken-bbq.jpg\",\"altImg\":\"Цыпленок барбекю\",\"dough\":[\"традиционное\"],\"sizes\":[26,40],\"price\":{\"26\":685,\"40\":690},\"id\":3,\"filterKey\":\"мясные\"},{\"title\":\"Кисло-сладкий цыпленок\",\"imgAddress\":\"img/sweet-sour-chicken.jpg\",\"altImg\":\"Кисло-сладкий цыпленок\",\"dough\":[\"тонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":665,\"30\":670,\"40\":675},\"id\":4,\"filterKey\":\"гриль\"},{\"title\":\"Чизбургер пицца\",\"imgAddress\":\"img/cheesburger.jpg\",\"altImg\":\"Чизбургер пицца\",\"dough\":[\"традиционное\",\"тонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":805,\"30\":810,\"40\":815},\"id\":5,\"filterKey\":\"гриль\"},{\"title\":\"Крейзи пепперони\",\"imgAddress\":\"img/crazy-pepe.jpg\",\"altImg\":\"Крейзи пепперони\",\"dough\":[\"традиционное\"],\"sizes\":[30,40],\"price\":{\"30\":900,\"40\":905},\"id\":6,\"filterKey\":\"острые\"},{\"title\":\"Пепперони\",\"imgAddress\":\"img/pepe.jpg\",\"altImg\":\"Пепперони\",\"dough\":[\"традиционное\",\"тонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":690,\"30\":695,\"40\":700},\"id\":7,\"filterKey\":\"мясные\"},{\"title\":\"Маргарита\",\"imgAddress\":\"img/margarita.jpg\",\"altImg\":\"Маргарита\",\"dough\":[\"традиционное\",\"тонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":590,\"30\":595,\"40\":600},\"id\":8,\"filterKey\":\"вегетарианская\"},{\"title\":\"Четыре сезона\",\"imgAddress\":\"img/4seasons.jpg\",\"altImg\":\"Четыре сезона\",\"dough\":[\"традиционное\",\"тонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":740,\"30\":745,\"40\":750},\"id\":9,\"filterKey\":\"закрытые\"},{\"title\":\"Овощи и грибы\",\"imgAddress\":\"img/vegetables-and-mushrooms.jpg\",\"altImg\":\"Овощи и грибы\",\"dough\":[\"традиционное\",\"тонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":690,\"30\":695,\"40\":700},\"id\":10,\"filterKey\":\"закрытые\"},{\"title\":\"Карбонара\",\"imgAddress\":\"img/carbonara.jpeg\",\"altImg\":\"Карбонара\",\"dough\":[\"традиционное\",\"тонкое\",\"супертонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":590,\"30\":595,\"40\":600},\"id\":11,\"filterKey\":\"вегетарианская\"},{\"title\":\"Песто\",\"imgAddress\":\"img/pesto.jpeg\",\"altImg\":\"Пицца Песто\",\"dough\":[\"традиционное\"],\"sizes\":[26,30],\"price\":{\"26\":940,\"30\":945},\"id\":12,\"filterKey\":\"мясные\"},{\"title\":\"Арива\",\"imgAddress\":\"img/ariva.jpeg\",\"altImg\":\"Пицца Арива\",\"dough\":[\"традиционное\",\"тонкое\",\"супертонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":840,\"30\":845,\"40\":850},\"id\":13,\"filterKey\":\"острые\"},{\"title\":\"Гавайская\",\"imgAddress\":\"img/hawaii.jpg\",\"altImg\":\"Гавайская пицца\",\"dough\":[\"традиционное\"],\"sizes\":[26,40],\"price\":{\"26\":540,\"40\":550},\"id\":14,\"filterKey\":\"мясные\"},{\"title\":\"Мексиканская\",\"imgAddress\":\"img/mexican.jpg\",\"altImg\":\"Мексиканская пицца\",\"dough\":[\"тонкое\"],\"sizes\":[26,30],\"price\":{\"26\":1040,\"30\":1050},\"id\":15,\"filterKey\":\"острые\"},{\"title\":\"Цыпленок ранчо\",\"imgAddress\":\"img/pepe-fresh-pepper.jpeg\",\"altImg\":\"Пицца \\\\\"Цыпленок ранчо\\\\\"\",\"dough\":[\"традиционное\"],\"sizes\":[26,40],\"price\":{\"26\":640,\"40\":650},\"id\":16,\"filterKey\":\"мясные\"}]');\n\n//# sourceURL=webpack:///./data/assortment.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;