;(function($){
	$.fn.tab=function(options){
		var defaults = {
			currentClass:'current'
		}
		var options = $.extend(defaults,options);
		this.each(function(){
			var _this = $(this);
			_this.find('.nav>li').bind('mouseover',function(){
				$(this).addClass(options.currentClass).siblings().removeClass(options.currentClass);
				var index=$(this).index();
				_this.find('.content>div').eq(index).show().siblings().hide();
			});
		});
	}
})(jQuery);