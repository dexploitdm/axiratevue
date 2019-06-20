<template>
    <div>
       <SideBar
          title="Регистрация"
          isListStep="2"
        />
        <div class="pltz-wrapper pltz-wrapper_t1">
          <div class="pltz-grid">
              <div class="c-card c-card_t1">
                  <div class="c-card__part">
                      <h1 class="o-content-h1 o-content-h1_feat">Проверяем данные</h1>
                      <p class="o-content-text">
                          Пожалуйста, дождитесь завершения проверки. После удачной проверки данных мы расчитаем ваш кредитный рейтинг и предложим персональные условия.
                      </p>
                      <div class="pltz-timer js-pltz-timer-fake"></div>
                      <div role="progressbar" class="pltz-linear-progress">
                          <div class="pltz-linear-progress__bar pltz-linear-progress__bar_indeterminate"></div>
                      </div>
                      <div class="c-card__media">
                          <img src="~/assets/images/im_user_scor.png" alt="Проверяем данные">
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import SideBar from '@/components/auth/SideBar'
export default {
    data () {
      return {
        errors: [],
        lPass: null
      }
    },
    layout: 'auth/identification',
    head: {
        title: 'Вход',
    },
    components: {
      SideBar
    },
    methods: {
      checkForm: function (e) {

        const expiration = new Date().getTime() + (3600 * 1000)
        this.$warehouse.set('lPhone', { name: $('#lPhone').val() }, expiration)

        if (this.lPhone) {
          if(!$(".c-form-group").hasClass("is-error")){
                /*
                * TODO: Отправляем данные - если ответ положителен то:
                * Генерируем токен и сохраняем в warehouse
                * После чего перенаправляем в LK
                */
                this.$router.push('/registration/passport-data')
            }
          }
          this.errors = [];
          e.preventDefault();
        }
    },
    mounted() {
      if(this.$warehouse.get('lPhone')){
          document.getElementById('lPhone').value = this.$warehouse.get('lPhone').name
      }
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', '/build_2.js')
      document.head.appendChild(recaptchaScript)
    },
}
</script>
