<template>
    <div class="add-child">
        <navBar :title="'添加孩子'" :showleft="true"></navBar>
        <div class="upload-wrapper van-hairline--bottom">
            <div class="circle" @click="chooseImg">
                <van-icon name="photograph" />
            </div>
            <div class="tips">请上传头像</div>
        </div>
        <van-cell-group>
            <van-field v-model="field.username" required clearable label="孩子姓名" placeholder="请输入孩子姓名"/>
            <van-field v-model="field.height" type="number" required clearable label="孩子身高" placeholder="请输入孩子身高"/>
            <van-field v-model="field.weight" type="number" required clearable label="孩子体重" placeholder="请输入孩子体重"/>
            <van-field v-model="field.birthday" @click="selectBirthday" required clearable readonly label="出生日期" placeholder="请选择出生日期"/>
            <div class="van-field-wrapper">
                <div class="van-field-lable">性别</div>
                <div class="van-field-control">
                    <van-radio-group v-model="field.radio">
                        <van-radio name="1">男</van-radio>
                        <van-radio name="2">女</van-radio>
                    </van-radio-group>
                </div>
            </div>
            <div class="van-field-wrapper">
                <div class="van-field-lable">居住地</div>
                <div class="van-field-control">
                    定位中...
                </div>
            </div>
        </van-cell-group>

        <van-popup v-model="dateShow" position="bottom">
            <van-datetime-picker
                v-model="field.currentDate"
                :max-date="maxDate"
                :min-date="minDate"
                @cancel="closePopup"
                @confirm="confirmDate"
                type="date"/>
        </van-popup>

        <div class="cell">
            <div class="cell-title">
                <span>上传照片</span>
                <span class="tips">(上传生活照、艺术照、演出照)</span>
            </div>
            <div class="img-list-wrapper">
                <div class="img-item" v-for="(item, index) in previewImglist">
                    <img class="updateImg" :src="item">
                </div>
                <van-uploader :after-read="onRead">
                    <van-icon name="photograph" />
                </van-uploader>
            </div>
        </div>

        <div class="cell">
            <div class="cell-title">
                <span>上传视频</span>
                <span class="tips">(请上传1分钟以内才艺、自我介绍视频)</span>
            </div>
            <div class="img-list-wrapper">
                <div class="img-item" v-for="(item, index) in previewVideolist">
                    <img class="updateImg" :src="item">
                </div>
                <van-uploader :after-read="onRead">
                    <van-icon name="photograph" />
                </van-uploader>
            </div>
        </div>

        <div class="cell">
            <div class="cell-title">
                <span>自我介绍</span>
            </div>
            <textarea placeholder="请输入..."></textarea>
        </div>

    </div>
</template>

<script type="text/javascript">
    import navBar from '@/components/navBar'
    export default {
        name: 'add-child',
        data () {
            return {
                field: {
                    username: '',
                    height: '',
                    weight: '',
                    birthday: '',
                    radio: '1',
                    currentDate: new Date()
                },
                previewImglist: [],
                previewVideolist: [],
                dateShow: false,
                minDate: new Date('1995-01-01'),
                maxDate: new Date()
            }
        },
        methods: {
            chooseImg () {
                console.log(111)
                wx.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function (res) {
                        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                    }
                });
            },
            selectBirthday () {
                this.dateShow = true
            },
            closePopup () {
                this.dateShow = false
            },
            confirmDate () {
                this.dateShow = false
                this.field.birthday = this.field.currentDate.getFullYear() + '-' + (this.field.currentDate.getMonth() + 1) + '-' + this.field.currentDate.getDate()
            },
            onRead (e) {
                console.log(e)
                this.previewImglist.push(e.content)
            },
            onClickLeft () {
                this.$router.back()
            }
        },
        components: {
            navBar
        }
    }
</script>

<style type="text/css">
    .add-child .van-radio-group {
        display: flex;
        align-items: center;
    }
    .add-child .van-radio__label {
        margin-left: 5px;
        margin-right: 20px;
    }
</style>

<style type="text/css" scoped>
    .add-child {
        min-height: 100%;
    }
    .upload-wrapper {
        text-align: center;
        padding: 30px;
    }
    .circle {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        border: 1px solid #ebedf0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 10px;
    }
    .tips {
        font-size: 28px;
        color: #666;
    }
    .van-field-wrapper {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        overflow: hidden;
        color: #323233;
        font-size: 14px;
        line-height: 24px;
        background-color: #fff;
        padding: 10px 15px;
        align-items: stretch;
        box-sizing: border-box;        
    }
    .van-field-wrapper:before {
        content: "*";
        position: absolute;
        left: 7px;
        font-size: 14px;
        color: #f44;
    }
    .van-field-wrapper:not(:last-child):after {
        content: " ";
        position: absolute;
        pointer-events: none;
        left: 15px;
        right: 0;
        bottom: 0;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        border-bottom: 1px solid #ebedf0;
    }
    .van-field-lable {
        flex: 1;
        max-width: 90px;
    }
    .van-field-control {
        flex: 1;
    }
    .cell {
        padding: 20px 30px;
    }
    .cell-title {
        font-size: 32px;
        font-weight: bold;
    }
    .cell-title .tips {
        font-size: 28px;
        color: #999;
        font-weight: normal;
    }
    .cell textarea {
        appearance: none;
        border: 0;
        background-color: transparent;
        box-shadow: none;
        border: 1px solid #aaa;
        width: 100%;
        border-radius: 0;
        min-height: 150px;
        margin-top: 15px;
        padding: 10px;
        box-sizing: border-box;
        font-size: 28px;
    }
    .img-list-wrapper {
        padding-top: 40px;
    }
    .img-item {
        font-size: 0;
        display: inline-block;
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .updateImg {
        width: 130px;
        height: 130px;
    }
</style>