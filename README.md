# jQuery.myScrollTop
jQuery plugin: scroll to page top
使用：<br>
<code>
    $("#scroll-top").myScrollTop();
</code><br>
<p>可配置选项：</p>
<table>
  <tr style="background-color: #1C86EE;"><td>options</td><td>value</td><td>说明</td></tr>
  <tr><td>animate</td><td>true</td><td>是否有动画效果</td></tr>
  <tr><td>alwaysShow</td><td>false</td><td>button是否一直显示</td></tr>
  <tr><td>showWhenHeight</td><td>0</td><td>当scrollTop为多少时, button开始显示</td></tr>
  <tr><td>animationSpeed</td><td>"normal"("slow", "fast", number)</td><td>动画速度，单位毫秒，或者默认的3项（"normal","slow","fast"）</td></tr>
  <tr><td>transitionIn</td><td>"fadeIn"("show", "slideDown")</td><td>button出现动画效果</td></tr>
  <tr><td>transitionOut</td><td>"fadeOut"("hide", "slideUp")</td><td>button消失动画效果</td></tr>
</table>
<p>其他配置：</p>
<ul>
  <li><code>$container.attr('data-myScrollTop', true);</code> 可通过此attr快速找到内容</li>
  <li>定义了一些事件接口，可在外部实现:
    <ul>
      <li>myScrollTop:before</li>
      <li>myScrollTop:after</li>
      <li>myScrollTop:afterShow</li>
      <li>myScrollTop:afterHide</li>
    </ul>
  </li>
  <li>目前的配置能满足基本需求，可根据需求继续定制，比如现在的animate是scroll与show hide共用，以及可以继续定制show hide复杂效果，比如去哪儿网的飞机效果(也不复杂)</li>
</ul>




