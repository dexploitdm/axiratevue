(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PltzLk = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Alerts
 * @module alert
 */
function Alert() {
    const self = this;

    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    const cont = $('.js-alert');

    self.init = function() {
        if(cont.length) {
            cont.each(function() {
                const $this = $(this),
                    close = $this.find('.js-alert-close');

                if(close.length) {
                    close.on('click', function() {
                        $this.fadeOut(200, function() {
                            $this.remove();
                        });
                    });
                }
            });
        }
    };
}

module.exports = Alert;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
'use strict';

/**
 * Countdown timer - days, hours, minutes, seconds each are in 2 different spans (digits):
 * .js-days-1, .js-days-2; .js-hours-1, .js-hours-2; .js-minutes-1, .js-minutes-2; .js-seconds-1, .js-seconds-2
 * @module countdown
 * @param {string} selector - Selector of Countdown container
 * @param {string} endtime - End time of timer (Action)
 */

function Countdown(selector, endtime) {
    var self = this;

    /**
     * Init countdown
     */
    self.init = function() {
        var clock = document.querySelectorAll(selector);

        var updateClock = function() {
            if(clock) {

                for (var i = 0; i < clock.length; ++i) {
                    var daysSpan1 = clock[i].querySelector('.js-days-1'),
                        daysSpan2 = clock[i].querySelector('.js-days-2'),

                        hoursSpan1 = clock[i].querySelector('.js-hours-1'),
                        hoursSpan2 = clock[i].querySelector('.js-hours-2'),

                        minutesSpan1 = clock[i].querySelector('.js-minutes-1'),
                        minutesSpan2 = clock[i].querySelector('.js-minutes-2'),

                        secondsSpan1 = clock[i].querySelector('.js-seconds-1'),
                        secondsSpan2 = clock[i].querySelector('.js-seconds-2');

                    var t = self.getTimeRemaining(endtime);

                    if(daysSpan1) {
                        daysSpan1.innerHTML = ('0' + t.days).slice(-2, -1);
                    }
                    if(daysSpan2) {
                        daysSpan2.innerHTML = ('0' + t.days).slice(-1);
                    }

                    if(hoursSpan1) {
                        hoursSpan1.innerHTML = ('0' + t.hours).slice(-2, -1);
                    }
                    if(hoursSpan2) {
                        hoursSpan2.innerHTML = ('0' + t.hours).slice(-1);
                    }

                    if(minutesSpan1) {
                        minutesSpan1.innerHTML = ('0' + t.minutes).slice(-2, -1);
                    }
                    if(minutesSpan2) {
                        minutesSpan2.innerHTML = ('0' + t.minutes).slice(-1);
                    }

                    if(secondsSpan1) {
                        secondsSpan1.innerHTML = ('0' + t.seconds).slice(-2, -1);
                    }
                    if(secondsSpan2) {
                        secondsSpan2.innerHTML = ('0' + t.seconds).slice(-1);
                    }

                    if( t.total <= 0) {
                        clearInterval(timeinterval);

                        clock[i].classList.add('finished');
                    }
                }

            }
        };

        updateClock();

        var timeinterval = setInterval(updateClock, 1000);
    };

    /**
     * Get remaining time
     * @returns {{total: number, days: number, hours: number, minutes: number, seconds: number}}
     */
    self.getTimeRemaining = function() {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor( ( t / 1000) % 60 );
        var minutes = Math.floor( ( t / 1000 / 60) % 60 );
        var hours = Math.floor( ( t / ( 1000 * 60 * 60 )) % 24 );
        var days = Math.floor( t / ( 1000 * 60 * 60 * 24) );

        seconds = (seconds < 0) ? 0 : seconds;
        minutes = (minutes < 0) ? 0 : minutes;
        hours = (hours < 0) ? 0 : hours;
        days = (days < 0) ? 0 : days;

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

}

module.exports = Countdown;

},{}],3:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Кастомный скроллбар
 * @module customScrollbar
 * @see https://github.com/utatti/perfect-scrollbar
 */
