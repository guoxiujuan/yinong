/*
此插件基于Jquery
插件名：jquery.Score(评分插件)
开发者 似懂非懂
版本 1.0.0
Blog：www.haw86.com
*/
(function($){
	$.fn.Score = function(options){
        var opts = $.extend({}, $.fn.Score.defualts, options); 
		var showList= (opts.showBranch);
		var showVisible =  opts.visible;
		var defaultVal = 0;
		if($(opts.inputCls).val()){
			defaultVal = $(opts.inputCls).val();
		}
		$.fn.addList($(this),showList,showVisible); //调用：设置列表参数
		$.fn.setWidthheight($(this),opts,showList,showVisible,defaultVal);//调用：设置宽度和高度
		//alert(opts.triggerType);
		
		$(this).children().bind(opts.triggerType,function(){
			//alert($(this).width());
			var subWidth = $(this).width();
			var maskWidth = subWidth*($(this).index()+1) 
			$(opts.bgBox).css({width:maskWidth});
			$(opts.inputCls).val(maskWidth/opts.showWidth);
		})
		
		$(this).children().bind("mousemove",function(){
			//alert($(this).width());
			var subWidth = $(this).width();
			var maskWidth = subWidth*($(this).index()+1) 
			$(opts.bgBox).css({width:maskWidth});
		})
		//还原初始值
		$(this).bind("mouseout",function(){
			var subWidth = opts.showWidth;
			var maskWidth = subWidth*$(opts.inputCls).val();
			//alert(subWidth);
			$(opts.bgBox).css({width:maskWidth});
		})
	}
	//plugin defaults
	$.fn.Score.defualts ={
		triggerType:'mousemove', //默认trigger的触发事件
		showWidth:20 , //默认显20，也可以手动设置数值
		showHeight:20 , //默认显20，也可以手动设置数值
		showBranch:10, //默认分数为5
		visible:2,//2：分半显示，1：完整显示
		icoBefore:'none', //点亮前的图片地址
		icoAfter:'none', //点亮后的图片地址
		layerBefore:"", //背景层对象
		inputCls:"",//文本域对象
		bgBox:""  //这招对象
	}
	
	//子插件：设置列表参数
	$.fn.addList = function(thisObj,showList,showVisible){
		if(showVisible==2){showList = showList*2;}
		for( var i=0;i<showList;i++){
			if(showVisible==1){
				var titleText = parseFloat(i)+1;
			}else if(showVisible==2){
				var titleText = parseFloat(i/2)+0.5;
			}
			thisObj.append("<li title="+titleText+"分"+"></li>");
		}
	}
	//子插件：设置列表宽度和高度
	$.fn.setWidthheight = function(thisObj,opts,showList,showVisible,defaultVal){
		var widthNum = opts.showWidth;
		var heightNum = opts.showHeight;
		var subCount = thisObj.children().length;
		var layerDiv = opts.layerBefore;
		if(showVisible==2){
			widthNum = widthNum/2;
		}
		$(layerDiv).css({width:widthNum*subCount,height:heightNum}).css({"background-image":"url("+opts.icoBefore+")","background-repeat":"repeat-x"});
		$(opts.bgBox).css({width:defaultVal*opts.showWidth,height:heightNum,"background-image":"url("+opts.icoAfter+")","background-repeat":"repeat-x"});
		thisObj.children().css({width:widthNum,height:heightNum});
		thisObj.css({width:widthNum*subCount,height:heightNum},"fast");
	}
})(jQuery);     