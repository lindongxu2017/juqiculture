<template>
    <div class="footNav">
        <van-tabbar v-model="active">
            <van-tabbar-item icon="gem" @click="replace('/')">首页</van-tabbar-item>
            <van-tabbar-item icon="friends" @click="replace('/center')">我的</van-tabbar-item>
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
                case '/center':
                    this.active = 1
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

</style>
