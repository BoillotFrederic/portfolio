function setPixel(x, y, color)
{
  if(x >= 0 && x <= 62 && y >= 0 && y <= 31)
  document.getElementsByTagName('table')[0].children[0].children[y].children[x].style.backgroundColor = color;
}

function getPixel(x, y)
{
  if(x >= 0 && x <= 62 && y >= 0 && y <= 31)
  return document.getElementsByTagName('table')[0].children[0].children[y].children[x].style.backgroundColor;
}

function drawLine()
{
  var line = 0;

  for(var y = 0; y <= 15; y++)
  {
    for(var x = 0; x <= 56; x += 8)
    {
      if (y % 2 == 0 && y >= 8)
      {
        if(x == 0) line++;

        for(var brick = 0; brick <= 8; brick++)
        {
          if (x <= 56 && brick == 7) break;

          if (((line == 1 || line == 4) && x == 0) ||
             ((line == 1 || line == 4) && x == 56) ||
             ((line == 2 || line == 3) && x >= 16 && x < 48))
          setPixel(x + brick, y, '#910000');

          else if ((line == 1 || line == 4) && (x == 8 || x == 48))
          setPixel(x + brick, y, '#005591');

          else if ((line == 1 || line == 4) && (x == 16 || x == 40))
          setPixel(x + brick, y, '#609100');

          else
          setPixel(x + brick, y, '#918C00');
        }
      }
    }
  }
}

var lastRampPos = 28;

function drawRamp(pos)
{
  // Destruction de l'ancienne ramp
  for(var x = 0; x < 8; x++)
  {
    if (x + lastRampPos <= 62)
    setPixel(x + lastRampPos, 31, 'white');
  }

  // Nouvelle ramp
  lastRampPos = pos;

  for(var x = 0; x < 7; x++)
  {
    switch(x)
    {
      case 0: setPixel(x + pos, 31, '#000001'); break;
      case 1: setPixel(x + pos, 31, '#000002'); break;
      case 2: setPixel(x + pos, 31, '#000003'); break;
      case 3: setPixel(x + pos, 31, '#000004'); break;
      case 4: setPixel(x + pos, 31, '#000005'); break;
      case 5: setPixel(x + pos, 31, '#000006'); break;
      case 6: setPixel(x + pos, 31, '#000007'); break;
    }
  }
}

var lastBallX = 32;
var lastBallY = 30;
var directionX = 1;
var directionY = 1;
var timer;

function drawBall()
{
  // Suppression de l'ancienne position
  if (lastBallY != 31)
  setPixel(lastBallX, lastBallY, 'white');

  // Changement de direction horizontal
  if (lastBallX <= 0) directionX = 1;
  if (lastBallX >= 62) directionX = 0;
  if (lastBallY <= 1) directionY = 0;

  // Configuration des angles
  configAngle();

  // Prochaine position
  var x = directionX ? lastBallX + xAdd : lastBallX - xAdd;
  var y = directionY ? lastBallY - yAdd : lastBallY + yAdd;

  // Dépassement par le bas
  if (y >= 32)
  {
    life--;
    drawLife(life);
    angle = 1;

    if (life)
    {
      lastBallX = 32;
      lastBallY = 30;
      directionX = 1;
      directionY = 1;

      for(xClear = 0; xClear <= 62; xClear++)
      {
        setPixel(xClear, 31, 'white');
      }

      drawRamp(28);
      timer = setTimeout(drawBall, 100);
      return;
    }
    else
    {
      lose();
      return;
    }
  }

  // Colissions
  if (getPixel(x, y) != 'white')
  {
    if (y <= 20) destroyBrick(x, y);
    else
    {
      switch(getPixel(x, y))
      {
        case 'rgb(0, 0, 1)': angle = 0; break;
        case 'rgb(0, 0, 2)': angle = 1; break;
        case 'rgb(0, 0, 3)': angle = 2; break;
        case 'rgb(0, 0, 4)': angle = 3; break;
        case 'rgb(0, 0, 5)': angle = 4; break;
        case 'rgb(0, 0, 6)': angle = 5; break;
        case 'rgb(0, 0, 7)': angle = 6; break;
      }

      directionX = (angle <= 3) ? 0 : 1;
    }

    directionY = directionY ? 0 : 1;
  }

  // Ecriture de la nouvelle position
  lastBallX = x;
  lastBallY = y;

  if (y < 31)
  setPixel(x, y, '#440043');
  else if (getPixel(x, y) == 'white')
  setPixel(x, y, 'red');


  // Timer
  if (nbBrick)
  timer = setTimeout(drawBall, 80);
}

