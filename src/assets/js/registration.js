(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Pltz = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
(function (global){
'use strict';

/**
 * jCarousel
 * @module jcarouselSlider
 */
function JcarouselSlider() {
    var self = this;

    var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    self.init = function() {
        var carousel = $('.js-carousel'),
            pagination = $('.js-carousel-indicators');

        carousel.on('jcarousel:reload jcarousel:create', function () {
            var thisCarousel = $(this),
                width = thisCarousel.innerWidth();

            thisCarousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
            .jcarousel({
                wrap: 'circular'
            })
            .jcarouselAutoscroll()
            .jcarouselSwipe();

        pagination.on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('is-active');
        })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('is-active');
            })
            .jcarouselPagination();
    };

}

module.exports = JcarouselSlider;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Modal
 * @module modal
 */
function Modal() {
    const self = this;

    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    const link = document.querySelectorAll('.js-modal-link');

    self.init = function() {
        if(link) {

            Array.prototype.slice.call(link).forEach(
                function(el) {
                    const modalId = el.dataset.modalContainer,
                    cont = document.querySelector('.js-modal-content[data-modal-link="'+ modalId +'"]'),
                    parent = cont.parentNode,
                    body = document.querySelector('body');

                    if(cont) {
                        const CustomScrollbar = require('./_customScrollbar');
                        const сustomScrollbarFunc = new CustomScrollbar('.js-modal-scroll');

                        const close = cont.querySelector('.js-modal-close');

                        /**
                         * Open modal
                         * @param {Event} e event
                         */
                        const modalOpen = function(e) {
                            body.appendChild(cont);

                            cont.classList.add('is-opened');
                            сustomScrollbarFunc.init();

                            e.preventDefault();
                        };

                        /**
                         * Close modal
                         * @param {Event} e event
                         */
                        const modalClose = function(e) {
                            if(e.type === 'keydown' && e.key !== 'Escape') {
                                return;
                            }

                            parent.appendChild(cont);

                            cont.classList.remove('is-opened');

                            e.preventDefault();
                        };

                        /**
                         * Init open modal
                         */
                        el.addEventListener('click', modalOpen);

                        /**
                         * Init close modal
                         */
                        close.addEventListener('click', modalClose);
                        window.addEventListener('keydown', modalClose);

                    }
                }
            );

        }
    };

}

module.exports = Modal;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./_customScrollbar":1}],4:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Прокрутка к элементу
 * @param {Node} target - Элемент, к которому нужно прокрутить страницу
 * @module scrollToElement
 */
function ScrollToElement(target) {
    var self = this;

    var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    self.init = function() {
        if(target.length) {

            const siteHeader = $('.js-header'),
                positionCorrection = siteHeader.outerHeight() + 36;

            $('html, body').animate({
                scrollTop: target.offset().top - positionCorrection
            },
                400,
                'swing'
            );

        }
    };
}

module.exports = ScrollToElement;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
'use strict';

/**
 * Фейковый таймер для маркетинга
 * @param {Node} target - Елемент, в котором будет таймер
 * @param {Number} time - Время для старта фейкового отчета
 * @module timerFake
 */
function TimerFake(target, time) {
    var self = this;

    var cont = target;

    self.init = function() {
        if(cont) {
            const fakeTime = time || 10;

            let fakeTimeRemain = 0;
            let fakeInterval;

            const fakeTimerEnable = function() {
                fakeTimeRemain = fakeTime;

                cont.innerText = fakeTimeRemain;

                fakeInterval = setInterval(restartFakeTimer, 1000);

                function restartFakeTimer() {
                    fakeTimeRemain -= 1;
                    cont.innerText = fakeTimeRemain;

                    if (fakeTimeRemain < 1) {
                        clearInterval(fakeInterval);

                        cont.innerText = fakeTime;
                        fakeTimerEnable();
                    }
                }
            };

            fakeTimerEnable();
        }
    };


}

module.exports = TimerFake;

},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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

},{"./helpers/_getParents":58}],8:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Button to top
 * @module totop
 */
function Totop() {
    const self = this;

    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    const win = $(window),
        cont = $('.js-totop');

    self.init = function() {
        if(cont.length) {
            cont.on('click', function(e) {
                cont.addClass('is-clicked');

                $('html, body').animate({
                    scrollTop: 0
                },
                    1000,
                    'swing',
                    function() {
                        cont.removeClass('is-clicked');
                    });

                e.preventDefault();
            });
        }
    };

    self.toggle = function() {
        const checkVisibility = function() {
            if(cont.length) {
                if(win.scrollTop() > 300) {
                    cont.addClass('is-visible');
                }
                else {
                    cont.removeClass('is-visible');
                }
            }
        };

        checkVisibility();

        win.scroll(function () {
            checkVisibility();
        });
    };

}

module.exports = Totop;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],9:[function(require,module,exports){
'use strict';

/**
 * Show / Hide address living container
 * @module addressLiving
 */
function AddressLiving() {
    const self = this;

    const FormProgress = require('../forms/_formProgress');
    const formProgressFunc = new FormProgress();

    self.init = function() {
        const cont = document.querySelectorAll('.js-addresses-cont');

        if(cont) {
            Array.prototype.slice.call(cont).forEach(
                function(el) {
                    const checkbox = el.querySelector('.js-address-living-check'),
                        contLiving = el.querySelector('.js-address-living-cont'),
                        controlsLiving = contLiving.querySelectorAll('input, textarea');

                    const addressLivingVisibility = function() {
                        if(checkbox.checked === true) {
                            contLiving.classList.add('is-hidden-pltz');

                            Array.prototype.slice.call(controlsLiving).forEach(
                                function(elem) {
                                    elem.removeAttribute('data-required');
                                }
                            );
                        }
                        else {
                            contLiving.classList.remove('is-hidden-pltz');

                            Array.prototype.slice.call(controlsLiving).forEach(
                                function(elem) {
                                    elem.setAttribute('data-required', 'required');

                                    formProgressFunc.init();
                                }
                            );
                        }
                    };

                    if(checkbox && contLiving) {
                        checkbox.addEventListener('change', addressLivingVisibility);
                    }
                }
            );
        }
    };

}

module.exports = AddressLiving;

},{"../forms/_formProgress":15}],10:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Автокомплит
 * @module autocompleteGeneric
 */
function AutocompleteGeneric(control, terms) {
    const self = this;

    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
    const autosize = (typeof window !== "undefined" ? window['autosize'] : typeof global !== "undefined" ? global['autosize'] : null);

    self.init = function() {
        const input = $(control);

        if(input.length) {
            input.each(function () {
                const $this = $(this);

                let topMargin = 4,
                    topCorrection;

                $this.autocomplete({
                    source: terms,
                    position: {
                        of: $this,
                        collision: 'flip',
                        using: function(obj, info) {
                            if (info.vertical !== 'top') {
                                $(this).addClass('is-above');
                                topCorrection = - topMargin - $this.height();
                            } else {
                                $(this).removeClass('is-above');
                                topCorrection = topMargin;
                            }
                            if (info.horizontal !== 'left') {
                                $(this).addClass('is-right');
                            } else {
                                $(this).removeClass('is-right');
                            }
                            $(this).css({
                                left: obj.left + 'px',
                                top: obj.top + topCorrection + 'px',
                                width: $this.outerWidth() + 'px'
                            });
                        }
                    },
                    focus: function(ev, ui) {
                        ev.target.value = ui.item.value;

                        autosize.update(ev.target);

                    }
                });

            });

        }
    };

}

module.exports = AutocompleteGeneric;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],11:[function(require,module,exports){
'use strict';

/**
 * Скрыть соответствующий инпут при выборе чекбокса "Нет Отчества", "Нет улицы" и т.п.
 * @module checkboxNoSomeField
 */
function CheckboxNoSomeField() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} checkboxSel - Селектор чекбокса
     * @param {string} inputSel - Селектор инпута для скрытия
     */
    self.init = function(checkboxSel, inputSel) {
        const checkbox = document.querySelectorAll([
            checkboxSel
        ]);

        if(checkbox.length) {
            const input = document.querySelectorAll([
                inputSel
            ]),
                inputFormGroup = input[0].parentNode;

            checkbox.forEach(
                function(el) {

                    const isMiddlenameHidden = function() {
                        if(inputFormGroup) {
                            if(el.checked === true) {
                                inputFormGroup.classList.add('is-hidden-pltz');
                            }
                            else {
                                inputFormGroup.classList.remove('is-hidden-pltz');
                            }
                        }
                    };

                    isMiddlenameHidden();

                    el.addEventListener('change', isMiddlenameHidden);
                }
            );
        }
    };

}

module.exports = CheckboxNoSomeField;

},{}],12:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Проверка валидности даты выдачи паспорта
 * @module datePassportVerify
 */
function DatePassportVerify() {
    const self = this;

    self.init = function() {
        const datePassport = document.querySelector('.js-date-passport'),
            dateBirth = document.querySelector('.js-date-birth'),
            datePassportError = document.querySelector('.js-date-passport-error');

        if(datePassport && dateBirth) {
            const moment = (typeof window !== "undefined" ? window['moment'] : typeof global !== "undefined" ? global['moment'] : null);
            const getParents = require('../helpers/_getParents');

            const parentPassport = getParents(datePassport, '.c-form-group');
            const parentBirth = getParents(dateBirth, '.c-form-group');

            const verify = function() {

                if(datePassportError) {
                    if((datePassport.inputmask.isComplete()) && (dateBirth.inputmask.isComplete())) {
                        const nowDate = moment(),
                            datePassportValue = moment(datePassport.value, 'DD.MM.YYYY'),
                            dateBirthValue = moment(dateBirth.value, 'DD.MM.YYYY'),
                            age = nowDate.diff(dateBirthValue, 'years'),
                            agePassport = datePassportValue.diff(dateBirthValue, 'years');

                        let condition = false;

                        if(
                            (age >= 20 && age < 45 && agePassport < 20)
                            || (age >= 45 && agePassport < 45)
                        ) {
                            condition = true;
                        }

                        if(condition) {
                            datePassportError.classList.remove('is-hidden-pltz');

                            parentPassport.classList.add('is-error-no-mess');
                            parentBirth.classList.add('is-error-no-mess');

                            parentPassport.classList.remove('is-warning');
                            parentBirth.classList.remove('is-warning');
                        }
                        else {
                            datePassportError.classList.add('is-hidden-pltz');

                            parentPassport.classList.remove('is-error-no-mess');
                            parentBirth.classList.remove('is-error-no-mess');
                        }
                    }
                    else {
                        datePassportError.classList.add('is-hidden-pltz');

                        parentPassport.classList.remove('is-error-no-mess');
                        parentBirth.classList.remove('is-error-no-mess');
                    }
                }
            };

            verify();

            datePassport.addEventListener('blur', verify);
            dateBirth.addEventListener('blur', verify);
        }
    };

}

module.exports = DatePassportVerify;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../helpers/_getParents":58}],13:[function(require,module,exports){
'use strict';

/**
 * Choose document type for registration
 */
