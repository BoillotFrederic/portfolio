<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/style.css">
    <title>Portfolio : Boillot Frédéric</title>
    <meta name="description" content="Ensemble de mes projets en programmation HTML/CSS" />
    <script type="text/javascript" src="js/jScript.js"></script>
  </head>
  <body>
    <div id="contact">
      <div>
        <h4>
          Formulaire de Contact
          <a href="javascript:contact(true);">
            <img src="images/fermer.png" alt="Fermer" />
          </a>
        </h4>
        <form method="post" action="index.php">
          <label for="name">Pseudo</label>
          <input type="text" name="name" id="name" />
          <label for="mail">Email</label>
          <input type="text" name="mail" id="mail" />
          <label for="subject">Sujet</label>
          <input type="text" name="subject" id="subject" />
          <label for="name">Message</label>
          <textarea></textarea>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
    <header>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="javascript:contact(false);">Contact</a></li>
      </ul>
    </header>
    <div id="content">
      <div id="rightBar">
        <a id="rightBarTop" href="#top" title="Retour au TOP">
          <img src="images/top.png" alt="TOP" />
        </a>
        <a href="#" title="Page FaceBook">
          <img src="images/fb.png" alt="Facebook" />
        </a>
        <a href="#" title="Page Twitter">
          <img src="images/twitter.png" alt="Twitter" />
        </a>
        <a href="#" title="Flux RSS">
          <img src="images/rss.png" alt="RSS" />
        </a>
      </div>
      <div id="home" class="sections">
        <h1>
          Bienvenue sur mon Portfolio
          <img src="images/home.png" alt="Home" />
        </h1>
        <p>
          Actuellement en formation WEB chez Simplon, nous sommes pour le moment essentiellement sur du développement HTML et CSS
          mais étudierons ensuite les langages JS, PHP et SQL.<br /><br />
          Retrouvez donc ci-dessous, l'intégralité des projets sur lesquels nous avons travaillé.<br />
          Bonne visite !
        </p>
      </div>
      <div id="portfolio" class="sections">
        <h2>
          Mes projets HTML/CSS/JS
          <img src="images/portfolio.png" alt="Portfolio" />
        </h2>
        <ul>
          <li>
            <a target="_blank" href="projects/Exo1">
              <span>HTML CSS NOOB : Part 1</span>
              <img src="images/ex1.png" alt="Exercice 1" />
              <span>
              Apprentissage des bases du HTML et CSS avec l'étude des balises div, des listes à puces et des tableaux.
              Ainsi que leurs transformations CSS.
              </span>
            </a>
          </li>
          <li>
            <a target="_blank" href="projects/Exo2">
              <span>HTML CSS NOOB : Part 1 - Extra</span>
              <img src="images/ex2.png" alt="Exercice 2" />
              <span>
              La même choses avec l'application d'un code CSS un peu plus poussé.
              </span>
            </a>
          </li>
          <li>
            <a target="_blank" href="projects/Exo3">
              <span>HTML CSS NOOB : Part 2</span>
              <img src="images/ex3.png" alt="Exercice 3" />
              <span>
              Toujours plus loin avec cette fois ci quelques notions de sélecteur CSS.
              </span>
            </a>
          </li>
          <li>
            <a target="_blank" href="projects/Exo4">
              <span>Les sélecteurs CSS</span>
              <img src="images/ex4.png" alt="Exercice 4" />
              <span>
              Exercices supplémentaires sur les sélecteurs en CSS. Il s'agissait cette fois, de créer une page en utilisant quasiment que des sélecteurs CSS.
              </span>
            </a>
          </li>
          <li>
            <a target="_blank" href="projects/Exo6">
              <span>Float BOX</span>
              <img src="images/ex6.png" alt="Exercice 5" />
              <span>
              Simple exercice pour le positionement des div flotantes.
              </span>
            </a>
          </li>
          <li>
            <a target="_blank" href="projects/Exo5">
              <span>Tête de div</span>
              <img src="images/ex5.png" alt="Exercice 6" />
              <span>
              Il s'agit d'un exercice consistant à créer une tête rien qu'avec des div et du CSS.
              </span>
            </a>
          </li>
          <li>
            <a target="_blank" href="projects/Exo7_Maquette">
              <span>Maquette</span>
              <img src="images/ex7.png" alt="Exercice 7" />
              <span>
              Première maquette de site à reproduire par nos propres moyens.
              </span>
            </a>
          </li>
          <li>
            <a target="_blank" href="projects/Exo8/chall1FB">
              <span>Challenge</span>
              <img src="images/ex8.png" alt="Exercice 8" />
              <span>
              Site à réaliser en suivant un Mok-Up.
              </span>
            </a>
          </li>
          <li>
            <a target="_blank" href="projects/brick">
              <span>Brick</span>
              <img src="images/brick.png" alt="Brick" />
              <span>
              Petit jeu réalisé avec du HTML, CSS et du javascript. Il s'agit d'une simple ré-interprétation du très célèbre CasseBrick.
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div id="about" class="sections">
          <h3>
            Deux ou trois choses sur moi
            <img src="images/about.png" alt="About" />
          </h3>
          <p>
            Je m'appelle Frédéric Boillot.<br />
            J'ai 30 ans et je suis passionné depuis longtemps par la programmation WEB et software.<br /><br />
            Je viens tout juste d'intégrer la formation Simplon mais j'ai déjà pas mal tranvaillé sur divers projets personnels
            comme un émulateur Game Boy Color en C#/C++ ainsi qu'un petit utilitaire permettant de lister les dossiers et fichiers sous Windows.<br /><br />
            Mon parcours professionnel et scolaire part un peu dans tous les sens. Dabord orienté dans la vente puis ensuite vers la cuisine alors qu'aucun
            de ces métiers ne m'attirés. J'ai ensuite suivi une remise à niveau au CUEEP puis j'ai découvert Simpon qui pourrait enfin me mener
            au métier que j'ai toujours voulu faire mais qui m'était inacessible à cause de mon manque d'étude.
          </p>
      </div>
    </div>
    <footer>
      <span>© Tous droits réservés</span>
    </footer>
  </body>
</html>
