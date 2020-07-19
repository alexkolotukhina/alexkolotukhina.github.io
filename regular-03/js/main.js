/* 
Код работает, но не защищен - клментский код может удалить элементы массива  из-вне
Исправить этот недостатьк 
*/

(function () {
  function getUsers() {
    const users = ["Bill"];
    return {
      addUser: function (name) {
        users.push(name);
        return users;
      },
      getUsers: function () {
        return users;
      },
    };
  }
  const u = getUsers();
  u.addUser("Jim");
  u.addUser("Paul");
  const all = u.getUsers();
  let usersTag = document.querySelector(".users");
  all.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    usersTag.appendChild(li);
  });
})();

const us = getUsers();
us.addUser("Tom");
us.addUser("Ann");
console.log(u.getUsers());

us.getUsers().pop();
console.log(u.getUsers());
