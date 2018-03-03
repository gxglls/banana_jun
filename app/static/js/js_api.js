function tag_status_change(event){

	//干掉其他的边框
	var allTag=document.getElementsByClassName("a_custom");
	for (i=0;i<allTag.length;i++){
		if (allTag[i].id!=event.target.id){
			allTag[i].style.border="none";
		}
	}

	//把边框加入当前元素
	var tag_id = event.target.id;
	document.getElementById(tag_id).style.border="solid";

	//ajax拉请求

	var ajax=new XMLHttpRequest();
	var reqUrl="http://www.liwenjing.我爱你/blog/tag?tag_id="+tag_id
	//var data={"tag_id":tag_id}
	ajax.open("GET",reqUrl,true)
	//ajax.setRequestHeader("Content-type","application/json");
	//ajax.send(JSON.stringify(data));
	ajax.send()
	ajax.onreadystatechange = function(){
		if ( ajax.readyState == 4 && ajax.status == 200 ) {
			document.getElementById("myDiv").innerHTML=ajax.responseText;
		} else {
			;
		}
	};

}
function show_comment(title_en){
	var ajax=new XMLHttpRequest();
	var reqUrl="http://www.liwenjing.我爱你/blog/comment?title_en="+title_en
	ajax.open("GET",reqUrl,false)
	ajax.send();
	document.getElementById("comment_div").innerHTML=ajax.responseText;
//	ajax.onreadystatechange = function(){
//		if ( ajax.readyState == 4 && ajax.status == 200 && document.getElementById("comment_div") ) {
//			document.getElementById("comment_div").innerHTML=ajax.responseText;
//		} else {
//			;
//		}
//	};

}
function show_article(event){

	var article_name = event.target.id;

	//ajax拉请求

	var ajax=new XMLHttpRequest();
	var reqUrl="http://www.liwenjing.我爱你/blog/article?article_name="+article_name
	ajax.open("GET",reqUrl,false)
	ajax.send();
	document.getElementById("myDiv").innerHTML=ajax.responseText;
	show_comment("vim_to_ide");
	show_article_praise("vim_to_ide");
//	ajax.onreadystatechange = function(){
//		if ( ajax.readyState == 4 && ajax.status == 200 ) {
//			document.getElementById("myDiv").innerHTML=ajax.responseText;
//			show_comment("vim_to_ide",false);
//		} else {
//			;
//		}
//	};


} 
function send_comment(formId,titleEn){

	var form = document.getElementById(formId);

	//ajax拉请求

	var fd=new FormData(form);
	var ajax=new XMLHttpRequest();
	var reqUrl="http://www.liwenjing.我爱你/blog/comment"
	ajax.open("POST",reqUrl,false)
	ajax.send(fd);
	show_comment("vim_to_ide");
	scroll_smoothY(document.getElementById("commentHead").offsetTop);

} 
function scroll_smoothY(top){
	current_y=window.pageYOffset;
	//平滑度调节
	step=5;
	scrollNum=Math.ceil((current_y-top)/step);
	for(i=0;i<scrollNum;i++){
		setTimeout("window.scrollTo(0,window.pageYOffset-step)",35);	
	}

}
function show_article_praise(articleName){
	var ajax=new XMLHttpRequest();
	var reqUrl="http://www.liwenjing.我爱你/blog/praise?articleName="+articleName
	ajax.open("GET",reqUrl,false)
	ajax.send();
        document.getElementById("currentPraise").innerHTML="|"+ajax.responseText
}
function add_article_praise(articleName){
	var ajax=new XMLHttpRequest();
//	var ipUrl="http://pv.sohu.com/cityjson?ie=utf-8"
//	ajax.open("GET",ipUrl,false);
//	ajax.send();
//	console.log(ajax.responseText)

	var reqUrl="http://www.liwenjing.我爱你/blog/praise"
	ajax.open("POST",reqUrl,false)
	var data={"titleEn":articleName}
	ajax.open("POST",reqUrl,true)
	ajax.setRequestHeader("Content-type","application/json");
	ajax.send(JSON.stringify(data));
	ajax.onreadystatechange = function(){
		if ( ajax.readyState == 4 && ajax.status == 200 ) {
			if ( ajax.responseText=="done" ){
				alert("已经点过赞啦   ^_^");
			}else{
				document.getElementById("currentPraise").innerHTML="|"+ajax.responseText
			}
		} else {
			;
		}
	};
}
function test(){
	console.log(window.pageYOffset)
}
