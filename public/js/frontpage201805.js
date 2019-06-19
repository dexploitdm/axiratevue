(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PltzFrontpage201805 = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Калькулятор займа
 * @module loanSlider
 * @requires jquery
 */

function LoanSlider() {
    const self = this;

    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
    const moment = (typeof window !== "undefined" ? window['moment'] : typeof global !== "undefined" ? global['moment'] : null);
    moment.locale('ru');

    /**
     * Значения на калькуляторе по умолчанию
     * @type {{d: number, dMin: number, dMax: number, dStep: number, t: number, tMin: number, tMax: number, tStep: number, T: number}}
     */
    const
        CALCULATOR_DEFAULTS = {
            // Сумма
            d: 3000,
            dMin: 100,
            dMax: 70000,
            dStep: 1000,

            // Период
            t: 10,
            tMin: 5,
            tMax: 40,
            tStep: 1,
            T: 365 // Количество дней в году
        };

    /**
     * Текущие значения на калькуляторе
     * @type {{d: number, t: number}}
     */
    self.CALCULATOR_CURRENT_VALUES = {
        d: CALCULATOR_DEFAULTS.d,
        t: CALCULATOR_DEFAULTS.t
    };

    /**
     * Селекторы элементов
     * @type {{sliderSumCont: string, inputSum: string, valueSum: string, slider: string, sliderPeriodCont: string, inputPeriod: string, sumRepayCont: string, periodRepayCont: string}}
     */
    self.CALCULATOR_NODES = {
        sliderSumCont: '.js-slider-sum',
        inputSum: '.js-sum-input',
        valueSum: '.js-sum-value',
        slider: '.js-slider-item',
        sliderPeriodCont: '.js-slider-period',
        inputPeriod: '.js-period-input',
        sumStartCont: '.js-sum-start',
        sumRepayCont: '.js-sum-repay',
        periodRepayCont: '.js-period-repay'
    };

    const sliderSum = $(self.CALCULATOR_NODES.sliderSumCont),
        sliderPeriod = $(self.CALCULATOR_NODES.sliderPeriodCont),
        contSumStart = $(self.CALCULATOR_NODES.sumStartCont),
        contSumTotal = $(self.CALCULATOR_NODES.sumRepayCont),
        contPeriodRepay = $(self.CALCULATOR_NODES.periodRepayCont);

    let inputSumCont,
        valueSumCont,
        sliderSumItem,
        inputPeriodCont,
        sliderPeriodItem;

    if(sliderSum.length) {
        const $this = sliderSum;

        inputSumCont = $this.find(self.CALCULATOR_NODES.inputSum);
        valueSumCont = $this.find(self.CALCULATOR_NODES.valueSum);
        sliderSumItem = $this.find(self.CALCULATOR_NODES.slider);
    }

    if(sliderPeriod.length) {
        const $this = sliderPeriod;

        inputPeriodCont = $this.find(self.CALCULATOR_NODES.inputPeriod);
        sliderPeriodItem = $this.find('.js-slider-item');
    }

    /**
     * Инициализация калькулятора
     */
    self.init = function() {
        const contCalculator = $('.js-loan-calculator');

        if(contCalculator.length) {

            self.setValues();
            self.calculateRepaySum();
            self.calculateRepayDate();

            self.inputManage(contCalculator, self.CALCULATOR_NODES.inputSum, CALCULATOR_DEFAULTS.dMin, CALCULATOR_DEFAULTS.dMax);
            self.inputManage(contCalculator, self.CALCULATOR_NODES.inputPeriod, CALCULATOR_DEFAULTS.tMin, CALCULATOR_DEFAULTS.tMax);

        }
    };

    /**
     * Форматирование суммы к возврату
     * @param val Сумма в рублях
     */
    self.formatSumValue = function(val) {
        const FormatNumber = require('./helpers/_formatNumber');
        const formatNumberFunc = new FormatNumber(val);

        return formatNumberFunc.init();
    };

    /**
     * Маска для полей ввода суммы и срока, с разделением на разряды
     * @param {String} target Селектор поля ввода для маски
     */
    self.maskInputs = function(target) {
        var InputMaskedMoney = require('./forms/_inputMaskedMoney');
        var inputMaskedMoneyFunc = new InputMaskedMoney(target);

        inputMaskedMoneyFunc.init();

    };

    function periodValCalculator(periodCalculator) {
        /*
        Увеличить возможный срок займа до 24 недель.
        После того, как ползунок вышел за 30 дней, шаг идет 2 недели (30 дней, 6 недель, 8, недель, ......., 24 недели)
         */
        const formatValPeriod = periodCalculator.split(' ').join('');
        if(formatValPeriod > 30) {

            periodToWeeks(); //Переход на недели  visibility: hidden; visible
            $('.js-slider-period .c-calc__slider-part_info').text('Недель');
            $("#valweeks").css({'visibility' : 'visible'});
            inputPeriodCont.css({'width' : '1%'});
            $('.js-replace-text').empty().text('Платеж раз в 2 недели:');
            summValToLimit2(); //Выбор ограничить: от 16 000 до 70 000р.
        } else {
            inputPeriodCont.css({'width' : '100%'});
            $('.slider-message').empty();
        }
        function periodToWeeks() {
            const valMap = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,6,8,10,12,14,16,18,20,22,24];
            sliderPeriodItem.slider({
                range: 'min',
                max: valMap.length - 1,
                slide: function (event, ui) {
                    if(ui.value > 30){
                        periodTriggerWeeksOn();
                    } else {
                        periodTriggerWeeksOff();
                    }
                    self.CALCULATOR_CURRENT_VALUES.t = ui.value;
                    $("#valweeks").text(valMap[ui.value]);
                    inputPeriodCont.val(ui.value);
                    self.calculateRepaySum();
                    self.calculateRepayDate();
                },
                change: function (event, ui) {
                    self.CALCULATOR_CURRENT_VALUES.t = ui.value;
                    if(ui.value > 30){
                        periodTriggerWeeksOn();
                    } else {
                        periodTriggerWeeksOff();
                    }
                }
            });
        }
        function periodTriggerWeeksOn() {
            $('.js-replace-text').empty().text('Платеж раз в 2 недели:');

            $('.slider-message').css({'opacity' : '1'});
            $('.slider-message').empty();
            $('.slider-message').text(' Оформление займа на срок от 6 недель, доступно только на сумму выше 15 000р. и с выплатой займа раз в 2 недели');

            $('.show-graph').css({'display' : 'block'});


            $("#valweeks").css({'visibility' : 'visible'});
            inputPeriodCont.css({'width' : '1%'});
            $('.js-slider-period .c-calc__slider-part_info').text('Недель');
            summValToLimit2();
        }
        function periodTriggerWeeksOff() {
            $('.js-replace-text').empty().text('Сумма к возврату:');
            inputPeriodCont.css({'width' : '100%'});


            //$('#sliderMessagePer').empty();
            $('.slider-message').css({'opacity' : '0'});
            $('.slider-message').empty();
            $('.show-graph').css({'display' : 'none'});
            $('#graph').hide();

            $("#valweeks").css({'visibility' : 'hidden'});
            $('.js-slider-period .c-calc__slider-part_info').text('дней');
            summValToOriginal();
        }
        function summValToLimit2() {
            const currentSumLoans = inputSumCont.val();
            const formatCurrentSumLoans = currentSumLoans.split(' ').join('');

            if(formatCurrentSumLoans < 16000){
                //inputSumCont.val(16000);
                sliderSumItem.slider({
                    range: 'min',
                    min: 16000,
                    value: 16000,
                });
            } else {
                sliderSumItem.slider({
                    range: 'min',
                    min: 16000
                });
            }
        }
        function summValToOriginal() {
            const currentSumLoans = inputSumCont.val();
            const formatCurrentSumLoans = currentSumLoans.split(' ').join('');
            if(formatCurrentSumLoans < 16000){
                inputSumCont.val(3000);
            }
            sliderSumItem.slider({
                range: 'min',
                min: 3000,
            });
        }
        inputPeriodCont.focus(function() {
            $("#valweeks").css({'visibility' : 'hidden'});
        });
    }







    function culcSumm(contSumCalculator) {
        /*
        При выборе суммы займа свыше 30 000р., необходимо выводить всплывающее сообщение
        Выбор срока ограничить при этом: от 6 до 24 недель.
         */
        const formatSumCulc = contSumCalculator.split(' ').join('');
        if(formatSumCulc > 30000) {
            viewMessageSum();

            periodValToLimit();
        } else {
            periodValToOriginal();
        }
        function periodValToLimit() {
            const currentPeriodLoans = inputPeriodCont.val();
            const formatCurrentPeriodLoans = currentPeriodLoans.split(' ').join('');
            if(formatCurrentPeriodLoans < 31){
                inputPeriodCont.val(31);
                $("#valweeks").text(6);
            }
            sliderPeriodItem.slider({
                range: 'min',
                min: 31,
                max: 40,
                value: 31
            });
        }
        function periodValToOriginal() {
            sliderPeriodItem.slider({
                range: 'min',
                min: 5,
                max: 40,
                step: 1,
            });
        }

    }
    function viewMessageSum() {
        $('.slider-message').empty();
        $('.slider-message').css({'opacity' : '1'});
        $('.slider-message').text('Оформление займа на сумму выше 30 000р., доступно на срок от 6 недель и с выплатой займа раз в 2 недели');
    }
    function offMessageSum() {
        $('.slider-message').empty();
        $('.slider-message').css({'opacity' : '0'});
    }
    /**
     * Слайдер для выбора суммы займа
     */
    self.initSliderSum = function() {
        if (sliderSum.length) {
            /**
             * Значения
             */
            let startSumVal = sliderSumItem.data('start') || inputSumCont.data('start') || CALCULATOR_DEFAULTS.d;

            sliderSumItem.slider({
                range: 'min',
                min: sliderSumItem.data('min') || inputSumCont.data('min') || CALCULATOR_DEFAULTS.dMin,
                max: sliderSumItem.data('max') || inputSumCont.data('max') || CALCULATOR_DEFAULTS.dMax,
                value: startSumVal,
                step: sliderSumItem.data('step') || inputSumCont.data('step') || CALCULATOR_DEFAULTS.dStep,
                slide: function (event, ui) {
                    self.CALCULATOR_CURRENT_VALUES.d = ui.value;

                    inputSumCont.val(ui.value);
                    valueSumCont.val(ui.value);
                    contSumStart.text(self.formatSumValue(ui.value));
                    if(ui.value > 30000){
                        viewMessageSum();
                    } else {
                        offMessageSum();
                    }
                    self.calculateRepaySum();
                },
                change: function (event, ui) {
                    self.CALCULATOR_CURRENT_VALUES.d = ui.value;

                    inputSumCont.val(ui.value);
                    valueSumCont.val(ui.value);
                    contSumStart.text(self.formatSumValue(ui.value));
                    const contSumCalculator = $('.js-sum-input').val();
                    culcSumm(contSumCalculator);
                    if(ui.value > 30000){
                        viewMessageSum();
                    } else {
                        offMessageSum();
                    }
                    self.calculateRepaySum();
                }
            });

            contSumStart.text(self.formatSumValue(startSumVal));


        }
    };


    /**
     * Слайдер для выбора периода займа
     */
    self.initSliderPeriod = function() {
        if (sliderPeriod.length) {

            const valMap = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,6,8,10,12,14,16,18,20,22,24];

            sliderPeriodItem.slider({
                range: 'min',
                min: sliderPeriodItem.data('min') || inputPeriodCont.data('min') || CALCULATOR_DEFAULTS.tMin,
                //max: sliderPeriodItem.data('max') || inputPeriodCont.data('max') || CALCULATOR_DEFAULTS.tMax,
                max: valMap.length - 1,
                value: sliderPeriodItem.data('start') || inputPeriodCont.data('start') || CALCULATOR_DEFAULTS.t,
                step: sliderPeriodItem.data('step') || inputPeriodCont.data('step') || CALCULATOR_DEFAULTS.tStep,
                slide: function (event, ui) {

                    self.CALCULATOR_CURRENT_VALUES.t = ui.value;

                    $("#valweeks").text(valMap[ui.value]);
                    // inputPeriodCont.val(valMap[ui.value]);

                    inputPeriodCont.val(ui.value);
                    const periodCalculator = $('.js-period-input').val();
                    periodValCalculator(periodCalculator);
                    self.calculateRepaySum();
                    self.calculateRepayDate();
                },
                change: function (event, ui) {
                    self.CALCULATOR_CURRENT_VALUES.t = ui.value;

                    $("#valweeks").text(valMap[ui.value]);
                    inputPeriodCont.val(ui.value);
                    //inputPeriodCont.val(valMap[ui.value]);

                    const periodCalculator = $('.js-period-input').val();
                    periodValCalculator(periodCalculator);

                    self.calculateRepaySum();
                    self.calculateRepayDate();
                }
            });
        }
    };

    /**
     * Установка значений для элементов калькулятора
     */
    self.setValues = function() {
        sliderSum.find(self.CALCULATOR_NODES.valueSum).val(self.CALCULATOR_CURRENT_VALUES.d);
        self.initSliderSum();

        sliderPeriod.find(self.CALCULATOR_NODES.inputPeriod).val(self.CALCULATOR_CURRENT_VALUES.t);
        self.initSliderPeriod();
    };

    /**
     * Обработка полей ввода суммы и срока займа
     * @param {Node} form Форма калькулятора
     * @param {String} input Селектор поля ввода для обработки
     * @param {Number} min Минимально допустимое значение поля
     * @param {Number} max Максимально допустимое значение поля
     */
    self.inputManage = function(form, input, min, max) {

        /**
         * Маскирование полей ввода
         */
        self.maskInputs(input);

        /**
         * Проверка граничных значений поля, обновление значений на слайдерах
         * @param evt Событие
         * @param value Значение поля
         */
        const inputManageFunction = function(evt, value) {
            let current = value;

            if(value < min) {
                evt.target.value = current = min;
            }
            else if(value > max) {
                evt.target.value = current = max;
            }

            if($(evt.target).parents(self.CALCULATOR_NODES.sliderSumCont).length) {
                sliderSumItem.slider('value', current);
            }

            if($(evt.target).parents(self.CALCULATOR_NODES.sliderPeriodCont).length) {
                sliderPeriodItem.slider('value', current);
            }

        };

        /**
         * Обработка события blur
         */
        form.on('blur', input, function(e) {
            if(e.target.inputmask) {
                inputManageFunction(e, e.target.inputmask.unmaskedvalue());
            }
        });

        /**
         * Обработка события keypress
         */
        form.on('keypress', input, function(e) {
            if (
                (e.which !== 8)
                && (e.which !== 13)
                && (e.which < 32 || e.ctrlKey || e.altKey)
            ) {
                return false;
            }

            if (e.which === 13) {
                if(e.target.inputmask) {
                    inputManageFunction(e, e.target.inputmask.unmaskedvalue());
                }

                return false;
            }
        })

    };

    /**
     * Расчет суммы к возврату
     */
    self.calculateRepaySum = function() {

        // ToDO: Фейковая формула
        if(self.CALCULATOR_CURRENT_VALUES.t == 31){ //6 недель (3 цикла оплаты)
            self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 11;

        } else if(self.CALCULATOR_CURRENT_VALUES.t == 32){ //8 недель (4 цикла оплаты)
            self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 24;

        } else if(self.CALCULATOR_CURRENT_VALUES.t == 33){ //10 недель (5 цикла оплаты)
            self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 37;

        } else if(self.CALCULATOR_CURRENT_VALUES.t == 34){ //12 недель (6 цикла оплаты)
            self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 50;

        } else if(self.CALCULATOR_CURRENT_VALUES.t == 35){ //14 недель (7 цикла оплаты)
            self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 63;

        } else if(self.CALCULATOR_CURRENT_VALUES.t == 36){ //16 недель (8 цикла оплаты)
            self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 76;

        } else if(self.CALCULATOR_CURRENT_VALUES.t == 37){ //18 недель (9 цикла оплаты)
            self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 89;

        } else if(self.CALCULATOR_CURRENT_VALUES.t == 38){ //20 недель (10 цикла оплаты)
            self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 102;

        } else if(self.CALCULATOR_CURRENT_VALUES.t == 39){ //22 недели (11 цикла оплаты)
            self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 115;

        } else if(self.CALCULATOR_CURRENT_VALUES.t == 40){ //24 недели (12 цикла оплаты)
            self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 128;
        }

        //var totalSum = Math.round(self.CALCULATOR_CURRENT_VALUES.d + (self.CALCULATOR_CURRENT_VALUES.d * self.CALCULATOR_CURRENT_VALUES.t * self.CALCULATOR_CURRENT_VALUES.c));
        const totalSum = Math.round(self.CALCULATOR_CURRENT_VALUES.d + (self.CALCULATOR_CURRENT_VALUES.d * self.CALCULATOR_CURRENT_VALUES.t * 0.0150));
        //const totalSum = Math.round(self.CALCULATOR_CURRENT_VALUES.d + (self.CALCULATOR_CURRENT_VALUES.d * self.CALCULATOR_CURRENT_VALUES.t / 1.225));

        const periodCalculator = $('.js-period-input').val();
        if(periodCalculator <= 30){
           // console.log(self.CALCULATOR_CURRENT_VALUES.d + ' + (' + self.CALCULATOR_CURRENT_VALUES.d + ' * ' + self.CALCULATOR_CURRENT_VALUES.t + ' * 0.0150)  = ' + totalSum);
        }

        if(periodCalculator == 31){
            const totalSumTwoWeeks = totalSum/3;
            const testsum = Math.floor(totalSumTwoWeeks);

            contSumTotal.text(self.formatSumValue(testsum));
        } else if(periodCalculator == 32){
            const totalSumTwoWeeks = totalSum/4;
            const testsum = Math.floor(totalSumTwoWeeks);

            contSumTotal.text(self.formatSumValue(testsum));
        } else if(periodCalculator == 33){
            const totalSumTwoWeeks = totalSum/5;
            const testsum = Math.floor(totalSumTwoWeeks);

            contSumTotal.text(self.formatSumValue(testsum));
        } else if(periodCalculator == 34){
            const totalSumTwoWeeks = totalSum/6;
            const testsum = Math.floor(totalSumTwoWeeks);

            contSumTotal.text(self.formatSumValue(testsum));
        } else if(periodCalculator == 35){
            const totalSumTwoWeeks = totalSum/7;
            const testsum = Math.floor(totalSumTwoWeeks);

            contSumTotal.text(self.formatSumValue(testsum));
        } else if(periodCalculator == 36){
            const totalSumTwoWeeks = totalSum/8;
            const testsum = Math.floor(totalSumTwoWeeks);

            contSumTotal.text(self.formatSumValue(testsum));
        } else if(periodCalculator == 37){
            const totalSumTwoWeeks = totalSum/9;
            const testsum = Math.floor(totalSumTwoWeeks);

            contSumTotal.text(self.formatSumValue(testsum));
        } else if(periodCalculator == 38){
            const totalSumTwoWeeks = totalSum/10;
            const testsum = Math.floor(totalSumTwoWeeks);

            contSumTotal.text(self.formatSumValue(testsum));
        } else if(periodCalculator == 39){
            const totalSumTwoWeeks = totalSum/11;
            const testsum = Math.floor(totalSumTwoWeeks);

            contSumTotal.text(self.formatSumValue(testsum));
        } else if(periodCalculator == 40){
            const totalSumTwoWeeks = totalSum/12;
            const testsum = Math.floor(totalSumTwoWeeks);

            contSumTotal.text(self.formatSumValue(testsum));
        }
        else {
            contSumTotal.text(self.formatSumValue(totalSum));
        }
    };

    /**
     * Расчет даты возврата займа
     */
    self.calculateRepayDate = function() {
        // if(self.CALCULATOR_CURRENT_VALUES.t == 31){
        //     self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 11;
        // } else if(self.CALCULATOR_CURRENT_VALUES.t == 32){
        //     self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 24;
        // } else if(self.CALCULATOR_CURRENT_VALUES.t == 33){
        //     self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 37;
        // } else if(self.CALCULATOR_CURRENT_VALUES.t == 34){
        //     self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 50;
        // } else if(self.CALCULATOR_CURRENT_VALUES.t == 35){
        //     self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 63;
        // } else if(self.CALCULATOR_CURRENT_VALUES.t == 36){
        //     self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 76;
        // } else if(self.CALCULATOR_CURRENT_VALUES.t == 37){
        //     self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 89;
        // } else if(self.CALCULATOR_CURRENT_VALUES.t == 38){
        //     self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 102;
        // } else if(self.CALCULATOR_CURRENT_VALUES.t == 39){
        //     self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 115;
        // } else if(self.CALCULATOR_CURRENT_VALUES.t == 40){
        //     self.CALCULATOR_CURRENT_VALUES.t = self.CALCULATOR_CURRENT_VALUES.t  + 128;
        // }
        const repayDate = moment().add(self.CALCULATOR_CURRENT_VALUES.t, 'days').format('DD MMMM, YYYY');

        contPeriodRepay.text(repayDate);

    };
    //Показать график
    $(function() {
        $('.show-graph').on('click', function(e) {
            $('#graph').slideToggle(function() {
                //console.log($(e.target).is(':visible'));
                $(e.target).text($(this).is(':visible') ? 'График платежей' : 'График платежей');
            });
        });
    });
    /*
    * Скрытие сообщение при клике вне
     */
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".slider-message"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.css({'opacity' : '0'});
        }
    });

}

