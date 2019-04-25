<template>
    <div class="navbar">
        <div id="nav-content">
            <van-nav-bar :title="title" v-if="!showleft"/>
            <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" v-else/>
        </div>
        <div class="nav-content-placeholder" :style="{height: divH}"></div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'navbar',
        data () {
            return {
                divH: '46px'
            }
        },
        mounted () {
            let div = document.getElementById('nav-content')
            this.divH = window.getComputedStyle(div).height
        },
        methods: {
            onClickLeft () {
                this.$router.back()
            }
        },
        props: ['showleft', 'title']
    }
</script>

<style type="text/css" scoped>
    #nav-content {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }
    .navbar {
        background-color: #fff;
        position: relative;
    }
</style>