/**
 *  created by ling on 2017-11-28.
 */

(function ($) {
    var lyin = {
        menu:function () {
            //default config
            var config = {
                showIdx:1,
                easing:"slide",
                level:this.attr("data-level") || 3,
                speed: "fast"
            }
            config = $.extend(config,arguments[0]);

            var $menuItems = this.children("li");   //菜单第一个选项
            //默认隐藏
            for(var i = 0,len = $menuItems.length;i<len;i++){
                var $subItems = $($menuItems[i]).find("ul");
                console.log($subItems)
                for(var j = config.showIdx-1;j<config.level-1;j++){
                    $($subItems[j]).addClass("hide");
                    $($subItems[j]).parent("li").siblings("li").find("ul").addClass("hide")
                }
            }
            //点击显示
            this.find(".sub-title").click(function () {
                switch (config.easing){
                    case "slide":
                        $(this).next("ul").slideToggle(config.speed);
                        break;
                    case "fade":
                        $(this).next("ul").fadeToggle(config.speed);
                        break;
                    default:
                        $(this).next("ul").toggle(config.speed);
                        break;

                }
                if($(this).parent("li").siblings("li").find("ul").is(":visible")){
                    $(this).parent("li").siblings("li").find("ul").hide(config.speed)
                }
            });
        }
    }

    // export global function
    $.fn.menu = lyin.menu;

})(jQuery)