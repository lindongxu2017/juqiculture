<template>
    <div class="signup">
        <div @click="goDetal">
            <div class="order-state">
                <div class="num" v-html="item.ctime"></div>
                <div class="state" v-html="state[item.status]"></div>
            </div>
            <div class="order-item">
                <img :src="item.items[0].pic_url">
                <div class="info">
                    <div class="title van-ellipsis" v-html="item.items[0].name"></div>
                    <div class="num">
                        <span class="lable">数量</span>
                        <span v-html="item.totalnum"></span>
                    </div>
                    <div class="price">￥ <span v-html="item.payprice"></span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'signup',
        data () {
            return {
                state: {
                    0: '已取消',
                    1: '未付款',
                    2: '已付款',
                    3: '已发货',
                    4: '退货中',
                    5: '已完成',
                    6: '已关闭',
                    7: '已退货'
                }
            }
        },
        methods: {
            goDetal () {
                this.$router.push({name: 'productDetail', params: {id: this.item.items[0].gid}})
            }
        },
        props: ['item']
    }
</script>

<style type="text/css" scoped>
    .order-state {
        display: flex;
        padding: 0;
        justify-content: space-between;
        margin-bottom: 10px
    }
    .order-state .num, .order-state .state {
        font-size: 28px;
    }
    .signup {
        border-radius: 8px;
        background-color: rgba(16,142,233,0.1);
        padding: 20px 32px 36px;
    }
    .order-item {
        display: inline-block;
        display: flex;
        align-items: stretch;
    }
    .order-item img {
        max-width: 206px;
        min-width: 144px;
        height: 144px;
    }
    .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 20px;
        width: 0;
    }
    .info .title {
        font-size: 28px;
        color: #333;
    }
    .num {
        font-size: 24px;
        color: #666;
    }
    .num .lable {
        margin-right: 5px;
    }
    .price {
        font-size: 28px;
        color: #D0021B;
    }
</style>