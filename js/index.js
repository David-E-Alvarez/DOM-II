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