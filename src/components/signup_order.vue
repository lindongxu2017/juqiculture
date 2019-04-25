<template>
    <div class="signup">
        <van-card num="2" price="2.00" desc="描述信息"  title="商品标题" :thumb="require('@/assets/logo.png')" />
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'signup',
        data () {
            return {

            }
        },
        props: ['item']
    }
</script>