<template>
    <div class="match van-hairline--bottom">
        <div class="item-wrapper">
            <div class="img-wrapper">
                <img class="avatar" src="@/assets/logo.png">
            </div>
            <div class="text-content">
                <div class="title-text">2018年第五届新丝路少年才艺比赛地区海选赛</div>
                <div class="subtitle-text">模特大赛</div>
                <div>
                    <van-icon name="friends" />
                    <span class="username">杨月雯</span>
                </div>
            </div>
        </div>
        <div class="operation-wrapper">
            <van-button size="small" type="default">编辑资料</van-button>
            <van-button size="small" type="default" @click="godetail">参赛证</van-button>
        </div>     
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'match',
        data () {
            return {}
        },
        methods: {
            godetail () {
                this.$router.push({name: 'matchlicense'})
            }
        }
    }
</script>

<style type="text/css" scoped>
    .item-wrapper {
        display: flex;
        align-items: stretch;
        padding: 15px 0;
    }
    .img-wrapper {
        font-size: 0;
    }
    .avatar {
        width: 150px;
        height: 150px;
    }
    .text-content {
        flex: 1;
        padding-left: 20px;
        width: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .title-text {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 32px;
    }
    .subtitle-text {
        font-size: 28px;
    }
    i, i + span {
        vertical-align: middle;
    }
    .username {
        font-size: 28px;
    }
    .operation-wrapper {
        padding-bottom: 15px;
        text-align: right;
    }
</style>