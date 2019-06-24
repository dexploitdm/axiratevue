<template>
<div class="pltz-layout">
        <SideBarLK 
            isActive="is-active"
            isActive2=""
        />
        <div class="pltz-layout__content">
            <form action="" class="js-calculator000">

                <h1  v-bind:class="{'o-content-title_error': isOverdueLoans == true}" class="o-content-title">Активные займы</h1>
                <div v-if="isOverdueLoans == false" class="c-card-cabinet">

                    <div class="pltz-content">

                        <div class="c-detail-view__line">
                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                Общая задолженность
                            </div>
                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                <div class="c-loan-info__data">
                                    <span class="c-loan-info__sum-rub">47 000</span><span class="c-loan-info__sum-cop">,47 ₽</span>
                                </div>
                            </div>
                        </div>
                        <div class="c-detail-view__line">
                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                Сумма аванса
                            </div>
                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                <div class="c-loan-info__data">
                                    <div class="c-loan-info__data-sum">
                                        <span class="c-loan-info__sum-rub c-loan-info__sum-rub_small">0</span><span class="c-loan-info__sum-cop">,00 ₽</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="c-detail-view__line">
                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                Ближайший платёж
                            </div>
                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                <div class="c-loan-info__data">
                                    <div class="c-loan-info__data-sum">
                                        <span class="c-loan-info__sum-rub c-loan-info__sum-rub_small">47 000</span><span class="c-loan-info__sum-cop">,47 ₽</span>
                                    </div>
                                    <div class="c-loan-info__data-date">
                                        27 октября 2017
                                    </div>
                                </div>
                            </div>
                        </div>






                        <!--
                        <div class="pltz-content__block">
                            <div class="c-loan-info">
                                <div class="c-loan-info__part">
                                    <div class="c-loan-info__label">
                                        Общая <br>
                                        задолженность
                                    </div>
                                    <div class="c-loan-info__data">
                                        <span class="c-loan-info__sum-rub">47 000</span><span class="c-loan-info__sum-cop">,47 ₽</span>
                                    </div>
                                </div>

                                <div class="c-loan-info__part">
                                    <div class="c-loan-info__label">
                                        Ближайший <br>
                                        платёж
                                    </div>
                                    <div class="c-loan-info__data">
                                        <div class="c-loan-info__data-sum">
                                            <span class="c-loan-info__sum-rub c-loan-info__sum-rub_small">47 000</span><span class="c-loan-info__sum-cop">,47 ₽</span>
                                        </div>
                                        <div class="c-loan-info__data-date">
                                            27 октября 2017
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        -->





                    </div>

                </div>
                <div v-else class="c-card-cabinet">

                    <div class="pltz-content pltz-content_info js-order-back-call">

                        <form action="#" class="c-form">
                            <div class="c-expiration-info pltz-order-back-call-part js-order-step1">
                                <div class="c-expiration-info__part">
                                    <div class="c-expiration-info__title">Просрочено 2 платежа</div>

                                    <div class="c-expiration-info__text">
                                        Если у вас нет возможности погасить заём сейчас, немедленно свяжитесь с нашим отделом по работе с просроченной задолженностью. Мы всегда идём на встречу своим клиентам и помогаем в любой трудной ситуации.
                                    </div>
                                </div>

                                <div class="c-expiration-info__part">

                                    <div class="c-expiration-info__data">
                                        <div class="c-expiration-info__label">
                                            Период <br>
                                            просрочки:
                                        </div>
                                        <div class="c-expiration-info__period">
                                            55 дней
                                        </div>
                                    </div>

                                    <div class="c-expiration-info__text">
                                        Связаться с отделом по работе с просроченной задолженностью
                                    </div>

                                    <div class="c-expiration-info__text">
                                        <a href="#" class="o-pltz-btn o-pltz-btn_t5-full js-order-to-step2">Заказать звонок</a>
                                    </div>
                                </div>
                            </div>

                            <div class="c-expiration-info pltz-order-back-call-part js-order-step2 is-hidden-pltz">
                                <div class="c-expiration-info__title c-expiration-info__title_full">Подтверждение заказа обратного звонка</div>

                                <div class="c-expiration-info__text c-expiration-info__text_full">
                                    Подтвердите заказ обратного звонка. <br>
                                    Если вы не хотите ждать, можете позвонить нам сами по телефону
                                    <a href="tel:88002003839" class="o-link">8 (800) 200-38-39</a>.
                                    Служба поддержки работает с 6.00 до 00.00 Мск, без выходных.
                                </div>

                                <div class="c-expiration-info__part">
                                    <a href="" class="o-pltz-btn o-pltz-btn_t2-full js-order-to-step1">Отмена</a>
                                </div>

                                <div class="c-expiration-info__part">

                                    <button type="submit" class="o-pltz-btn o-pltz-btn_t5-full js-order-to-step3">Позвоните мне</button>
                                </div>
                            </div>

                            <div class="c-expiration-info pltz-order-back-call-part js-order-step3 is-hidden-pltz">
                                <div class="c-expiration-info__title c-expiration-info__title_full">Обратный звонок</div>

                                <div class="c-expiration-info__text c-expiration-info__text_full">
                                    Специалист по работе с просроченной задолженностью свяжется с вами в ближайшее время.
                                </div>

                                <span class="c-expiration-info__close o-icon o-icon_close js-order-to-step1"></span>

                            </div>
                        </form>

                    </div>

                    <div class="pltz-content">

                        <div class="pltz-content__block">

                            <div class="c-loan-info">
                                <div class="c-loan-info__part">
                                    <div class="c-loan-info__label">
                                        Общая <br>
                                        задолженность
                                    </div>
                                    <div class="c-loan-info__data">
                                        <span class="c-loan-info__sum-rub">47 000</span><span class="c-loan-info__sum-cop">,47 ₽</span>
                                    </div>
                                </div>

                                <div class="c-loan-info__part">
                                    <div class="c-loan-info__label">
                                        Ближайший <br>
                                        платёж
                                    </div>
                                    <div class="c-loan-info__data c-loan-info__data_error">
                                        <div class="c-loan-info__data-sum">
                                            <span class="c-loan-info__sum-rub c-loan-info__sum-rub_small">47 000</span><span class="c-loan-info__sum-cop">,47 ₽</span>
                                        </div>
                                        <div class="c-loan-info__data-date">
                                            сегодня
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div class="c-card-cabinet js-loan-active-block">

                    <div class="pltz-content">
                        <div class="o-content-h2 o-content-h2_feat o-content-h2_info"
                             v-bind:class="{'o-content-h2_error': isOverdueLoans == true}"
                        >
                            <span>Заём «До зарплаты»</span>
                            <span class="o-content-h2__descr">
                                        № 9483111
                                    </span>
                        </div>

                        <!--<h2 class="o-content-h2 o-content-h2_feat">Заём «До зарплаты»</h2>-->

                        <div class="pltz-content__block">

                            <div class="c-loan-info c-loan-info_t1">
                                <div class="c-loan-info__part"
                                     v-bind:class="{'c-loan-info__part_error': isOverdueLoans == true}"
                                >
                                    <div class="c-loan-info__label">
                                        Долг на сегодня
                                    </div>
                                    <div class="c-loan-info__data">
                                        <span class="c-loan-info__sum-rub">47 000</span><span class="c-loan-info__sum-cop">,47 ₽</span>
                                    </div>
                                </div>

                                <div class="c-loan-info__part"
                                     v-bind:class="{'c-loan-info__part_error': isOverdueLoans == true}"
                                >
                                    <div class="c-loan-info__label">
                                        Долг на дату погашения
                                    </div>
                                    <div class="c-loan-info__data">
                                        <span class="c-loan-info__sum-rub">47 000</span><span class="c-loan-info__sum-cop">,47 ₽</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="pltz-content__block is-prolongate-disabled">
                            <div v-if="isOverdueLoans == false" class="c-loan-timeline">
                                <div class="c-loan-timeline__line">
                                    <div class="c-loan-timeline__label">
                                        Период займа
                                    </div>

                                    <!--<a href="#" class="c-loan-timeline__link js-prolongate-link">продлить срок займа</a>-->
                                </div>

                                <div class="c-loan-timeline__line">

                                    <div class="c-loan-timeline__timeline pltz-timeline">
                                        <div class="pltz-timeline__part pltz-timeline__part_passed js-tippy" style="width: 30%;" title="Сегодня"></div>
                                        <div class="pltz-timeline__part js-tippy" style="width: 70%;" title="Осталось 14 дней"></div>
                                    </div>
                                </div>

                                <div class="c-loan-timeline__line">
                                    <div class="c-loan-timeline__label">
                                        с 14.09.2016
                                    </div>
                                    <div class="c-loan-timeline__label">
                                        по 27.10.2016
                                    </div>
                                </div>
                            </div>
                            <div v-else class="c-loan-timeline">
                                <div class="c-loan-timeline__line">
                                    <div class="c-loan-timeline__label">
                                        Период займа
                                    </div>
                                    <!--
                                    <a href="#" class="c-loan-timeline__link js-prolongate-link">продлить срок займа</a>
                                    -->
                                </div>

                                <div class="c-loan-timeline__line">

                                    <div class="c-loan-timeline__timeline pltz-timeline">
                                        <!--<div class="pltz-timeline__part pltz-timeline__part_expired js-tippy" style="width: 100%;" title="Просрочено 55 дней"></div>-->
                                        <!--<div class="pltz-timeline__party" style="width: 0;"></div>-->

                                        <div  v-for="period in periodLoans"
                                                class="pltz-timeline__part js-tippy"
                                              v-bind:class="{
                                              'pltz-timeline__part_passed': period.part == 'passed',
                                              'pltz-timeline__part_expired': period.part == 'expired'
                                              }"
                                              v-bind:style="{ width: countPeriod + '%' }"

                                                :title="period.title">
                                        </div>


                                    </div>
                                </div>

                                <div class="c-loan-timeline__line">
                                    <div class="c-loan-timeline__label">
                                        с 14.09.2016
                                    </div>
                                    <div class="c-loan-timeline__label">
                                        по 27.10.2016
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div class="pltz-content__block is-prolongate-enabled">

                            <div class="c-loan-info c-loan-info_t1">
                                <div class="c-loan-info__part">
                                    <div class="c-calc js-slider-prolongate-period">
                                        <label for="loanProlongatePeriod" class="c-calc__label">Выберите период продления</label>
                                        <div class="c-calc__input-block">
                                            <input type="hidden" class="js-prolongate-period-value" value="30">
                                            <div class="c-calc__slider-part c-calc__slider-part_input">
                                                <input type="tel" name="loanProlongatePeriod" id="loanProlongatePeriod" class="c-calc__input js-prolongate-period-input" value="30" data-min="5" data-max="45" data-start="30" />
                                            </div>
                                            <div class="c-calc__slider-part c-calc__slider-part_info">
                                                дней
                                            </div>
                                        </div>
                                        <div
                                                class="c-calc__slider o-slider">
                                            <div
                                                    class="o-slider__item js-slider-item">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="c-loan-info__part">
                                    <div class="c-loan-info__label">
                                        Новая дата погашения
                                    </div>
                                    <div class="c-loan-info__data">
                                        <span class="c-loan-info__sum-rub js-prolongate-period-repay">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="pltz-content__block pltz-content__block_t1">
                            <div class="c-card-cabinet__footer">
                                <div class="c-card-cabinet__footer-part">
                                    <div class="is-prolongate-disabled">

                                        <a v-if="isOverdueLoans == true" href="#" class="o-pltz-btn o-pltz-btn_t2">Погасить</a>
                                        <a v-else href="#" class="o-pltz-btn o-pltz-btn_t2">Внести платёж</a>

                                        <a href="#" class="o-pltz-btn  mar_left">Продлить заём</a>
                                    </div>
                                    <div class="is-prolongate-enabled">
                                        <a href="#" class="o-pltz-btn o-pltz-btn_t4 js-prolongate-cancel-link">Отменить</a>
                                        <a href="#" class="o-pltz-btn">Продлить заём</a>
                                    </div>
                                </div>

                                <div class="c-card-cabinet__footer-part">
                                    <a href="#" class="o-pltz-btn o-pltz-btn_t2 js-loan-details">Подробности</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="pltz-content is-details-visible">

                        <div class="pltz-content__block">

                            <h2 class="o-content-h2">Информация</h2>

                            <div class="pltz-flex pltz-flex_p20">
                                <div class="pltz-flex__col pltz-flex__col_small6">

                                    <div class="c-detail-view c-detail-view_loan">
                                        <div class="c-detail-view__line">
                                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                                Сумма займа
                                            </div>
                                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                                30 000,13 ₽
                                            </div>
                                        </div>
                                        <div class="c-detail-view__line">
                                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                                Долг на дату погашения
                                            </div>
                                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                                53 000,13 ₽
                                            </div>
                                        </div>
                                        <div class="c-detail-view__line">
                                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                                Способ получения
                                            </div>
                                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                                Qiwi
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="pltz-flex__col pltz-flex__col_small6">

                                    <div class="c-detail-view c-detail-view_loan">
                                        <div class="c-detail-view__line">
                                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                                Дата выдачи
                                            </div>
                                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                                14.09.2016
                                            </div>
                                        </div>
                                        <div class="c-detail-view__line">
                                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                                Дата погашения
                                            </div>
                                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                                27.10.2016
                                            </div>
                                        </div>
                                        <div class="c-detail-view__line">
                                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                                Платежный реквизит
                                            </div>
                                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                                380989274834
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="pltz-content__block">

                            <h2 class="o-content-h2">План платежей</h2>

                            <div class="pltz-table-wrapper">
                                <table class="pltz-table-t1">
                                    <thead>
                                    <tr class="pltz-table-t1__tr">
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
                                            Погашение <br>
                                            осн. долга
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Погашение <br>
                                            процентов
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Погашение <br>
                                            неустойки
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Остаток <br>
                                            задолженности
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="pltz-table-t1__tr pltz-table-t1__tr_success">
                                        <td class="pltz-table-t1__td">1</td>
                                        <td class="pltz-table-t1__td">20.05.2017</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    </tr>
                                    <tr class="pltz-table-t1__tr pltz-table-t1__tr_success">
                                        <td class="pltz-table-t1__td">2</td>
                                        <td class="pltz-table-t1__td">20.05.2017</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    </tr>
                                    <tr class="pltz-table-t1__tr pltz-table-t1__tr_error">
                                        <td class="pltz-table-t1__td">3</td>
                                        <td class="pltz-table-t1__td">20.05.2017</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    </tr>
                                    <tr class="pltz-table-t1__tr">
                                        <td class="pltz-table-t1__td">4</td>
                                        <td class="pltz-table-t1__td">20.05.2017</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        <div class="pltz-content__block">

                            <h2 class="o-content-h2">Информация о платежах</h2>

                            <table class="pltz-table-t1">
                                <thead>
                                <tr class="pltz-table-t1__tr">
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
                                        Погашение <br>
                                        осн. долга
                                    </th>
                                    <th class="pltz-table-t1__th">
                                        Погашение <br>
                                        процентов
                                    </th>
                                    <th class="pltz-table-t1__th">
                                        Погашение <br>
                                        неустойки
                                    </th>
                                    <th class="pltz-table-t1__th">
                                        Остаток <br>
                                        задолженности
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="pltz-table-t1__tr pltz-table-t1__tr_success">
                                    <td class="pltz-table-t1__td">1</td>
                                    <td class="pltz-table-t1__td">20.05.2017</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                </tr>
                                <tr class="pltz-table-t1__tr pltz-table-t1__tr_success">
                                    <td class="pltz-table-t1__td">2</td>
                                    <td class="pltz-table-t1__td">20.05.2017</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>





                        <div class="pltz-content__block">
                            <h2 class="o-content-h2">Детальная информация о задолженности на текущую дату</h2>
                            <div class="pltz-table-wrapper">
                                <table class="pltz-table-t1">
                                    <thead>
                                    <tr class="pltz-table-t1__tr">
                                        <th class="pltz-table-t1__th">
                                            №
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Задолженность по&nbsp;ОД
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Задолженность по&nbsp;процентам
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Задолженность по&nbsp;неустойке
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Общая задолженность
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="pltz-table-t1__tr">
                                        <td class="pltz-table-t1__td">1</td>
                                        <td class="pltz-table-t1__td">20 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">12 500,27 ₽</td>
                                        <td class="pltz-table-t1__td">31 800,00 ₽</td>
                                        <td class="pltz-table-t1__td">64 800,82 ₽</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>



                        <div class="pltz-content__block">
                            <h2 class="o-content-h2">Детальная информация о задолженности на текущую дату без учета скидки</h2>
                            <div class="pltz-table-wrapper">
                                <table class="pltz-table-t1">
                                    <thead>
                                    <tr class="pltz-table-t1__tr">
                                        <th class="pltz-table-t1__th">
                                            №
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Задолженность по&nbsp;ОД
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Задолженность по&nbsp;процентам
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Задолженность по&nbsp;неустойке
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Общая задолженность
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="pltz-table-t1__tr">
                                        <td class="pltz-table-t1__td">1</td>
                                        <td class="pltz-table-t1__td">20 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">12 500,27 ₽</td>
                                        <td class="pltz-table-t1__td">31 800,00 ₽</td>
                                        <td class="pltz-table-t1__td">64 800,82 ₽</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="pltz-content__block">
                            <h2 class="o-content-h2">Выписка по операциям</h2>
                            <div class="pltz-table-wrapper">
                                <table class="pltz-table-t1">
                                    <thead>
                                    <tr class="pltz-table-t1__tr">
                                        <th class="pltz-table-t1__th">
                                            Дата операции
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Сумма
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Тип операции
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Категория операции
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Сумма аванса
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="pltz-table-t1__tr">
                                        <td class="pltz-table-t1__td">25.04.2018</td>
                                        <td class="pltz-table-t1__td">13 000,00 ₽</td>
                                        <td class="pltz-table-t1__td">Поступление платежа</td>
                                        <td class="pltz-table-t1__td">Аванс</td>
                                        <td class="pltz-table-t1__td">1 800,00 ₽</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>






                    </div>

                </div>

                <div class="c-card-cabinet c-card-cabinet_t1 js-loan-active-block">

                    <div class="pltz-content">
                        <div class="o-content-h2 o-content-h2_feat o-content-h2_info">
                            <span>Заём «Долгий»</span>
                            <span class="o-content-h2__descr">
                                        № 9483112
                                    </span>
                        </div>

                        <!--
                        <h2 class="o-content-h2 o-content-h2_feat">Заём «Долгий»</h2>
                        -->

                        <div class="pltz-content__block">

                            <div class="c-loan-info c-loan-info_t1">
                                <div class="c-loan-info__part">
                                    <div class="c-loan-info__label">
                                        Долг на сегодня
                                    </div>
                                    <div class="c-loan-info__data">
                                        <span class="c-loan-info__sum-rub">47 000</span><span class="c-loan-info__sum-cop">,47 ₽</span>
                                    </div>
                                </div>

                                <div class="c-loan-info__part">
                                    <div class="c-loan-info__label">
                                        Ближайший платёж
                                    </div>
                                    <div class="c-loan-info__data">
                                        <span class="c-loan-info__sum-rub">47 000</span><span class="c-loan-info__sum-cop">,47 ₽</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="pltz-content__block is-prolongate-disabled">
                            <div class="c-loan-timeline">
                                <div class="c-loan-timeline__line">
                                    <div class="c-loan-timeline__label">
                                        Период займа
                                    </div>
                                    <a href="#" class="c-loan-timeline__link js-prolongate-link">продлить срок займа</a>
                                </div>

                                <div class="c-loan-timeline__line">

                                    <div class="c-loan-timeline__timeline pltz-timeline">
                                        <div class="pltz-timeline__part pltz-timeline__part_passed js-tippy" style="width: 20%;" title="24.09.2016"></div>
                                        <div class="pltz-timeline__part pltz-timeline__part_passed js-tippy" style="width: 20%;" title="04.10.2016"></div>
                                        <div class="pltz-timeline__part pltz-timeline__part_active js-tippy" style="width: 20%;" title="Сегодня"></div>
                                        <div class="pltz-timeline__part js-tippy" style="width: 20%;" title="14.10.2016"></div>
                                        <div class="pltz-timeline__part js-tippy" style="width: 20%;" title="24.10.2016"></div>
                                    </div>

                                </div>

                                <div class="c-loan-timeline__line">
                                    <div class="c-loan-timeline__label">
                                        с 14.09.2016
                                    </div>
                                    <div class="c-loan-timeline__label">
                                        по 27.10.2016
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="pltz-content__block is-prolongate-enabled">

                            <div class="c-loan-info c-loan-info_t1">
                                <div class="c-loan-info__part">
                                    <div class="c-calc js-slider-prolongate-period">
                                        <label for="loanProlongatePeriod" class="c-calc__label">Выберите период продления</label>
                                        <div class="c-calc__input-block">
                                            <input type="hidden" class="js-prolongate-period-value" value="30">
                                            <div class="c-calc__slider-part c-calc__slider-part_input">
                                                <input type="tel" name="loanProlongatePeriod" id="loanProlongatePeriod" class="c-calc__input js-prolongate-period-input" value="30" data-min="5" data-max="45" data-start="30" />
                                            </div>
                                            <div class="c-calc__slider-part c-calc__slider-part_info">
                                                дней
                                            </div>
                                        </div>
                                        <div
                                                class="c-calc__slider o-slider">
                                            <div
                                                    class="o-slider__item js-slider-item">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="c-loan-info__part">
                                    <div class="c-loan-info__label">
                                        Новая дата погашения
                                    </div>
                                    <div class="c-loan-info__data">
                                        <span class="c-loan-info__sum-rub js-prolongate-period-repay">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="pltz-content__block pltz-content__block_t1">
                            <div class="c-card-cabinet__footer">
                                <div class="c-card-cabinet__footer-part">
                                    <div class="is-prolongate-disabled">
                                        <a href="#" class="o-pltz-btn">Внести платёж</a>
                                    </div>
                                    <div class="is-prolongate-enabled">
                                        <a href="#" class="o-pltz-btn o-pltz-btn_t4 js-prolongate-cancel-link">Отменить</a>
                                        <a href="#" class="o-pltz-btn">Продлить заём</a>
                                    </div>
                                </div>

                                <div class="c-card-cabinet__footer-part">
                                    <a href="#" class="o-pltz-btn o-pltz-btn_t2 js-loan-details">Подробности</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="pltz-content is-details-visible">

                        <div class="pltz-content__block">

                            <h2 class="o-content-h2">Информация</h2>

                            <div class="pltz-flex pltz-flex_p20">
                                <div class="pltz-flex__col pltz-flex__col_small6">

                                    <div class="c-detail-view c-detail-view_loan">
                                        <div class="c-detail-view__line">
                                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                                Сумма займа
                                            </div>
                                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                                30 000,13 ₽
                                            </div>
                                        </div>
                                        <div class="c-detail-view__line">
                                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                                Плановый платёж
                                            </div>
                                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                                3 000,13 ₽
                                            </div>
                                        </div>
                                        <div class="c-detail-view__line">
                                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                                Всего платежей
                                            </div>
                                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                                14 шт.
                                            </div>
                                        </div>
                                        <div class="c-detail-view__line">
                                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                                Осталось платежей
                                            </div>
                                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                                12 шт.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="pltz-flex__col pltz-flex__col_small6">

                                    <div class="c-detail-view c-detail-view_loan">
                                        <div class="c-detail-view__line">
                                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                                Дата выдачи
                                            </div>
                                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                                14.09.2016
                                            </div>
                                        </div>
                                        <div class="c-detail-view__line">
                                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                                Ближайший платёж
                                            </div>
                                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                                20.10.2016
                                            </div>
                                        </div>
                                        <div class="c-detail-view__line">
                                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                                Периодичность платежей
                                            </div>
                                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                                19 дней
                                            </div>
                                        </div>
                                        <div class="c-detail-view__line">
                                            <div class="c-detail-view__line-item c-detail-view__line-item_label">
                                                Дата погашения
                                            </div>
                                            <div class="c-detail-view__line-item c-detail-view__line-item_data">
                                                29.12.2016
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="pltz-content__block">

                            <h2 class="o-content-h2">План платежей</h2>

                            <table class="pltz-table-t1">
                                <thead>
                                <tr class="pltz-table-t1__tr">
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
                                        Погашение <br>
                                        осн. долга
                                    </th>
                                    <th class="pltz-table-t1__th">
                                        Погашение <br>
                                        процентов
                                    </th>
                                    <th class="pltz-table-t1__th">
                                        Погашение <br>
                                        неустойки
                                    </th>
                                    <th class="pltz-table-t1__th">
                                        Остаток <br>
                                        задолженности
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="pltz-table-t1__tr pltz-table-t1__tr_success">
                                    <td class="pltz-table-t1__td">1</td>
                                    <td class="pltz-table-t1__td">20.05.2017</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                </tr>
                                <tr class="pltz-table-t1__tr pltz-table-t1__tr_success">
                                    <td class="pltz-table-t1__td">2</td>
                                    <td class="pltz-table-t1__td">20.05.2017</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                </tr>
                                <tr class="pltz-table-t1__tr pltz-table-t1__tr_error">
                                    <td class="pltz-table-t1__td">3</td>
                                    <td class="pltz-table-t1__td">20.05.2017</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                </tr>
                                <tr class="pltz-table-t1__tr">
                                    <td class="pltz-table-t1__td">4</td>
                                    <td class="pltz-table-t1__td">20.05.2017</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>

                        <div class="pltz-content__block">

                            <h2 class="o-content-h2">Информация о платежах</h2>

                            <table class="pltz-table-t1">
                                <thead>
                                <tr class="pltz-table-t1__tr">
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
                                        Погашение <br>
                                        осн. долга
                                    </th>
                                    <th class="pltz-table-t1__th">
                                        Погашение <br>
                                        процентов
                                    </th>
                                    <th class="pltz-table-t1__th">
                                        Погашение <br>
                                        неустойки
                                    </th>
                                    <th class="pltz-table-t1__th">
                                        Остаток <br>
                                        задолженности
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="pltz-table-t1__tr pltz-table-t1__tr_success">
                                    <td class="pltz-table-t1__td">1</td>
                                    <td class="pltz-table-t1__td">20.05.2017</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                </tr>
                                <tr class="pltz-table-t1__tr pltz-table-t1__tr_success">
                                    <td class="pltz-table-t1__td">2</td>
                                    <td class="pltz-table-t1__td">20.05.2017</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                    <td class="pltz-table-t1__td">150 500,55 ₽</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>





                        <div class="pltz-content__block">
                            <h2 class="o-content-h2">Детальная информация о задолженности на текущую дату</h2>
                            <div class="pltz-table-wrapper">
                                <table class="pltz-table-t1">
                                    <thead>
                                    <tr class="pltz-table-t1__tr">
                                        <th class="pltz-table-t1__th">
                                            №
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Задолженность по&nbsp;ОД
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Задолженность по&nbsp;процентам
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Задолженность по&nbsp;неустойке
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Общая задолженность
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="pltz-table-t1__tr">
                                        <td class="pltz-table-t1__td">1</td>
                                        <td class="pltz-table-t1__td">20 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">12 500,27 ₽</td>
                                        <td class="pltz-table-t1__td">31 800,00 ₽</td>
                                        <td class="pltz-table-t1__td">64 800,82 ₽</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>



                        <div class="pltz-content__block">
                            <h2 class="o-content-h2">Детальная информация о задолженности на текущую дату без учета скидки</h2>
                            <div class="pltz-table-wrapper">
                                <table class="pltz-table-t1">
                                    <thead>
                                    <tr class="pltz-table-t1__tr">
                                        <th class="pltz-table-t1__th">
                                            №
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Задолженность по&nbsp;ОД
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Задолженность по&nbsp;процентам
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Задолженность по&nbsp;неустойке
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Общая задолженность
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="pltz-table-t1__tr">
                                        <td class="pltz-table-t1__td">1</td>
                                        <td class="pltz-table-t1__td">20 500,55 ₽</td>
                                        <td class="pltz-table-t1__td">12 500,27 ₽</td>
                                        <td class="pltz-table-t1__td">31 800,00 ₽</td>
                                        <td class="pltz-table-t1__td">64 800,82 ₽</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="pltz-content__block">
                            <h2 class="o-content-h2">Выписка по операциям</h2>
                            <div class="pltz-table-wrapper">
                                <table class="pltz-table-t1">
                                    <thead>
                                    <tr class="pltz-table-t1__tr">
                                        <th class="pltz-table-t1__th">
                                            Дата операции
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Сумма
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Тип операции
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Категория операции
                                        </th>
                                        <th class="pltz-table-t1__th">
                                            Сумма аванса
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="pltz-table-t1__tr">
                                        <td class="pltz-table-t1__td">25.04.2018</td>
                                        <td class="pltz-table-t1__td">13 000,00 ₽</td>
                                        <td class="pltz-table-t1__td">Поступление платежа</td>
                                        <td class="pltz-table-t1__td">Аванс</td>
                                        <td class="pltz-table-t1__td">1 800,00 ₽</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

















                    </div>

                </div>

            </form>
        </div>
</div>
</template>

<script>
    import json from '@/db/activeAloans.json'
    import SideBarLK from '@/components/lk/SideBarLK'
    export default {
        data() {
            return {
                activeUserLoan: json,
                errors: [],
                isOverdueLoans: false,
                periodLoans:  [
                    {title: '24.09.2016', part: 'passed'},
                    {title: '04.10.2016', part: 'passed'},
                    {title: 'Просрочено 20 дней', part: 'expired'},
                    {title: 'Просрочено 10 дней', part: 'expired' },
                    {title: '24.10.2016', part: ''},
                ],
                countPeriod: '',
                title: null
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
            if(this.isOverdueLoans == true){
                this.title = 'Просрок'
            } else { this.title = 'Продление'}
            this.countPeriod =  100 / this.periodLoans.length;
            window.document.title = "Axirate | LK | " + this.title;
        }
    }
</script>

<style scoped >
    @media (min-width: 768px) {
        .o-pltz-btn.mar_left {
            margin-left: 3px;
        }
    }
</style>