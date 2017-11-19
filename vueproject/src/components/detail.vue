<template>
	<div>
		<header>
			<router-link to="/home"><i class="iconfont icon-back"></i></router-link>
			<router-link to="/home"><i class="iconfont icon-viewgallery"></i></router-link>
		</header>
		<div class="main">
			<swipe class="my-swipe">
		      <swipe-item><img :src="`http://img2.97hyg.com${$store.state.data.imgurl[0]}`"/></swipe-item>
		      <swipe-item><img :src="`http://img2.97hyg.com${$store.state.data.imgurl[1]}`"/></swipe-item>
		      <swipe-item><img :src="`http://img2.97hyg.com${$store.state.data.imgurl[2]}`"/></swipe-item>
		      <swipe-item><img :src="`http://img2.97hyg.com${$store.state.data.imgurl[3]}`"/></swipe-item>
		    </swipe>

		    <div class="show">
		    	<p>{{$store.state.data.title}}</p>
		    	<div class="price">
		    		<p>￥{{$store.state.data.price}}</p>
		    	</div>
		    </div>
		    <p class="shuoming">特别说明：苹果公司不是好运购赞助商，并且苹果公司也不会以任何形式参与其中！</p>
		    <ul>
		    	<li>图文详情<span>(建议在wifi下查看)</span><i class="iconfont icon-more"></i></li>
		    	<li class="last">晒单评论<i class="iconfont icon-more"></i></li>
		    </ul>		    		    
		</div>

		<div class="buy">
	    	<p>立即购买</p>	    	
	    </div>
	</div>
</template>

<script>
import "vue-swipe/dist/vue-swipe.css"; //css 模块化 导入
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from "axios"
export default {

  name: 'new',

  data () {
    return {

    }
  },
  mounted(){
  	console.log(this.$route.params.id)

	//window.removeEventListener('scroll', this.handleScroll)
  },

  components:{
    swipe:Swipe,
    "swipe-item":SwipeItem
  }
}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>

	header{
		width:100%;
		position: fixed;
		z-index:10;
		top: 0;
		left: 0;
		height: 0.88rem;
		background-color: #f7f7f7;
		overflow:hidden;
		.iconfont{
			font-size:24px;
			z-index:20;
			padding:0.2rem 0.2rem;
			color:#999;
		}
		.icon-back{
			float: left;			
		}
		.icon-viewgallery{
			float:right;
		}
	}
	.main{
		width:100%;
		position:relative;
		padding-top:0.88rem;
		//padding-bottom:1.02rem;
		background:#f7f7f7;
		.my-swipe{
			width:100%;
			background:#fff;
			height:4.8rem;
			img{
				width:4.8rem;
				height:4.8rem;
				display: block;
				margin:0 auto;
			}
		}
		.show{
			background:#fff;
			p{
			    color: #2c2c2c;
			    font-size: 14px;
			    width: 94%;
			    margin: 0 auto;
			}
			.price{
				padding:0.3rem 0 ;
				background:#f7f7f7;
				p{
					padding: 0.48rem 3%;
					border-top: 0.04rem solid #df231c;
					background:#fff;
					color:#ff3d00;
					font-weight:bold;
					font-size:17px;
				}
			}
		}
		.shuoming{
			padding:0.1rem;
			margin:0 auto;
			color:#8f8f94;
			font-size:14px;
		}
		ul{
			margin-top:0.2rem;
			background:#fff;
			border:0.02rem solid #d5d5d5;
			list-style:none;
			li{
				padding:0.22rem 0.3rem;
				font-size:15px;
				position:relative;
				span{
					font-size:12px;
					color:#999;
				}
				.icon-more{
					position:absolute;
					right:0.4rem;
				}
			}
			.last{
				border-top:0.02rem solid #d5d5d5;
			}
		}		
	}
	.buy{
		
		width:100%;
		height:0.62rem;
		padding:0.2rem 0;
		background:#ededed;
		font-size:14px;
		text-align: center;
		position:fixed;
		left:0;
		bottom:0;
		p{
			width:7rem;
			height:0.7rem;
			margin:0 auto;
			line-height: 0.7rem;
			text-align: center;
			background:#df2312;
			color:#fff;
			border-radius:0.1rem;
		}
	}

</style>