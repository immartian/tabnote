$(function(){
function reSize() {
$('.textarea_class').css({'height':(($(window).height()))+'px'});
$('.textarea_class').css({'width':(($(window).width()))+'px'});

}
$(document).ready(reSize);
$(window).resize(reSize);
});
