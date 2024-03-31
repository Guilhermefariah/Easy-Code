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
function load(){
let imageLoad = document.querySelector(".container")
let date = new Date()
let hours = date.getHours()

if (hours >= 0 && hours < 12) {
    imageLoad.src= "/image/1.jpg"
    document.body.style.background = "linear-gradient(#ffffff 20%, #87cefa)"

}else if (hours >= 12 && hours < 18 ){
    imamgeLoad.src = "/image/2.jpg"
    document.body.style.background = "linear-grient(#ffffff 20%, #ffff00)"

}else {
    imageLoad.src = "/image/3.jpg"
    document.body.style.background = "linear-gradient(#ffffff 20%, #87cefa" 
    }
}





