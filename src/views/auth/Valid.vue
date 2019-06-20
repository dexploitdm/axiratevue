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
                         <form action="#" class="c-form" @submit.prevent="checkForm">
                            <h1 class="o-content-h1 o-content-h1_feat">Авторизация</h1>

                            <fieldset class="c-form-fieldset">

                                

                                <div class="c-form-group" :class="{
                                    'is-error': submitted && $v.login.lPhone.$error ,
                                    'is-empty': !this.login.lPhone
                                    }">
                                <vue-mask
                                  type="tel"
                                  v-model="login.lPhone"
                                  id="lPhone"
                                  placeholder="+7 (___) ___ __ __"
                                  mask="+7 (999) 999 99 99" 
                                  name="lPhone" class="o-pltz-text-input js-text-input js-input-phone" ></vue-mask>
                                <label class="control-label" for="lPhone">Мобильный телефон</label>
                                <div v-if="submitted && !$v.login.lPhone.required" class="c-form-group__message">Заполните полностью</div>
                            </div>

                            <div class="c-form-group"
                                :class="{
                                    'is-error': submitted && $v.login.password.$error ,
                                    'is-empty': !this.login.password
                                }">

                                <input type="password"
                                  v-model="login.password"
                                  id="password"
                                  name="password"
                                  class="o-pltz-text-input js-text-input"
                                  :class="{ 'is-invalid': submitted && $v.login.password.$error }"
                                />
                                  <label class="control-label" for="lPass">Введите пароль</label>
                                <div v-if="submitted && $v.login.password.$error">
                                    <div class="c-form-group__message" v-if="!$v.login.password.required">Пароль обязателен</div>
                                    <div class="c-form-group__message" v-if="!$v.login.password.minLength">Пароль должен содержать больше 6 символов</div>
                                    <span class="c-form-group__clear js-field-clear"
                                        v-on:click="$v.login.password.$error == true"
                                    >X</span>
                                </div>
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
 <vue-mask 
        class="form-control" 
        mask="+7(999)9999999" 
        placeholder="_"
        :raw="false"
      > 
    </vue-mask>

            </div>

        </div>

  </div>

</template>
<script>
  import SideBar from '@/components/auth/SideBar'
  import {TheMask} from 'vue-the-mask'
  import vueMask from 'vue-jquery-mask';
  import {
    required,
    minLength
} from "vuelidate/lib/validators";
  export default {
    components: {
      SideBar, TheMask, vueMask
    },
    data() {
        return {
            login: {

                lPhone: "",
                password: "",

            },
            submitted: false
        }
    },
    validations: {
        login: {
            lPhone: {
                required,
            },
            password: {
                required,
                minLength: minLength(6)
            },
        }
    },
    methods: {
         checkForm: function (e) {
            this.submitted = true;
            console.log(this.$v.login.password.$error)
            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                console.warn('не валидно')
                return;
            }

            console.info('отправка')

            this.errors = [];
            e.preventDefault();
        }
    },
    mounted() {
    //   let recaptchaScript = document.createElement('script')
    //   recaptchaScript.setAttribute('src', 'js/builds.js')
    //   document.head.appendChild(recaptchaScript)
    },
    created: function() {
        window.document.title = "Авторизация"
    },
  }
</script>