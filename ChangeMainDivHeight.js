const printSize = () => {
    const mainDivHeight=window.innerHeight;
    const mainDiv = document.getElementById("mainDiv");
    mainDiv.style.height=`${mainDivHeight-100}px`;
    console.log(window.innerHeight);
}

window.addEventListener("resize",printSize);
