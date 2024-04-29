<?php


class User {

    private $id;
    private $lastName;
    private $firstName;
    private $userEmail;
    private $userPassword;

    public function __construct($lastName, $firstName, $userEmail, $userPassword, $id = null) {

        $this->lastName = $lastName;
        $this->firstName = $firstName;
        $this->userEmail = $userEmail;
        $this->userPassword = $userPassword;
        $this->id = $id;
    }

    public function getLastName() {
      return $this->lastName;
    }

    public function getFirstName() {
      return $this->lastName;
    }

    public function getUserEmail() {
      return $this->userEmail;
    }

    public function getUserPassword() {
      return $this->userPassword;
    }

    public function getId() {
      return $this->id;
    }


    public function setlastName($lastName) {
      $this->lastName = $lastName;
    }

    public function setFirstName($firstName) {
      $this->firstName = $firstName;
    }

    public function setUserEmail($userEmail) {
      $this->userEmail = $userEmail;
    }

    public function setUserPassword($userPassword) {
      $this->userPassword = $userPassword;
    }

    public function setId($id) {
      $this->id = $id;
    }

}