
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
	for(key in keyimg){
		keystring+='<li><a href=""><img src="images/'+keyimg[key]+'".jpg alt="keyvisual'+(dataN+1)+'"></a></li>\n'

		controllstring+='<li><a href="">'+(dataN+1)+'</a></li>'
		dataN++;
	}
	keystring+='</ul>'
	controllstring+='</ul>'

	var picture =document.createElement("div")
	picture.setAttribute("class","keyvisual_inner")
	keyvisual.appendChild(picture)
	picture.innerHTML=keystring

	var controlls =document.createElement("div")
	controlls.setAttribute("class","controlls")
	keyvisual.appendChild(controlls)
	controlls.innerHTML=controllstring


	var pictureUl =picture.children[0] //keyvisual ul
	var controllLi =controlls.children[0].children // controllLi
	var t=0;
	var n=0;
	for (var i = 0; i < controllLi.length; i++) {
		controllLi[i].addEventListener("click",function(e){
			e.preventDefault()
			if (n < 1) {
				n++
			}
			else {
				n=0
			}
			t= n*-100;
			pictureUl.style.left=t+"%"
		})
	}
	var n2=0;
	var t2=0;
	timer=setInterval(function(){
		if (n2 < 1) {
			n2++
		}
		else {
			n2=0
		}
		t2=n2*-100;
		pictureUl.style.left=t2+"%"
	},4000)
	//팝업관련된 내용
	var popup=document.getElementsByClassName("popup")[0]
	var popBtn=popup.children[1].children // popup > btn
	var close=popup.children[1].children[1]
	var dim =document.getElementsByClassName("dim")[0]
	var interactive; //인터벌 막는거
	var opacity=1; //초기값 지정

	function fadeout(element){
		interactive=setInterval(function(){
			if (opacity > 0) {
				opacity= opacity - 0.1
			}
			else {
				opacity=0;
				clearInterval(interactive)
				element.style.display="none" //마지막에 값을 없애야됨
			}
			element.style.opacity=opacity
		},20); //hide()이렇게 쓰면 retrun식으로 되니까 안되는것
	}
	close.addEventListener("click", function(e){
		e.preventDefault();
		fadeout(popup);
		fadeout(dim)
	})

	//GNB 관련된 내용!
	var nav=document.getElementById("GNB")
	var navli=nav.children[0]; // nav > ul
	var depth1=navli.children //nav > li 각각의 li를 의미!
	var shadow=document.getElementsByClassName("shadow")[0];
		for (var i = 0; i < depth1.length; i++) {
			depth1[i].addEventListener("mouseenter",function(e){
				e.preventDefault();
				//classList.add("active")
				e.target.children[0].classList.add("active")
				navli.classList.add("active")
				shadow.classList.add("active")
			})
			depth1[i].addEventListener("mouseleave",function(e){
				e.preventDefault();
				e.target.children[0].classList.remove("active")
				navli.classList.remove("active")
				shadow.classList.remove("active")
			})
		}
})