module.exports = LoanSlider;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./forms/_inputMaskedMoney":4,"./helpers/_formatNumber":7}],2:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Тултипы
 * @module tooltips
 * @see https://atomiks.github.io/tippyjs/
 */
function Tooltips() {
    var self = this;

    var tippy = (typeof window !== "undefined" ? window['tippy'] : typeof global !== "undefined" ? global['tippy'] : null);

    var cont = document.querySelectorAll('.js-tippy');

    self.init = function() {
        if(cont) {
            Array.prototype.slice.call(cont).forEach(
                function(el) {
                    tippy(el, {
                        theme: 'pltz',
                        arrow: true,
                        allowTitleHTML: true
                    });
                }
            );
        }
    };

}

module.exports = Tooltips;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
'use strict';

/**
 * Верхнее меню
 * @module topMenu
 */
function TopMenu() {
    const self = this;

    const topMenuComplex = document.querySelector('.js-top-menu-complex'),
        toggler = document.querySelector('.js-menu-toggler');

    self.init = function() {
        if(topMenuComplex) {
            const expandLink = topMenuComplex.querySelectorAll('.js-expand-link');

            if(toggler) {
                const body = document.querySelector('body');

                const menuToggle = function() {
                    if(body.classList.contains('is-menu-opened')) {
                        body.classList.remove('is-menu-opened');
                    }
                    else {
                        body.classList.add('is-menu-opened');
                    }
                };

                toggler.addEventListener('click', menuToggle);

                window.addEventListener('resize', function() {
                    body.classList.remove('is-menu-opened');
                });
            }

            if(expandLink) {
                const getParents = require('./helpers/_getParents');

                if(expandLink) {
                    Array.prototype.slice.call(expandLink).forEach(
                        function(el) {
                            const parentItem = getParents(el, '.js-menu-parent-item');

                            const submenuToggle = function(e) {
                                if(parentItem) {
                                    if(parentItem.classList.contains('is-active')) {
                                        parentItem.classList.remove('is-active');
                                    }
                                    else {
                                        parentItem.classList.add('is-active');
                                    }

                                    e.preventDefault();
                                }
                            };

                            el.addEventListener('click', submenuToggle);
                        }
                    );
                }

            }
        }
    };

}

