"use strict";

function allScripts2() {
    var pltzJs = new Pltz();

    var birthPlace = $('#rBirthPlace');

    /**
     * Вызов функции прогресса заполнения формы при изменении текстового поля
     */
    birthPlace.on('blur', function() {
        pltzJs.initFormProgress();
    });

    /**
     * Вызов функции прогресса заполнения формы при изменении чекбокса или радиобаттона
     */
    $('#rBvd').on('change', function() {
        pltzJs.initFormProgress();
        pltzJs.initFormGroupToggleError($(this), !$(this).prop('checked'));
    });

    /**
     * Вызов функции отображения и скрытия ошибок ввода в поля формы
     */
    //pltzJs.initFormGroupShowError(birthPlace);
    birthPlace.on('change', function()  {
        pltzJs.initFormGroupHideError($(this));
    });

    /**
     * Установка значения в поле ввода
     */
    //pltzJs.initFormGroupSetValue($('#rPassport'), '123');

    /**
     * Автокомплит адреса
     */
    var addressControl = '.js-autocomplete-address',
        addresesList = [
            'г. Москва, Ул. Ленина, д. 68, кв. 71',
            'г. Пермь, Ул. Мира, д. 21, кв. 45',
            'г. Санкт-Петербург, Ул. Коммунистическая, д. 39, кв. 71',
            'г. Коломна, Ул. Розы Люксембург, д. 68, кв. 71',
            'г. Киров, Ул. Ленина, д. 68, кв. 71',
            'г. Нефтеюганск, Ул. Ленина, д. 68, кв. 71',
            'г. Бобруйск, Ул. Ленина, д. 68, кв. 71',
            'г. Шолохов, Ул. Ленина, д. 68, кв. 71'
        ];

    pltzJs.initAutocompleteGeneric(addressControl, addresesList);


    /**
     * Вызов таймера при отправке смс
     */
    var targetBtn = document.querySelector('.js-sms-send-link');
    if(targetBtn) {
        targetBtn.addEventListener('click', function() {
            //pltzJs.initStartTimerSms(targetBtn, 10);
            targetBtn.setAttribute('disabled', '');
        });
    }

    /**
     * Автостарт таймера отправки смс, авторизация (02-02-A.php)
     */
    var targetBtn2 = document.querySelector('.js-sms-send-link2');
    pltzJs.initStartTimerSms(targetBtn2, 10);

    /**
     * Фейковый таймер для маркетинга
     */
    var fake = document.querySelector('.js-pltz-timer-fake');
    pltzJs.initTimerFake(fake, 10);

    /**
     * Скрол к элементу
     */
    var elementToScroll = $('.js-demo-scroll');
    elementToScroll.on('click', function() {
        pltzJs.initScrollToElement($(this));
    });

}

$(document).ready(function () {
    allScripts2();
});

// Additional scripts ONLY for Living Styleguide
$(function() {
    $(window).one('styleguide:onRendered', function() {
        allScripts2();
    });
});
