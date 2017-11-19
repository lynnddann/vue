<template>
	<div>
		<footer>
			<span><i class="first"></i><router-link to="/home/hot" tag="p">首页</router-link></span>
			<span><i class="second"></i><router-link to="/catlog" tag="p">分类</router-link></span>
			<span><i class="third"></i><router-link to="/me" tag="p">我的</router-link></span>
		</footer>
	</div>
</template>

<script>
export default {

  name: 'new',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	footer{
		width:100%;
		height:1.02rem;
		position:fixed;
		left:0;
		bottom:-0.02rem;
		z-index:2;
		background:#fff;
		box-sizing:border-box;
		border-top:0.02rem solid #d5d5d5;
		span{
			width:33%;
			font-size:12px;
			text-align:center;
			float:left;
			p{
				font-size: 12px;
			    color: #626262;
			    line-height: 0.32rem;
			    margin-bottom:0.2rem;
			}
			i{
				width: 0.46rem;
			    height: 0.46rem;
			    display: block;
			    margin: 0.12rem auto 0.04rem;
			    background: url(../../assets/footernav.png) no-repeat;
			    background-size: auto 0.9rem;
			}
			.second{
				background-position:-23px 0;
			}
			.third{
				background-position:-46px 0;
			}
		}
	}
</style>