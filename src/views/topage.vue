<template>
	<div class="main">
		<div class="title-two"  >
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			 <el-menu-item index="11" style="width: 50px;">综合</el-menu-item>
			 <el-menu-item index="22" style="width: 50px;">关注</el-menu-item>
			 <el-menu-item index="33" style="width: 50px;">后端</el-menu-item>
			 <el-menu-item index="44" style="width: 50px;">前端</el-menu-item>
			 <el-menu-item index="55" style="width: 50px;">IOS</el-menu-item>
			 <el-menu-item index="66" style="width: 50px;">笔记</el-menu-item>
			 <el-menu-item index="77" style="width: 50px;">阅读</el-menu-item>
			 <el-menu-item index="88" style="width: 50px;">代码人生</el-menu-item>
			</el-menu>
		</div>
		<div class="body1">
			<div class="body-centre1">
				<div class="body-centre-title">
					<p class="body-centre-title-hou">推荐</p>
					<p class="body-centre-title-hou">最新</p>
					<p >热榜</p>
				</div>
				<!-- 首页文章标题时间等信息 -->
				<div  class="body-centre-txt"  v-for="i in count " :id="pagedata[(i-1)%6].id" @click="goPage()">
					<!-- 左侧信息 -->
					<div style="width:70%;">
						<!-- infinite-scroll-distance="400" -->
						<!-- 作者名 、时间、文章分类-->
						<div class="body-centre-txt-title">
							<div class="infinite-list"
								v-infinite-scroll="load" 
								style="overflow:auto"
								infinite-scroll-throttle-delay="300"
								infinite-scroll-disabled="busy">
								<p class="infinite-list-item" >{{pagedata[(i-1)%6].id}}</p>	
							</div>
							<div class="infinite-list" 
								v-infinite-scroll="load"
								style="overflow:auto"
								infinite-scroll-throttle-delay="300"
								infinite-scroll-disabled="busy">
								<p class="infinite-list-item" >{{pagedata[(i-1)%6].time}}</p>	
							</div>
							<div class="infinite-list"
								v-infinite-scroll="load"
								style="overflow:auto"
								infinite-scroll-throttle-delay="300"
								infinite-scroll-disabled="busy">
								<p class="infinite-list-item" >{{pagedata[(i-1)%6].datatype}}</p>	
							</div>
						</div>
						<!-- 文章标题、内容-->
						<div style="margin-left: 10px;">
							<h4 style="margin-top: 1px;margin-bottom: 10px;">{{pagedata[(i-1)%6].articletitle}}</h4>
							<p style="margin-top: 1px;
								font-size: 13px;
								color: #79869d;
								width: 100%;
								overflow:hidden;  
								white-space: nowrap;  
								text-overflow:ellipsis;">
							{{pagedata[(i-1)%6].datacontent.title1}}</p>
						</div>
					</div >
					<!-- 右侧图片 -->
					<div style="width: 30%;">
						<img :src="pagedata[(i-1)%6].photo" style="height: 80%;width: 80%;margin-top: 15px;bootm: 10px"/>
					</div>
				</div>	
			</div>
			<!-- 传值 -->
			<pagadata :id = "name"></pagadata>
			<div class="body-right1">
				<!-- 悬浮广告 -->
				<div class="fixedSearch" v-show="showFixedSearch">
					<div class="g3">
						<img src="../../public/images/g4.jpg" style="height: 100%;width: 100%;"/>
					</div>
					<div class="g2">
						<img src="../../public/images/g5.jpg" style="height: 100%;width: 100%;"/>
					</div>
					<div class="g1">
						<img src="../../public/images/g3.jpg" style="height: 100%;width: 100%;"/>
					</div>
				</div>
				<div class="g1">
					<img src="../../public/images/g1.jpg" style="height: 100%;width: 100%;"/>
				</div>
				<div class="g2">
					<a href="https://juejin.cn/post/7125658251852513294?utm_source=web&utm_medium=banner&utm_campaign=creator0729">
						<img src="../../public/images/g4.jpg" style="height: 100%;width: 100%;"/>
					</a>
				</div>
				<div class="g3">
					<a href="https://juejin.cn/post/7123120819437322247?utm_source=web&utm_medium=banner&utm_campaign=gengwen202208">
						<img src="../../public/images/g5.jpg" style="height: 100%;width: 100%;"/>
					</a>
				</div>
				<div class="g4">
					<img src="../../public/images/g3.jpg" style="height: 100%;width: 100%;"/>
				</div>
				<div class="g5">
					<img src="../../public/images/g2.jpg" style="height: 100%;width: 100%;"/>
				</div>
				<!-- 底下文字 -->
				<div class="right-world">
					<table style="font-size: 12px; color:#79869d">
						<tr>
							<td><a href="https://lf3-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/juejin/86857833-55f6-4d9e-9897-45cfe9a42be4.html">用户协议</a></td>
							<td><a href="https://juejin.cn/license">营业执照</a></td>
							<td><a href="https://lf3-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/juejin/7b28b328-1ae4-4781-8d46-430fef1b872e.html">隐私政策</a></td>
							<td><a href="https://juejin.cn/about">关于我们</a></td>
						</tr>
						<tr>
							<td><a href="https://juejin.cn/map-author-A-1">站点地图</a></td>
							<td><a href="https://juejin.cn/book/6844733795329900551">使用指南</a></td>
							<td><a href="https://juejin.cn/links">友情链接</a></td>
							<td><a href="https://juejin.cn/more_posts">更多文章</a></td>
						</tr>
					</table>
					<P><a href="https://beian.miit.gov.cn/#/Integrated/index">京IC备18012699号-3</a></P>
					<div style="display: flex;margin-bottom: 1px;">
						<img src="../../public/images/jing.jpg" style="margin-top: 10px;" width="20px" height="20px"/>
						<p><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802026719">京公网安备11010802026719</a></p>
					</div>
					<p>版权所有：北京北比信息技术有限公司</p>
					<P>公司地址：北京市海淀区信息路甲28号13层B座13B-5</P>
					<p>公司座机：010-83434395</p>
					<p class="haha">举报邮箱：ffdback@xitu.io</a></p>
					<p class="haha">&copy;2022稀土掘金</a></p>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import datajson from '../../public/data/data.json';
	export default {
		index :'Topage',
		data() {
		    return {
				name:"",
				pagedata :datajson.pagedata,
				showFixedSearch: false,
				busy:false,
				count:1,
		        activeIndex: '1',
		        activeIndex2: '1'
		      };
		    },
			 mounted() {
			    // 监听页面滚动事件
			     window.addEventListener("scroll", this.showSearch)
			        },
		     methods: {
				showSearch() {
				    // 获取当前滚动条向下滚动的距离
				    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				     // 当页面滚动到高度1400px处时，显示搜索框
				    if (scrollTop > 1400) {
				        this.showFixedSearch = true;
				        }
					else {
				         this.showFixedSearch = false;
				        }
				    },
				// 回调函数load
				  load () {
					// busy决定是否执行load,false(不繁忙)时候执行
					 this.busy = true
					// setTImeout(要执行的代码,等待的毫秒数)
					setTimeout(() =>{
						this.count+=1 
						this.busy = false
					},300)
    			  },
				  // 跳转到另一个页面
			       goPage() {
			          this.$router.push('pagedata');
			      }
		    },
			// 监听
			watch:{
				// 当count数值改变时执行
				count:{
					handler(){
						this.busy = false	
					}
				}
			}
	}
