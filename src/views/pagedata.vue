<template>
	<div class="body">
		<div class="body-light">
			<div class="tu"><img class="photo" src="../../public/images/t1.jpg"/></div>
			<div class="tu"><img class="photo" src="../../public/images/t2.jpg"/></div>
			<div class="tu"><img  class="photo" src="../../public/images/t3.jpg"/></div>
			<div class="tu"><img class="photo"  src="../../public/images/t4.jpg"/></div>
			<div class="tu"><img  class="photo" src="../../public/images/t5.jpg"/></div>
			<div class="tu"><img  class="photo" src="../../public/images/t6.jpg"/></div>
		</div>
		<div class="body-centre">
			<h1>{{pagedata[0].articletitle}}</h1>
			<div style="display: flex;">
				<img src="../../public/images/tou.jpg" style="height: 50px; width: 65px;"/>
				<img src="../../public/images/xin.jpg" style="height: 50px; width: 50%;"/>
			</div>
			<div>
				<h2>1,{{pagedata[0].datacontent.title1}}</h2>
				<img :src="pagedata[0].photo" style="width: 80%;"/>
				<p>&nbsp&nbsp&nbsp&nbsp{{pagedata[0].datacontent.content}}</p>
				<h2>2,{{pagedata[0].datacontent.title2}}</h2>
				<img :src="pagedata[0].datacontent.content2photo" style="width: 80%;"/>
				<p>&nbsp&nbsp&nbsp&nbsp{{pagedata[0].datacontent.content2}}</p>
			</div>
		</div>
		<div class="body-right">
			<div style="margin-bottom: 30px;">
				<img src="../../public/images/xinxi.jpg" style="height: 150px; width: 100%;"/>
			</div>
			<div style="margin-bottom: 30px;">
				<img src="../../public/images/g3.jpg" style="height: 100px; width: 100%;"/>
			</div>
			<div>
				<img src="../../public/images/g4.jpg" style="height: 200px; width: 100%;"/>
			</div>
			<div class="mulu">
				<h3 style="margin: 10px;">目录</h3>
				<p>1,{{pagedata[0].datacontent.title1}}</p>
				<p>2,{{pagedata[0].datacontent.title2}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import datajson from '../../public/data/data.json';
	export default{
		name :'pagedata',
		 data() {
		      return {
				pagedata :datajson.pagedata,
		      };
		    },
		    methods: {
		    
			 }
		    
	}
</script>

<style>
	.photo{
		width: 60%;
		height: 60%;
		border-radius: 50%;
		align-content: center;
		margin:10px ;
	}
	.body-light{
		position: fixed;
		left: 10px;
		top: 120px;
		width: 50px;
		height: 440px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	 .tu{
		margin:2px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
	    background-color: #ffffff;
	}
	.body{
		padding-top: 20px;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		background-color: #f0f0f0;
	}
	.body-centre{
		margin-right: 10px;
		width: 750px;
		height: 100%;
		background-color: #ffffff;
		padding-left: 20px;
	}
	.mulu{
		background-color: #ffffff;
		width: 250px;
		height: 250px;
		margin-top: 30px;
	}
	.body-right{
		margin-left: 10px;
		width: 250px;
		height: 1000px;
		
		/* border: 2px red solid; */
	}
</style>