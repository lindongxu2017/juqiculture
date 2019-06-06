<template>
    <div class="addressEdit">
        <van-address-edit
            :area-list="areaList"
            :address-info="address"
            show-set-default
            :show-delete="id != 0"
            @change-area="confirm"
            @save="onSave"
            @delete="del"
        />
    </div>
</template>

<script type="text/javascript">
    // import arealist from '@/lib/area.js'
    export default {
        name: 'addressEdit',
        data () {
            return {
                areaList: {},
                id: '',
                address: {
                    name: '',
                    tel: '',
                    areaCode: '',
                    addressDetail: '',
                    isDefault: ''
                },
                province_id: '',
                city_id: '',
                area_id: '',
            }
        },
        mounted () {
            this.id = this.$route.params.id
            if (this.id) {
                this.getdetail()
            }
            if (localStorage.area) {
                this.areaList = JSON.parse(localStorage.area)
            }
        },
        methods: {
            onSave(e) {
                this.$toast('保存')
                console.log(e)
                let postData = {
                    name: e.name,
                    mobile: e.tel,
                    address: e.addressDetail,
                    province_id: this.province_id,
                    city_id: this.city_id,
                    area_id: this.area_id,
                    is_default: e.isDefault ? 1 : 0,
                    code: e.areaCode
                }
                if (this.id != 0) {
                    postData.id = this.id
                }
                this.fn.ajax('POST', postData, this.api.own.addressadd, res => {
                    // TODO
                    this.$router.back()
                })

            },
            del () {
                this.fn.ajax('POST', {id: this.id}, this.api.own.addressdel, res => {
                    // TODO
                    this.$router.back()
                })
            },
            confirm(e) {
                let arr = e
                let arealist = JSON.parse(localStorage.origin_area)
                arealist.map((item, index) => {
                    if (item.type == 1 && arr[0].name == item.name) {
                        this.province_id = item.id
                    }
                    if (item.type == 2 && arr[1].name == item.name) {
                        this.city_id = item.id
                    }
                    if (item.type == 3 && arr[2].name == item.name) {
                        this.area_id = item.id
                    }
                })
            },
            getdetail () {
                this.fn.ajax('GET', {id: this.id}, this.api.own.addressdetail, res => {
                    this.address.name = res.data.name
                    this.address.tel = res.data.mobile
                    this.address.addressDetail = res.data.address
                    this.address.isDefault = res.data.is_default == 1 ? true : false
                    this.address.areaCode = res.data.code
                })
            }
        },
        components: {
            
        }
    }
</script>

<style type="text/css">
    .addressEdit .van-button--danger {
        background-color: #108ee9;
        border-color: #108ee9;
    }
    .addressEdit .van-switch--on {
        background-color: #108ee9;
    }
</style>

<style type="text/css" scoped>
    
</style>