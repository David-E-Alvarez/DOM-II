// Your code goes here

//what do i want to do? I want to add a border around the little bus picture
//step 1: get the pic 
const picToAddBorderTo = document.querySelector('.intro img');
//step 2: add add border
picToAddBorderTo.addEventListener("mouseover", (event)=>{
    event.target.style.border = "2px solid red";
})
//remove border after its already been over element
picToAddBorderTo.addEventListener("mouseleave", (event)=>{
    event.target.style.border = 'none';
})

//keydown event
document.addEventListener("keydown", (event)=>{
    console.log("event for keydown: " + event);
    alert("you pressed a key; what's up?");
})

//scroll event; zoom in/out of text
let textToZoom = document.querySelectorAll('.intro h2 p');
//console.log("textToZoom: " + textToZoom);doesn't give me anything is nodelist
document.addEventListener('wheel', (event)=>{
    console.log("event: " + event);

});

//drag and drop

//load
window.addEventListener('load', (event) => {
    alert("Page is loaded.")
});

//focus//focus don't work
let getTextContent = document.querySelector('.text-content');
getTextContent.addEventListener('focus', (event)=>{
    console.log("event: " + event);
    event.target.style.background = 'red';
})

//resize
window.addEventListener('resize', (event)=>{
    //console.log("resize event: " + event);
    console.log("Height: " + window.innerHeight);
    console.log("Width: " + window.innerWidth);
})


