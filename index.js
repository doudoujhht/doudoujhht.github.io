let activateIndex = 0;
const groups = document.getElementsByClassName("card-group")

const handleLove = () => {
    const nextIndex = activateIndex + 1 < groups.length ? activateIndex + 1 : 0
    
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
    const currentGroup = document.querySelector(`[data-index="${activateIndex}"]`);

    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "becoming-active-from-before"

    setTimeout(() => {
            nextGroup.dataset.status = "active";
            activateIndex = nextIndex;
    })


}


const handleHate = () => {
    const nextIndex = activateIndex + 1 < groups.length ? activateIndex + 1 : 0;

    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
    const currentGroup = document.querySelector(
    `[data-index="${activateIndex}"]`
    );

    currentGroup.dataset.status = "before";

    nextGroup.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
    nextGroup.dataset.status = "active";
    activateIndex = nextIndex;
    });
};