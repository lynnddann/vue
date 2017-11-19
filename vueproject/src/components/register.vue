<template>
  <div>
    <div class="main">
      <header>
        <router-link to="/me"><i class="iconfont icon-back"></i></router-link>
        <h3>注册</h3>
        <router-link to="/home"><i class="iconfont icon-viewgallery"></i></router-link>
      </header>
      <div class="content">
        <form action="/api/register" method="post">
              <input type="text" placeholder="请输入您的手机号码" v-model="username" name="username" @blur="handleblur" />
              <p class="s1">{{usermsg}}</p>
              <input type="password" placeholder="请输入6-12位数字或字母" v-model="password" name="password "  @blur="handleblurpass"/>
              <p class="s1">{{passmsg}}</p>
              <p class="agree"><input type="checkbox" checked="checked" />我已阅读并同意<span>好运服务条款</span></p>
            <button type="button" @click="btn"  class="nxl">注册</button>
        </form>
      </div>
    </div>
</div>
</template>

<script>

import Qs from 'qs'
import router from "@/router";
//import axios from 'axios'
//axios.defaults.baseURL = '/api'

export default {

  name: 'new',

  data () {
    return {
      username:"",
      password:"",
      usermsg:"",
      passmsg:""
    }
  },
  methods:{
    handleblur(){
       var reg = /^1[3|5|8|7][0-9]{9}$/
       if(this.username !=""){  //用户名不为空时进行正则匹配
          if(reg.test(this.username)){  //用户名格式正确
              this.usermsg = "√"
          }else{
            this.usermsg = "格式不正确，请重新输入"
            this.username=""
          }
       }else{
          this.usermsg = "用户名不能为空"
       }

    },
    handleblurpass(){
       var reg1 = /^[0-9a-zA-Z]{6,12}$/
       if(this.password !=""){  //用户名不为空时进行正则匹配
          if(reg1.test(this.password)){  //用户名格式正确
              this.passmsg = "√"
          }else{
            this.passmsg = "格式不正确，请重新输入"
            this.password=""
          }
       }else{
          this.passmsg = "密码不能为空"
       }
    },
    btn(){
        var that = this;
        if(this.username===""){
            this.usermsg="用户名不能为空"
        }else if(this.password===""){
            this.passmsg="密码不能为空"
        }else {
          this.$ajax.post('/api/register', Qs.stringify({
            username: this.username,
            password: this.password
          })).then(data =>{
              console.log(data)
            if(data.data.code==='-1'){
                this.usermsg="该用户名已经存在"
              console.log('数据存在')
            }else{
                router.push('/me')
              console.log('存储数据')
            }
          })
        }

    }
  }
}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
  .main{
    width:100%;
    height:13.34rem;
    background:#f7f7f7;
    header{
      height:0.88rem;
      width:100%;
      box-sizing:border-box;
      padding:0 0.2rem;
      border-bottom:0.02rem solid #d5d5d5;
      .iconfont{
        font-size:24px;
        color:#999;
        padding:0.2rem;
      }
      .icon-back{
        float: left;
      }
      h3{
        font-size:18px;
        float:left;
        height:0.88rem;
        line-height: 0.88rem;
        color:#2c2c2c;
        font-weight: 500;
        text-align: center;
        width:5rem;
      }
      .icon-viewgallery{
        float:right;
      }
    }
    .content{
      form{
        width:96%;
        margin:0.3rem auto;
          input{
            width:100%;
            box-sizing:border-box;
            float:left;
            font-size: 14px;
            border:none;
            background:none;
            line-height: 0.36rem;
            padding:0.2rem 0 0.2rem 0.4rem;
            border:0.02rem solid #d5d5d5;
            margin:0 auto;
            margin-bottom: 0.2rem;
            background:#fff;
            border-radius:0.08rem;
          }
          .s1{
            font-size:14px;
            color:red;
          }
          .agree{
            font-size:12px;
            color:#8f8f94;
            input{
              float:left;
              width:0.34rem;
              height:0.34rem;
              font-size:14px;
              margin-right:0.04rem;
            }
            span{
              padding:0.08rem 0.16rem;
              border:0.02rem solid #df231c;
              color:#df231c;
              margin-left: 0.08rem;
            }
          }
        button{
          margin:0.2rem;
          border:none;
          background:none;
          width:96%;
          height:0.8rem;
          background:#df231c;
          color:#fff;
          text-align: center;
          line-height: 0.8rem;
          font-size:14px;
        }
      }
    }

  }
</style>
