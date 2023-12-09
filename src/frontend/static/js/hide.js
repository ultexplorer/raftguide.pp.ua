//const btnHide = document.getElementById('btn-hide');
//btnHide.addEventListener('click', changeStyle)

export function hide(){
    let element = document.getElementById("myDiv");
    let hiddenElement = document.getElementById("myDivShow")
    element.style.display = "none";
    hiddenElement.style.display = "block";
}