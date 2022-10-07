const spans = document.querySelectorAll("#intro-text span");
const loader = document.querySelector("#loader");
const intro = document.querySelector("#intro-section");
const about = document.querySelector("#about-section");
const skill = document.querySelector("#skills-section");
const line = document.querySelector("#line");
let actual_page = document.querySelector("#intro-section");
let actualIcon = document.querySelector(".active-link");
const delay = 3500;
let lastExecution = 0;

function introLoad() {
    spans.forEach((span, i) => {
    setTimeout(() => {
        span.style.display = "inline-block";
        span.classList.add("bounceIn");
    },i * 100);
    setTimeout(() => {
        span.classList.remove("bounceIn");
    },i * 100+1000);
    
})}
function introUnLoad() {
    spans.forEach((span, i) => {
        span.style.display = "none";
})}
introLoad()


spans.forEach(span => {
    span.addEventListener("mouseover", function() {
        span.classList.add("rubberBand");

        setTimeout(function() {
            span.classList.remove("rubberBand");
        },1000);
    });
});

function changePage(nextPage, actualPage, icon) {
    if (actualPage == nextPage){
        return;
    }
    if(lastExecution + delay > Date.now()){
        return;
    }
    lastExecution = Date.now();
    actualIcon.classList.remove("active-link");
    icon.classList.add("active-link");
    actualIcon = icon;
    actualPage.classList.add("zoomOut");
    setTimeout(function(){
        actualPage.style.display = "none";
        if(actualPage == intro){
            introUnLoad();
        }
        loader.style.display = "flex";
        line.classList.add("load");
        actualPage.classList.remove("zoomOut");
    },1000);
    setTimeout(function(){
        line.classList.remove("load");
        loader.style.display = "none";
        nextPage.style.display = "flex";
        nextPage.classList.add("zoomIn");
        if(nextPage == intro){
            introLoad();
        }
    },2000);
    setTimeout(function(){
        nextPage.classList.remove("zoomIn");

    },3500);
    actual_page = nextPage;

}