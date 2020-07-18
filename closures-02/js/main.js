/*
 * Написать функцию sum(a), которая должна вызываться как
 *    sum(a)(b)  и возвращать сумму двух чисел
 *   Например  sum(3)(1) -> 4  , sum(7)(-1) -> 6
 * */

let form = document.querySelector(".curry-sum");
let firstInput = form.querySelector(".first-number");
let secondInput = form.querySelector(".second-number");

function carry(func) {
  return function (a) {
    return function (b) {
      return func(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

let carrySum = carry(sum);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let firstNum = parseInt(firstInput.value);
  let secondNum = parseInt(secondInput.value);
  let sumResult = document.querySelector(".curry-sum__result span");

  sumResult.innerHTML = carrySum(firstNum)(secondNum);
  firstInput.value = "";
  secondInput.value = "";
});
