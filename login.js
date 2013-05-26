(function()
{	       
//index=window.localStorage.getItem("index");

$(document).ready(function(){
						$("#display").html(window.localStorage.getItem("index:1").account);
					});	

	if(!window.localStorage.getItem("index")){
		window.localStorage.setItem("index",0);
	}
				/*
				var id=window.localStorage.getItem("account");
				var pwd=window.localStorage.getItem("password");
				if(id!==""&&pwd!=="")
				{
					$(document).ready(function(){
						$("#display").html("账号"+id+"密码"+pwd);
					});	
				}
				*/
				
				$.ajax({
				type: "GET",
				url: "http://login.swu.edu.cn/account/check_now.jsp",
				success: function(msg){
				var rt=$(msg).find("b:first").text();
				if(rt=="") //not login
				{
					alert("not login");
					
				}
				else if(rt=="ÓÃ»§·ÑÓÃ²éÑ¯½á¹û")
				{
					alert("login");
				}
				else alert("no money");
				},
				error:function()
				{
					
				}
				});
				
	$(document).ready(function(){
		$("#save").bind("click",function(){
		var index=parseInt(window.localStorage.getItem("index"))+1;
		window.localStorage.setItem("index:"+index,JSON.stringify({account:$("#account").val(),password:$("#password").val()}));
		$("#display").html(window.localStorage.getItem("index:"+index).account);
		
			//window.localStorage.setItem("account",$("#account").val());
			//window.localStorage.setItem("password",$("#password").val());
			//var id=window.localStorage.getItem("account");
			//var pwd=window.localStorage.getItem("password");
			//$("#display").html("账号"+id+"密码"+pwd);				
		});
	});
				
	
	$(document).ready(function(){
  	    $("#login").bind("click",function(){ 
			jQuery.post("http://login.swu.edu.cn/login/login1.jsp",{username:id,password:pwd},function(){alert("1");})  
		});
	});			
			  
			
})();