<template>
  <div class="lk">

      <div class="navAll" @click="e => e.target.classList.toggle('active')" >
          menu
            <div class="navigate-tools">
                <div class="fixed-menu">
                <p>LK layout</p>
                <router-link active-class="is-active" to="/lk/getting-money/apply-loan" exact>Оформить заём</router-link>
              </div>
            </div>
        </div>



    <div class="l-cabinet">
        <div class="pltz-header js-header">
            <div class="pltz-grid pltz-grid_cabinet">
                <div class="pltz-header__inner">
                    <a href="#" class="o-pltz-logo">Platiza</a>

                    <nav class="pltz-header__menu-complex c-top-menu-complex js-top-menu-complex">
                        <div class="c-top-menu-complex__inner">
                            <a href="#" class="c-top-menu-complex__logo o-pltz-logo">Platiza</a>


                            <div class="pltz-layout__sidebar pltz-layout__sidebar--topmenu">

                                <nav class="c-site-menu">
                                    <ul class="c-site-menu__list">
                                        <li class="c-site-menu__item">
                                            <a href="#" class="c-site-menu__link">Внести платёж</a>
                                        </li>
                                        <li class="c-site-menu__item">
                                            <a href="#" class="c-site-menu__link is-active">Получить деньги</a>
                                        </li>
                                    </ul>
                                </nav>

                                <nav class="c-site-menu">
                                    <ul class="c-site-menu__list">
                                        <li class="c-site-menu__item">
                                            <a href="#" class="c-site-menu__link">Мои документы</a>
                                        </li>
                                        <li class="c-site-menu__item">
                                            <a href="#" class="c-site-menu__link">Моя история</a>
                                        </li>
                                        <li class="c-site-menu__item">
                                            <a href="#" class="c-site-menu__link">Мои страховки</a>
                                        </li>
                                    </ul>
                                </nav>

                                <nav class="c-site-menu">
                                    <ul class="c-site-menu__list">
                                        <li class="c-site-menu__item">
                                            <a href="#" class="c-site-menu__link">Мои заявки</a>
                                        </li>
                                        <li class="c-site-menu__item">
                                            <a href="#" class="c-site-menu__link">Настройки</a>
                                        </li>
                                        <li class="c-site-menu__item">
                                            <a href="#" class="c-site-menu__link">Поддержка</a>
                                        </li>
                                        <li class="c-site-menu__item">
                                            <a href="#" class="c-site-menu__link">Связаться с нами</a>
                                        </li>
                                    </ul>
                                </nav>

                            </div>

                            <ul class="c-top-menu-complex__list">
                                <li class="c-top-menu-complex__item c-top-menu-complex__item_parent js-menu-parent-item">
                                    <span class="c-top-menu-complex__link js-expand-link">Константин К.</span>
                                    <ul class="c-top-menu-complex__sub-list">
                                        <li class="c-top-menu-complex__sub-item">
                                            <a href="#" class="c-top-menu-complex__sub-link">Выйти</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="c-top-menu-complex__item">
                                    <a href="#" class="c-top-menu-complex__link c-top-menu-complex__link--old">Старая версия</a>
                                </li>
                            </ul>
                        </div>

                    </nav>

                    <span class="pltz-header__menu-toggler o-top-menu-toggler js-menu-toggler"></span>
                </div>
            </div>
        </div>


        <div class="pltz-wrapper">
            <div class="pltz-grid pltz-grid_cabinet">
                <router-view/>
                <!-- content -->
            </div>
        </div>

        <div class="pltz-footer">
            <div class="pltz-grid pltz-grid_cabinet">

                <div class="pltz-footer__inner">
                    <div class="pltz-footer__line_t1">

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

                    <div class="pltz-footer__line_lite">
                        <div class="pltz-flex pltz-flex_p20">
                            <div class="pltz-flex__col pltz-flex__col_small12">
                                <div class="pltz-flex pltz-flex_p20">

                                    <div class="pltz-flex__col ">

                                        <div class="c-footer-nav">
                                            <div class="c-footer-nav__item">
                                                <a class="title link-hide" href="#">О займах</a>
                                                <input type="checkbox" id="fmenu-1" class="hide"/>
                                                <label class="title" for="fmenu-1" >О займах
                                                    <span class="arrow">
                                                <img src="/images/icons/footer-menu-arrow.svg">
                                            </span>
                                                </label>
                                                <div class="c-footer-nav__show">
                                                    <nav class="c-footer-menu">
                                                        <ul class="c-footer-menu__list">
                                                            <li class="c-footer-menu__item">
                                                                <a class="c-footer-menu__link" href="https://platiza.ru/page/card">Заём на&nbsp;банковскую карту</a>
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
                                                                <a class="c-footer-menu__link" href="#">Возврат займа</a>
                                                            </li>
                                                            <li class="c-footer-menu__item">
                                                                <a class="c-footer-menu__link" href="#">Кредитный рейтинг</a>
                                                            </li>
                                                            <li class="c-footer-menu__item">
                                                                <a class="c-footer-menu__link" href="#">Безопасность и&nbsp;защита данных</a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                            <div class="c-footer-nav__item">
                                                <a class="title link-hide" href="#">О компании</a>
                                                <input type="checkbox" id="fmenu-2" class="hide"/>
                                                <label class="title" for="fmenu-2" >О компании
                                                    <span class="arrow">
                                                <img src="/images/icons/footer-menu-arrow.svg">
                                            </span>
                                                </label>
                                                <div class="c-footer-nav__show">
                                                    <nav class="c-footer-menu">
                                                        <ul class="c-footer-menu__list">
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
                                                                <a class="c-footer-menu__link" href="mailto:pr@platiza.ru">Контакты для&nbsp;СМИ</a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                            <div class="c-footer-nav__item">
                                                <a class="title link-hide" href="#">Справка</a>
                                                <input type="checkbox" id="fmenu-3" class="hide"/>
                                                <label class="title" for="fmenu-3" >Справка
                                                    <span class="arrow">
                                                <img src="/images/icons/footer-menu-arrow.svg">
                                            </span>
                                                </label>
                                                <div class="c-footer-nav__show">
                                                    <nav class="c-footer-menu">
                                                        <ul class="c-footer-menu__list">
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
                                            </div>
                                            <div class="c-footer-nav__item">
                                                <a class="title link-hide" href="#">Документы</a>
                                                <input type="checkbox" id="fmenu-4" class="hide"/>
                                                <label class="title" for="fmenu-4" >Документы
                                                    <span class="arrow">
                                                <img src="/images/icons/footer-menu-arrow.svg">
                                            </span>
                                                </label>
                                                <div class="c-footer-nav__show">
                                                    <nav class="c-footer-menu">
                                                        <ul class="c-footer-menu__list">
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
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>

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
                                        <a href="mail.php" class="o-pltz-btn">Написать сообщение</a>
                                    </div>

                                    <div class="pltz-footer__buttons pltz-flex__col pltz-flex__col_large6">
                                        <a href="order-call.php" class="o-pltz-btn">Заказать звонок</a>
                                    </div>
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
import '../assets/css/lk.css'
export default { 
    
}
</script>


<style lang="scss" scoped>
 .l-cabinet {
        padding: 0;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
        background: #f5f6f7;
  }
  .navigate-tools {
      display: none;
      position: fixed;
      left: 0;
      text-align: center;
      z-index: 9999;
      cursor: default;
    .fixed-menu {
        max-width: 300px;
        margin: 0 auto;
        background-color: white;
        border-top-right-radius: 30px;
        cursor: default;
        border: 2px solid #4caf50;
        a {
          color: #333;
          text-decoration: none;
          cursor: pointer;
          display: block;
          padding: 3px 23px;
        }
    }
  }
  .navAll {
    z-index: 99999;
    position: absolute;
    color: #000;
    padding: 5px 7px;
    cursor: pointer;
    background-color: white;
    transition: 0.5s;
  }
  .navAll.active {
      border-bottom-right-radius: 10px;
  }
  .navAll.active .navigate-tools {
    display: block;
  }
  a.router-link-active, li.router-link-active>a {
    color: red;
}
</style>



