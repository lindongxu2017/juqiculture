<template>
    <div class="competitionIndex">
        <img class="banner" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />

        <div>
            <span>关于大赛</span>
            <span>赛区</span>
            <span>赛程</span>
        </div>

        <div>
            <p>大赛简介</p>
            <p>大赛简介大赛简介大赛简介大赛简介大赛简介大赛简介大赛简介大赛简介大赛简介大赛简介大赛简介大赛简介</p>
            <div>
                展开
            </div>
        </div>

        <div>
            <div>
                <p>选手排行</p>
                <p>查看榜单》</p>
            </div>

            <ul>
                <li>
                    <p>第一名</p>
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                    <p>林哲宇</p>
                </li>
            </ul>
        </div>

        <div>
            <div>
                <p>赛区</p>
                <input type="text">
                <img src="" />
            </div>

            <ul>
                <li>太原赛区</li>
                <li>太原赛区</li>
                <li>太原赛区</li>
            </ul>
        </div>

        <div>
            <div>
                <p>赛程</p>
                <input type="text">
                <img src="" />
            </div>

            <ul>
                <li>
                    <div>
                        <button>报名</button>
                        <span>2018年5月1日~5月17日</span>
                    </div>
                    <p>上传参赛视频</p>
                </li>
            </ul>
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
        name: 'competitionIndex',
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
    .banner {
        width: 100%;
    }
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
