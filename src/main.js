import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueWarehouse from 'vue-warehouse'
import VueWarehouseSync from 'vue-warehouse/sync'
import VuexStore from './store/store'
import VueWarehouseStore from 'store'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);


VueWarehouseSync(VuexStore, VueWarehouseStore);
Vue.use(VueWarehouse, {
    store: VueWarehouseStore
});


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')