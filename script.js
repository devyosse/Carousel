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
    if (current >= 0) {
        Img[current + 1].style.display = "block";
        current++;
        console.log(current)
    }
}, 1000);


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
    Img[current - 1].style.display = "block";
    current--;
}

function slideRight() {
    Clearr();
    Img[current + 1].style.display = "block";
    current++;


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
