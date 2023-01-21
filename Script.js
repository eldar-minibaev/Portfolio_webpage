function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
}

function addImageToPage(imageSource, targetDivID, i) {
    const imagesDiv=document.getElementById(targetDivID);
    const newDiv = document.createElement("div");
    const newImage  = document.createElement("img");
    const newLink  = document.createElement("a");

    newDiv.className = "singleImgDiv";
    newImage.src = imageSource;
    newLink.href = `single_image.html?pageName=${pageName}&imageNumber=${i}&imageQuantity=${pagesList[pageNumber].imageQuantity}&pageNumber=${pageNumber}`;

    newLink.appendChild(newImage);
    newDiv.appendChild(newLink);
    imagesDiv.appendChild(newDiv);
    newImage.onload = function()
            {
                var width = (newImage.width);
                var height = (newImage.height);
                if (width<height) {
                    newImage.className ="largerHeight";
                } else {
                    newImage.className ="largerWidth";
                }

            }
}


const pagesList = [
    {imageQuantity: 14},
    {imageQuantity: 1},
    {imageQuantity: 2},
    {imageQuantity: 14},
    {imageQuantity: 6},
    {imageQuantity: 12},
    {imageQuantity: 4}
]


const pageNumber = parseInt(getParameter("pageNumber"))-1;
const pageName = getParameter("pageName");

const imagesURL = `images\\${pageName}\\`;
const pageTitle = document.getElementById("mainTitle");
const pageHeader = document.getElementById("mainHeader");

let imageSRC = '';

pageTitle.innerHTML = pageName;
pageHeader.innerHTML = pageName;

for (let i=1;  i <= pagesList[pageNumber].imageQuantity; i++) {
    imageSRC = `${imagesURL}image${i}.jpg`;
    addImageToPage(imageSRC, "imagesDiv", i);
}
