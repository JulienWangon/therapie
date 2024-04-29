<?php

require_once __DIR__ . '/../src/Router/Router.php';

require_once __DIR__ . '/../src/controller/ServiceController.php';
require_once __DIR__ . '/../src/repository/ServiceRepository.php';

require_once __DIR__ . '/../src/controller/ContactInfoController.php';
require_once __DIR__ . '/../src/repository/ContactInfoRepository.php';

$router = new Router();

$serviceRepository = new ServiceRepository();
$serviceController = new ServiceController($serviceRepository);

$contactInfoRepository = new ContactInfoRepository();
$contactInfoController = new ContactInfoController($contactInfoRepository);

// Configuration des routes
$router->addRoute('GET', '/api/services', [$serviceController, 'listServices']);
$router->addRoute('GET', '/api/contact-info', [$contactInfoController, 'getContactInfo']);

// Dispatcher la requête
$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$scriptName = parse_url($_SERVER['SCRIPT_NAME'], PHP_URL_PATH);

// Enlève le nom du script du chemin pour obtenir le chemin de base du dossier
$basePath = str_replace('/index.php', '', $scriptName);

// Calcule le chemin de la route en enlevant le basePath du requestUri
$routePath = substr($requestUri, strlen($basePath));

if (empty($routePath)) {
    $routePath = '/';  // Assurez-vous qu'il y a toujours une valeur par défaut
}

$router->dispatch($_SERVER['REQUEST_METHOD'], $routePath);
