import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import stepOne from './middleware/auth/registerSteps/one';

Vue.use(Router)

export default new Router({
        mode: 'history',
        routes: [{
                path: '/',
                name: 'home',
                component: Home,
                props: true,
                meta: {
                    basicLayout: true,
                },
            },
            {
                path: '/about',
                name: 'about',
                props: true,
                meta: {
                    basicLayout: true,
                },
                component: () =>
                    import ('./views/About.vue')
            },
            {
                path: '/login',
                name: 'login',
                props: true,
                meta: {
                    authLayout: true,
                },
                component: () =>
                    import ('./views/auth/Login.vue')
            },
            {
                path: '/valid',
                name: 'valid',
                props: true,
                meta: {
                    authLayout: true,
                },
                component: () =>
                    import ('./views/auth/Valid.vue')
            },
            /**************
             * Регистрация
             ***************/
            {
                path: '/register',
                name: 'register',
                props: true,
                meta: {
                    authLayout: true,
                },
                component: () =>
                    import ('./views/auth/register/Index.vue')
            },
            {
                path: '/register/passport-data',
                name: 'passport-data',
                props: true,
                meta: {
                    authLayout: true,
                    middleware: stepOne,
                },
                component: () =>
                    import ('./views/auth/register/Passport-data.vue')
            },
            {
                path: '/register/anket-data',
                name: 'anket-data',
                props: true,
                meta: {
                    authLayout: true,
                    middleware: stepOne,
                },
                component: () =>
                    import ('./views/auth/register/Anket-data.vue')
            },
            {
                path: '/register/reg-address',
                name: 'reg-address',
                props: true,
                meta: {
                    authLayout: true,
                },
                component: () =>
                    import ('./views/auth/register/Reg-address.vue')
            },
            {
                path: '/register/check-data',
                name: 'check-data',
                props: true,
                meta: {
                    authLayout: true,
                },
                component: () =>
                    import ('./views/auth/register/Check-data.vue')
            },
            {
                path: '/register/data-fail',
                name: 'data-fail',
                props: true,
                meta: {
                    authLayout: true,
                },
                component: () =>
                    import ('./views/auth/register/Data-fail.vue')
            },
            {
                path: '/register/fail-docs',
                name: 'fail-docs',
                props: true,
                meta: {
                    authLayout: true,
                },
                component: () =>
                    import ('./views/auth/register/Fail-docs.vue')
            },
            /**************
             * Личный кабинет
             ***************/
            {
                path: '/lk/getting-money/apply-loan',
                name: 'apply-loan',
                props: true,
                meta: {
                    activeLink: 'Получить деньги',
                    LkLayout: true,
                },
                component: () =>
                    import ('./views/lk/getting-money/Apply-loan.vue')
            },
            //Документы
            {
                path: '/lk/docs',
                name: 'docs-index',
                props: true,
                meta: {
                    activeLink: 'Мои документы',
                    LkLayout: true,
                },
                component: () =>
                    import ('./views/lk/docs/Index.vue')
            },
            //Активные займы
            {
                path: '/lk/active-loans',
                name: 'active-loans',
                props: true,
                meta: {
                    //activeLink: 'Внести платёж',
                    LkLayout: true,
                },
                component: () =>
                    import ('./views/lk/active-loans/Index.vue')
            },
        ]
    })
    /*
     * TODO: Разобрать с активность текущего раздела
     */