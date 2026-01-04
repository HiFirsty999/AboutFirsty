function PointerEnter(ElementName) {
    var UIElement = document.getElementById(ElementName);
    
    UIElement.style.backgroundColor = "white";
    UIElement.style.color = "black";
}

function PointerLeave(ElementName) {
    var UIElement = document.getElementById(ElementName);
        
    UIElement.style.backgroundColor = "grey";
    UIElement.style.color = "white";
}