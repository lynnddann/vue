<template>
	<div>
		<div class="top">
			<router-link to="/catlog"><i class="iconfont icon-back"></i></router-link>
			<h1>{{$store.state.title}}</h1>
		</div>
		<div class="content">
			<p class="num">共<span>{{goodlist.length}}</span>件商品</p>
			<p v-if="isshow" class="kong">暂无商品</p>
			<ul>
				<li v-for="data in goodlist" @click="handleclick(data.shopid,data)">
					<div class="pic">
						<img :src="`http://img2.97hyg.com${data.thumb}`"/>
					</div>
					<div class="right">
						<div class="title">{{data.title}}</div>
						<p>商品总价<span>{{data.zongrenshu}}</span>元</p>
					</div>
				</li>
			
			</ul>
		</div>
	</div>
</template>

<script>
import router from "@/router"
export default {

  name: 'goodinfo',

  data () {
    return {
    	goodlist:[],
    	isshow:false
    }
  },
  mounted(){
  	console.log(this.$route.query.cateid)
  	fetch("/site/listajax",{
              method:'post',
              headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                       },
              body:`pageindex=1&pagesize=10&cateid=${this.$route.query.cateid}`
        }).then(res=>res.json()).then(res=>{
        	console.log(res.data.list)
        	this.goodlist=res.data.list
        	if(this.goodlist.length==0){
        		this.isshow = true;
        	}
        });
  },
  methods:{
  	handleclick(id,data){
  		//console.log(id)
  		router.push(`/detail/${id}`)
  		this.$store.commit('detaildata',data)
  	}
  }
}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
	.top{
		background:#fff;
		position: fixed;
	    z-index: 10;
	    right: 0;
	    left: 0;
	    height: 0.88rem;
	    padding-right: 0.2rem;
	    padding-left: 0.2rem;
	    border-bottom:0.02rem solid #d5d5d5;
	    .icon-back{
	    	float: left;
	    	line-height: 0.88rem;
	    	font-size:20px;
	    	coloe:#999;
	    }
	    h1{
	    	float:left;
	    	font-size: 18px;
	    	font-weight: 500;
	    	line-height: 0.88rem;
	    	width:5.9rem;
	    	text-align: center;
	    }
	}

	.content{
		padding-top:0.88rem;
		background:#f7f7f7;
		.num{
			height:0.8rem;
			line-height:0.8rem;
			font-size:14px;
			color:#8f8f94;
			padding-left:0.3rem;
		}
		.kong{
			font-size:14px;
			text-align: center;
			background:#f1eeec;
			height:0.8rem;
			line-height: 0.8rem;
			color:#999;
		}
		ul{
			background:#fff;
			list-style: none;
			li{
				padding:0.2rem 0.3rem;
				border-bottom:0.02rem solid #d5d5d5;
				overflow: hidden;
				.pic{
					float:left;
					width:20%;
					height:20%;
					img{
						display: block;
						width:100%;
						height:20%;
					}
				}
				.right{
					float:left;
					width:77%;
					font-size:13px;
					margin-left:3%;
					.title{
						color:#666;
						margin-bottom:0.2rem;
					}
					p{
						color:#8f8f94;
						font-size:12px;
					}
				}
			}
		}
	}
</style>