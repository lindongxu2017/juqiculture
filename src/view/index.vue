<template>
    <div class="index">
        <swiper :options="swiperOption">
        　　<swiper-slide v-for="(item, index) in imglist" :key="index">
                <img style="width: 100%" :src="item.pic_url" @click="goRouter(item)"/>
            </swiper-slide>
        　　<div class="swiper-pagination" slot="pagination"></div>
        </swiper>

        <van-cell title="热门赛事" :border="false" center v-if="hotlist.length">
            <img class="icon" src="@/assets/hot-cup.png" slot="icon">
        </van-cell>
        <div class="hot-match-list" v-if="hotlist.length">
            <div class="item" v-for="(item, index) in hotlist" :key="index">
                <hotMatch :item="item"></hotMatch>
            </div>
        </div>

        <van-cell title="精选宝贝" is-link :border="false" center value="查看更多" to="mall" v-if="hotproduct.length">
            <img class="icon" src="@/assets/fire.png" slot="icon">
        </van-cell>
        <div class="hot-product-list" v-if="hotproduct.length">
            <div class="item" v-for="(item, index) in hotproduct" :key="index">
                <product :item="item"></product>
            </div>
        </div>

        <van-cell title="爱心活动" :border="false" center v-if="publiclist.length">
            <img class="icon" src="@/assets/welfare.png" slot="icon">
        </van-cell>

        <div class="public-welfare" v-if="publiclist.length">
            <div class="public-welfare-item" v-for="(item, index) in publiclist" @click="godetail(item.id)">
                <div class="img-wrapper">
                    <img :src="item.image_url">
                </div>
                <div class="title van-ellipsis" v-html="item.title"></div>
                <div class="cell space">
                    <img src="@/assets/time.png">
                    <span v-html="item.time"></span>
                </div>
                <div class="cell">
                    <img src="@/assets/line.png">
                    <span v-html="item.visiter"></span>
                </div>

                <div class="other-content">
                    <div class="img-list">
                        <img v-for="(obj, order) in item.image_list_url" :src="obj.imgurl">
                    </div>
                </div>

            </div>
        </div>

        <van-cell title="合作伙伴" :border="false" center>
            <img class="icon" src="@/assets/welfare.png" slot="icon">
        </van-cell>

        <div class="partner-list">
            <div class="item" v-for="(item, index) in partner">
                <img :src="item.pic_url">
            </div>
        </div>

        <footNav></footNav>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import hotMatch from '@/components/hot_match'
    import product from '@/components/product'
    import footNav from '@/components/footNav'
    export default {
        name: 'index',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                imglist: [],
                hotlist: [],
                hotproduct: [],
                publiclist: [],
                partner: [],

                area: {
                    province_list: {},
                    city_list: {},
                    county_list: {}
                },
                area_ids: [],
                swiperOption: {
                　　pagination: {
                　　　　el: '.swiper-pagination',
                　　},
                　　autoplay: {
                　　　　delay: 3000,
                　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
                　　}
                },
            }
        },
        mounted () {
            if (localStorage.access_token) {
                this.get_banner();
                // this.get_hot_race();
                this.getPublic()
                this.getPartnerList()
                this.getArea();
                this.get_hot_match();
                this.get_hot_shop();
            }
        },
        methods: {
            get_banner () {
                this.fn.ajax('GET', {
                    page: 1
                }, this.api.own.banner, res => {
                    this.imglist = res.data.list
                })
            },
            goRouter (item) {
                location.href = item.url
            },
            getPublic () {
                this.fn.ajax('GET', {
                    page: 1
                }, this.api.own.artical, res => {
                    // console.log(res);
                    this.publiclist = this.publiclist.concat(res.data.list)
                })
            },

            getPartnerList () {
                this.fn.ajax('GET', {}, this.api.own.partner, res => {
                    // console.log(res);
                    this.partner = res.data
                })
            }, 

            get_hot_shop () {
                this.fn.ajax('GET', {
                    istop: 1
                }, this.api.own.productlist, res => {
                    this.hotproduct = this.hotproduct.concat(res.data.list)
                })
            },

            get_hot_match () {
                this.fn.ajax('GET', {page: 1}, 'https://manage.haosailei.cn/api/committee/6/matches', res => {
                    this.hotlist = this.hotlist.concat(res.data)
                })
            },


            go_competition_center () {
                this.$router.push({name: 'competitionCenter'})
            },

            godetail (id) {
                this.$router.push({name: 'welfareDetail', params: {id}})
            },

            getArea () {
                if (localStorage.area) {
                    return
                }
                this.fn.ajax('GET', {id: this.id}, this.api.own.area, res => {
                    let province_key = 11
                    for (var i = 0; i < res.data.length; i++) {
                        if (res.data[i].type == 1) {
                            this.area.province_list[province_key*10000] = res.data[i].name
                            let city_key = 1
                            for (var m = 0; m < res.data.length; m++) {
                                if (res.data[m].type == 2 && res.data[m].pid == res.data[i].id) {
                                    this.area.city_list[province_key*10000 + city_key*100] = res.data[m].name
                                    let area_key = 1
                                    for (var n = 0; n < res.data.length; n++) {
                                        if (res.data[n].type == 3 && res.data[n].pid == res.data[m].id) {
                                            this.area.county_list[province_key*10000 + city_key*100 + area_key] = res.data[n].name
                                            area_key++
                                        }
                                    }
                                    city_key++
                                }
                            }
                            province_key++
                        }
                    }
                    localStorage.area = JSON.stringify(this.area)
                    localStorage.origin_area = JSON.stringify(res.data)
                    // console.log(this.area)
                })
            },

        },
        components: {
            footNav, hotMatch, product
        }
    }
