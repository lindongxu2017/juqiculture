import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import center from '@/view/center'
import addchild from '@/view/add_child'
import mymatch from '@/view/my_match'
import matchlicense from '@/view/match_license'
import addresslist from '@/view/address'
import addressEdit from '@/view/address_edit'
import order from '@/view/order'

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
        },
        {
            path: '/center/addchild',
            name: 'addchild',
            component: addchild
        },
        {
            path: '/center/mymatch',
            name: 'mymatch',
            component: mymatch
        },
        {
            path: '/center/matchlicense',
            name: 'matchlicense',
            component: matchlicense
        },
        {
            path: '/center/addresslist',
            name: 'addresslist',
            component: addresslist
        },
        {
            path: '/center/addressEdit/:id',
            name: 'addressEdit',
            component: addressEdit
        },
        {
            path: '/center/order',
            name: 'order',
            component: order
        }
    ]
})
