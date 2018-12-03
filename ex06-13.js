var timer;
function ThreeSecChange()
{
 timer = setInterval('imgchange3()',3000);
}
function imgchange3(){
  document.getElementById('gazou2').src =
    './image/bulbon.gif';
}