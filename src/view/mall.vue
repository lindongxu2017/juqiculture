<template>
    <div class="mall">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getlist">
            <div class="list-wrapper">
                <div class="item" v-for="(item, index) in list">
                    <product :item="item"></product>
                </div>
            </div>
        </van-list>
        <footNav></footNav>
    </div>
</template>

<script type="text/javascript">
    import product from '@/components/product'
    import footNav from '@/components/footNav'
    export default {
        name: 'mall',
        data () {
            return {
                list: [],
                loading: false,
                finished: false
            }
        },
        methods: {
            getlist () {
                this.fn.ajax('GET', {}, this.api.own.productlist, res => {
                    // console.log(res)
                    this.loading = false;
                    this.list = this.list.concat(res.data.list)
                    if (this.list.length >= res.data.total) {
                        this.finished = true
                    }
                })
            }
        },
        components: {
            footNav, product
        }
    }
</script>

<style type="text/css" scoped>
    .mall {
        padding-bottom: 120px;
    }
    .list-wrapper {
        padding: 38px 8px 8px 33px;
        font-size: 0;
    }
    .item {
        display: inline-block;
        vertical-align: middle;
        margin-right: 26px;
        margin-bottom: 30px;
        width: calc(50% - 26px);
    }
</style>