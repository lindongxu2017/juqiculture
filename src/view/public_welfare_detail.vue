<template>
    <div class="public_welfare_detail">
        <div class="title" v-html="info.title"></div>
        <div class="time">
            <div class="cell space">
                <img src="@/assets/time.png">
                <span v-html="info.time"></span>
            </div>
            <div class="cell">
                <img src="@/assets/line.png">
                <span v-html="info.visiter"></span>
            </div>
        </div>
        <div class="content" v-html="info.content"></div>
        <img class="backHome" src="@/assets/back-home.png" @click="back">
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'public_welfare_detail',
        data () {
            return {
                info: {},
                id: ''
            }
        },
        mounted () {
            this.getDetail()
        },
        methods: {
            back () {
                this.$router.back()
            },
            getDetail () {
                this.fn.ajax('GET', {
                    id: this.$route.params.id
                }, this.api.own.articaldetail, res => {
                    this.info = res.data
                })
            }
        },
        components: {
            
        }
    }
</script>

<style type="text/css" scoped>
    .title {
        font-size: 48px;
        color: #333;
        font-weight: bold;
        padding: 32px 44px 28px;
    }
    .time {
        padding: 0 44px;
    }
    .cell {
        display: inline-block;
        font-size: 0;
    }
    .cell.space {
        margin-right: 50px;
    }
    .cell img {
        width: 28px;
        height: 28px;
        margin-right: 8px;
        vertical-align: middle;
        object-fit: contain;
    }
    .cell span {
        font-size: 28px;
        color: #999;
        vertical-align: middle;
    }
    .content {
        padding: 44px;
    }
    .backHome {
        position: fixed;
        right: 30px;
        bottom: 10%;
        width: 80px;
        height: 80px;
    }
</style>