function DocumentType() {

    const self = this;
    const getParents = require('../helpers/_getParents');
    const getSiblings = require('../helpers/_getSiblings');

    self.init = function(choice, uploadBlock) {

        const radio = document.querySelectorAll(choice);

        if(radio) {
            Array.prototype.slice.call(radio).forEach(
                function(el) {
                    const docCont = getParents(el, uploadBlock);

                    const processTypes = function() {
                        if(el.checked === true) {
                            const docImageDemoActive = docCont.querySelector('.js-img-demo-' + el.value),
                                docImageDemoInactive = getSiblings(docImageDemoActive);

                            docImageDemoActive.classList.remove('is-hidden-pltz');

                            Array.prototype.slice.call(docImageDemoInactive).forEach(
                                function(element) {
                                    element.classList.add('is-hidden-pltz');
                                }
                            );
                        }
                    };

                    const processTypesChange = function() {
                        docCont.classList.add('is-file-doc-type-change');

                        processTypes();
                    };

                    processTypes();

                    el.addEventListener('change', processTypesChange);
                }
            );
        }
    };

}
module.exports = DocumentType;

},{"../helpers/_getParents":58,"../helpers/_getSiblings":59}],14:[function(require,module,exports){
'use strict';

/**
 * Обработка загружаемых фото и отображение их на странице до отправки формы на сервер
 * @see https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
 */
function handleFiles() {

    const self = this;

    self.init = function(inputHook) {
        const input = document.querySelectorAll(inputHook);

        if(input) {
            Array.prototype.slice.call(input).forEach(
                function(el, index) {
                    const parentBlock = document.querySelectorAll('.js-upload-block')[index],
                        preview = parentBlock.querySelector('.js-upload-img'),
                        hint = parentBlock.querySelector('.js-upload-hint'),
                        hintHtml = 'jpg, png, gif, tiff, bmp<br> максимальный размер файла 20Mb',
                        inputFake = parentBlock.querySelector('.js-upload-fake-btn'),
                        imgInfo = parentBlock.querySelector('.js-img-info'),
                        loading = parentBlock.querySelector('.c-input-file__loading'),
                        maxFileSize = 20971520;

                    // Файл валиден
                    const successUpload = function(fileConst) {
                        parentBlock.classList.add('is-file-uploaded');
                        parentBlock.classList.remove('is-file-failed');
                        parentBlock.classList.remove('is-file-verify-fail');
                        loading.classList.add('active');

                        // Кнопка Загружено
                        if(inputFake) {
                            inputFake.innerText = 'Загрузить новый файл';
                        }

                        // Название файла
                        if(hint) {
                            hint.innerHTML = fileConst.name + ' загружен';
                        }

                        if(imgInfo) {
                            imgInfo.innerText = 'Файл загружен';
                            imgInfo.classList.add('is-success-pltz');
                            imgInfo.classList.remove('is-error-pltz');
                        }

                    };

                    // Файл невалиден
                    const incorrectUpload = function() {
                        parentBlock.classList.add('is-file-failed');
                        parentBlock.classList.remove('is-file-uploaded');
                        parentBlock.classList.remove('is-file-verify-fail');

                        // Кнопка Загрузить
                        if(inputFake) {
                            inputFake.innerText = 'Загрузить файл';
                        }

                        // Требования к файлу
                        if(hint) {
                            hint.innerHTML = hintHtml;
                        }

                        if(imgInfo) {
                            imgInfo.classList.add('is-error-pltz');
                            imgInfo.classList.remove('is-success-pltz');
                        }

                    };

                    const processFiles = function() {
                        const files = el.files;

                        if(files.length === 0) {
                            if(imgInfo) {
                                imgInfo.innerText = 'Файл не загружен';
                            }

                            incorrectUpload();
                        }

                        // Отобразить фото на странице
                        for (let i = 0; i < files.length; i++) {
                            let file = files[i];
                            let imageType = /^image\//;

                            // Если тип файла не картинка
                            if (!imageType.test(file.type)) {
                                if(imgInfo) {
                                    imgInfo.innerText = 'Неверный формат файла';
                                }

                                incorrectUpload();
                            }
                            else {
                                // Если превышен размер файла
                                if(file.size > (maxFileSize)) {
                                    if(imgInfo) {
                                        imgInfo.innerText = 'Файл слишком большой';
                                    }

                                    incorrectUpload();
                                }
                                else {


                                    // Создать новый DOM-элемента и добавить его в блок для загруженной картинки
                                    let img = document.createElement('img');
                                    img.file = file;
                                    //loading.classList.remove('active');
                                    if(preview) {
                                        while (preview.hasChildNodes()) {
                                            preview.removeChild(preview.lastChild);
                                        }

                                        preview.appendChild(img);
                                    }

                                    let reader = new FileReader();

                                    reader.onload = (
                                        function(aImg) {
                                            return function(e) {
                                                aImg.src = e.target.result;
                                                loading.classList.remove('active');
                                            };
                                        }
                                    )(img);

                                    reader.readAsDataURL(file);

                                    successUpload(file);
                                }
                            }

                        }

                    };

                    el.addEventListener('change', processFiles);
                }
            );
        }
    };

}
module.exports = handleFiles;

},{}],15:[function(require,module,exports){
'use strict';

/**
 * Прогрессбар заполнения полей блока формы (fieldset)
 * @module formProgress
 */
function FormProgress() {
    const self = this;

    self.init = function() {
        const cont = document.querySelectorAll('.js-fieldset');

        if(cont) {
            const getParents = require('../helpers/_getParents');
            const SettingsPltz = require('../settings/_settingsPltz');

            const settingsPltz = new SettingsPltz();

            const emailRegex = settingsPltz.emailRegex();

            Array.prototype.slice.call(cont).forEach(
                function(fieldset, index) {
                    const controlsRequired = fieldset.querySelectorAll('[data-required="required"]'),
                        progress = fieldset.querySelector('.js-progress-fieldset');

                    let count = [],
                        countValid = [],
                        percents = 0,
                        formGroup = [];

                    if(controlsRequired) {
                        count[index] = controlsRequired.length;
                        countValid[index] = 0;

                        Array.prototype.slice.call(controlsRequired).forEach(
                            function(elem, indexElem) {
                                const
                                    inputsText = elem.type === 'text' ||
                                        elem.type === 'tel' ||
                                        elem.type === 'email' ||
                                        elem.type === 'password' ||
                                        elem.type === 'textarea',
                                    inputsCheck = elem.type === 'checkbox' ||
                                        elem.type === 'radio';

                                formGroup[indexElem] = getParents(elem, '.c-form-group');

                                const isValid = function() {
                                    if(!formGroup[indexElem].classList.contains('is-error')) {
                                        if(inputsText) {
                                            if (elem.inputmask) {
                                                if (elem.inputmask.isComplete()) {
                                                    countValid[index] += 1;
                                                }
                                            }
                                            else {
                                                if(elem.value.length !== 0) {
                                                    if(elem.type === 'email') {
                                                        if(emailRegex.test(elem.value)) {
                                                            countValid[index] += 1;
                                                        }
                                                    }
                                                    else {
                                                        countValid[index] += 1;
                                                    }
                                                }
                                            }
                                        }

                                        if(inputsCheck) {
                                            if(elem.checked) {
                                                countValid[index] += 1;
                                            }
                                        }

                                        percents = (countValid[index] / count[index]) * 100;

                                        progress.style.cssText = 'width: ' + percents + '%;';

                                        if(count[index] === countValid[index]) {
                                            fieldset.classList.add('is-completed');
                                        }
                                        else {
                                            fieldset.classList.remove('is-completed');
                                        }
                                    }
                                };

                                isValid();

                            }
                        );
                    }
                }
            );
        }
    };

}

module.exports = FormProgress;

},{"../helpers/_getParents":58,"../settings/_settingsPltz":61}],16:[function(require,module,exports){
'use strict';

/**
 * Hints in form fields
 * @module hints
 */
function HintsInForms() {
    const self = this;

    self.init = function() {
        const hintParent = document.querySelectorAll('.js-form-group-hinted');

        if(hintParent) {
            Array.prototype.slice.call(hintParent).forEach(
                function(el) {
                    const hint = el.querySelector('.js-form-group-hint'),
                        hintBlock = el.querySelector('.js-form-group-hint-block');

                    const toggle = function() {
                        hintBlock.classList.toggle('is-opened');
                    };

                    hint.addEventListener('click', toggle);
                }
            );
        }
    };

}

module.exports = HintsInForms;

},{}],17:[function(require,module,exports){
'use strict';

/**
 * Fake Input type File
 * @module inputFile
 */
function inputFile() {
    const self = this;

    self.init = function(fakeHook, inputHook) {
        const fake = document.querySelectorAll(fakeHook);

        if(fake) {
            Array.prototype.slice.call(fake).forEach(
                function(el) {

                    const fakeUpload = function() {
                        const parent = el.parentNode,
                            input = parent.querySelector(inputHook);

                        input.click();
                    };

                    el.addEventListener('click', fakeUpload);
                }
            );
        }
    };

}

module.exports = inputFile;

},{}],18:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута расчётного счёта
 * @module inputMaskedBankAccountNumber
 */
function InputMaskedBankAccountNumber() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута с номером телефона selector '.js-input-bank-account-number'
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

                    const bankAccountNumber = new Inputmask({
                        mask: '99999999999999999999',
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

                    bankAccountNumber.mask(el);
                }
            );
        }
    };

}

module.exports = InputMaskedBankAccountNumber;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],19:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута БИК банка
 * @module inputMaskedBankBIK
 */
function InputMaskedBankBIK() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута с номером телефона selector '.js-input-bank-bik'
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

                    const bankBikMask = new Inputmask({
                        mask: '999999999',
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

                    bankBikMask.mask(el);
                }
            );
        }
    };

}

module.exports = InputMaskedBankBIK;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],20:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута кириллических символов
 * @module InputMaskedCyrillic
 */
function InputMaskedCyrillic() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута кириллических символов '.js-input-cyrillic'
     */
    self.init = function(selector) {
        const input = document.querySelectorAll(selector);

        if(input) {
            const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
            const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');

            Array.prototype.slice.call(input).forEach(
                function(el) {
                    const formGroupErrorManage = new FormGroupErrorManage($(el));

                    const string = /[^А-ЯЁ]/i;

                    const validate = function(event) {
                        if(el.value.length > 0) {
                            if(string.test(el.value)) {
                                formGroupErrorManage.showError('Только русские буквы');
                            }
                            else {
                                formGroupErrorManage.hideError();
                            }
                        }
                        else {
                            if(event.type !== 'keyup') {
                                formGroupErrorManage.showError('Обязательное поле');
                            }
                        }
                    };

                    el.addEventListener('keyup', validate);
                    el.addEventListener('blur', validate);
                }
            );
        }
    };

}

module.exports = InputMaskedCyrillic;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],21:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута даты
 * @module inputMaskedDate
 * @var minYear {number} Min year to choose from
 * @var maxYear {number} Max year to choose from
 * @var adulthood {number} С какого возраста возможна регистрация
 * @var isAge {boolean} Проверка на поле для ввода даты рождения
 * @var isLoanNextPayment {boolean} Проверка на поле для ввода даты следующего платежа по кредиту
 * @var nextLoanYear {number} Период в годах для следующего платежа по кредиту
 */
function InputMaskedDate() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута с номером паспорта '.js-input-date'
     */
    self.init = function(selector) {
        const input = document.querySelectorAll(selector);

        if(input) {
            const Inputmask = (typeof window !== "undefined" ? window['Inputmask'] : typeof global !== "undefined" ? global['Inputmask'] : null);
            const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
            const moment = (typeof window !== "undefined" ? window['moment'] : typeof global !== "undefined" ? global['moment'] : null);
            const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');
            const FormGroupWarningManage = require('../forms/helpers/_formGroupWarningManage');
            const getParents = require('../helpers/_getParents');

            let adulthood = 18,
                nextLoanYear = 1;

            Array.prototype.slice.call(input).forEach(
                function(el) {
                    const formGroupErrorManage = new FormGroupErrorManage($(el));
                    const formGroupShowWarning = new FormGroupWarningManage($(el));

                    const parent = getParents(el, '.c-form-group');

                    let isAge = el.classList.contains('is-age'),
                        isLoanNextPayment = el.classList.contains('is-next-payment'),
                        minYear = 1902,
                        maxYear = moment().get('year'),
                        minDateToSet = moment().set({'year': minYear}),
                        maxDateToSet;

                    if(isAge){
                        maxYear = moment().subtract(adulthood, 'years').get('year');

                        maxDateToSet = moment().set('year', maxYear);
                    }
                    else if(isLoanNextPayment) {
                        minYear = moment().get('year');
                        maxYear = moment().add(nextLoanYear, 'years').get('year');

                        minDateToSet = moment().set({'year': minYear});
                        maxDateToSet = moment().set('year', maxYear);
                    }
                    else {
                        maxDateToSet = moment().set('year', maxYear).subtract(1, 'days');
                    }

                    const dateMask = new Inputmask(
                        {
                            mask: '99.99.9999',
                            placeholder: '_',
                            clearIncomplete: false,
                            //clearMaskOnLostFocus: false,
                            onincomplete: function() {
                                formGroupErrorManage.showError('Заполните полностью');
                                formGroupShowWarning.hideWarning();
                            },
                            oncomplete: function() {
                                const currentValue = moment(el.value, 'DD.MM.YYYY').toDate();

                                if(isNaN(currentValue.getDay()) || isNaN(currentValue.getMonth())) {
                                    formGroupErrorManage.showError('Проверьте правильность');
                                }
                                else {
                                    if(currentValue < minDateToSet) {
                                        parent.classList.add('c-form-group_large-mes');

                                        formGroupErrorManage.showError('Минимальная дата ' + minDateToSet.format('DD.MM.YYYY'));
                                    }
                                    else if(currentValue > maxDateToSet) {
                                        parent.classList.add('c-form-group_large-mes');

                                        if(isAge) {
                                            formGroupErrorManage.showError('Сервис не доступен несовершеннолетним лицам');
                                        }
                                        else {
                                            formGroupErrorManage.showError('Максимальная дата ' + maxDateToSet.format('DD.MM.YYYY'));
                                        }
                                    }
                                    else {
                                        parent.classList.remove('c-form-group_large-mes');

                                        formGroupErrorManage.hideError();
                                    }
                                }
                            }
                        }
                    );

                    dateMask.mask(el);

                }
            );
        }
    };

}

module.exports = InputMaskedDate;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54,"../forms/helpers/_formGroupWarningManage":56,"../helpers/_getParents":58}],22:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута даты
 * @module inputMaskedDate
 * @var minYear {number} Min year to choose from
 * @var maxYear {number} Max year to choose from
 * @var adulthood {number} С какого возраста возможна регистрация
 * @var isAge {boolean} Проверка на поле для ввода даты рождения
 * @var isLoanNextPayment {boolean} Проверка на поле для ввода даты следующего платежа по кредиту
 * @var nextLoanYear {number} Период в годах для следующего платежа по кредиту
 */