module.exports = TopMenu;

},{"./helpers/_getParents":8}],4:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута числового значения с разделением по разрядам
 * @param {string} selector - Селектор инпута с числовым значением. Без параметра - селектор '.js-input-money'
 * @module inputMaskedMoney
 */
function InputMaskedMoney(selector) {
    const self = this;

    selector = selector || '.js-input-money';

    /**
     * Инициализация функции
     */
    self.init = function() {
        const input = document.querySelectorAll(selector);

        if(input) {
            const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
            const Inputmask = (typeof window !== "undefined" ? window['Inputmask'] : typeof global !== "undefined" ? global['Inputmask'] : null);
            const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');

            Array.prototype.slice.call(input).forEach(
                function(el) {
                    const formGroupErrorManage = new FormGroupErrorManage($(el));

                    const moneyMask = new Inputmask(
                        'decimal',
                        {
                            placeholder: '_',
                            rightAlign: false,
                            groupSize: '3',
                            autoGroup: true,
                            groupSeparator: ' ',
                            radixPoint: '.',
                            allowMinus: false,
                            digits: 0,
                            onincomplete: function() {
                                if(el.value.length === 0) {
                                    formGroupErrorManage.showError('Обязательное поле');
                                }
                                else {
                                    formGroupErrorManage.showError('Заполните полностью');
                                }
                            },
                            oncomplete: function() {
                                formGroupErrorManage.hideError();
                            }
                        }
                    );

                    moneyMask.mask(el);
                }
            );
        }
    };

}

