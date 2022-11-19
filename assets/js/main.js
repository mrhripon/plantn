"use strict";

document.addEventListener('DOMContentLoaded', function () {

    // Script for Header sticky background change 
    let header = document.querySelector('header');
    function getDistance() {
        return header.offsetTop;
    }
    window.onscroll = function (event) {
        let distance = getDistance() - window.pageYOffset;
        if (distance < 0) {
            header.classList.add('change-bg');
        } else {
            header.classList.remove('change-bg');
        }
    }


})