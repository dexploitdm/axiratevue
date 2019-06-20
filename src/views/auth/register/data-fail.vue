<template>
    <div>
       <SideBar
          title="Регистрация"
          isListStep="2"
          titleDesc="А теперь проверим вас на внимательность"
          descSideBar='Наш умный скоринг тоже учитывает этот фактор. Смотрите не ошибитесь!'
          imgBanner="frame-reg-4.png"
        />
          <div class="pltz-wrapper pltz-wrapper_t1">
            <div class="pltz-grid">
                <div class="c-card c-card_t1">
                    <div class="c-card__part">
                        <form action="#" class="c-form" @submit.prevent="correctForm">
                            <fieldset class="c-form-fieldset">
                                <legend class="c-form-legend c-form-legend_error">Возможно, допущена ошибка</legend>
                                <p class="c-form-fieldset__descr">
                                    Не удалось проверить анкетные данные. Обычно такое случается из-за допущенных ошибок при заполнении анкеты. Пожалуйста, внимательно проверьте данные ниже и исправьте найденные ошибки.
                                </p>
                                <div class="c-form-group">
                                    <textarea class="o-pltz-textarea js-text-input js-textarea-resize" name="rName" v-model="rName" id="rName" rows="1">Константинопольский Константин Константинович</textarea>
                                    <label class="control-label" for="rName">Фамилия Имя Отчество</label>
                                    <div class="c-form-group__message">Заполните полностью</div>
                                    <span class="c-form-group__clear js-field-clear">X</span>
                                </div>
                                <div class="c-form-group">
                                    <input type="tel" class="o-pltz-text-input is-age js-text-input js-input-date" value="" v-model="rBirthDate" id="rBirthDate" />
                                    <label class="control-label" for="rBirthDate">Дата рождения</label>
                                    <div class="c-form-group__message">Заполните полностью</div>
                                    <span class="c-form-group__clear js-field-clear">X</span>
                                </div>
                                <div class="c-form-group">
                                    <input type="tel" class="o-pltz-text-input js-text-input js-input-passport" value="" v-model="rPassport" id="rPassport" />
                                    <label class="control-label" for="rPassport">Серия и номер паспорта</label>
                                    <div class="c-form-group__message">Заполните полностью</div>
                                    <span class="c-form-group__clear js-field-clear">X</span>
                                </div>
                                <div class="c-form-group">
                                    <input type="tel" class="o-pltz-text-input js-text-input js-input-date" value="" v-model="rPassportDate" id="rPassportDate" />
                                    <label class="control-label" for="rPassportDate">Дата выдачи паспорта</label>
                                    <div class="c-form-group__message">Заполните полностью</div>
                                    <span class="c-form-group__clear js-field-clear">X</span>
                                </div>
                                <div class="c-form-fieldset__message is-hidden-pltz js-date-passport-error">
                                    Проверьте дату выдачи паспорта и дату рождения. Возможно, у вас закончился срок действия паспорта.
                                </div>
                                <div class="pltz-flex pltz-flex_p12">
                                    <div class="pltz-flex__col pltz-flex__col_7">
                                        <div class="c-form-group">
                                            <input type="tel" class="o-pltz-text-input js-text-input js-input-required" value="" id="rCodeCaptcha" data-required="required" />
                                            <label class="control-label" for="rCodeCaptcha">Код проверки</label>
                                            <div class="c-form-group__message">Заполните полностью</div>
                                            <span class="c-form-group__clear js-field-clear">X</span>
                                        </div>
                                    </div>
                                    <div class="pltz-flex__col pltz-flex__col_5">
                                        <div class="c-form-group">
                                            <div class="c-form-captcha">
                                                <img src="~/assets/images/demo/captcha.png" alt="Captcha" class="c-form-captcha__image"><br />
                                                <a href="#" class="c-form-captcha__link o-link">Получить новый код</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div class="pltz-flex pltz-flex_p12 c-form__footer">
                                <div class="pltz-flex__col pltz-flex__col_small12 c-form__footer-part">
                                    <AppButton
                                        title = "Опечаток нет"
                                        cls = "o-pltz-btn o-pltz-btn_wrap o-pltz-btn_i"
                                        type = "submit"
                                    />
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
import AppButton from '@/components/form/Button'
export default {
    data () {
      return {
        errors: [],
        rName: null,
        rBirthDate: null,
        rPassport: null,
        rPassportDate: null,
        rCodeCaptcha: null
      }
    },
    layout: 'auth/identification',
    head: {
        title: 'Вход',
    },
    components: {
      SideBar, AppButton
    },
    methods: {

      correctForm: function (e) {
        console.log(this.rBirthDate)
        const expiration = new Date().getTime() + (3600 * 1000)
        //this.$warehouse.set('lPhone', { name: $('#lPhone').val() }, expiration)

        if (this.rBirthDate) {
          if(!$(".c-form-group").hasClass("is-error")){

                /*
                * TODO: Отправляем данные
                * Проверка ответа:
                */
                //this.$router.push('/registration/passport-data')
            }
          }
          this.errors = [];
          e.preventDefault();
        }
    },
    mounted() {
      if(this.$warehouse.get('rSurname') && this.$warehouse.get('rName') && this.$warehouse.get('rPatronymic')){
          document.getElementById('rName').value = this.$warehouse.get('rSurname').name + ' ' + this.$warehouse.get('rName').name + ' '  + this.$warehouse.get('rPatronymic').name
      }
      if(this.$warehouse.get('rBirthDate')){
          document.getElementById('rBirthDate').value = this.$warehouse.get('rBirthDate').name
      }
      if(this.$warehouse.get('rPassport')){
          document.getElementById('rPassport').value = this.$warehouse.get('rPassport').name
      }
      if(this.$warehouse.get('rPassportDate')){
          document.getElementById('rPassportDate').value = this.$warehouse.get('rPassportDate').name
      }

      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', '/build_2.js')
      document.head.appendChild(recaptchaScript)
    },
}
</script>
