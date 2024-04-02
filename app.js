function resetOpacity(figcaptionId) {
    var figcaption = document.getElementById(figcaptionId);
    figcaption.classList.remove('show');      
    setTimeout(function() {
        figcaption.classList.add('show');
    }, 100);
}

function screenNew(screen){
    document.querySelector(".container img").src = screen;
}
// function load(){
// let date = new Date()
// let hours = date.getHours()

// if (hours >= 0 && hours < 12) {
//     document.body.style.background = "linear-gradient(#ffffff 20%, #ffff00)"

// }else if (hours >= 12 && hours < 18 ){
//     document.body.style.background = "linear-gradient(#ffffff 20%, #ffff00)"

// }else {
//     document.body.style.background = "linear-gradient(#ffffff 20%, #ffff00" 
//     }
// }





