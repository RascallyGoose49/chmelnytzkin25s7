const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const imageAlts = {
    "pic1.jpg": "Closeup of a blue human eye",
    "pic2.jpg": "A rock with a unique texture",
    "pic3.jpg": "White and purple flowers",
    "pic4.jpg": "An Ancient Egyptian artwork",
    "pic5.jpg": "A big moth resting on a leaf"
};

/* Looping through images */
for (let index = 0; index < imageFilenames.length; index++) {
    const newImage = document.createElement('img');
    newImage.setAttribute("src", "images/" + imageFilenames[index]);
    newImage.setAttribute("alt", imageAlts[imageFilenames[index]]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", function () {
        displayedImage.setAttribute("src", "images/" + imageFilenames[index]);
        displayedImage.setAttribute("alt", imageAlts[imageFilenames[index]]);
    });
}

/* Wiring up the Darken/Lighten button */
