const burgerBtn = $('.header__button');
const menuOverlay =$('.menu__overlay');
const menu = $('.menu');
const menuLink = $('.menu__link');



// //!--innert 
// let prevActiveElement;

// function addInnert(elem) {
//     prevActiveElement = document.activeElement;
//     for (let i = 0; i < document.body.children.length; i++) {
//         if (document.body.children[i] !== elem) {
//             document.body.children[i].inert = true;
//         }
//     };
//     elem.inert = false;
//     if (elem.closest('[inert]')) elem.closest('[inert]').inert = false;

//     for (let i = 0; i < window.elemsInert.length; i++) {
//         if (elem === window.elemsInert[i].elem && window.elemsInert[i].esc) {
//             function esc(e) {
//                 if (e.key == 'Escape') {
//                     window.elemsInert[i].esc()
//                 }
//                 document.removeEventListener('keydown', esc);
//             }
//             document.addEventListener('keydown', esc);
//         }

//     }
// }

// function activationInnert(elemsInert) {
//     window.elemsInert = elemsInert;

//     function removeInnert(elem) {
//         if (elem) {
//             for (let i = 0; i < document.body.children.length; i++) {
//                 if (document.body.children[i] !== elem) {
//                     document.body.children[i].inert = false;
//                 }
//             };
//             elem.innert = true;
//             prevActiveElement.focus();
//         }

//         for (let i = 0; i < elemsInert.length; i++) {
//             if (window.screen.width <= elemsInert[i].breakpoints || !elemsInert[i].breakpoints) {
//                 elemsInert[i].elem.inert = true
//                 console.log(elemsInert[i]);
//             }
//         }
//     }
//     removeInnert();

//     return removeInnert
// }

// //!--end-innert

// const removeInnert = activationInnert([
//     {
//         elem: menu.get(0),
//         esc: closeBurger
//     }
// ]);




function closeBurger() {
    menu.hide(200, function() {
        menuOverlay.hide(100, function() {
            // removeInnert(menu.get(0));
        });
        
    });
}


burgerBtn.click(function() {
    menuOverlay.show(100, function() {
        menu.show(200, function() {
            // addInnert(menu.get(0));
        });
        
    })
})



menuOverlay.click(function(event){
    if(event.target === this) {
        closeBurger();
    }
});

menuLink.click(function() {
    closeBurger();
})


