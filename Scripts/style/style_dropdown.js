$(function(){$(document.body).on("click",".hex-drop-down p",function(e){showdropdown(this);e.stopPropagation()});$(document.body).on("click",".hex-drop-down div",function(e){showdropdown(this);e.stopPropagation()});$(document.body).on("click",".hex-drop-down ul li",function(){getdowninfo(this)});$(document).click(function(){$("div[class='hex-drop-down']").each(function(){updropdown(this)})})});function dropdown(){}function showdropdown(thisobject){var ul=$(thisobject).next("ul");if(ul.get(0)==undefined){ul=$(thisobject).next().next("ul")}var img=$(thisobject).next("div");if(img.get(0)==undefined){img=$(thisobject)}if(ul.css("display")=="none"){ul.slideDown("fast");img.addClass("down")}else{ul.slideUp("fast");img.removeClass("down")}}function updropdown(thisObj){var ul=$(thisObj).children("ul");var img=$(thisObj).children("div");ul.slideUp("fast");img.removeClass("down")}function getdowninfo(thisObj,callback){var p=$(thisObj).parent().prev().prev("p");var txt=$(thisObj).text();var key=$(thisObj).attr("hex-key");p.attr("hex-value",key);p.html(txt);$(thisObj).parent().hide();p.next().removeClass("down");if(callback&&callback instanceof Function)callback()}