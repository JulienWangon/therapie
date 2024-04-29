<?php

require_once __DIR__ . '/../database/Database.php';
require_once __DIR__ . '/../modele/ContactInfo.php';


class ContactInfoRepository {

    private $db;

    public function __construct() {
      $this->db = Database::getInstance()->getConnection();
    }


    public function findContactInfo() {

        try {

            $req = "SELECT * FROM contactinfo";

            $stmt = $this->db->prepare($req);
            $stmt->execute();

            $contactInfo = [];

            while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $contactInfo[] = new ContactInfo($row['numero'], $row['rue'], $row['codepostal'], $row['ville'], $row['telephone'], $row['id']);
            }
  
            return $contactInfo;

        } catch (Exception $e) {

            error_log($e->getMessage());
            throw new Exception("Erreur lors de la récupération des informations de contact.");

        }
    }






}