let leftBtn = document.querySelector("#left");
let rightBtn = document.querySelector("#right");
let img = document.querySelectorAll(".slide img");
let imgId = 0;
var i = 1;
var imgCount = [];
var intervalId;
let timer;
let second;


img.forEach((item) => {
    item.setAttribute("id", imgId);
    imgId += 1;
    imgCount.push(imgId);
});
let imgCountLength = imgCount.length;

function rightImgShow() {
    if (Array.from(img).some(element => element.matches(".active"))) {
        if (i < imgCountLength) {
            if (i === imgCountLength - 1 && imgCountLength >= 1) {
                rightBtn.style.visibility = "hidden";
                leftBtn.style.visibility = "visible";
            }

            if (i <= imgCountLength) {
                leftBtn.style.visibility = "visible"
            }

            img[i].classList.add("active");
            img[i - 1].classList.add("inactive");
            img[i - 1].classList.remove("active");
            i += 1;
            // console.log(`This is image/i ${i}`)
        }
    }
}


function leftImgShow() {
    img.forEach((item) => {
        if (item.matches(".active")) {
            if (i === 2) {
                leftBtn.style.visibility = "hidden";
                rightBtn.style.visibility = "visible";
            }

            if (i <= imgCountLength) {
                rightBtn.style.visibility = "visible"
            }

            if (i <= imgCountLength) {
                img[i - 2].classList.add("active");
                img[i - 1].classList.add("inactive");
                img[i - 1].classList.remove("active");
                i -= 1;
                // console.log(`This is image/i ${i}`)
            }
        }
    });
}


function autoplaySlide() {
    let slideOver = false;
    intervalId = setInterval(() => {
        if (!slideOver) {
            if (i <= imgCountLength - 1) {
                rightImgShow();
            }
            else {
                slideOver = true;
            }
        }

        if (slideOver) {
            if (i <= imgCountLength && i > 1) {
                leftImgShow();
            }
            else {
                slideOver = false;
            }
        }

    }, 2000);
}


function startTimer() {
    console.log(second);
    if (second >= 1) {
        autoplaySlide();
        clearInterval(timer);
        second = 0;
    }
    else {
        second++;
    }
}


leftBtn.addEventListener('click', (e) => {
    second = 1;
    clearInterval(intervalId);
    clearInterval(timer);
    leftImgShow();
    timer = setInterval(startTimer, 1000);
});

rightBtn.addEventListener('click', (e) => {
    second = 1;
    clearInterval(intervalId);
    clearInterval(timer);
    rightImgShow();
    timer = setInterval(startTimer, 1000);
});


autoplaySlide();


function cursorFollower() {
    let cursor = document.querySelector(".cursor-follower");
    let imgContainer = document.querySelector(".img-container");
    let containerRect = imgContainer.getBoundingClientRect();
    let mouseX = containerRect.left;
    let mouseY = containerRect.top;
    window.addEventListener('mousemove', (e) => {
        let x = e.clientX - mouseX - 8;
        let y = e.clientY - mouseY - 8;
        cursor.style.transform = `translate(${x}px, ${y}px)`;
    });
}
cursorFollower();



// CARDS SLIDER SECTION STARTS HERE
let cardsDet = [
    {
        img: "img/road-1072823_1280.jpg",
        title: "Amazing Shirt",
        info: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non illo mollitia assumenda, molestiae sint
        exercitationem minus placeat. Maxime molestias optio doloribus dolores animi, suscipit laboriosam
        vitae pariatur veniam. Soluta, libero?`,
    },
    {
        img: "img/flowers-276014_1280.jpg",
        title: "Amazing Shoes",
        info: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non illo mollitia assumenda, molestiae sint
        exercitationem minus placeat. Maxime molestias optio doloribus dolores animi, suscipit laboriosam
        vitae pariatur veniam. Soluta, libero?`,
    },
    {
        img: "img/dandelion-445228_1280.jpg",
        title: "Amazing Watch",
        info: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non illo mollitia assumenda, molestiae sint
        exercitationem minus placeat. Maxime molestias optio doloribus dolores animi, suscipit laboriosam
        vitae pariatur veniam. Soluta, libero?`,
    },
    {
        img: "img/aurora-1197753_1280.jpg",
        title: "Amazing Socks",
        info: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non illo mollitia assumenda, molestiae sint
        exercitationem minus placeat. Maxime molestias optio doloribus dolores animi, suscipit laboriosam
        vitae pariatur veniam. Soluta, libero?`,
    },
    {
        img: "img/mountains-190055_1280.jpg",
        title: "Amazing Coat",
        info: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non illo mollitia assumenda, molestiae sint
        exercitationem minus placeat. Maxime molestias optio doloribus dolores animi, suscipit laboriosam
        vitae pariatur veniam. Soluta, libero?`,
    }
];

let slides = document.querySelector(".slides");
let cards = "";
cardsDet.forEach((item, index) => {
    cards += `<div class="cards" id="${index}">
                <img src="${item.img}" alt="">
                <h3>${item.title}</h3>
                <p>${item.info}</p>
                <div class="cta">
                    <button class="btn btn-primary">View</button>
                    <button class="btn btn-secondary">Later</button>
                </div>
            </div>`;
});
slides.innerHTML = cards;
let cardItem = document.querySelectorAll(".cards");
cardItem.forEach((item) => {
    let getStyles = window.getComputedStyle(item);
    item.style.width = `${(slides.clientWidth / 3) - getStyles.marginRight.slice(0,2)}px`;
});
