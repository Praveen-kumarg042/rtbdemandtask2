const ad = document.getElementById("AdFloatRight");

const closebutton = document
    .getElementById("close")
    .addEventListener(`click`, () => {
        ad.remove("id");
    });

const place = document.getElementById("place");
let movie = document.getElementById("movie");
const place1 = document.getElementById("place1");
let movie1 = document.getElementById("movie1");
let index = 0;

getData();
setInterval(() => {
    if (index === 3) {
        index = 0;
    } else {
        index++;
    }
    getData();
}, 3000);

function getData() {
    const xhr = new XMLHttpRequest();
    let apilink = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";
    xhr.open("get", apilink, true);

    xhr.onload = function () {
        let obj = JSON.parse(this.responseText);
        place.innerHTML = obj[index].city;
        movie.innerHTML = obj[index].name;
        place1.innerHTML = obj[index].city;
        movie1.innerHTML = obj[index].name;
    };
    xhr.send();
}

const root = document.querySelector("#carousel");
let figure = root.querySelector("figure"),
    block = figure.children,
    n = block.length,
    theta = (2 * Math.PI) / n,
    currImage = 0;

var apothem = block[0].clientWidth / (2 * Math.tan(Math.PI / n));

figure.style.transformOrigin = `50% 50% ${-apothem}px`;

for (i = 1; i < n; i++) {
    block[i].style.transformOrigin = `50% 50% ${-apothem}px`;
    block[i].style.transform = `rotateY(${i * theta}rad)`;
}
var check = true;

setInterval(() => {
    if (check) {
        figure.style.transform = `rotateY(${currImage++ * -theta}rad)`;
    }
}, 1500);
