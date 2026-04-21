const darkModeToggle = document.getElementById("darkModeButton");
const header = document.getElementById("header");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
    header.classList.toggle("darkMode");
});

const openProject1 = document.getElementById("project-1");

const openProject2= document.getElementById("project-2");

const pixelDeskPC= document.getElementById("pixel-desk-project");

const recipePC= document.getElementById("recipe-project");
// opens the project window when the 'show details' button is clicked
openProject1.addEventListener("click",()=>{
    pixelDeskPC.style.display="block";
});

openProject2.addEventListener("click",()=>{
    recipePC.style.display="block";
});
//closes the project window when the 'x' button is clicked
const closeProject1= document.getElementById("close-btn-project1");
const closeProject2= document.getElementById("close-btn-project2");

closeProject1.addEventListener("click", ()=>{
    pixelDeskPC.style.display="none";
})

closeProject2.addEventListener("click", ()=>{
    recipePC.style.display="none";
})
//working on functionality of contact form and validation

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

const messageInput = document.getElementById('message');

const submitBtn = document.getElementById('submit');
function isValidEmail(email){
    emailFormat= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // allowedDomainEndings=[".com",".ca"];
    return emailFormat.test(email);
}

submitBtn.addEventListener("click", function(event){
    let name= nameInput.value.trim();
    let email= emailInput.value.trim();
    let message= messageInput.value.trim();
    const validDomains=[".com",".ca" ]
    if (name===''||message===''||email===''){
        alert('One or more fields are empty, please review submission.');
        event.preventDefault();
    }else{
        if (!isValidEmail(email)){
            alert("Invalid email address, try again with a new email.")
            event.preventDefault();
            return;
        }else{
             alert("Contact form submitted!")
        }
       
    }
});

//external library typed.js for bonus points
const typedEffect= new Typed("#typing-text-effect",{
    strings: [
        "hi there!",
        "you look a little lost...",
        "while you're here, might as well take a look at my portfolio!",
        "check out some of my projects below!",
    ],
    typeSpeed: 80,
    backSpeed:30,
    showCursor:true,
    cursorChar: '|',
    loop:false
})