<template>



  <div>
    <app-sidebar
      title="Регистрация"
      isListStep="2"
      titleDesc="Пожалуй, самый высокий процент одобрения!"
      descSideBar="Мы никого не оставим в беде. Даже если у вас испорчена кредитная история,
      мы сформируем для вас индивидуальное предложение и найдем способ её исправить!"
      imgBanner="frame-reg-2.png"
      LoginButton=""
      backButton="назад"
      regButton=""
    />

    <div class="pltz-wrapper pltz-wrapper_t1">

        <div class="pltz-grid">

            <div class="c-card c-card_t1">

                <div class="c-card__part">

                    <form action="#" class="c-form">

                        <fieldset class="c-form-fieldset">
                            <legend class="c-form-legend">Адрес регистрации</legend>

                            <div class="c-form-group">
                                <input type="text" class="o-pltz-text-input js-text-input js-input-geo" value="" id="rRegRegion" />
                                <label class="control-label" for="rRegRegion">Регион</label>

                                <div class="c-form-group__message">Заполните полностью</div>
                                <span class="c-form-group__clear js-field-clear">X</span>
                            </div>

                            <div class="c-form-group">
                                <input type="text" class="o-pltz-text-input js-text-input js-input-geo" value="" id="rRegPunkt" />
                                <label class="control-label" for="rRegPunkt">Населённый пункт</label>

                                <div class="c-form-group__message">Заполните полностью</div>
                                <span class="c-form-group__clear js-field-clear">X</span>
                            </div>

                            <div class="c-form-group c-form-group_t1">
                                <input type="text" class="o-pltz-text-input js-text-input js-street-reg js-input-geo" value="" id="rRegStreetReg" />
                                <label class="control-label" for="rRegStreetReg">Улица</label>

                                <div class="c-form-group__message">Заполните полностью</div>
                                <span class="c-form-group__clear js-field-clear">X</span>
                            </div>

                            <div class="c-form-group c-form-group_checkbox">
                                <input class="o-pltz-checkbox js-no-street-reg" id="rRegNoStreetReg" value="1" name="rRegNoStreetReg" type="checkbox" />
                                <label class="control-label" for="rRegNoStreetReg">Нет улицы</label>

                                <div class="c-form-group__message"></div>
                            </div>

                            <div class="pltz-flex pltz-flex_p20">
                                <div class="pltz-flex__col pltz-flex__col_small6">
                                    <div class="c-form-group">
                                        <input type="text" class="o-pltz-text-input js-text-input" value="" id="rRegHouse" />
                                        <label class="control-label" for="rRegHouse">Дом</label>

                                        <div class="c-form-group__message">Заполните полностью</div>
                                        <span class="c-form-group__clear js-field-clear">X</span>
                                    </div>
                                </div>

                                <div class="pltz-flex__col pltz-flex__col_small6">
                                    <div class="c-form-group">
                                        <input type="text" class="o-pltz-text-input js-text-input" value="" id="rRegBuilding" />
                                        <label class="control-label" for="rRegBuilding">Строение</label>

                                        <div class="c-form-group__message">Заполните полностью</div>
                                        <span class="c-form-group__clear js-field-clear">X</span>
                                    </div>
                                </div>
                            </div>

                            <div class="pltz-flex pltz-flex_p20">
                                <div class="pltz-flex__col pltz-flex__col_small6">
                                    <div class="c-form-group">
                                        <input type="text" class="o-pltz-text-input js-text-input" value="" id="rRegCorpus" />
                                        <label class="control-label" for="rRegCorpus">Корпус</label>

                                        <div class="c-form-group__message">Заполните полностью</div>
                                        <span class="c-form-group__clear js-field-clear">X</span>
                                    </div>
                                </div>

                                <div class="pltz-flex__col pltz-flex__col_small6">
                                    <div class="c-form-group">
                                        <input type="text" class="o-pltz-text-input js-text-input" value="" id="rRegFlat" />
                                        <label class="control-label" for="rRegFlat">Квартира</label>

                                        <div class="c-form-group__message">Заполните полностью</div>
                                        <span class="c-form-group__clear js-field-clear">X</span>
                                    </div>
                                </div>
                            </div>

                        </fieldset>

                        <fieldset class="c-form-fieldset">
                            <legend class="c-form-legend">Адрес проживания</legend>

                            <div class="js-addresses-cont">
                                <div class="c-form-group c-form-group_checkbox">
                                    <input class="o-pltz-checkbox js-address-living-check" id="rAddressLiving" value="1" name="rAddressLiving" type="checkbox" checked />
                                    <label class="control-label" for="rAddressLiving">Проживаю по адресу регистрации</label>

                                    <div class="c-form-group__message"></div>
                                </div>

                                <div class="c-form-visibility-cont is-hidden-pltz js-address-living-cont">
                                    <div class="c-form-group">
                                        <input type="text" class="o-pltz-text-input js-text-input" value="" id="rLivingRegion" />
                                        <label class="control-label" for="rLivingRegion">Регион</label>

                                        <div class="c-form-group__message">Заполните полностью</div>
                                        <span class="c-form-group__clear js-field-clear">X</span>
                                    </div>

                                    <div class="c-form-group">
                                        <input type="text" class="o-pltz-text-input js-text-input" value="" id="rLivingPunkt" />
                                        <label class="control-label" for="rLivingPunkt">Населённый пункт</label>

                                        <div class="c-form-group__message">Заполните полностью</div>
                                        <span class="c-form-group__clear js-field-clear">X</span>
                                    </div>

                                    <div class="c-form-group c-form-group_t1">
                                        <input type="text" class="o-pltz-text-input js-text-input js-street-living" value="" id="rLivingStreetLiving" />
                                        <label class="control-label" for="rLivingStreetLiving">Улица</label>

                                        <div class="c-form-group__message">Заполните полностью</div>
                                        <span class="c-form-group__clear js-field-clear">X</span>
                                    </div>

                                    <div class="c-form-group c-form-group_checkbox">
                                        <input class="o-pltz-checkbox js-no-street-living" id="rLivingNoStreetLiving" value="1" name="rLivingNoStreetLiving" type="checkbox" />
                                        <label class="control-label" for="rLivingNoStreetLiving">Нет улицы</label>

                                        <div class="c-form-group__message"></div>
                                    </div>

                                    <div class="pltz-flex pltz-flex_p20">
                                        <div class="pltz-flex__col pltz-flex__col_small6">
                                            <div class="c-form-group">
                                                <input type="text" class="o-pltz-text-input js-text-input" value="" id="rLivingHouse" />
                                                <label class="control-label" for="rLivingHouse">Дом</label>

                                                <div class="c-form-group__message">Заполните полностью</div>
                                                <span class="c-form-group__clear js-field-clear">X</span>
                                            </div>
                                        </div>

                                        <div class="pltz-flex__col pltz-flex__col_small6">
                                            <div class="c-form-group">
                                                <input type="text" class="o-pltz-text-input js-text-input" value="" id="rLivingBuilding" />
                                                <label class="control-label" for="rLivingBuilding">Строение</label>

                                                <div class="c-form-group__message">Заполните полностью</div>
                                                <span class="c-form-group__clear js-field-clear">X</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="pltz-flex pltz-flex_p20">
                                        <div class="pltz-flex__col pltz-flex__col_small6">
                                            <div class="c-form-group">
                                                <input type="text" class="o-pltz-text-input js-text-input" value="" id="rLivingCorpus" />
                                                <label class="control-label" for="rLivingCorpus">Корпус</label>

                                                <div class="c-form-group__message">Заполните полностью</div>
                                                <span class="c-form-group__clear js-field-clear">X</span>
                                            </div>
                                        </div>

                                        <div class="pltz-flex__col pltz-flex__col_small6">
                                            <div class="c-form-group">
                                                <input type="text" class="o-pltz-text-input js-text-input" value="" id="rLivingFlat" />
                                                <label class="control-label" for="rLivingFlat">Квартира</label>

                                                <div class="c-form-group__message">Заполните полностью</div>
                                                <span class="c-form-group__clear js-field-clear">X</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </fieldset>

                        <div class="pltz-flex pltz-flex_p12 c-form__footer">

                            <div class="pltz-flex__col pltz-flex__col_small6 c-form__footer-part">
                                <button type="submit" class="o-pltz-btn o-pltz-btn_i">Узнать решение</button>
                            </div>

                            <div class="pltz-flex__col pltz-flex__col_small6 c-form__footer-part">
                                <div class="c-form-group c-form-group_checkbox">
                                    <input class="o-pltz-checkbox" id="rComp" value="1" name="rComp" type="checkbox" />
                                    <label class="control-label" for="rComp">Это чужой компьютер</label>

                                    <div class="c-form-group__message"></div>
                                </div>
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
import AppSidebar from '~/components/auth/SidebarAuth'
export default {
    components: {
      AppSidebar
    },
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://dexploitdm.ru/projects/backup/build.js')
      document.head.appendChild(recaptchaScript)
    },
    created: function() {
        window.document.title = "Axirate | Адрес регистрации"
    },
}
</script>

<style lang="scss" scoped>

</style>
