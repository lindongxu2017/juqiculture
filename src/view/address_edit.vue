<template>
    <div class="addressEdit">
        <navBar :title="id == 0 ? '添加收货地址' : '编辑收货地址'" :showleft="true"></navBar>
        <van-address-edit
          :area-list="areaList"
          show-postal
          show-delete
          show-set-default
          show-search-result
          :search-result="searchResult"
          @save="onSave"
          @delete="onDelete"
          @change-detail="onChangeDetail"
        />
    </div>
</template>

<script type="text/javascript">
    import navBar from '@/components/navBar'
    export default {
        name: 'addressEdit',
        data () {
            return {
                areaList: {},
                searchResult: [],
                id: ''
            }
        },
        mounted () {
            this.id = this.$route.params.id
        },
        methods: {
            onSave() {
                this.$toast('保存')
            },
            onDelete() {
                this.$toast('删除')
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [];
                }
            }
        },
        components: {
            navBar
        }
    }
</script>

<style type="text/css" scoped>
    
</style>