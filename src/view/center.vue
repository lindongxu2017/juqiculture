<template>
    <div class="center">
        <div>center page</div>
        <footNav></footNav>
    </div>
</template>

<script>
    import footNav from '@/components/footNav'
    export default {
        name: 'center',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            footNav
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
