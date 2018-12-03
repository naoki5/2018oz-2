var timer;
function ThreeSecChange()
{
 timer = setInterval('imgchange2()',3000);
}
function imgchange2(){
  document.getElementById('gazou').src =
    './image/bulbon.gif';
}function imgchange3(){
  document.getElementById('gazou2').src =
    './image/bulbon.gif';
}