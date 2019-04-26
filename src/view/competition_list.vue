<template>
    <div class="competitionList">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in imglist" :key="index">
                <img :src="item" />
            </van-swipe-item>
        </van-swipe>
        <div class="top_menu">
            <div>
                <p>500人</p>
                <p>打榜人数</p>
            </div>
            <div>
                <p>500人</p>
                <p>总投票人数</p>
            </div>
            <div>
                <p>500人</p>
                <p>访问人数</p>
            </div>
        </div>
        <div class="hot_race">
            <p>支持选手</p>
            <ul>
                <li>
                    <p>林哲宇</p>
                    <p>票数:<span>1000</span>票</p>
                </li>
                <li>
                    <p>林哲宇</p>
                    <p>票数:<span>1000</span>票</p>
                </li>
                <li>
                    <p>林哲宇</p>
                    <p>票数:<span>1000</span>票</p>
                </li>
            </ul>

            <div>
                <p>截止打榜：还剩<span>20</span>天</p>
                <span>打榜规则</span>
            </div>
        </div>
        <div class="hot_shop">
            <div>
                <input type="text">
                <button>搜索</button>
            </div>

            <div>
                <div class="item">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                    <p>林哲宇<span>第一名</span></p>
                    <p>北京区赛区<span>300票</span></p>
                    <button>为他助力</button>
                </div>
                <div class="item">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                    <p>林哲宇<span>第一名</span></p>
                    <p>北京区赛区<span>300票</span></p>
                    <button>为他助力</button>
                </div>
                <div class="item">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                    <p>林哲宇<span>第一名</span></p>
                    <p>北京区赛区<span>300票</span></p>
                    <button>为他助力</button>
                </div>
                <div class="item">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                    <p>林哲宇<span>第一名</span></p>
                    <p>北京区赛区<span>300票</span></p>
                    <button>为他助力</button>
                </div>
            </div>
        </div>
        
        <ul class="bottom_menu">
            <li>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                <p>大赛简介</p>
            </li>
            <li>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                <p>报名</p>
            </li>
            <li>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                <p>榜单</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'competitionList',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                imglist: [
                    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg',
                    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg',
                ]
            }
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
    
    /* 底部菜单 */
    .bottom_menu {
        display: flex;
        text-align: center;
    }
    .bottom_menu li img {
        width: 100px;
        height: 100px;
    }
    .bottom_menu li {
        width: 33%;
    }
</style>
