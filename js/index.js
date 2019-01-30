// Your code goes here

//Nav Bar effects/////////////////////////////////////////////////////
const nav = document.querySelectorAll('.nav-link');

nav[0].addEventListener('click', e => {
    nav[0].style.color = '#ff0000';
    console.log('This is my event listener');
});

nav[1].addEventListener('click', e => {
    nav[1].style.color = '#0000ff';
    e.preventDefault();               //Prevent page reload <====================
});

nav[2].addEventListener('click', e => {
    nav[2].style.color = '#008000';
});

nav[3].addEventListener('click', e => {
    nav[3].style.color = '#ffa500';
});

//h1 logo effects///////////////////////////////////////////////////
const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseover', e => {
    logo.style.backgroundColor = '#ffff00';
})

logo.addEventListener('mouseout', e => {
    logo.style.backgroundColor = '#ffffff';
})

//h2 'Welcome to  the Fun bus'//////////////////////////////////////

const welcome = document.querySelector('header h2');

welcome.addEventListener('mouseover', e => {
    welcome.style.fontSize = '4rem';
    console.log('test');
});


//h4////////////////////////////////////////////////////////////////////not working

const h4 = document.querySelectorAll('h4');

h4.forEach(item => {item.addEventListener('mouseover', e => {
    h4.style.fontSize = '4rem';
})});
console.log(h4)


//Content destination//////////////////////////////

const content = document.querySelector('.content-destination');

content.addEventListener('mousemove', e => {
    content.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+', 40)';
});

//Buttons (3)//////////////////////////////////////////////////////////

const button = document.querySelectorAll('.btn');

button[0].addEventListener('mousedown', e => {
    button[0].style.backgroundColor = 'pink';
    e.stopPropagation();                         //stop propagation <=========
});

button[1].addEventListener('mouseout', e =>{
    button[1].style.width = '400px'
});

button[1].addEventListener('mouseenter', e =>{
    button[1].style.width = '200px'
});

button[2].addEventListener('dblclick', e =>{
    button[1].style.width = '200px'
});


//Footer//////////////////////////////////////////////////////////

const foot = document.querySelector('.footer');

foot.addEventListener('mousemove', e => {
    foot.style.backgroundColor = 'rgb('+e.clientX+','+e.clientY+', 100)';
});


//Propagation
const destDiv= document.querySelector('.destination');

destDiv.addEventListener('mousedown', e => {
    destDiv.style.color = 'blue';
})


//

const textSelect = document.querySelector('.text-content p');

textSelect.addEventListener('select', e => {
    console.log(e.target);
});


