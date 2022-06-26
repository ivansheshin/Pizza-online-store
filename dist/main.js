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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Basket)\n/* harmony export */ });\nconst defaultParams = {\r\n  assortmentItemSelector: '.assortment__item',\r\n  assortmentButtonSelector: '.assortment__btn',\r\n  assortmentActiveButtonSelector: 'assortment__btn_active',\r\n};\r\n\r\nclass Basket {\r\n  constructor(params) {\r\n    this.params = {\r\n      ...defaultParams,\r\n      ...params,\r\n    };\r\n\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n    const {\r\n      assortmentItemSelector,\r\n      assortmentButtonSelector,\r\n    } = this.params;\r\n\r\n    this.selectedItems = new Set();\r\n\r\n    const assortmentItems = document.querySelectorAll(assortmentItemSelector);\r\n\r\n    assortmentItems.forEach((assortmentItem) => {\r\n      const assortmentButton = assortmentItem.querySelector(assortmentButtonSelector);\r\n      assortmentItem.addEventListener('click', ({ target }) => this.clickHandler(target, assortmentButton, assortmentItem));\r\n    });\r\n  }\r\n\r\n  clickHandler(target, assortmentButton, assortmentItem) {\r\n    const isButton = target === assortmentButton;\r\n\r\n    if (!isButton) return;\r\n\r\n    const { assortmentActiveButtonSelector } = this.params;\r\n\r\n    assortmentButton.classList.toggle(assortmentActiveButtonSelector);\r\n    const isAdded = assortmentButton.classList.contains(assortmentActiveButtonSelector);\r\n\r\n    Basket.changeButton(assortmentButton, isAdded);\r\n    this.addToBasket(assortmentItem);\r\n  }\r\n\r\n  static changeButton(assortmentButton, isAdded) {\r\n    if (isAdded) {\r\n      assortmentButton.innerText = 'Удалить';\r\n    } else {\r\n      assortmentButton.innerText = '+Добавить';\r\n    }\r\n  }\r\n\r\n  addToBasket(assortmentItem) {\r\n    const assortmentItemInfo = {\r\n      itemPrice: assortmentItem.querySelector('.assortment__price').textContent,\r\n      itemAmount: 'Нема пока',\r\n      itemType: assortmentItem.querySelector('.pizza-information__type-item_selected').textContent,\r\n      itemTitle: assortmentItem.querySelector('.assortment__pizza-name').textContent,\r\n    };\r\n\r\n    this.selectedItems.add({\r\n      itemPrice: 1,\r\n      itemAmount: 'Нема пока',\r\n      itemType: 2,\r\n      itemTitle: 3,\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/Basket.js?");

/***/ }),

/***/ "./js/Filters.js":
/*!***********************!*\
  !*** ./js/Filters.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Filter)\n/* harmony export */ });\nclass Filter {\r\n  constructor(container, categories) {\r\n    this.container = container;\r\n    this.categories = categories;\r\n    this.activeCategorySelector = 'filter-categories__item_active';\r\n    this.hideCardSelector = 'assortment__item_hide';\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n    this.categories.forEach((category) => category.addEventListener('click', () => {\r\n      this.handleCategorySelect(category);\r\n    }));\r\n  }\r\n\r\n  handleCategorySelect(selectedCategory) {\r\n    const activeCategory = [...this.categories]\r\n      .find((category) => category.classList.contains(this.activeCategorySelector));\r\n    if (selectedCategory === activeCategory) return;\r\n\r\n    activeCategory.classList.remove(this.activeCategorySelector);\r\n    selectedCategory.classList.add(this.activeCategorySelector);\r\n\r\n    this.filter(selectedCategory);\r\n  }\r\n\r\n  filter(selectedCategory) {\r\n    const cards = this.container.querySelectorAll('.assortment__item');\r\n    const selectedCategoryName = selectedCategory.textContent.toLowerCase();\r\n    const unmatchedCards = [...cards]\r\n      .filter((card) => card.dataset.category !== selectedCategoryName);\r\n\r\n    if (unmatchedCards.length === cards.length) {\r\n      cards.forEach((card) => card.classList.remove(this.hideCardSelector));\r\n      return;\r\n    }\r\n\r\n    const matchedCards = [...cards]\r\n      .filter((card) => card.dataset.category === selectedCategoryName);\r\n\r\n    unmatchedCards.forEach((unmatchedCard) => unmatchedCard.classList.add(this.hideCardSelector));\r\n    matchedCards.forEach((matchedCard) => matchedCard.classList.remove(this.hideCardSelector));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/Filters.js?");

/***/ }),

