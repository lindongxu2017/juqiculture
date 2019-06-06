export default {
    wx: {
        code: '/wechat/redirect', // 微信code
        login: '/wechat/login',
        config: '/wechat/config'
    },
    center: {
        order: '/wechat/user/my-order',
        matchlist: '/wechat/user/my-enroll-match',
        address: '/wechat/shipping-address'
    },
    index: {
        banner: '/wechat/advertising'
    },
    competition: {
        center: '/wechat/match/1/zones'
    },
    own: {
        code: '/Api/Login/get_oauth_redirect_url',
        login: '/Api/Login/wx_oauth2_login',
        userinfo: '/Api/Vip/getUserInfo',
        config: 'Api/Index/get_js_sign',
        partner: '/Api/Index/partner',
        artical: 'Api/Artical/index',
        articaldetail: '/Api/Artical/detail',
        banner: '/Api/Index/ads_list',
        productlist: '/Api/Goods/index',
        productdetail: '/Api/Goods/detail',
        createorder: '/Api/Order/create_order',
        shopcar: '/Api/Order/addto_basket',
        pay: '/Api/Order/order_pay',
        addresslist: '/Api/VipAddress/index',
        addressadd: '/Api/VipAddress/add',
        addressdel: '/Api/VipAddress/del',
        addressdetail: '/Api/VipAddress/detail',
        addressdefault: '/Api/VipAddress/set_default',
        area: '/Api/Index/getAllLocation',
        orderlist: '/Api/Order/order_list'
    },
}