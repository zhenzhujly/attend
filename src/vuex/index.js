import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	count:1,
	zhenzhu:{
		names:'珍珠'
	}
};
const mutations = { //所有修改的state的行为动作都写在此处
	add(state){
		this.state.count += 1
	},
	reduce(state){
		this.state.count -= 1
	},
	adds(state){
		this.state.count += 10
	},
	reduces(state){
		this.state.count -= 10
	}
};
const actions = {

};
const getters = {
	
};

export default new Vuex.Store({
	state, //数据的存储，访问对象  
	mutations, //是开发人员做的一些行为动作,state只允许在此处修改
	actions, //异步改变，也就是提交mutations的一些修改 $store.commit
	getters //是得到的意思，就是获得属性进行操作
});


/*const moduleA = {
	state:{
		count:1
	},  
	mutations:{
	add(state){
		this.state.a.count += 10
	},
	reduce(state){
		this.state.a.count -= 1
	}
	},
	actions:{},
	getters:{}
};
const moduleB = {
	state:{},  
	mutations:{},
	actions:{},
	getters:{}
};
export default new Vuex.Store({
	modules:{
		a:moduleA,
		b:moduleB
	}
})*/