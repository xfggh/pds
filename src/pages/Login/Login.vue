<template>
    <div class="login">
        <img src="./images/logo.png" alt="" width="60%">
        <div class="login-header">
            <span :class="{ current: loginMode }" @click="switchLoginMode(true)">短信登录</span>
            <span :class="{ current: !loginMode }" @click="switchLoginMode(false)">密码登录</span>
        </div>
        <div class="login-sms" :class="{ current: loginMode }">
            <div class="input-group">
                <label for="phone"><img src="./images/iphone.png" alt="" width="25"></label>
                <input type="text" name="phone" v-model="phone" placeholder="手机号">
                <button v-if="!countDown" :disabled="!phoneRight" :class="{ 'phone-right': phoneRight }" @click="getVerifyCode">获取验证码</button>
                <button v-else disabled>已发送({{countDown}} s)</button>
            </div>
            <div class="input-group">
                <label for="smscode"><img src="./images/pass.png" alt="" width="25"></label>
                <input type="text" name="smscode" v-model="smscode">
            </div>
        </div>
        <div class="login-sms" :class="{ current: !loginMode }">
            <div class="input-group">
                <label for="phone"><img src="./images/iphone.png" alt="" width="25"></label>
                <input type="text" name="phone" v-model="username" placeholder="用户名/手机号">
            </div>
            <div class="input-group">
                <label for="password"><img src="./images/pass.png" alt="" width="25"></label>
                <input type="password" name="password" v-model="password" v-if="pwdMode" placeholder="密码">
                <input type="text" name="password" v-model="password" v-else  placeholder="密码">
                <img src="./images/show_pwd.png" alt="" width="25" v-if="pwdMode" @click="switchPwdMode(false)">
                <img src="./images/hide_pwd.png" alt="" width="25" v-else  @click="switchPwdMode(true)">
            </div>
            <div class="input-group">
                <input type="text" name="vcode" v-model="vcode" placeholder="验证码">
                <img ref="captcha" @click="getCaptcha" src="http://localhost:3000/api/getverifycode" alt="" height="40">
            </div>

        </div>
        <div class="login-footer">
            <button @click.prevent="login">同意协议并登录</button>
            <button>返回</button>
        </div>
    </div>
</template>

<script>
import { getSmsCode, loginBySmsCode, loginByPwd } from '../../api/index'
import { Toast } from 'mint-ui'

import { mapActions } from 'vuex'

export default {
    name: "Login",
    data(){
        return{
            loginMode: true, // true - 验证码登录，false - 密码登录
            countDown: 0, // 验证码倒计时
            pwdMode: true, // true - 不显示密码
            phone: '', // 手机号
            smscode: '', // 短信验证码
            username: '', // 用户名
            password: '', // 密码
            vcode: '', // 图片验证码
            userInfo: {}
        }
    },
    methods:{
        ...mapActions(['saveUserInfo']),

        // 1. 切换 登录方式
        switchLoginMode(flag){
            this.loginMode = flag;
        },

        // 2. 获取短信验证码
        async getVerifyCode(){
            // 2.1 开始倒计时
            this.countDown = 6;
            this.intervalId = setInterval(()=>{
                this.countDown--;
                if(this.countDown === 0){
                    clearInterval(this.intervalId);
                }
            }, 1000);

            // 2.2 获取短信验证码
            let smsCode = await getSmsCode(this.phone);
            console.log(smsCode);

        },

        // 3. 密码显示方式
        switchPwdMode(flag){
            this.pwdMode = flag;
        },

        // 4. 获取图片验证码
        getCaptcha(){
            this.$refs.captcha.src = 'http://localhost:3000/api/getverifycode?time=' + new Date();
        },

        // 5. 登录
        async login(){
            let results = {};
            if(this.loginMode){ // 验证码登录
                // 5.1 校验前台数据
                if(!this.phone){
                    Toast('请输入手机号码!');
                    return;
                }
                if(!this.phoneRight){
                    Toast('请输入正确的手机号!');
                    return;
                }
                if(!this.smscode){
                    Toast('请输入验证码!');
                    return;
                }
                if(!/^\d{6}$/gi.test(this.smscode)){
                    Toast('请输入正确的验证码!');
                    return;
                }
                results = await loginBySmsCode(this.phone, this.smscode);
                console.log(results);
            }else{ // 密码登录
                // 5.2 校验前台数据
                if(!this.username){
                    Toast('请输入用户名/手机号!');
                    return;
                }
                if(!this.password){
                    Toast('请输入密码!');
                    return;
                }
                if(!this.vcode){
                    Toast('请输入验证码!');
                    return;
                }
                results = await loginByPwd(this.username, this.password, this.vcode);
            }

            if(results.code === 200){ // 登录成功
                this.userInfo = results.data;
            }else{
                this.userInfo = {msg: results.msg}
            }

            if(!this.userInfo.id){
                console.log(1);
                Toast(this.userInfo.msg);
            }else{
                // 保存登录成功的用户信息
                this.saveUserInfo(this.userInfo);
                // 返回主界面
                this.$router.back();
            }
        }
    },
    computed:{
        phoneRight(){
            return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone);
        }
    }
}
</script>

<style lang="stylus" scoped>
.login
    display flex
    flex-direction column
    align-items center
    padding-top 20%
    .login-header
        margin 20px 0
        display flex
        justify-content center
        align-items center
        span
            margin-left 10px
            margin-right 10px
            padding-bottom 5px
        .current
            border-bottom 2px solid red
            color red
    .login-sms
        width 100%
        display none
        flex-direction column
        align-items center
        .input-group
            height 40px
            width 90%
            display flex
            align-items center
            background-color #fff
            margin-top 5px
            border-radius 5px
            box-sizing border-box
            padding 0 5px
            input
                flex 3
                height 80%
                width 80%
                border none
                outline none
                margin-left 5px
            button
                padding 5px
                margin 0 5px
                background-color #fff
                border 1px solid red
                border-radius 5px
                flex 1.5
            .phone-right
                background-color red
                color #fff
    .current
        display flex
    .login-footer
        width 100%
        display flex
        flex-direction column
        align-items center
        margin-top 20px
        button
            width 90%
            border none
            border-radius 5px
            height 40px
            display block
            padding 0 5px
            margin-bottom 10px
        button:first-child
            background-color red
            color #fff
        button:nth-child(2)
            background-color #fff
            color red
            border 1px solid red


</style>