</script>

<style type="text/css">
    .index .van-cell__title {
        font-weight: bold;
        font-size: 17px;
    }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .icon {
        width: 35px;
        height: 35px;
        margin-right: 24px;
    }
    .index {
        min-height: 100%;
        background-color: #F5F5F5;
        padding-bottom: 120px;
    }
    .swiper-slide img {
        display: block;
        width: 100%;
    }
    .hot-match-list {
        padding: 6px 32px;
        background-color: #fff;
        margin-bottom: 16px;
    }
    .hot-match-list .item {
        margin-bottom: 20px;
    }
    .hot-product-list {
        padding: 6px 0 26px;
        margin-bottom: 16px;
        white-space: nowrap;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        background-color: #fff;
    }
    .hot-product-list .item {
        margin-right: 20px;
        display: inline-block;
        width: 264px;
        vertical-align: middle;
    }
    .hot-product-list .item:first-child {
        margin-left: 32px;
    }
    .hot-product-list .item:last-child {
        margin-right: 32px;
    }
    .public-welfare {
        padding: 6px 32px 26px;
        background-color: #fff;
        margin-bottom: 16px;
    }
    .public-welfare .img-wrapper {
        font-size: 0;
        margin-bottom: 16px;
    }
    .public-welfare .img-wrapper img {
        width: 100%;
        border-radius: 8px;
    }
    .public-welfare-item {
        margin-bottom: 16px;
        border-bottom: 1px solid #F5F5F5;
    }
    .public-welfare .title {
        font-size:  30px;
        color: #333;
        line-height: 35px;
    }
    .cell {
        display: inline-block;
        font-size: 0;
    }
    .cell.space {
        margin-right: 50px;
    }
    .cell img {
        width: 28px;
        height: 28px;
        margin-right: 8px;
        vertical-align: middle;
        object-fit: contain;
    }
    .cell span {
        font-size: 28px;
        color: #999;
        vertical-align: middle;
    }
    .other-content {
        padding: 32px 0 13px 0;
        background-color: #fff;
        font-size: 0;
    }
    .other-content img {
        display: inline-block;
        width: calc(calc(100% / 3) - 13px);
        margin-right: 13px;
        border-radius: 4px;
        margin-bottom: 13px;
    }
    .other-content .title {
        font-size: 30px;
        color: #333;
        line-height: 42px;
    }
    .partner-list {
        padding: 6px 22px 32px 32px;
        font-size: 0;
        background-color: #fff;
    }
    .partner-list .item {
        display: inline-block;
        vertical-align: middle;
        width: calc(25% - 10px);
        font-size: 0;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .partner-list .item img {
        width: 100%;
        border-radius: 4px;
    }
</style>
