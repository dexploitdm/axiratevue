<template>
<div>
    <SideBar title="Регистрация" isListStep="2" titleDesc="Пожалуй, самый высокий процент одобрения!" descSideBar="Мы никого не оставим в беде. Даже если у вас испорчена кредитная история,
      мы сформируем для вас индивидуальное предложение и найдем способ её исправить!" imgBanner="frame-reg-2.png" LoginButton="" backButton="назад" regButton="" />
        <transition name="fade">
            <div v-if="showPassBorn" class="c-form-fieldset__white-bg"
                  v-on:click="showPassBorn = !showPassBorn">
            </div>
            <div v-if="showPassIssued" class="c-form-fieldset__white-bg"
                  v-on:click="showPassIssued = !showPassIssued">
            </div>
        </transition>
        <transition name="fade">
            <div v-if="showPassIssued" class="c-form-fieldset__img-popup" id="passport-issued">
                <img :src="'/images/passport-issued.png'" style="width: 100%" alt="паспорт" />
            </div>
        </transition>
        <transition name="fade">
            <div  v-if="showPassBorn" class="c-form-fieldset__img-popup" id="passport-born">
                <img :src="'/images/passport-born.png'" style="width: 100%" alt="паспорт" />
            </div>
        </transition>
        <div class="pltz-wrapper pltz-wrapper_t1">
            <div class="pltz-grid">

                <div class="c-card c-card_t1">

                    <div class="c-card__part">

                        <form class="c-form" id="regtwo" @submit.prevent="onSubmit">

                            <fieldset class="c-form-fieldset js-fieldset">
                                <h1 class="c-form-legend c-form-legend_progress">Паспортные данные</h1>

                                <div role="progressbar" class="pltz-linear-progress pltz-linear-progress_status">
                                    <div class="pltz-linear-progress__bar pltz-linear-progress__bar_determinate js-progress-fieldset"></div>
                                </div>

                                <div class="pltz-flex pltz-flex_p20">
                                    <div class="pltz-flex__col pltz-flex__col_small6">
                                        <div class="c-form-group">
                                            <input type="tel" class="o-pltz-text-input is-age js-text-input js-input-date js-date-birth" value="" v-model="rBirthDate" id="rBirthDate" data-required="required" />
                                            <label class="control-label" for="rBirthDate">Дата рождения</label>

                                            <div class="c-form-group__message">Заполните полностью</div>
                                            <span class="c-form-group__clear js-field-clear">X</span>
                                        </div>
                                    </div>

                                    <div class="pltz-flex__col pltz-flex__col_small6">
                                        <div class="c-form-group">
                                            <input type="tel" class="o-pltz-text-input js-text-input js-input-passport" value="" v-model="rPassport" id="rPassport" data-required="required" />
                                            <label class="control-label" for="rPassport">Серия и номер паспорта</label>

                                            <div class="c-form-group__message">Заполните полностью</div>
                                            <span class="c-form-group__clear js-field-clear">X</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="pltz-flex pltz-flex_p20">
                                    <div class="pltz-flex__col pltz-flex__col_small6">
                                        <div class="c-form-group">
                                            <input type="tel" class="o-pltz-text-input js-text-input js-input-date js-date-passport" value="" v-model="rPassportDate" id="rPassportDate" data-required="required" />
                                            <label class="control-label" for="rPassportDate">Дата выдачи паспорта</label>

                                            <div class="c-form-group__message">Заполните полностью</div>
                                            <span class="c-form-group__clear js-field-clear">X</span>
                                        </div>
                                    </div>

                                    <div class="pltz-flex__col pltz-flex__col_small6">
                                        <div class="c-form-group">
                                            <input type="tel" class="o-pltz-text-input js-text-input js-input-passport-podr" value="123456" v-model="rPassportPodr" id="rPassportPodr" data-required="required" />
                                            <label class="control-label" for="rPassportPodr">Код подразделения</label>

                                            <div class="c-form-group__message">Заполните полностью</div>
                                            <span class="c-form-group__clear js-field-clear">X</span>
                                        </div>

                                    </div>
                                </div>

                                <p class="c-form-fieldset__descr c-form-fieldset__descr--margin0" style="margin: 0;">
                                    <b>
                                    Заполняйте это поле точно <span class="c-form-fieldset__descr-comment" v-on:click="showPassIssued = !showPassIssued" data-show="passport-issued">как в паспорте</span>, например:<br />
                                </b>
                                    Отделом УФМС России по Пермскому краю в Свердловском районе города Перми
                                </p>
                                <div class="c-form-group">
                                    <textarea class="o-pltz-textarea js-text-input js-textarea-resize js-autocomplete-address js-input-location" name="rPassportIssuer" v-model="rPassportIssuer" id="rPassportIssuer" rows="1" data-required="required"></textarea>
                                    <label class="control-label" for="rPassportIssuer">Кем выдан (как в паспорте)</label>

                                    <div class="c-form-group__message">Заполните полностью</div>
                                    <span class="c-form-group__clear js-field-clear">X</span>
                                </div>

                                <p class="c-form-fieldset__descr c-form-fieldset__descr--margin0" style="margin: 0;">
                                    <b>
                                    Заполняйте это поле точно <span class="c-form-fieldset__descr-comment" v-on:click="showPassBorn = !showPassBorn" data-show="passport-born">как в паспорте</span>, например:<br />
                                </b>
                                    гор. Пермь
                                </p>
                                <div class="c-form-group">
                                    <textarea class="o-pltz-textarea js-text-input js-textarea-resize js-input-location" name="" v-model="rBirthPlace"  id="rBirthPlace" rows="1" data-required="required"></textarea>
                                    <label class="control-label" for="rBirthPlace">Место рождения (как в паспорте)</label>

                                    <div class="c-form-group__message">Заполните полностью</div>
                                    <span class="c-form-group__clear js-field-clear">X</span>
                                </div>

                                <div class="c-form-fieldset__message is-hidden-pltz js-date-passport-error">
                                    Проверьте дату выдачи паспорта и дату рождения. Возможно, у вас закончился срок действия паспорта.
                                </div>

                            </fieldset>

                            <fieldset class="c-form-fieldset js-fieldset">
                                <legend class="c-form-legend c-form-legend_progress">Адрес регистрации</legend>

                                <div role="progressbar" class="pltz-linear-progress pltz-linear-progress_status">
                                    <div class="pltz-linear-progress__bar pltz-linear-progress__bar_determinate js-progress-fieldset"></div>
                                </div>

                                <p class="c-form-fieldset__descr">
                                    Начните вводить адрес, система будет вам подсказывать. <br>
                                Например: Москва, Ленина 48, 69
                            </p>

                                    <div class="c-form-group c-form-group_t1">
                                        <textarea class="o-pltz-textarea js-text-input js-textarea-resize js-input-address js-autocomplete-address" name="" v-model="rAddressReg" id="rAddressReg" rows="1" data-required="required"></textarea>
                                        <label class="control-label" for="rAddressReg">Адрес регистрации (как в паспорте)</label>

                                        <div class="c-form-group__message">Заполните полностью</div>
                                        <span class="c-form-group__clear js-field-clear">X</span>
                                    </div>

                            </fieldset>

                            <fieldset class="c-form-fieldset js-fieldset">

                                <div class="js-addresses-cont">
                                    <div class="c-form-group c-form-group_checkbox">
                                        <input class="o-pltz-checkbox o-pltz-checkbox_t1 js-address-living-check" id="rAddressLivingCheck" value="1"  name="rAddressLivingCheck" type="checkbox" checked />
                                        <label class="control-label" for="rAddressLivingCheck">Проживаю по адресу регистрации</label>

                                        <div class="c-form-group__message"></div>
                                        <span class="c-form-group__clear js-field-clear">X</span>
                                    </div>

                                    <div class="c-form-visibility-cont is-hidden-pltz js-address-living-cont">

                                        <legend class="c-form-legend c-form-legend_progress">Адрес проживания</legend>

                                        <div role="progressbar" class="pltz-linear-progress pltz-linear-progress_status">
                                            <div class="pltz-linear-progress__bar pltz-linear-progress__bar_determinate js-progress-fieldset"></div>
                                        </div>

                                        <p class="c-form-fieldset__descr">
                                            Начните вводить адрес, система будет вам подсказывать. <br>
                                        Например: Москва, Ленина 48, 69
                                    </p>

                                            <div class="c-form-group">
                                                <textarea class="o-pltz-textarea js-text-input js-textarea-resize js-input-address" name="" v-model="rAddressLiving" id="rAddressLiving" rows="1"></textarea>
                                                <label class="control-label" for="rAddressLiving">Адрес проживания</label>

                                                <div class="c-form-group__message">Укажите адрес проживания</div>
                                                <span class="c-form-group__clear js-field-clear">X</span>
                                            </div>
                                    </div>
                                </div>

                            </fieldset>

                            <fieldset class="c-form-fieldset js-fieldset">
                                <div class="c-form-group is-empty">
                                    <input type="tel" class="o-pltz-text-input js-text-input js-input-phone" value="" v-model="rPhone1" id="rPhone1">
                                    <label class="control-label" for="rPhone1">Дополнительный номер телефона</label>

                                    <div class="c-form-group__message">Заполните полностью</div>
                                    <span class="c-form-group__clear js-field-clear">X</span>
                                </div>
                            </fieldset>

                            <fieldset class="c-form-fieldset js-fieldset">
                                <legend class="c-form-legend c-form-legend_progress">Дополнительные данные</legend>

                                <div role="progressbar" class="pltz-linear-progress pltz-linear-progress_status">
                                    <div class="pltz-linear-progress__bar pltz-linear-progress__bar_determinate js-progress-fieldset"></div>
                                </div>

                                <div class="c-form-group is-empty">
                                    <input type="tel" class="o-pltz-text-input js-text-input js-input-inn" value="" v-model="rInn" id="rInn">
                                    <label class="control-label" for="rSnils">ИНН</label>

                                    <div class="c-form-group__message">Заполните полностью</div>
                                    <div class="c-form-group__descr">Заполнение поля повысит ваши шансы на одобрение займа</div>
                                    <span class="c-form-group__clear js-field-clear">X</span>
                                </div>

                            </fieldset>

                            <fieldset class="c-form-fieldset">

                            </fieldset>

                            <fieldset class="c-form-fieldset js-fieldset">
                                <legend class="c-form-legend c-form-legend_progress">Подписание документов</legend>

                                <div role="progressbar" class="pltz-linear-progress pltz-linear-progress_status">
                                    <div class="pltz-linear-progress__bar pltz-linear-progress__bar_determinate js-progress-fieldset"></div>
                                </div>

                                <div class="js-passwords-cont">
                                    <div class="c-form-group c-form-group_t2">
                                        <input type="password" class="o-pltz-text-input js-text-input js-password" value="" v-model="rPass" id="rPass">
                                        <label class="control-label" for="rPass">Придумайте надёжный пароль</label>

                                        <div class="c-form-group__message">Введите пароль</div>
                                        <span class="c-form-group__clear js-field-clear">X</span>
                                    </div>

                                    <div class="c-form-group c-form-group_t1">

                                        <ul class="c-form-group__descr-list">
                                            <li class="c-form-group__descr-list-item">Пароль должен состоять из 8 символов и более</li>
                                            <li class="c-form-group__descr-list-item">Допустимы латинские буквы и цифры</li>
                                        </ul>

                                        <div class="o-password-strength js-password-strength">
                                            <div class="o-password-strength__bar-bg">
                                                <div class="o-password-strength__bar js-password-strength-bar is-medium"></div>
                                            </div>
                                        </div>
                                        <div class="o-password-strength__status">
                                            <div class="o-password-strength__status-item">Слабый</div>
                                            <div class="o-password-strength__status-item">Средний</div>
                                            <div class="o-password-strength__status-item">Надёжный</div>
                                        </div>
                                    </div>

                                    <div class="c-form-group is-empty">
                                        <input type="password" class="o-pltz-text-input js-text-input js-password-repeat" value="" id="rPassRepeat">
                                        <label class="control-label" for="rPassRepeat">Повторите пароль</label>

                                        <div class="c-form-group__message">Пароли не совпадают</div>
                                        <span class="c-form-group__clear js-field-clear">X</span>
                                    </div>

                                    <div class="c-form-group c-form-group_checkbox c-form-group_t1" style="margin: -12px 0 32px 0;">
                                        <input class="o-pltz-checkbox " id="rAgree" value="1" name="rAgree" type="checkbox" data-required="required">
                                        <label class="control-label" for="rAgree">Я согласен и ознакомлен <a href="agreement.php" class="control-label__link" target="_blank">со следующим</a></label>
                                        <div class="c-form-group__message">Для продолжения регистрации в сервисе вы должны быть согласны cо следующими документами</div>
                                    </div>

                                </div>

                                <div class="c-sms-manage js-sms-manage">
                                    <div class="js-phone-change-block">
                                        <div class="c-form-visibility-cont js-phone-change-info">
                                            <div class="c-form-group">
                                                <div class="c-form-group__text">
                                                    SMS-код отправлен на номер:
                                                </div>
                                                <div class="c-sms-manage__flex c-sms-manage__flex_t1">

                                                    <div class="c-sms-manage__main">
                                                        <div class="c-form__text-feat pltz-phone-number">{{ currentPhone }}</div>
                                                    </div>
                                                    <!--
                                                <div class="c-sms-manage__actions">
                                                    <a href="#" class="o-link js-phone-change-link">Изменить</a>
                                                </div>
                                                -->
                                                </div>
                                            </div>
                                        </div>

                                        <div class="c-form-visibility-cont is-hidden-pltz js-phone-change-input">
                                            <div class="c-sms-manage__flex">
                                                <div class="c-sms-manage__main c-sms-manage__main_phone">
                                                    <div class="c-form-group">
                                                        <input type="tel" class="o-pltz-text-input js-text-input js-input-phone" value="" id="rPhone" />
                                                        <label class="control-label" for="rPhone">Мобильный телефон</label>

                                                        <div class="c-form-group__message">Укажите свой мобильный телефон</div>
                                                        <span class="c-form-group__clear js-field-clear">X</span>
                                                    </div>
                                                </div>

                                                <div class="c-sms-manage__actions c-sms-manage__actions_phone">
                                                    <div class="c-form-group">
                                                        <a href="#" class="o-link c-form__link js-phone-change-save-link">Сохранить</a><br>
                                                        <a href="#" class="o-link js-phone-change-cancel-link">Отменить</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="c-form-visibility-cont js-sms-code-block">
                                        <div class="c-sms-manage__flex">
                                            <div class="c-sms-manage__main c-sms-manage__main_sms-t1">
                                                <div class="c-form-group">
                                                    <input type="tel" class="o-pltz-text-input js-text-input js-input-sms" value="" id="rSms1" data-required="required" />
                                                    <label class="control-label" for="rSms1">SMS-код</label>

                                                    <div class="c-form-group__message">Заполните полностью</div>
                                                    <span class="c-form-group__clear js-field-clear">X</span>
                                                </div>
                                            </div>

                                            <div class="c-sms-manage__actions c-sms-manage__actions_sms-t1">
                                                <div class="c-form-group">
                                                    <button type="button" class="o-pltz-btn o-pltz-btn_i js-sms-send-link-reg">Получить SMS-код</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="c-sms-manage__flex">
                                            <div class="c-sms-manage__main c-sms-manage__main_sms-t1">
                                                <div class="c-form-group">
                                                    <input type="tel" class="o-pltz-text-input js-text-input js-input-sms" value="" id="rSms2" data-required="required" />
                                                    <label class="control-label" for="rSms2">SMS-код</label>

                                                    <div class="c-form-group__message">Заполните полностью</div>
                                                    <span class="c-form-group__clear js-field-clear">X</span>
                                                </div>
                                            </div>

                                            <div class="c-sms-manage__actions c-sms-manage__actions_sms-t1">
                                                <div class="c-form-group">
                                                    <div class="c-form-group__descr c-form-group__descr_t1 js-sms-send-info">SMS-код отправлен. Повторная отправка возможна через <span class="js-sms-send-remain-seconds">90</span> сек.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="c-form-visibility-cont is-hidden-pltz js-sms-code-confirmed">
                                        <div class="c-form-group">
                                            <div class="o-pltz-data-success">SMS-код подтверждён</div>
                                        </div>
                                    </div>
                                </div>

                            </fieldset>

                            <div class="pltz-flex pltz-flex_p12 c-form__footer">

                                <div class="pltz-flex__col pltz-flex__col_small6 c-form__footer-part c-form__footer-part_t1" style="flex: 0 0 100% !important; max-width: 100% !important;">
                                    <button type="submit" class="o-pltz-btn o-pltz-btn_i">Продолжить</button>
                                </div>

                                <!--<div class="pltz-flex__col pltz-flex__col_small6 c-form__footer-part">
                                <div class="c-form-group c-form-group_checkbox">
                                    <input class="o-pltz-checkbox" id="rComp" value="1" name="rComp" type="checkbox" />
                                    <label class="control-label" for="rComp">Это чужой компьютер</label>

                                    <div class="c-form-group__message"></div>
                                </div>
                            </div>-->

                            </div>
                            {{$store.state.register.stepOneToken}}
                        </form>

                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
