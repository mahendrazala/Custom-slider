console.log('working');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');

let sliderNumber = 1;
length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
    sliderNumber++;
}

const prevSlide  = () => {
    slider.style.transform = `translateX(-${(sliderNumber - 2) * 800}px)`;
    sliderNumber--;
}

const firstSlide  = () => {
    slider.style.transform = `translateX(0px)`;
    sliderNumber = 1;
}


const lastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    sliderNumber = length;
}


right.addEventListener('click', () => {
    sliderNumber < length ? nextSlide() : firstSlide();
})



left.addEventListener('click', () => {
   sliderNumber > 1 ? prevSlide() :lastSlide();
})

btn1.addEventListener('click',() => {
    slider.style.transform = `translateX(0px)`;
    console.log('sjfdb')
})

btn2.addEventListener('click',() => {
    slider.style.transform = `translateX(-${1 * 800}px)`;

})

btn3.addEventListener('click',() => {
       slider.style.transform = `translateX(-${2 * 800}px)`;

})

btn4.addEventListener('click',() => {
       slider.style.transform = `translateX(-${3 * 800}px)`;

})