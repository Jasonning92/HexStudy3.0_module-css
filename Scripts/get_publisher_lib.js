$(function(){getpublisher();function getpublisher(){var now_url=window.location.href.toString();var ip="";var url_head="";if(now_url.substr(0,5)==="https"){ip="https://portal.hexstudy.com";url_head="https://"}else{ip="http://portal.hexstudy.com";url_head="http://"}var url_post=ip+"/Press/GetContentProviders";jQuery.support.cors=true;$.ajax({type:"POST",url:url_post,crossDomain:true,success:function(result){var num=result.length;var img='';var name='';var id='';var domain='';var div='';for(var i=0;i<num;i++){name=result[i].Name;img=result[i].Icon;domain=result[i].domain;div=div+'<div><a href="'+url_head+domain+'" target="_blank"><img data-src="../images/publisher/qinghua.png" src="../images/publisher/'+img+'"></a><div><a href="'+url_head+domain+'" target="_blank"><h2>'+name+'</h2><h2>|</h2><span>合作专区</span></a></div></div>'}$(".hex-publisher-lib").append(div);imglazyloadinit()}})}});function imglazyloadinit(){if(typeof $("img").lazyload!="undefined"){$("img").lazyload({effect:"fadeIn",failure_limit:50,threshold:180})}setTimeout(function(){$(document.body).scroll()},100)};