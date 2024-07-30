const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-button');
const navBtnImg = document.querySelector('#nav-button-image');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "images/icons/nav-close.svg";
    }

    else {
        navBtnImg.src = "images/icons/nav-open.svg";
    }
}

AOS.init();