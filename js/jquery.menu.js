/**
 *  created by ling on 2017-11-28.
 */

(function ($) {
    var lyin = {
        menu:function () {
            /**
             * default config
             *
             * @type {{showIdx: number, easing: string, level: number, speed: string}}
             * @param showIdx : 默认显示showIdx级菜单
             * @param easing : 过度动画
             * @param level : 一共有多少级菜单，当前菜单级数最大值
             * @param speed : 执行动画的速度 slow ,fast ,  数字(ms)
             */
            var config = {
                showLevel:1,
                easing:"slide",
                level:this.attr("data-level") || 3,
                speed: "fast"
            }
            config = $.extend(config,arguments[0]);

            //默认隐藏指定层级
            var idxOfMenu = 0;
            var currLevelNode = this;
            if(config.showLevel===0){
                this.hide()
            }
            while (idxOfMenu<config.level){
                currLevelNode = currLevelNode.children().find("ul");
                if(idxOfMenu>=config.showLevel-1){
                    currLevelNode.hide();
                    currLevelNode.attr("data-level",config.level-2-idxOfMenu)
                }
                idxOfMenu++;
            }


            //点击显示
            var easeMethods = function () {
                console.log("easeMethods:",this);
                var that = this;
                var args = arguments;
                var easeFunc = {
                    slide:$.fn.slideToggle,
                    fade:$.fn.fadeToggle
                }
                return (typeof easeFunc[config.easing] === "function")
                    ?
                    easeFunc[config.easing].apply(that,args)
                    :
                    $.fn.toggle.apply(that,args);
            }

            $.fn.easeMethods = easeMethods;

            //栏目被点击
            this.find(".sub-title").click(function () {

                $(this).next("ul").easeMethods("fast");
                $(this).parent("li").toggleClass("active");

                var _$parentLiSiblings = $(this).parent("li").siblings("li");
                if( _$parentLiSiblings.find("ul").is(":visible")){
                    _$parentLiSiblings.find("ul").hide(config.speed);
                    _$parentLiSiblings.removeClass("active");
                }
            });
            
            //菜单最小栏目被点击
            console.log($("[data-level=0]>li"))
            $("[data-level=0]>li").click(function (e) {
                e.stopPropagation();
                $(this).addClass("active2").siblings("li").removeClass("active2");
            })
        }
    }

    // export global function
    $.fn.menu = lyin.menu;

})(jQuery)