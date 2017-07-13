<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="scripts/jquery.min.js"></script>
    <script src="scripts/bootstrap.min.js"></script>
    <script src="scripts/main.js"></script>

    <link rel="stylesheet" href="styles/normalize.min.css">
    <link rel="stylesheet" href="styles/bootstrap.min.css">
    <link rel="stylesheet" href="styles/main.css">

    <!--[if lt IE 9]>
	    <script src="scripts/html5shiv.min.js"></script>
        <script src="scripts/respond.min.js"></script>
    <![endif]-->

    <title>Pokedex by Dotun</title>
</head>

<body>
<header id="hero" class="jumbotron text-center">
    <h1><a href="<?php $_SERVER['PHP_SELF']; ?>">Pokedex</a></h1>
    <h4><a href="http://code.dotun.me/" target="_blank">by Dotun</a></h4>
</header>

<div class="container">
    <div class="input-group">
        <input type="text" id="search-box" class="form-control" placeholder="Search for a Pokémon...">
        <span class="input-group-btn">
            <button id="clear-button" class="btn btn-info">X</button>
        </span>
    </div>
</div>

<div class="container-fluid">
    <ul id="tiles">
        <li>Loading...</li>
    </ul>
</div>

<div id="modals">
</div>

<footer class="footer text-center">
    <p class="text-muted">All Pokémon content are &copy; Nintendo, Game Freak, and The Pokémon Company.</p>
</footer>
</body>
</html>