// $(function(){
// 	var t=0;
// 	var n;
// 	$(".controlls li").click(function(e){
// 		e.preventDefault();
// 		t = $(this).index();
// 		n = t * -100 ;
// 		$(".keyvisual ul").css({"left" : n + "%" })
// 		$(".controlls li").removeClass("active")
// 		$(this).addClass("active")
// 	})
// 	/*main pannerl js*/
// 	$(".main_panel li").hover(
// 		function(){
// 			$(this).children().addClass("on")
// 		},
// 		function(){
// 			$(this).children().removeClass("on")
// 		}
// 	)
// });

window.addEventListener("load",function(){
	var keyvisual=document.getElementsByClassName("keyvisual")[0]
	var keyimg={
		key1 : "keyvisual2.jpg",
		key2 : "keyvisual1.jpg"
	}
	var dataN=0;
	var keystring="", controllstring="";

	controllstring+='<ul>\n'
	keystring+='<ul>\n'
	for(key in keyimg){ //for in을 for문으로 돌리는 방법!!! 키값 속성
		keystring+='<li><a href=""><img src="images/'+keyimg[key]+'".jpg alt="keyvisual'+(dataN+1)+'"></a></li>\n'

		controllstring+='<li><a href="">'+(dataN+1)+'</a></li>'
		dataN++;
	}
	keystring+='</ul>'
	controllstring+='</ul>'

	var picture =document.createElement("div") //메모리 그리고1
	picture.setAttribute("class","keyvisual_inner") // 속성을 추가하고
	console.log(picture); // 화면을 그리기!
	keyvisual.appendChild(picture)
	picture.innerHTML=keystring

	var controlls =document.createElement("div")
	controlls.setAttribute("class","controlls")
	console.log(controlls);
	keyvisual.appendChild(controlls)
	controlls.innerHTML=controllstring

	var key =document.getElementsByClassName("keyvisual")[0]
	var keyUl =key.children[0]
	// var controlls=key.children[1].children[0].children //controlls li
	var t=0;
	var n=0;
	console.log(controlls);
	for (var i = 0; i < controlls.length; i++) {
		controlls[i].index=i
		controlls[i].addEventListener("click",function(e){
			e.preventDefault()
			if (i ==n) {

			}
			var controllLi=e.currentTarget;
			controllLi.parent.classList.add("active")
			if (n < 1) {
				n++
			}
			else {
				n=0
			}
			t= n*-100;
			keyUl.style.left=t+"%"
		})
	}



})
// window.addEventListener("load",function(){
// 	var popup=document.getElementsByClassName("popup")[0]
// 	var popupBtn=popup.children[1]
// 	var popupA=popupBtn.children
// 	for (var i = 0; i < popupA[i].length; i++) {
// 		if (popupA[i].id == "more") {
// 			var more=popupA[i]
// 			console.log(more);
//
// 		}
// 	}
//
// })
