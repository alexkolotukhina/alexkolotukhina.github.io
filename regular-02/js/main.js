//Заменить словосочетание javascript в параграфе  на JAVASCRIPT.
let paragraph = document.querySelector("#out");
let bnt = document.querySelector("#btn");
let content = paragraph.innerHTML;
let regular = /(javascript)/g;

let formating = content.replace(regular, function ($0, $1) {
  return "<span>" + $0.replace($0, $1.toUpperCase()) + "</span>";
});

bnt.addEventListener("click", () => {
  paragraph.innerHTML = formating;
});
