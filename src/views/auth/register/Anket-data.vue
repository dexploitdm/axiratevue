<template>
    <div>
      <SideBar
        title="Регистрация"
        isListStep="2"
        titleDesc="По секрету - мы уже приняли решение"
        descSideBar="Вам предварительно одобрен заём. Чтобы узнать его сумму, поскорее закончите последний этап регистрации"
        imgBanner="frame-reg-3.png"
        LoginButton=""
        backButton=""
        regButton=""
      />

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

                              <div class="c-form__subtitle">Паспорт</div>

                              <div class="c-form-upload-block js-upload-block">
                                  <div class="c-form-upload-block__part c-form-upload-block__part_photo">

                                      <div class="c-upload-cont c-upload-cont_demo js-img-demo">
                                          <div class="c-upload-cont__img">
                                              <img src="/images/im_passport_ex.png" alt="demo">
                                          </div>
                                      </div>

                                      <div class="c-upload-cont c-upload-cont_img">
                                          <div class="c-upload-cont__message c-upload-cont__message_success">Принято</div>
                                          <div class="c-upload-cont__message c-upload-cont__message_error">Отклонено</div>

                                          <div class="c-upload-cont__img js-upload-img"></div>
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

                                              <div class="c-input-file__hint js-upload-hint">jpg, png, gif, tiff, bmp<br> максимальный размер файла 5Mb</div>

                                              <button class="o-pltz-btn o-pltz-btn_t2 c-input-file__fake js-upload-fake-btn" type="button">Загрузить файл</button>

                                              <input type="file" class="c-input-file__control js-scan-upload">

                                          </div>
                                      </div>

                                  </div>
                              </div>


                              <div class="c-form__subtitle">Банковская карта</div>

                              <div class="c-form-upload-block js-upload-block">
                                  <div class="c-form-upload-block__part c-form-upload-block__part_photo">

                                      <div class="c-upload-cont c-upload-cont_demo js-img-demo">
                                          <div class="c-upload-cont__img">
                                              <img src="/images/im_card.png" alt="demo">
                                          </div>
                                      </div>

                                      <div class="c-upload-cont c-upload-cont_img">
                                          <div class="c-upload-cont__message c-upload-cont__message_success">Принято</div>
                                          <div class="c-upload-cont__message c-upload-cont__message_error">Отклонено</div>

                                          <div class="c-upload-cont__img js-upload-img"></div>
                                      </div>

                                  </div>

                                  <div class="c-form-upload-block__part c-form-upload-block__part_info">

                                      <div class="c-form-upload-block__start">
                                          <div class="c-form-upload-block__info js-img-info"></div>

                                          <p class="c-form__label-group">
                                              Фото лицевой банковской карты
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

                                              <div class="c-input-file__hint js-upload-hint">jpg, png, gif, tiff, bmp<br> максимальный размер файла 5Mb</div>

                                              <button class="o-pltz-btn o-pltz-btn_t2 c-input-file__fake js-upload-fake-btn" type="button">Загрузить файл</button>

                                              <input type="file" class="c-input-file__control js-scan-upload">

                                          </div>
                                      </div>

                                  </div>
                              </div>

                          </fieldset>

                          <div class="pltz-flex pltz-flex_p12 c-form__footer">


                              <div class="pltz-flex__col pltz-flex__col_small12 c-form__footer-part">
                                  <p style="text-align: left; margin: -20px 0 28px 0;">
                                      Если вы отказались от&nbsp;прикрепления документов
                                      по&nbsp;тем или&nbsp;иным причинам, то&nbsp;единственным способом перечисления денег является платёжная система Contact.</p>
                                  
                                  <AppButton
                                    title = "CONTACT"
                                    cls = "o-pltz-btn o-pltz-btn_i"
                                    type = "submit"
                                  />
                                  <AppButton
                                    title = "Подать заявку"
                                    cls = "o-pltz-btn o-pltz-btn_i"
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
      }
    },
    layout: 'auth/identification',
    head: {
        title: 'Регистрация 01',
    },
    components: {
        SideBar, AppButton
    },
     mounted() {

        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', '/builds.js')
        document.head.appendChild(recaptchaScript)

    },
}
</script>

<style lang="scss" scoped>

</style>
