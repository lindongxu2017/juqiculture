<template>
    <div class="match">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="get_hot_match()">
          <div class="list">
                <div class="item" v-for="(item, index) in list" :key="index">
                    <hotMatch :item="item"></hotMatch>
                </div>
            </div>
        </van-list>
        <footNav></footNav>

    </div>
</template>

<script type="text/javascript">
    import hotMatch from '@/components/hot_match'
    import footNav from '@/components/footNav'
    export default {
        name: 'match',
        data () {
            return {
                list: [],
                loading: false,
                finished: false
            }
        },
        mounted () {
            // this.get_hot_match()
        },
        methods: {
            get_hot_match () {
                console.log(2)
                this.fn.ajax('GET', {
                    page: Math.ceil(this.list.length / 10) + 1
                }, 'https://manage.haosailei.cn/api/committee/6/matches', res => {
                    console.log(1, res.data)
                    this.list = this.list.concat(res.data)
                    if (this.list.length < 10 ) {
                        this.loading = false
                        this.finished = true
                    }
                })
            },
        },
        components: {
            footNav, hotMatch
        }
    }
</script>

<style type="text/css" scoped="scoped">
    .list {
        padding: 30px;
    }
    .item {
        margin-bottom: 30px;
    }
</style>