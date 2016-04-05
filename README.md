# jQuery.myScrollTop

##usage:
`$("#scroll-top").myScrollTop();`

##option:
| option | value | description |
| :-- | :-- | :-- |
| animate | true | 是否有动画效果 |
| alwaysShow | false | button是否一直显示 |
| showWhenHeight | 0 | 当scrollTop为多少时, button开始显示 |
| animationSpeed | "normal"("slow", "fast", number) | 动画速度，单位毫秒，或者默认的3项（"normal","slow","fast"） |
| transitionIn | "fadeIn"("show", "slideDown") | button出现动画效果 |
| transitionOut | "fadeOut"("hide", "slideUp") | button消失动画效果 |


## other option:
- `$container.attr('data-myScrollTop', true);`可通过此attr快速找到内容
- 定义了一些事件接口，可在外部实现:
  - myScrollTop:before
  - myScrollTop:after
  - myScrollTop:afterShow
  - myScrollTop:afterHide
  
- 目前的配置能满足基本需求，可根据需求继续定制，比如现在的animate是scroll与show hide共用，以及可以继续定制show hide复杂效果，比如去哪儿网的飞机效果