function CustomScrollbar(target, direction) {
    direction = direction ? direction : 'vertical';

    const self = this;

    const PerfectScrollbar = (typeof window !== "undefined" ? window['PerfectScrollbar'] : typeof global !== "undefined" ? global['PerfectScrollbar'] : null);

    self.init = function() {
        if(target) {
            const Scrollbar = new PerfectScrollbar(target, {
                wheelPropagation: true,
                suppressScrollX: direction === 'vertical',
                suppressScrollY: direction === 'horizontal'
            });

            window.addEventListener('resize', function() {
                Scrollbar.update();
            });
        }
    };

}

module.exports = CustomScrollbar;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Подтверждение email2
 * @param {Number} stepsNum Количество шагов при подтверждении почты
 * @module email2Confirm
 */

function Email2Confirm(stepsNum) {
    stepsNum = stepsNum || 4;

    const self = this;

    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    self.init = function() {
        const orderForm = $('.js-email2-confirm');

        if(orderForm.length) {
            /**
             * Отображение нужных шагов формы
             * @param {Number} step Шаг формы
             */
            const toStep = function(step) {
                orderForm.find('.js-confirm-step' + step).removeClass('is-hidden-pltz').siblings().addClass('is-hidden-pltz');
            };

            /**
             * Переход по шагам формы
             */
            for (let step = 1; step <= stepsNum; step++) {
                orderForm.find('.js-confirm-to-step' + step).on('click', function(e) {
                    toStep(step);

                    e.preventDefault();
                });
            }

        }
    };

}

module.exports = Email2Confirm;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Подтверждение email
 * @param {Number} stepsNum Количество шагов при подтверждении почты
 * @module emailConfirm
 */

function EmailConfirm(stepsNum) {
    stepsNum = stepsNum || 4;

    const self = this;

    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    self.init = function() {
        const orderForm = $('.js-email-confirm');

        if(orderForm.length) {
            /**
             * Отображение нужных шагов формы
             * @param {Number} step Шаг формы
             */
            const toStep = function(step) {
                orderForm.find('.js-confirm-step' + step).removeClass('is-hidden-pltz').siblings().addClass('is-hidden-pltz');
            };

            /**
             * Переход по шагам формы
             */
            for (let step = 1; step <= stepsNum; step++) {
                orderForm.find('.js-confirm-to-step' + step).on('click', function(e) {
                    toStep(step);

                    e.preventDefault();
                });
            }

        }
    };

}

module.exports = EmailConfirm;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],6:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Активный заём
 * @module LoanActive
 * @requires jquery
 */

function LoanActive() {
    const self = this;

    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    self.LOAN_NODES = {
        activeLoanHook: '.js-loan-active-block',
        showDetailsLink: '.js-loan-details'
    };

    const activeLoanBlock = $(self.LOAN_NODES.activeLoanHook);
    const showDetailsLink = $(self.LOAN_NODES.showDetailsLink);

    self.init = function() {
        if(activeLoanBlock.length) {
            self.manageDetails();
        }
    };

    self.manageDetails = function() {
        if(showDetailsLink.length) {
            showDetailsLink.each(function() {
                const parentBlock = $(this).parents(self.LOAN_NODES.activeLoanHook);

                $(this).on('click', function(e) {
                    if(parentBlock.hasClass('is-details-active')) {
                        parentBlock.removeClass('is-details-active');
                        $(this).text('Подробности');
                    }
                    else {
                        parentBlock.addClass('is-details-active');
                        $(this).text('Скрыть подробности');
                    }

                    e.preventDefault();
                });
            });
        }
    };
}

module.exports = LoanActive;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],7:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Продление займа
 * @module loanProlongate
 * @requires jquery
 */

