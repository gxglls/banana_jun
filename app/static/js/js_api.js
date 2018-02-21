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
	console.log("show_comment call");
	var ajax=new XMLHttpRequest();
	var reqUrl="http://www.liwenjing.我爱你/blog/comment?title_en="+title_en
	ajax.open("GET",reqUrl,false)
	ajax.send();
	document.getElementById("comment_div").innerHTML=ajax.responseText;
	console.log(document.documentElement.scrollHeight)
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
	show_comment("vim_to_ide")
//	ajax.onreadystatechange = function(){
//		if ( ajax.readyState == 4 && ajax.status == 200 ) {
//		} else {
//			;
//		}
//	};

} 
function test(event){
	console.log(event.target.scrollTop)
}
