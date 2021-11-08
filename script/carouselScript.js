const prevElement = document.getElementById("prevCarousel");
const nextElement = document.getElementById("nextCarousel");
const carouselElement = document.getElementById("carousel");
const carouselImageElement = document.getElementById("carousel");
const maximunCarousel = 2;

let activeCarousel = 1;

function goNextPage() {
    carouselImageElement.style.opacity = 0
    carouselImageElement.style.transform = "translate(10%)"
    activeCarousel++
    if(activeCarousel === maximunCarousel+1){
        activeCarousel = 1
    }
    setTimeout(function(){
        carouselImageElement.style.opacity = 1
        carouselImageElement.style.transform = "none"
        carouselElement.src = `../assets/carousel/carousel_${activeCarousel}.png`
    }, 200)
    
}

function goBackPage() {
    carouselImageElement.style.opacity = 0
    carouselImageElement.style.transform = "translate(-10%)"
    activeCarousel--
    if(activeCarousel === 0){
        activeCarousel = maximunCarousel
    }
    setTimeout(function(){
        carouselImageElement.style.opacity = 1
        carouselImageElement.style.transform = "none"
        carouselElement.src = `../assets/carousel/carousel_${activeCarousel}.png`
    }, 200)
}

nextElement.addEventListener("click", goNextPage)
prevElement.addEventListener("click", goBackPage)