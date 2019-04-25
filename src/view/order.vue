<template>
    <div class="order">
        <navBar :title="'我的订单'" :showleft="true"></navBar>
        <van-tabs v-model="active">
            <van-tab title="报名费">
                1111
            </van-tab>
            <van-tab title="礼物订单">
                2222
            </van-tab>
            <van-tab title="产品订单">
                3333
            </van-tab>
        </van-tabs>
    </div>
</template>

<script type="text/javascript">
    import navBar from '@/components/navBar'
    export default {
        name: 'order',
        data () {
            return {
                active: 0
            }
        },
        methods: {
            onAdd () {
                this.$router.push({name: 'addressEdit', params: {id: 0}})
            },
            onEdit (e) {
                console.log(e)
                this.$router.push({name: 'addressEdit', params: {id: e.id}})
            }
        },
        components: {
            navBar
        }
    }
</script>

<style type="text/css">
    .order .van-hairline--top-bottom:after {
        border-top: 0;
    }
</style>

<style type="text/css" scoped>
    
</style>