<template>
    <div class="footNav">
        <van-tabbar v-model="active">
            <van-tabbar-item icon="gem" @click="replace('/')">
                <span>首页</span>
                <img class="nav-icon" slot="icon" slot-scope="props" :src="!props.active ? require('@/assets/home-default.png') : require('@/assets/home.png')">
            </van-tabbar-item>
            <van-tabbar-item icon="gem" @click="replace('/match')">
                <span>大赛</span>
                <img class="nav-icon" slot="icon" slot-scope="props" :src="!props.active ? require('@/assets/cup-default.png') : require('@/assets/cup.png')">
            </van-tabbar-item>
            <van-tabbar-item icon="gem" @click="replace('/mall')">
                <span>商城</span>
                <img class="nav-icon" slot="icon" slot-scope="props" :src="!props.active ? require('@/assets/store-default.png') : require('@/assets/store.png')">
            </van-tabbar-item>
            <van-tabbar-item icon="friends" @click="replace('/center')">
                <span>我的</span>
                <img class="nav-icon" slot="icon" slot-scope="props" :src="!props.active ? require('@/assets/center-default.png') : require('@/assets/center.png')">
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: 'footNav',
    data () {
        return {
            active: 0
        }
    },
    mounted () {
        this.initActive()
    },
    methods: {
        initActive () {
            let path = this.$route.path
            switch (path) {
                case '/':
                    this.active = 0
                    break
                case '/match':
                    this.active = 1
                    break
                case '/mall':
                    this.active = 2
                    break  
                case '/center':
                    this.active = 3
                    break
            }
        },
        replace (path) {
            this.$router.replace(path)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nav-icon {
        width: 40px;
        height: 40px;
    }
</style>
