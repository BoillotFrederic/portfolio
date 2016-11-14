<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="jScript.js"></script>
    <title>Exo 7 - La Maquette</title>
  </head>
  <body onscroll="scroll();">
    <header id="header">
      <div id="colorBox">
        <div><span onclick="funColor()"></span></div>
        <div><span onclick="changeColor(0);"></span></div>
        <div><span onclick="changeColor(1);"></span></div>
        <div><span onclick="changeColor(2);"></span></div>
        <div><span onclick="changeColor(3);"></span></div>
        <div><span onclick="changeColor(4);"></span></div>
      </div>
      <nav>
        <ul id="menuBar">
          <li><a href="#">Home</a></li>
          <li><a href="#">Porttolio</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
    <div id="body">
      <div id="pBox1">
        <h1>«Lorem ipsum dolo»</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div id="logo"></div>
      <div id="itemsBar">
        <div id="itemLeft" onmouseover="itemHover(this, false)" onmouseout="itemHover(this, true)">
          <a href="#">
            <img src="imgs/items.png" alt="" />
          </a>
          <div class="itemLegend">
            <span>Item 2</span>
          </div>
        </div>
        <div id="itemRight" onmouseover="itemHover(this, false)" onmouseout="itemHover(this, true)">
          <a href="#">
            <img src="imgs/items.png" alt="" />
          </a>
          <div class="itemLegend">
            <span>Item 2</span>
          </div>
        </div>
      </div>
      <div id="pBox2">
        <h2>«Lorem ipsum dolo»</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div id="circle1"></div>
        <div id="circle2"></div>
      </div>
    </div>
    <footer>
      <span>© Lorem ipsum dolo</span>
    </footer>
  </body>
</html>
