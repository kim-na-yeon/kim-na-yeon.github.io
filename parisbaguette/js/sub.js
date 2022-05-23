$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        arrows:true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1.66,
        centerMode: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
            autoplay: true,
            autoplaySpeed: 1500,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1 ,
            arrows: true,dots: true
            }      
        }]
    });
    
    $('.visualWrap,.s2_visualWrap,.s4_visualWrap').slick({
        autoplay:true,
        autoplaySpeed: 1500,
        dots:true
    });
    
    /*$('.visualWrap').slick({
        autoplay:true,
        autoplaySpeed: 1500,
        dots:true
    })*/
    
    $('.btn').on('click',function(){
        $('.gnbWrap').fadeIn();
    });
    $('.gnbWrap>span').on('click',function(){
        $('.gnbWrap').fadeOut();
    });
    
    $('.visualWrap .sub1_v1_up,.visualWrap .sub1_v2_up,.visualWrap .sub1_v3_up,.s2_visualWrap .sub2_v1_up,.s2_visualWrap .sub2_v2_up,.s2_visualWrap .sub2_v3_up,.s4_visualWrap .sub4_v1_up,.s4_visualWrap .sub4_v2_up,.s4_visualWrap .sub4_v3_up').addClass('on');
    
    $('.con2_Smenu li').on('click',function(){
        $(this).find('.sub').animate({height:180},100);
    })
    
    
    
    $(window).on('scroll load resize',function(){
        var wid = $(this).width()
        var win_top = $(this).scrollTop()
        var sub_co1 = $('.sub1_con_1 .sub1_con1_inner .con1_txt,.con1_ex,.con1_in,.con1_te')
        var sub2_co1 = $('.sub2_con_1 .sub2_con1_inner .s2_con1_txt,.s2_con1_l1,.s2_con1_r1,.s2_con1_l2,.s2_con1_r2,.s2_con1_r3')
        var sub_co2 = $('.sub1_con_2 .sub1_con2_bg,.sub1_con_2 .sub1_con2_box')
        var sub2_co2 = $('.sub2_con_2 .sub2_con2_bg,.sub2_con_2 .s2_con2_box')
        var sub_co3 = $('.sub1_con_3 .sub1_line,.sub1_con_3 .sub1_line1')
        var sub2_co3 = $('.sub2_con_3 h2,.sub2_con_3 p,.sub2_con_3 .sub2_line')
        
        if( wid < 768 ){
            if( win_top >= 300 ){
                sub_co1.addClass('on')
                sub2_co1.addClass('on') //sub2
            }else {
                sub_co1.removeClass('on')
                sub2_co1.removeClass('on')
            }
            
            if( win_top >= 800 ){
                sub_co2.addClass('on')
                sub2_co2.addClass('on')
            }else {
                sub_co2.removeClass('on')
                sub2_co2.removeClass('on')
            }
            
        }
        
        if( wid < 768 || wid >= 768 ){
            if( win_top >= 300 ){
                sub_co1.addClass('on')
                sub2_co1.addClass('on')
            }else {
                sub_co1.removeClass('on')
                sub2_co1.removeClass('on')
            }
            if( win_top >= 1600 ){
                sub_co2.addClass('on')
            }else {
                sub_co2.removeClass('on')
            }
            
            if( win_top >= 2000 ){
                sub2_co2.addClass('on')
            }else {
                sub2_co2.removeClass('on')
            }
            
            if( win_top >= 2400 ){
                sub_co3.addClass('on')
                sub2_co3.addClass('on')
            }else {
                sub_co3.removeClass('on')
                sub2_co3.removeClass('on')
            }
            
            if( win_top >= 4950 ){
                sub2_co3.addClass('on')
            }else {
                sub2_co3.removeClass('on')
            }
        }
        
        if( wid < 1024 || wid >= 1024 ){
            if( win_top >= 3200 ){
                sub2_co3.addClass('on')
            }else {
                sub2_co3.removeClass('on')
            }
        }
    })
})