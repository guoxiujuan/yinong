
$(document).ready(function($) {

    $(".nav li").mouseenter(function(event) {
        $(this).find('dl').stop().slideDown();
    });
    
    $(".nav li").mouseleave(function(event) {
        $(this).find('dl').stop().slideUp();
    });

    $('.nav-btn').click(function(event) {
        $('.nv-sub').slideToggle();
    });

    // 返回顶部
    $('.Btntop').click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $(window).scroll(function(){
        var _top = $(window).scrollTop();
        if( _top<200 ){
            $('.fix-float').stop().fadeOut();
        }else{
            $('.fix-float').stop().fadeIn();
        }
    });

    // 弹出框
    $('.myfancy').click(function(){
        var _id = $(this).attr('href');
        $(_id).show();
    });
    $('.close').click(function(){
        $(this).parents('.m-pop').hide();
    });
    $('.close').click(function(){
        $(this).parents('.m-invoice').hide();
    });
    

    // 点击展开
    $('.snav .open').find('dl').stop().slideDown();
    $('.snav li').click(function(){
        $(this).siblings('.snav li').removeClass('open').find('dl').stop().slideUp();
        $(this).toggleClass('open');
        if( $(this).hasClass('open') ){
            $(this).find('dl').stop().slideDown();
        }else{
            $(this).find('dl').stop().slideUp();
        }
    });




    // 选项卡 鼠标经过切换
    $(".TAB li").mousemove(function(){
      var tab=$(this).parent(".TAB");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('hover').siblings(tab.find("li")).removeClass('hover');
      $(con).eq(on).show().siblings(con).hide();
    });

    // 选项卡 鼠标点击
    $(".TAB_CLICK li").click(function(){
      var tab=$(this).parent(".TAB_CLICK");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
      $(con).eq(on).show().siblings(con).hide();
    });

    function myBox(){
            var _winw = $(window).width();
            var _sheight = $('.side-col2').height();
            var _mheight = $('.main-col2').height();
            if( _winw>=992 ){
                $('.side-col2,.main-col2').height(Math.max(_sheight,_mheight));
            }else{
                $('.side-col2,.main-col2').height('auto');
            }
        }
        myBox();
        $(window).on('resize',function(){
            myBox();
        });

});