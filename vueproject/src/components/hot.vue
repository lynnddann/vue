<template>
	<div>
		<div class="navlist" :class="navlistFix?'isFixed':''" >
        <ul >
          <li><router-link to="/home/hot" tag="span" activeClass="first">人气</router-link></li>
          <li><router-link to="/home/newlist" tag="span" activeClass="first">最新</router-link></li>
        </ul>      
    </div>
		<div class="hotlist">
			<ul v-infinite-scroll="loadMore"
			  infinite-scroll-disabled="loading"
			  infinite-scroll-distance="0"
			  infinite-scroll-immediate-check ="false">
				<li v-for="data in datalist" @click="handleclick(data.shopid,data)">
					<div class="pic">
						<img :src="`http://img2.97hyg.com${data.thumb}`"/>
						<p>{{data.title}}</p>
					</div>
					<div class="price">
						<p><span>{{data.zongrenshu}}</span>元</p>
					</div>
					<a href="" title="">立即抢购</a>
				</li>
			</ul>
			<p class="text">{{text}}</p>
		</div>

		<div class="jiantou" v-show="isshow" @click="changtop">
        	<i class="iconfont icon-less"></i>
    	</div> 

	</div>
</template>

<script>
import home from "@/components/home"
import router from "@/router";
import axios from "axios";
export default {

  name: 'hot',

  data () {
    return {
    	datalist:[],
    	loading:false, //控制无限滚动是否禁用，false表示会被触发
    	current:1, //表示当前请求的是第几页
    	allpages:0,	//表示总共的页数
    	text:"正在加载中，请稍后...",
    	isshow:false,
    	navlistFix:false
    }
  },
  mounted(){

  	fetch("/site/listajax",{
	      method:'post',
	      headers: {
	                "Content-Type": "application/x-www-form-urlencoded"
	               },
	      body:`renqi=Y&pageindex=${this.current}&pagesize=10`
        }).then(res=>res.json()).then(res=>{
        	//console.log(res.data.list)
        	this.datalist = res.data.list
        	this.allpages = res.data.allpages

        });

    window.addEventListener('scroll', this.handleScroll);
  },
  methods:{
  	handleScroll(){ //出现回到顶部按钮
	
  		var scrolltop = document.documentElement.scrollTop || document.body.scrollTop
  		//var offsettop = document.querySelector(".navlist ul").offsetTop;  //悬浮窗口
  		if(scrolltop>400){
  			this.isshow = true
  		}else{
  			this.isshow = false
  		}
  		//console.log(offsettop,scrolltop)
  		if(scrolltop>370){
         this.navlistFix = true
      		}else{
	        this.navlistFix = false
      	}
  	},
  	changtop(){
  		document.documentElement.scrollTop = 0;
  		document.body.scrollTop = 0;
  	},

  	handleclick(id,data){
  		//console.log(id)
      window.removeEventListener('scroll', this.handleScroll)
  		router.push(`/detail/${id}`)
  		this.$store.commit('detaildata',data)
        	},
  	loadMore(){
  		this.current++;
  		if(this.current>this.allpages){
  			this.loading = true; //禁用滚动
  			this.text = "无更多数据"
  			return ;
  		}
  		fetch("/site/listajax",{
	      method:'post',
	      headers: {
	                "Content-Type": "application/x-www-form-urlencoded"
	               },
	      body:`renqi=Y&pageindex=${this.current}&pagesize=10`
        }).then(res=>res.json()).then(res=>{
        	console.log(res.data.list)
        	this.datalist = [...this.datalist,...res.data.list]
        });
  		
  	}
  }
}
</script>

<style lang="scss" scoped>
	.hotlist{
		ul{
			overflow: hidden;			
			li{
				float: left;
				padding:0.2rem 0.2rem;
				list-style: none;
				box-sizing:border-box;
				width:50%;
				border-bottom: 0.02rem solid #d5d5d5;
				border-right: 0.02rem solid #d5d5d5;
				.pic{
					text-align: center;
					img{
						display: block;
						width:2rem;
						height:2rem;
						margin:0.2rem auto;
					}
					p{
					    color: #666666;
					    font-size: 12px;
					    text-align: left;
					    height: 0.64rem;
					    line-height: 0.32rem;
					    margin-bottom: 0;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    display: -webkit-box;
					    -webkit-line-clamp: 2;
					    -webkit-box-orient: vertical
					}
				}
				.price{
					overflow:hidden;
					p{
						width: 80%;
					    font-size: 12px;
					    color: #999999;
					    margin: 0.1rem 0;
					}
				    span{
				    	font-size: 18px;
    					color: #999;
				    }
				}
				a{
					text-decoration: none;
				    display: block;
				    background: #df231c;
				    border-radius: 0.12rem;
				    font-size: 12px;
				    color: #fff;
				    text-align: center;
				    width: 2rem;
				    height: 0.6rem;
				    line-height: 0.6rem;
				    margin: 0 auto;
				}
			}
		}
		.text{
			width:100%;
			height:0.8rem;
			text-align: center;
			font-size: 12px;
			color:#999;
			background:#f1eeec;
			line-height: 0.8rem;
		}
	}
	.jiantou{
    width:0.9rem;
    height:0.9rem;
    background:rgba(1,1,1,0.3);
    position:fixed;
    bottom:1.5rem;
    right:2%;
    z-index: 3;
    border-radius:50%;
    text-align: center;
    .icon-less{
      font-size:30px;
      line-height:0.9rem;
      color:#fff;
      position:relative;
      left:0.03rem;
      top:-0.36rem;
      font-weight: 700;
    }
}

 .navlist{	
    background:#fff;
    width:100%;      
    ul{
      overflow:hidden;
      font-size: 14px;
      color:#2c2c2c;
      border-bottom:0.02rem solid #d5d5d5;       
      li{
        width:50%;
        float:left;
        list-style:none;
        text-align: center;
        height:0.9rem;
        line-height:0.9rem;       
      }   
	}
 }
.isFixed{
    position:fixed;
    top:1rem;
    z-index:22;
}
.first{
      border-bottom:0.04rem solid #df231c;
      display:inline-block;
      height:0.86rem;
  }
</style>