function InputMaskedDateFuture() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута с номером паспорта '.js-input-date-future'
     */
    self.init = function(selector) {
        const input = document.querySelectorAll(selector);

        if(input) {
            const Inputmask = (typeof window !== "undefined" ? window['Inputmask'] : typeof global !== "undefined" ? global['Inputmask'] : null);
            const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
            const moment = (typeof window !== "undefined" ? window['moment'] : typeof global !== "undefined" ? global['moment'] : null);
            const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');
            const FormGroupWarningManage = require('../forms/helpers/_formGroupWarningManage');
            const getParents = require('../helpers/_getParents');

            let adulthood = 18,
                nextLoanYear = 1;

            Array.prototype.slice.call(input).forEach(
                function(el) {
                    const formGroupErrorManage = new FormGroupErrorManage($(el));
                    const formGroupShowWarning = new FormGroupWarningManage($(el));

                    const parent = getParents(el, '.c-form-group');

                    let isAge = el.classList.contains('is-age'),
                        isLoanNextPayment = el.classList.contains('is-next-payment'),
                        minYear = 2018,
                        maxYear = moment().get('year'),
                        minDateToSet = moment().set({'year': minYear}),
                        maxDateToSet;

                    if(isAge){
                        maxYear = moment().subtract(adulthood, 'years').get('year');

                        maxDateToSet = moment().set('year', maxYear);
                    }
                    else if(isLoanNextPayment) {
                        minYear = moment().get('year');
                        maxYear = moment().add(nextLoanYear, 'years').get('year');

                        minDateToSet = moment().set({'year': minYear});
                        maxDateToSet = moment().set('year', maxYear);
                    }
                    else {
                        maxDateToSet = moment().set('year', maxYear).subtract(-90, 'days');
                    }

                    const dateFutureMask = new Inputmask(
                        {
                            mask: '99.99.9999',
                            placeholder: '_',
                            clearIncomplete: false,
                            //clearMaskOnLostFocus: false,
                            onincomplete: function() {
                                formGroupErrorManage.showError('Заполните полностью');
                                formGroupShowWarning.hideWarning();
                            },
                            oncomplete: function() {
                                const currentValue = moment(el.value, 'DD.MM.YYYY').toDate();

                                if(isNaN(currentValue.getDay()) || isNaN(currentValue.getMonth())) {
                                    formGroupErrorManage.showError('Проверьте правильность');
                                }
                                else {
                                    if(currentValue < minDateToSet) {
                                        parent.classList.add('c-form-group_large-mes');

                                        formGroupErrorManage.showError('Минимальная дата ' + minDateToSet.format('DD.MM.YYYY'));
                                    }
                                    else if(currentValue > maxDateToSet) {
                                        parent.classList.add('c-form-group_large-mes');

                                        if(isAge) {
                                            formGroupErrorManage.showError('Сервис не доступен несовершеннолетним лицам');
                                        }
                                        else {
                                            formGroupErrorManage.showError('Максимальная дата ' + maxDateToSet.format('DD.MM.YYYY'));
                                        }
                                    }
                                    else {
                                        parent.classList.remove('c-form-group_large-mes');

                                        formGroupErrorManage.hideError();
                                    }
                                }
                            }
                        }
                    );

                    dateFutureMask.mask(el);

                }
            );
        }
    };

}

module.exports = InputMaskedDateFuture;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54,"../forms/helpers/_formGroupWarningManage":56,"../helpers/_getParents":58}],23:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута email
 * @module InputMaskedEmail
 */
function InputMaskedEmail() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута email '.js-input-email'
     */
    self.init = function(selector) {
        const input = document.querySelectorAll(selector);

        if(input) {
            const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
            const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');
            const SettingsPltz = require('../settings/_settingsPltz');

            Array.prototype.slice.call(input).forEach(
                function(el) {
                    const formGroupErrorManage = new FormGroupErrorManage($(el));
                    const settingsPltz = new SettingsPltz();

                    const string = settingsPltz.emailRegex();

                    const validate = function(event) {
                        if(el.value.length > 0) {
                            if(!string.test(el.value)) {
                                if(event.type === 'blur') {
                                    formGroupErrorManage.showError('Введите корректный email');
                                }
                            }
                            else {
                                formGroupErrorManage.hideError();
                            }
                        }
                        else {
                            if(event.type === 'blur') {
                                formGroupErrorManage.showError('Обязательное поле');
                            }
                        }
                    };

                    el.addEventListener('keyup', validate);
                    el.addEventListener('blur', validate);
                }
            );
        }
    };

}

module.exports = InputMaskedEmail;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54,"../settings/_settingsPltz":61}],24:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпутов ФИО
 * @module InputMaskedFio
 */
function InputMaskedFio() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпутов ФИО '.js-input-fio'
     */
    self.init = function(selector) {
        const input = document.querySelectorAll(selector);

        if(input) {
            const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
            const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');

            Array.prototype.slice.call(input).forEach(
                function(el) {
                    const formGroupErrorManage = new FormGroupErrorManage($(el));

                    const string = /[^А-ЯЁ -]/i;

                    const validate = function(event) {
                        if(el.value.length > 0) {
                            if(string.test(el.value)) {
                                formGroupErrorManage.showError('Русские буквы, пробелы, дефис');
                            }
                            else {
                                formGroupErrorManage.hideError();
                            }
                        }
                        else {
                            if(event.type !== 'keyup') {
                                formGroupErrorManage.showError('Обязательное поле');
                            }
                        }
                    };

                    el.addEventListener('keyup', validate);
                    el.addEventListener('blur', validate);
                }
            );
        }
    };

}

module.exports = InputMaskedFio;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],25:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпутов ФИО
 * @module InputMaskedFio
 */
function InputMaskedFioSeparately() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпутов ФИО '.js-input-fio-separately'
     */
    self.init = function(selector) {
        const input = document.querySelectorAll(selector);

        if(input) {
            const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
            const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');

            Array.prototype.slice.call(input).forEach(
                function(el) {
                    const formGroupErrorManage = new FormGroupErrorManage($(el));

                    const string = /[^А-ЯЁ-]/i;

                    const validate = function(event) {
                        if(el.value.length > 0) {
                            if(string.test(el.value)) {
                                formGroupErrorManage.showError('Русские буквы, дефис, без пробелов');
                            }
                            else {
                                formGroupErrorManage.hideError();
                            }
                        }
                        else {
                            if(event.type !== 'keyup') {
                                formGroupErrorManage.showError('Обязательное поле');
                            }
                        }
                    };

                    el.addEventListener('keyup', validate);
                    el.addEventListener('blur', validate);
                }
            );
        }
    };

}

module.exports = InputMaskedFioSeparately;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],26:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута географического названия
 * @module InputMaskedGeo
 */
function InputMaskedGeo() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута географического названия '.js-input-geo'
     */
    self.init = function(selector) {
        const input = document.querySelectorAll(selector);

        if(input) {
            const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');
            const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

            Array.prototype.slice.call(input).forEach(
                function(el) {
                    const formGroupErrorManage = new FormGroupErrorManage($(el));

                    const string = /[^А-ЯЁ0-9N -.,()/]/i;

                    const validate = function(event) {
                        if(el.value.length > 0) {

                            if(string.test(el.value)) {
                                formGroupErrorManage.showError('Неразрешенный символ');
                            }
                            else {
                                formGroupErrorManage.hideError();
                            }
                        }
                        else {
                            if(event.type !== 'keyup') {
                                formGroupErrorManage.showError('Обязательное поле');
                            }
                        }
                    };

                    el.addEventListener('keyup', validate);
                    el.addEventListener('blur', validate);
                }
            );
        }
    };

}

module.exports = InputMaskedGeo;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],27:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута с доходом или расходом
 * @module inputMaskedIncomeExpense
 */
function InputMaskedIncomeExpense() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута с номером телефона selector '.js-input-income-expense'
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

                    const incomeExpenseMask = new Inputmask({
                        mask: '9999[999]',
                        placeholder: '_',
                        clearIncomplete: false,
                        //clearMaskOnLostFocus: false,
                        onincomplete: function() {
                            if(el.getAttribute('data-required') === 'required') {
                                formGroupErrorManage.showError('Обязательное поле');
                            }
                            else {
                                if(el.value.length > 0) {
                                    formGroupErrorManage.showError('Заполните полностью');
                                }
                                else {
                                    formGroupErrorManage.hideError();
                                }
                            }
                        },
                        oncomplete: function() {
                            formGroupErrorManage.hideError();
                        }
                    });

                    incomeExpenseMask.mask(el);
                }
            );
        }
    };

}

module.exports = InputMaskedIncomeExpense;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],28:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута ИНН
 * @module inputMaskedInn
 */
function InputMaskedInn() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута ИНН '.js-input-inn'
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

                    const innMask = new Inputmask({
                        mask: '999999999999',
                        placeholder: '_',
                        clearIncomplete: false,
                        //clearMaskOnLostFocus: false,
                        onincomplete: function() {
                            if(el.getAttribute('data-required') === 'required') {
                                formGroupErrorManage.showError('Обязательное поле');
                            }
                            else {
                                if(el.value.length > 0) {
                                    formGroupErrorManage.showError('Заполните полностью');
                                }
                                else {
                                    formGroupErrorManage.hideError();
                                }
                            }
                        },
                        oncomplete: function() {
                            formGroupErrorManage.hideError();
                        }
                    });

                    innMask.mask(el);
                }
            );
        }
    };

}

module.exports = InputMaskedInn;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],29:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута полного названия географического пункта
 * @module InputMaskedLocation
 */
function InputMaskedLocation() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута полного названия географического пункта '.js-input-location'
     */
    self.init = function(selector) {
        const input = document.querySelectorAll(selector);

        if(input) {
            const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
            const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');

            Array.prototype.slice.call(input).forEach(
                function(el) {
                    const formGroupErrorManage = new FormGroupErrorManage($(el));

                    //const string = /[^А-ЯЁ N№,-/]/i;
                    const string = /[^А-ЯЁ0-9N -.,?!–—:;_()/]/i;

                    const validate = function(event) {
                        if(el.value.length > 0) {
                            if(string.test(el.value)) {
                                formGroupErrorManage.showError('Неразрешенный символ');
                            }
                            else {
                                formGroupErrorManage.hideError();
                            }
                        }
                        else {
                            if(event.type !== 'keyup') {
                                formGroupErrorManage.showError('Обязательное поле');
                            }
                        }
                    };

                    el.addEventListener('keyup', validate);
                    el.addEventListener('blur', validate);
                }
            );
        }
    };

}

module.exports = InputMaskedLocation;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],30:[function(require,module,exports){
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
},{"../forms/helpers/_formGroupErrorManage":54}],31:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпутов ФИО
 * @module InputMaskedName
 */
function InputMaskedName() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпутов ФИО '.js-input-name'
     */
    self.init = function(selector) {
        const input = document.querySelectorAll(selector);

        if(input) {
            const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
            const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');

            Array.prototype.slice.call(input).forEach(
                function(el) {
                    const formGroupErrorManage = new FormGroupErrorManage($(el));

                    const string = /[^А-ЯЁ -]/i;

                    const validate = function(event) {
                        if(el.value.length > 0) {
                            if(string.test(el.value)) {
                                formGroupErrorManage.showError('Русские буквы, дефис, без пробелов');
                            }
                            else {
                                formGroupErrorManage.hideError();
                            }
                        }
                        else {
                            if(event.type !== 'keyup') {
                                formGroupErrorManage.showError('Обязательное поле');
                            }
                        }
                    };

                    el.addEventListener('keyup', validate);
                    el.addEventListener('blur', validate);
                }
            );
        }
    };

}

module.exports = InputMaskedName;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],32:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута номера паспорта
 * @module inputMaskedPassport
 */
function InputMaskedPassport() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута с номером паспорта '.js-input-passport'
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

                    const passportMask = new Inputmask({
                        mask: '99 99 999999',
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

                    passportMask.mask(el);
                }
            );
        }
    };

}

module.exports = InputMaskedPassport;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],33:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута кода подразделения, выдавшего паспорт
 * @module inputMaskedPassportPodr
 */
function InputMaskedPassportPodr() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута с числовым значением '.js-input-passport-podr'
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

                    const passportPodrMask = new Inputmask({
                        mask: '999-999',
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

                    passportPodrMask.mask(el);
                }
            );
        }
    };

}

module.exports = InputMaskedPassportPodr;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],34:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута номера телефона
 * @module inputMaskedPhone
 */
function InputMaskedPhone() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута с номером телефона selector '.js-input-phone'
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

                    const phoneMask = new Inputmask({
                        mask: '+7 (999) 999 99 99',
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

                    phoneMask.mask(el);
                }
            );
        }
    };

}

module.exports = InputMaskedPhone;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],35:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута с необязательным номером телефона
 * @module inputMaskedPhoneOptional
 */
function InputMaskedPhoneOptional() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута с номером телефона selector '.js-input-phone'
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

                    const phoneMaskOptional = new Inputmask({
                        mask: '+7 (999) 999 99 99',
                        placeholder: '_',
                        clearIncomplete: false,
                        //clearMaskOnLostFocus: false,
                        onincomplete: function() {
                            if(el.getAttribute('data-required') === 'required') {
                                formGroupErrorManage.showError('Обязательное поле');
                            }
                            else {
                                if(el.value.length > 0) {
                                    formGroupErrorManage.showError('Заполните полностью');
                                }
                                else {
                                    formGroupErrorManage.hideError();
                                }
                            }
                        },
                        oncomplete: function() {
                            formGroupErrorManage.hideError();
                        }
                    });

                    phoneMaskOptional.mask(el);
                }
            );
        }
    };

}

module.exports = InputMaskedPhoneOptional;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],36:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута смс
 * @module inputMaskedSms
 */
function InputMaskedSms() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута с номером паспорта '.js-input-sms'
     */
    self.init = function(selector) {
        const input = document.querySelectorAll(selector);

        if(input) {
            const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');

            Array.prototype.slice.call(input).forEach(
                function(el) {
                    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
                    const Inputmask = (typeof window !== "undefined" ? window['Inputmask'] : typeof global !== "undefined" ? global['Inputmask'] : null);
                    const formGroupErrorManage = new FormGroupErrorManage($(el));

                    //let isClearMaskOnLostFocus = false;
                    //
                    //if(!el.classList.contains('o-pltz-text-input_masked')) {
                    //    isClearMaskOnLostFocus = true;
                    //}

                    const smsMask = new Inputmask({
                        mask: '9999',
                        placeholder: '_',
                        clearIncomplete: false,
                        //clearMaskOnLostFocus: isClearMaskOnLostFocus,
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

                    smsMask.mask(el);
                }
            );
        }
    };

}

module.exports = InputMaskedSms;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],37:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута СНИЛС
 * @module inputMaskedSnils
 */
