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
            //默认隐藏
            var idxOfMenu = 0;
            var currLevelNode = this;
            while (idxOfMenu<config.level){
                currLevelNode = currLevelNode.children().find("ul");
                if(idxOfMenu>=config.showIdx-1){
                    currLevelNode.hide()
                }
                idxOfMenu++;
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