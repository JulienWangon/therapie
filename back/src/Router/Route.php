<?php

class Route {

    private $path;
    private $method;
    private $callback;

    public function __construct($method, $path, $callback) {
        $this->method = strtoupper($method); 
        $this->path = '/' . trim($path, '/');
        $this->callback = $callback;
    }

    public function match($method, $path) {
      $method = strtoupper($method);
        $path = '/' . trim($path, '/');
        return $this->method === $method && $this->path === $path;
    }

    public function run() {

        header("Access-Control-Allow-Origin: http://localhost:3000");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        header("Access-Control-Allow-Credentials: true");

        call_user_func($this->callback);
    }

}