function InputMaskedSnils() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута СНИЛС '.js-input-snils'
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

                    const snilsMask = new Inputmask({
                        mask: '999-999-999 99',
                        placeholder: '_',
                        clearIncomplete: false,
                        //clearMaskOnLostFocus: false,
                        onincomplete: function() {
                            if(el.getAttribute('data-required') === 'required') {
                                formGroupErrorManage.showError('Обязательное поле');
                            }
                            else {
                                if(el.value.length > 0) {
                                    formGroupErrorManage.showError('Заполните полностью');
                                }
                                else {
                                    formGroupErrorManage.hideError();
                                }
                            }
                        },
                        oncomplete: function() {
                            formGroupErrorManage.hideError();
                        }
                    });

                    snilsMask.mask(el);
                }
            );
        }
    };

}

module.exports = InputMaskedSnils;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],38:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для инпута расчётного счёта
 * @module inputMaskedBankAccountNumber
 */
function InputMaskedYandexNumber() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор инпута с номером телефона selector '.js-input-bank-account-number'
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

                    const bankAccountNumber = new Inputmask({
                        mask: '999999999999999',
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

                    bankAccountNumber.mask(el);
                }
            );
        }
    };

}

module.exports = InputMaskedYandexNumber;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],39:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Маска для обязательного инпута
 * @module InputRequired
 */
function InputRequired() {
    const self = this;

    /**
     * Инициализация функции
     * @param {string} selector - Селектор обязательного инпута '.js-input-required'
     */
    self.init = function(selector) {
        const input = document.querySelectorAll(selector);

        if(input) {
            const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
            const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');

            Array.prototype.slice.call(input).forEach(
                function(el) {
                    const formGroupErrorManage = new FormGroupErrorManage($(el));

                    const validate = function(event) {
                        if(el.value.length === 0) {
                            if(event.type !== 'keyup') {
                                formGroupErrorManage.showError('Обязательное поле');
                            }
                        }
                        else {
                            formGroupErrorManage.hideError();
                        }
                    };

                    el.addEventListener('keyup', validate);
                    el.addEventListener('blur', validate);
                }
            );
        }
    };

}

module.exports = InputRequired;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],40:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Проверка наличия содержимого полей в источниках доходов
 * @module inputSourceOfIncome
 */
function InputSourceOfIncome() {
    const self = this;

    const nameWorkMan =  $('#additionalDataEmployer'),
        workStatus =  $('#additionalDataPosition'),
        workPhone =  $('#additionalDataWorkphone');

    self.init = function() {

        const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
        const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');
        const formGroupErrorManageNameWorkMan = new FormGroupErrorManage($(nameWorkMan));
        const formGroupErrorManageWorkStatus = new FormGroupErrorManage($(workStatus));
        const formGroupErrorManageWorkPhone = new FormGroupErrorManage($(workPhone));

        $(function() {
            if ($("#additionalDataEmployer").attr('required')) {
                document.getElementById("additionalDataEmployer").required = false;
            } if ($("#additionalDataPosition").attr('required')) {
                document.getElementById("additionalDataPosition").required = false;
            } if ($("#additionalDataWorkphone").attr('required')) {
                document.getElementById("additionalDataWorkphone").required = false;
            }
            // document.getElementById("additionalDataMoreContact").required = false;
        });

        nameWorkMan.blur(function () {
            var messages = $(this).val();
            if ($.trim(messages)) {
                formGroupErrorManageNameWorkMan.hideError();
            }else{
                formGroupErrorManageNameWorkMan.showError('Обязательное поле');
            }
        });
        workStatus.blur(function () {
            var messages = $(this).val();
            if ($.trim(messages)) {
                formGroupErrorManageWorkStatus.hideError();
            }else{
                formGroupErrorManageWorkStatus.showError('Обязательное поле');
            }
        });
        $(".o-pltz-select--additional-data-busyness").change(function(){
            if($(this).val() == 0 ||$(this).val() == 1 ||$(this).val() == 2){
                $(".c-card-cabinet--additional-data-employer").show();
                addRequired();
            }
            else{
                $(".c-card-cabinet--additional-data-employer").hide();
                removeRequired();
            }
        });
        function addRequired() {
            nameWorkMan[0].setAttribute("data-required", "required");
            //var d_employer = nameWorkMan.val().length;
            //if(d_employer == 0 ) {
            //    formGroupErrorManageNameWorkMan.showError('Обязательное поле');
            //}
            workStatus[0].setAttribute("data-required", "required");
            //var d_position = workStatus.val().length;
            //if(d_employer == 0 ) {
            //    formGroupErrorManageWorkStatus.showError('Обязательное поле');
            //}
            workPhone[0].setAttribute("data-required", "required");
            //var d_workphone = workPhone.val().length;
            //if(d_workphone == 0 ) {
            //    formGroupErrorManageWorkPhone.showError('Обязательное поле');
            //}
        }
        function removeRequired() {
            nameWorkMan.removeAttr('data-required');
            workStatus.removeAttr('data-required');
            workPhone.removeAttr('data-required');
        }
    };
}
module.exports = InputSourceOfIncome;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],41:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Проверка полей на наличие ошибок перед отправкой в LK-настройки
 * @module inputValidBeforeSubmit
 */
function InputValidBeforeSubmit() {
    const self = this;
            //Источник доходов
    const   employment =  $(".o-pltz-select--additional-data-busyness"),
        emptyNameEmployer =  $('#additionalDataEmployer'),
        emptyNamePosition =  $('#additionalDataPosition'),
        emptyNameWorkphone = $('#additionalDataWorkphone'),
        //Финансовая информация
        emptyDateIncome =  $('#additionalDataIncome'),
        emptyDateIncomeDate =  $('#additionalDataIncomeDate'),
        emptyDateCredit =  $('#additionalDataCredit'),
        //Дополнительные контактные данные
        focusDataMoreContact = $('#additionalDataMoreContact'),
        focusDataMoreContactPhone = $('#additionalDataMoreContactPhone');


    self.init = function() {

        const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
        const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');
        const formGroupErrorManageEmptyNameEmployer = new FormGroupErrorManage($(emptyNameEmployer));
        const formGroupErrorManageEmptyNamePosition = new FormGroupErrorManage($(emptyNamePosition));
        const formGroupErrorManageEmptyNameWorkphone = new FormGroupErrorManage($(emptyNameWorkphone));

        const formGroupErrorManageEmptyNameContactError = new FormGroupErrorManage($(focusDataMoreContact));
        const formGroupErrorManageEmptyPhoneError = new FormGroupErrorManage($(focusDataMoreContactPhone));

        const formGroupErrorManageEmptyDateIncome = new FormGroupErrorManage($(emptyDateIncome));
        const formGroupErrorManageEmptyDateIncomeDate = new FormGroupErrorManage($(emptyDateIncomeDate));
        const formGroupErrorManageEmptyDateCredit = new FormGroupErrorManage($(emptyDateCredit));


        $(".additional-data").click(function() {
            /*
            *  Выдает ошибку на все незаполненные поля при submit
            */
            requiredShows();
        });
        function requiredShows() {
            if($(employment).val() == 0 ||$(employment).val() == 1 ||$(employment).val() == 2){
                if (!emptyNameEmployer.val()) {
                    formGroupErrorManageEmptyNameEmployer.showError('Обязательное поле');
                }
                if (!emptyNamePosition.val()) {
                    formGroupErrorManageEmptyNamePosition.showError('Обязательное поле');
                }
                if (!emptyNameWorkphone.val()) {
                    formGroupErrorManageEmptyNameWorkphone.showError('Обязательное поле');
                }
            }
            if (!emptyDateIncome.val()) {
                formGroupErrorManageEmptyDateIncome.showError('Обязательное поле');
            }
            if (!emptyDateIncomeDate.val()) {
                formGroupErrorManageEmptyDateIncomeDate.showError('Обязательное поле');
            }
            if (!emptyDateCredit.val()) {
                formGroupErrorManageEmptyDateCredit.showError('Обязательное поле');
            }
            if (!focusDataMoreContact.val()) {
                formGroupErrorManageEmptyNameContactError.showError('Обязательное поле');
            }
            if (!focusDataMoreContactPhone.val()) {
                formGroupErrorManageEmptyPhoneError.showError('Обязательное поле');
            }
        }

        $('#additional_form').submit(function(ev) {
            /*
            *  Фокусирует на поля при наличии ошибки
            */
            ev.preventDefault();
            if($(employment).val() == 0 ||$(employment).val() == 1 ||$(employment).val() == 2){
                if(formGroupErrorManageEmptyNameEmployer.hasError()) {
                    emptyNameEmployer.focus();
                } else if(formGroupErrorManageEmptyNamePosition.hasError()) {
                    emptyNamePosition.focus();
                } else if(formGroupErrorManageEmptyNameWorkphone.hasError()) {
                    emptyNameWorkphone.focus();
                } else {
                    if(formGroupErrorManageEmptyNameContactError.hasError()) {
                        focusDataMoreContact.focus();
                    } else if(formGroupErrorManageEmptyPhoneError.hasError()) {
                        focusDataMoreContactPhone.focus();
                    } else if(formGroupErrorManageEmptyDateIncome.hasError()) {
                        emptyDateIncome.focus();
                    } else {
                        this.submit();
                    }
                }
            } else {
                if(formGroupErrorManageEmptyNameContactError.hasError()) {
                    focusDataMoreContact.focus();
                } else if(formGroupErrorManageEmptyPhoneError.hasError()) {
                    focusDataMoreContactPhone.focus();
                } else if(formGroupErrorManageEmptyDateIncome.hasError()) {
                    emptyDateIncome.focus();
                } else {
                    this.submit();
                }
            }
        });
    };
}
module.exports = InputValidBeforeSubmit;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],42:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Проверка полей наличия ошибок в вводе на странице входа
 * @module inputValidDataLogin
 */
function InputValidDataLogin() {
    const self = this;

    //Контактные данные
    const  dataLoginPhone =  $('#lPhone'),
        dataLoginPass =  $('#lPass'),
        cookieLoginPhone = document.getElementById('lPhone');

    self.init = function() {

        const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
        const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');
        const formGroupErrorManageLoginPhone = new FormGroupErrorManage($(dataLoginPhone));

        if($('#lPhone').length){
            /*
            * Запись в cookie телефон
            */
            (function(){
                if (localStorage.lphone) {
                    cookieLoginPhone.value = localStorage.lphone; }
                // cookieLoginPhone.onchange = function() {
                //     localStorage.lphone = this.value; }
                document.getElementById("lPhone").onchange = function() {
                    if (this.selectedIndex !== 0) {
                        localStorage.lphone = this.value;
                    }
                };
            })();
        }


        dataLoginPass.focusout(function(){
            if (!dataLoginPhone.val()) {
                formGroupErrorManageLoginPhone.showError('Обязательное поле');
            }
        });
        $('#enter_lk').submit(function(event){
            if (!dataLoginPhone.val() || formGroupErrorManageLoginPhone.hasError() ) {
                dataLoginPhone.focus()
                event.preventDefault(); return false;
            } else {
                this.submit();
            }
        });
    };
}
module.exports = InputValidDataLogin;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],43:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Проверка полей на наличие ошибок перед отправкой на странице Регистрации
 * @module inputValidDataRegister
 */
