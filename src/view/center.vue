<template>
    <div class="center">
        <navBar :title="'我的'" :showleft="false"></navBar>
        <div class="header cell van-hairline--bottom">
            <div class="flex-wrapper">
                <van-icon class="cell-icon" name="manager" />
                <div class="cell-text">
                    <div>
                        <span class="cell-title">我的孩子</span>
                        <span class="text">添加后报名无须填资料</span>
                    </div>
                    <div class="children-wrapper">
                        <div class="add-wrapper" @click="routerTo('addchild')">
                            <div class="circle"><van-icon name="plus"/></div>
                            <p class="tips">添加孩子信息</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="cell van-hairline--bottom">
            <div class="flex-wrapper">
                <van-icon class="cell-icon" name="diamond" />
                <div class="cell-text" @click="routerTo('mymatch')">
                    <div class="cell-title">我报名的大赛</div>
                    <div class="text">所有报名的大赛都在这里查看哦~</div>
                </div>
            </div>
        </div>
        
        <div class="cell van-hairline--bottom">
            <div class="flex-wrapper">
                <van-icon class="cell-icon" name="todo-list" />
                <div class="cell-text" @click="routerTo('order')">
                    <div class="cell-title">我的订单</div>
                    <div class="text">支付的订单都在这里查询~</div>
                </div>
            </div>
        </div>

        <div class="cell van-hairline--bottom">
            <div class="flex-wrapper" @click="routerTo('addresslist')">
                <van-icon class="cell-icon" name="location" />
                <div class="cell-text">
                    <div class="cell-title">我的收货地址</div>
                    <div class="text">我的地址管理~</div>
                </div>
            </div>
        </div>

        <footNav></footNav>
    </div>
</template>

<script>
    import navBar from '@/components/navBar'
    import footNav from '@/components/footNav'
    export default {
        name: 'center',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            routerTo (name) {
                this.$router.push({name})
            }
        },
        components: {
            footNav, navBar
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page {
        font-size: 14px;
    }
    .flex-wrapper {
        display: flex;
        align-items: center;
    }
    .cell {
        padding: 30px;
    }
    .cell-icon {
        font-size: 48px;
    }
    .children-wrapper {
        margin-top: 20px;   
    }
    .cell-title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .cell-text {
        flex: 1;
        padding-left: 20px;
    }
    .cell-text .text {
        font-size: 28px;
        color: #666;
    }
    .add-wrapper {
        display: inline-block;
        text-align: center;
    }
    .circle {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        display: flex;
        border: 1px solid #ebedf0;
        align-items: center;
        justify-content: center;
        margin: 0 auto 10px;
    }
    .tips {
        font-size: 28px;
        color: #666;
    }
</style>
