<template>
    <div class="footNav">
        <van-tabbar v-model="active">
            <van-tabbar-item icon="gem" @click="replace('/')">标签</van-tabbar-item>
            <van-tabbar-item icon="friends" @click="replace('/center')">标签</van-tabbar-item>
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
    methods: {
        replace (path) {
            this.$router.replace(path)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
