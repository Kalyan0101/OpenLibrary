// for menu part
{
    var btnLeft = document.querySelector("#btnleft");
    const btnRight = document.querySelector("#btnright");
    const container = document.querySelector('#wripperContainer');

    // featch the width value of the div element{
    const element = document.getElementsByClassName("element");
    let wid = element[0].offsetWidth;
    // }

    // to shift the elements to right to left
    btnLeft.addEventListener('click', () => {
        container.scrollLeft -= (wid + 20) * 3;
        btnLeft.style.opacity = .1;
        btnRight.style.opacity = 1;
    });

    // to shift the elements left to right
    btnRight.addEventListener('click', () => {
        container.scrollLeft += (wid + 20) * 3;
        btnRight.style.opacity = .1;
        btnLeft.style.opacity = 1;
    });
}

// *********************apply for all********************
// *******************************************************

// featch the width value of the div element
const item = document.getElementsByClassName("item");
let i_wid = item[0].offsetWidth;    //i_wid == item width

// *******************************************************
// *******************************************************

// trending Books
{
    var t_left = document.querySelector('#t_btnleft');
    const t_right = document.querySelector('#t_btnright');
    const t_container = document.querySelector('#t_wripperContainer');

    t_left.addEventListener('click', () => {
        t_container.scrollLeft -= (i_wid + 30) * 4;

        if (t_container.scrollLeft == 0) {
            t_left.style.opacity = .1;
        }
    });

    t_right.addEventListener('click', () => {
        t_container.scrollLeft += (i_wid + 30) * 4;
        t_left.style.opacity = 1;
    });
}

// Classic Books
{
    var c_left = document.querySelector('#c_btnleft');
    const c_right = document.querySelector('#c_btnright');
    const c_container = document.querySelector('#c_wripperContainer');

    c_left.addEventListener('click', () => {
        c_container.scrollLeft -= (i_wid + 30) * 4;

        if (c_container.scrollLeft == 0) {
            c_left.style.opacity = .1;
        }
    });
    
    c_right.addEventListener('click', () => {
        c_container.scrollLeft += (i_wid + 30) * 4;
        c_left.style.opacity = 1;
    });
}

// Books We Love
{
    var l_left = document.querySelector('#l_btnleft');
    const l_right = document.querySelector('#l_btnright');
    const l_container = document.querySelector('#l_wripperContainer');

    l_left.addEventListener('click', () => {
        l_container.scrollLeft -= (i_wid + 30) * 4;

        if (l_container.scrollLeft == 0) {
            l_left.style.opacity = .1;
        }
    });

    l_right.addEventListener('click', () => {
        l_container.scrollLeft += (i_wid + 30) * 4;
        l_left.style.opacity = 1;
    });
}

// Recently Returned
{
    var rR_left = document.querySelector('#rR_btnleft');
    const rR_right = document.querySelector('#rR_btnright');
    const rR_container = document.querySelector('#rR_wripperContainer');

    rR_left.addEventListener('click', () => {
        rR_container.scrollLeft -= (i_wid + 30) * 4;

        if (rR_container.scrollLeft == 0) {
            rR_left.style.opacity = .1;
        }
    });

    rR_right.addEventListener('click', () => {
        rR_container.scrollLeft += (i_wid + 30) * 4;
        rR_left.style.opacity = 1;
    });
}

// Romance
{
    var ro_left = document.querySelector('#ro_btnleft');
    const ro_right = document.querySelector('#ro_btnright');
    const ro_container = document.querySelector('#ro_wripperContainer');

    ro_left.addEventListener('click', () => {
        ro_container.scrollLeft -= (i_wid + 30) * 4;

        if (ro_container.scrollLeft == 0) {
            ro_left.style.opacity = .1;
        }
    });

    ro_right.addEventListener('click', () => {
        ro_container.scrollLeft += (i_wid + 30) * 4;
        ro_left.style.opacity = 1;
    });
}

// Kids
{
    var k_left = document.querySelector('#k_btnleft');
    const k_right = document.querySelector('#k_btnright');
    const k_container = document.querySelector('#k_wripperContainer');

    k_left.addEventListener('click', () => {
        k_container.scrollLeft -= (i_wid + 30) * 4;

        if (k_container.scrollLeft == 0) {
            k_left.style.opacity = .1;
        }
    });

    k_right.addEventListener('click', () => {
        k_container.scrollLeft += (i_wid + 30) * 4;
        k_left.style.opacity = 1;
    });
}

// Thrillers
{
    var th_left = document.querySelector('#th_btnleft');
    const th_right = document.querySelector('#th_btnright');
    const th_container = document.querySelector('#th_wripperContainer');

    th_left.addEventListener('click', () => {
        th_container.scrollLeft -= (i_wid + 30) * 4;

        if (th_container.scrollLeft == 0) {
            th_left.style.opacity = .1;
        }
    });

    th_right.addEventListener('click', () => {
        th_container.scrollLeft += (i_wid + 30) * 4;
        th_left.style.opacity = 1;
    });
}

// Textbookks
{
    var tB_left = document.querySelector('#tB_btnleft');
    const tB_right = document.querySelector('#tB_btnright');
    const tB_container = document.querySelector('#tB_wripperContainer');

    tB_left.addEventListener('click', () => {
        tB_container.scrollLeft -= (i_wid + 30) * 4;

        if (tB_container.scrollLeft == 0) {
            tB_left.style.opacity = .1;
        }
    });

    tB_right.addEventListener('click', () => {
        tB_container.scrollLeft += (i_wid + 30) * 4;
        tB_left.style.opacity = 1;
    });
}

// Authors Alliance & MIT Press
{
    var a_left = document.querySelector('#a_btnleft');
    const a_right = document.querySelector('#a_btnright');
    const a_container = document.querySelector('#a_wripperContainer');

    a_left.addEventListener('click', () => {
        a_container.scrollLeft -= (i_wid + 30) * 4;

        if (a_container.scrollLeft == 0) {
            a_left.style.opacity = .1;
        }
    });

    a_right.addEventListener('click', () => {
        a_container.scrollLeft += (i_wid + 30) * 4;
        a_left.style.opacity = 1;
    });
}


// footer top
{
    var sub_left = document.querySelector('#sub_btnleft');
    const sub_right = document.querySelector('#sub_btnright');
    const sub_container = document.querySelector('#sub_wripperContainer');

    const subjectEle = document.getElementsByClassName('subjectEle');
    let subEleWid = subjectEle[0].offsetWidth;
    // console.log(subEleWid);

    sub_left.addEventListener('click', ()=>{
        sub_container.scrollLeft -= subEleWid * 6;

        if(sub_container.scrollLeft == 0){
            sub_left.style.opacity = .1;
        }
    });
    sub_right.addEventListener('click', ()=>{
        sub_container.scrollLeft += subEleWid * 6;

        sub_left.style.opacity = 1;
        // if(sub_container.scrollLeft == 0){
        // }
    });
}



// *********************apply for all********************

// fetch the position of the moveable part to make all left btn disable initially
const movepart_js = document.querySelector(".movepart_js")
if (movepart_js.scrollLeft == 0) {
    btnLeft.style.opacity = .1;
    t_left.style.opacity = .1;
    c_left.style.opacity = .1;
    l_left.style.opacity = .1;
    rR_left.style.opacity = .1;
    ro_left.style.opacity = .1;
    k_left.style.opacity = .1;
    th_left.style.opacity = .1;
    tB_left.style.opacity = .1;
    a_left.style.opacity = .1;
    sub_left.style.opacity = .1;
}