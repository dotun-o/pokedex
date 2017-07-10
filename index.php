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
    <![endif]-->
</head>

<body>
<header id="hero" class="jumbotron text-center">
    <h1>Pokedex</h1>
    <h4><a href="http://code.dotun.me/" target="_blank">by Dotun</a></h4>
</header>

<div class="container-fluid">
    <ul id="tiles">
    </ul>
</div>

<footer class="footer text-center">
    <p class="text-muted">&copy; <?php echo date("Y"); ?> Pokedex <a href="http://code.dotun.me/" target="_blank">by Dotun</a></p>
</footer>
</body>
</html>