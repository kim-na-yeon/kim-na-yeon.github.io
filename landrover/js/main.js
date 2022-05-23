$(document).ready(function(){
    
    
    $(window).scroll(function(){
        var win_top = $(window).scrollTop()
        var con1 = $('.con_1 .right,.con_1 .left,.con_text,.con_1 .box1,.con_1 .box2')
        var con2_bg = $('.con_2 .con2_bg')
        var con2 = $('.con2 .con2_1,.con2 .con2_2,.con2 .con2_3,.con2 .Innerbox1,.con2 .Innerbox2,.con2 .Innerbox3')
        var con3_l = $('.con_3 .con3_line')
        var con3_r = $('.con_3 .con3_right')
        var con4 = $('.con_4 .con4_text')
        
        var wid = $(this).width()
        if( wid <= 768 ){
            
            if(win_top >= 3900){
                $('.con_4 .con4_text').addClass('on')
            } else {
                $('.con_4 .con4_text').removeClass('on')
            }
        }
        
        if( wid >= 768 || wid >= 1024 ){
            if(win_top >= 500){
                con1.addClass('on')
            }else{
                con1.removeClass('on')
            }

            if(win_top >= 2000){
                con2_bg.addClass('on')
            }else {
                con2_bg.removeClass('on')
            }

            if(win_top >= 1900){
                con2.addClass('on')
            }else {
                con2.removeClass('on')
            }

            if(win_top >= 2800){
                con3_l.addClass('on')
            }else {
                con3_l.removeClass('on')
            }

            if(win_top >= 3300){
                con3_r.addClass('on')
            }else {
                con3_r.removeClass('on')
            }

            if(win_top >= 3700 ){
                con4.addClass('on')
            }else {
                con4.removeClass('on')
            }
        }
    });
    
    $('.btn').on('click',function(){
        $('.gnbWrap').fadeIn();
    });
    $('.gnbWrap>span').on('click',function(){
        $('.gnbWrap').fadeOut();
    })
});






























