const openProject1 = document.getElementById("project-1");

const openProject2= document.getElementById("project-2");

const pixelDeskPC= document.getElementById("pixel-desk-project");

const recipePC= document.getElementById("recipe-project");

openProject1.addEventListener("click",()=>{
    pixelDeskPC.style.display="block";
});

openProject2.addEventListener("click",()=>{
    recipePC.style.display="block";
});

const closeProject1= document.getElementById("close-btn-project1");
const closeProject2= document.getElementById("close-btn-project2");

closeProject1.addEventListener("click", ()=>{
    pixelDeskPC.style.display="none";
})

closeProject2.addEventListener("click", ()=>{
    recipePC.style.display="none";
})