function InputValidDataRegister() {
    const self = this;

        //Контактные данные
    const  dataReg1rPhone =  $('#rPhone'),
        dataReg1rEmail =  $('#rEmail'),
        datarSurname =  $('#rSurname'),
        datarName =  $('#rName'),
        datarPatronymic =  $('#rPatronymic'),
        //Паспортные данные
        datarBirthDate =  $('#rBirthDate'),
        datarPassport =  $('#rPassport'),
        datarPassportDate =  $('#rPassportDate'),
        datarPassportPodr =  $('#rPassportPodr'),
        datarPassportIssuer =  $('#rPassportIssuer'),
        datarBirthPlace =  $('#rBirthPlace'),
        datarAddressReg =  $('#rAddressReg'),
        datarPhone1 =  $('#rPhone1'),
        datarInn =  $('#rInn'),
        targetBtn = document.querySelector('.js-sms-send-link-reg'),
        elemIsCheck = $('#rAgree');


    self.init = function() {

        const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
        const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');
        const formGroupErrorManageRSurname = new FormGroupErrorManage($(datarSurname));
        const formGroupErrorManageRName = new FormGroupErrorManage($(datarName));
        const formGroupErrorManageRPatronymic = new FormGroupErrorManage($(datarPatronymic));
        const formGroupErrorManageReg1rPhone = new FormGroupErrorManage($(dataReg1rPhone));
        const formGroupErrorManageReg1rEmail = new FormGroupErrorManage($(dataReg1rEmail));

        const formGroupErrorManageRBirthDate = new FormGroupErrorManage($(datarBirthDate));
        const formGroupErrorManageRPassport = new FormGroupErrorManage($(datarPassport));
        const formGroupErrorManageRPassportDate = new FormGroupErrorManage($(datarPassportDate));
        const formGroupErrorManageRPassportPodr = new FormGroupErrorManage($(datarPassportPodr));
        const formGroupErrorManageRPassportIssuer = new FormGroupErrorManage($(datarPassportIssuer));
        const formGroupErrorManageRBirthPlace = new FormGroupErrorManage($(datarBirthPlace));
        const formGroupErrorManageRPhone1  = new FormGroupErrorManage($(datarPhone1));
        const formGroupErrorManageRInn  = new FormGroupErrorManage($(datarInn));
        const formGroupErrorManageIsCheck  = new FormGroupErrorManage($(elemIsCheck));

        dataReg1rPhone.focusout(function(){
            if (!datarSurname.val()) {
                formGroupErrorManageRSurname.showError('Обязательное поле');
            } if (!datarName.val()) {
                formGroupErrorManageRName.showError('Обязательное поле');
            } if (!datarPatronymic.val()) {
                formGroupErrorManageRPatronymic.showError('Обязательное поле');
            }
        });
        dataReg1rEmail.focusout(function(){
            if (!datarSurname.val()) {
                formGroupErrorManageRSurname.showError('Обязательное поле');
            } if (!datarName.val()) {
                formGroupErrorManageRName.showError('Обязательное поле');
            } if (!datarPatronymic.val()) {
                formGroupErrorManageRPatronymic.showError('Обязательное поле');
            } if (!dataReg1rPhone.val()) {
                formGroupErrorManageReg1rPhone.showError('Обязательное поле');
            }
        });
        $('#regone').submit(function(event){
            if (!datarSurname.val()  || formGroupErrorManageRSurname.hasError()) {
                datarSurname.focus()
                event.preventDefault(); return false;
            } else if (!datarName.val()  || formGroupErrorManageRName.hasError()) {
                datarName.focus()
                event.preventDefault(); return false;
            } else if (!datarPatronymic.val()  || formGroupErrorManageRPatronymic.hasError()) {
                datarPatronymic.focus()
                event.preventDefault(); return false;
            } else  if (!dataReg1rPhone.val()  || formGroupErrorManageReg1rPhone.hasError()) {
                dataReg1rPhone.focus()
                event.preventDefault(); return false;
            } else  if (!dataReg1rEmail.val()  || formGroupErrorManageReg1rEmail.hasError()) {
                dataReg1rEmail.focus()
                event.preventDefault(); return false;
            } else {
                this.submit();
            }
        });

        elemIsCheck.change(function() {
            if(this.checked) {
                formGroupErrorManageIsCheck.hideError();
            }
        });
        $('#regtwo').submit(function(event){
            if (!datarBirthDate.val() || formGroupErrorManageRBirthDate.hasError() ) {
                datarBirthDate.focus()
                event.preventDefault(); return false;
            } else if (!datarPassport.val() || formGroupErrorManageRPassport.hasError()) {
                datarPassport.focus()
                event.preventDefault(); return false;
            } else if (!datarPassportDate.val() || formGroupErrorManageRPassportDate.hasError()) {
                datarPassportDate.focus()
                event.preventDefault(); return false;
            } else if (!datarPassportPodr.val() || formGroupErrorManageRPassportPodr.hasError()) {
                datarPassportPodr.focus()
                event.preventDefault(); return false;
            } else if (!datarPassportIssuer.val() || formGroupErrorManageRPassportIssuer.hasError()) {
                datarPassportIssuer.focus()
                event.preventDefault(); return false;
            } else if (!datarBirthPlace.val() || formGroupErrorManageRBirthPlace.hasError()) {
                datarBirthPlace.focus()
                event.preventDefault(); return false;
            } else if (!datarAddressReg.val()) {
                datarAddressReg.focus()
                event.preventDefault(); return false;
            }  else if (formGroupErrorManageRPhone1.hasError()) {
                datarPhone1.focus()
                event.preventDefault(); return false;
            } else if (formGroupErrorManageRInn.hasError()) {
                datarInn.focus()
                event.preventDefault(); return false;
            }
            else if(!elemIsCheck.prop('checked')) {
                elemIsCheck.focus();
                formGroupErrorManageIsCheck.showError();
                event.preventDefault(); return false;
            }
            else {
                this.submit();
            }
        });
        if(targetBtn) {
            targetBtn.addEventListener('click', function() {
                if(!elemIsCheck.prop('checked')) {
                    elemIsCheck.focus();
                    formGroupErrorManageIsCheck.showError();
                    event.preventDefault(); return false;
                }
                else {
                    targetBtn.setAttribute('disabled', '');
                }
            });
        }

    };
}
module.exports = InputValidDataRegister;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],44:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Помечает все обязательные поля при вводе в разделе Дополнительные данные
 * @module inputViewRequiredAdditional
 */
function InputViewRequiredAdditional() {
    const self = this;

    const dataIncome =  $('#additionalDataIncome'),
        dataIncomeDate =  $('#additionalDataIncomeDate'),
        dataCredit =  $('#additionalDataCredit'),
        dataMoreContact =  $('#additionalDataMoreContact'),
        dataMoreContactPhone =  $('#additionalDataMoreContactPhone'),
        //Источник доходов
        nameWorkMan =  $('#additionalDataEmployer'),
        workStatus =  $('#additionalDataPosition'),
        workPhone =  $('#additionalDataWorkphone');

    self.init = function() {

        const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
        const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');
        const formGroupErrorManageDataIncome = new FormGroupErrorManage($(dataIncome));
        const formGroupErrorManageNameWorkMan = new FormGroupErrorManage($(nameWorkMan));
        const formGroupErrorManageWorkStatus = new FormGroupErrorManage($(workStatus));
        const formGroupErrorManageWorkPhone = new FormGroupErrorManage($(workPhone));

        const formGroupErrorManageDataIncomeDate = new FormGroupErrorManage($(dataIncomeDate));
        const formGroupErrorManageDataCredit = new FormGroupErrorManage($(dataCredit));
        const formGroupErrorManageDataMoreContact = new FormGroupErrorManage($(dataMoreContact));
        const formGroupErrorManageDataMoreContactPhone = new FormGroupErrorManage($(dataMoreContactPhone));

        $( "#additional_form textarea").attr("required", "true");

        workStatus.focusout(function(){
            if (!nameWorkMan.val()) {
                formGroupErrorManageNameWorkMan.showError('Обязательное поле');
            }
        });
        workPhone.focusout(function(){
            if (!nameWorkMan.val()) {
                formGroupErrorManageNameWorkMan.showError('Обязательное поле');
            } if (!workStatus.val()) {
                formGroupErrorManageWorkStatus.showError('Обязательное поле');
            }
        });
        dataIncome.focusout(function(){
            SourceOfIncome();
            //alert('valid')
        });
        dataIncomeDate.focusout(function(){
            SourceOfIncome();
            if (!dataIncome.val()) {
                formGroupErrorManageDataIncome.showError('Обязательное поле');
            }
        });
        dataCredit.focusout(function(){
            SourceOfIncome();
            if (!dataIncome.val()) {
                formGroupErrorManageDataIncome.showError('Обязательное поле');
            } if (!dataIncomeDate.val()) {
                formGroupErrorManageDataIncomeDate.showError('Обязательное поле');
            }
        });
        dataMoreContact.focusout(function(){
            SourceOfIncome();
            if (!dataIncome.val()) {
                formGroupErrorManageDataIncome.showError('Обязательное поле');
            } if (!dataIncomeDate.val()) {
                formGroupErrorManageDataIncomeDate.showError('Обязательное поле');
            } if (!dataCredit.val()) {
                formGroupErrorManageDataCredit.showError('Обязательное поле');
            }
        });
        dataMoreContactPhone.focusout(function(){
            SourceOfIncome();
            if (!dataIncome.val()) {
                formGroupErrorManageDataIncome.showError('Обязательное поле');
            } if (!dataIncomeDate.val()) {
                formGroupErrorManageDataIncomeDate.showError('Обязательное поле');
            } if (!dataCredit.val()) {
                formGroupErrorManageDataCredit.showError('Обязательное поле');
            } if (!dataMoreContact.val()) {
                formGroupErrorManageDataMoreContact.showError('Обязательное поле');
            }
        });
        function SourceOfIncome() {
            if (nameWorkMan.data("required")) {
                var d_employer = nameWorkMan.val().length;
                if(d_employer == 0 ) {
                    formGroupErrorManageNameWorkMan.showError('Обязательное поле');
                }
            }  if (workStatus.data("required")) {
                var d_position = workStatus.val().length;
                if(d_position == 0 ) {
                    formGroupErrorManageWorkStatus.showError('Обязательное поле');
                }
            } if (workPhone.data("required")) {
                var d_workphone = workPhone.val().length;
                if(d_workphone == 0 ) {
                    formGroupErrorManageWorkPhone.showError('Обязательное поле');
                }
            }
        }
    };
}
module.exports = InputViewRequiredAdditional;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],45:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Помечает все обязательные поля при вводе в разделе Акутализация анкетных данных
 * @module inputViewRequiredAktData
 */
