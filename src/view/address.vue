<template>
    <div class="addresslist">
        <div class="address-item" v-for="(item, index) in list">
            <div class="lable" @click="selectDefault(index)">
                <div class="title" slot="title">
                    <span class="name" v-html="item.name"></span>
                    <span class="tel" v-html="item.mobile"></span>
                    <span class="default" v-if="item.is_default == 1">默认</span>
                </div>
                <div class="detail-address" v-html="item.address"></div>
            </div>
            <div class="link" @click="onEdit(index)">
                <span>修改</span>
                <img src="@/assets/right.png">
            </div>
        </div>
        <div class="placeholder-line"></div>
        <div class="add-address-btn" @click="onAdd">
            <img src="@/assets/add.png">
            <span>新增收货地址</span>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'addresslist',
        data () {
            return {
                list: [],
            }
        },
        mounted () {
            this.getlist()
        },
        methods: {
            getlist () {
                this.fn.ajax('GET', {}, this.api.own.addresslist, res => {
                    this.list = res.data.list
                })
            },
            onAdd () {
                this.$router.push({name: 'addressEdit', params: {id: 0}})
            },
            onEdit (index) {
                this.$router.push({name: 'addressEdit', params: {id: this.list[index].id}})
            },
            selectDefault (index) {
                this.list.map((item, order) => {
                    if (index == order) {
                        item.is_default = 1
                    } else {
                        item.is_default = 0
                    }
                })
                this.fn.ajax('POST', {id: this.list[index].id}, this.api.own.addressdefault, res => {
                    // TODO
                })
            }
        },
        components: {
            
        }
    }
</script>

<style type="text/css">
    .addresslist .van-cell--clickable:active {
        background-color: #fff;
    }
    .addresslist .van-cell__value {
        flex: none;
    }
</style>

<style type="text/css" scoped>
    .addresslist {
        background-color: #eee;
        min-height: 100%;
    }
    .title {
        color: #333333;
        font-size: 34px;
        margin-bottom: 10px;
    }
    .title span {
        vertical-align: middle;
    }
    .default {
        width: 60px;
        line-height: 32px;
        background-color: #2B9DF0;
        color: #fff;
        font-size: 22px;
        border-radius: 2px;
        display: inline-block;
        text-align: center;
    }
    .address-item {
        background-color: #fff;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        padding: 20px 30px;
    }
    .address-item .lable {
        flex: 1;
        margin-right: 20px;
    }
    .address-item .link span, .address-item .link img {
        vertical-align: middle;
    }
    .address-item .link img {
        width: 36px;
        height: 36px;
    }
    .detail-address {
        font-size: 24px;
        color: #999;
    }
    .link {
        font-size: 28px;
        color: #999;
    }
    .placeholder-line {
        height: 1px;
        opacity: 0;
    }
    .add-address-btn {
        background-color: #fff;
        text-align: center;
        line-height: 88px;
        margin-top: 20px;
    }
    .add-address-btn img {
        width: 38px;
        height: 38px;
        vertical-align: middle;
    }
    .add-address-btn span {
        vertical-align: middle;
        font-size: 28px;
        color: #999;
    }
</style>