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
// 大赛报名
import competitionRegistration from '@/view/competition_registration'
// 选手主页
import contestantPage from '@/view/contestant_page'
// 选手礼物
import contestantGift from '@/view/contestant_gift'

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
            path: '/competitionRegistration',
            name: 'competitionRegistration',
            component: competitionRegistration
        },
        {
            path: '/competitionCenter',
            name: 'competitionCenter',
            component: competitionCenter
        },
        {
            path: '/contestantPage',
            name: 'contestantPage',
            component: contestantPage
        },
        {
            path: '/contestantGift',
            name: 'contestantGift',
            component: contestantGift
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
