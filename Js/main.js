 var swiper = new Swiper('.swiper-container', {
     pagination: {
         el: '.swiper-pagination',
         type: 'fraction',
     },
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
 });

 "use strict";

 productScroll();

 function productScroll() {
     let slider = document.getElementById("slider");
     let next = document.getElementsByClassName("pro-next");
     let prev = document.getElementsByClassName("pro-prev");
     let slide = document.getElementById("slide");
     let item = document.getElementById("slide");

     for (let i = 0; i < next.length; i++) {
         //refer elements by class name

         let position = 0; //slider postion

         prev[i].addEventListener("click", function () {
             //click previos button
             if (position > 0) {
                 //avoid slide left beyond the first item
                 position -= 1;
                 translateX(position); //translate items
             }
         });

         next[i].addEventListener("click", function () {
             if (position >= 0 && position < hiddenItems()) {
                 //avoid slide right beyond the last item
                 position += 1;
                 translateX(position); //translate items
             }
         });
     }

     function hiddenItems() {
         //get hidden items
         let items = getCount(item, false);
         let visibleItems = slider.offsetWidth / 210;
         return items - Math.ceil(visibleItems);
     }
 }

 