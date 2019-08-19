<template>
    <div class="select-login">
        <div class="login-box">
            <h4>选择登录方式</h4>
            <router-link to="./login" tag="div" class="phone-login">
                <img src="./images/phone.png" alt="" width="16">
                <span>手机登录</span>
            </router-link>
        </div>

        <div class="login-bottom">
            <img src="./images/logo.png" alt="" height="50">
            <span>拼多多都没有假货的</span>
        </div>

    </div>
</template>

<script>
export default {
    name: "SelectLogin",
    methods:{
        // 跳转
        switchTo(){
            this.$router.replace('/login');
        }
    }
}
</script>

<style lang="stylus" scoped>
.select-login
    width 100%
    height 100%
    background-color #f5f5f5
    display flex
    flex-direction column
    align-items center
    justify-content space-between
    position absolute
    z-index 1000
    .login-box
        width 100%
        display flex
        flex-direction column
        justify-content center
        align-items center
        margin-top 40%
        .phone-login
            background-color #FFA10A
            width 80%
            height 40px
            border-radius 5px
            margin-top 30px
            display flex
            justify-content center
            align-items center
            span
                color #fff
                margin-left 10px
                font-size 14px
    .login-bottom
        display flex
        flex-direction column
        align-items center
        margin-bottom 10px
        font-size 12px
        color #9c9c9c
        span
            margin-top 20px
</style>