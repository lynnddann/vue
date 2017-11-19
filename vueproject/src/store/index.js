import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		title:"优选商品",
		data:{
			title:"海飞丝",
			price:59,
			imgurl:["http://img2.97hyg.com/content/20170523/20170523163414_01330.jpg",
			"http://img2.97hyg.com/content/20170523/20170523163415_76873.jpg",
			"http://img2.97hyg.com/content/20170523/20170523163415_37067.jpg",
			"http://img2.97hyg.com/content/20170523/20170523163415_42815.jpg"
			]
		}
	},

	mutations:{
		changetitle(state,payload){
			//console.log(payload)
			state.title = payload
		},
		detaildata(state,payload){
			//console.log(payload.picarr.split(','))
			state.data.title = payload.title
			state.data.price = payload.zongrenshu
			state.data.imgurl = payload.picarr.split(',')
		}
	},

	actions:{

	}
})

export default store