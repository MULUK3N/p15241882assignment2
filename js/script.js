function myFunction() {
    var x = document.getElementById("top-navigation");
    if (x.className === "responsive-navigation") {
        x.className += " responsive";
    } else {
        x.className = "responsive-navigation";
    }
}
