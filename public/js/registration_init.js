"use strict";

/**
 * В этом файле базовые скрипты
 */
function allScripts() {
    var pltzJs = new Pltz();

    pltzJs.initToTop();
    pltzJs.initTopMenu();
    pltzJs.initInputMaskedPhone();
    pltzJs.initInputMaskedPhoneOptional();
    pltzJs.initInputMaskedIncomeExpense();

    pltzJs.initInputSourceOfIncome();
    pltzJs.initInputViewRequiredAdditional();
    pltzJs.initInputValidBeforeSubmit();
    pltzJs.initInputViewRequiredAktData();
    pltzJs.initInputValidDataRegister();
    pltzJs.initInputValidDataLogin();

    pltzJs.initInputMaskedSms();
    pltzJs.initInputMaskedPassport();
    pltzJs.initInputMaskedDate();
    pltzJs.initInputMaskedDateFuture();


    pltzJs.initInputMaskedBankBIK();
    pltzJs.initInputMaskedBankAccountNumber();
    pltzJs.initInputMaskedYandexNumber();


    pltzJs.initInputMaskedPassportPodr();
    pltzJs.initInputMaskedSnils();
    pltzJs.initInputMaskedInn();
    pltzJs.initInputMaskedMoney();
    pltzJs.initInputMaskedCyrillic();
    pltzJs.initInputMaskedFio();
    pltzJs.initInputMaskedName();
    pltzJs.initInputMaskedFioSeparately();

    pltzJs.initInputMaskedLocation();
    pltzJs.initInputMaskedGeo();
    pltzJs.initInputRequired();
    pltzJs.initInputMaskedEmail();
    pltzJs.initDatePassportVerify();

    pltzJs.initStatesOfControls();
    pltzJs.initTextareaResize();

    pltzJs.initFormGroupClearField();

    // TODO
    pltzJs.initCheckboxNoSomeField();

    pltzJs.initFormProgress();

    pltzJs.initPasswordStrength();
    pltzJs.initPasswordRepeat();
    pltzJs.initStatesOfControls();
    pltzJs.initHintsInForms();
    pltzJs.initSelectStyled();

    pltzJs.initJCarousel();
    pltzJs.initInputFile();

    pltzJs.initAddressLiving();
    pltzJs.initFileUpload();
    pltzJs.initDocumentType();

    pltzJs.initManagePhoneNumber();

    pltzJs.initTooltips();
    pltzJs.initModal();

}

$(document).ready(function () {
    allScripts();
});

$(window).resize(function() {
    //initSelectStyled();
});

// Additional scripts ONLY for Living Styleguide
$(function() {
    $(window).one('styleguide:onRendered', function() {
        allScripts();

        // Standard ui-slider - only for styleguide
        $('.sg-ui-slider').slider({
            range: 'min',
            min: 0,
            max: 1000,
            value: 300,
            step: 100
        });
    });
});
