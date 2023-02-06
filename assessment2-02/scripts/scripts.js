//Objects//

const cake1 = {
    name: "Black Forest Cake",
    origin: "Germany",
    image: "images/blackforestcake.jpg",
    fact: "It is not named after a forest, but after a liquor.",
    source: "https://foodimentary.com/2013/03/28/national-black-forest-cake-day/#:~:text=The%20cake%20is%20named%20not,and%20distilled%20from%20tart%20cherries.",
    altTag: "Black Forest Cake"
};

const cake2 = {
    name: "Carrot Cake",
    origin: "Unknown",
    image: "images/carrotcake.jpg",
    fact: "The oldest recipe is from 1827, in a French cookbook.",
    source: "https://nationaltoday.com/national-carrot-cake-day/#:~:text=Many%20historians%20believe%20the%20cake,French%20cookbook%20published%20in%201827.",
    altTag: "Carrot Cake"
};

const cake3 = {
    name: "Cheesecake",
    origin: "Ancient Greece",
    image: "images/cheesecake.jpg",
    fact: "It is technically not a cake, but a cheese custard pie.",
    source: "https://mobile-cuisine.com/did-you-know/cheesecake-fun-facts/#:~:text=Cheesecake%20Fun%20Facts%3A%20The%20first,custard%20pie%20with%20a%20crust.",
    altTag: "Cheesecake"
};

const cake4 = {
    name: "Ice Cream Cake",
    origin: "England",
    image: "images/icecreamcake.jpg",
    fact: "The first commercial ice cream cake was made in 1898.",
    source: "https://www.cakere.com/who-invented-the-ice-cream-cake/",
    altTag: "Ice Cream Cake"
};

const cake5 = {
    name: "Red Velvet Cake",
    origin: "Unknown",
    image: "images/redvelvetcake.jpg",
    fact: "The famous color comes from a chemical reaction between cocoa powder and an acidic ingredient like vinegar.",
    source: "https://www.southernliving.com/food/desserts/cakes/southern-red-velvet-cake",
    altTag: "Red Velvet Cake"
};

//Functions//

function loadMe() {
    let html = `<h2>${cake1.name}</h2>` +
        `<p>Origin: ${cake1.origin}</p>` + `<img id="img1" src=${cake1.image}>` +
        `<p>Fun Fact: ${cake1.fact}</p>` + `<p>Source: ${cake1.source}` + `<br>` +
        `<button onclick="eatMe(1)">Eat Me!</button>`;

    document.getElementById("obj1").innerHTML = html;
    document.getElementById("img1").setAttribute('alt', cake1.altTag);

    let html2 = `<h2>${cake2.name}</h2>` +
        `<p>Origin: ${cake2.origin}</p>` + `<img id="img2" src=${cake2.image}>` +
        `<p>Fun Fact: ${cake2.fact}</p>` + `<p>Source: ${cake2.source}` + `<br>` +
        `<button onclick="eatMe(2)">Eat Me!</button>`;

    document.getElementById("obj2").innerHTML = html2;
    document.getElementById("img2").setAttribute('alt', cake2.altTag);

    let html3 = `<h2>${cake3.name}</h2>` +
        `<p>Origin: ${cake3.origin}</p>` + `<img id="img3" src=${cake3.image}>` +
        `<p>Fun Fact: ${cake3.fact}</p>` + `<p>Source: ${cake3.source}` + `<br>` +
        `<button onclick="eatMe(3)">Eat Me!</button>`;

    document.getElementById("obj3").innerHTML = html3;
    document.getElementById("img3").setAttribute('alt', cake3.altTag);

    let html4 = `<h2>${cake4.name}</h2>` +
        `<p>Origin: ${cake4.origin}</p>` + `<img id="img4" src=${cake4.image}>` +
        `<p>Fun Fact: ${cake4.fact}</p>` + `<p>Source: ${cake4.source}` + `<br>` +
        `<button onclick="eatMe(4)">Eat Me!</button>`;

    document.getElementById("obj4").innerHTML = html4;
    document.getElementById("img4").setAttribute('alt', cake4.altTag);

    let html5 = `<h2>${cake5.name}</h2>` +
        `<p>Origin: ${cake5.origin}</p>` + `<img id="img5" src=${cake5.image}>` +
        `<p>Fun Fact: ${cake5.fact}</p>` + `<p>Source: ${cake5.source}` + `<br>` +
        `<button onclick="eatMe(5)">Eat Me!</button>`;

    document.getElementById("obj5").innerHTML = html5;
    document.getElementById("img5").setAttribute('alt', cake5.altTag);

}

function eatMe(val) {
    document.getElementById("img" + val).src = "images/yum.jpg"
}