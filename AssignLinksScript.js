const mainMenuItems = document.getElementsByClassName("menuItem");
const imagePageName="Image_page.html";
let pageName ="";

for (var i=0; i<=mainMenuItems.length-1; i++){
    pageName = mainMenuItems[i].children[0].innerHTML;
    mainMenuItems[i].children[0].href = `${imagePageName}?pageName=${pageName}&pageNumber=${i+1}`;
}