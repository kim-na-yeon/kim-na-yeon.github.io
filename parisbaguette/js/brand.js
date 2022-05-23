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
            $('.brandStroy_inner > div').find('small, h3, span, p').addClass('active')    
        }        
    }).resize()
    
    
    // svg vivus : sub1_brand title
    new Vivus('sub1_brand',{type:'delayed',duration:100},function(){});
    
    anime({
        targets: '#sub1_brand path',
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
        var win_top = $(window).scrollTop()
        var win_h = $(window).height()        
        
        $('.brandStroy_inner > div').each(function(){
            var about_box = $(this).offset().top            
            if(win_top >= about_box - 700 ){
                $(this).find('small, h3, span, p').addClass('active')
            }
            else if(win_top < about_box - win_h ) {
                $(this).find('small, h3, span, p').removeClass('active')
            }
        })         
        
        active('.bakeryBrand_inner','.text, span, small, h2, p','1.5');        
        //active('.innovation_inner','.text, span, small, h2, p','1.5');
        active('.ending_inner','div:nth-of-type(4), small, h2, span, p','1.5');         
        
        
    });//scroll     
    
});