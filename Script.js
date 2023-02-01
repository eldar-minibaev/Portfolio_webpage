const pages = [
    {name: "Home",
     imageQuantity:0 
    },
    {name: "Personal work",
     imageQuantity:14 
    },
    {name: "Comercial work",
    imageQuantity:1 
    },
    {name: "Character design",
    imageQuantity:2 
    },
    {name: "Life painting",
    imageQuantity:14 
    },
    {name: "Life drawing",
    imageQuantity:6 
    },
    {name: "Sculpture",
    imageQuantity:12 
    },
    {name: "3D",
    imageQuantity:4 
    }
]
let currentPage=0;
let storedColor="";
let pageNumberParameter = "";


function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
}

function addButton(number) {
    const mainMenu = document.getElementById("mainMenu");

    //CREATING NEW MENU ELEMENTS
    const newLi = document.createElement("li");
    const newButton  = document.createElement("button");

    //ADDING CLASSES AND IDs
    newLi.className = "menuItem";
    newButton.className = "mainMenuButton";
    newButton.id = `mainMenuButton${number}`;
    newButton.innerHTML = pages[number].name;

    //ADDING EVENT LISTENER
    newButton.addEventListener("click", function buttonClick(){
        newButton.classList.add("buttonClickAnimation");
        setTimeout(() =>{
        changePage(number);
        newButton.classList.remove("buttonClickAnimation");
        },150);
    })

    //APPENDING CHILDREN
    newLi.appendChild(newButton);
    mainMenu.appendChild(newLi);
}

function createButtons(){
    const mainMenu = document.getElementById("mainMenu");
    mainMenu.innerHTML="";

    for(let i=0; i<pages.length;i++) {
        addButton(i);
    }
}

function highlightButton(buttonNumber){
    const button = document.getElementById(`mainMenuButton${buttonNumber}`);
    storedColor =  button.style.color;
    button.style.color = " rgb(255, 255, 255)";
}
function unHighlightButton(buttonNumber){
    const button = document.getElementById(`mainMenuButton${buttonNumber}`);
    button.style.color = storedColor;
}


//FUNCTIONS ADD/DELETE IMAGES
function addImageToPage(pageNumber, imageNumber) {

    const imagesURL = `thumbs\\${pages[pageNumber].name}\\`;
    let imageSRC = `${imagesURL}image${imageNumber}.jpg`;

    const imagesDiv=document.getElementById("imagesDiv");
    const newDiv = document.createElement("div");
    const newImage  = document.createElement("img");
    const newLink  = document.createElement("a");

    newDiv.className = "singleImgDiv";
    newImage.src = imageSRC;
    newLink.href = `single_image.html?pageName=${pages[pageNumber].name}&imageNumber=${imageNumber}&imageQuantity=${pages[pageNumber].imageQuantity}&pageNumber=${pageNumber}`;

    newLink.appendChild(newImage);
    newDiv.appendChild(newLink);
    imagesDiv.appendChild(newDiv);
    newImage.onload = function()
            {
                    newImage.className ="image";
            }
}
function addImages(pageNumber){
    for (let i=1;  i <= pages[pageNumber].imageQuantity; i++) {
        addImageToPage(pageNumber, i);
    }
}
function deleteImages(){
    const imagesDiv=document.getElementById("imagesDiv");
    imagesDiv.innerHTML ="";
}


//FUNCTION CHANGING THE PAGE CONTENT
function openPage(pageNumber){
    //CHANGING TITLE AND HEADER
    const pageTitle = document.getElementById("mainTitle");
    const pageHeader = document.getElementById("mainHeader");

    pageTitle.innerHTML = pages[pageNumber].name;
    pageHeader.innerHTML = pages[pageNumber].name;

    //ADDING IMAGES
    addImages(pageNumber);
    highlightButton(pageNumber);
    

}
function changePage(pageNumber){
    if (pageNumber != currentPage) {
        deleteImages();
        unHighlightButton(currentPage);
        openPage(pageNumber);
        currentPage = pageNumber;
    }
    

}

pageNumberParameter = getParameter("pageNumber");
console.log(pageNumberParameter);
if(pageNumberParameter!=null) 
{
    createButtons();
    openPage(pageNumberParameter);
    currentPage=pageNumberParameter;
} else
{
    createButtons();
    openPage(0);
}