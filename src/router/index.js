import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import center from '@/view/center'

console.log(center)

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/center',
            name: 'center',
            component: center
        }
    ]
})
