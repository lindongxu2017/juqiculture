<template>
    <div class="productDetail">
        <img class="product-img" :src="info.pic_url">
        <div class="product-info">
            <div class="title" v-html="info.name"></div>
            <div class="price-num">
                <div class="price">￥<span v-html="info.price"></span>元</div>
                <div class="num">仅剩<span v-html="info.num"></span><span v-html="info.unit"></span></div>
            </div>
        </div>
        <van-cell-group>
            <van-cell title="收货地址" is-link :value="address.address ? '配送至:' + address.address : '请选择配送地址'" @click="golist" />
            <!-- <van-cell title="参数" is-link :value="address.address" @click="golist" /> -->
        </van-cell-group>
        <div class="purchase-btn" @click="purchase">立即购买</div>
        
        <van-popup v-model="showBase" class="sku" position="bottom">
            <div class="close"><img @click="showBase = false" src="@/assets/close.png"></div>
            <div class="classfiy" v-for="(item, index) in info.skuinfo">
                <div class="sku-title" v-html="item.attrlabel"></div>
                <div class="list">
                    <span class="item" @click="select(index, order)" :class="[obj.active == 1 ? 'active' : '' ]" v-for="(obj, order) in item.allitems" v-html="obj.name"></span>
                </div>
            </div>
            <div class="classfiy">
                <div class="sku-title">数量</div>
                <van-stepper :value="num" @change="onChange"/>
            </div>
            <van-submit-bar class="btn-buy" :price="parseFloat(info.real_price) * num * 100" button-text="支付" @submit="onSubmit"/>
        </van-popup>

    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'productDetail',
        data () {
            return {
                info: {},
                address: {},
                num: 1,
                showBase: false
            }
        },
        mounted () {
            this.getDetail()
            this.getAddressList()
        },
        methods: {
            getDetail () {
                let id = this.$route.params.id
                this.fn.ajax('GET', {id}, this.api.own.productdetail, res => {
                    // console.log(res)
                    this.info = res.data
                    res.data.skuinfo.map((item, index) => {
                        item.allitems.map((obj, order) => {
                            if (order == 0) {
                                obj.active = 1
                            } else {
                                obj.active = 0
                            }
                        })
                    })
                })
            },
            getAddressList () {
                this.fn.ajax('GET', {}, this.api.own.addresslist, res => {
                    // console.log(res)
                    res.data.list.map((item, index) => {
                        if (item.is_default == 1) {
                            this.address = item
                        }
                    })
                })
            },
            disableStepperInput (e) {
                console.log(e)
            },
            onAddCartClicked (e) {
                console.log(e)
            },
            onBuyClicked (e) {
                console.log(e)
            },
            golist () {
                this.$router.push({name: 'addresslist'})
            },
            select (index, order) {
                this.info.skuinfo.map((item, order) => {
                    item.allitems.map((obj, key) => {
                        if (index == order) {
                            obj.active = 0
                        }
                    })
                })
                let item = JSON.parse(JSON.stringify(this.info.skuinfo[index]))
                item.allitems[order].active = 1
                this.info.skuinfo.splice(index, 1, item)
            },
            onChange (e) {
                this.num = e
            },
            purchase () {
                this.showBase = true
            },
            onSubmit () {
                let id_arr = []
                this.info.skuinfo.map((item, index) => {
                    item.allitems.map((obj, order) => {
                        if (obj.active == 1) {
                            id_arr.push(obj.path)
                        }
                    })
                })
                id_arr.unshift(this.info.id)
                this.fn.ajax('POST', {
                    sid: 0,
                    num: this.num,
                    sku: id_arr.join('-'),
                    goodsid: this.info.id,
                }, this.api.own.shopcar, res => {
                    this.fn.ajax('POST', {
                        paytype: 'wxpay',
                        delivery_type: '1',
                        addressid: this.address.id
                    }, this.api.own.createorder, res => {
                        // console.log(res)
                        this.pay(res.data.pay_order_id)
                    })
                })
            },
            pay (id) {
                const self = this
                this.fn.ajax('POST', {
                    orderid: id,
                    wxpay_type: 1
                }, this.api.own.pay, res => {
                    WeixinJSBridge.invoke(
                        'getBrandWCPayRequest', {
                        "appId": res.data.pay_data.appId,     //公众号名称，由商户传入     
                        "timeStamp": res.data.pay_data.timeStamp,         //时间戳，自1970年以来的秒数     
                        "nonceStr": res.data.pay_data.nonceStr, //随机串     
                        "package": res.data.pay_data.package,     
                        "signType": res.data.pay_data.signType,         //微信签名方式：     
                        "paySign": res.data.pay_data.paySign //微信签名 
                    },
                    function (res){
                        if(res.err_msg == "get_brand_wcpay_request:ok" ){
                            // 使用以上方式判断前端返回,微信团队郑重提示：
                            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                            self.$router.replace({name: 'order', params: {type: 2}})
                        } 
                    }); 

                })
            }
        },
        components: {

        }
    }
</script>

<style type="text/css">
    .productDetail .van-cell--clickable:active {
        background-color: #fff;
    }
    .productDetail .van-cell__title {
        width: 70px;
        flex: none;
        color: #999;
    }
    .productDetail .van-cell__value {
        text-align: left;
        width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333;
    }
    .productDetail .van-cell-group.van-hairline--top-bottom:after {
        display: none;
    }
</style>

<style type="text/css" scoped>
    .productDetail {
        min-height: 100%;
        background-color: #F5F5F5;
        padding-bottom: 94px;
    }
    .product-img {
        display: block;
        width: 100%;
    }
    .product-info {
        padding: 20px 30px;
        background-color: #fff;
        margin-bottom: 16px;
    }
    .title {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .price-num {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
    }
    .price {
        color: #D0021B;
    }
    .num {
        color: #9B9B9B;
    }
    .purchase-btn {
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        font-size: 36px;
        color: #fff;
        text-align: center;
        line-height: 94px;
        background-color: #108EE9;
    }
    .sku {
        height: 700px;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        padding: 30px 0 120px;
        font-weight: normal;
    }
    .sku .close {
        padding: 0 30px;
        text-align: right;
    }
    .sku .close img {
        width: 40px;
        line-height: 40px;
    }
    .sku .classfiy {
        padding: 0 30px;
    }
    .sku .classfiy .sku-title {
        font-size: 32px;
        margin-bottom: 20px;
    }
    .sku .classfiy .item {
        font-size: 28px;
        padding: 10px 20px;
        border: 1px solid #eee;
        margin-right: 20px;
        margin-bottom: 20px;
        display: inline-block;
        color: #666;
        border-radius: 4px;
    }
    .sku .classfiy .item.active {
        background-color: #f44;
        color: #fff;
        border-color: #f44;
    }
</style>