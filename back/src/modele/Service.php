<?php

class Service {

    private $id;
    private $name;
    private $pathImg;

    public function __construct($name, $pathImg, $id = null) {

        $this->name = $name;
        $this->pathImg = $pathImg;
        $this->id = $id;
    }

    public function getName() {
        return $this->name;
    }

    public function getPathImg() {
        return $this->pathImg;
    }

    public function getId() {
        return $this->id;
    }

    
    public function setName($name) {
        $this->name = $name;
    }

    public function setPathImg($pathImg) {
        $this->pathImg = $pathImg;
    }

    public function setId($id) {
        $this->id = $id;
    }

}