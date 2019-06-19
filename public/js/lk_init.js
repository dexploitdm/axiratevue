"use strict";

function allScriptsLk() {
    var pltzJsLk = new PltzLk();

    pltzJsLk.initLoanSlider();
    pltzJsLk.initLoanTimeline();
    pltzJsLk.initLoanProlongate();
    pltzJsLk.initLoanActive();
    pltzJsLk.initInputMaskedMoney();
    pltzJsLk.initOrderBackCall(4);
    pltzJsLk.initEmailConfirm(4);
    pltzJsLk.initEmail2Confirm(4);
    pltzJsLk.initPhoneConfirm(8);
    pltzJsLk.initAlert();

    /**
     * Кастомный скроллбар в блоке с шагами получения займа
     */
    var scrollContent = document.querySelector('.js-tabs-scroll');
    pltzJsLk.initCustomScrollbar(scrollContent, 'horizontal');

}

$(document).ready(function () {
    allScriptsLk();
});

// Additional scripts ONLY for Living Styleguide
$(function() {
    $(window).one('styleguide:onRendered', function() {
        allScriptsLk();
    });
});
