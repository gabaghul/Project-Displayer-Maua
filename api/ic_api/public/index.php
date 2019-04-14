<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
//db connection
require '../src/config/db.php';
//route
require '../src/routes/customers.php';



$app->run();