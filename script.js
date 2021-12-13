let image = [
    "url('img/img1.png')",
    "url('img/img2.png')",
    "url('img/img3.png')",
    "url('img/img4.png')",
    "url('img/img5.png')",
]

let Img = document.getElementsByTagName("img");
let Btnleft = document.getElementById('beforebutton');
let BtnRight = document.getElementById('afterbutton');
let current = 0;


setInterval(function () {

    if (current < Img.length) {
        Clearr();
        current++;
        Img[current].style.display = "block";
        console.log(current)
    }
    else{
        Clearr();
        current = 0;
        Img[current].style.display = "block";
        current++;
    }
}, 2000);


function Clearr() {
    for (let i = 0; i < image.length; i++) {
        Img[i].style.display = "none";
    }
}

function Start() {
    Clearr();
    Img[0].style.display = "block";
}

function slideLeft() {
    Clearr();
    current--;
    Img[current].style.display = "block";
}

function slideRight() {
    Clearr();
    current++;
    Img[current].style.display = "block";
}

Btnleft.addEventListener("click", () => {
    if (current === 0) {
        current = image.length;
    }
    slideLeft();
})

BtnRight.addEventListener("click", () => {
    if (current === image.length - 1) {
        current = -1;
    }
    slideRight();
})

Start();
