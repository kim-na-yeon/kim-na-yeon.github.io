$(document).ready(function(){
    
    // navWrap on
	$('.btn_nav').click(function(){
		$('#navWrap').toggleClass('on');
	});     
    
    
    // risize
    $(window).resize(function(){
        var win_w = $(window).width()
        if( win_w >= 1300 ){
            $('#navWrap').removeClass('on');
        }
        else if( win_w <= 768 ){  // 紐⑤컮�� 泥ル쾲吏� 而⑦뀗痢� active
            $('.cake_inner .text_left').find('strong, b, p').addClass('active')    
        }        
    }).resize()
    
    
    // svg vivus : sub3_product title
    new Vivus('sub3_product',{type:'delayed',duration:100},function(){});
    
    anime({
        targets: '#sub3_product path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 300 },
        direction: 'alternate',
        loop: true,
        fill:'rgba(255,255,255,.8)'
    });
    
    
    // parallax
    function active(sec,act,del){
        if( $(this).scrollTop() > $(sec).offset().top - ($(this).height()/1.3)){
            $(sec).find(act).addClass('active');
        }
        else{
            $(sec).find(act).removeClass('active');
        }
	};
    
    
    // scroll 
    $(window).scroll(function(){        
        
        active('.cake_inner','.img_right, span, strong, b, p, .shake_img','1.5');
        active('.sand_inner','.img_right, span, strong, b, p, .shake_img','1.5');
        //active('.bread_inner','.img_right, span, strong, b, p, .shake_img','1.5');
        active('.drink_inner','.img_right, span, strong, b, p, .shake_img','1.5');
        
        
    });//scroll     
    
});