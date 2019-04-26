<template>
    <div class="contestantGift">
        <div>
            <img src="" alt="">
            <div>
                <p>赠送礼物给XXXX</p>
                <div>
                    <ul>
                        <li>
                            <p>221票</p>
                            <p>当前票数</p>
                        </li>
                        <li>
                            <p>第1名</p>
                            <p>当前排名</p>
                        </li>
                        <li>
                            <p>221票</p>
                            <p>已赠送</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
            <div>
                <img src="" alt="">
                <span>虚拟礼物</span>
            </div>
            <ul>
                <li>
                    <img src="" />
                    <div>
                        <span>100票</span>
                        <span>20元</span>
                    </div>
                    <div>
                        <input type="text">
                    </div>
                </li>
            </ul>

            
            <div>
                <img src="" alt="">
                <span>实物礼物</span>
            </div>
            <div>
                <p>*购买后选手加票，同事您可获得商品哦~</p>
                <p>*赠送商品不可退款</p>
            </div>
            <ul>
                <li>
                    <img src="" />
                    <div>
                        <span>100票</span>
                        <span>¥20</span>
                    </div>
                    <div>
                        <input type="text">
                    </div>
                </li>
            </ul>

            <div>
                <span>300票数</span>
                <span>金额¥30</span>
                <button>去支付</button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'contestantGift',
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
