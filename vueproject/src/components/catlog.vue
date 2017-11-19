<template>
	<div>
		<header>
			<a><img src="http://img1.97hyg.com/mobile/images/search_v2_1.png"/></a>
			<h1>分类</h1>
		</header>
		<div class="catlogli">
			<router-link to="/home">			
				<div class="first">
					<div class="pic"><img src="http://img1.97hyg.com/mobile/images/category_v2_1/category.png"/></div>
					<p>全部商品</p>
				</div>
			</router-link>
				<div class="second">
					<p>分类浏览</p>
				</div>
			<ul>
				<li v-for="data in catolist" @click="handleclick(data.cateid,data.title)">
					<div class="img"><img :src="data.url"/></div>
					<div class="word">{{data.title}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import router from "@/router"
export default {

  name: 'new',

  data () {
    return {
    	catolist:[
    		{
    			url:"http://img1.97hyg.com/mobile/images/category_v2_1/category_1.png",
    			title:"优选商品",
    			cateid:-1
    		},
    		{
    			url:"http://img1.97hyg.com/mobile/images/cateimg/20161202/tc.png",
    			title:"地方特产",
    			cateid:175
    		},
    		{
    			url:"http://img1.97hyg.com/mobile/images/cateimg/20161202/category_6.png",
    			title:"充值卡券",
    			cateid:165
    		},
    		{
    			url:"http://img1.97hyg.com/mobile/images/cateimg/20161202/category_4.png",
    			title:"家用电器",
    			cateid:13
    		},
    		{
    			url:"http://img1.97hyg.com/mobile/images/cateimg/20161202/category_2.png",
    			title:"手机平板",
    			cateid:14
    		},
    		{
    			url:"http://img1.97hyg.com/mobile/images/cateimg/20161202/category_3.png",
    			title:"电脑数码",
    			cateid:166
    		},
    		{
    			url:"http://img1.97hyg.com/mobile/images/cateimg/20161202/category_5.png",
    			title:"黄金首饰",
    			cateid:12
    		},
    		{
    			url:"http://img1.97hyg.com/mobile/images/cateimg/20161202/category_8.png",
    			title:"汽车用品",
    			cateid:5
    		},
    		{
    			url:"http://img1.97hyg.com/mobile/images/cateimg/20161202/category_10.png",
    			title:"日用百货",
    			cateid:167
    		},
    		{
    			url:"http://img1.97hyg.com/mobile/images/cateimg/20150821/10514407158491.png",
    			title:"好运超市",
    			cateid:6
    		},
    		{
    			url:"http://img1.97hyg.com/mobile/images/cateimg/20161202/category_7.png",
    			title:"潮流时尚",
    			cateid:17
    		}
    	]
    }
  },
  methods:{
  	handleclick(cateid,title){
  		router.push(`/goodinfo?cateid=${cateid}`);
  		this.$store.commit("changetitle",title);
  	}
  }
}
</script>

<style lang="scss" scoped>
	header{
		height: 0.88rem;
		border-bottom: 0.02rem solid #d5d5d5;
		position: fixed;
		width: 100%;
		top: 0;
		background: #fff;
		z-index: 2;
		a{
			text-align:center;
			position: absolute;
			height: 0.88rem;
			line-height: 0.88rem;
			left: 0.5rem;
			img{
				width: 0.5rem;
				height: 0.5rem;
				vertical-align: middle;
				margin-top:-0.2rem;	
			}
		}
		h1{
			font-size: 18px;
			color: #2c2c2c;
			width: 50%;
			height: 0.88rem;
			line-height: 0.88rem	;
			margin: 0 auto;
			text-align: center;
		}
	}
.catlogli{
	position:relative;
	margin-top:0.88rem;
	ul{
		list-style:none;
		li{			
		    height:1rem;
		    line-height:1rem;
		    font-size:14px;
		    .img{
		    	float: left;
	    	    height: 1rem;
	    	    width: 16%;
	    	    box-sizing: border-box;
	    	    text-align: center;
	    	    color: #696969;
	    	    img{
	    	    	width:0.5rem;
	    	    	vertical-align:middle;
	    	    }
		    }
		    .word{
		    	width: 84%;
	    	    text-align: left;
	    	    border-bottom: 0.02rem solid #d5d5d5;
	    	    float:left;
	    	    height:1rem;
	    	    box-sizing:border-box;
	    	    color:#696969;
		    }
		}
		
	}
}

.first{
	font-size: 18px;
    color: #2c2c2c;
    overflow: hidden;
    .pic{
    	float: left;
	    height: 1rem;
	    line-height:1rem;
	    width: 16%;
	    box-sizing: border-box;
	    text-align: center;
	    color: #696969;
	    img{
	    	width:0.7rem;
	    	vertical-align:middle;
	    	border:none;
	    }
    }
    p{
    	width: 84%;
    	text-align: left;
    	border-bottom: 0.02rem solid #d5d5d5;
    	float:left;
    	height:1rem;
    	line-height: 1rem;
    }
}
		.second{
			height: 0.6rem;
		    color: #999999;
		    padding-left: 6%;
		    line-height: 0.6rem;
		    font-size:14px;
		    p{
		    	border-bottom: 0.02rem solid #d5d5d5;
		    }
		}
</style>