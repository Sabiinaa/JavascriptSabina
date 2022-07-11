"use strict";
$(document).ready(function () {

});



// $('h1').click(function (e) {
//     e.preventDefault();
//     $('input').html(1234);
// })


// $('.btn').click(function (e) {
//     e.preventDefault();

//     let a = (a) => {
//         for (let i = 1; i <= a; i++) {
//             $('.contentDiv').append(`h1>{a}</h1`);
//         }
//     } else{
//         $('.contentDiv').append(`<h1>${a}</h1`)

//     }
//     input.value = "";

// });
$('#btn').click(function (e) {
    e.preventDefault();
    let func = a => {
        if (Number(a)) {
            for (let i = 1; i <= a; i++) {
                $('.contentDiv').append(`<h1>${a}</h1>`);
            }
        } else {
            $('.contentDiv').append(`<h1>${a}</h1>`);
        }
        input.value = "";
    }
    func($('input').val());
});