function InputViewRequiredAktData() {
    const self = this;

    const datarSurname =  $('#rSurname'),
        datarName =  $('#rName'),
        datarPatronymic =  $('#rPatronymic'),
        datarBirthDate =  $('#rBirthDate'),
        datarPassport =  $('#rPassport'),
        datarPassportDate =  $('#rPassportDate'),
        datarPassportPodr =  $('#rPassportPodr'),
        datarPassportIssuer =  $('#rPassportIssuer'),
        datarBirthPlace =  $('#rBirthPlace'),
        datarAddressReg =  $('#rAddressReg'),
        datarAddressLiving =  $('#rAddressLiving'),
        datarPhone1 =  $('#rPhone1'),
        datarSnils =  $('#rSnils'),
        datarInn =  $('#rInn');

    self.init = function() {

        const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
        const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');
        const formGroupErrorManageRSurname = new FormGroupErrorManage($(datarSurname));
        const formGroupErrorManageRName = new FormGroupErrorManage($(datarName));
        const formGroupErrorManageRPatronymic = new FormGroupErrorManage($(datarPatronymic));
        const formGroupErrorManageRBirthDate = new FormGroupErrorManage($(datarBirthDate));
        const formGroupErrorManageRPassport = new FormGroupErrorManage($(datarPassport));
        const formGroupErrorManageRPassportDate = new FormGroupErrorManage($(datarPassportDate));
        const formGroupErrorManageRPassportPodr = new FormGroupErrorManage($(datarPassportPodr));
        const formGroupErrorManageRPassportIssuer = new FormGroupErrorManage($(datarPassportIssuer));
        const formGroupErrorManageRBirthPlace = new FormGroupErrorManage($(datarBirthPlace));
        const formGroupErrorManageRAddressReg  = new FormGroupErrorManage($(datarAddressReg));
        const formGroupErrorManageRAddressLiving  = new FormGroupErrorManage($(datarAddressLiving));
        const formGroupErrorManageRPhone1  = new FormGroupErrorManage($(datarPhone1));
        const formGroupErrorManageRInn  = new FormGroupErrorManage($(datarInn));

        $(".profile-data button").click(function() {
            /*
            *  Показывает ошибки на всех незаполненных полях при submit
            */
            if (!datarSurname.val()) {
                formGroupErrorManageRSurname.showError('Обязательное поле');
            }
            if (!datarName.val()) {
                formGroupErrorManageRName.showError('Обязательное поле');
            }
            if (!datarPatronymic.val()) {
                formGroupErrorManageRPatronymic.showError('Обязательное поле');
            }
            if (!datarBirthDate.val()) {
                formGroupErrorManageRBirthDate.showError('Обязательное поле');
            }
            if (!datarPassport.val()) {
                formGroupErrorManageRPassport.showError('Обязательное поле');
            }
            if (!datarPassportDate.val()) {
                formGroupErrorManageRPassportDate.showError('Обязательное поле');
            }
            if (!datarPassportIssuer.val()) {
                formGroupErrorManageRPassportIssuer.showError('Обязательное поле');
            }
            if (!datarBirthPlace.val()) {
                formGroupErrorManageRBirthPlace.showError('Обязательное поле');
            }
            if (!datarAddressReg.val()) {
                formGroupErrorManageRAddressReg.showError('Обязательное поле');
            }
        });
        /*
        * Подсвечивает пропущеные незаполненные поля
         */
        datarName.focusout(function(){
            if (!datarSurname.val()) {
                formGroupErrorManageRSurname.showError('Обязательное поле');
            }
        });
        datarPatronymic.focusout(function(){
            if (!datarSurname.val()) {
                formGroupErrorManageRSurname.showError('Обязательное поле');
            } if (!datarName.val()) {
                formGroupErrorManageRName.showError('Обязательное поле');
            }
        });
        datarBirthDate.focusout(function(){
           rFio()
        });
        datarPassport.focusout(function(){
            rFio();
            if (!datarBirthDate.val()) {
                formGroupErrorManageRBirthDate.showError('Обязательное поле');
            }
        });
        datarPassport.focusout(function(){
            rFio();
            if (!datarBirthDate.val()) {
                formGroupErrorManageRBirthDate.showError('Обязательное поле');
            }
        });

        datarPassportDate.focusout(function(){
            rFio();
            if (!datarBirthDate.val()) {
                formGroupErrorManageRBirthDate.showError('Обязательное поле');
            } if (!datarPassport.val()) {
                formGroupErrorManageRPassport.showError('Обязательное поле');
            }
        });
        datarPassportPodr.focusout(function(){
            rFio();
            if (!datarBirthDate.val()) {
                formGroupErrorManageRBirthDate.showError('Обязательное поле');
            } if (!datarPassport.val()) {
                formGroupErrorManageRPassport.showError('Обязательное поле');
            } if (!datarPassportDate.val()) {
                formGroupErrorManageRPassportDate.showError('Обязательное поле');
            }
        });
        datarPassportIssuer.focusout(function(){
            rFio();
            if (!datarBirthDate.val()) {
                formGroupErrorManageRBirthDate.showError('Обязательное поле');
            } if (!datarPassport.val()) {
                formGroupErrorManageRPassport.showError('Обязательное поле');
            } if (!datarPassportDate.val()) {
                formGroupErrorManageRPassportDate.showError('Обязательное поле');
            } if (!datarPassportPodr.val()) {
                formGroupErrorManageRPassportPodr.showError('Обязательное поле');
            }
        });
        datarBirthPlace.focusout(function(){
            rFio();
            if (!datarBirthDate.val()) {
                formGroupErrorManageRBirthDate.showError('Обязательное поле');
            } if (!datarPassport.val()) {
                formGroupErrorManageRPassport.showError('Обязательное поле');
            } if (!datarPassportDate.val()) {
                formGroupErrorManageRPassportDate.showError('Обязательное поле');
            } if (!datarPassportPodr.val()) {
                formGroupErrorManageRPassportPodr.showError('Обязательное поле');
            } if (!datarPassportIssuer.val()) {
                formGroupErrorManageRPassportIssuer.showError('Обязательное поле');
            }
        });
        datarAddressReg.focusout(function(){
            rFio();
            passportData();
        });
        datarAddressReg.blur(function () {
            var messages = $(this).val();
            if ($.trim(messages)) {
                formGroupErrorManageRAddressReg.hideError();
            }else{
                formGroupErrorManageRAddressReg.showError('Обязательное поле');
            }
        });
        datarAddressLiving.focusout(function(){
            rFio();
            passportData();
            if (!datarAddressReg.val()) {
                formGroupErrorManageRAddressReg.showError('Обязательное поле');
            }
        });
        datarPhone1.focusout(function(){
            rFio();
            passportData();
            if (!datarAddressReg.val()) {
                formGroupErrorManageRAddressReg.showError('Обязательное поле');
            } if (!datarAddressLiving.val()) {
                formGroupErrorManageRAddressLiving.showError('Обязательное поле');
            }  if (!datarPhone1.val()) {
                formGroupErrorManageRPhone1.hideError();
            }
        });
        datarSnils.focusout(function(){
            rFio();
            passportData();
            if (!datarAddressReg.val()) {
                formGroupErrorManageRAddressReg.showError('Обязательное поле');
            } if (!datarAddressLiving.val()) {
                formGroupErrorManageRAddressLiving.showError('Обязательное поле');
            }
        });
        datarInn.focusout(function(){
            rFio();
            passportData();
            if (!datarAddressReg.val()) {
                formGroupErrorManageRAddressReg.showError('Обязательное поле');
            } if (!datarAddressLiving.val()) {
                formGroupErrorManageRAddressLiving.showError('Обязательное поле');
            }
        });
        function rFio() {
            if (!datarSurname.val()) {
                formGroupErrorManageRSurname.showError('Обязательное поле');
            } if (!datarName.val()) {
                formGroupErrorManageRName.showError('Обязательное поле');
            } if (!datarPatronymic.val()) {
                formGroupErrorManageRPatronymic.showError('Обязательное поле');
            }
        }
        function passportData() {
            if (!datarBirthDate.val()) {
                formGroupErrorManageRBirthDate.showError('Обязательное поле');
            } if (!datarPassport.val()) {
                formGroupErrorManageRPassport.showError('Обязательное поле');
            } if (!datarPassportDate.val()) {
                formGroupErrorManageRPassportDate.showError('Обязательное поле');
            } if (!datarPassportPodr.val()) {
                formGroupErrorManageRPassportPodr.showError('Обязательное поле');
            } if (!datarPassportIssuer.val()) {
                formGroupErrorManageRPassportIssuer.showError('Обязательное поле');
            } if (!datarBirthPlace.val()) {
                formGroupErrorManageRBirthPlace.showError('Обязательное поле');
            }
        }
        /*
        * Фокусировка на незаполненные поля или поля с ошибкой при попытки submit
         */
        $('#anket_date').submit(function(event){
            if (!datarSurname.val() || formGroupErrorManageRSurname.hasError() ) {
                datarSurname.focus()
                event.preventDefault(); return false;
            } else if (!datarName.val() || formGroupErrorManageRName.hasError() )  {
                datarName.focus()
                event.preventDefault(); return false;
            } else if (!datarPatronymic.val() || formGroupErrorManageRPatronymic.hasError()) {
                datarPatronymic.focus()
                event.preventDefault(); return false;
            } else if (!datarBirthDate.val() || formGroupErrorManageRBirthDate.hasError()) {
                datarBirthDate.focus()
                event.preventDefault(); return false;
            } else if (!datarPassport.val() || formGroupErrorManageRPassport.hasError()) {
                datarPassport.focus()
                event.preventDefault(); return false;
            } else if (!datarPassportDate.val() || formGroupErrorManageRPassportDate.hasError()) {
                datarPassportDate.focus()
                event.preventDefault(); return false;
            } else if (!datarPassportPodr.val() || formGroupErrorManageRPassportPodr.hasError()) {
                datarPassportPodr.focus()
                event.preventDefault(); return false;
            } else if (!datarPassportIssuer.val()) {
                datarPassportIssuer.focus()
                event.preventDefault(); return false;
            } else if (!datarBirthPlace.val() || formGroupErrorManageRBirthPlace.hasError()) {
                datarBirthPlace.focus()
                event.preventDefault(); return false;
            } else if (!datarAddressReg.val()) {
                datarAddressReg.focus()
                event.preventDefault(); return false;
            } else if (formGroupErrorManageRPhone1.hasError()) {
                datarPhone1.focus()
                event.preventDefault(); return false;
            } else {
                this.submit();
            }
        });

    };
}
module.exports = InputViewRequiredAktData;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],46:[function(require,module,exports){
'use strict';

/**
 * Управление блоком изменения номера телефона
 * @param {Boolean} isHideSms - Если true, блок для ввода смс-кода будет скрыт при попытке изменения номера телефона
 * @module managePhoneNumber
 */
function ManagePhoneNumber(isHideSms) {
    const self = this;

    const container = document.querySelector('.js-phone-change-block');

    self.init = function() {
        if(container) {
            const ManageSmsVisibility = require('../forms/helpers/_manageSmsVisibility');

            const phoneInfoCont = container.querySelector('.js-phone-change-info'),
                phoneChangeCont = container.querySelector('.js-phone-change-input'),
                phoneChangeLink = container.querySelector('.js-phone-change-link'),
                phoneChangeCancelLink = container.querySelector('.js-phone-change-cancel-link');

            const phoneChangeInit = function(e) {
                const manageSmsVisibilityFunc = new ManageSmsVisibility();

                e.preventDefault();

                phoneInfoCont.classList.add('is-hidden-pltz');
                phoneChangeCont.classList.remove('is-hidden-pltz');

                if(isHideSms) {
                    manageSmsVisibilityFunc.hide();
                }


            };

            const phoneChangeCancelInit = function(e) {
                const manageSmsVisibilityFunc = new ManageSmsVisibility();

                e.preventDefault();

                phoneChangeCont.classList.add('is-hidden-pltz');
                phoneInfoCont.classList.remove('is-hidden-pltz');

                if(isHideSms) {
                    manageSmsVisibilityFunc.show();
                }

            };

            if(phoneChangeLink) {
                phoneChangeLink.addEventListener('click', phoneChangeInit);
            }

            if(phoneChangeCancelLink) {
                phoneChangeCancelLink.addEventListener('click', phoneChangeCancelInit);
            }
        }
    };

}

module.exports = ManagePhoneNumber;

},{"../forms/helpers/_manageSmsVisibility":57}],47:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Check if passwordRepeat equals to passrord
 * @module passwordRepeat
 */
function PasswordRepeat() {
    const self = this;

    const passwordsCont = document.querySelectorAll('.js-passwords-cont');

    self.init = function () {

        if(passwordsCont) {
            const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
            const FormGroupErrorManage = require('../forms/helpers/_formGroupErrorManage');

            Array.prototype.slice.call(passwordsCont).forEach(
                function (el) {
                    const inputPasswordRepeat = el.querySelector('.js-password-repeat'),
                        inputPassword = el.querySelector('.js-password'),
                        passwordRepeatParent = inputPasswordRepeat.parentNode;

                    if(inputPasswordRepeat && inputPassword && passwordRepeatParent) {
                        const passRepeatChange = function() {
                            const formGroupErrorManage = new FormGroupErrorManage($(inputPasswordRepeat));
                            if(inputPasswordRepeat.value.length > 0) {
                                if (inputPasswordRepeat.value === inputPassword.value) {
                                    formGroupErrorManage.hideError();
                                }
                                else {
                                    formGroupErrorManage.showError('Пароли не совпадают');
                                }
                            }
                        };

                        passRepeatChange();

                        inputPasswordRepeat.addEventListener('keyup', passRepeatChange);
                        inputPassword.addEventListener('keyup', passRepeatChange);
                    }
                }
            );
        }

    };

}

module.exports = PasswordRepeat;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../forms/helpers/_formGroupErrorManage":54}],48:[function(require,module,exports){
'use strict';

/**
 * Check password strength
 * @module passwordStrength
 */
function PasswordStrength() {
    const self = this;

    const passwordsCont = document.querySelectorAll('.js-passwords-cont');

    //var passwordStrengthIndicator = document.querySelectorAll([
    //    '.js-password-strength'
    //]);

    self.init = function() {

        if(passwordsCont) {
            Array.prototype.slice.call(passwordsCont).forEach(
                function (el) {
                    const passwordStrengthIndicator = el.querySelector('.js-password-strength'),
                        strengthBar = passwordStrengthIndicator.querySelector('.js-password-strength-bar'),
                        inputPassword = el.querySelector('.js-password');

                    if(passwordStrengthIndicator && inputPassword) {

                        const checkPasswordStatus = function() {
                            const strengthBarClassList = strengthBar.classList,
                                level = ((inputPassword.value.length >= 8) ? 1 : 0)
                                + (inputPassword.value.match(/([a-z]+)/) ? 1 : 0)
                                + (inputPassword.value.match(/([A-Z]+)/) ? 1 : 0)
                                + (inputPassword.value.match(/([0-9]+)/) ? 1 : 0);

                            if(level <= 1) {
                                strengthBarClassList.remove('is-weak');
                                strengthBarClassList.remove('is-medium');
                                strengthBarClassList.remove('is-strong');
                            }
                            else if(level === 2) {
                                strengthBarClassList.remove('is-weak');
                                strengthBarClassList.remove('is-medium');
                                strengthBarClassList.remove('is-strong');
                                strengthBarClassList.add('is-weak');
                            }
                            else if(level === 3) {
                                strengthBarClassList.remove('is-weak');
                                strengthBarClassList.remove('is-medium');
                                strengthBarClassList.remove('is-strong');
                                strengthBarClassList.add('is-medium');
                            }
                            else if(level === 4) {
                                strengthBarClassList.remove('is-weak');
                                strengthBarClassList.remove('is-medium');
                                strengthBarClassList.remove('is-strong');
                                strengthBarClassList.add('is-strong');
                            }
                        };

                        checkPasswordStatus();

                        inputPassword.addEventListener('keyup', checkPasswordStatus);
                    }
                }
            );
        }

    };

}

module.exports = PasswordStrength;

},{}],49:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Styled selects
 * @module selectStyled
 */
function SelectStyled() {
    var self = this;

    self.init = function() {
        const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

        const selector = '.js-select-styled',
            elem = $(selector);

        elem.select2({
            minimumResultsForSearch: Infinity,
            width: 'style',
            theme: 'pltz'
        });

    };

}

module.exports = SelectStyled;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],50:[function(require,module,exports){
'use strict';

/**
 * Таймер SMS
 * @param {Node} target - Элемент, на который навешивается таймер
 * @param {Number} time - Время для таймера
 * @constructor
 * @module startTimer
 */
function StartTimerSms(target, time) {
    const self = this;

    const resendLink = target;

    self.init = function() {
        if(resendLink) {
            const smsResendTime = time || 10;

            let smsResendTimeRemain = 0;
            let resendSmsIntervalChangeNumber;

            const smsResendLinkEnable = function() {
                smsResendTimeRemain = smsResendTime;
                resendLink.setAttribute('disabled', 'disabled');

                resendLink.innerText = smsResendTimeRemain;

                resendSmsIntervalChangeNumber = setInterval(showResendLink, 1000);

                function showResendLink() {
                    smsResendTimeRemain -= 1;
                    resendLink.innerText = smsResendTimeRemain;

                    if (smsResendTimeRemain < 1) {
                        clearInterval(resendSmsIntervalChangeNumber);

                        resendLink.innerText = 'Получить SMS-код';
                        resendLink.removeAttribute('disabled');
                    }
                }
            };

            smsResendLinkEnable();

        }
    };

}

module.exports = StartTimerSms;

},{}],51:[function(require,module,exports){
'use strict';

/**
 * States of controls in form
 * @module statesOfControls
 */
function StatesOfControls() {
    var self = this;

    var input = document.querySelectorAll([
        '.js-text-input'
    ]);

    self.init = function() {
        if(input) {
            Array.prototype.slice.call(input).forEach(
                function(el) {
                    var formGroup = el.parentNode;

                    var isEmpty = function() {
                        if(el.value.length === 0) {
                             formGroup.classList.add('is-empty');
                        }
                        else {
                            formGroup.classList.remove('is-empty');
                        }
                    };

                    var isFocused = function() {
                        isEmpty();

                        formGroup.classList.add('is-focused');
                    };

                    var isBlured = function() {
                        isEmpty();

                        formGroup.classList.remove('is-focused');
                    };

                    isEmpty();
                    el.addEventListener('focus', isFocused);
                    el.addEventListener('blur', isBlured);
                }
            );
        }
    };


}

module.exports = StatesOfControls;

},{}],52:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Resize textarea
 * @module textareaResize
 * @see https://github.com/jackmoore/autosize
 */
function TextareaResize() {
    const self = this;

    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
    const autosize = (typeof window !== "undefined" ? window['autosize'] : typeof global !== "undefined" ? global['autosize'] : null);

    self.init = function() {
        const el = $('.js-textarea-resize');

        const manageEnterKey = function(event) {
            if(event.keyCode === 13) {
                event.preventDefault();
            }
        };

        const managePasteWithEnter = function() {
            $(this).val($(this).val().split(/[\r\n]+/).join(' '));
        };

        if(el.length) {

            $(this).on('keydown', manageEnterKey);
            $(this).on('input', managePasteWithEnter);

            autosize(el);
        }

    };

    self.update = function(target) {
        target = target === undefined ? false : target;

        if(target !== false) {
            autosize.update(target);
        }

    };

}

