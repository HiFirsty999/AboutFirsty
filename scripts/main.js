function PointerEnter(ElementName) {
    var UIElement = document.getElementById(ElementName);
    
    UIElement.style.backgroundColor = "white";
    UIElement.style.color = "black";

    UIElement.style.transform = "translateX(0.5vw)";
}

function PointerLeave(ElementName) {
    var UIElement = document.getElementById(ElementName);
        
    UIElement.style.backgroundColor = "grey";
    UIElement.style.color = "white";

    UIElement.style.transform = "translateX(0vw)";
}