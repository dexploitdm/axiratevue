import Vue from 'vue'
import Vuex from 'vuex'
import register from './modules/auth/registerState/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        register
    },
    strict: debug,
})