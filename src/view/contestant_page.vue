<template>
    <div class="contestantPage">

        <div class="top_menu">
            <div>
                <p>300票</p>
                <p>票数</p>
            </div>
            <div>
                <p>第一名</p>
                <p>排名</p>
            </div>
            <div>
                <p>北京赛区</p>
                <p>赛区</p>
            </div>
        </div>
        
        <div>
            <p>选手信息</p>
            <div>
                <img src="" alt="">
                <div>
                    <p>姓名：林哲宇</p>
                    <p>年龄：9岁</p>
                    <p>组别：幼儿组</p>
                    <p>赛区：北京赛区</p>
                    <p>作品名称：外婆的歌</p>
                </div>
            </div>
        </div>

                
        <div>
            <p>参赛宣言&自我介绍</p>
            <p>我很珍惜这次机会请叔叔阿姨们支持我！</p>
        </div>
                
        <div>
            <p>照片展示（1张）</p>
            <img src="" />
        </div>     

        <div>
            <p>视频展示（1个）</p>
            <img src="" />
        </div>

        <div>
            <p>收到的礼物（50）</p>
            <ul>
                <li>
                    <img src="" />
                    <span>×3</span>
                </li>
                <li>
                    <img src="" />
                    <span>×3</span>
                </li>
                <li>
                    <img src="" />
                    <span>×3</span>
                </li>
            </ul>
            <p>查看更多</p>
        </div>

        <div>
            <p>粉丝榜（300）</p>
            <ul>
                <li>
                    <img src="" />
                    <span>×3</span>
                </li>
                <li>
                    <img src="" />
                    <span>×3</span>
                </li>
                <li>
                    <img src="" />
                    <span>×3</span>
                </li>
            </ul>
            <p>查看更多</p>
        </div>

        <img src="" />
        <p>由好赛擂大赛系统平台提供技术支持</p>

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
        name: 'contestantPage',
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
