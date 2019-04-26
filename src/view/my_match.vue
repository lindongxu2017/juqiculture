<template>
    <div class="myMatch">
        <navBar :title="'我的大赛'" :showleft="true"></navBar>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="match-list">
                <match v-for="(item, index) in list" :key="index"></match>
            </div>
        </van-list>
    </div>
</template>

<script type="text/javascript">
    import match from '@/components/match_item'
    import navBar from '@/components/navBar'
    export default {
        name: 'myMatch',
        data () {
            return {
                list: [],
                loading: false,
                finished: false
            }
        },
        mounted () {

        },
        methods: {
            onLoad () {
                let postData = {
                    page: Math.ceil(this.list.length / 10) + 1,
                    per_page: 10
                }
                this.fn.ajax('GET', postData, this.api.center.matchlist, res => {
                    console.log(res.data)
                    this.loading = false
                    if (res.data.length == 0) {
                        this.finished = true
                    }
                    this.list = this.list.concat(res.data)
                })
            }
        },
        components: {
            match, navBar
        }
    }
</script>

<style type="text/css">
    .match-list {
        padding: 15px 30px;
    }
</style>