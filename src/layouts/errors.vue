<template>
    <div class="errors theme-bg">
        <div class="pltz-header js-header">
            <div class="pltz-grid pltz-grid_t1">
                <div class="pltz-header__inner">
                    <a href="#" class="o-pltz-logo">Platiza</a>

                    <nav class="pltz-header__menu c-top-menu js-top-menu">
                        <ul class="c-top-menu__list">
                            <li class="c-top-menu__item">
                                <router-link to="/login" class="c-top-menu__link">Войти</router-link>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
        <router-view/>
        <div class="pltz-footer">
            <div class="pltz-grid pltz-grid_t1">

                <div class="pltz-footer__inner">
                    <div class="pltz-footer__line pltz-footer__line_t1">

                        <div class="c-main-logos">
                            <a href="https://goo.gl/LodXAA" class="c-main-logos__item o-icon-gplay">
                                <img src="/images/google-play-badge.png" alt="Доступно в Google Play" class="o-icon-gplay__media">
                            </a>
                        </div>

                        <div class="c-social-icons">
                            <a href="https://vk.com/platizaru" class="c-social-icons__item o-icon-vk" target="_blank">
                                <img src="/images/icons/ic_social_vk.svg" alt="VKontakte">
                            </a>

                            <a href="http://ok.ru/platiza" class="c-social-icons__item o-icon-ok" target="_blank">
                                <img src="/images/icons/ic_social_ok.svg" alt="OK">
                            </a>

                            <a href="https://www.facebook.com/platiza" class="c-social-icons__item o-icon-fb" target="_blank">
                                <img src="/images/icons/ic_social_fb.svg" alt="Facebook">
                            </a>
                        </div>
                    </div>

                    <div class="pltz-footer__line">
                        <div class="pltz-flex pltz-flex_p20">
                            <div class="pltz-flex__col pltz-flex__col_small6">
                                <div class="pltz-flex pltz-flex_p20">

                                    <div class="pltz-flex__col pltz-flex__col_medium6">
                                        <nav class="c-footer-menu">
                                            <ul class="c-footer-menu__list">
                                                <li class="c-footer-menu__item c-footer-menu__item_feat">
                                                    <a href="#" class="c-footer-menu__link">О&nbsp;займах</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Заём на&nbsp;банковскую карту</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Заём на QIWI кошелек</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Заём на Яндекс.Деньги</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Заём через&nbsp;Contact</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link"
                                                    href="#">Возврат займа</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Кредитный рейтинг</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link"
                                                    href="#">Улучшение кредитной истории</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Безопасность и&nbsp;защита данных</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Приложение для&nbsp;Windows</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                    <div class="pltz-flex__col pltz-flex__col_medium6">
                                        <nav class="c-footer-menu">
                                            <ul class="c-footer-menu__list">
                                                <li class="c-footer-menu__item c-footer-menu__item_feat">
                                                    <a href="#" class="c-footer-menu__link">О&nbsp;Компании</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#" target="_blank">Инвесторам</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">СМИ о&nbsp;нас</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Блог</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Отзывы</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Партнёрам</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Вакансии</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Контакты для&nbsp;СМИ</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                </div>
                            </div>
                            <div class="pltz-flex__col pltz-flex__col_small6">
                                <div class="pltz-flex pltz-flex_p20">

                                    <div class="pltz-flex__col pltz-flex__col_medium6">
                                        <nav class="c-footer-menu">
                                            <ul class="c-footer-menu__list">
                                                <li class="c-footer-menu__item c-footer-menu__item_feat">
                                                    <a href="#" class="c-footer-menu__link">Справка</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Популярные вопросы</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Как зарегистрироваться</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Как получить заём</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Как изменить данные</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Как погасить или продлить заём</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Связаться с&nbsp;нами</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#">Структура сайта</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                    <div class="pltz-flex__col pltz-flex__col_medium6">
                                        <nav class="c-footer-menu">
                                            <ul class="c-footer-menu__list">
                                                <li class="c-footer-menu__item c-footer-menu__item_feat">
                                                    <a href="#" class="c-footer-menu__link">Документы</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#" target="_blank">Общие условия договоров займа</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#" target="_blank">Раскрытие информации</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#" target="_blank">Правила предоставления<br> микрозаймов</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#" target="_blank">Политика обработки<br> персональных данных</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#" target="_blank">Кодекс ответственности</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#" target="_blank">Отчетность</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#" target="_blank">Свидетельство</a>
                                                </li>
                                                <li class="c-footer-menu__item">
                                                    <a class="c-footer-menu__link" href="#" target="_blank">Лица, оказывающие влияние</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="pltz-footer__line">
                        <div class="pltz-flex pltz-flex_p20">
                            <div class="pltz-flex__col pltz-flex__col_small6">
                                <div class="pltz-flex pltz-flex_p20">
                                    <div class="pltz-footer__info pltz-flex__col pltz-flex__col_large6">
                                        © 2011-2018 Микрофинансовая компания «Платиза.ру» (общество с ограниченной ответственностью)<br/>
                                        Все авторские права защищены
                                    </div>

                                    <div class="pltz-footer__info pltz-flex__col pltz-flex__col_large6">
                                        Служба поддержки: 8 800 200 38 39<br/>
                                        с 6.00 до 00.00 Мск, без выходных
                                    </div>
                                </div>
                            </div>
                            <div class="pltz-flex__col pltz-flex__col_small6">
                                <div class="pltz-flex pltz-flex_p20">
                                    <div class="pltz-footer__buttons pltz-flex__col pltz-flex__col_large6">
                                        <a href="#" class="o-pltz-btn">Написать сообщение</a>
                                    </div>

                                    <div class="pltz-footer__buttons pltz-flex__col pltz-flex__col_large6">
                                        <a href="#" class="o-pltz-btn">Заказать звонок</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
import '../assets/css/vendors_registration.css'
import '../assets/css/registration.css'
export default { 
    
}
</script>
<style scoped>
 .errors {
        padding: 0;
        position: relative;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
  }
  .theme-bg {
        background: #fff url(/images/im_background.png) no-repeat 50% 50%;
        background-size: cover;
        background-attachment: fixed;
    }
</style>
