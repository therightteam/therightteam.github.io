<template>
	<div>
		<div class="title-two">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			 <el-menu-item index="11" style="width: 50px;">综合</el-menu-item>
			 <el-menu-item index="22"style="width: 50px;">关注</el-menu-item>
			 <el-menu-item index="33"style="width: 50px;">后端</el-menu-item>
			 <el-menu-item index="44"style="width: 50px;">前端</el-menu-item>
			 <el-menu-item index="55"style="width: 50px;">IOS</el-menu-item>
			 <el-menu-item index="66"style="width: 50px;">笔记</el-menu-item>
			 <el-menu-item index="77"style="width: 50px;">阅读</el-menu-item>
			 <el-menu-item index="88"style="width: 50px;">代码人生</el-menu-item>
			</el-menu>
		</div>
		<div class="body">
			<div class="body-centre">
				
				<p index="pagedata" @click="goPage()" >我是文章标题</p>
				
				
			</div>
			<div class="body-right">
			
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name :'Topage',
		 data() {
		      return {
		        activeIndex: '1',
		        activeIndex2: '1'
		      };
		    },
		    methods: {
		      handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		      },
			   goPage() {
			        this.$router.push('pagedata');
			      }
		    }
	}
</script>

<style>
	.title-two{
		width: 100%;
		height: 40px;
		background-color: #ffffff;
		
		margin-left: 113px;
	}
	.body{
		padding-top: 20px;
		width: 100%;
		height: 1000px;
		display: flex;
		justify-content: center;
		background-color: #f0f0f0;
	}
	.body-centre{
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
	}
</style>