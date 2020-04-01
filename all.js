//$("blockquote").append("<span class='imageholder'>");
//$(".hcb-comment-tb").prepend("</span>");
function checkforimage() {
 
  
 
  
  
};
$(document).ready(function() {
  $("a[href*='/storage/lg']").each(function() {
    $( this ).parent(".comment").css({"color": "red", "border": "5px solid red"})
  });
 
 alert("Hello! I am an alert box!!");
 //console.log("ready");
});