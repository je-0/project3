$(function(){
	var n=0;
	// tab 메뉴 관련된 내용!
	$(".main_tab li").click(function(e){
		e.preventDefault()
		n=$(this).index();
		$(".main_tab li").removeClass("on")
		$(this).addClass("on")
		$(".main .main1").hide()
		$(".main .main1").eq(n).fadeIn(300)
	})
	$(".main1 ul li").hover(
		function(){
			$(this).children().css({"color":"#009132","text-decoration":"underline"})
		},
		function(){
			$(this).children().css({"color":"#000","text-decoration":"none"})
		}
	)
	// gnb 관련된 focus 기능!!
	$("#GNB > ul > li:first-child > a").focusin(function(){
		$(this).parents("header").addClass("active")
	});
	$("#GNB li:last-child li:last-child").focusout(function(){
		$(this).parents("header").removeClass("active")
	});
	$("#GNB > ul > li > a").focusin(function(){
		$(this).addClass("active")
	})
	$("#GNB li li:last-child").focusout(function(){
		$(this).parent().prev("a").removeClass("active")
	})
	$("#GNB ul ul li a").focusin(function(){
		$(this).addClass("active")
	})
	$("#GNB ul ul li a").focusout(function(){
		$(this).removeClass("active")
	})
	//비디오 컨트롤
		var video=document.getElementById("my_video");

		$(".control").click(function(e){
			e.preventDefault();
			$(this).fadeOut(300);
			video.play();
		});
		$("#my_video").click(function(){
			$(".control").fadeIn(300);
			video.pause();
		});
		video.addEventListener("ended", function(){ // JavaScript 이벤트
			$(".control").fadeIn(300);
			video.pause();
			video.currentTime=0;
		});
	//매장찾기 기능 활성화! -지역 찾기
	$(".sel_local").click(function(e){
			e.preventDefault();
			$(this).next().children("ul").slideDown(300)
			$(this).next().children("ul").children("li").click(function(e){
				e.preventDefault();
				$(".sel_local").next().children().slideUp(300)
			})
	})
	// 매장찾기 2 기능활성화 -세부 지역찾기
	$(".sel_center dt").click(function(e){
		e.preventDefault()
		$(this).next().children("ul").slideDown(300)
		$(this).next().children("ul").children("li").click(function(e){
			e.preventDefault();
			$(".sel_center dt").next().children().slideUp(300)
		})
	})
})
	//팝업관련된 내용
window.addEventListener("load",function(){
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
