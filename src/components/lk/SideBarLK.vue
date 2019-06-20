<template>
    <div class="pltz-layout__sidebar">

        <nav class="c-site-menu">
            <ul class="c-site-menu__list">
                <li class="c-site-menu__item">
                    <router-link  
                    class="c-site-menu__link" 
                     v-bind:class="{'is-active': $route.meta.activeLink === navTitle1}"
                    :to="navLink1"
                     exact
                     >{{navTitle1}}</router-link>
                </li>
                <li class="c-site-menu__item">
                    <router-link  
                        class="c-site-menu__link" 
                         v-bind:class="{'is-active': $route.meta.activeLink === navTitle2}"
                        :to="navLink2"
                        exact
                     >{{navTitle2}}</router-link>
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
                completed: null
            },

        }
    },
    props: ['navTitle1','navLink1','navTitle2','navLink2'],
    created() {
        /*
         * ANCHOR: установка меню исходя из текущего положения (по активным займам)
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
