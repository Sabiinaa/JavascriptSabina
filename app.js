"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();
        let func = a => {
            if (Number(a)) {
                for (let i = 1; i <= a; i++) {
                    $('.smallbox').append(`<h1>${a}</h1>`);
                }
            } else {
                $('.smallbox').append(`<h1>${a}</h1>`);
            }
            input.value = "";
        }
        func($('input').val());
    });
});


