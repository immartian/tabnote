
/*
$(function(){
function reSize() {
$('.textarea_class').css({'height':(($(window).height()))+'px'});
$('.textarea_class').css({'width':(($(window).width()))+'px'});

}
$(document).ready(reSize);
$(window).resize(reSize);
});

*/
// background.js

function loadContent(){
  var markupStr = localStorage.content;
  $('#summernote').summernote('code', markupStr);


}
function saveContent(){

  //alert("content saved!");
  var html = $('#summernote').summernote('code');
  localStorage.content = html;
}


$(document).ready(function() {
  $('#summernote').summernote();

  loadContent()
  $("#summernote").summernote("fullscreen.toggle");
});

var mySave= setInterval(saveContent,15000);
