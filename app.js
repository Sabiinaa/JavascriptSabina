"use strict";
$(document).ready(function () {



    $('.btn').click(function (e) {
        e.preventDefault();
        if ($.trim($('input').val()) == '') {
            $('input').val();
        } else {
            let k = v => {
                for (let i = 0; i < v; i++) { $('.smallbox').append(`<h5>${v}</h5>`) };
            }
            let z = e => Number(e) ? k(e) : $('.smallbox').append(`<h5>${e}</h5>`);
            z($('input').val());
        }
        $('input').val('')
    })
});


