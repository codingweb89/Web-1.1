
const header_parent = document.querySelector(".header-parent");
const up_arrow = document.querySelector(".up_arrow");

window.addEventListener("scroll", e => {
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
    let calc = scrollHeight - clientHeight;
    let scrollY = window.scrollY;
    let result = Math.floor(scrollY / calc * 100);
    if(result >= 3) {
        addClassList(header_parent, "fixed")
    }else {
        removeClassList(header_parent, "fixed")
    }

    if(result >= 20) {
        removeClassList(up_arrow, "none");
    }else {
        addClassList(up_arrow, "none")
    }
})


function addClassList(element, string) {
    element.classList.add(string)
}

function removeClassList(element, string) {
    element.classList.remove(string)
}