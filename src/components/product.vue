<template>
    <div class="product" @click="goDetail">
        <div class="img-wrapper">
            <div class="img-height">
                <img :src="item ? item.pic_url : '@/assets/demo.jpg'">
            </div>
        </div>
        <div class="title van-ellipsis" v-html="item ? item.name : ''"></div>
        <div class="price-num">
            <div class="price">￥<span v-html="item ? item.price : ''"></span>元</div>
            <div class="num">仅剩 <span v-html="item ? (item.num > 999 ? 999 : item.num) : ''"></span><span v-html="item ? item.unit : ''"></span></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product',
    data () {
        return {

        }
    },
    mounted () {

    },
    methods: {
        goDetail () {
            this.$router.push({name: 'productDetail', params: {id: this.item.id}})
        }
    },
    props: ['item']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .img-wrapper {
        margin-bottom: 15px;
    }
    .img-wrapper .img-height {
        font-size: 0;
        padding-bottom: 74%;
        position: relative;
    }
    .img-wrapper .img-height img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
    .title {
        font-size: 28px;
        margin-bottom: 6px;
    }
    .price-num {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
    }
    .price {
        color: #D0021B;
    }
    .num {
        color: #9B9B9B;
    }
</style>
