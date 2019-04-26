import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
// 精彩直播
import liveBroadcast from '@/view/liveBroadcast'
// 人气产品
import popularProducts from '@/view/popular_products'
// 赛事中心
import competitionCenter from '@/view/competition_center'
// 大赛主页
import competitionIndex from '@/view/competition_index'
// 榜单页
import competitionList from '@/view/competition_list'
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
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/liveBroadcast',
            name: 'liveBroadcast',
            component: liveBroadcast
        },
        {
            path: '/popularProducts',
            name: 'popularProducts',
            component: popularProducts
        },
        {
            path: '/competitionIndex',
            name: 'competitionIndex',
            component: competitionIndex
        },
        {
            path: '/competitionList',
            name: 'competitionList',
            component: competitionList
        },
        {
            path: '/competitionCenter',
            name: 'competitionCenter',
            component: competitionCenter
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
