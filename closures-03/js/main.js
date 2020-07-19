/*
 * Создать функцию filter(arr, fn), которая
 *  - принимает в качестве аргументов массив arr и функцию fn
 *  - возвращает новый массив, который содержит только те элементы arr,  для которых fn возвращает true.
 */

const arr = [11, 66, 33, 44, 22, 55, 2];

function filter(arr, fn) {
  const newArr = [];
  arr.forEach((item) => {
    if (item == fn(item)) {
      newArr.push(fn(item));
    }
  });
  return newArr;
}

let form = document.querySelector(".array-filter");
let input = form.querySelector(".array-filter__input");
let result = document.querySelector(".array-filter__result span");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let test = input.value;
  let testArr = test.split(",");

  testArr.forEach((item, index) => {
    testArr[index] = " " + parseInt(item);
  });

  const filteredArr = filter(testArr, function (item) {
    if (item > 50) {
      return item;
    }
  });

  result.innerText = filteredArr;
  input.value = "";
});
