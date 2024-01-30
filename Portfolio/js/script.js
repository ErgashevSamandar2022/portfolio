'use strict';

window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    const scrollBtn = document.querySelector('.scrollToTopBtn');
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY > 350);
    });

    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    const menuBtn = document.querySelector('.barsBtn');
    const navigation = document.querySelector('header .content');
    const navigationItem = document.querySelectorAll('header .content a');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navigation.classList.toggle('active');
    });

    navigationItem.forEach((navItem) => {
        navItem.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navigation.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal');

        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
    });

    const fLName = document.querySelector('.FLName');
    const textname = document.querySelector('.textname');
    const email = document.querySelector('.email');
    const textEmail = document.querySelector('.textEmail');
    const textarea = document.querySelector('.textarea');
    const textTextarea = document.querySelector('.textTextarea');
    const sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', () => {
        if (fLName.value.trim().length > 0) {
            textname.innerHTML = ``;
        } else {
            textname.textContent = `Name must not be empty`;
        }

        if (email.value.trim().length > 0) {
            textEmail.innerHTML = ``;
        } else {
            textEmail.textContent = `Email must not be empty`;
        }
        if (textarea.value.trim().length > 0) {
            textTextarea.innerHTML = ``;
        } else {
            textTextarea.textContent = `Message must not be empty`;
        }

        if (
            fLName.value.trim().length > 0 &&
            email.value.trim().length > 0 &&
            textarea.value.trim().length > 0
        ) {
            fLName.value = '';
            email.value = '';
            textarea.value = '';
        }
    });
});
