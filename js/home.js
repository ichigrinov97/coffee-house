const btnleft = document.querySelector('.left-arrow');
const btnright = document.querySelector('.right-arrow');
const imgofslider = document.querySelector('.slider-image');
let i = 0;
const arrofobj = [{path:'../img/coffee-slider-1.svg', title:'S’mores Frappuccino' , discription: 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.' ,price: '$5.50'},
    {path:'../img/coffee-slider-2.svg', title:'Caramel Macchiato' , discription: 'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.' ,price: '$5.00'},
    {path:'../img/coffee-slider-3.svg', title:'Ice coffee' , discription: 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.' ,price: '$4.50'}
];
const titleslider = document.querySelector('.title-slider');
const parslider = document.querySelector('.info');
const priceslider = document.querySelector('.price');

const sliderLines = document.querySelectorAll('.slider p');

btnright.addEventListener('click', function () {
    if (i == arrofobj.length - 1) {
        imgofslider.src = arrofobj[0].path;
        titleslider.textContent = arrofobj[0].title;
        parslider.textContent = arrofobj[0].discription;
        priceslider.textContent = arrofobj[0].price;
        i = 0;
    } else {
        i++;
        imgofslider.src = arrofobj[i].path;
        titleslider.textContent = arrofobj[i].title;
        parslider.textContent = arrofobj[i].discription;
        priceslider.textContent = arrofobj[i].price;
    }
    for (let a = 0; a < sliderLines.length; a++) {
        sliderLines[a].className = '';
        if(i == a){
            sliderLines[a].className = 'brown';
        }
    }
})

btnleft.addEventListener('click', function () {
    if (i == 0) {
        imgofslider.src = arrofobj[arrofobj.length - 1].path;
        titleslider.textContent = arrofobj[arrofobj.length - 1].title;
        parslider.textContent = arrofobj[arrofobj.length - 1].discription;
        priceslider.textContent = arrofobj[arrofobj.length - 1].price;
        i = arrofobj.length - 1;

    } else {
        i--;
        imgofslider.src = arrofobj[i].path;
        titleslider.textContent = arrofobj[i].title;
        parslider.textContent = arrofobj[i].discription;
        priceslider.textContent = arrofobj[i].price;
    }
    for (let a = 0; a < sliderLines.length; a++) {
        sliderLines[a].className = '';
        if(i == a){
            sliderLines[a].className = 'brown';
        }
    }
})
