!function(t){function o(e){if(n[e])return n[e].exports;var i=n[e]={exports:{},id:e,loaded:!1};return t[e].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}var n={};return o.m=t,o.c=n,o.p="",o(0)}([function(t,o,n){n(1),n(5)()},function(t,o){},,,,function(t,o){t.exports=function(){function t(t){var o='<div class="card">'+t+"</div>";$(".container").append(o)}function o(){var t=r.offset().top,o=$(window).height()-$(".card").height()-$(".card:first-child").offset().top;t>o&&$(window).scrollTop(t-o)}function n(t){var o='<div class="card button-wrapper"> <button type="button" class="button" data-id="'+t[0].redirect+'">'+t[0].text+'</button> <button type="button" class="button" data-id="'+t[1].redirect+'">'+t[1].text+"</button></div>";$(".container").append(o)}function e(e){r.show();for(var i=0;i<e.texts.length;i++)!function(i){var d=e.texts,a=setTimeout(function(){var s=d[i];t(s),o(),i===d.length-1&&(clearTimeout(a),e.options&&n(e.options),r.hide())},1500*i)}(i)}var i=[{id:0,texts:["1","2","3","4","5"],options:[{text:"yes",redirect:1},{text:"no",redirect:2}]},{id:1,texts:["11","12","13","14","15"],options:[{text:"yes",redirect:1},{text:"no",redirect:2}]},{id:2,texts:["21","22","23","24","游戏结束"]}],r=$(".loading");e(i[0]),$(document).on("click",".card .button",function(t){var o=$(t.target);o.addClass("button-active-disabled").prop("disabled",!0),o.siblings(".button").addClass("button-disabled").prop("disabled",!0);var n=o.data("id"),r=i[n];e(r)})}}]);