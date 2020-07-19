/*  Начальные 3 цифры в каждом номере- это код оператора
 Сделать вывод  в консоль таким
(063) 111 1234
(333) 456 8768
(444) 657 5547
*/
let st = `063-111-1234
(333) 456-8768
4446575547`;

let form = document.querySelector(".number-format");
let input = form.querySelector(".number-format__input");
let result = document.querySelector(".number-format__result span");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let regular = /\(?([0-9]{3})[\)]?[-]?[\s]?[-]?([0-9]{3})[-]?[\s]?[-]?([0-9]{2})[-]?[\s]?[-]?([0-9]{2})/g;
  let phoneVal = input.value;
  let formating = phoneVal.replace(regular, "($1) $2 $3$4");
  result.innerHTML = formating;
  input.value = "";
});
