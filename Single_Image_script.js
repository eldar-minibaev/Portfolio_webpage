function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
}
const imageNumber = parseInt(getParameter("imageNumber"));
const pageName = getParameter("pageName");
const imageQuantity = parseInt(getParameter("imageQuantity"));
const pageNumber= parseInt(getParameter("pageNumber"));
const imagePageName="index.html";
const singleImageDiv = document.getElementById("singleImage");
const newImage = document.createElement("img");

newImage.src =`images\\${pageName}\\image${imageNumber}.jpg`;
singleImageDiv.appendChild(newImage);

console.log(newImage);

const backLink = document.getElementById("backLink");
backLink.href = `${imagePageName}?pageName=${pageName}&pageNumber=${pageNumber+1}`;