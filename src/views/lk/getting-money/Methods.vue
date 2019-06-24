<template>
<div class="pltz-layout">
    <SideBarLK isActive="" isActive2="is-active" />
    <div class="pltz-layout__content">

        <h1 class="o-content-title">Оформить заём</h1>

        <div class="c-card-cabinet c-card-cabinet_steps">

            <div class="pltz-content pltz-content_steps">

                <div class="pltz-content__block js-tabs-scroll">

                    <!-- this -->
                    <TabsLoans />
                </div>

            </div>

        </div>

        <!--<div class="c-card-cabinet__tabs">
                    <div class="c-card-cabinet__tab c-card-cabinet__tab--cards c-card-cabinet__tab--active">
                        <span>Банковские карты</span>
                    </div>
                    <div class="c-card-cabinet__tab c-card-cabinet__tab--emoney">
                        <span>Электронные деньги</span>
                    </div>
                    <div class="c-card-cabinet__tab c-card-cabinet__tab--cash">
                        <span>Наличные</span>
                    </div>
                    <div class="clear"></div>
                </div>-->

        <div class="c-card-cabinet c-card-cabinet_sticky c-card-cabinet_sticky--payment-methods">

            <div class="c-card-cabinet__tabs">
                <div class="c-card-cabinet__tab c-card-cabinet__tab--cards c-card-cabinet__tab--active">
                    <span>Банковские карты</span>
                </div>
                <div class="c-card-cabinet__tab c-card-cabinet__tab--emoney">
                    <span>Электронные деньги</span>
                </div>
                <div class="c-card-cabinet__tab c-card-cabinet__tab--cash">
                    <span>Наличные</span>
                </div>
                <div class="clear"></div>
            </div>

            <div class="pltz-content pltz-content_t1">

                <div class="pltz-content__payment-methods pltz-content__payment-methods--cards pltz-content__payment-methods--active">
                    <div class="pltz-content__block">
                        <div class="c-payment-card">
                            <div class="c-payment-card__part c-payment-card__part_media">
                                <img src="/images/icons/ic_card_mastercard.svg" alt="Mastercard" class="c-payment-card__media-item">
                                    </div>

                                <div class="c-payment-card__part c-payment-card__part_info">
                                    <div class="c-payment-card__title">
                                        Банковская карта
                                    </div>
                                    <div class="c-payment-card__descr">
                                        MasterCard: 1234 XXXX XXXX 5678
                                    </div>
                                </div>

                                <div class="c-payment-card__part c-payment-card__part_btn">
                                    <button class="o-pltz-btn o-pltz-btn_i">Продолжить</button>
                                </div>
                            </div>
                        </div>

                        <div class="pltz-content__block">
                            <div class="c-payment-card">
                                <div class="c-payment-card__part c-payment-card__part_media">
                                    <img src="/images/icons/ic_card_visa.svg" alt="visa" class="c-payment-card__media-item">
                                    </div>

                                    <div class="c-payment-card__part c-payment-card__part_info">
                                        <div class="c-payment-card__title">
                                            Банковская карта
                                        </div>
                                        <div class="c-payment-card__descr">
                                            Visa: 1234 XXXX XXXX 5678
                                        </div>
                                    </div>

                                    <div class="c-payment-card__part c-payment-card__part_btn">
                                        <button class="o-pltz-btn o-pltz-btn_i">Продолжить</button>
                                    </div>
                                </div>
                            </div>

                            <div class="pltz-content__block">
                                <div class="c-payment-card">
                                    <div class="c-payment-card__part c-payment-card__part_media">
                                        <img src="/images/icons/ic_card_mir.svg" alt="МИР" class="c-payment-card__media-item">
                                    </div>

                                        <div class="c-payment-card__part c-payment-card__part_info">
                                            <div class="c-payment-card__title">
                                                Банковская карта
                                            </div>
                                            <div class="c-payment-card__descr">
                                                МИР: 1234 XXXX XXXX 5678
                                            </div>
                                        </div>

                                        <div class="c-payment-card__part c-payment-card__part_btn">
                                            <button class="o-pltz-btn o-pltz-btn_i">Продолжить</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="pltz-content__block">
                                    <div class="c-payment-card">
                                        <div class="c-payment-card__part c-payment-card__part_media">
                                            <img src="/images/icons/ic_card_other.svg" alt="Другая банковская карта" class="c-payment-card__media-item">
                                    </div>

                                            <div class="c-payment-card__part c-payment-card__part_info">
                                                <div class="c-payment-card__title">
                                                    Другая банковская карта
                                                </div>
                                                <div class="c-payment-card__descr">
                                                    Visa, MasterСard или МИР банков РФ
                                                </div>
                                            </div>

                                            <div class="c-payment-card__part c-payment-card__part_btn">
                                                <button class="o-pltz-btn o-pltz-btn_i">Продолжить</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="pltz-content__payment-methods pltz-content__payment-methods--emoney">
                                    <div class="pltz-content__block">
                                        <div class="c-payment-card">
                                            <div class="c-payment-card__part c-payment-card__part_media">
                                                <img src="/images/icons/ic_card_yandex.svg" alt="Yandex Money" class="c-payment-card__media-item">
                                    </div>

                                                <div class="c-payment-card__part c-payment-card__part_info">
                                                    <div class="c-payment-card__title">
                                                        Электронный кошелёк
                                                    </div>
                                                    <div class="c-payment-card__descr">
                                                        Яндекс.Деньги
                                                    </div>
                                                </div>

                                                <div class="c-payment-card__part c-payment-card__part_btn">
                                                    <button class="o-pltz-btn o-pltz-btn_i">Продолжить</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pltz-content__block">
                                            <div class="c-payment-card">
                                                <div class="c-payment-card__part c-payment-card__part_media">
                                                    <img src="/images/icons/ic_qiwi.svg" alt="Qiwi" class="c-payment-card__media-item">
                                    </div>

                                                    <div class="c-payment-card__part c-payment-card__part_info">
                                                        <div class="c-payment-card__title">
                                                            Электронный кошелёк
                                                        </div>
                                                        <div class="c-payment-card__descr">
                                                            Qiwi
                                                        </div>
                                                    </div>

                                                    <div class="c-payment-card__part c-payment-card__part_btn">
                                                        <button class="o-pltz-btn o-pltz-btn_i">Продолжить</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pltz-content__payment-methods pltz-content__payment-methods--cash">
                                            <div class="pltz-content__block">
                                                <div class="c-payment-card">
                                                    <div class="c-payment-card__part c-payment-card__part_media">
                                                        <img src="/images/icons/ic_contact.svg" alt="CONTACT" class="c-payment-card__media-item">
                                    </div>

                                                        <div class="c-payment-card__part c-payment-card__part_info">
                                                            <div class="c-payment-card__title">
                                                                Наличные
                                                            </div>
                                                            <div class="c-payment-card__descr">
                                                                Платёжная система CONTACT
                                                            </div>
                                                        </div>

                                                        <div class="c-payment-card__part c-payment-card__part_btn">
                                                            <button class="o-pltz-btn o-pltz-btn_i">Продолжить</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="pltz-content__block">
                                                    <div class="c-payment-card">
                                                        <div class="c-payment-card__part c-payment-card__part_media">
                                                            <img src="/images/icons/ic_card_bank.svg" alt="Расчётный счёт" class="c-payment-card__media-item">
                                    </div>

                                                            <div class="c-payment-card__part c-payment-card__part_info">
                                                                <div class="c-payment-card__title">
                                                                    Наличные
                                                                </div>
                                                                <div class="c-payment-card__descr">
                                                                    Расчётный счёт
                                                                </div>
                                                            </div>

                                                            <div class="c-payment-card__part c-payment-card__part_btn">
                                                                <button class="o-pltz-btn o-pltz-btn_i">Продолжить</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="pltz-content pltz-content_t1">
                                                <div class="pltz-content__block">
                                                    <a href="#" class="o-pltz-btn o-pltz-btn_t2-i o-pltz-btn_t2-i-prev">Вернуться</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
