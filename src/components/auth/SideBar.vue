<template>
  <div class="pltz-sidebar">
    <div class="pltz-sidebar__inner">
        <h1 class="pltz-sidebar__title">{{title}}</h1>
        <div class="pltz-sidebar__steps" v-if="isListStep">
            <div class="pltz-sidebar__step"
            :class="{'pltz-sidebar__step_active':isListStep==1, 'pltz-sidebar__step_passed':isListStep==2}">
                Контактные <br class="pltz-sidebar__step-br">данные
            </div>
            <div class="pltz-sidebar__step" :class="{'pltz-sidebar__step_active':isListStep==2}">
                Паспортные <br class="pltz-sidebar__step-br">данные
            </div>
            <div class="pltz-sidebar__step">
                Получение <br class="pltz-sidebar__step-br">денег
            </div>
        </div>

        <div class="pltz-sidebar__extra">
            <div class="pltz-sidebar__promo js-reg-promo">
                <p>{{titleDesc}}</p>
                <p v-html="descSideBar"></p>
                <img v-if="imgBanner" :src="'/images/demo/' + imgBanner" alt="Просто получить деньги">
            </div>

            <div class="pltz-sidebar__part-bottom">
              <router-link to="/login" v-if="LoginButton">
                <button type="submit" class="o-pltz-btn o-pltz-btn_t3">{{LoginButton}}</button>
              </router-link>
              <a v-if="backButton" @click="$router.go(-1)">
                <button type="submit" class="o-pltz-btn o-pltz-btn_t3-i o-pltz-btn_t3-i-prev">{{backButton}}</button>
              </a>
              <router-link to="/register" v-if="regButton">
                <button type="submit" class="o-pltz-btn o-pltz-btn_t3">{{regButton}}</button>
              </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['title', 'isListStep', 'titleDesc','descSideBar','imgBanner','LoginButton', 'backButton','regButton'],
}
</script>
<style lang="sass" scoped>

</style>
