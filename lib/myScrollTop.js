/**
 * Created by chy on 15-8-22.
 */
;(function ($) {
    $.myScrollTop = function (btn, options) {
        var plugin = this,
            pluginName = "myScrollTop",
            $btn = $(btn),

            defaults = {
                animate: true,
                alwaysShow: false,
                showWhenHeight: 0,
                animationSpeed: "normal",
                transitionOut: "fadeOut", //fadeOut, hide, slideUp
                transitionIn: "fadeIn", //fadeIn, show, slideShow
                event: "click",
            },

            transitions,
            animationSpeeds = {
                fast: 200,
                normal: 400,
                slow: 600
            },

            settings,
            btnMidTransition = false;

        plugin.init = function() {
            plugin.settings = settings = $.extend({}, defaults, options);
            settings.bind_str = settings.event + "." + pluginName;

            if ( typeof(settings.animationSpeed) === 'string' ) {
                settings.animationSpeed = animationSpeeds[settings.animationSpeed];
            }
            // default speed
            if (!settings.animationSpeed) {
                settings.animationSpeed = animationSpeeds[defaults.animationSpeed];
            }

            $btn.data('myScrollTop', {});

            plugin.setTransitions();

            bindToScrollEvent();

            initVisible();

            $btn.attr('data-myTabs', true);
        };

        plugin.setTransitions = function() {
            transitions = ( settings.animate ) ? {
                show: settings.transitionIn,
                hide: settings.transitionOut,
                speed: settings.animationSpeed,
            } :
            {
                show: "show",
                hide: "hide",
                speed: 0,
            };
        };

        var bindToScrollEvent = function() {
            $btn.bind(settings.bind_str, function(e) {
                if( fire($btn, "myScrollTop:before", [settings]) ) {
                    $("body").animate({scrollTop: "0px"}, transitions.speed, null, scrollTopCallBack);
                    if(!settings.alwaysShow) {
                        btnMidTransition = true;
                        $btn[transitions.hide](transitions.speed, hideCallBack);
                    }
                }

                // Don't follow the link to the anchor
                e.preventDefault;
            });

            if(!settings.alwaysShow) {
                $(window).scroll(function() {
                    // 判断btn是否在transition(即页面正在scroll), 如果不判断，transition结束时候会出现btn消失后再出现消失一次的现象
                    if(!btnMidTransition) {
                        var toTopHeight = $("body").scrollTop();
                        if( toTopHeight > settings.showWhenHeight && $btn.not(":visible")  ) {
                            $btn[transitions.show](transitions.speed, showCallBack);
                        }
                        if(toTopHeight <= settings.showWhenHeight) {
                            $btn[transitions.hide](transitions.speed, hideCallBack);
                        }
                    }
                })
            }
        };

        var initVisible = function() {
            if(!settings.alwaysShow) {
                var toTopHeight = $("body").scrollTop();
                if(toTopHeight <= settings.showWhenHeight) {
                    $btn.hide();
                }
            }
        };

        var showCallBack = function() {
            $btn.trigger("myScrollTop:afterShow", [settings]);
        };

        var hideCallBack = function() {
            btnMidTransition = false;
            $btn.trigger("myScrollTop:afterHide", [settings]);
        };

        var scrollTopCallBack = function () {
            $btn.trigger("myScrollTop:after", [settings]);
        };

        var fire = function(obj, name, data) {
            var event = $.Event(name);
            obj.trigger(event, data);
            return event.result !== false;
        };

        plugin.init();
    };

    $.fn.myScrollTop = function (options) {
        return this.each(function () {
            var $this = $(this),
                plugin = $this.data('myScrollTop');

            if (plugin === undefined) {
                plugin = new $.myScrollTop(this, options);
                $this.data('myScrollTop', plugin);
            }
        });
    };
})(jQuery);