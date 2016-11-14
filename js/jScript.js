var formActive = false;

document.onscroll = function()
{
  if (formActive) document.scrollingElement.scrollTop = 0;

  var scrollTop0 = document.scrollingElement.scrollTop == 0;
  document.getElementById('rightBarTop').style.opacity = scrollTop0 ? '0.2' : '1';
  document.getElementById('rightBarTop').style.cursor = scrollTop0 ? 'default' : 'pointer';
}

function contact(close)
{
    document.getElementById('contact').style.visibility = close ? 'hidden' : 'visible';
    formActive = close ? false : true;
}
