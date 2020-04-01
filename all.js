//$("blockquote").append("<span class='imageholder'>");
//$(".hcb-comment-tb").prepend("</span>");
function checkforimage() {
 
  
 $("a[href*='/storage/lg']").each(function() {
   alert("found");
   //$(this).parent().css({"color": "red", "border": "5px solid red"})
 });
  
  
};
$(document).ready(function() {
  checkforimage();
 
 //alert("Hello! I am an alert box!!");
 //console.log("ready");
});