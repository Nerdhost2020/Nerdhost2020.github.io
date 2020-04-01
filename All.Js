//$("blockquote").append("<span class='imageholder'>");
//$(".hcb-comment-tb").prepend("</span>");
function checkforimage() {
 $('a[href*="m/storage/"]').each(function() {
   $(this).parent().css({"color": "red", "border": "5px solid red"})
 });
  
  
}
$(document).ready(function() {
  checkforimage();
  console.log("ready");
});