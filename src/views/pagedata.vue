<template>
	<div class="body">
		<div class="body-centre">
			<p>我是文章内容</p>
		</div>
		<div class="body-right">
		</div>
	</div>
</template>

<script>
	export default{
		name :'pagedata',
		 data() {
		      return {
		        data(){
					
				}
		      };
		    },
		    methods: {
		     
		      }
		    
	}
</script>

<style>
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