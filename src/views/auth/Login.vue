<template>
  <div class="login">
      <SideBar 
            title="Авторизация"
            isListStep=""
            titleDesc="Мы рады видеть вас снова"
            descSideBar='Для входа в личный кабинет используйте номер телефона,
            указанный при регистрации. <br><br>
            Если вы забыли или не создавали пароль,
            воспользуйтесь ссылкой "Не помню пароль"'
            imgBanner=""
            LoginButton=""
            backButton=""
            regButton="Зарегистрироваться"
      />
      <!-- content -->
        
        <div class="pltz-wrapper pltz-wrapper_t1">

            <div class="pltz-grid">


                <div class="c-card c-card_t1">

                    <div class="c-card__part">
                        <form action="#" class="c-form" id="enter_lk">
                            <h1 class="o-content-h1 o-content-h1_feat">Авторизация</h1>

                            <fieldset class="c-form-fieldset">

                                <div class="c-form-group">
                                    <input type="tel" class="o-pltz-text-input js-text-input js-input-phone" value="" id="lPhone" />
                                    <label class="control-label" for="lPhone">Мобильный телефон</label>

                                    <div class="c-form-group__message">Заполните полностью</div>
                                    <span class="c-form-group__clear js-field-clear">X</span>
                                </div>

                                <div class="c-form-group">
                                    <input type="password" class="o-pltz-text-input js-text-input" value="" id="lPass" />
                                    <label class="control-label" for="lPass">Введите пароль</label>

                                    <div class="c-form-group__message">Введите пароль</div>
                                    <span class="c-form-group__clear js-field-clear">X</span>

                                </div>

                                <div class="pltz-flex pltz-flex_p12">
                                    <div class="pltz-flex__col pltz-flex__col_small5 c-form__part c-form__part_right" style="margin-top: -24px; max-width: 100%; flex: 0 0 100%; margin-bottom: 28px;">
                                        <a href="#" class="o-link">Не помню пароль</a>
                                    </div>
                                </div>

                    

                            </fieldset>
                            <div class="pltz-flex pltz-flex_p12">
                                <div class="pltz-flex__col pltz-flex__col_small6">
                                    Еще не зарегистрированы?<br />
                                    <router-link to="register" class="o-link">Создать аккаунт</router-link>
                                </div>
                                <div class="pltz-flex__col pltz-flex__col_small6">
                                    <button type="submit" class="o-pltz-btn o-pltz-btn_i o-pltz-btn_i-full">Войти</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

            </div>

        </div>

  </div>

</template>
<script>
  import SideBar from '@/components/auth/SideBar'
  export default {
    components: {
      SideBar
    },
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://dexploitdm.ru/projects/backup/build.js')
      document.head.appendChild(recaptchaScript)
    },
    created: function() {
        window.document.title = "Axirate | Авторизация"
    },
  }
</script>