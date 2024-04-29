<?php

require_once __DIR__ . '/../Router/Route.php';

class Router {
  private $routes = [];


  public function addRoute($method, $path, $callback) {
      $this->routes[] = new Route($method, $path, $callback);
  }


  public function dispatch($method, $path) {
      foreach ($this->routes as $route) {
          if ($route->match($method, $path)) {
              $route->run();
              return;
          }
      }
      // Si aucune route ne correspond, envoyer une réponse 404
      http_response_code(404);
      echo "404 Not Found";
  }   
}