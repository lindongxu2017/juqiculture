<template>
    <div class="center">
        <!-- <van-cell title="我的孩子" class="left" value="所有报名的大赛都在这里查看哦" size="large" :border="showborder" center>
            <img src="@/assets/icon-mychild.png" class="cell-icon" slot="icon">
        </van-cell>
        
        <div class="add-child">
            <div class="no-child-wrapper" v-if="children.length == 0">
                <img src="@/assets/plus.png" @click="routerTo('addchild')">
                <p>添加孩子信息</p>
            </div>
            <div class="child-wrapper" v-else>
                <div class="item" v-for="(item, index) in children" :key="index">
                    <img src="@/assets/demo.jpg">
                    <p class="name">李诗缘</p>
                </div>
            </div>
            <div class="tips">最多可以添加3个孩子哦</div>
            <div class="add-lable" v-if="children.length > 0 && children.length < 3" @click="routerTo('addchild')">
                <span>添加萌娃</span>
                <img src="@/assets/add-child.png">
            </div>
        </div> -->

        <!-- <van-cell title="我报名的大赛" value="所有报名的大赛都在这里查看哦" is-link size="large" center @click="routerTo('mymatch')">
            <img src="@/assets/icon-cup.png" class="cell-icon" slot="icon">
        </van-cell> -->
        <van-cell title="我的订单" value="支付的订单都在这里查询" is-link size="large" center @click="routerTo('order')">
            <img src="@/assets/icon-order.png" class="cell-icon" slot="icon">
        </van-cell>
        <van-cell title="我的收货地址" value="我的地址管理" is-link size="large" center @click="routerTo('addresslist')">
            <img src="@/assets/icon-address.png" class="cell-icon" slot="icon">
        </van-cell>

        <footNav></footNav>
    </div>
</template>

<script>
    import footNav from '@/components/footNav'
    export default {
        name: 'center',
        data () {
            return {
                showborder: false,
                children: []
            }
        },
        methods: {
            routerTo (name) {
                this.$router.push({name})
            }
        },
        components: {
            footNav
        }
    }
</script>

<style type="text/css">
    .center .van-cell__title {
        font-size: 15px;
        /* font-weight: bold; */
        width: 100px;
        flex: none;
    }
    .center .van-cell__value {
        font-size: 11px;
    }
    .center .van-cell--large {
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .center .left .van-cell__title {
        width: 70px;
    }
    .center .left .van-cell__value {
        text-align: left;
    }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .center {
        min-height: 100%;
        background-color: #EEEEEE;
    }
    .add-child {
        background-color: #fff;
        margin-bottom: 20px;
        padding: 30px 30px 38px;
        position: relative;
    }
    .no-child-wrapper {
        text-align: center;
    }
    .no-child-wrapper img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }
    .no-child-wrapper p {
        font-size: 30px;
        color: #333;
        line-height: 42px;
        font-weight: bold;
    }
    .cell-icon {
        width: 44px;
        height: 44px;
        margin-right: 20px;
        object-fit: contain;
        -webkit-object-fit: contain;
    }
    .tips {
        font-size: 22px;
        text-align: center;
        color: #999;
        margin-top: 8px;
    }
    .child-wrapper {
        display: flex;
        justify-content: center;
    }
    .child-wrapper .item {
        font-size: 0;
        margin: 0 50px;
    }
    .child-wrapper .item img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin-bottom: 20px;
    }
    .child-wrapper .item p {
        font-size: 30px;
        line-height: 42px;
        text-align: center;
    }
    .add-lable {
        position: absolute;
        left: 0;
        top: 0;
        line-height: 60px;
        padding: 0 9px 0 5px;
        border-top-right-radius: 60px;
        border-bottom-right-radius: 60px;
        background-color: #108EE9;
        font-size: 24px;
        color: #fff;
    }
    .add-lable span, .add-lable img {
        vertical-align: middle;
    }
    .add-lable img {
        width: 42px;
        height: 42px;
    }
</style>
