<template>
    <div class="pltz-layout__sidebar">

        <nav class="c-site-menu">
            <ul class="c-site-menu__list">


                <li class="c-site-menu__item">
                    <router-link v-if="this.isOverdueLoans === true"
                        v-bind:class="{'is-active': isActive}"
                        class="c-site-menu__link" to="/lk/active-loans" exact>Внести платёж</router-link>
                    <router-link v-if="this.isOverdueLoans === false"
                        v-bind:class="{'is-active': isActive}"
                        class="c-site-menu__link" to="/lk/active-loans" exact>Погасить</router-link>
                </li>

                <li class="c-site-menu__item">

                    <!--Если активных займов нет-->
                    <router-link  v-if="this.issetActiveLoans === false"
                        class="c-site-menu__link"
                        v-bind:class="{'is-active': isActive2}"
                        to="/lk/params/apply-loan" exact>Получить деньги</router-link>
                    <router-link  v-if="this.issetActiveLoans === true"
                        v-bind:class="{'is-active': isActive2}"
                        class="c-site-menu__link"
                        to="/lk/params/apply-loan" exact>Оплатить</router-link>


                </li>
            </ul>
        </nav>

        <nav class="c-site-menu">
            <ul class="c-site-menu__list">
                <li class="c-site-menu__item">
                    <router-link class="c-site-menu__link" 
                    v-bind:class="{'is-active': $route.meta.activeLink === 'Мои документы'}"
                    to="/lk/docs" exact>Мои документы</router-link>
                </li>
                <li class="c-site-menu__item">
                    <router-link class="c-site-menu__link" 
                    v-bind:class="{'is-active': $route.meta.activeLink === 'Моя история'}"
                    to="/" exact>Моя история</router-link>
                </li>
            </ul>
        </nav>

        <nav class="c-site-menu">
            <ul class="c-site-menu__list">
                <li class="c-site-menu__item">
                    <router-link class="c-site-menu__link" 
                    v-bind:class="{'is-active': $route.meta.activeLink === 'Мои заявки'}"
                    to="/" exact>Мои заявки</router-link>
                </li>
                <li class="c-site-menu__item">
                    <router-link class="c-site-menu__link" 
                    v-bind:class="{'is-active': $route.meta.activeLink === 'Настройки'}"
                    to="/" exact>Настройки</router-link>
                </li>
                <li class="c-site-menu__item">
                    <router-link class="c-site-menu__link"
                    v-bind:class="{'is-active': $route.meta.activeLink === 'Поддержка'}"
                     to="/" exact>Поддержка</router-link>
                </li>
                <li class="c-site-menu__item">
                    <router-link class="c-site-menu__link"
                     v-bind:class="{'is-active': $route.meta.activeLink === 'Связаться с нами'}"
                    to="/" exact>Связаться с нами</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            errors: [],
            isActiveNav: {
                completed: null,

            },
            issetActiveLoans: false,
            isOverdueLoans: false
        }
    },
    props: ['isActive','isActive2'],
    created() {
        /*
         * ANCHOR: установка меню исходя из текущего положения (по активным займам)
         * Получение данных текущего пользователя
         */
        axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
            .then(response => {
                this.isActiveNav = response.data
            }).catch(e => {
            this.errors.push(e)
        })
    },
}
</script>
