<template>
	<div>
		<section>
			<p>特别说明：苹果公司不是好运购赞助商，并且苹果公司也不会以任何形式参与其中</p>
			<p class="fair">
				<i class="first"></i>
				公平公正公开
				<i class="second"></i>
				正品保障
				<i class="third"></i>
				权益保障
			</p>
			<p>版权所有  www.97hyg.com上海朝夜信息技术有限公司</p>
			<p class="last">沪ICP备16017374号－3</p>
		</section>
	</div>
</template>

<script>
export default {

  name: 'shuoming',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	section{
		width:100%;
		background: #fff;
		margin-bottom: 1.02rem;
		p{
			font-size:12px;
			color: #999;
			text-align: center;
			padding:0 2%;
		}
		p:first-child{
			text-align: left;
		    border-bottom: 0.02rem dashed #e8e8e8;
		    padding: 0.12rem 2%;
		}
		.last{
			padding:0.16rem 0 ;
		}
		.fair{
			line-height: 0.44rem;
			padding:0.06rem 2%;
			i{
				display: inline-block;
			    width: 0.32rem;
			    height: 0.34rem;
			    vertical-align: middle;
			}
			.first{
				background: url(../../assets/footer.png) no-repeat;
				background-size: 46px;

			}
			.second{
				background: url(../../assets/footer.png) no-repeat;
				background-size: 46px;
				background-position:-15px;
				margin: -0.04rem 0.08rem 0 0.4rem;
			}
			.third{
				background: url(../../assets/footer.png) no-repeat;
				background-size: 46px;
				background-position:-31px;
				margin: -0.04rem 0.08rem 0 0.4rem;
			}
		}
	}
</style>