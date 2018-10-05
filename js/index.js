

	
	$(function () {
		// 函数封装
		

		// 左侧导航条的点击事件
		$("#shouye").click(function(){
			$(".change").load("pages/shouye.html");
		});
		$("#lmgl").click(function(){
			$(".change").load("pages/lmgl.html");
		});
		$("#zxgl").click(function(){
			$(".change").load("pages/zxgl.html");
		});
		$("#users").click(function(){
			$(".change").load("pages/user.html");
		});
		// 默认显示首页
		$('#shouye').trigger('click');
		
		
		



	});
    	
	