/***/ "./js/RenderGoodsCards.js":
/*!********************************!*\
  !*** ./js/RenderGoodsCards.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RenderGoodsCards)\n/* harmony export */ });\nclass RenderGoodsCards {\r\n  constructor(data, container) {\r\n    this.data = data;\r\n    this.container = container;\r\n  }\r\n\r\n  render() {\r\n    // eslint-disable-next-line array-callback-return\r\n    this.data.map((item) => {\r\n      this.container.insertAdjacentHTML('beforeend', `\r\n        <div class=\"assortment__item\" id=\"${item.id}\"\" data-category=\"${item.filterKey}\">\r\n          <img src=\"${item.imgSrc}\" width=\"260\" alt=\"${item.altImg}\">\r\n          <h2 class=\"assortment__pizza-name\">${item.title}</h2>\r\n          <div class=\"pizza-information\">\r\n            <div class=\"pizza-information__type\">\r\n                  ${item.dough.map((typeItem) => `<span class=\"pizza-information__type-item\">${typeItem}</span>`).join('')}\r\n            </div>\r\n            <div class=\"pizza-information__size\">\r\n                   ${item.sizes.map((sizeItem) => `<span class=\"pizza-information__size-item\">${sizeItem}</span>`).join('')}\r\n            </div>\r\n          </div>\r\n          <div class=\"assortment__price-to-add\">\r\n            <span class=\"assortment__price\">от ${Object.values(item.price)[0]}</span>\r\n            <button class=\"assortment__btn\">+Добавить</button>\r\n          </div>\r\n        </div>`);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/RenderGoodsCards.js?");

/***/ }),

