let tds = [...document.querySelectorAll("td")];

let front = [];
let back = [];

for (let i = 0; i < 25; i++) {
  front[i] = i + 1;
  back[i] = i + 26;
}

for (let i = 0; i < 1000; i++) {
  let random = parseInt(Math.random() * 25);
  let temp = front[0];
  front[0] = front[random];
  front[random] = temp;

  random = parseInt(Math.random() * 25);
  temp = back[0];
  back[0] = back[random];
  back[random] = temp;
}

console.log(front);
console.log(back);

tds.forEach((td) => {
  td.addEventListener("click", () => {
    alert("test");
  });
});

console.log(tds);
