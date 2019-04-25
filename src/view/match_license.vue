<template>
    <div class="matchlicense">
        <navBar :title="'xxx参赛证'" :showleft="true"></navBar>
        <div class="section">
            <div class="cell-title">报名信息</div>
            <div class="info">
                <div class="img-wrapper">
                    <img class="avatar" src="@/assets/logo.png">
                </div>
                <div class="text-content">
                    <div class="cell-text">
                        <span class="lable">姓名</span>
                        <span>：</span>
                        <span class="value">唐杨月雯</span>
                    </div>
                    <div class="cell-text">
                        <span class="lable">编号</span>
                        <span>：</span>
                        <span class="value">FTASE001</span>
                    </div>
                    <div class="cell-text">
                        <span class="lable">组别</span>
                        <span>：</span>
                        <span class="value">幼儿组</span>
                    </div>
                    <div class="cell-text">
                        <span class="lable">性别</span>
                        <span>：</span>
                        <span class="value">女</span>
                    </div>
                    <div class="cell-text">
                        <span class="lable">电话号码</span>
                        <span>：</span>
                        <span class="value">13088875533</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="cell-title">参赛信息</div>

            <van-steps direction="vertical" :active="0">
                <van-step>
                    <div class="top-info">
                        <div class="current-step">复赛</div>
                        <div class="step-result">
                            <span>结果：</span>
                            <img class="icon" src="@/assets/logo.png">
                            <span>已晋级</span>
                        </div>
                        <div class="step-result">
                            <img class="icon" src="@/assets/logo.png">
                            <span>9.7分</span>
                        </div>
                    </div>
                    <div class="step-info">
                        <van-cell title="深圳少年儿童图书馆B赛场" :border="noborder" icon="location-o" />
                        <van-cell title="2019年5月19日 09:00" :border="noborder" icon="location-o" />
                        <van-cell title="广东省深圳市福田区红荔路1011号" :border="noborder" icon="location-o" />
                    </div>
                </van-step>
                <van-step>
                    <div class="top-info">
                        <div class="current-step">复赛</div>
                        <div class="step-result">
                            <span>结果：</span>
                            <img class="icon" src="@/assets/logo.png">
                            <span>已晋级</span>
                        </div>
                        <div class="step-result">
                            <img class="icon" src="@/assets/logo.png">
                            <span>9.7分</span>
                        </div>
                    </div>
                    <div class="step-info">
                        <van-cell title="深圳少年儿童图书馆B赛场" :border="noborder" icon="location-o" />
                        <van-cell title="2019年5月19日 09:00" :border="noborder" icon="location-o" />
                        <van-cell title="广东省深圳市福田区红荔路1011号" :border="noborder" icon="location-o" />
                    </div>
                </van-step>
                <van-step>
                    <div class="top-info">
                        <div class="current-step">复赛</div>
                        <div class="step-result">
                            <span>结果：</span>
                            <img class="icon" src="@/assets/logo.png">
                            <span>已晋级</span>
                        </div>
                        <div class="step-result">
                            <img class="icon" src="@/assets/logo.png">
                            <span>9.7分</span>
                        </div>
                    </div>
                    <div class="step-info">
                        <van-cell title="深圳少年儿童图书馆B赛场" :border="noborder" icon="location-o" />
                        <van-cell title="2019年5月19日 09:00" :border="noborder" icon="location-o" />
                        <van-cell title="广东省深圳市福田区红荔路1011号" :border="noborder" icon="location-o" />
                    </div>
                </van-step>
            </van-steps>
        </div>
        <div class="section">
            <div class="license-code">
                <p>出示二维码签到</p>
                <img src="@/assets/logo.png">
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import navBar from '@/components/navBar'
    export default {
        name: 'matchlicense',
        data () {
            return {
                noborder: false
            }
        },
        components: {
            navBar
        }
    }
</script>

<style type="text/css">
    .matchlicense .step-info .van-cell {
        padding: 10px 10px 0;
    }
    .matchlicense .step-info {
        padding-bottom: 20px;
    }
    .matchlicense .section [class*=van-hairline]:after {
        display: none;
    }
    .matchlicense .step-info .van-cell .van-icon {
        top: 0;
        left: 0;
        line-height: inherit;
        font-size: 20px;
    }
</style>

<style type="text/css" scoped>
    .section {
        padding: 30px;
    }
    .cell-title {
        font-size: 28px;
        font-weight: bold;
        padding-left: 20px;
        position: relative;
        line-height: 1;
        margin-bottom: 20px;
    }
    .cell-title:before {
        content: "";
        position: absolute;
        width: 4px;
        height: 100%;
        left: 0;
        background-color: #999;
    }
    .info {
        display: flex;
        align-items: stretch;
    }
    .img-wrapper {
        font-size: 0;
    }
    .avatar {
        width: 200px;
        height: 200px;
    }
    .text-content {
        flex: 1;
        width: 0;
        padding-left: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .cell-text {
        font-size: 28px;
    }
    .cell-text .lable {
        display: inline-block;
        min-width: 130px;
    }
    .top-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .step-result .icon{
        width: 28px;
        height: 28px;
        vertical-align: middle;
    }
    .current-step {
        border: 1px solid #eee;
        line-height: 1;
        padding: 4px 10px;
        font-size: 24px;
        border-radius: 4px;
    }
    .step-info {
        width: 100%;
        border: 1px solid #eee;
        box-sizing: border-box;
    }
    .license-code {
        text-align: center;
    }
    .license-code img {
        width: 200px;
        height: 200px;
    }
</style>