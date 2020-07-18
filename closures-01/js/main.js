/*
При клике на любой элемент li мы в alert() получаем цифру 5
а по логике должны получать номер элемента на который кликнули

Задачи
1. С помощью debugger проанализировать почему так получается 
2. С помощью замыкания сделать так, чтобы при клике на элемент
   li получали его номер (let НЕ ИСПОЛЬЗОВАТЬ)
3. Выполнить задачу 2 но при этом используя объявление
   итерационной переменной через let 
   
*/

const listVar = document.getElementById("list-var"),
  elsVar = listVar.getElementsByTagName("li");

for (var i = 0, len = elsVar.length; i < len; i++) {
  elsVar[i].onclick = function () {
    var index = this.innerText;
    function indexVar() {
      alert(index);
    }
    indexVar();
  };
}

const listLet = document.getElementById("list-let"),
  elsLet = listLet.getElementsByTagName("li");

for (let i = 0, len = elsLet.length; i < len; i++) {
  elsLet[i].onclick = function () {
    var index = i + 1;
    function indexLet() {
      alert(index);
    }
    indexLet();
  };
}