function LoanProlongate() {
    const self = this;

    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
    const moment = (typeof window !== "undefined" ? window['moment'] : typeof global !== "undefined" ? global['moment'] : null);
    moment.locale('ru');

    self.CALCULATOR_NODES = {
        contProlongate: '.js-loan-active-block',
        prolongateLink: $('.js-prolongate-link'),
        prolongateCancelLink: $('.js-prolongate-cancel-link'),
        sliderPeriod: '.js-slider-prolongate-period',
        inputPeriod: '.js-prolongate-period-input',
        slider: '.js-slider-item'
    };

    self.CALCULATOR_CURRENT_VALUES = {
        d: 1000,
        t: 10
    };

    const contProlongate = $(self.CALCULATOR_NODES.contProlongate);
    const sliderPeriod = $(self.CALCULATOR_NODES.sliderPeriod);

    self.init = function() {
        if(contProlongate.length) {

            self.enableProlongate();
            self.cancelProlongate();

            self.setValues();
            self.initSliderProlongatePeriod();

        }
    };


    /**
     * Enable prolongate link
     */
    self.enableProlongate = function() {
        const link = self.CALCULATOR_NODES.prolongateLink;

        if(link.length) {

            link.each(function() {
                const parentEl = $(this).parents(self.CALCULATOR_NODES.contProlongate);

                $(this).on('click', function(e) {
                    parentEl.addClass('is-prolongate-active');

                    e.preventDefault();
                });
            });
        }
    };


    /**
     * Cancel prolongate link
     */
    self.cancelProlongate = function() {
        const link = self.CALCULATOR_NODES.prolongateCancelLink;

        if(link.length) {
            link.each(function() {
                const parentEl = $(this).parents(self.CALCULATOR_NODES.contProlongate);

                $(this).on('click', function(e) {
                    parentEl.removeClass('is-prolongate-active');

                    e.preventDefault();
                });
            });
        }
    };

    /**
     * Слайдер для выбора периода продления займа
     */
    self.initSliderProlongatePeriod = function() {
        if (sliderPeriod.length) {
            const $this = sliderPeriod,
                inputCont = $this.find('.js-prolongate-period-input'),
                slider = $this.find('.js-slider-item');

            slider.slider({
                range: 'min',
                min: slider.data('min') || inputCont.data('min') || 5,
                max: slider.data('max') || inputCont.data('max') || 30,
                value: slider.data('start') || inputCont.data('start') || 10,
                step: 1,
                slide: function (event, ui) {
                    self.CALCULATOR_CURRENT_VALUES.t = ui.value;

                    inputCont.val(ui.value);

                    self.calculateRepayDate();
                },
                change: function (event, ui) {
                    self.CALCULATOR_CURRENT_VALUES.t = ui.value;

                    inputCont.val(ui.value);

                    self.calculateRepayDate();
                }
            });
        }
    };

    /**
     * Set values of elements in calculator
     */
    self.setValues = function() {
        sliderPeriod.find(self.CALCULATOR_NODES.inputPeriod).val(self.CALCULATOR_CURRENT_VALUES.t);
        self.initSliderProlongatePeriod();
    };

    /**
     * Calculate new Repay date
     */
    self.calculateRepayDate = function() {
        const contPeriodRepay = $('.js-prolongate-period-repay');

        const repayDate = moment().add(self.CALCULATOR_CURRENT_VALUES.t, 'days').format('DD MMMM, YYYY');

        contPeriodRepay.text(repayDate);

    };
}

module.exports = LoanProlongate;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],8:[function(require,module,exports){
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
},{"./forms/_inputMaskedMoney":14,"./helpers/_formatNumber":16}],9:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Таймлайн займа
 * @module loanTimeline
 */

function LoanTimeline() {
    const self = this;

    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
    const moment = (typeof window !== "undefined" ? window['moment'] : typeof global !== "undefined" ? global['moment'] : null);
    moment.locale('ru');


    self.init = function() {
        const sliderPeriod = $('.js-loan-time-progress');

        if (sliderPeriod.length) {

            const $this = sliderPeriod,
                slider = $this.find('.js-slider-item');

            slider.slider({
                range: 'min',
                min: slider.data('min') || $this.data('min') || 1,
                max: slider.data('max') || $this.data('max') || 30,
                value: slider.data('start') || $this.data('start') || 5,
                step: 1,
                disabled: true
            });
        }
    };

}

module.exports = LoanTimeline;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],10:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Обратный звонок
 * @param {Number} stepsNum Количество шагов при заказе обратного звонка
 * @module OrderBackCall
 */

function OrderBackCall(stepsNum) {
    stepsNum = stepsNum || 4;

    const self = this;

    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    self.init = function() {
        const orderForm = $('.js-order-back-call');

        if(orderForm.length) {
            /**
             * Отображение нужных шагов формы
             * @param {Number} step Шаг формы
             */
            const toStep = function(step) {
                orderForm.find('.js-order-step' + step).removeClass('is-hidden-pltz').siblings().addClass('is-hidden-pltz');
            };

            /**
             * Переход по шагам формы
             */
            for (let step = 1; step <= stepsNum; step++) {
                orderForm.find('.js-order-to-step' + step).on('click', function(e) {
                    toStep(step);

                    e.preventDefault();
                });
            }

        }
    };

}

