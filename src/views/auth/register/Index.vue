<template>
  <div class="register">
      <SideBar 
        title="Регистрация"
        isListStep="1"
        titleDesc="Получить деньги ещё не было так просто!"
        descSideBar="3 простых шага - и личный финансовый помощник будет с вами 24 часа в сутки!"
        imgBanner="frame-reg-1.png"
        LoginButton="уже есть аккаунт"
        backButton=""
        regButton=""
      />
      <!-- content -->
          
    <div class="pltz-wrapper pltz-wrapper_t1">

        <div class="pltz-grid">

            <div class="c-card c-card_t1">
                <div class="c-card__part">

                    <form action="#" class="c-form" id="regone" @submit.prevent="checkForm" autocomplete="on">

                        <fieldset class="c-form-fieldset js-fieldset">
                            <h1 class="c-form-legend c-form-legend_progress">Контактные данные</h1>

                            <div role="progressbar" class="pltz-linear-progress pltz-linear-progress_status">
                                <div class="pltz-linear-progress__bar pltz-linear-progress__bar_determinate js-progress-fieldset"></div>
                            </div>


                            <div class="c-form-group">
                                <textarea class="o-pltz-textarea js-text-input js-textarea-resize js-input-fio-separately" name="rSurname" id="rSurname" rows="1" data-required="required"></textarea>
                                <label class="control-label" for="rSurname">Фамилия</label>
                                <div class="c-form-group__message">Заполните полностью</div>
                                <span class="c-form-group__clear js-field-clear">X</span>
                            </div>

                            <div class="c-form-group">
                                <textarea class="o-pltz-textarea js-text-input js-textarea-resize js-input-fio-separately" name="rName" id="rName" rows="1" data-required="required"></textarea>
                                <label class="control-label" for="rName">Имя</label>
                                <div class="c-form-group__message">Заполните полностью</div>
                                <span class="c-form-group__clear js-field-clear">X</span>
                            </div>

                            <div class="c-form-group">
                                <textarea class="o-pltz-textarea js-text-input js-textarea-resize js-input-fio-separately" name="rPatronymic" id="rPatronymic" rows="1" data-required="required"></textarea>
                                <label class="control-label" for="rPatronymic">Отчество</label>
                                <div class="c-form-group__message">Заполните полностью</div>
                                <span class="c-form-group__clear js-field-clear">X</span>
                            </div>

                            <div class="c-form-group c-form-group_checkbox c-form-group_inline c-form-group_t2">
                                <label class="c-form-group__label"></label>

                                <div class="c-form-group__items">
                                    <div class="c-form-group__item">
                                        <input type="radio" id="account_gender_0" name="account[gender]" v-model="gender" value="MALE" class="o-pltz-radio" />
                                        <label for="account_gender_0" class="control-label">Мужчина</label>
                                    </div><div class="c-form-group__item">
                                        <input type="radio" id="account_gender_1" name="account[gender]" v-model="gender" value="FEMALE" class="o-pltz-radio" />
                                        <label for="account_gender_1" class="control-label">Женщина</label>
                                    </div>
                                </div>

                                <div class="c-form-group__message">
                                    Укажите ваш пол
                                </div>
                            </div>

                            <div class="c-form-group">
                                <input type="tel" class="o-pltz-text-input js-text-input js-input-phone" value="" id="rPhone" data-required="required" />
                                <label class="control-label" for="rPhone">Мобильный телефон</label>

                                <div class="c-form-group__message">Заполните полностью</div>
                                <span class="c-form-group__clear js-field-clear">X</span>
                            </div>

                            <div class="c-form-group">
                                <input type="text" class="o-pltz-text-input js-text-input js-input-email" value="" id="rEmail" data-required="required" />
                                <label class="control-label" for="rEmail">Электронная почта</label>

                                <div class="c-form-group__message">Заполните полностью</div>
                                <span class="c-form-group__clear js-field-clear">X</span>
                            </div>

                        </fieldset>

                        <div class="pltz-flex pltz-flex_p12 c-form__footer">

                            <div class="pltz-flex__col pltz-flex__col_small6 c-form__footer-part c-form__footer-part_t1">
                                <button type="submit" class="o-pltz-btn o-pltz-btn_i">Продолжить</button>
                            </div>

                            <div class="pltz-flex__col pltz-flex__col_small6 c-form__footer-part">
                                <div class="c-form-group">
                                    <input class="o-pltz-checkbox" id="rComp" value="1" name="rComp" type="checkbox" />
                                    <label class="control-label" for="rComp">Это чужой компьютер</label>

                                    <div class="c-form-group__message"></div>
                                </div>
                            </div>

                        </div>

                        <div class="pltz-flex pltz-flex_p12 c-form__footer c-form__footer_double">

                            <div class="pltz-flex__col pltz-flex__col_small6 c-form__footer-part c-form__footer-part_t2">
                                <button type="submit" class="o-pltz-btn o-pltz-btn_i">Продолжить</button>
                            </div>

                            <div class="pltz-flex__col pltz-flex__col_small6 c-form__footer-part">
                                <a href="#" class="o-pltz-btn o-pltz-btn_t2">Уже есть аккаунт</a>
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
import $ from 'jquery'; 
  import SideBar from '@/components/auth/SideBar'
  export default {
    data () {
      return {
        errors: [],
        gender: null,
      }
    },
    components: {
      SideBar
    },
    created: function() {
        window.document.title = "Регистрация - контактные данные"
    },
    methods: {

        checkForm: function (e) {
                    
            console.log('отправка')
            if ($('#rSurname').val() && $('#rName').val() && $('#rPatronymic').val() && $('#rPhone').val() && $('#rEmail').val()) {

               if(!$(".c-form-group").hasClass("is-error")){
            
                  /*
                  * TODO: Отправка данных
                  */
                  //return true;
                 // console.log('Отправка первого шага')
                  //console.log('Фам. ' + $('#rSurname').val() + ' Имя ' +  $('#rName').val() + ' Отч. ' + $('#rPatronymic').val() + ' Пол: ' + this.gender + ' Номер ' + $('#rPhone').val() + ' Email ' + $('#rEmail').val())
                 
                  this.$store.dispatch('register/stepOne')
                  this.$router.push('/register/passport-data')
               }

            }


            this.errors = [];

            e.preventDefault();
        }
    },
     mounted() {

          /*
          * TODO: Сохранение данных в cookie на некоторое время
          */

            const cookieRName = document.getElementById('rName');
            const cookieRSurname= document.getElementById('rSurname');
            const cookieRPatronymic= document.getElementById('rPatronymic');
            const cookieRPhone= document.getElementById('rPhone');
            const cookieREmail= document.getElementById('rEmail');

            (function(){
              //Фамилия
              if (sessionStorage.rSurname) {  cookieRSurname.value = sessionStorage.rSurname; }
              cookieRSurname.onchange = function() {
                  if (this.selectedIndex !== 0) {
                      sessionStorage.rSurname = this.value;  } };
              //Имя
              if (sessionStorage.rName) {  cookieRName.value = sessionStorage.rName; }
              cookieRName.onchange = function() {
                  if (this.selectedIndex !== 0) {
                      sessionStorage.rName = this.value;  } };
              //Отчество
              if (sessionStorage.rPatronymic) {  cookieRPatronymic.value = sessionStorage.rPatronymic; }
              cookieRPatronymic.onchange = function() {
                  if (this.selectedIndex !== 0) {
                      sessionStorage.rPatronymic = this.value;  } };
              //Номер телефона


              if (localStorage.rPhone) {  cookieRPhone.value = localStorage.rPhone; }
              cookieRPhone.onchange = function() {
                  if (this.selectedIndex !== 0) {
                      localStorage.rPhone = this.value;  } };


              //Email
              if (sessionStorage.rEmail) {  cookieREmail.value = sessionStorage.rEmail; }
              cookieREmail.onchange = function() {
                  if (this.selectedIndex !== 0) {
                      sessionStorage.rEmail = this.value;  } };
            })();


      let buildScript = document.createElement('script')
      buildScript.setAttribute('src', 'js/builds.js')
      document.head.appendChild(buildScript)

    }
  }
</script>