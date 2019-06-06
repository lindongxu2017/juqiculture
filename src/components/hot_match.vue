<template>
    <div class="hotMatch" @click="goRouter()">
        <div class="img-wrapper">
            <img :src="item.cover">
        </div>
        <div class="info">
            <div class="title" v-html="item.title"></div>
            <div class="card-footer">
                <div class="end-time"><!-- 报名截止：还有<span>3</span>天 --></div>
                <div class="btn">报名</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hotMatch',
    data () {
        return {

        }
    },
    mounted () {

    },
    methods: {
        goRouter () {
            location.href = this.item.url + '?source=juqi'
        }
    },
    props: ['item']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hotMatch {
        display: flex;
        align-items: stretch;
    }
    .img-wrapper {
        width: 340px;
        height: 164px;
        font-size: 0;
    }
    .img-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
    .info {
        flex: 1;
        width: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 18px;
    }
    .title {
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 26px;
        color: #333;
    }
    .card-footer {
        display: flex;
        justify-content: space-between;
    }
    .card-footer .end-time {
        font-size: 24px;
        color: #999;
    }
    .card-footer .end-time span {
        color: #D0021B;
    }
    .card-footer .btn {
        width: 86px;
        height: 32px;
        font-size: 22px;
        line-height: 32px;
        color: #fff;
        background-color: #2B9DF0;
        text-align: center;
        border-radius: 2px;
    }
</style>
