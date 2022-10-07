const skills = document.querySelectorAll("#skills-title span");
setTimeout(function() {
    skills.forEach(function(skill) {
        skill.classList.remove("fade-in");
    });
        }, 1500);
        

skills.forEach(span => {
    span.addEventListener("mouseover", function() {
        span.classList.add("rubberBand");

        setTimeout(function() {
            span.classList.remove("rubberBand");
        },1000);
    });
});