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
            if (res.indexOf('401') > -1) {
                localStorage.access_token == ''
                location.href = location.host
            }
        })
    },
    // 服务器返回状态
    statusCode (res, fn) {
        var self = this
        switch (parseInt(res.data.error_code)) {
            case 0:
                fn(res.data)
                break
            default:
                // todo
                break
        }
    },

    // 登录

    getWxCode () {
        location.href = 'http://dev-manage.haosailei.cn/wechat/redirect' + '?url=' + escape(location.href) // getCode
    },

    login () {
        if (localStorage.access_token) {
            return
        }
        let code = this.GetQueryString('code')
        if (code) {
            this.ajax('POST', {code}, api.wx.login, res => {
                localStorage.access_token = res.data.access_token
                this.wxconfig()
            })
        } else {
            this.getWxCode()
        }
    },

    wxconfig () {
        this.ajax('GET', {
            'api': [
                'chooseImage','previewImage','uploadImage'
            ],
            url: window.location.href
        }, api.wx.config, res => {
            // console.log(res)
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: res.data.appId, // 必填，公众号的唯一标识
                timestamp: res.data.timestamp, // 必填，生成签名的时间戳
                nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
                signature: res.data.signature,// 必填，签名
                jsApiList: res.data.jsApiList // 必填，需要使用的JS接口列表
            });
        })
    },

    GetQueryString (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
        var r = window.location.search.substr(1).match(reg)
        if (r != null) return unescape(r[2]); return ''
    }
}