<template>
	<div>
		<div class="main">
			<header>
        <router-link to="/home/hot"><i class="iconfont icon-back"></i></router-link>
				<h3>用户登录</h3>
				<i class="iconfont icon-viewgallery"></i>
			</header>
			<div class="content">
				<form action="/api/login" method="post">
					<div class="formcontent">
						<div class="user">
							<label>账号：</label>
							<input type="text" placeholder="请输入您的手机号" id="username" @blur="handleuser" name="username"/>
						</div>
						<div class="pass">
							<label>密码：</label>
							<input type="password" placeholder="请输入密码" id="password" @blur="handlepass" name="password"/>
						</div>
					</div>
          <div class="p1">{{text}}</div>
					<div @click="handlelogin" class="btn" >登录</div>

				</form>
				<ul>
					<li class="first"><router-link to="/register" tag="span" >立即注册</router-link></li>
					<li class="last">忘记密码</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import {Field}from 'mint-ui';
import Qs from 'qs'
import router from "@/router";
export default {

  name: 'new',

  data () {
    return {
      userinfo:"",
      password:"",
      text:""
    }
  },
  components:{
  	"mt-field":Field
  },
  methods:{
    handleuser(){
      console.log(111)
        var username = document.getElementById('username').value
      console.log(username)
      if(username==""){
            console.log(119991)
          //document.getElementById('mm').innerText="用户名不能为空"
        this.text="用户名不能为空"
      }
    },
    handlepass(){

        var password = document.getElementById('password').value
        if(password==""){
          this.text="密码不能为空"
        }
    },
    handlelogin(){
      var username = document.getElementById('username').value
      var password = document.getElementById('password').value
      console.log(username)
      console.log(password)
        if(username==""){
          this.text="用户名不能为空"
        }else if(password==""){
          this.text="密码不能为空"
        }else{
          this.$ajax.post('/api/login', Qs.stringify({
            username: username,
            password: password
          })).then(data =>{
            //console.log(data.data.length)
            if(data.data.length == 0){
                this.text="用户名不存在"
            }else{
                router.push('/home')
            }
          })

        }
    }
  }
}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
  .p1{
    font-size:14px ;
    color:red;
    padding-left: 0.4rem;
  }
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
				.formcontent{
					background:#fff;
					margin:0.2rem;
					border:0.02rem solid #d5d5d5;
					border-radius:0.1rem;
					overflow:hidden;
					label{
						font-size: 15px;
						margin-left:0.4rem;
						margin-right:0.2rem;
						float:left;
						line-height:0.96rem;
					}
					input{
						float:left;
						font-size: 18px;
						border:none;
						background:none;
						line-height: 0.96rem;
						padding-left:0.2rem;
					}
					.user{
						height:0.96rem;
						border-bottom:0.02rem solid #d5d5d5;
					}
					.pass{
						height:0.96rem;
					}
				}
				.btn{
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
			ul{
				list-style: none;
				display: flex;
				justify-content: space-between;
				font-size:14px;
				li{
					color:#0079fe;
				}
				.first{
					padding-left:0.2rem;
				}
				.last{
					padding-right:0.2rem;
				}
			}
		}

	}
</style>
