const mainMenuItems = document.getElementsByClassName("menuItem");
const htmlTitle = document.getElementById("mainTitle");
const imagePageName="Image_page.html";
let pageName1 ="";
let menuItemsCorrection=0;
if(htmlTitle.innerHTML==="Eldar Minibaev") {
    menuItemsCorrection=1;
} else {
    menuItemsCorrection=2;
}

for (var i=0; i<=mainMenuItems.length-menuItemsCorrection; i++){
    pageName1 = mainMenuItems[i].children[0].innerHTML;
    mainMenuItems[i].children[0].href = `${imagePageName}?pageName=${pageName1}&pageNumber=${i+1}`;
}
console.log(pageName1);
