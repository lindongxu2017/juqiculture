<template>
    <div class="order">
        <van-list v-model="loading3" :finished="finished3" finished-text="没有更多了" @load="onLoad">
            <div class="list-wrapper">
                <div class="item" v-for="(item, index) in list3" :key="index">
                    <signup :item="item"></signup>
                </div>
            </div>
        </van-list>
        <!-- <van-tabs v-model="active" class="scroll-content" sticky :offset-top="offset">
            <van-tab title="报名费">
                <van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad">
                    <div class="list-wrapper">
                        <div class="item" v-for="(item, index) in list1" :key="index">
                            <signup></signup>
                        </div>
                    </div>
                </van-list>
            </van-tab>
            <van-tab title="礼物订单">
                <van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoad">
                    <div class="list-wrapper">
                        <div class="item" v-for="(item, index) in list2" :key="index">
                            <signup></signup>
                        </div>
                    </div>
                </van-list>
            </van-tab>
            <van-tab title="产品订单">
                <van-list v-model="loading3" :finished="finished3" finished-text="没有更多了" @load="onLoad">
                    <div class="list-wrapper">
                        <div class="item" v-for="(item, index) in list3" :key="index">
                            <signup></signup>
                        </div>
                    </div>
                </van-list>
            </van-tab>
        </van-tabs> -->
    </div>
</template>

<script type="text/javascript">
    import signup from '@/components/signup_order'
    export default {
        name: 'order',
        data () {
            return {
                active: 0, // tab current
                offset: 0, // 粘性定位布局下与顶部的最小距离
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
                let page = 1
                /*if (this.active == 0) {
                    page = Math.ceil(this.list1.length / 10) + 1
                } else if (this.active == 1) {
                    page = Math.ceil(this.list2.length / 10) + 1
                } else {
                    page = Math.ceil(this.list3.length / 10) + 1
                }*/

                this.fn.ajax('GET', {
                    page: Math.ceil(this.list3.length / 10) + 1
                }, this.api.own.orderlist, res => {
                    this.loading3 = false
                    this.list3 = this.list3.concat(res.data)
                    if (res.data == 0 || res.data.length < 10) {
                        this.finished3 = true;
                    }

                    /*if (this.active == 0) {
                        this.loading1 = false
                        this.list1 = this.list1.concat(res.data)
                        if (res.data == 0 || res.data.length < 10) {
                            this.finished1 = true;
                        }
                    }
                    if (this.active == 1) {
                        this.loading2 = false
                        this.list2 = this.list2.concat(res.data)
                        if (res.data == 0 || res.data.length < 10) {
                            this.finished2 = true;
                        }
                    }
                    if (this.active == 2) {
                        this.loading3 = false
                        this.list3 = this.list3.concat(res.data)
                        if (res.data == 0 || res.data.length < 10) {
                            this.finished3 = true;
                        }
                    }*/
                })
            }
        },
        components: {
            signup
        }
    }
</script>

<style type="text/css">
    .order .van-tabs--line {
        padding-top: 0;
    }
    .order .van-hairline--top-bottom:after {
        border-top: 0;
    }
    .order .van-tabs__line {
        background-color: #108EE9;
        height: 2px;
    }
    .order .van-tab--active {
        color: #108EE9;
    }
</style>

<style type="text/css" scoped>
    .list-wrapper {
        padding-top: 30px;
        background-color: #fff;
    }
    .item {
        padding: 0 32px;
        margin-bottom: 20px;
    }
</style>