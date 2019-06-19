"use strict";

function allScriptsLk2() {
    var pltzJsLk = new PltzLk();

    pltzJsLk.initInputMaskedCard();
    pltzJsLk.initInputMaskedBlockSum();
    pltzJsLk.initCountdown('.js-prolongate-countdown', '2018-05-03T23:59:59+03:00');
}

$(document).ready(function () {
    allScriptsLk2();
});

// Additional scripts ONLY for Living Styleguide
$(function() {
    $(window).one('styleguide:onRendered', function() {
        allScriptsLk2();
    });
});