module.exports = OrderBackCall;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],11:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Подтверждение email
 * @param {Number} stepsNum Количество шагов при подтверждении почты
 * @module emailConfirm
 */

function PhoneConfirm(stepsNum) {
    stepsNum = stepsNum || 8;

    const self = this;

    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    self.init = function() {
        const orderForm = $('.js-phone-confirm');

        if(orderForm.length) {
            /**
             * Отображение нужных шагов формы
             * @param {Number} step Шаг формы
             */
            const toStep = function(step) {
                orderForm.find('.js-confirm-step' + step).removeClass('is-hidden-pltz').siblings().addClass('is-hidden-pltz');
            };

            /**
             * Переход по шагам формы
             */
            for (let step = 1; step <= stepsNum; step++) {
                orderForm.find('.js-confirm-to-step' + step).on('click', function(e) {
                    toStep(step);

                    e.preventDefault();
                });
            }

        }
    };

}

module.exports = PhoneConfirm;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],12:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута рублей заблокированной суммы при подтверждении карты
 * @module inputMaskedBlockSum
 */
function InputMaskedBlockSum() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута для ввода рублей '.js-input-block-sum'
     */
    self.init = function(selector) {
        const input = document.querySelectorAll(selector);

        if(input) {
            const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
            const Inputmask = (typeof window !== "undefined" ? window['Inputmask'] : typeof global !== "undefined" ? global['Inputmask'] : null);
            const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');

            Array.prototype.slice.call(input).forEach(
                function(el) {
                    const formGroupErrorManage = new FormGroupErrorManage($(el));

                    const cardMask = new Inputmask({
                        mask: '99',
                        placeholder: '_',
                        clearIncomplete: false,
                        //clearMaskOnLostFocus: false,
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
                    });

                    cardMask.mask(el);
                }
            );
        }
    };

}

module.exports = InputMaskedBlockSum;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":15}],13:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута номера банковской карты
 * @module inputMaskedCard
 */
function InputMaskedCard() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута с номером банковской карты '.js-input-card'
     */
    self.init = function(selector) {
        const input = document.querySelectorAll(selector);

        if(input) {
            const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
            const Inputmask = (typeof window !== "undefined" ? window['Inputmask'] : typeof global !== "undefined" ? global['Inputmask'] : null);
            const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');

            Array.prototype.slice.call(input).forEach(
                function(el) {
                    const formGroupErrorManage = new FormGroupErrorManage($(el));

                    const cardMask = new Inputmask({
                        mask: '9999 9999 9999 9999',
                        placeholder: '_',
                        clearIncomplete: false,
                        //clearMaskOnLostFocus: false,
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
                    });

                    cardMask.mask(el);
                }
            );
        }
    };

}

