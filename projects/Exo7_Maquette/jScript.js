var timer;
var colorSelect = 1;

function changeColor(color)
{
  document.getElementById('colorBox').children[colorSelect].style.borderBottom = 'none';
  colorSelect = (color <= 4) ? color + 1 : 1;

  var colorHex = '#636573';

  switch (color)
  {
    case 0: colorHex = '#636573'; break;
    case 1: colorHex = '#636500'; break;
    case 2: colorHex = '#632273'; break;
    case 3: colorHex = '#006573'; break;
    case 4: colorHex = '#AA6573'; break;
  }

  document.getElementsByTagName('body')[0].style.backgroundColor = colorHex;
  document.getElementsByClassName('itemLegend')[0].style.backgroundColor = colorHex;
  document.getElementsByClassName('itemLegend')[1].style.backgroundColor = colorHex;
  document.getElementById('colorBox').children[colorSelect].style.borderBottom = '1px dotted white';

  clearInterval(timer);
}

function funColor()
{
    document.getElementById('colorBox').children[colorSelect].style.borderBottom = 'none';
    document.getElementById('colorBox').children[0].style.borderBottom = '1px dotted white';
    colorSelect = 0;
    timer = setTimeout(BFC, 1000);
}

var iColor = 0;

function BFC()
{
  var colorHex = '#636573';

  switch (iColor)
  {
    case 0: colorHex = '#636573'; break;
    case 1: colorHex = '#636500'; break;
    case 2: colorHex = '#632273'; break;
    case 3: colorHex = '#006573'; break;
    case 4: colorHex = '#AA6573'; break;
  }

  document.getElementsByTagName('body')[0].style.backgroundColor = colorHex;
  document.getElementsByClassName('itemLegend')[0].style.backgroundColor = colorHex;
  document.getElementsByClassName('itemLegend')[1].style.backgroundColor = colorHex;
  if(iColor >= 4) iColor = 0; else iColor++;
  timer = setTimeout(BFC, 1000);
}

function scroll()
{
  document.getElementById('header').style.opacity = (document.scrollingElement.scrollTop != 0) ? 0.3 : 1;
}

// Debug Item Hover
function itemHover(obj, mouse)
{
  if (!mouse)
  obj.children[1].style.backgroundColor = 'white';
  else
  obj.children[1].style.backgroundColor = document.getElementsByTagName('body')[0].style.backgroundColor;
}
