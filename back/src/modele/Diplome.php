<?php

class Diplome {

    private $id;
    private $diplome;
    private $intitule;
    private $lieu;

    public function __construct($diplome, $intitule, $lieu, $id = null) {
      
        $this->diplome = $diplome;
        $this->intitule = $intitule;
        $this->lieu = $lieu;
        $this->id = $id;
    }


    public function getId() {
        return $this->id;
    }

    public function getDiplome() {
        return $this->diplome;
    }
 
    public function getIntitule() {
        return $this->intitule;
    }

    public function getLieu() {
        return $this->lieu;
    }

    public function setId($id) {
      $this->id = $id;
    }

    public function setDiplome($diplome) {
        $this->diplome = $diplome;
    }

    public function setIntitule($intitule) {
        $this->intitule = $intitule;
    }

    public function setLieu($lieu) {
        $this->lieu = $lieu;
    }

}