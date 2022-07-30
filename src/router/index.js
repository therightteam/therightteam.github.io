import Vue from "vue";
import VueRouter from "vue-router";
import topage from "../views/topage.vue"
import index from '../views/index';
import pagedata from '../views/pagedata.vue';
Vue.use(VueRouter)

const routes =
[
    {
        path :'/',
        component :index,
        name :'/index',
		children:[
	        { 	path :'/',
				component :topage,
				name :'/topage',
				},
			{ 	path :'/pagedata',
				component :pagedata,
				name :'/pagedata',
				}
		      ]
    }
]

const router = new VueRouter({
    mode :'history',
    routes,
})

export default router;