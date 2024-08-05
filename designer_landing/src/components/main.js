

const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav_btn');
const navBtnImg = document.querySelector('#nav_btn_img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/NAV CLOSE.svg";
    } else {
        navBtnImg.src = "./img/NAV.svg";
    }
}

AOS.init({
    once:true
});