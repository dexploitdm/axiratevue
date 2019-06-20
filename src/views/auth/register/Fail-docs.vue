<template>
    <div>
        <SideBar 
           title="Регистрация"
          isListStep="2"
          titleDesc="По секрету - мы уже приняли решение"
          descSideBar='Вам предварительно одобрен заём. Чтобы узнать его сумму, поскорее закончите последний этап регистрации'
          imgBanner="frame-reg-3.png" />
        <div class="pltz-wrapper pltz-wrapper_t1">

            <div class="pltz-grid">

                <div class="c-card c-card_t1">

                    <div class="c-card__part">

                        <form action="#" class="c-form">
                            <h1 class="o-content-h1 o-content-h1_feat">Подтверждение анкетных данных</h1>

                            <fieldset class="c-form-fieldset">

                                <p class="c-form-fieldset__descr">
                                    Загрузите цветную скан-копию или фотографию документа.
                                    На изображении должны быть чётко различимы все реквизиты.
                                </p>

                                <div class="c-form__subtitle">Паспорт FAIL</div>

                                <div class="c-form-upload-block js-upload-block is-file-verify-fail">
                                    <div class="c-form-upload-block__part c-form-upload-block__part_photo">

                                        <div class="c-upload-cont c-upload-cont_demo js-img-demo">
                                            <div class="c-upload-cont__img">
                                                <img src="/images/im_passport_ex.png" alt="demo">
                                            </div>
                                        </div>

                                        <div class="c-upload-cont c-upload-cont_img">
                                            <div class="c-upload-cont__message c-upload-cont__message_success">Принято
                                            </div>
                                            <div class="c-upload-cont__message c-upload-cont__message_error">Отклонено
                                            </div>

                                            <div class="c-upload-cont__img js-upload-img">
                                                <img src="/images/demo/scan-passport-demo-1.png" alt="scan">
                                            </div>
                                        </div>

                                    </div>

                                    <div class="c-form-upload-block__part c-form-upload-block__part_info">

                                        <div class="c-form-upload-block__start">
                                            <div class="c-form-upload-block__info js-img-info"></div>

                                            <p class="c-form__label-group">
                                                Разворот паспорта с вашей фотографией.
                                            </p>
                                        </div>

                                        <div class="c-form-upload-block__success">
                                            <p class="c-form__label-group c-form__label-group_success">
                                                Документ прошёл проверку
                                            </p>
                                        </div>

                                        <div class="c-form-upload-block__error">
                                            <p class="c-form__label-group c-form__label-group_error">
                                                Документ не прошёл проверку
                                            </p>
                                            <p class="c-form__label-group">
                                                Комментарий оператора для пользователя: Паспорт порван, пальцы в кадре.
                                            </p>
                                        </div>

                                        <div class="c-form-upload-block__part-bottom c-input-file">
                                            <div class="c-form-group">

                                                <div class="c-input-file__hint js-upload-hint">jpg, png, gif, tiff,
                                                    bmp<br> максимальный размер файла 5Mb
                                                </div>

                                                <button class="o-pltz-btn o-pltz-btn_t2 c-input-file__fake js-upload-fake-btn"
                                                        type="button">Загрузить файл
                                                </button>

                                                <input type="file" class="c-input-file__control js-scan-upload">

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="c-form__subtitle">ИНН или СНИЛС на выбор FAIL</div>

                                <div class="c-form-upload-block js-upload-block is-file-verify-fail">
                                    <div class="c-form-upload-block__part c-form-upload-block__part_photo">

                                        <div class="c-upload-cont c-upload-cont_demo js-img-demo">
                                            <div class="c-upload-cont__img">
                                                <img src="/images/im_inn_ex.png" alt="demo" class="js-img-demo-inn">
                                                <img src="/images/im_snils_ex.png" alt="demo"
                                                     class="is-hidden-pltz js-img-demo-snils">
                                            </div>
                                        </div>

                                        <div class="c-upload-cont c-upload-cont_img">
                                            <div class="c-upload-cont__message c-upload-cont__message_success">Принято
                                            </div>
                                            <div class="c-upload-cont__message c-upload-cont__message_error">Отклонено
                                            </div>

                                            <div class="c-upload-cont__img js-upload-img"><img
                                                    src="/images/im_inn_ex.png" alt="scan"></div>
                                        </div>

                                    </div>

                                    <div class="c-form-upload-block__part c-form-upload-block__part_info">

                                        <div class="c-form-upload-block__start">
                                            <div class="c-form-upload-block__info js-img-info"></div>

                                            <p class="c-form__label-group">
                                                Лицевая сторона свидетельства
                                            </p>

                                        </div>

                                        <div class="c-form-upload-block__success">
                                            <p class="c-form__label-group c-form__label-group_success">
                                                Документ прошёл проверку
                                            </p>
                                        </div>

                                        <div class="c-form-upload-block__error">
                                            <p class="c-form__label-group c-form__label-group_error">
                                                Документ не прошёл проверку
                                            </p>
                                            <p class="c-form__label-group">
                                                Комментарий оператора для пользователя: Паспорт порван, пальцы в кадре.
                                            </p>
                                        </div>

                                        <div class="c-form-upload-block__type">
                                            <div class="pltz-chips-cont">
                                                <div class="pltz-chips-cont__item">
                                                    <input type="radio" id="radio11" name="radio2[]" value="inn"
                                                           class="o-chips js-doc-type-choice" checked/>
                                                    <label for="radio11" class="o-chips-label">ИНН</label>
                                                </div>

                                                <div class="pltz-chips-cont__item">
                                                    <input type="radio" id="radio12" name="radio2[]" value="snils"
                                                           class="o-chips js-doc-type-choice"/>
                                                    <label for="radio12" class="o-chips-label">СНИЛС</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="c-form-upload-block__part-bottom c-input-file">
                                            <div class="c-form-group">

                                                <div class="c-input-file__hint js-upload-hint">jpg, png, gif, tiff,
                                                    bmp<br> максимальный размер файла 5Mb
                                                </div>

                                                <button class="o-pltz-btn o-pltz-btn_t2 c-input-file__fake js-upload-fake-btn"
                                                        type="button">Загрузить файл
                                                </button>

                                                <input type="file" class="c-input-file__control js-scan-upload">

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </fieldset>

                            <div class="pltz-flex pltz-flex_p12 c-form__footer">

                                <div class="pltz-flex__col pltz-flex__col_small12 c-form__footer-part">
                                    <button type="submit" class="o-pltz-btn o-pltz-btn_i">Продолжить</button>
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
        data() {
            return {
                errors: [],
            }
        },
        components: {
            SideBar,
            AppButton
        },
        methods: {

            correctForm: function (e) {

                if (this.rBirthDate) {
                    if (!$(".c-form-group").hasClass("is-error")) {

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
            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', '/js/builds.js')
            document.head.appendChild(recaptchaScript)
        },
        created: function () {
            window.document.title = "Axirate | Документ не прошёл проверку"
        },

    }
</script>
