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
    ]
})