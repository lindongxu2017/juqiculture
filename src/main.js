// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'

import Vant from 'vant';
import 'vant/lib/index.css';

axios.interceptors.request.use(config => {
    if (config.method == 'post') config.data = qs.stringify(config.data);
    return config
}, error => {
    return Promise.reject(error)
});

Vue.use(Vant);

Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