//import '~/assets/js/test2.js'
import SideBar from '@/components/auth/SideBar'
export default {
    beforeCreate() {
       if(this.$store.state.register.stepOneToken == null){
           console.log('закрыть страницу')
       }
    },
    data() {
        return {
            errors: [],
            rBirthDate: null,
            rPassport: null,
            rPassportDate: null,
            rPassportPodr: null,
            rPassportIssuer: null,
            rBirthPlace: null,
            rAddressReg: null,
            rAddressLiving: null,
            rPhone1: null,
            rInn: null,
            rPass: null,
            showPassBorn: false,
            showPassIssued: false,
            currentPhone: 'test' //localStorage.rPhone
        }
    },
    components: {
        SideBar
    },
    methods: {
        onSubmit() {

            /*
             * TODO: Валидация Step 2: Если заполнены некоторые поля - меняем state и переходим к следующему шагу
             */
            //this.$store.dispatch('auth/registerState/stepTwo')
            //this.$router.push('/registration/reg-address')
        }
    },
    mounted() {
        console.log()
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', '/js/builds.js')
        document.head.appendChild(recaptchaScript)
    },
    created: function() {
        window.document.title = "Axirate | Паспортные данные"
    },

}
</script>

<style lang="scss" scoped>
#passport-born {
    display: block;
}
#passport-issued {
    display: block;
}

.c-form-fieldset__white-bg {
    display: block;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .7s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active до версии 2.1.8 */
    {
    opacity: 0;
}
</style>