/***/ "./js/SelectParameters.js":
/*!********************************!*\
  !*** ./js/SelectParameters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SelectParameters)\n/* harmony export */ });\nclass SelectParameters {\r\n  constructor(pizzaInformationContainers) {\r\n    this.pizzaInformationContainers = pizzaInformationContainers;\r\n\r\n    this.pizzaTypeItemSelector = 'pizza-information__type-item';\r\n    this.pizzaSelectedTypeItemSelector = 'pizza-information__type-item_selected';\r\n\r\n    this.pizzaSizeItemSelector = 'pizza-information__size-item';\r\n    this.pizzaSelectedSizeItemSelector = 'pizza-information__size-item_selected';\r\n\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n    this.selectParameters(this.pizzaTypeItemSelector, this.pizzaSelectedTypeItemSelector);\r\n    this.selectParameters(this.pizzaSizeItemSelector, this.pizzaSelectedSizeItemSelector);\r\n  }\r\n\r\n  selectParameters(parameter, parameterSelected) {\r\n    this.pizzaInformationContainers.forEach((container) => {\r\n      const pizzaParameters = container.querySelectorAll(`.${parameter}`);\r\n\r\n      pizzaParameters.forEach((parameterItem, index) => {\r\n        if (index === 0) parameterItem.classList.add(parameterSelected);\r\n\r\n        parameterItem.addEventListener('click', ({ target }) => {\r\n          const selectedParameter = [...pizzaParameters]\r\n            // eslint-disable-next-line no-shadow\r\n            .find((parameterItem) => parameterItem.classList.contains(parameterSelected));\r\n\r\n          selectedParameter.classList.remove(parameterSelected);\r\n          target.classList.add(parameterSelected);\r\n        });\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/SelectParameters.js?");

/***/ }),

/***/ "./js/SelectSize.js":
/*!**************************!*\
  !*** ./js/SelectSize.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SelectSize)\n/* harmony export */ });\nclass SelectSize {\r\n  constructor(data) {\r\n    this.data = data;\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n    const pizzaContainer = document.getElementsByClassName('assortment__item');\r\n    [...pizzaContainer].forEach((pizzaContainerItem) => {\r\n      pizzaContainerItem.addEventListener('click', ({ target }) => {\r\n        this.renderPrice(target, pizzaContainerItem);\r\n      });\r\n    });\r\n  }\r\n\r\n  renderPrice(target, pizzaContainerItem) {\r\n    const pizzaNameElement = pizzaContainerItem.querySelector('.assortment__pizza-name');\r\n    const pizzaName = pizzaNameElement.textContent;\r\n    const pizzaObject = this.data.find((item) => item.title === pizzaName);\r\n\r\n    const isSizeItemTarget = target.classList.contains('pizza-information__size-item');\r\n\r\n    if (isSizeItemTarget) {\r\n      const choosenSize = target.textContent;\r\n      const returnPrice = pizzaObject.price[choosenSize];\r\n\r\n      const pizzaPriceElement = pizzaContainerItem.querySelector('.assortment__price');\r\n\r\n      pizzaPriceElement.textContent = `от ${returnPrice}`;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/SelectSize.js?");

/***/ }),

/***/ "./js/Sort.js":
/*!********************!*\
  !*** ./js/Sort.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sort)\n/* harmony export */ });\nclass Sort {\r\n  constructor(container, sortContainer) {\r\n    this.container = container;\r\n    this.sortContainer = sortContainer;\r\n\r\n    this.sortMenuSelector = 'sort__list';\r\n    this.sortMenuItemSelector = 'sort__item';\r\n    this.sortMenuOpenSelector = 'sort__list_open';\r\n    this.sortMenuButtonSelector = 'sort__button';\r\n\r\n    this.pizzaAssortmentListSelector = 'assortment__list';\r\n    this.pizzaAssortmentListNode = document.querySelector(`.${this.pizzaAssortmentListSelector}`);\r\n    this.pizzaNamesSelector = 'assortment__pizza-name';\r\n    this.pizzaPricesSelector = 'assortment__price';\r\n\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n    this.changeName();\r\n    this.openAndCloseMenu();\r\n    this.sortByName(this.pizzaAssortmentListNode);\r\n    this.sortByPrice(this.pizzaAssortmentListNode);\r\n  }\r\n\r\n  openAndCloseMenu() {\r\n    this.sortContainer.addEventListener('click', () => {\r\n      const menuList = this.sortContainer.querySelector(`.${this.sortMenuSelector}`);\r\n      menuList.classList.toggle(this.sortMenuOpenSelector);\r\n    });\r\n  }\r\n\r\n  changeName() {\r\n    const menuItems = this.sortContainer.querySelectorAll(`.${this.sortMenuItemSelector}`);\r\n    const menuButton = this.sortContainer.querySelector(`.${this.sortMenuButtonSelector}`);\r\n\r\n    menuItems.forEach((menuItem) => menuItem.addEventListener('click', ({\r\n      target,\r\n    }) => {\r\n      menuButton.textContent = target.textContent;\r\n    }));\r\n  }\r\n\r\n  sortByName(pizzaAssortmentNode) {\r\n    const pizzaNames = this.pizzaAssortmentListNode.querySelectorAll(`.${this.pizzaNamesSelector}`);\r\n\r\n    const sortedPizzaNames = [...pizzaNames]\r\n      .sort((firstItem, secondItem) => firstItem.textContent.localeCompare(secondItem.textContent));\r\n\r\n    const pizzaItems = sortedPizzaNames.map((item) => item.parentNode);\r\n    const sortNameCriterion = this.sortContainer.querySelector('#name');\r\n\r\n    Sort.handleTypeClick(sortNameCriterion, pizzaAssortmentNode, pizzaItems);\r\n  }\r\n\r\n  sortByPrice(pizzaAssortmentNode) {\r\n    const pizzaPrices = document.getElementsByClassName(`${this.pizzaPricesSelector}`);\r\n\r\n    const sortedPizzaPrices = [...pizzaPrices].sort((firstItem, secondItem) => {\r\n      const firsItemNum = Number(firstItem.textContent.match(/\\d+/));\r\n      const secondItemNum = Number(secondItem.textContent.match(/\\d+/));\r\n\r\n      return firsItemNum - secondItemNum;\r\n    });\r\n\r\n    const pizzaItems = sortedPizzaPrices\r\n      .map((item) => item.parentNode)\r\n      .map((innerItem) => innerItem.parentNode);\r\n\r\n    const sortPriceCriterion = this.sortContainer.querySelector('#price');\r\n\r\n    Sort.handleTypeClick(sortPriceCriterion, pizzaAssortmentNode, pizzaItems);\r\n  }\r\n\r\n  static handleTypeClick(sortCriterion, pizzaAssortmentNode, parentNodeList) {\r\n    sortCriterion.addEventListener('click', () => pizzaAssortmentNode.append(...parentNodeList));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/Sort.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Style/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var Data_assortment_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Data/assortment.json */ \"./data/assortment.json\");\n/* harmony import */ var Script_RenderGoodsCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Script/RenderGoodsCards */ \"./js/RenderGoodsCards.js\");\n/* harmony import */ var Script_Filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Script/Filters */ \"./js/Filters.js\");\n/* harmony import */ var Script_Sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Script/Sort */ \"./js/Sort.js\");\n/* harmony import */ var Script_SelectParameters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Script/SelectParameters */ \"./js/SelectParameters.js\");\n/* harmony import */ var Script_SelectSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Script/SelectSize */ \"./js/SelectSize.js\");\n/* harmony import */ var Script_Basket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Script/Basket */ \"./js/Basket.js\");\n/* harmony import */ var Script_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Script/main */ \"./js/main.js\");\n/* eslint-disable no-new */\r\n/* eslint-disable import/no-unresolved */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  (0,Script_main__WEBPACK_IMPORTED_MODULE_8__.createPizzaStore)(Data_assortment_json__WEBPACK_IMPORTED_MODULE_1__);\r\n\r\n  const assortmentContainer = document.querySelector('.assortment__list');\r\n\r\n  const renderGoods = new Script_RenderGoodsCards__WEBPACK_IMPORTED_MODULE_2__.default(Data_assortment_json__WEBPACK_IMPORTED_MODULE_1__, assortmentContainer);\r\n  renderGoods.render();\r\n\r\n  const filterCategories = document.querySelectorAll('.filter-categories__item');\r\n  new Script_Filters__WEBPACK_IMPORTED_MODULE_3__.default(assortmentContainer, filterCategories);\r\n\r\n  const sortContainer = document.querySelector('.sort');\r\n  new Script_Sort__WEBPACK_IMPORTED_MODULE_4__.default(assortmentContainer, sortContainer);\r\n\r\n  const pizzaInformationContainers = document.querySelectorAll('.pizza-information');\r\n  new Script_SelectParameters__WEBPACK_IMPORTED_MODULE_5__.default(pizzaInformationContainers);\r\n\r\n  new Script_SelectSize__WEBPACK_IMPORTED_MODULE_6__.default(Data_assortment_json__WEBPACK_IMPORTED_MODULE_1__);\r\n\r\n  new Script_Basket__WEBPACK_IMPORTED_MODULE_7__.default();\r\n});\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPizzaStore\": () => (/* binding */ createPizzaStore)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\r\n/* eslint-disable func-names */\r\nfunction createPizzaStore(assortment) {\r\n  const request = indexedDB.open('PizzaStore');\r\n  let db;\r\n\r\n  request.onupgradeneeded = function () {\r\n    const dataBase = request.result;\r\n    dataBase.createObjectStore('assortment', {\r\n      keyPath: 'assortmentKey',\r\n    });\r\n  };\r\n\r\n  request.onsuccess = function () {\r\n    db = request.result;\r\n    const transaction = db.transaction('assortment', 'readwrite');\r\n    const assortmentStore = transaction.objectStore('assortment');\r\n    assortment.forEach((assortmentItem) => {\r\n      assortmentStore.add({\r\n        title: assortmentItem.title,\r\n        imgSrc: assortmentItem.imgSrc,\r\n        altImg: assortmentItem.altImg,\r\n        dough: assortmentItem.dough,\r\n        sizes: assortmentItem.sizes,\r\n        price: assortmentItem.price,\r\n        filterKey: assortmentItem.filterKey,\r\n        assortmentKey: assortmentItem.id,\r\n      });\r\n    });\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

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

eval("module.exports = JSON.parse('[{\"title\":\"Пепперони Фреш с перцем\",\"imgSrc\":\"img/pepe-fresh-pepper.jpeg\",\"altImg\":\"Пепперони Фреш с перцем\",\"dough\":[\"традиционное\",\"тонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":740,\"30\":745,\"40\":750},\"id\":1,\"filterKey\":\"мясная\"},{\"title\":\"Сырная пицца\",\"imgSrc\":\"img/cheeze.jpg\",\"altImg\":\"Сырная пицца\",\"dough\":[\"традиционное\"],\"sizes\":[26,40],\"price\":{\"26\":635,\"40\":640},\"id\":2,\"filterKey\":\"вегетарианская\"},{\"title\":\"Цыпленок барбекю\",\"imgSrc\":\"img/chicken-bbq.jpg\",\"altImg\":\"Цыпленок барбекю\",\"dough\":[\"традиционное\"],\"sizes\":[26,40],\"price\":{\"26\":685,\"40\":690},\"id\":3,\"filterKey\":\"мясные\"},{\"title\":\"Кисло-сладкий цыпленок\",\"imgSrc\":\"img/sweet-sour-chicken.jpg\",\"altImg\":\"Кисло-сладкий цыпленок\",\"dough\":[\"тонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":665,\"30\":670,\"40\":675},\"id\":4,\"filterKey\":\"гриль\"},{\"title\":\"Чизбургер пицца\",\"imgSrc\":\"img/cheesburger.jpg\",\"altImg\":\"Чизбургер пицца\",\"dough\":[\"традиционное\",\"тонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":805,\"30\":810,\"40\":815},\"id\":5,\"filterKey\":\"гриль\"},{\"title\":\"Крейзи пепперони\",\"imgSrc\":\"img/crazy-pepe.jpg\",\"altImg\":\"Крейзи пепперони\",\"dough\":[\"традиционное\"],\"sizes\":[30,40],\"price\":{\"30\":900,\"40\":905},\"id\":6,\"filterKey\":\"острые\"},{\"title\":\"Пепперони\",\"imgSrc\":\"img/pepe.jpg\",\"altImg\":\"Пепперони\",\"dough\":[\"традиционное\",\"тонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":690,\"30\":695,\"40\":700},\"id\":7,\"filterKey\":\"мясные\"},{\"title\":\"Маргарита\",\"imgSrc\":\"img/margarita.jpg\",\"altImg\":\"Маргарита\",\"dough\":[\"традиционное\",\"тонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":590,\"30\":595,\"40\":600},\"id\":8,\"filterKey\":\"вегетарианская\"},{\"title\":\"Четыре сезона\",\"imgSrc\":\"img/4seasons.jpg\",\"altImg\":\"Четыре сезона\",\"dough\":[\"традиционное\",\"тонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":740,\"30\":745,\"40\":750},\"id\":9,\"filterKey\":\"закрытые\"},{\"title\":\"Овощи и грибы\",\"imgSrc\":\"img/vegetables-and-mushrooms.jpg\",\"altImg\":\"Овощи и грибы\",\"dough\":[\"традиционное\",\"тонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":690,\"30\":695,\"40\":700},\"id\":10,\"filterKey\":\"закрытые\"},{\"title\":\"Карбонара\",\"imgSrc\":\"img/carbonara.jpeg\",\"altImg\":\"Карбонара\",\"dough\":[\"традиционное\",\"тонкое\",\"супертонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":590,\"30\":595,\"40\":600},\"id\":11,\"filterKey\":\"вегетарианская\"},{\"title\":\"Песто\",\"imgSrc\":\"img/pesto.jpeg\",\"altImg\":\"Пицца Песто\",\"dough\":[\"традиционное\"],\"sizes\":[26,30],\"price\":{\"26\":940,\"30\":945},\"id\":12,\"filterKey\":\"мясные\"},{\"title\":\"Арива\",\"imgSrc\":\"img/ariva.jpeg\",\"altImg\":\"Пицца Арива\",\"dough\":[\"традиционное\",\"тонкое\",\"супертонкое\"],\"sizes\":[26,30,40],\"price\":{\"26\":840,\"30\":845,\"40\":850},\"id\":13,\"filterKey\":\"острые\"},{\"title\":\"Гавайская\",\"imgSrc\":\"img/hawaii.jpg\",\"altImg\":\"Гавайская пицца\",\"dough\":[\"традиционное\"],\"sizes\":[26,40],\"price\":{\"26\":540,\"40\":550},\"id\":14,\"filterKey\":\"мясные\"},{\"title\":\"Мексиканская\",\"imgSrc\":\"img/mexican.jpg\",\"altImg\":\"Мексиканская пицца\",\"dough\":[\"тонкое\"],\"sizes\":[26,30],\"price\":{\"26\":1040,\"30\":1050},\"id\":15,\"filterKey\":\"острые\"},{\"title\":\"Цыпленок ранчо\",\"imgSrc\":\"img/pepe-fresh-pepper.jpeg\",\"altImg\":\"Пицца \\\\\"Цыпленок ранчо\\\\\"\",\"dough\":[\"традиционное\"],\"sizes\":[26,40],\"price\":{\"26\":640,\"40\":650},\"id\":16,\"filterKey\":\"мясные\"}]');\n\n//# sourceURL=webpack:///./data/assortment.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;