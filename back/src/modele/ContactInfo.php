<?php

class ContactInfo {

    private $id;
    private $number;
    private $street;
    private $zipCode;
    private $city;
    private $phone;


    public function __construct($number, $street, $zipCode, $city, $phone, $id = null) {

        $this->number = $number;
        $this->street = $street;
        $this->zipCode = $zipCode;
        $this->city = $city;
        $this->phone = $phone;
        $this->id = $id;

    }


    public function getId() {
        return $this->id;
    }

    public function getNumber() {
        return $this->number;
    }

    public function getStreet() {
        return $this->street;
    }

    public function getZipCode() {
        return $this->zipCode;
    }

    public function getCity() {
        return $this->city;
    }

    public function getPhone() {
        return $this->phone;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function setNumber($number) {
        $this->number = $number;
    }

    public function setStreet($street) {
        $this->street = $street;
    }

    public function setZipCode($zipCode) {
        $this->zipCode = $zipCode;
    }

    public function setCity($city) {
        $this->city = $city;
    }

    public function setPhone($phone) {
        $this->phone = $phone;
    }




















}