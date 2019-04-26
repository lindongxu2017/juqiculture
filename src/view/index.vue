<template>
    <div class="index">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in imglist" :key="index">
                <img :src="item" />
            </van-swipe-item>
        </van-swipe>
        <div class="top_menu">
            <div>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                <p>赛事中心</p>
            </div>
            <div>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                <p>精彩直播</p>
            </div>
            <div>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                <p>人气产品</p>
            </div>
        </div>
        <div class="hot_race">
            <p>热门赛事</p>
            <div>
                <div class="item">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                    <div>
                        <p>比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛</p>
                        <p>截止报名:还有<span>30</span>天</p>
                    </div>
                </div>
                <div class="item">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                    <div>
                        <p>比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛比赛</p>
                        <p>截止报名:还有<span>30</span>天</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="hot_shop">
            <p>爆款产品</p>
            <div>
                <div class="item">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                    <p>大赛指定行李箱</p>
                    <p>¥500<span>仅剩20件</span></p>
                </div>
                <div class="item">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                    <p>大赛指定行李箱</p>
                    <p>¥500<span>仅剩20件</span></p>
                </div>
                <div class="item">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                    <p>大赛指定行李箱</p>
                    <p>¥500<span>仅剩20件</span></p>
                </div>
                <div class="item">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                    <p>大赛指定行李箱</p>
                    <p>¥500<span>仅剩20件</span></p>
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
        name: 'index',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                imglist: [
                    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg',
                    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg',
                ]
            }
        },
        components: {
            footNav, navBar
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    /* 菜单 */
    .top_menu {
        display: flex;
        font-size: 24px;
        margin: 15px 0;
        padding: 20px 0;
        text-align: center;
        justify-content:center
    }
    .top_menu > div {
        width: 130px;
        margin: 0 50px;
    }
    .top_menu  img {
        width: 100%;
    }

    /* 热门比赛 */
    .hot_race {
        padding: 0 10px;
    }
    .hot_race .item {
        display: flex;
    }
    .hot_race .item img {
        width: 300px;
        height: 200px;
    }

    /* 爆款产品 */
    .hot_shop > div {
        display: flex;
        flex-wrap:wrap;
        justify-content:center
    }
    .hot_shop > div .item {
        width: 47%;
        margin: 0 1%;
    }
    .hot_shop > div .item img {
        width: 100%;
    }
</style>
