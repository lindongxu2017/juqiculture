<template>
    <div class="myMatch">
        <navBar :title="'我的大赛'" :showleft="true"></navBar>
        <div class="match-list">
            <match v-for="(item, index) in list" :key="index"></match>
        </div>
    </div>
</template>

<script type="text/javascript">
    import match from '@/components/match_item'
    import navBar from '@/components/navBar'
    export default {
        name: 'myMatch',
        data () {
            return {
                list: ['', '', '', '', '', '', '']
            }
        },
        components: {
            match, navBar
        }
    }
</script>

<style type="text/css">
    .match-list {
        padding: 15px 30px;
    }
</style>