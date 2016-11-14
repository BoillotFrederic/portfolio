<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/style.css">
    <title>Le Bouquet De Rose</title>
    <meta name="description" value="Vitrine du bouquet de rose">
  </head>
  <body>
    <!-- En-tête -->
    <header>
      <nav>
        <ul id="menuBar">
          <li><a href=".././">Accueil</a></li>
          <li><a href="produits.php">Produits</a></li>
          <li><a href="nous.php">Nous</a></li>
          <li><a href="contact.php">Contact</a></li>
        </ul>
      </nav>
      <h1>Contact</h1>
    </header>
    <div id="backGroundP4">
      <!-- Formulaire -->
      <form action="contact.php" method="post">
        <div id="contactLeft">
          <label for="name">Nom</label><br />
          <input name="name" id="name" type="text" /><br /><br />
          <label for="surname">Prénom</label><br />
          <input name="surname" id="surname" type="text" /><br /><br />
          <label for="mail">Mail</label><br />
          <input name="mail" id="mail" type="text" /><br /><br />
          <label for="object">Objet</label><br />
          <input name="object" id="object" type="text" /><br /><br />
          <label for="msg">Message</label><br />
          <textarea name="msg" id="msg"></textarea>
          <input type="submit" value="Envoyer" />
        </div>
      </form>
      <!-- Coordonnées -->
      <div id="contactRight">
        Adresse : Lorem ipsum dolor<br />
        Tel : Lorem ipsum dolor<br />
        Fax : Lorem ipsum dolor<br />
        Mail : Loremipsum@dolor
        <div id="mapDiv"></div>
      </div>
    </div>
  </body>
</html>
