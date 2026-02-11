function Sended(ElementID) {
    const UIElement = document.getElementById(ElementID);

    UIElement.innerHTML = "Sended"

    setTimeout(function() {
        UIElement.innerHTML = "Send Email";
    }, 1000);
}