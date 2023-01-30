console.log("working");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const button = document.querySelectorAll(".button");

let sliderNumber = 1;
length = images.length;

const resetBg = () => {
  button.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

button.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
  button.style.backgroundColor = "white";

  });
});

left.addEventListener("click", () => {
  sliderNumber > 1 ? prevSlide() : lastSlide();
  resetBg();
  button[sliderNumber - 1].style.backgroundColor = "white";
});

right.addEventListener("click", () => {
  sliderNumber < length ? nextSlide() : firstSlide();
  resetBg();
  button[sliderNumber - 1].style.backgroundColor = "white";
});

const nextSlide = () => {
  slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
  sliderNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(sliderNumber - 2) * 800}px)`;
  sliderNumber--;
};

const firstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  sliderNumber = 1;
};

const lastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  sliderNumber = length;
};

// btn1.addEventListener('click',() => {
//     slider.style.transform = `translateX(0px)`;
//     btn1.classList.add('active')
// })

// btn2.addEventListener('click',() => {
//     slider.style.transform = `translateX(-${1 * 800}px)`;
//     btn2.classList.add('active');

// })

// btn3.addEventListener('click',() => {
//        slider.style.transform = `translateX(-${2 * 800}px)`;
//        btn3.classList.add('active')

// })

// btn4.addEventListener('click',() => {
//        slider.style.transform = `translateX(-${3 * 800}px)`;
//        btn4.classList.add('active');

// })
