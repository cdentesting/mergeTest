// JavaScript Document1	$(document).ready(function(){
$(document).ready(function(){
var str=location.href.toLowerCase();
$(".navigation li a").each(function() {
if (str.indexOf(this.href.toLowerCase()) > -1) {
 $("li.highlight").removeClass("highlight");
$(this).parent().addClass("highlight");
}
 });
 })
