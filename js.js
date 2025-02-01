const add = document.querySelector(".add");
function name() {}
add.addEventListener("click", (e) => {
  console.log(e.target);
});

const array = [4, 5, 47, 4, 5];

let result = array.reduce((a, b) => a + b);

let map = array.map((a) => a + "ff");

let filter = array.filter((a) => a < 5);
console.log(filter);
