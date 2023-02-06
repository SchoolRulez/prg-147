//Objects//
/* Heading, Image, Caption(Para) - change HTML/Alt Tag... This is notes from the video */
const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water.",
    altTag: "Black dog in bucket."
};

const dog2 = {
    heading: "Golden Puppy",
    image: "images/gold-dog.jpg",
    caption: "Enjoying the Dog Days of Summer.",
    altTag: "Gold dog on grass."
};

const dog3 = {
    heading: "Lend Me a Hand",
    image: "images/snow-dog.jpg",
    caption: "I think you took MY stick!",
    altTag: "Dog in snow, taking stick from snowman."
};

const dog4 = {
    heading: "Sweet Hearts",
    image: "images/white-dogs.jpg",
    caption: "Summer lovin'... having a blast!",
    altTag: "Two white dogs on beach."
};

//Functions//

function chooseDog(val) {
    if (val == 1) {
        loadMe(dog1, 1)
    }
    /* console.log(val) This has been left so I can refer back to this later on if needed */
    else if (val == 2) {
        loadMe(dog2, 2)
    }

    else if (val == 3) {
        loadMe(dog3, 3)
    }

    else if (val == 4) {
        loadMe(dog4, 4)
    }

}

function loadMe(dog, val) {
    document.getElementById("heading" + val).innerHTML = dog.heading;
    document.getElementById("img" + val).src = dog.image;
    document.getElementById("img" + val).style.display = "block";
    document.getElementById("p" + val).innerHTML = dog.caption;
    document.getElementById("img" + val).setAttribute('alt', dog.altTag);
    document.getElementById("button" + val).style.visibility = "hidden";
}