<template>
    <div class="order">
        <navBar :title="'我的订单'" :showleft="true"></navBar>
        <van-tabs v-model="active" class="scroll-content" sticky :offset-top="offset">
            <van-tab title="报名费">
                <van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad">
                    <div class="list-wrapper">
                        <signup v-for="(item, index) in list1" :key="index"></signup>
                    </div>
                </van-list>
            </van-tab>
            <van-tab title="礼物订单">
                <van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoad">
                    <div class="list-wrapper">
                        <signup v-for="(item, index) in list2" :key="index"></signup>
                    </div>
                </van-list>
            </van-tab>
            <van-tab title="产品订单">
                <van-list v-model="loading3" :finished="finished3" finished-text="没有更多了" @load="onLoad">
                    <div class="list-wrapper">
                        <signup v-for="(item, index) in list3" :key="index"></signup>
                    </div>
                </van-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script type="text/javascript">
    import navBar from '@/components/navBar'
    import signup from '@/components/signup_order'
    export default {
        name: 'order',
        data () {
            return {
                active: 0, // tab current
                offset: 46, // 粘性定位布局下与顶部的最小距离
                loading1: false,
                loading2: false,
                loading3: false,
                finished1: false,
                finished2: false,
                finished3: false,

                list1: [],
                list2: [],
                list3: []

            }
        },
        methods: {
            onLoad () {
                let arr = ['', '', '', '', '']
                console.log(this.active)
                setTimeout(() => {
                    if (this.active == 0) {
                        this.list1 = this.list1.concat(arr)
                        this.loading1 = false
                        if (this.list1.length >= 40) {
                            this.finished1 = true;
                        }
                    }
                    if (this.active == 1) {
                        this.list2 = this.list2.concat(arr)
                        this.loading2 = false
                        if (this.list2.length >= 40) {
                            this.finished2 = true;
                        }
                    }
                    if (this.active == 2) {
                        this.list3 = this.list3.concat(arr)
                        this.loading3 = false
                        if (this.list3.length >= 40) {
                            this.finished3 = true;
                        }
                    }
                }, 1000)
            }
        },
        components: {
            navBar, signup
        }
    }
</script>

<style type="text/css">
    .order .van-hairline--top-bottom:after {
        border-top: 0;
    }
</style>

<style type="text/css" scoped>

</style>