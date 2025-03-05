const items = [
    { category: 'Кофе', name: 'Irish coffee', description: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk', cost: '$7.00', img: '../img/irish.svg', additives1: 'Sugar', additives2: 'Cinnamon', additives3: 'Syrup', sizeS: '200ml', sizeM: '300ml', sizeL: '400ml' },
    { category: 'Кофе', name: 'Kahlua coffee', description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk', cost: '$7.00', img: '../img/khalua.svg', additives1: 'Sugar', additives2: 'Cinnamon', additives3: 'Syrup', sizeS: '200ml', sizeM: '300ml', sizeL: '400ml' },
    { category: 'Кофе', name: 'Honey raf', description: 'Espresso with frothed milk, cream and aromatic honey', cost: '$5.50', img: '../img/coffee-3.svg', additives1: 'Sugar', additives2: 'Cinnamon', additives3: 'Syrup', sizeS: '200ml', sizeM: '300ml', sizeL: '400ml' },
    { category: 'Кофе', name: 'Ice cappuccino', description: 'Cappuccino with soft thick foam in summer version with ice', cost: '$5.00', img: '../img/coffee-4.svg', additives1: 'Sugar', additives2: 'Cinnamon', additives3: 'Syrup', sizeS: '200ml', sizeM: '300ml', sizeL: '400ml' },
    { category: 'Кофе', name: 'Espresso', description: 'Classic black coffee', cost: '$4.50', img: '../img/coffee-5.svg', additives1: 'Sugar', additives2: 'Cinnamon', additives3: 'Syrup', sizeS: '200ml', sizeM: '300ml', sizeL: '400ml' },
    { category: 'Кофе', name: 'Latte', description: 'Espresso coffee with the addition of steamed milk and dense milk foam', cost: '$5.50', img: '../img/coffee-6.svg', additives1: 'Sugar', additives2: 'Cinnamon', additives3: 'Syrup', sizeS: '200ml', sizeM: '300ml', sizeL: '400ml' },
    { category: 'Кофе', name: 'Latte macchiato', description: 'Espresso with frothed milk and chocolate', cost: '$5.50', img: '../img/coffee-7.svg', additives1: 'Sugar', additives2: 'Cinnamon', additives3: 'Syrup', sizeS: '200ml', sizeM: '300ml', sizeL: '400ml' },
    { category: 'Кофе', name: 'Coffee with cognac', description: 'Fragrant black coffee with cognac and whipped cream', cost: '$6.50', img: '../img/coffee-8.svg', additives1: 'Sugar', additives2: 'Cinnamon', additives3: 'Syrup', sizeS: '200ml', sizeM: '300ml', sizeL: '400ml' },
    { category: 'Чай', name: 'Moroccan', description: 'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint', cost: '$4.50', img: '../img/tea-1.png', additives1: 'Sugar', additives2: 'Lemon', additives3: 'Syrup', sizeS: '200ml', sizeM: '300ml', sizeL: '400ml' },
    { category: 'Чай', name: 'Ginger', description: 'Original black tea with fresh ginger, lemon and honey', cost: '$5.00', img: '../img/tea-2.png', additives1: 'Sugar', additives2: 'Lemon', additives3: 'Syrup', sizeS: '200ml', sizeM: '300ml', sizeL: '400ml' },
    { category: 'Чай', name: 'Cranberry', description: 'Invigorating black tea with cranberry and honey', cost: '$5.00', img: '../img/tea-3.png', additives1: 'Sugar', additives2: 'Lemon', additives3: 'Syrup', sizeS: '200ml', sizeM: '300ml', sizeL: '400ml' },
    { category: 'Чай', name: 'Sea buckthorn', description: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon', cost: '$5.50', img: '../img/tea-4.png', additives1: 'Sugar', additives2: 'Lemon', additives3: 'Syrup', sizeS: '200ml', sizeM: '300ml', sizeL: '400ml' },
    { category: 'Десерт', name: 'Marble cheesecake', description: 'Philadelphia cheesecake with lemon zest on a light sponge cake and red currant jam.', cost: '$4.50', img: '../img/dessert-1.png', additives1: 'Berries', additives2: 'Nuts', additives3: 'Jam', sizeS: '50g', sizeM: '100g', sizeL: '200g' },
    { category: 'Десерт', name: 'Red velvet', description: 'Tender cake with cream cheese frosting.', cost: '$4.50', img: '../img/dessert-2.png', additives1: 'Berries', additives2: 'Nuts', additives3: 'Jam', sizeS: '50g', sizeM: '100g', sizeL: '200g' },
    { category: 'Десерт', name: 'Cheesecake pancakes', description: 'Fluffy cheesecake pancakes with cream and sprinkled with powdered sugar.', cost: '$4.50', img: '../img/dessert-3.png', additives1: 'Berries', additives2: 'Nuts', additives3: 'Jam', sizeS: '50g', sizeM: '100g', sizeL: '200g' },
    { category: 'Десерт', name: 'Creme brulee', description: 'Decadent creamy dessert with caramelized sugar.', cost: '$4.00', img: '../img/dessert-4.png', additives1: 'Berries', additives2: 'Nuts', additives3: 'Jam', sizeS: '50g', sizeM: '100g', sizeL: '200g' },
    { category: 'Десерт', name: 'Pancakes', description: 'Tender pancakes served with strawberry jam and fresh strawberries.', cost: '$5.00', img: '../img/dessert-5.png', additives1: 'Berries', additives2: 'Nuts', additives3: 'Jam', sizeS: '50g', sizeM: '100g', sizeL: '200g' },
    { category: 'Десерт', name: 'Honey cake', description: 'Classic honey cake with delicate custard.', cost: '$5.50', img: '../img/dessert-6.png', additives1: 'Berries', additives2: 'Nuts', additives3: 'Jam', sizeS: '50g', sizeM: '100g', sizeL: '200g' },
    { category: 'Десерт', name: 'Chocolate cake', description: 'Rich chocolate cake with chocolate fillings.', cost: '$5.50', img: '../img/dessert-7.png', additives1: 'Berries', additives2: 'Nuts', additives3: 'Jam', sizeS: '50g', sizeM: '100g', sizeL: '200g' },
    { category: 'Десерт', name: 'Black forest', description: 'A combination of thin sponge cake with cherry jam and light chocolate mousse.', cost: '$6.50', img: '../img/dessert-8.png', additives1: 'Berries', additives2: 'Nuts', additives3: 'Jam', sizeS: '50g', sizeM: '100g', sizeL: '200g' }
];


const coffee = document.querySelector('.coffee-selector');
const tea = document.querySelector('.tea-selector');
const desert = document.querySelector('.dessert-selector');
const assorti = document.querySelector('.assorti');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const name1 = document.querySelector('.info .name');
const discription = document.querySelector('.info .discription');
const bodyStyle = document.querySelector('.dark-background');
const imgAssorti = document.querySelector('.assorti img');
const imgModal = document.querySelector('.modal .image');
const costModal = document.querySelector('.modal .Total .cost');
const SugarSelector = document.querySelector('.Sugar-selector');
const CinnamonSelector = document.querySelector('.Cinnamon-selector');
const SyrupSelector = document.querySelector('.Syrup-selector');
const SugarText = document.querySelector('.Sugar-text p');
const CinnamonText = document.querySelector('.Cinnamon-text p');
const SyrupText = document.querySelector('.Syrup-text p');
const SsizeSelector = document.querySelector('.S-selector');
const MsizeSelector = document.querySelector('.M-selector');
const LsizeSelector = document.querySelector('.L-selector');
const SsizeText = document.querySelector('.S-text p');
const MsizeText = document.querySelector('.M-text p');
const LsizeText = document.querySelector('.L-text p');


function selector(value) {
    const arroftea = items.filter(el => el.category == value);
    assorti.innerHTML = '';
    arroftea.forEach(elem => {
        assorti.innerHTML += `<div class ="irish">
        <img src=${elem.img}>
        <h2>${elem.name}</h2>
        <p>${elem.description}</p>
        <h3>${elem.cost}</h3>`
    })
    document.querySelectorAll('.irish').forEach((val, index) => {
        console.log(val, index);
        val.addEventListener('click', function (event) {
            
            modal.style = "display:flex";
            imgModal.innerHTML = `<img src =${arroftea[index].img}>`
            name1.textContent = arroftea[index].name;
            discription.textContent = arroftea[index].description;
            costModal.textContent = arroftea[index].cost;
            SugarText.textContent = arroftea[index].additives1;
            CinnamonText.textContent = arroftea[index].additives2;
            SyrupText.textContent = arroftea[index].additives3;
            SsizeText.textContent = arroftea[index].sizeS;
            MsizeText.textContent = arroftea[index].sizeM;
            LsizeText.textContent = arroftea[index].sizeL;
            bodyStyle.style.display = "block";


            // event.stopPropagation();
        })

    })
}





close.addEventListener('click', function () {
    bodyStyle.style.display ="none";
    modal.style = 'display:none';
    SsizeSelector.classList.remove('active');
    MsizeSelector.classList.remove('active');
    LsizeSelector.classList.remove('active');
})


// document.addEventListener('click', (event) => {
//     if (!modal.contains(event.target)) {
//         modal.style.display = 'none';
//     }
// });
selector('Кофе');
coffee.classList.add('active');

coffee.addEventListener('click', function (event) {
    selector('Кофе');
    coffee.classList.add('active');
    tea.classList.remove('active');
    desert.classList.remove('active');
})
tea.addEventListener('click', function (event) {
    selector('Чай');
    coffee.classList.remove('active');
    tea.classList.add('active');
    desert.classList.remove('active');
})
desert.addEventListener('click', function (event) {
    selector('Десерт');
    coffee.classList.remove('active');
    tea.classList.remove('active');
    desert.classList.add('active');
})


let flagofSug = false;
SugarSelector.addEventListener('click', function () {
    if (flagofSug == false) {
        SugarSelector.classList.add('active');
        flagofSug = true;
    } else {
        SugarSelector.classList.remove('active');
        flagofSug = false;
    }
})
let flagofCinn = false;
CinnamonSelector.addEventListener('click', function () {
    if (flagofCinn == false) {
        CinnamonSelector.classList.add('active');
        flagofCinn = true;
    } else {
        CinnamonSelector.classList.remove('active');
        flagofCinn = false;
    }
})
let flagofSyr = false;
SyrupSelector.addEventListener('click', function () {
    if (flagofSyr == false) {
        SyrupSelector.classList.add('active');
        flagofSyr = true;
    } else {
        SyrupSelector.classList.remove('active');
        flagofSyr = false;
    }
})
SsizeSelector.addEventListener('click', function () {
    SsizeSelector.classList.add('active');
    MsizeSelector.classList.remove('active');
    LsizeSelector.classList.remove('active');
})
MsizeSelector.addEventListener('click', function () {
    SsizeSelector.classList.remove('active');
    MsizeSelector.classList.add('active');
    LsizeSelector.classList.remove('active');
})
LsizeSelector.addEventListener('click', function () {
    SsizeSelector.classList.remove('active');
    MsizeSelector.classList.remove('active');
    LsizeSelector.classList.add('active');
})