</script>

<style>
	/* 超链接去掉样式 */
	a{ 
	    text-decoration:none !important;
		color: #79869d;
	}
	/* 鼠标经过超链接标签和haha类时颜色改变 */
	a:hover{
		color: #00aaff;
	}
	.haha:hover{
		color: #00aaff;
	}
	.right-world{
		font-size: 12px;
		color: #79869d;
		margin: 2px;
	}
	.fixedSearch{
		position: fixed;
		top: 30px;
	}
	.body-centre-txt-title{
		display: flex;
	}
	.infinite-list-item{
		background-color: #ffffff;
		font-size: 14px;
		margin-top: 15px;
		margin-bottom: 10px;
		color: #79869d;
	}
	.infinite-list{
		/* border: 3px solid slateblue; */
		margin-left:10px ;
		margin-right:10px ;
	}
	.body-centre-txt{
		display: flex;
		justify-content: space-between;
		height: 130px;
		width: 100%;
		background-color: #ffffff;
		border-bottom: 2px solid #f0f0f0;
	}
	.body-centre1{
		height: 100%;
		width: 55%;
		margin-left: 10px;
		margin-right: 20px;
	}
	.body1{
		padding-top: 8px;
		display: flex;
		height: 100%;
		justify-content: center;
		background-color: #f0f0f0;
	}
	.main{
		width: 100%;
		height: 100%;
	}
	.body-centre-title{
		display: flex;
		border-bottom: 2px solid #f0f0f0;
		background-color: #ffffff;
	}
	.body-centre-title-hou{
		width: 45px;
		margin-left: 20px;
		border-right: 2px solid #f0f0f0;
	}
	.body-centre-title p{
		width: 45px;
		margin-left: 20px;
		color: #989898;
	} 
	.title-two{
		width: 88%;
		background-color: #ffffff;
		margin-left: 113px;
		margin-top: 5px;
	}
	/* 右边广告样式 */
	.body-right1{
		margin-left: 10px;
		width: 250px;
		/* height: 10000px; */
		/* background-color: #ffffff; */
	} 
	.g1{
		width: 250px;
		height: 100px;
		background-color: #ffffff;
		border-bottom:15px solid #f0f0f0 ;
	}
	.g2{
		width: 250px;
		height: 200px;
		background-color: #ffffff;
		border-bottom:15px solid #f0f0f0 ;
	}
	.g3{
		width: 250px;
		height: 200px;
		background-color: #ffffff;
		border-bottom:15px solid #f0f0f0 ;
	}
	.g4{
		width: 250px;
		height: 90px;
		background-color: #ffffff;
		border-bottom:15px solid #f0f0f0 ;
	}
	.g5{
		width: 250px;
		height: 180px;
		background-color: #ffffff;
		border-bottom:15px solid #f0f0f0 ;
	}
</style>