</template>

<script>
import $ from 'jquery'
import TabsLoans from '@/components/lk/TabsLoans'
import SideBarLK from '@/components/lk/SideBarLK'
export default {
    components: {
        SideBarLK,
        TabsLoans
    },
    created() {
        window.document.title = "Axirate | LK | Документы";
    },
    mounted() {
        let recaptchaScript = document.createElement('script');
        recaptchaScript.setAttribute('src', '/js/bundles.js');
        document.head.appendChild(recaptchaScript)

        $(".c-card-cabinet__tab--emoney").on("click", function () {
            var el = $(this);
            if (el.hasClass("c-card-cabinet__tab--active")) {
                return;
            } else {
                $(".c-card-cabinet__tab--active").removeClass("c-card-cabinet__tab--active");
                el.addClass("c-card-cabinet__tab--active");
                $(".pltz-content__payment-methods--active").removeClass("pltz-content__payment-methods--active");
                $(".pltz-content__payment-methods--emoney").addClass("pltz-content__payment-methods--active");
            }
        });

        $(".c-card-cabinet__tab--cards").on("click", function () {
            var el = $(this);
            if (el.hasClass("c-card-cabinet__tab--active")) {
                return;
            } else {
                $(".c-card-cabinet__tab--active").removeClass("c-card-cabinet__tab--active");
                el.addClass("c-card-cabinet__tab--active");
                $(".pltz-content__payment-methods--active").removeClass("pltz-content__payment-methods--active");
                $(".pltz-content__payment-methods--cards").addClass("pltz-content__payment-methods--active");
            }
        });

        $(".c-card-cabinet__tab--cash").on("click", function () {
            var el = $(this);
            if (el.hasClass("c-card-cabinet__tab--active")) {
                return;
            } else {
                $(".c-card-cabinet__tab--active").removeClass("c-card-cabinet__tab--active");
                el.addClass("c-card-cabinet__tab--active");
                $(".pltz-content__payment-methods--active").removeClass("pltz-content__payment-methods--active");
                $(".pltz-content__payment-methods--cash").addClass("pltz-content__payment-methods--active");
            }
        });

    },
}
</script>

<style scoped>

</style>
