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
	var reqUrl="http://www.liwenjing.我爱你/blog/tag"
	var data={"tag_id":tag_id}
	ajax.open("POST",reqUrl,true)
	ajax.setRequestHeader("Content-type","application/json");
	ajax.send(JSON.stringify(data));
	ajax.onreadystatechange = function(){
		if ( ajax.readyState == 4 && ajax.status == 200 ) {
			document.getElementById("myDiv").innerHTML=ajax.responseText;
		} else {
			;
		}
	};

}
function show_article(event){
	//把边框加入当前元素
	var article_name = event.target.id;

	//ajax拉请求

	var ajax=new XMLHttpRequest();
	var reqUrl="http://www.liwenjing.我爱你/blog/article"
	var data={"article_name":article_name}
	ajax.open("POST",reqUrl,true)
	ajax.setRequestHeader("Content-type","application/json");
	ajax.send(JSON.stringify(data));
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
	var reqUrl="http://www.liwenjing.我爱你/blog/comment"
	var data={"title_en":title_en}
	ajax.open("POST",reqUrl,true)
	ajax.setRequestHeader("Content-type","application/json");
	ajax.send(JSON.stringify(data));
	ajax.onreadystatechange = function(){
		if ( ajax.readyState == 4 && ajax.status == 200 ) {
			//document.getElementById("comment_div").innerHTML=ajax.responseText;
			document.write(ajax.responseText);
		} else {
			;
		}
	};

}
