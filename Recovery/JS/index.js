const container = document.querySelector('#wripperContainer');
const btnLeft = document.querySelector("#btnleft");
const btnRight = document.querySelector("#btnright");
const element = document.getElementsByClassName("element");

let wid = element[0].offsetWidth;

if (container.scrollLeft == 0) {
    btnLeft.style.opacity = .5;
}

// to shift the elements to right to left
btnLeft.addEventListener('click', () => {
    let value = (wid + 20) * 3;
    container.scrollLeft = value;
    btnLeft.style.opacity = .5;
    btnRight.style.opacity = 1;
});

// to shift the elements left to right
btnRight.addEventListener('click', () => {
    // container.scrollLeft += 887;
    container.scrollLeft += (wid + 20) * 3;
    btnRight.style.opacity = .5;
    btnLeft.style.opacity = 1;
});