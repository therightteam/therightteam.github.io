<template>
	<div>
		<div class="title">
			<div class="title-one">
				<img src="../../public/images/logo.jpg" style="height: 50px;width: 50px;"/>
				<h4>稀土掘金</h4>
			</div>
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			 <el-menu-item index="2" style="width: 50px;">首页</el-menu-item>
			 <el-menu-item index="3" style="width: 50px;">沸点</el-menu-item>
			 <el-menu-item index="1" style="width: 50px;">课程</el-menu-item>
			 <el-menu-item index="5" style="width: 50px;">直播</el-menu-item>
			 <el-menu-item index="6" style="width: 50px;">活动</el-menu-item>
			 <el-menu-item index="7" style="width: 50px;">商城</el-menu-item>
			 <el-menu-item index="8" style="width: 50px;">APP</el-menu-item>
			 <el-menu-item index="9" style="width: 50px;">插件</el-menu-item>
			</el-menu>
			<el-input v-model="input" placeholder="探索稀土掘金" style="width: 200px; padding-left:80px ;padding-top:4px" >	
			</el-input>
			<el-button type="primary" icon="el-icon-search" style="height: 45px; padding-top:15px ;">搜索</el-button>
			 <el-select v-model="value" clearable placeholder="创作者中心" style="width: 120px;margin-left: 20px;">
				 <el-option
				 v-for="item in options"
				 :key="item.value"
				 :label="item.label"
				 :value="item.value">
				 </el-option>
			 </el-select>
			 <div class="title-three">
				 <img src="../../public/images/hui.jpg" style="height: 45px; width: 50px;"/>
				 <p style="color: gray;">会员</p>
			 </div>
			 <div class="title-four">
				 <img src="../../public/images/ling.jpg" style="height: 30px;width: 30px; margin-left:12px ;margin-top: 10px;"/>
				 <img src="../../public/images/tou.jpg" style="height: 40px;width: 55px; margin-left:20px ;margin-top: 7px;"/>
			 </div>
		</div>
		<router-view></router-view>
		<!-- <div class="title-two">
			
		</div>
		<div class="body">
			<div class="body-centre">
		
			</div>
			<div class="body-right">
			
			</div>
		</div> -->
	</div>
</template>

<script>
	export default{
		name :'Index',
		 data() {
		      return {
				   options: [{
				            value: '选项1',
				            label: '写文章'
				          }, {
				            value: '选项2',
				            label: '发沸点'
				          }, {
				            value: '选项3',
				            label: '写代码'
				          }],
				          value: '',
		        activeIndex: '1',
		        activeIndex2: '1'
		      };
		    },
		    methods: {
		      handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		      }
		    }
	}
</script>

<style>
	.title-four{
		display: flex;
	}
	.title-three{
		display: flex;
		/* margin-left: 20px; */
	}
	.title-one{
		display: flex;
	}
.title{
	width: 100%;
	height: 55px;
	background-color: #ffffff;
	display: flex;
	border-bottom: 4px solid #f0f0f0;
}
/* .title-two{
	width: 100%;
	height: 40px;
	background-color: #ffffff;
	border-top: 2px solid #f0f0f0;
} */
/* .body{
	padding-top: 20px;
	width: 100%;
	height: 1000px;
	display: flex;
	justify-content: center;
	background-color: #f0f0f0;
} */
/* .body-centre{
	margin-right: 10px;
	width: 750px;
	height: 1000px;
	background-color: #ffffff;
}
.body-right{
	margin-left: 10px;
	width: 250px;
	height: 1000px;
	background-color: #ffffff;
} */

</style>