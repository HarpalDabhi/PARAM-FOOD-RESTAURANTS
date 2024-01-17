$(function(){
$('p').hover(function(){
  this.animate({
    opacity:0.5,
    color:'grey',
    cursor:'pointer'
  },2000);
})

$('.dish').dblclick(function(){
  this.hide(1000);
})
});

