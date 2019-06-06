/* eslint-disable no-new */
import axios from 'axios'
import qs from 'qs'
import api from './api.js'
import { Toast } from 'vant'

export default {
    ajax (method, data, url, fn, error) {
        axios({
            method, data, url, params: data,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + localStorage.access_token
            }
        }).then(res => {
            this.statusCode(res, fn)
        }).catch(res => {
            console.log(res)
            /*if (res.indexOf('401') > -1) {
                localStorage.access_token == ''
                location.href = location.host
            }*/
        })
    },
    // 服务器返回状态
    statusCode (res, fn) {
        var self = this
        switch (parseInt(res.data.error_code)) {
            case 0:
                fn(res.data)
                break
            case 200:
                fn(res.data)
                break
            case 99999:
                localStorage.removeItem('access_token')
                location.href = location.protocol + '//' + location.hostname
                break
            case 10000:
                window.toast(res.data.msg)
                break
            default:
                // todo
                break
        }
    },

    // 公司公众号 登录

    getMyWxCode () {
        this.ajax('POST', {
            redirect_url: 'http://juqi.qht17.com'
        }, api.own.code, res => {
            location.href = res.data.url
        })
    },

    // 客户公众号 登录

    getWxCode () {
        location.href = 'http://dev-manage.haosailei.cn/wechat/redirect?url=' + escape(location.href) // getCode
    },

    login () {
        if (localStorage.access_token) {
            this.getUserInfo()
            return
        }
        let code = this.GetQueryString('code')
        // let url = api.wx.login
        let url = api.own.login
        if (code) {
            this.ajax('POST', {code}, url, res => {
                localStorage.access_token = res.data.access_token
                location.href = location.protocol + '//' + location.hostname
            })
        } else {
            // this.getWxCode()
            this.getMyWxCode()
        }
    },

    getUserInfo () {
        this.ajax('GET', {}, api.own.userinfo, res => {
            localStorage.userinfo = res.data
        })
    },

    wxconfig () {
        if (window.location.href.indexOf('from=singlemessage&isappinstalled') > 0) {
            location.href = location.protocol + '//' + window.location.host + '?from=singlemessage%26isappinstalled'
            return
        }
        this.ajax('POST', {
            url: window.location.href
        }, api.own.config, res => {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: res.data.appid, // 必填，公众号的唯一标识
                timestamp: res.data.timestamp, // 必填，生成签名的时间戳
                nonceStr: res.data.noncestr, // 必填，生成签名的随机串
                signature: res.data.signature,// 必填，签名
                jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareQZone', 'onMenuShareWeibo'] // 必填，需要使用的JS接口列表
            });
            wx.error(function(res){
                console.log(res)
            });
            this.wxShareList()
        })
    },

    wxShareList () {
        var title = 'JQW聚齐文化'
        var desc = '点击了解JQW旗下赛事信息'
        var link = window.location.href
        if (link.indexOf('/#')) {
            link = window.location.href.split('/#')[0]
        }
        var imgUrl = 'http://juqi.qht17.com' + require('../assets/logo.png')
        wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
            wx.updateAppMessageShareData({ 
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                  // 设置成功
                }
            })
            wx.updateTimelineShareData({
                title: title, // 分享标题
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                  // 设置成功
                }
            })
            wx.onMenuShareQZone({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                  // 设置成功
                }
            })
            wx.onMenuShareWeibo({ 
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                  // 设置成功
                }
            })
        });
    },

    GetQueryString (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
        var r = window.location.search.substr(1).match(reg)
        if (r != null) return unescape(r[2]); return ''
    }
}