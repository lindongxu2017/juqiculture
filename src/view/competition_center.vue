<template>
    <div class="popularProducts">
        <div class="banner" >
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
            <p>比赛标题</p>
        </div>
        <ul>
            <li>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                <p>比赛标题</p>
            </li>
            <li>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                <p>比赛标题</p>
            </li>
            <li>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                <p>比赛标题</p>
            </li>
            <li>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2500155165,4177020199&fm=15&gp=0.jpg" />
                <p>比赛标题</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'popularProducts',
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
        margin-bottom: 20px;
    }
    .banner img{
        width: 100%;
    }
    ul {
        display: flex;
        flex-wrap:wrap;
        justify-content:center
    }
    ul li {
        width: 47%;
        margin: 0 1%;
    }
    ul li img {
        width: 100%;
    }
</style>
