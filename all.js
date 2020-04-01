//$("blockquote").append("<span class='imageholder'>");
//$(".hcb-comment-tb").prepend("</span>");
function checkforimage() {
  
};
$(document).ready(function() {
  
  $('a[href*="/storage/"]').parent.each(function() {
    $( this ).css({"background-color": "red", "border": "10px solid red"});
    alert("Hello! I am an alert box!!");
 });
 
 //console.log("ready");
});