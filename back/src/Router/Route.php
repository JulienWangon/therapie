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
        call_user_func($this->callback);
    }

}