module.exports = InputMaskedMoney;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":5}],5:[function(require,module,exports){
'use strict';

/**
 * Управление отображением ошибок в полях формы
 * @param {Node} target - jQuery-элемент, для которого нужно вывести или скрыть ошибку валидации
 * @param {String} text - Текст ошибки
 * @constructor
 * @module formGroupErrorManage
 */
function FormGroupErrorManage(target, text) {
    const self = this;

    const parent = target.closest('.c-form-group'),
        errorCont = parent.find('.c-form-group__message');

    self.toggleError = function(flag) {
        parent.toggleClass('is-error', flag);
    };

    /**
     * Отобразить ошибку
     */
    self.showError = function(textInternal) {
        text = text === undefined ? false : text;
        textInternal = textInternal === undefined ? false : textInternal;

        if(text !== false) {
            errorCont.text(text);
        }
        else if(textInternal !== false) {
            errorCont.text(textInternal);
        }

        self.toggleError(true);
    };

    /**
     * Скрыть ошибку
     */
    self.hideError = function() {
        self.toggleError(false);
    };

    /**
     * Изменить текст ошибки
     */
    self.setErrorText = function(text) {
        errorCont.text(text);
    };

    /**
     * Проверка поля на ошибку
     * @returns {Boolean} Есть ли ошибка
     */
    self.hasError = function() {
        return parent.hasClass('is-error');
    };
}

