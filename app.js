"use strict";
$(document).ready(function () {

 

    // $('.btn').click(function (e) {
    //     e.preventDefault();
    //     if ($.trim($('input').val()) == '') {
    //         $('input').val();
    //     } else {
    //         let k = v => {
    //             for (let i = 0; i < v; i++) { $('.smallbox').append(`<h2>${v}</h2>`) };
    //         }
    //         let z = e => Number(e) ? k(e) : $('.smallbox').append(`<h2>${e}</h2>`);
    //         z($('input').val());
    //     }
    //     $('input').val('')
    // })
    $('.btn').click(function (e) {
        e.preventDefault();
        if (!$.trim($('input').val()) == '') {
            let a = b => {
                for (let i = 0; i < b; i++) { $('.minibox').append(`<h2>${b}</h2>`) };
            }
            let d = f => Number(f) ? a(f) : $('.minibox').append(`<h2>${f}</h2>`);
            d($('input').val());
        }
        $('input').val('') 
    })
});



