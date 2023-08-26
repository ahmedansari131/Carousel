let leftBtn = document.querySelector("#left");
let rightBtn = document.querySelector("#right");
let img = document.querySelectorAll("img");
let imgId = 0;
var i = 1;
var imgCount = [];
var intervalId;


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
            console.log(`This is image/i ${i}`)
            // console.log(`This is img count length ${imgCountLength}`)
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
                console.log(`This is image/i ${i}`)
                // console.log(`This is img count length ${imgCountLength}`)
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


let timer;
let second;
function startTimer(){
    console.log(second);
    if(second >= 1){
        autoplaySlide();
        clearInterval(timer);
        second = 0;
    }
    else{
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