var life = 5;

function drawLife(nb)
{
  setPixel(62, 0, nb >= 1 ? 'black' : 'white');
  setPixel(60, 0, nb >= 2 ? 'black' : 'white');
  setPixel(58, 0, nb >= 3 ? 'black' : 'white');
  setPixel(56, 0, nb >= 4 ? 'black' : 'white');
  setPixel(54, 0, nb >= 5 ? 'black' : 'white');
}

function init()
{
  clearInterval(timer);

  for(var y = 0; y < 32; y++)
  {
    for(var x = 0; x < 63; x++)
    {
      setPixel(x, y, 'white');
    }
  }

  lastBallX = 32;
  lastBallY = 30;
  directionX = 1;
  directionY = 1;
  nbBrick = 32;

  drawLine();
  drawRamp(28);
  drawBall();
  drawLife(5);

  document.getElementsByTagName('div')[1].children[0].style.display = "none";
  clearInterval(timerParasite);
}

var iAngle = 0;
var angle = 1;
var xAdd = 1;
var yAdd = 1;

function configAngle()
{
    // Angles
    if(angle == 0 || angle == 6)
    {
      if (iAngle == 0)
      {
        xAdd = 1;
        yAdd = 0;
      }
      else if (iAngle == 2)
      {
        xAdd = 1;
        yAdd = 0;
      }
      else
      {
        xAdd = 1;
        yAdd = 1;
      }

      iAngle++;
      if (iAngle == 3) iAngle = 0;
    }
    else if(angle == 2 || angle == 4)
    {
      if (iAngle == 0)
      {
        xAdd = 0;
        yAdd = 1;
      }
      else if (iAngle == 2)
      {
        xAdd = 0;
        yAdd = 1;
      }
      else
      {
        xAdd = 1;
        yAdd = 1;
      }

      iAngle++;
      if (iAngle == 3) iAngle = 0;
    }
    else if(angle == 3)
    {
      xAdd = 0;
      yAdd = 1;

      iAngle = 0;
    }
    else
    {
      xAdd = 1;
      yAdd = 1;
    }

  if (lastBallY + yAdd >= 31) yAdd = 1;
}

var nbBrick = 32;

function destroyBrick(x, y)
{
  for(brick = x; brick <= x + 8; brick++)
  {
    if (getPixel(brick, y) == 'white' || brick > 62) break;
    setPixel(brick , y, 'white');
  }

  for(brick = x; brick >= x - 8; brick--)
  {
    if ((getPixel(brick, y) == 'white' && x != brick) || brick < 0) break;
    setPixel(brick , y, 'white');
  }

  nbBrick--;
  if(nbBrick <= 0) win();
}

document.onkeydown = function (e)
{
  if(e.keyCode == '37')
  {
    if(lastRampPos - 1 < 0) return;
    drawRamp(lastRampPos - 1);
  }

  if(e.keyCode == '39')
  {
    if(lastRampPos + 1 >= 57) return;
    drawRamp(lastRampPos + 1);
  }
}

function lose()
{
  document.getElementsByTagName('div')[0].children[0].innerHTML = 'Perdu !!!';
  document.getElementsByTagName('div')[0].children[1].innerHTML = 'Relancer la partie';
  clearInterval(timer);
}

function win()
{
  document.getElementsByTagName('div')[0].children[0].innerHTML = 'Bravo !!!';
  document.getElementsByTagName('div')[0].children[1].innerHTML = 'Relancer la partie';
  document.getElementsByTagName('div')[1].children[0].style.display = "block";
  parasite();
}

var timerParasite;

function parasite()
{
  for (var x = 0; x < 63; x++)
  {
    for (var y = 0; y < 32; y++)
    {
      var r = Math.floor((Math.random() * 255));
      var g = Math.floor((Math.random() * 255));
      var b = Math.floor((Math.random() * 255));

      setPixel(x, y, 'rgba('+ r +', '+ g +', '+ b +', 1)');
    }
  }

  timerParasite = setTimeout(parasite, 10);
}