module.exports = InputMaskedCard;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":15}],14:[function(require,module,exports){
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
},{"../forms/helpers/_formGroupErrorManage":15}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
'use strict';

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function PlatizaJsLk() {
    const self = this;

    /**
     * Таймлайн займа
     * @see module:loanTimeline
     */
    self.initLoanTimeline = function() {
        var LoanTimeline = require('./_loanTimeline');
        var loanTimelineFunc = new LoanTimeline();

        loanTimelineFunc.init();
    };

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
     * Слайдер выбора срока продления
     * @see module:loanProlongate
     */
    self.initLoanProlongate = function() {
        var LoanProlongate = require('./_loanProlongate');
        var loanProlongateFunc = new LoanProlongate();

        loanProlongateFunc.init();
    };

    /**
     * Активный заём
     * @see module:loanActive
     */
    self.initLoanActive = function() {
        var LoanActive = require('./_loanActive');
        var loanActiveFunc = new LoanActive();

        loanActiveFunc.init();
    };

    /**
     * Маска для инпута номера банковской карты
     * @see inputMaskedCard
     */
    self.initInputMaskedCard = function() {
        var InputMaskedCard = require('./forms/_inputMaskedCard');
        var inputMaskedCardFunc = new InputMaskedCard();

        inputMaskedCardFunc.init('.js-input-card');
    };

    /**
     * Маска для инпута заблокированной суммы при регистрации карты, рубли и копейки
     * @see inputMaskedBlockSum
     */
    self.initInputMaskedBlockSum = function() {
        var InputMaskedBlockSum = require('./forms/_inputMaskedBlockSum');
        var inputMaskedBlockSumFunc = new InputMaskedBlockSum();

        inputMaskedBlockSumFunc.init('.js-input-block-sum');
    };

    /**
     * Маска для инпута денежной суммы с разделителями разрядов
     * @see inputMaskedBlockSum
     */
    self.initInputMaskedMoney = function() {
        var InputMaskedMoney = require('./forms/_inputMaskedMoney');
        var inputMaskedMoneyFunc = new InputMaskedMoney();

        inputMaskedMoneyFunc.init();
    };

    /**
     * Обратный звонок
     * @param {Number} stepsNum Количество шагов при заказе обратного звонка
     * @see orderBackCall
     */
    self.initOrderBackCall = function(stepsNum) {
        var OrderBackCall = require('./_orderBackCall');
        var orderBackCallFunc = new OrderBackCall(stepsNum);

        orderBackCallFunc.init();
    };

    /**
     * Подтверждение email2
     * @param {Number} stepsNum Количество шагов при подтверждении почты
     * @see email2Confirm
     */
    self.initEmail2Confirm = function(stepsNum) {
        var Email2Confirm = require('./_email2Confirm');
        var email2ConfirmFunc = new Email2Confirm(stepsNum);

        email2ConfirmFunc.init();
    };

    /**
     * Подтверждение email
     * @param {Number} stepsNum Количество шагов при подтверждении почты
     * @see emailConfirm
     */
    self.initEmailConfirm = function(stepsNum) {
        var EmailConfirm = require('./_emailConfirm');
        var emailConfirmFunc = new EmailConfirm(stepsNum);

        emailConfirmFunc.init();
    };

    /**
     * Подтверждение phone
     * @param {Number} stepsNum Количество шагов при подтверждении почты
     * @see phoneConfirm
     */
    self.initPhoneConfirm = function(stepsNum) {
        var PhoneConfirm = require('./_phoneConfirm');
        var phoneConfirmFunc = new PhoneConfirm(stepsNum);

        phoneConfirmFunc.init();
    };

        /**
         * Countdown timer - days, hours, minutes, seconds each are in 2 different spans (digits):
         * .js-days-1, .js-days-2; .js-hours-1, .js-hours-2; .js-minutes-1, .js-minutes-2; .js-seconds-1, .js-seconds-2
         * @module countdown
         * @param {string} selector - Selector of Countdown container
         * @param {string} endtime - End time of timer (Action)
         */
        self.initCountdown = function(selector, endtime) {
            var Countdown = require('./_countdown');
            var countdownFunc = new Countdown(selector, endtime);

        countdownFunc.init();
    };

    /**
     * Alert
     * @see alert
     */
    self.initAlert = function() {
        var Alert = require('./_alert');
        var alertFunc = new Alert();

        alertFunc.init();
    };

    /**
     * Кастомный скролбар
     * @param {Object} target - Елемент с кастомным скролом
     * @param {String} direction - Направление срола - горизонтально или вертикальное
     * @see module:customScrollbar
     */
    self.initCustomScrollbar = function(target, direction) {
        const CustomScrollbar = require('./_customScrollbar');
        const сustomScrollbarFunc = new CustomScrollbar(target, direction);

        сustomScrollbarFunc.init();
    };
}

module.exports = PlatizaJsLk;


},{"./_alert":1,"./_countdown":2,"./_customScrollbar":3,"./_email2Confirm":4,"./_emailConfirm":5,"./_loanActive":6,"./_loanProlongate":7,"./_loanSlider":8,"./_loanTimeline":9,"./_orderBackCall":10,"./_phoneConfirm":11,"./forms/_inputMaskedBlockSum":12,"./forms/_inputMaskedCard":13,"./forms/_inputMaskedMoney":14}]},{},[17])(17)
});