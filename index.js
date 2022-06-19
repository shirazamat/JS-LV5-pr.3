/* 3. * Сделать так, чтобы товары в каталоге выводились при помощи JS:
a. Создать массив товаров (сущность Product);
b. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
 */
'use strict'

let product = [
  {
    title: "Product1",
    descreption: "Описание",
    price: 100,
  },
  {
    title: "Product2",
    descreption: "Описание",
    price: 200,
  },
  {
    title: "Product3",
    descreption: "Описание",
    price: 300,
  }
];

function catalog(product) {
  function card(product) {
    // Созданиие главного div card
    let catalog_div = document.querySelector("#catalog");
    let card = document.createElement("div");
    card.style.cssText =
      "width: 200px; min-height: 200px; background-color: gray; border: 7px; border-radius: 10px; border-color: rgb(211, 182, 87);";
    catalog_div.appendChild(card);
    // span Title
    let title = document.createElement("span");
    title.style.cssText =
      "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 20px;";
    title.textContent = product.title;
    card.appendChild(title);
    // span Description
    let descreption = document.createElement("span");
    descreption.style.cssText =
      "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 17px;";
    descreption.textContent = product.descreption;
    card.appendChild(descreption);
    // span for Price
    let span_price = document.createElement("span");
    span_price.style.cssText =
      "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 17px;";
    span_price.textContent = "Цена:" + " " + product.price;
    card.appendChild(span_price);
  }
  // цикл
  for (let item of product) {
    card(item);
  }
}

catalog(product);