module.exports = FormGroupErrorManage;

},{}],6:[function(require,module,exports){
'use strict';

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function PlatizaJsFp2018() {
    const self = this;

    /**
     * Слайдер
     * @see module:loanSlider
     */
    self.initLoanSlider = function() {
        var LoanSlider = require('./_loanSlider');
        var loanSliderFunc = new LoanSlider();

        loanSliderFunc.init();
    };

    /**
     * Тултипы
     * @see module:tooltips
     */
    self.initTooltips = function() {
        const Tooltips = require('./_tooltips');
        const tooltipsFunc = new Tooltips();

        tooltipsFunc.init();
    };

    /**
     * Верхнее меню на мобильных
     * @see module:topMenu
     */
    self.initTopMenu = function() {
        const TopMenu = require('./_topMenu');
        const topMenuFunc = new TopMenu();

        topMenuFunc.init();
    };
}

module.exports = PlatizaJsFp2018;

},{"./_loanSlider":1,"./_tooltips":2,"./_topMenu":3}],7:[function(require,module,exports){
'use strict';

function FormatNumber(val) {
    var self = this;

    self.init = function() {
        var reversedValue = (val + '').split('').reverse().join(''),
            formattedValue = '';

        for (var i = reversedValue.length - 1; i >= 0; --i) {
            formattedValue += reversedValue[i];
            if (i % 3 === 0) {
                formattedValue += ' ';
            }
        }

        return formattedValue;
    };

}

module.exports = FormatNumber;

},{}],8:[function(require,module,exports){
'use strict';

/**
 * Get closest parent matching element
 * @param {Node} elem - The element
 * @param {Node} selector - The parent element selector
 * @module getParents
 */
function GetParents(elem, selector) {

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function(s) {
                    let matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;

                    while (--i >= 0 && matches.item(i) !== this) {

                    }

                    return i > -1;
                };
        }

        // Get the closest matching element
        for ( ; elem && elem !== document; elem = elem.parentNode ) {
            if ( elem.matches( selector ) ) {
                return elem;
            }
        }

        return null;


}

module.exports = GetParents;

},{}]},{},[6])(6)
});