module.exports = TextareaResize;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],53:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Очистка поля ввода при ошибке
 * @constructor
 * @module formGroupClearField
 */
function FormGroupClearField() {
    const self = this;

    const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    const target = $('.js-text-input');

    self.init = function() {
        if(target.length) {
            const FormGroupSetValue = require('./_formGroupSetValue');
            const TextareaResize = require('../_textareaResize');

            target.each(function() {
                const $this = $(this);
                const toggler = $this.siblings('.js-field-clear');

                const formGroupSetValueFunc = new FormGroupSetValue($this, '');
                const textareaResizeFunc = new TextareaResize();

                toggler.on('click', function() {
                    formGroupSetValueFunc.init();
                    textareaResizeFunc.update($this);

                    $this.focus();
                });
            });
        }
    };
}

module.exports = FormGroupClearField;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../_textareaResize":52,"./_formGroupSetValue":55}],54:[function(require,module,exports){
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

},{}],55:[function(require,module,exports){
'use strict';

/**
 * Установка значения в поле ввода формы
 * @param {Node} target - jQuery-элемент, для которого нужно установить значение
 * @param {String} data - Значение, которое нужно установить в поле
 * @constructor
 * @module formGroupSetValue
 */
function FormGroupSetValue(target, data) {
    const self = this;

    self.init = function() {
        if(target.length) {
            const FormGroupErrorManage = require('./_formGroupErrorManage');
            const formGroupToggleErrorFunc = new FormGroupErrorManage(target);

            target.val(data);

            formGroupToggleErrorFunc.toggleError(target, data === '');

            return target;
        }
    };
}

module.exports = FormGroupSetValue;

},{"./_formGroupErrorManage":54}],56:[function(require,module,exports){
'use strict';

/**
 * Управление отображением предупреждений в полях формы
 * @param {Node} target - jQuery-элемент, для которого нужно вывести или скрыть предупреждение
 * @module formGroupWarningManage
 */
function FormGroupWarningManage(target) {
    const self = this;

    self.toggleWarning = function(flag) {
        if(target.length) {
            const parent = target.closest('.c-form-group');

            parent.toggleClass('is-warning', flag);

            return target;
        }
    };

    self.showWarning = function() {
        return self.toggleWarning(true);
    };

    self.hideWarning = function() {
        return self.toggleWarning(false);
    };
}

module.exports = FormGroupWarningManage;

},{}],57:[function(require,module,exports){
'use strict';

/**
 * Управление блоком ввода смс
 * @module manageSmsVisibility
 */
function ManageSmsVisibility() {
    const self = this;

    const container = document.querySelector('.js-sms-manage');

    self.toggle = function(flag) {
        if(container) {
            const smsCont = container.querySelector('.js-sms-code-block');

            if(smsCont) {
                if(flag) {
                    smsCont.classList.add('is-hidden-pltz');
                }
                else {
                    smsCont.classList.remove('is-hidden-pltz');
                }
            }
        }
    };

    self.hide = function() {
        return self.toggle(true);
    };

    self.show = function() {
        return self.toggle(false);
    };

}

module.exports = ManageSmsVisibility;

},{}],58:[function(require,module,exports){
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

},{}],59:[function(require,module,exports){
'use strict';

/**
 * Get all siblings of an element
 * @param {Node} elem - The element
 * @return {Array} The siblings
 * @module getSiblings
 */
function GetSiblings(elem) {

    const siblings = [];
    let sibling = elem.parentNode.firstChild;

    for ( ; sibling; sibling = sibling.nextSibling ) {
        if ( sibling.nodeType === 1 && sibling !== elem ) {
            siblings.push( sibling );
        }
    }

    return siblings;

}

module.exports = GetSiblings;

},{}],60:[function(require,module,exports){
'use strict';

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function PlatizaJs() {
    const self = this;

    /**
     * Button To Top
     * @see module:totop
     */
    self.initToTop = function() {
        const Totop = require('./_totop');
        const totopFunc = new Totop();

        totopFunc.toggle();
        totopFunc.init();
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

    /**
     * Валидация для инпута в поле Источниках доходов
     * @see module:inputSourceOfIncome
     */
    self.initInputSourceOfIncome = function() {
        var InputSourceOfIncome = require('./forms/_inputSourceOfIncome');
        var inputSourceOfIncomeFunc = new InputSourceOfIncome();

        inputSourceOfIncomeFunc.init();
    };

    /**
     * Помечает все обязательные поля при вводе в разделе Дополнительные данные
     * @see module:inputViewRequiredAdditional
     */
    self.initInputViewRequiredAdditional = function() {
        var InputViewRequiredAdditional = require('./forms/_inputViewRequiredAdditional');
        var inputViewRequiredAdditionalFunc = new InputViewRequiredAdditional();

        inputViewRequiredAdditionalFunc.init();
    };

    /**
     * Помечает все обязательные поля при вводе в разделе Акутализация анкетных данных
     * @see module:inputViewRequiredAktData
     */
    self.initInputViewRequiredAktData = function() {
        var InputViewRequiredAktData = require('./forms/_inputViewRequiredAktData');
        var inputViewRequiredAktDataFunc = new InputViewRequiredAktData();

        inputViewRequiredAktDataFunc.init();
    };

    /**
     * Проверка полей на наличия ошибок перед отправкой  в LK-настройки
     * @see module:inputValidBeforeSubmit
     */
    self.initInputValidBeforeSubmit = function() {
        var InputValidBeforeSubmit = require('./forms/_inputValidBeforeSubmit');
        var inputValidBeforeSubmitFunc = new InputValidBeforeSubmit();

        inputValidBeforeSubmitFunc.init();
    };

    /**
     * Проверка полей на наличия ошибок перед отправкой на странице Регистрации
     * @see module:inputValidDataRegister
     */
    self.initInputValidDataRegister = function() {
        var InputValidDataRegister = require('./forms/_inputValidDataRegister');
        var inputValidDataRegisterFunc = new InputValidDataRegister();

        inputValidDataRegisterFunc.init();
    };

    /**
     * Проверка полей наличия ошибок в вводе на странице входа
     * @see module:inputValidDataLogin
     */
    self.initInputValidDataLogin = function() {
        var InputValidDataLogin = require('./forms/_inputValidDataLogin');
        var inputValidDataLoginFunc = new InputValidDataLogin();

        inputValidDataLoginFunc.init();
    };

    /**
     * Masked input for phone number
     * @see module:inputMaskedPhone
     */
    self.initInputMaskedPhone = function() {
        const InputMaskedPhone = require('./forms/_inputMaskedPhone');
        const inputMaskedPhoneFunc = new InputMaskedPhone();

        inputMaskedPhoneFunc.init('.js-input-phone');
    };

    /**
     * Masked input for bank BIK
     * @see module:inputMaskedBankBIK
     */
    self.initInputMaskedBankBIK = function() {
        const InputMaskedBankBIK = require('./forms/_inputMaskedBankBIK');
        const inputMaskedBankBIKFunc = new InputMaskedBankBIK();

        inputMaskedBankBIKFunc.init('.js-input-bank-bik');
    };

    /**
     * Masked input for bank account number
     * @see module:inputMaskedBankAccountNumber
     */
    self.initInputMaskedBankAccountNumber = function() {
        const InputMaskedBankAccountNumber = require('./forms/_inputMaskedBankAccountNumber');
        const inputMaskedBankAccountNumberFunc = new InputMaskedBankAccountNumber();

        inputMaskedBankAccountNumberFunc.init('.js-input-bank-account-number');
    };

    /**
     * Masked input for yandex wallet number
     * @see module:inputMaskedYandexNumber
     */
    self.initInputMaskedYandexNumber = function() {
        const InputMaskedYandexNumber = require('./forms/_inputMaskedYandexNumber');
        const inputMaskedYandexNumberFunc = new InputMaskedYandexNumber();

        inputMaskedYandexNumberFunc.init('.js-input-yandex-number');
    };

    /**
     * Masked input for optional phone number
     * @see module:inputMaskedPhoneOptional
     */
    self.initInputMaskedPhoneOptional = function() {
        const InputMaskedPhoneOptional = require('./forms/_inputMaskedPhoneOptional');
        const inputMaskedPhoneOptionalFunc = new InputMaskedPhoneOptional();

        inputMaskedPhoneOptionalFunc.init('.js-input-phone-optional');
    };

    /**
     * Masked input for optional phone number
     * @see module:inputMaskedPhoneOptional
     */
    self.initInputMaskedIncomeExpense = function() {
        const InputMaskedIncomeExpense = require('./forms/_inputMaskedIncomeExpense');
        const InputMaskedIncomeExpenseFunc = new InputMaskedIncomeExpense();

        InputMaskedIncomeExpenseFunc.init('.js-input-income-expense');
    };

    /**
     * Masked input for sms
     * @see module:inputMaskedSms
     */
    self.initInputMaskedSms = function() {
        const InputMaskedSms = require('./forms/_inputMaskedSms');
        const inputMaskedSmsFunc = new InputMaskedSms();

        inputMaskedSmsFunc.init('.js-input-sms');
    };

    /**
     * Masked input for passport
     * @see module:inputMaskedPassport
     */
    self.initInputMaskedPassport = function() {
        const InputMaskedPassport = require('./forms/_inputMaskedPassport');
        const inputMaskedPassportFunc = new InputMaskedPassport();

        inputMaskedPassportFunc.init('.js-input-passport');
    };

    /**
     * Masked input for passport - Podrazdeleniye
     * @see module:inputMaskedPassportPodr
     */
    self.initInputMaskedPassportPodr = function() {
        const InputMaskedPassportPodr = require('./forms/_inputMaskedPassportPodr');
        const inputMaskedPassportPodrFunc = new InputMaskedPassportPodr();

        inputMaskedPassportPodrFunc.init('.js-input-passport-podr');
    };

    /**
     * Masked input for date
     * @see module:inputMaskedDate
     */
    self.initInputMaskedDate = function() {
        const InputMaskedDate = require('./forms/_inputMaskedDate');
        const inputMaskedDateFunc = new InputMaskedDate();

        inputMaskedDateFunc.init('.js-input-date');
    };


    /**
     * Masked input for date
     * @see module:inputMaskedDateFuture
     */
    self.initInputMaskedDateFuture = function() {
        const InputMaskedDateFuture = require('./forms/_inputMaskedDateFuture');
        const inputMaskedDateFutureFunc = new InputMaskedDateFuture();

        inputMaskedDateFutureFunc.init('.js-input-date-future');
    };

    /**
     * Masked input for Snils
     * @see module:inputMaskedSnils
     */
    self.initInputMaskedSnils = function() {
        const InputMaskedSnils = require('./forms/_inputMaskedSnils');
        const inputMaskedSnilsFunc = new InputMaskedSnils();

        inputMaskedSnilsFunc.init('.js-input-snils');
    };

    /**
     * Masked input for Inn
     * @see module:inputMaskedInn
     */
    self.initInputMaskedInn = function() {
        const InputMaskedInn = require('./forms/_inputMaskedInn');
        const inputMaskedInnFunc = new InputMaskedInn();

        inputMaskedInnFunc.init('.js-input-inn');
    };

    /**
     * Masked input for numeric inputs
     * @see module:inputMaskedMoney
     */
    self.initInputMaskedMoney = function() {
        const InputMaskedMoney = require('./forms/_inputMaskedMoney');
        const inputMaskedMoneyFunc = new InputMaskedMoney();

        inputMaskedMoneyFunc.init('.js-input-money');
    };

    /**
     * Masked input for cyrillic inputs
     * @see module:inputMaskedCyrillic
     */
    self.initInputMaskedCyrillic = function() {
        const InputMaskedCyrillic = require('./forms/_inputMaskedCyrillic');
        const inputMaskedCyrillicFunc = new InputMaskedCyrillic();

        inputMaskedCyrillicFunc.init('.js-input-cyrillic');
    };

    /**
     * Masked input for ФИО
     * @see module:inputMaskedFio
     */
    self.initInputMaskedFioSeparately = function() {
        const InputMaskedFioSeparately = require('./forms/_inputMaskedFioSeparately');
        const inputMaskedFioSeparatelyFunc = new InputMaskedFioSeparately();

        inputMaskedFioSeparatelyFunc.init('.js-input-fio-separately');
    };

    /**
     * Masked input for Имя
     * @see module:inputMaskedName
     */
    self.initInputMaskedName = function() {
        const InputMaskedName = require('./forms/_inputMaskedName');
        const inputMaskedNameFunc = new InputMaskedName();

        inputMaskedNameFunc.init('.js-input-name');
    };

    /**
     * Masked input for ФИО
     * @see module:inputMaskedFio
     */
    self.initInputMaskedFio = function() {
        const InputMaskedFio = require('./forms/_inputMaskedFio');
        const inputMaskedFioFunc = new InputMaskedFio();

        inputMaskedFioFunc.init('.js-input-fio');
    };

    /**
     * Маска для инпута полного названия географического пункта
     * @see module:inputMaskedLocation
     */
    self.initInputMaskedLocation = function() {
        const InputMaskedLocation = require('./forms/_inputMaskedLocation');
        const inputMaskedLocationFunc = new InputMaskedLocation();

        inputMaskedLocationFunc.init('.js-input-location');
    };

    /**
     * Маска для инпута географического названия
     * @see module:inputMaskedGeo
     */
    self.initInputMaskedGeo = function() {
        const InputMaskedGeo = require('./forms/_inputMaskedGeo');
        const inputMaskedGeoFunc = new InputMaskedGeo();

        inputMaskedGeoFunc.init('.js-input-geo');
    };

    /**
     * Маска для обязательного инпута
     * @see module:InputRequired
     */
    self.initInputRequired = function() {
        const InputRequired = require('./forms/_inputRequired');
        const inputRequiredFunc = new InputRequired();

        inputRequiredFunc.init('.js-input-required');
    };

    /**
     * Маска для email
     * @see module:inputMaskedEmail
     */
    self.initInputMaskedEmail = function() {
        const InputMaskedEmail = require('./forms/_inputMaskedEmail');
        const inputMaskedEmailFunc = new InputMaskedEmail();

        inputMaskedEmailFunc.init('.js-input-email');
    };

    /**
     * Passport date verify
     * @see module:datePassportVerify
     */
    self.initDatePassportVerify = function() {
        const DatePassportVerify = require('./forms/_datePassportVerify');
        const datePassportVerifyFunc = new DatePassportVerify();

        datePassportVerifyFunc.init();
    };

    /**
     * Autocomplete Generic
     * @see module:autocompleteGeneric
     */
    self.initAutocompleteGeneric = function(control, terms) {
        const AutocompleteGeneric = require('./forms/_autocompleteGeneric');
        const autocompleteGenericFunc = new AutocompleteGeneric(control, terms);

        autocompleteGenericFunc.init();
    };

    /**
     * Add classes to c-form-group when controls are focused, active, disabled...
     * @see module:statesOfControls
     */
    self.initStatesOfControls = function() {
        const StatesOfControls = require('./forms/_statesOfControls');
        const statesOfControlsFunc = new StatesOfControls();

        statesOfControlsFunc.init();
    };

    /**
     * Resize textarea when typing
     * @see module:textareaResize
     */
    self.initTextareaResize = function() {
        const TextareaResize = require('./forms/_textareaResize');
        const textareaResizeFunc = new TextareaResize();

        textareaResizeFunc.init();
    };

    /**
     * Update Resize textarea when typing
     * @see module:textareaResize
     */
    self.initTextareaResizeUpdate = function(target) {
        const TextareaResize = require('./forms/_textareaResize');
        const textareaResizeUpdateFunc = new TextareaResize();

        textareaResizeUpdateFunc.update(target);
    };

    /**
     * Hide text inputs when corresponding checkbox is checked
     * @see module:checkboxNoomeField
     */
    self.initCheckboxNoSomeField = function() {
        const CheckboxNoSomeField = require('./forms/_checkboxNoSomeField');
        const checkboxNoSomeFieldFunc = new CheckboxNoSomeField();

        checkboxNoSomeFieldFunc.init('.js-no-email', '.js-email');
        checkboxNoSomeFieldFunc.init('.js-no-middle-name', '.js-middle-name');
        checkboxNoSomeFieldFunc.init('.js-no-street-reg', '.js-street-reg');
        checkboxNoSomeFieldFunc.init('.js-no-street-living', '.js-street-living');
    };

    /**
     * Check password strength
     * @see module:passwordStrength
     */
    self.initPasswordStrength = function() {
        const PasswordStrength = require('./forms/_passwordStrength');
        const passwordStrengthFunc = new PasswordStrength();

        passwordStrengthFunc.init();
    };

    /**
     * Check if passwordRepeat equals to passport
     * @see module:passwordRepeat
     */
    self.initPasswordRepeat = function() {
        const PasswordRepeat = require('./forms/_passwordRepeat');
        const passwordRepeatFunc = new PasswordRepeat();

        passwordRepeatFunc.init();
    };

    /**
     * Show / Hide hint in form groups
     * @see module:hints
     */
    self.initHintsInForms = function() {
        const HintsInForms = require('./forms/_hints');
        const hintsInFormsFunc = new HintsInForms();

        hintsInFormsFunc.init();
    };

    /**
     * Styled selects
     * @see module:selectStyled
     */
    self.initSelectStyled = function() {
        const SelectStyled = require('./forms/_selectStyled');
        const selectStyledFunc = new SelectStyled();

        selectStyledFunc.init();
    };

    /**
     * jCarousel
     * @see module:jcarouselSlider
     */
    self.initJCarousel = function() {
        const JcarouselSlider = require('./_jcarouselSlider');
        const jcarouselSliderFunc = new JcarouselSlider();

        jcarouselSliderFunc.init();
    };

    /**
     * Styled Input type File
     * @see module:inputFile
     */
    self.initInputFile = function() {
        const InputFile = require('./forms/_inputFile');
        const inputFileFunc = new InputFile();

        inputFileFunc.init('.js-upload-fake-btn', '.js-scan-upload');
    };

    /**
     * Address Living
     * @see module:addressLiving
     */
    self.initAddressLiving = function() {
        const AddressLiving = require('./forms/_addressLiving');
        const addressLivingFunc = new AddressLiving();

        addressLivingFunc.init();
    };
    /**
     * File Upload
     * @see module:fileUpload
     */
    self.initFileUpload = function() {
        const FileUpload = require('./forms/_fileUpload');
        const fileUploadFunc = new FileUpload();

        fileUploadFunc.init('.js-scan-upload');
    };

    /**
     * Choose document type for upload
     * @see module:documentType
     */
    self.initDocumentType = function() {
        const DocumentType = require('./forms/_documentType');
        const documentTypeFunc = new DocumentType();

        documentTypeFunc.init('.js-doc-type-choice', '.js-upload-block');
    };

    /**
     * Manage Phone Number
     * @see module:managePhoneNumber
     */
    self.initManagePhoneNumber = function(flag) {
        const ManagePhoneNumber = require('./forms/_managePhoneNumber');
        const managePhoneNumberFunc = new ManagePhoneNumber(flag);

        managePhoneNumberFunc.init();
    };

    /**
     * Sms Таймер
     * @see module:setTimerSms
     */
    self.initStartTimerSms = function(target, time) {
        const StartTimerSms = require('./forms/_startTimerSms');
        const startTimerSmsFunc = new StartTimerSms(target, time);

        startTimerSmsFunc.init();
    };

    /**
     * Прогрессбар заполнения полей блока формы (fieldset)
     * @see module:formProgress
     */
    self.initFormProgress = function() {
        const FormProgress = require('./forms/_formProgress');
        const formProgressFunc = new FormProgress();

        formProgressFunc.init();
    };

    /**
     * Переключить отображение ошибки в поле формы
     * @param {Node} target - jQuery-элемент, для которого нужно переключить отображение ошибки валидации
     * @param {Boolean} flag - Показать или скрыть
     * @see module:formGroupErrorManage
     */
    self.initFormGroupToggleError = function(target, flag) {
        const FormGroupErrorManage = require('./forms/helpers/_formGroupErrorManage');
        const formGroupToggleErrorFunc = new FormGroupErrorManage(target);

        formGroupToggleErrorFunc.toggleError(flag);
    };

    /**
     * Отобразить ошибку в поле формы
     * @param {Node} target - jQuery-элемент, для которого нужно вывести ошибку валидации
     * @param {String} text - Текст ошибки
     * @see module:formGroupErrorManage
     */
    self.initFormGroupShowError = function(target, text) {
        const FormGroupErrorManage = require('./forms/helpers/_formGroupErrorManage');
        const formGroupShowErrorFunc = new FormGroupErrorManage(target, text);

        formGroupShowErrorFunc.showError();
    };

    /**
     * Скрыть ошибку в поле формы
     * @param {Node} target - jQuery-элемент, для которого нужно скрыть ошибку валидации
     * @see module:formGroupErrorManage
     */
    self.initFormGroupHideError = function(target) {
        const FormGroupErrorManage = require('./forms/helpers/_formGroupErrorManage');
        const formGroupHideErrorFunc = new FormGroupErrorManage(target);

        formGroupHideErrorFunc.hideError();
    };

    /**
     * Изменить текст ошибки
     * @param {Node} target - jQuery-элемент, для которого нужно скрыть ошибку валидации
     * @param {String} text - Текст ошибки
     * @see module:formGroupErrorManage
     */
    self.initFormGroupSetError = function(target, text) {
        const FormGroupErrorManage = require('./forms/helpers/_formGroupErrorManage');
        const formGroupSetErrorFunc = new FormGroupErrorManage(target, text);

        formGroupSetErrorFunc.setErrorText(text);
    };

    /**
     * Проверка поля на ошибку
     * @param {Node} target - jQuery-элемент, для которого нужно проверить ошибку
     * @see module:formGroupErrorManage
     */
    self.initFormGroupHasError = function(target) {
        const FormGroupErrorManage = require('./forms/helpers/_formGroupErrorManage');
        const formGroupHasErrorFunc = new FormGroupErrorManage(target);

        return formGroupHasErrorFunc.hasError();
    };

    /**
     * Установить значение в поле ввода
     * @param {Node} target - jQuery-элемент, для которого нужно установить значение
     * @param {String} data - Значение для установки
     * @see module:formGroupSetValue
     */
    self.initFormGroupSetValue = function(target, data) {
        const FormGroupSetValue = require('./forms/helpers/_formGroupSetValue');
        const formGroupSetValueFunc = new FormGroupSetValue(target, data);

        formGroupSetValueFunc.init();
    };

    /**
     * Очистка поля ввода при ошибке
     * @see module:formGroupClearField
     */
    self.initFormGroupClearField = function() {
        const FormGroupClearField = require('./forms/helpers/_formGroupClearField');
        const formGroupClearFieldFunc = new FormGroupClearField();

        formGroupClearFieldFunc.init();
    };

    ///**
    // * Менеджмент полей форм
    // * @param {Node} target - jQuery-элемент (форма)
    // * @param {Function} canSubmit - Функция проверки дизабливания кнопки отправки формы
    // * @see module:manageForm
    // */
    //self.initManageForm = function(target, canSubmit) {
    //    const ManageForm = require('./forms/helpers/_manageForm');
    //    const manageFormFunc = new ManageForm(target);
    //
    //    manageFormFunc.init(canSubmit);
    //};

    /**
     * Фейковый таймер для маркетинга
     * @param {Object} target - Елемент, в котором будет таймер
     * @param {Number} time - Время для старта фейкового отчета
     * @see module:timerFake
     */
    self.initTimerFake = function(target, time) {
        const TimerFake = require('./_timerFake');
        const timerFakeFunc = new TimerFake(target, time);

        timerFakeFunc.init();
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
     * Прокрутка к элементу
     * @param {Node} target - Элемент, к которому нужно прокрутить страницу
     * @see module:scrollToElement
     */
    self.initScrollToElement = function(target) {
        const ScrollToElement = require('./_scrollToElement');
        const scrollToElementFunc = new ScrollToElement(target);

        scrollToElementFunc.init();
    };

    /**
     * Settings
     * @see module:settingsPltz
     */
    self.initSettingsPltzEmail = function() {
        const SettingsPltz = require('./settings/_settingsPltz');
        const settingsPltzFunc = new SettingsPltz();

        return settingsPltzFunc.emailRegex();
    };

    /**
     * Modals
     * @see module:modal
     */
    self.initModal = function() {
        const Modal = require('./_modal');
        const modalFunc = new Modal();

        return modalFunc.init();
    };

}

module.exports = PlatizaJs;


},{"./_jcarouselSlider":2,"./_modal":3,"./_scrollToElement":4,"./_timerFake":5,"./_tooltips":6,"./_topMenu":7,"./_totop":8,"./forms/_addressLiving":9,"./forms/_autocompleteGeneric":10,"./forms/_checkboxNoSomeField":11,"./forms/_datePassportVerify":12,"./forms/_documentType":13,"./forms/_fileUpload":14,"./forms/_formProgress":15,"./forms/_hints":16,"./forms/_inputFile":17,"./forms/_inputMaskedBankAccountNumber":18,"./forms/_inputMaskedBankBIK":19,"./forms/_inputMaskedCyrillic":20,"./forms/_inputMaskedDate":21,"./forms/_inputMaskedDateFuture":22,"./forms/_inputMaskedEmail":23,"./forms/_inputMaskedFio":24,"./forms/_inputMaskedFioSeparately":25,"./forms/_inputMaskedGeo":26,"./forms/_inputMaskedIncomeExpense":27,"./forms/_inputMaskedInn":28,"./forms/_inputMaskedLocation":29,"./forms/_inputMaskedMoney":30,"./forms/_inputMaskedName":31,"./forms/_inputMaskedPassport":32,"./forms/_inputMaskedPassportPodr":33,"./forms/_inputMaskedPhone":34,"./forms/_inputMaskedPhoneOptional":35,"./forms/_inputMaskedSms":36,"./forms/_inputMaskedSnils":37,"./forms/_inputMaskedYandexNumber":38,"./forms/_inputRequired":39,"./forms/_inputSourceOfIncome":40,"./forms/_inputValidBeforeSubmit":41,"./forms/_inputValidDataLogin":42,"./forms/_inputValidDataRegister":43,"./forms/_inputViewRequiredAdditional":44,"./forms/_inputViewRequiredAktData":45,"./forms/_managePhoneNumber":46,"./forms/_passwordRepeat":47,"./forms/_passwordStrength":48,"./forms/_selectStyled":49,"./forms/_startTimerSms":50,"./forms/_statesOfControls":51,"./forms/_textareaResize":52,"./forms/helpers/_formGroupClearField":53,"./forms/helpers/_formGroupErrorManage":54,"./forms/helpers/_formGroupSetValue":55,"./settings/_settingsPltz":61}],61:[function(require,module,exports){
'use strict';

/**
 * Настройки
 * @module SettingsPltz
 */
function SettingsPltz() {
    const self = this;

    self.emailRegex = function() {
        return /^([\w\-]+(\.[\w\-]+)*)@(([\w\-]+\.)+[\w]{2,})$/
    };

}

module.exports = SettingsPltz;

},{}]},{},[60])(60)
});