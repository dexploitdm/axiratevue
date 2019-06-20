<template>
<div class="pltz-layout">
    <SideBarLK />
    <div class="pltz-layout__content">

        <h1 class="o-content-title">Оформить заём</h1>

        <div class="c-card-cabinet c-card-cabinet_steps">

            <div class="pltz-content pltz-content_steps">

                <div class="pltz-content__block js-tabs-scroll">
                    <div class="c-tabs">
                        <div class="c-tabs__nav-item c-tabs__nav-item_active">
                            <div class="c-tabs__num">
                                1
                            </div>
                            <div class="c-tabs__title">
                                Параметры <br class="c-tabs__br">займа
                                    </div>
                            </div>

                            <div class="c-tabs__nav-item">
                                <div class="c-tabs__num">
                                    2
                                </div>
                                <div class="c-tabs__title">
                                    Способ <br class="c-tabs__br">получения
                                    </div>
                                </div>

                                <div class="c-tabs__nav-item">
                                    <div class="c-tabs__num">
                                        3
                                    </div>
                                    <div class="c-tabs__title">
                                        Подписание <br class="c-tabs__br">документов
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form v-if="isActiveLoans.completed == true" action="" class="c-form js-loan-calculator">
                        <div class="c-card-cabinet c-card-cabinet_sticky">

                            <div class="pltz-content pltz-content_t1">
                                <div class="pltz-content__block">

                                    <div class="pltz-flex pltz-flex_p20  pltz-rel">
                                        <div class="pltz-flex__col pltz-flex__col_small6 pltz-flex__col_small-mb">

                                            <div class="c-calc js-slider-sum">
                                                <div class="slider-message"></div>
                                                <label for="loanSum" class="c-calc__label">Сумма</label>
                                                <div class="c-calc__input-block">
                                                    <input type="hidden" class="js-sum-value" value="3000">
                                                    <div class="c-calc__slider-part c-calc__slider-part_input">
                                                        <input type="tel" name="loanSum" id="loanSum"
                                                class="c-calc__input js-sum-input"
                                                value="3000"
                                                data-min="1000"
                                                data-max="70000"
                                                data-start="3000"
                                                data-step="1000"
                                                data-type="loan-sum" />
                                            </div>
                                                        <div class="c-calc__slider-part c-calc__slider-part_info">
                                                            рублей
                                                        </div>
                                                    </div>
                                                    <div class="c-calc__slider o-slider">
                                                        <div class="o-slider__item js-slider-item"></div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="pltz-flex__col pltz-flex__col_small6">

                                                <div class="c-calc js-slider-period">
                                                    <label for="loanPeriod" class="c-calc__label">На срок</label>
                                                    <div class="c-calc__input-block">
                                                        <div class="c-calc__slider-part c-calc__slider-part_input">
                                                            <div id="valweeks"></div>
                                                            <input type="tel" name="loanPeriod" id="loanPeriod" class="c-calc__input js-period-input"
                                                value="10"
                                                data-min=""
                                                data-max=""
                                                data-start="10"
                                                data-step="1"
                                                data-type="loan-period" />
                                            </div>
                                                            <div class="c-calc__slider-part c-calc__slider-part_info">
                                                                дней
                                                            </div>
                                                        </div>
                                                        <div class="c-calc__slider o-slider">
                                                            <div class="o-slider__item js-slider-item"></div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="pltz-flex pltz-flex_p20">
                                                <div class="pltz-flex__col pltz-flex__col_small4 pltz-flex__col_small-mb">
                                                    <div class="c-form-group" style="margin: 20px 0 0 0;">
                                                        <input type="text" class="o-pltz-text-input js-text-input" minlength="3"
                                               maxlength="5" value="" name="promocode" id="promocode">
                                                        <label class="control-label" for="promocode">Промокод</label>
                                                    </div>
                                                </div>
                                                <div class="pltz-flex__col pltz-flex__col_small6 pltz-flex__col_small-mb">
                                                    <div class="c-form-group c-sms-manage" style="margin: 20px 0 0 0;">
                                                        <div class="c-calc-btn">
                                                            <button type="submit" class="o-pltz-btn-link" style="height: 64px;">Активировать промокод</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div class="c-card-cabinet">

                                    <div class="pltz-content">

                                        <h2 class="o-content-h2 o-content-h2_feat-t1">«До зарплаты»</h2>

                                        <div class="pltz-content__block">
                                            <div class="pltz-flex pltz-flex_p20">
                                                <div class="pltz-flex__col pltz-flex__col_small3 pltz-flex__col_small-mb">
                                                    <div class="c-calc">
                                                        <div class="c-calc__title">Сумма к возврату:</div>
                                                        <div class="c-calc__value"><span class="js-sum-repay">0</span> ₽</div>
                                                    </div>
                                                    <div class="show-graph o-link">График платежей</div>
                                                </div>

                                                <div class="pltz-flex__col pltz-flex__col_small3 pltz-flex__col_small-mb">
                                                    <div class="c-calc">
                                                        <div class="c-calc__title">Без скидки:</div>
                                                        <div class="c-calc__value c-calc__value--small"><span
                                                class="js-sum-repay">0</span> ₽
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="pltz-flex__col pltz-flex__col_small6">
                                                    <div class="c-calc">
                                                        <div class="c-calc__title">Вернуть до:</div>
                                                        <div class="c-calc__value"><span class="js-period-repay"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pltz-content__block">
                                            <div id="graph" style="display: none;">
                                                <h2 class="o-content-h2 o-content-h2_feat-t1">График платежей</h2>
                                                <div class="layout-graph">
                                                    <div class="pltz-table-wrapper">
                                                        <table class="pltz-table-t1">
                                                            <thead>
                                                                <tr class="pltz-table-t1__tr">
                                                                    <th class="pltz-table-t1__th"></th>
                                                                    <th class="pltz-table-t1__th">
                                                                        №
                                                                    </th>
                                                                    <th class="pltz-table-t1__th">
                                                                        Дата <br>
                                                        платежа
                                                    </th>
                                                                    <th class="pltz-table-t1__th">
                                                                        Сумма <br>
                                                        платежа
                                                    </th>
                                                                    <th class="pltz-table-t1__th">
                                                                        Сумма <br> процентов
                                                    </th>
                                                                    <th class="pltz-table-t1__th">
                                                                        Сумма <br> основного долга
                                                    </th>
                                                                    <th class="pltz-table-t1__th">
                                                                        Остаток долга
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr class="pltz-table-t1__tr">
                                                                    <td class="pltz-table-t1__td">
                                                                        <div class="icons-graph paid-payment"></div>
                                                                    </td>
                                                                    <td class="pltz-table-t1__td">1</td>
                                                                    <td class="pltz-table-t1__td">06.05.2019</td>
                                                                    <td class="pltz-table-t1__td">24 150,00 ₽</td>
                                                                    <td class="pltz-table-t1__td">5 000,00 ₽</td>
                                                                    <td class="pltz-table-t1__td">19 150,00 ₽</td>
                                                                    <td class="pltz-table-t1__td">72 450,00 ₽</td>
                                                                </tr>
                                                                <tr class="pltz-table-t1__tr">
                                                                    <td class="pltz-table-t1__td">
                                                                        <div class="icons-graph overdue-payment"></div>
                                                                    </td>
                                                                    <td class="pltz-table-t1__td">2</td>
                                                                    <td class="pltz-table-t1__td">20.05.2019</td>
                                                                    <td class="pltz-table-t1__td">24 150,00 ₽</td>
                                                                    <td class="pltz-table-t1__td">5 000,00 ₽</td>
                                                                    <td class="pltz-table-t1__td">19 150,00 ₽</td>
                                                                    <td class="pltz-table-t1__td">48 300,00 ₽</td>
                                                                </tr>
                                                                <tr class="pltz-table-t1__tr">
                                                                    <td class="pltz-table-t1__td">
                                                                        <div class="icons-graph wait-payment"></div>
                                                                    </td>
                                                                    <td class="pltz-table-t1__td">3</td>
                                                                    <td class="pltz-table-t1__td">03.06.2019</td>
                                                                    <td class="pltz-table-t1__td">24 150,00 ₽</td>
                                                                    <td class="pltz-table-t1__td">2 000,00 ₽</td>
                                                                    <td class="pltz-table-t1__td">22 150,00 ₽</td>
                                                                    <td class="pltz-table-t1__td">24 150,00 ₽</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="icons-info">
                                                        <div class="graph-icon-item">
                                                            <div class="icons-graph wait-payment"></div>
                                                            <p>Ожидает оплаты</p>
                                                        </div>
                                                        <div class="graph-icon-item">
                                                            <div class="icons-graph paid-payment"></div>
                                                            <p>Оплачено</p>
                                                        </div>
                                                        <div class="graph-icon-item">
                                                            <div class="icons-graph overdue-payment"></div>
                                                            <p>Просрок</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pltz-flex pltz-flex_p20">
                                                <div class="pltz-flex__col pltz-flex__col_small6">
                                                    <div class="c-form-group c-form-group_checkbox c-form-group_t1" style="margin: 13px 0 0 0;">
                                                        <input class="o-pltz-checkbox" id="rAgree" value="1" name="rAgree" type="checkbox" data-required="required">
                                                        <label class="control-label" for="rAgree">
                                                Я согласен и ознакомлен <a href="lk_01-08.php" class="control-label__link" target="_blank">со следующим</a>
                                            </label>
                                                        <div class="c-form-group__message">Для продолжения регистрации в сервисе вы должны быть согласны с условиями оферты</div>
                                                    </div>
                                                </div>
                                                <div class="pltz-flex__col pltz-flex__col_small6">
                                                    <div class="c-calc-btn">
                                                        <button type="submit" class="o-pltz-btn o-pltz-btn_i-full" id="rAgreeButton" disabled>Продолжить</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div class="c-card-cabinet">

                                    <div class="pltz-content">

                                        <h2 class="o-content-h2 o-content-h2_feat-t1">«До зарплаты»</h2>

                                        <div class="pltz-content__block">
                                            <div class="pltz-flex pltz-flex_p20">
                                                <div class="pltz-flex__col pltz-flex__col_small6 pltz-flex__col_small-mb">
                                                    <div class="c-calc">
                                                        <div class="c-calc__title">Сумма к возврату:</div>
                                                        <div class="c-calc__value"><span class="js-sum-repay"></span> ₽</div>
                                                    </div>
                                                </div>

                                                <div class="pltz-flex__col pltz-flex__col_small6">
                                                    <div class="c-calc">
                                                        <div class="c-calc__title">Вернуть до:</div>
                                                        <div class="c-calc__value"><span class="js-period-repay"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pltz-content__block">
                                            <div class="pltz-flex pltz-flex_p20 pltz-flex_bottom">
                                                <div class="pltz-flex__col pltz-flex__col_small6 pltz-flex__col_small-mb">
                                                    <div class="c-calc__title">Способ получения:</div>

                                                    <div class="c-calc__cards">
                                                        <div class="c-form-group c-form-group_checkbox c-form-group_mb0">
                                                            <div class="c-form-group__items">

                                                                <div class="c-form-group__item">
                                                                    <input type="radio" id="loanCard0" name="loanCard[]" value="0"
                                                           class="o-pltz-radio is-bank-card-sber" checked/>
                                                                    <label for="loanCard0" class="control-label">Карта VISA 4756 ****
                                                        **** 2435</label>
                                                                </div>

                                                                <div class="c-form-group__item">
                                                                    <input type="radio" id="loanCard09" name="loanCard[]" value="09"
                                                           class="o-pltz-radio is-bank-card-other"/>
                                                                    <label for="loanCard09" class="control-label">Новая карта</label>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="pltz-flex__col pltz-flex__col_small6">
                                                    <div class="c-calc-btn">
                                                        <button type="submit" class="o-pltz-btn o-pltz-btn_i-full">Продолжить</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div class="c-card-cabinet">

                                    <div class="pltz-content">

                                        <h2 class="o-content-h2 o-content-h2_feat-t1">«До зарплаты»</h2>

                                        <div class="pltz-content__block">
                                            <div class="pltz-flex pltz-flex_p20">
                                                <div class="pltz-flex__col pltz-flex__col_small6 pltz-flex__col_small-mb">
                                                    <div class="c-calc">
                                                        <div class="c-calc__title">Сумма к возврату:</div>
                                                        <div class="c-calc__value"><span class="js-sum-repay"></span> ₽</div>
                                                    </div>
                                                </div>

                                                <div class="pltz-flex__col pltz-flex__col_small6">
                                                    <div class="c-calc">
                                                        <div class="c-calc__title">Вернуть до:</div>
                                                        <div class="c-calc__value"><span class="js-period-repay"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pltz-content__block">
                                            <div class="pltz-flex pltz-flex_p20 pltz-flex_bottom">
                                                <div class="pltz-flex__col pltz-flex__col_small6 pltz-flex__col_small-mb">
                                                    <div class="c-calc__title">Способ получения:</div>

                                                    <div class="c-calc__cards">
                                                        <div class="c-form-group c-form-group_checkbox c-form-group_mb0">
                                                            <div class="c-form-group__items">

                                                                <div class="c-form-group__item">
                                                                    <input type="radio" id="loanCard20" name="loanCard2[]" value="20"
                                                           class="o-pltz-radio is-bank-card-sber" checked/>
                                                                    <label for="loanCard20" class="control-label">Карта VISA 4756 ****
                                                        **** 2435</label>
                                                                </div>

                                                                <div class="c-form-group__item">
                                                                    <input type="radio" id="loanCard21" name="loanCard2[]" value="21"
                                                           class="o-pltz-radio is-bank-card-alpha"/>
                                                                    <label for="loanCard21" class="control-label">Карта VISA 4756 ****
                                                        **** 2435</label>
                                                                </div>

                                                                <div class="c-form-group__item">
                                                                    <input type="radio" id="loanCard22" name="loanCard2[]" value="22"
                                                           class="o-pltz-radio is-bank-card-gas"/>
                                                                    <label for="loanCard22" class="control-label">Карта VISA 4756 ****
                                                        **** 2435</label>
                                                                </div>

                                                                <div class="c-form-group__item">
                                                                    <input type="radio" id="loanCard23" name="loanCard2[]" value="23"
                                                           class="o-pltz-radio is-bank-card-homecredit"/>
                                                                    <label for="loanCard23" class="control-label">Карта VISA 4756 ****
                                                        **** 2435</label>
                                                                </div>

                                                                <div class="c-form-group__item">
                                                                    <input type="radio" id="loanCard24" name="loanCard2[]" value="24"
                                                           class="o-pltz-radio is-bank-card-otp"/>
                                                                    <label for="loanCard24" class="control-label">Карта VISA 4756 ****
                                                        **** 2435</label>
                                                                </div>

                                                                <div class="c-form-group__item">
                                                                    <input type="radio" id="loanCard25" name="loanCard2[]" value="25"
                                                           class="o-pltz-radio is-bank-card-psb"/>
                                                                    <label for="loanCard25" class="control-label">Карта VISA 4756 ****
                                                        **** 2435</label>
                                                                </div>

                                                                <div class="c-form-group__item">
                                                                    <input type="radio" id="loanCard26" name="loanCard2[]" value="26"
                                                           class="o-pltz-radio is-bank-card-raiffeisen"/>
                                                                    <label for="loanCard26" class="control-label">Карта VISA 4756 ****
                                                        **** 2435</label>
                                                                </div>

                                                                <div class="c-form-group__item">
                                                                    <input type="radio" id="loanCard27" name="loanCard2[]" value="27"
                                                           class="o-pltz-radio is-bank-card-sovcombank"/>
                                                                    <label for="loanCard27" class="control-label">Карта VISA 4756 ****
                                                        **** 2435</label>
                                                                </div>

                                                                <div class="c-form-group__item">
                                                                    <input type="radio" id="loanCard28" name="loanCard2[]" value="28"
                                                           class="o-pltz-radio is-bank-card-tinkoff"/>
                                                                    <label for="loanCard28" class="control-label">Карта VISA 4756 ****
                                                        **** 2435</label>
                                                                </div>

                                                                <div class="c-form-group__item">
                                                                    <input type="radio" id="loanCard29" name="loanCard2[]" value="29"
                                                           class="o-pltz-radio is-bank-card-vtb"/>
                                                                    <label for="loanCard29" class="control-label">Карта VISA 4756 ****
                                                        **** 2435</label>
                                                                </div>

                                                                <div class="c-form-group__item">
                                                                    <input type="radio" id="loanCard30" name="loanCard2[]" value="30"
                                                           class="o-pltz-radio is-bank-card-unknown"/>
                                                                    <label for="loanCard30" class="control-label">Карта VISA 4756 ****
                                                        **** 2435</label>
                                                                </div>

                                                                <div class="c-form-group__item">
                                                                    <input type="radio" id="loanCard299" name="loanCard2[]" value="299"
                                                           class="o-pltz-radio is-bank-card-other"/>
                                                                    <label for="loanCard299" class="control-label">Новая карта</label>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="pltz-flex__col pltz-flex__col_small6">
                                                    <div class="c-calc-btn">
                                                        <button type="submit" class="o-pltz-btn o-pltz-btn_i-full">Продолжить</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div class="c-card-cabinet c-card-cabinet_t2">

                                    <div class="pltz-content">

                                        <h2 class="o-content-h2 o-content-h2_feat-t1">«До зарплаты»</h2>

                                        <div class="pltz-content__block">
                                            <div class="pltz-flex pltz-flex_p20">
                                                <div class="pltz-flex__col pltz-flex__col_small6 pltz-flex__col_small-mb">
                                                    <div class="c-calc">
                                                        <div class="c-calc__title">Доступная сумма:</div>
                                                        <div class="c-calc__value"><span class="js-sum-repay"></span> ₽</div>
                                                    </div>
                                                </div>

                                                <div class="pltz-flex__col pltz-flex__col_small6">
                                                    <div class="c-calc">
                                                        <div class="c-calc__title">Вернуть до:</div>
                                                        <div class="c-calc__value"><span class="js-period-repay"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pltz-content__block">
                                            <div class="pltz-flex pltz-flex_p20 pltz-flex_center">
                                                <div class="pltz-flex__col pltz-flex__col_small6 pltz-flex__col_small-mb">
                                                    <div class="c-calc__title c-calc__title_mb0">Без промежуточных платежей</div>
                                                </div>

                                                <div class="pltz-flex__col pltz-flex__col_small6">
                                                    <div class="c-calc-btn">
                                                        <button type="submit" class="o-pltz-btn o-pltz-btn_i-full">Продолжить</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div class="pltz-content">
                                    <div class="pltz-content__block pltz-content__block_t2">

                                        <div class="c-modal js-modal-content" data-modal-link="modal-additionalDataAgreement">
                                            <div class="c-modal__inner">
                                                <div class="c-modal__title o-content-h1">
                                                    Запрос о предоставлении сведений
                                                </div>
                                                <div class="c-modal__content js-modal-scroll">
                                                    <p class="o-content-text">До заключения договора потребительского займа заполните
                                                        соответствующую форму в разделе Личного кабинета <a href="#" class="o-link"
                                                                                            target="_blank">«Дополнительная
                                            информация»</a> на предоставление следующих сведений и информации о Вашем
                                                        финансовом положении:</p>
                                                    <ol class="o-content-list">
                                                        <li>При получении потребительского займа на сумму, превышающую 3 000 (Три
                                                            тысячи) рублей:
                                                            <ul class="o-content-list">
                                                                <li>о размере заработной платы</li>
                                                                <li>об иных источниках дохода (при наличии), в том числе за счет которых
                                                                    предполагается
                                                                    исполнять обязательства по договору потребительского займа
                                                                </li>
                                                                <li>о текущих денежных обязательствах (при наличии), периодичности и
                                                                    суммах платежей
                                                                    по таким обязательствам
                                                                </li>
                                                                <li>о целях получения займа</li>
                                                                <li>о факте производства по делу о банкротстве в отношении Вас в течение
                                                                    предшествующих
                                                                    5 (пяти) лет
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>При получении потребительского займа на сумму, превышающую 30 000 (Тридцать
                                                            тысяч) рублей, дополнительно к вышеуказанным сведениям:
                                                            <ul class="o-content-list">
                                                                <li>о судебных спорах, в которых Вы выступаете ответчиком</li>
                                                            </ul>
                                                        </li>
                                                        <li>При получении потребительского займа на сумму, превышающую 100 000 (Сто
                                                            тысяч) рублей, дополнительно к вышеуказанным сведениям:
                                                            <ul class="o-content-list">
                                                                <li>о наличии в Вашей собственности движимого и (или) недвижимого
                                                                    имущества
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ol>
                                                    <p class="o-content-text">Настоящим уведомляем, что предоставленные в соответствии с
                                                        настоящим запросом сведения и информация, могут оказать влияние на
                                                        индивидуальные условия заключаемого договора потребительского займа.</p>
                                                </div>
                                                <div class="c-modal__close o-icon o-icon_close js-modal-close">X</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                    </form>

                    <div v-else class="c-card-cabinet c-card-cabinet_sticky">
                        <div class="pltz-content">

                            <div class="c-card-cabinet__msg">
                                <div class="c-block-wait c-block-wait_msg c-block-wait_loan">

                                    <div class="c-block-wait__icon-image">
                                        <img class="block-img" src="/images/icons/loan_wait.svg">
                                </div>
                                        <div class="o-content-h1 o-content-h1_t1 o-content-h1_msg">У вас есть активный заём</div>
                                        <p class="o-content-text o-content-text_msg">
                                            Оформление нового займа станет доступно после погашения займа № 3412357 на сумму 6 000 ₽.<br>
                                    Для погашения займа перейдите в раздел <a href="#" class="control-label__link">Внести платеж.</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
</template>

<script>
import SideBarLK from '@/components/lk/SideBarLK'
import axios from 'axios';

export default {
    data() {
        return {
            errors: [],
            isActiveLoans: {
                completed: null
            },

        }
    },
    components: {
        SideBarLK
    },
    mounted() {
        let recaptchaScript = document.createElement('script');
        recaptchaScript.setAttribute('src', '/js/bundle_lk.js');
        document.head.appendChild(recaptchaScript)
    },
    created() {
        window.document.title = "Axirate | LK | Оформить заём";
        /*
         * TODO: Вытягиваем у пользователя инфу о активном заеме
         */
        axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
            .then(response => {
                this.isActiveLoans = response.data
            }).catch(e => {
                this.errors.push(e)
            })
    },
    beforeCreate: function () {
       // console.log(this.appName);
    },
}
</script>

<style lang="scss" scoped>

</style>
