<template>
    <div class="index">
        <navBar :title="'首页'" :showleft="false"></navBar>
        <div>index page</div>
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
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            footNav, navBar
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
