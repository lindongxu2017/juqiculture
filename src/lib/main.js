/* eslint-disable no-new */
import axios from 'axios'
import qs from 'qs'
import api from './api.js'
import { Toast } from 'vant'

export default {
    ajax (method, data, url, fn, error) {
         axios({
            method, data, url,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {
            this.statusCode(res, fn)
        }).catch(res => {
            if (error) {
                error (res)
            } else {
                // Toast()
            }
        })
    },
    // 服务器返回状态
    statusCode (res, fn) {
        var self = this
        switch (parseInt(res.data.code)) {
            case 200:
                fn(res.data)
                break
            default:
                // todo
                break
        }
    },

    // 登录

    login () {
        location.href = 'http://dev-manage.haosailei.cn/wechat/redirect' + '?url=' + escape(location.href)
    },

    GetQueryString (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
        var r = window.location.search.substr(1).match(reg)
        if (r != null) return unescape(r[2]); return ''
    }
}