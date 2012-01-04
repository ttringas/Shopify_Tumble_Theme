/**
 * jQuery Masonry v2.0.111015
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2011 David DeSandro
 */
(function(a,b,c){var d=b.event,e;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()};var f=["position","height"];b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1},b.Mason.prototype={_filterFindBricks:function(a){var b=this.options.itemSelector;return b?a.filter(b).add(a.find(b)):a},_getBricks:function(a){var b=this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick");return b},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[],this.reloadItems();var d=this.element[0].style;this.originalStyle={};for(var e=0,g=f.length;e<g;e++){var h=f[e];this.originalStyle[h]=d[h]||""}this.element.css({position:"relative"}),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={};var i=b(document.createElement("div"));this.element.prepend(i),this.offset.y=Math.round(i.position().top),this.options.isRTL?(i.css({"float":"right",display:"inline-block"}),this.offset.x=Math.round(this.element.outerWidth()-i.position().left)):this.offset.x=Math.round(i.position().left),i.remove();var j=this;setTimeout(function(){j.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){j.resize()})},_init:function(a){this._getColumns(),this._reLayout(a)},option:function(a,c){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,c){var d,e,f,g,h,i;for(var j=0,k=a.length;j<k;j++){d=b(a[j]),e=Math.ceil(d.outerWidth(!0)/this.columnWidth),e=Math.min(e,this.cols);if(e===1)this._placeBrick(d,this.colYs);else{f=this.cols+1-e,g=[];for(i=0;i<f;i++)h=this.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);this._placeBrick(d,g)}}var l={};l.height=Math.max.apply(Math,this.colYs)-this.offset.y;if(this.options.isFitWidth){var m=0,j=this.cols;while(--j){if(this.colYs[j]!==this.offset.y)break;m++}l.width=(this.cols-m)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:l});var n=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",o=this.options.animationOptions,p;for(j=0,k=this.styleQueue.length;j<k;j++)p=this.styleQueue[j],p.$el[n](p.style,o);this.styleQueue=[],c&&c.call(a),this.isLaidOut=!0},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g={top:c};g[this.horizontalDirection]=this.columnWidth*d+this.offset.x,this.styleQueue.push({$el:a,style:g});var h=c+a.outerHeight(!0),i=this.cols+1-f;for(e=0;e<i;e++)this.colYs[d+e]=h},resize:function(){var a=this.cols;this._getColumns(),this.cols!==a&&this._reLayout()},_reLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(this.offset.y);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this._init(a)},appended:function(a,b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var c=this.element[0].style;for(var d=0,e=f.length;d<e;d++){var g=f[d];c[g]=this.originalStyle[g]}this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){function h(){--e<=0&&this.src!==f&&(setTimeout(g),d.unbind("load error",h))}function g(){a.call(b,d)}var b=this,d=b.find("img").add(b.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e||g(),d.bind("load error",h).each(function(){if(this.complete||this.complete===c){var a=this.src;this.src=f,this.src=a}});return b};var g=function(a){this.console&&console.error(a)};b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"masonry");if(!d)g("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");else{if(!b.isFunction(d[a])||a.charAt(0)==="_"){g("no such method '"+a+"' for masonry instance");return}d[a].apply(d,c)}})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright &copy; 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright &copy; 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
 
 /*
  * jQuery FlexSlider v1.8
  * http://flex.madebymufffin.com
  * Copyright 2011, Tyler Smith
  */
 (function(a){a.flexslider=function(c,b){var d=c;d.init=function(){d.vars=a.extend({},a.flexslider.defaults,b);d.data("flexslider",true);d.container=a(".slides",d);d.slides=a(".slides > li",d);d.count=d.slides.length;d.animating=false;d.currentSlide=d.vars.slideToStart;d.animatingTo=d.currentSlide;d.atEnd=(d.currentSlide==0)?true:false;d.eventType=("ontouchstart" in document.documentElement)?"touchstart":"click";d.cloneCount=0;d.cloneOffset=0;d.manualPause=false;d.vertical=(d.vars.slideDirection=="vertical");d.prop=(d.vertical)?"top":"marginLeft";d.args={};d.transitions="webkitTransition" in document.body.style;if(d.transitions){d.prop="-webkit-transform"}if(d.vars.controlsContainer!=""){d.controlsContainer=a(d.vars.controlsContainer).eq(a(".slides").index(d.container));d.containerExists=d.controlsContainer.length>0}if(d.vars.manualControls!=""){d.manualControls=a(d.vars.manualControls,((d.containerExists)?d.controlsContainer:d));d.manualExists=d.manualControls.length>0}if(d.vars.randomize){d.slides.sort(function(){return(Math.round(Math.random())-0.5)});d.container.empty().append(d.slides)}if(d.vars.animation.toLowerCase()=="slide"){if(d.transitions){d.setTransition(0)}d.css({overflow:"hidden"});if(d.vars.animationLoop){d.cloneCount=2;d.cloneOffset=1;d.container.append(d.slides.filter(":first").clone().addClass("clone")).prepend(d.slides.filter(":last").clone().addClass("clone"))}d.newSlides=a(".slides > li",d);var m=(-1*(d.currentSlide+d.cloneOffset));if(d.vertical){d.newSlides.css({display:"block",width:"100%","float":"left"});d.container.height((d.count+d.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){d.css({position:"relative"}).height(d.slides.filter(":first").height());d.args[d.prop]=(d.transitions)?"translate3d(0,"+m*d.height()+"px,0)":m*d.height()+"px";d.container.css(d.args)},100)}else{d.args[d.prop]=(d.transitions)?"translate3d("+m*d.width()+"px,0,0)":m*d.width()+"px";d.container.width((d.count+d.cloneCount)*200+"%").css(d.args);setTimeout(function(){d.newSlides.width(d.width()).css({"float":"left",display:"block"})},100)}}else{d.transitions=false;d.slides.css({width:"100%","float":"left",marginRight:"-100%"}).eq(d.currentSlide).fadeIn(d.vars.animationDuration)}if(d.vars.controlNav){if(d.manualExists){d.controlNav=d.manualControls}else{var e=a('<ol class="flex-control-nav"></ol>');var s=1;for(var t=0;t<d.count;t++){e.append("<li><a>"+s+"</a></li>");s++}if(d.containerExists){a(d.controlsContainer).append(e);d.controlNav=a(".flex-control-nav li a",d.controlsContainer)}else{d.append(e);d.controlNav=a(".flex-control-nav li a",d)}}d.controlNav.eq(d.currentSlide).addClass("active");d.controlNav.bind(d.eventType,function(i){i.preventDefault();if(!a(this).hasClass("active")){(d.controlNav.index(a(this))>d.currentSlide)?d.direction="next":d.direction="prev";d.flexAnimate(d.controlNav.index(a(this)),d.vars.pauseOnAction)}})}if(d.vars.directionNav){var v=a('<ul class="flex-direction-nav"><li><a class="prev" href="#">'+d.vars.prevText+'</a></li><li><a class="next" href="#">'+d.vars.nextText+"</a></li></ul>");if(d.containerExists){a(d.controlsContainer).append(v);d.directionNav=a(".flex-direction-nav li a",d.controlsContainer)}else{d.append(v);d.directionNav=a(".flex-direction-nav li a",d)}if(!d.vars.animationLoop){if(d.currentSlide==0){d.directionNav.filter(".prev").addClass("disabled")}else{if(d.currentSlide==d.count-1){d.directionNav.filter(".next").addClass("disabled")}}}d.directionNav.bind(d.eventType,function(i){i.preventDefault();var j=(a(this).hasClass("next"))?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}})}if(d.vars.keyboardNav&&a("ul.slides").length==1){function h(i){if(d.animating){return}else{if(i.keyCode!=39&&i.keyCode!=37){return}else{if(i.keyCode==39){var j=d.getTarget("next")}else{if(i.keyCode==37){var j=d.getTarget("prev")}}if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}}}}a(document).bind("keyup",h)}if(d.vars.mousewheel){d.mousewheelEvent=(/Firefox/i.test(navigator.userAgent))?"DOMMouseScroll":"mousewheel";d.bind(d.mousewheelEvent,function(y){y.preventDefault();y=y?y:window.event;var i=y.detail?y.detail*-1:y.wheelDelta/40,j=(i<0)?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}})}if(d.vars.slideshow){if(d.vars.pauseOnHover&&d.vars.slideshow){d.hover(function(){d.pause()},function(){if(!d.manualPause){d.resume()}})}d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed)}if(d.vars.pausePlay){var q=a('<div class="flex-pauseplay"><span></span></div>');if(d.containerExists){d.controlsContainer.append(q);d.pausePlay=a(".flex-pauseplay span",d.controlsContainer)}else{d.append(q);d.pausePlay=a(".flex-pauseplay span",d)}var n=(d.vars.slideshow)?"pause":"play";d.pausePlay.addClass(n).text((n=="pause")?d.vars.pauseText:d.vars.playText);d.pausePlay.bind(d.eventType,function(i){i.preventDefault();if(a(this).hasClass("pause")){d.pause();d.manualPause=true}else{d.resume();d.manualPause=false}})}if("ontouchstart" in document.documentElement){var w,u,l,r,o,x,p=false;d.each(function(){if("ontouchstart" in document.documentElement){this.addEventListener("touchstart",g,false)}});function g(i){if(d.animating){i.preventDefault()}else{if(i.touches.length==1){d.pause();r=(d.vertical)?d.height():d.width();x=Number(new Date());l=(d.vertical)?(d.currentSlide+d.cloneOffset)*d.height():(d.currentSlide+d.cloneOffset)*d.width();w=(d.vertical)?i.touches[0].pageY:i.touches[0].pageX;u=(d.vertical)?i.touches[0].pageX:i.touches[0].pageY;d.setTransition(0);this.addEventListener("touchmove",k,false);this.addEventListener("touchend",f,false)}}}function k(i){o=(d.vertical)?w-i.touches[0].pageY:w-i.touches[0].pageX;p=(d.vertical)?(Math.abs(o)<Math.abs(i.touches[0].pageX-u)):(Math.abs(o)<Math.abs(i.touches[0].pageY-u));if(!p){i.preventDefault();if(d.vars.animation=="slide"&&d.transitions){if(!d.vars.animationLoop){o=o/((d.currentSlide==0&&o<0||d.currentSlide==d.count-1&&o>0)?(Math.abs(o)/r+2):1)}d.args[d.prop]=(d.vertical)?"translate3d(0,"+(-l-o)+"px,0)":"translate3d("+(-l-o)+"px,0,0)";d.container.css(d.args)}}}function f(j){d.animating=false;if(d.animatingTo==d.currentSlide&&!p&&!(o==null)){var i=(o>0)?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(i)&&Number(new Date())-x<550&&Math.abs(o)>20||Math.abs(o)>r/2){d.flexAnimate(i,d.vars.pauseOnAction)}else{d.flexAnimate(d.currentSlide,d.vars.pauseOnAction)}}this.removeEventListener("touchmove",k,false);this.removeEventListener("touchend",f,false);w=null;u=null;o=null;l=null}}if(d.vars.animation.toLowerCase()=="slide"){a(window).resize(function(){if(!d.animating){if(d.vertical){d.height(d.slides.filter(":first").height());d.args[d.prop]=(-1*(d.currentSlide+d.cloneOffset))*d.slides.filter(":first").height()+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}else{d.newSlides.width(d.width());d.args[d.prop]=(-1*(d.currentSlide+d.cloneOffset))*d.width()+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}}})}d.vars.start(d)};d.flexAnimate=function(g,f){if(!d.animating){d.animating=true;d.animatingTo=g;d.vars.before(d);if(f){d.pause()}if(d.vars.controlNav){d.controlNav.removeClass("active").eq(g).addClass("active")}d.atEnd=(g==0||g==d.count-1)?true:false;if(!d.vars.animationLoop&&d.vars.directionNav){if(g==0){d.directionNav.removeClass("disabled").filter(".prev").addClass("disabled")}else{if(g==d.count-1){d.directionNav.removeClass("disabled").filter(".next").addClass("disabled")}else{d.directionNav.removeClass("disabled")}}}if(!d.vars.animationLoop&&g==d.count-1){d.pause();d.vars.end(d)}if(d.vars.animation.toLowerCase()=="slide"){var e=(d.vertical)?d.slides.filter(":first").height():d.slides.filter(":first").width();if(d.currentSlide==0&&g==d.count-1&&d.vars.animationLoop&&d.direction!="next"){d.slideString="0px"}else{if(d.currentSlide==d.count-1&&g==0&&d.vars.animationLoop&&d.direction!="prev"){d.slideString=(-1*(d.count+1))*e+"px"}else{d.slideString=(-1*(g+d.cloneOffset))*e+"px"}}d.args[d.prop]=d.slideString;if(d.transitions){d.setTransition(d.vars.animationDuration);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.slideString+",0)":"translate3d("+d.slideString+",0,0)";d.container.css(d.args).one("webkitTransitionEnd transitionend",function(){d.wrapup(e)})}else{d.container.animate(d.args,d.vars.animationDuration,function(){d.wrapup(e)})}}else{d.slides.eq(d.currentSlide).fadeOut(d.vars.animationDuration);d.slides.eq(g).fadeIn(d.vars.animationDuration,function(){d.wrapup()})}}};d.wrapup=function(e){if(d.vars.animation=="slide"){if(d.currentSlide==0&&d.animatingTo==d.count-1&&d.vars.animationLoop){d.args[d.prop]=(-1*d.count)*e+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}else{if(d.currentSlide==d.count-1&&d.animatingTo==0&&d.vars.animationLoop){d.args[d.prop]=-1*e+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}}}d.animating=false;d.currentSlide=d.animatingTo;d.vars.after(d)};d.animateSlides=function(){if(!d.animating){d.flexAnimate(d.getTarget("next"))}};d.pause=function(){clearInterval(d.animatedSlides);if(d.vars.pausePlay){d.pausePlay.removeClass("pause").addClass("play").text(d.vars.playText)}};d.resume=function(){d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed);if(d.vars.pausePlay){d.pausePlay.removeClass("play").addClass("pause").text(d.vars.pauseText)}};d.canAdvance=function(e){if(!d.vars.animationLoop&&d.atEnd){if(d.currentSlide==0&&e==d.count-1&&d.direction!="next"){return false}else{if(d.currentSlide==d.count-1&&e==0&&d.direction=="next"){return false}else{return true}}}else{return true}};d.getTarget=function(e){d.direction=e;if(e=="next"){return(d.currentSlide==d.count-1)?0:d.currentSlide+1}else{return(d.currentSlide==0)?d.count-1:d.currentSlide-1}};d.setTransition=function(e){d.container.css({"-webkit-transition-duration":(e/1000)+"s"})};d.init()};a.flexslider.defaults={animation:"fade",slideDirection:"horizontal",slideshow:true,slideshowSpeed:7000,animationDuration:600,directionNav:true,controlNav:true,keyboardNav:true,mousewheel:false,prevText:"Previous",nextText:"Next",pausePlay:false,pauseText:"Pause",playText:"Play",randomize:false,slideToStart:0,animationLoop:true,pauseOnAction:true,pauseOnHover:false,controlsContainer:"",manualControls:"",start:function(){},before:function(){},after:function(){},end:function(){}};a.fn.flexslider=function(b){return this.each(function(){if(a(this).find(".slides li").length==1){a(this).find(".slides li").fadeIn(400)}else{if(a(this).data("flexslider")!=true){new a.flexslider(a(this),b)}}})}})(jQuery);

 /* =========================================================
  * bootstrap-modal.js v1.4.0
  * http://twitter.github.com/bootstrap/javascript.html#modal
  * =========================================================
  * Copyright 2011 Twitter, Inc.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  * http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  * ========================================================= */


 !function( $ ){

   "use strict"

  /* CSS TRANSITION SUPPORT (https://gist.github.com/373874)
   * ======================================================= */

   var transitionEnd

   $(document).ready(function () {

     $.support.transition = (function () {
       var thisBody = document.body || document.documentElement
         , thisStyle = thisBody.style
         , support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined
       return support
     })()

     // set CSS transition event type
     if ( $.support.transition ) {
       transitionEnd = "TransitionEnd"
       if ( $.browser.webkit ) {
       	transitionEnd = "webkitTransitionEnd"
       } else if ( $.browser.mozilla ) {
       	transitionEnd = "transitionend"
       } else if ( $.browser.opera ) {
       	transitionEnd = "oTransitionEnd"
       }
     }

   })


  /* MODAL PUBLIC CLASS DEFINITION
   * ============================= */

   var Modal = function ( content, options ) {
     this.settings = $.extend({}, $.fn.modal.defaults, options)
     this.$element = $(content)
       .delegate('.close', 'click.modal', $.proxy(this.hide, this))

     if ( this.settings.show ) {
       this.show()
     }

     return this
   }

   Modal.prototype = {

       toggle: function () {
         return this[!this.isShown ? 'show' : 'hide']()
       }

     , show: function () {
         var that = this
         this.isShown = true
         this.$element.trigger('show')

         escape.call(this)
         backdrop.call(this, function () {
           var transition = $.support.transition && that.$element.hasClass('fade')

           that.$element
             .appendTo(document.body)
             .show()

           if (transition) {
             that.$element[0].offsetWidth // force reflow
           }

           that.$element.addClass('in')

           transition ?
             that.$element.one(transitionEnd, function () { that.$element.trigger('shown') }) :
             that.$element.trigger('shown')

         })

         return this
       }

     , hide: function (e) {
         e && e.preventDefault()

         if ( !this.isShown ) {
           return this
         }

         var that = this
         this.isShown = false

         escape.call(this)

         this.$element
           .trigger('hide')
           .removeClass('in')

         $.support.transition && this.$element.hasClass('fade') ?
           hideWithTransition.call(this) :
           hideModal.call(this)

         return this
       }

   }


  /* MODAL PRIVATE METHODS
   * ===================== */

   function hideWithTransition() {
     // firefox drops transitionEnd events :{o
     var that = this
       , timeout = setTimeout(function () {
           that.$element.unbind(transitionEnd)
           hideModal.call(that)
         }, 500)

     this.$element.one(transitionEnd, function () {
       clearTimeout(timeout)
       hideModal.call(that)
     })
   }

   function hideModal (that) {
     this.$element
       .hide()
       .trigger('hidden')

     backdrop.call(this)
   }

   function backdrop ( callback ) {
     var that = this
       , animate = this.$element.hasClass('fade') ? 'fade' : ''
     if ( this.isShown && this.settings.backdrop ) {
       var doAnimate = $.support.transition && animate

       this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
         .appendTo(document.body)

       if ( this.settings.backdrop != 'static' ) {
         this.$backdrop.click($.proxy(this.hide, this))
       }

       if ( doAnimate ) {
         this.$backdrop[0].offsetWidth // force reflow
       }

       this.$backdrop.addClass('in')

       doAnimate ?
         this.$backdrop.one(transitionEnd, callback) :
         callback()

     } else if ( !this.isShown && this.$backdrop ) {
       this.$backdrop.removeClass('in')

       $.support.transition && this.$element.hasClass('fade')?
         this.$backdrop.one(transitionEnd, $.proxy(removeBackdrop, this)) :
         removeBackdrop.call(this)

     } else if ( callback ) {
        callback()
     }
   }

   function removeBackdrop() {
     this.$backdrop.remove()
     this.$backdrop = null
   }

   function escape() {
     var that = this
     if ( this.isShown && this.settings.keyboard ) {
       $(document).bind('keyup.modal', function ( e ) {
         if ( e.which == 27 ) {
           that.hide()
         }
       })
     } else if ( !this.isShown ) {
       $(document).unbind('keyup.modal')
     }
   }


  /* MODAL PLUGIN DEFINITION
   * ======================= */

   $.fn.modal = function ( options ) {
     var modal = this.data('modal')

     if (!modal) {

       if (typeof options == 'string') {
         options = {
           show: /show|toggle/.test(options)
         }
       }

       return this.each(function () {
         $(this).data('modal', new Modal(this, options))
       })
     }

     if ( options === true ) {
       return modal
     }

     if ( typeof options == 'string' ) {
       modal[options]()
     } else if ( modal ) {
       modal.toggle()
     }

     return this
   }

   $.fn.modal.Modal = Modal

   $.fn.modal.defaults = {
     backdrop: false
   , keyboard: false
   , show: false
   }


  /* MODAL DATA- IMPLEMENTATION
   * ========================== */

   $(document).ready(function () {
     $('body').delegate('[data-controls-modal]', 'click', function (e) {
       e.preventDefault()
       var $this = $(this).data('show', true)
       $('#' + $this.attr('data-controls-modal')).modal( $this.data() )
     })
   })

 }( window.jQuery || window.ender );

 /* ============================================================
  * bootstrap-dropdown.js v1.4.0
  * http://twitter.github.com/bootstrap/javascript.html#dropdown
  * ============================================================
  * Copyright 2011 Twitter, Inc.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  * http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  * ============================================================ */


 !function( $ ){

   "use strict"

   /* DROPDOWN PLUGIN DEFINITION
    * ========================== */

   $.fn.dropdown = function ( selector ) {
     return this.each(function () {
       $(this).delegate(selector || d, 'click', function (e) {
         var li = $(this).parent('li')
           , isActive = li.hasClass('open')

         clearMenus()
         !isActive && li.toggleClass('open')
         return false
       })
     })
   }

   /* APPLY TO STANDARD DROPDOWN ELEMENTS
    * =================================== */

   var d = 'a.menu, .dropdown-toggle'

   function clearMenus() {
     $(d).parent('li').removeClass('open')
   }

   $(function () {
     $('html').bind("click", clearMenus)
     $('body').dropdown( '[data-dropdown] a.menu, [data-dropdown] .dropdown-toggle' )
   })

 }( window.jQuery || window.ender );

 /*global jQuery */
 /*!	
 * FitText.js 1.0
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license 
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Thu May 05 14:23:00 2011 -0600
 */

 (function( $ ){

 	$.fn.fitText = function( kompressor, options ) {

 	    var settings = {
         'minFontSize' : Number.NEGATIVE_INFINITY,
         'maxFontSize' : Number.POSITIVE_INFINITY
       };

 			return this.each(function(){
 				var $this = $(this);              // store the object
 				var compressor = kompressor || 1; // set the compressor

         if ( options ) { 
           $.extend( settings, options );
         }

         // Resizer() resizes items based on the object width divided by the compressor * 10
 				var resizer = function () {
 					$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
 				};

 				// Call once to set.
 				resizer();

 				// Call on resize. Opera debounces their resize by default. 
       	$(window).resize(resizer);

 			});

 	};

 })( jQuery );

// Theme specific custom js

// simple photo switcher
 $(document).ready(function() {
   // fit logo text to width
    $('#logo_text').fitText(1.5);
    //initiate the flexslider
   $('.flexslider').flexslider();
   //masonry the bricks if not on mobile
   if (screen.width > 767){
    $(function(){
       var $container = $('#collection_frontpage');
       $container.imagesLoaded( function(){
         $container.masonry({
           itemSelector : '.brick',
           columnWidth: 230
         });
       });
     });
   };
   // Stuff to do as soon as the DOM is ready;
   $('.thumbnails li a').click(function() {
       $('#first-image a').attr('href', $(this).attr('href')).data('rel', $(this).data('rel'));
       $('#first-image img').attr('src', $(this).children('img').attr('src'));
       return false;
   });
   //share button revealer
     jQuery(document).ready(function() {
     $('.product_share').hide();
     $('.reveal_share').click(function(){
       $('.product_share').slideToggle('slow');
     });
   });
 });

//initiate flexslider and fit logo text
$(window).load(function() {
 
  //google plus one button
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
  // tweet button
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
});



 




 
 