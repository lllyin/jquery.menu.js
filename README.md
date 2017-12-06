## 使用说明

>> var $menu = $("[data-role=menu]");
           $menu.menu({
               showLevel:1,      //默认显示几层菜单
               easing:"slide", //动画
               level:3         //总共有几层菜单
           })

  /**
             * default config
             *
             * @type {{showIdx: number, easing: string, level: number, speed: string}}
             * @param showIdx : 默认显示showIdx级菜单
             * @param easing : 过度动画
             * @param level : 一共有多少级菜单，当前菜单级数最大值
             * @param speed : 执行动画的速度 slow ,fast ,  数字(ms)
             */