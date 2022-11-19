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


    // Script for mobile menu background 
    if (document.querySelector('.navbar-toggler') !== null) {
        document.querySelector('.navbar-toggler').addEventListener('click', function (event) {
            let toggleBtn = event.target.closest('.navbar-toggler');
            if (toggleBtn.classList.value == 'navbar-toggler collapsed' && (getDistance() - window.pageYOffset) > 0) {

                header.classList.remove('change-bg');
            }
            else {
                header.classList.add('change-bg');
            }

        })
    }


})