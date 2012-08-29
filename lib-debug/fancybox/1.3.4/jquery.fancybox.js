define(function(e,t,n){var r=e("jquery");e("jquery.fancybox-1.3.4.css#");var i=e("lib/easing/1.3/jquery.easing");r=i.make(r),function(e){var t,n,i,s,o,u,a,f,l,c,h=0,p={},d=[],v=0,m={},g=[],y=null,b=new Image,w=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,E=/[^\.]\.(swf)\s*$/i,S,x=1,T=0,N="",C,k,L=!1,A=e.extend(e("<div/>")[0],{prop:0}),O=e.browser.msie&&e.browser.version<7&&!window.XMLHttpRequest,M=function(){n.hide(),b.onerror=b.onload=null,y&&y.abort(),t.empty()},_=function(){if(!1===p.onError(d,h,p)){n.hide(),L=!1;return}p.titleShow=!1,p.width="auto",p.height="auto",t.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'),P()},D=function(){var r=d[h],i,s,o,a,f,l;M(),p=e.extend({},e.fn.fancybox.defaults,typeof e(r).data("fancybox")=="undefined"?p:e(r).data("fancybox")),l=p.onStart(d,h,p);if(l===!1){L=!1;return}typeof l=="object"&&(p=e.extend(p,l)),o=p.title||(r.nodeName?e(r).attr("title"):r.title)||"",r.nodeName&&!p.orig&&(p.orig=e(r).children("img:first").length?e(r).children("img:first"):e(r)),o===""&&p.orig&&p.titleFromAlt&&(o=p.orig.attr("alt")),i=p.href||(r.nodeName?e(r).attr("href"):r.href)||null;if(/^(?:javascript)/i.test(i)||i=="#")i=null;p.type?(s=p.type,i||(i=p.content)):p.content?s="html":i&&(i.match(w)?s="image":i.match(E)?s="swf":e(r).hasClass("iframe")?s="iframe":i.indexOf("#")===0?s="inline":s="ajax");if(!s){_();return}s=="inline"&&(r=i.substr(i.indexOf("#")),s=e(r).length>0?"inline":"ajax"),p.type=s,p.href=i,p.title=o,p.autoDimensions&&(p.type=="html"||p.type=="inline"||p.type=="ajax"?(p.width="auto",p.height="auto"):p.autoDimensions=!1),p.modal&&(p.overlayShow=!0,p.hideOnOverlayClick=!1,p.hideOnContentClick=!1,p.enableEscapeButton=!1,p.showCloseButton=!1),p.padding=parseInt(p.padding,10),p.margin=parseInt(p.margin,10),t.css("padding",p.padding+p.margin),e(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){e(this).replaceWith(u.children())});switch(s){case"html":t.html(p.content),P();break;case"inline":if(e(r).parent().is("#fancybox-content")===!0){L=!1;return}e('<div class="fancybox-inline-tmp" />').hide().insertBefore(e(r)).bind("fancybox-cleanup",function(){e(this).replaceWith(u.children())}).bind("fancybox-cancel",function(){e(this).replaceWith(t.children())}),e(r).appendTo(t),P();break;case"image":L=!1,e.fancybox.showActivity(),b=new Image,b.onerror=function(){_()},b.onload=function(){L=!0,b.onerror=b.onload=null,H()},b.src=i;break;case"swf":p.scrolling="no",a='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+p.width+'" height="'+p.height+'"><param name="movie" value="'+i+'"></param>',f="",e.each(p.swf,function(e,t){a+='<param name="'+e+'" value="'+t+'"></param>',f+=" "+e+'="'+t+'"'}),a+='<embed src="'+i+'" type="application/x-shockwave-flash" width="'+p.width+'" height="'+p.height+'"'+f+"></embed></object>",t.html(a),P();break;case"ajax":L=!1,e.fancybox.showActivity(),p.ajax.win=p.ajax.success,y=e.ajax(e.extend({},p.ajax,{url:i,data:p.ajax.data||{},error:function(e,t,n){e.status>0&&_()},success:function(e,r,s){var o=typeof s=="object"?s:y;if(o.status==200){if(typeof p.ajax.win=="function"){l=p.ajax.win(i,e,r,s);if(l===!1){n.hide();return}if(typeof l=="string"||typeof l=="object")e=l}t.html(e),P()}}}));break;case"iframe":B()}},P=function(){var n=p.width,r=p.height;n.toString().indexOf("%")>-1?n=parseInt((e(window).width()-p.margin*2)*parseFloat(n)/100,10)+"px":n=n=="auto"?"auto":n+"px",r.toString().indexOf("%")>-1?r=parseInt((e(window).height()-p.margin*2)*parseFloat(r)/100,10)+"px":r=r=="auto"?"auto":r+"px",t.wrapInner('<div style="width:'+n+";height:"+r+";overflow: "+(p.scrolling=="auto"?"auto":p.scrolling=="yes"?"scroll":"hidden")+';position:relative;"></div>'),p.width=t.width(),p.height=t.height(),B()},H=function(){p.width=b.width,p.height=b.height,e("<img />").attr({id:"fancybox-img",src:b.src,alt:p.title}).appendTo(t),B()},B=function(){var r,o;n.hide();if(s.is(":visible")&&!1===m.onCleanup(g,v,m)){e.event.trigger("fancybox-cancel"),L=!1;return}L=!0,e(u.add(i)).unbind(),e(window).unbind("resize.fb scroll.fb"),e(document).unbind("keydown.fb"),s.is(":visible")&&m.titlePosition!=="outside"&&s.css("height",s.height()),g=d,v=h,m=p,m.overlayShow?(i.css({"background-color":m.overlayColor,opacity:m.overlayOpacity,cursor:m.hideOnOverlayClick?"pointer":"auto",height:e(document).height()}),i.is(":visible")||(O&&e("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"}),i.show())):i.hide(),k=W(),F();if(s.is(":visible")){e(a.add(l).add(c)).hide(),r=s.position(),C={top:r.top,left:r.left,width:s.width(),height:s.height()},o=C.width==k.width&&C.height==k.height,u.fadeTo(m.changeFade,.3,function(){var n=function(){u.html(t.contents()).fadeTo(m.changeFade,1,q)};e.event.trigger("fancybox-change"),u.empty().removeAttr("filter").css({"border-width":m.padding,width:k.width-m.padding*2,height:p.autoDimensions?"auto":k.height-T-m.padding*2}),o?n():(A.prop=0,e(A).animate({prop:1},{duration:m.changeSpeed,easing:m.easingChange,step:U,complete:n}))});return}s.removeAttr("style"),u.css("border-width",m.padding);if(m.transitionIn=="elastic"){C=V(),u.html(t.contents()),s.show(),m.opacity&&(k.opacity=0),A.prop=0,e(A).animate({prop:1},{duration:m.speedIn,easing:m.easingIn,step:U,complete:q});return}m.titlePosition=="inside"&&T>0&&f.show(),u.css({width:k.width-m.padding*2,height:p.autoDimensions?"auto":k.height-T-m.padding*2}).html(t.contents()),s.css(k).fadeIn(m.transitionIn=="none"?0:m.speedIn,q)},j=function(e){return e&&e.length?m.titlePosition=="float"?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+e+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+m.titlePosition+'">'+e+"</div>":!1},F=function(){N=m.title||"",T=0,f.empty().removeAttr("style").removeClass();if(m.titleShow===!1){f.hide();return}N=e.isFunction(m.titleFormat)?m.titleFormat(N,g,v,m):j(N);if(!N||N===""){f.hide();return}f.addClass("fancybox-title-"+m.titlePosition).html(N).appendTo("body").show();switch(m.titlePosition){case"inside":f.css({width:k.width-m.padding*2,marginLeft:m.padding,marginRight:m.padding}),T=f.outerHeight(!0),f.appendTo(o),k.height+=T;break;case"over":f.css({marginLeft:m.padding,width:k.width-m.padding*2,bottom:m.padding}).appendTo(o);break;case"float":f.css("left",parseInt((f.width()-k.width-40)/2,10)*-1).appendTo(s);break;default:f.css({width:k.width-m.padding*2,paddingLeft:m.padding,paddingRight:m.padding}).appendTo(s)}f.hide()},I=function(){(m.enableEscapeButton||m.enableKeyboardNav)&&e(document).bind("keydown.fb",function(t){t.keyCode==27&&m.enableEscapeButton?(t.preventDefault(),e.fancybox.close()):(t.keyCode==37||t.keyCode==39)&&m.enableKeyboardNav&&t.target.tagName!=="INPUT"&&t.target.tagName!=="TEXTAREA"&&t.target.tagName!=="SELECT"&&(t.preventDefault(),e.fancybox[t.keyCode==37?"prev":"next"]())});if(!m.showNavArrows){l.hide(),c.hide();return}(m.cyclic&&g.length>1||v!==0)&&l.show(),(m.cyclic&&g.length>1||v!=g.length-1)&&c.show()},q=function(){e.support.opacity||(u.get(0).style.removeAttribute("filter"),s.get(0).style.removeAttribute("filter")),p.autoDimensions&&u.css("height","auto"),s.css("height","auto"),N&&N.length&&f.show(),m.showCloseButton&&a.show(),I(),m.hideOnContentClick&&u.bind("click",e.fancybox.close),m.hideOnOverlayClick&&i.bind("click",e.fancybox.close),e(window).bind("resize.fb",e.fancybox.resize),m.centerOnScroll&&e(window).bind("scroll.fb",e.fancybox.center),m.type=="iframe"&&e('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(e.browser.msie?'allowtransparency="true""':"")+' scrolling="'+p.scrolling+'" src="'+m.href+'"></iframe>').appendTo(u),s.show(),L=!1,e.fancybox.center(),m.onComplete(g,v,m),R()},R=function(){var e,t;g.length-1>v&&(e=g[v+1].href,typeof e!="undefined"&&e.match(w)&&(t=new Image,t.src=e)),v>0&&(e=g[v-1].href,typeof e!="undefined"&&e.match(w)&&(t=new Image,t.src=e))},U=function(e){var t={width:parseInt(C.width+(k.width-C.width)*e,10),height:parseInt(C.height+(k.height-C.height)*e,10),top:parseInt(C.top+(k.top-C.top)*e,10),left:parseInt(C.left+(k.left-C.left)*e,10)};typeof k.opacity!="undefined"&&(t.opacity=e<.5?.5:e),s.css(t),u.css({width:t.width-m.padding*2,height:t.height-T*e-m.padding*2})},z=function(){return[e(window).width()-m.margin*2,e(window).height()-m.margin*2,e(document).scrollLeft()+m.margin,e(document).scrollTop()+m.margin]},W=function(){var e=z(),t={},n=m.autoScale,r=m.padding*2,i;return m.width.toString().indexOf("%")>-1?t.width=parseInt(e[0]*parseFloat(m.width)/100,10):t.width=m.width+r,m.height.toString().indexOf("%")>-1?t.height=parseInt(e[1]*parseFloat(m.height)/100,10):t.height=m.height+r,n&&(t.width>e[0]||t.height>e[1])&&(p.type=="image"||p.type=="swf"?(i=m.width/m.height,t.width>e[0]&&(t.width=e[0],t.height=parseInt((t.width-r)/i+r,10)),t.height>e[1]&&(t.height=e[1],t.width=parseInt((t.height-r)*i+r,10))):(t.width=Math.min(t.width,e[0]),t.height=Math.min(t.height,e[1]))),t.top=parseInt(Math.max(e[3]-20,e[3]+(e[1]-t.height-40)*.5),10),t.left=parseInt(Math.max(e[2]-20,e[2]+(e[0]-t.width-40)*.5),10),t},X=function(e){var t=e.offset();return t.top+=parseInt(e.css("paddingTop"),10)||0,t.left+=parseInt(e.css("paddingLeft"),10)||0,t.top+=parseInt(e.css("border-top-width"),10)||0,t.left+=parseInt(e.css("border-left-width"),10)||0,t.width=e.width(),t.height=e.height(),t},V=function(){var t=p.orig?e(p.orig):!1,n={},r,i;return t&&t.length?(r=X(t),n={width:r.width+m.padding*2,height:r.height+m.padding*2,top:r.top-m.padding-20,left:r.left-m.padding-20}):(i=z(),n={width:m.padding*2,height:m.padding*2,top:parseInt(i[3]+i[1]*.5,10),left:parseInt(i[2]+i[0]*.5,10)}),n},$=function(){if(!n.is(":visible")){clearInterval(S);return}e("div",n).css("top",x*-40+"px"),x=(x+1)%12};e.fn.fancybox=function(t){return e(this).length?(e(this).data("fancybox",e.extend({},t,e.metadata?e(this).metadata():{})).unbind("click.fb").bind("click.fb",function(t){t.preventDefault();if(L)return;L=!0,e(this).blur(),d=[],h=0;var n=e(this).attr("rel")||"";!n||n==""||n==="nofollow"?d.push(this):(d=e("a[rel="+n+"], area[rel="+n+"]"),h=d.index(this)),D();return}),this):this},e.fancybox=function(t){var n;if(L)return;L=!0,n=typeof arguments[1]!="undefined"?arguments[1]:{},d=[],h=parseInt(n.index,10)||0;if(e.isArray(t)){for(var i=0,s=t.length;i<s;i++)typeof t[i]=="object"?e(t[i]).data("fancybox",e.extend({},n,t[i])):t[i]=e({}).data("fancybox",e.extend({content:t[i]},n));d=r.merge(d,t)}else typeof t=="object"?e(t).data("fancybox",e.extend({},n,t)):t=e({}).data("fancybox",e.extend({content:t},n)),d.push(t);if(h>d.length||h<0)h=0;D()},e.fancybox.showActivity=function(){clearInterval(S),n.show(),S=setInterval($,66)},e.fancybox.hideActivity=function(){n.hide()},e.fancybox.next=function(){return e.fancybox.pos(v+1)},e.fancybox.prev=function(){return e.fancybox.pos(v-1)},e.fancybox.pos=function(e){if(L)return;e=parseInt(e),d=g,e>-1&&e<g.length?(h=e,D()):m.cyclic&&g.length>1&&(h=e>=g.length?0:g.length-1,D());return},e.fancybox.cancel=function(){if(L)return;L=!0,e.event.trigger("fancybox-cancel"),M(),p.onCancel(d,h,p),L=!1},e.fancybox.close=function(){function t(){i.fadeOut("fast"),f.empty().hide(),s.hide(),e.event.trigger("fancybox-cleanup"),u.empty(),m.onClosed(g,v,m),g=p=[],v=h=0,m=p={},L=!1}if(L||s.is(":hidden"))return;L=!0;if(m&&!1===m.onCleanup(g,v,m)){L=!1;return}M(),e(a.add(l).add(c)).hide(),e(u.add(i)).unbind(),e(window).unbind("resize.fb scroll.fb"),e(document).unbind("keydown.fb"),u.find("iframe").attr("src",O&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank"),m.titlePosition!=="inside"&&f.empty(),s.stop();if(m.transitionOut=="elastic"){C=V();var n=s.position();k={top:n.top,left:n.left,width:s.width(),height:s.height()},m.opacity&&(k.opacity=1),f.empty().hide(),A.prop=1,e(A).animate({prop:0},{duration:m.speedOut,easing:m.easingOut,step:U,complete:t})}else s.fadeOut(m.transitionOut=="none"?0:m.speedOut,t)},e.fancybox.resize=function(){i.is(":visible")&&i.css("height",e(document).height()),e.fancybox.center(!0)},e.fancybox.center=function(){var e,t;if(L)return;t=arguments[0]===!0?1:0,e=z();if(!t&&(s.width()>e[0]||s.height()>e[1]))return;s.stop().animate({top:parseInt(Math.max(e[3]-20,e[3]+(e[1]-u.height()-40)*.5-m.padding)),left:parseInt(Math.max(e[2]-20,e[2]+(e[0]-u.width()-40)*.5-m.padding))},typeof arguments[0]=="number"?arguments[0]:200)},e.fancybox.init=function(){if(e("#fancybox-wrap").length)return;e("body").append(t=e('<div id="fancybox-tmp"></div>'),n=e('<div id="fancybox-loading"><div></div></div>'),i=e('<div id="fancybox-overlay"></div>'),s=e('<div id="fancybox-wrap"></div>')),o=e('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(s),o.append(u=e('<div id="fancybox-content"></div>'),a=e('<a id="fancybox-close"></a>'),f=e('<div id="fancybox-title"></div>'),l=e('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),c=e('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')),a.click(e.fancybox.close),n.click(e.fancybox.cancel),l.click(function(t){t.preventDefault(),e.fancybox.prev()}),c.click(function(t){t.preventDefault(),e.fancybox.next()}),e.fn.mousewheel&&s.bind("mousewheel.fb",function(t,n){if(L)t.preventDefault();else if(e(t.target).get(0).clientHeight==0||e(t.target).get(0).scrollHeight===e(t.target).get(0).clientHeight)t.preventDefault(),e.fancybox[n>0?"prev":"next"]()}),e.support.opacity||s.addClass("fancybox-ie"),O&&(n.addClass("fancybox-ie6"),s.addClass("fancybox-ie6"),e('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(o))},e.fn.fancybox.defaults={padding:10,margin:40,opacity:!1,modal:!1,cyclic:!1,scrolling:"auto",width:560,height:340,autoScale:!0,autoDimensions:!0,centerOnScroll:!1,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:!0,hideOnContentClick:!1,overlayShow:!0,overlayOpacity:.7,overlayColor:"#777",titleShow:!0,titlePosition:"float",titleFormat:null,titleFromAlt:!1,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:!0,showNavArrows:!0,enableEscapeButton:!0,enableKeyboardNav:!0,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}},e(document).ready(function(){e.fancybox.init()})}(r),t.$=r});