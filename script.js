// const wraper = document.querySelector('.wraper');
// const loginLink = document.querySelector(".login-link");
// const registerLink = document.querySelector(".register-link");
// const mitPopup = document.querySelector('.mitSignin-popup');
// registerLink.addEventListener('click', () => {
//     wraper.classList.add('active');
// });
// loginLink.addEventListener("click", () => {
//   wraper.classList.remove("active");
// });
// mitPopup.addEventListener("click", () => {
//   wraper.classList.remove("active-popup");
// });

function myFunction() {
    var element = document.getElementById("nav_items");
    element.classList.toggle('new_list');
    var element = document.getElementById("right_items");
    element.classList.toggle("new_list");
}

 var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });


 