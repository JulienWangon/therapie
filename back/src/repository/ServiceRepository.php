<?php

require_once __DIR__ . '/../database/Database.php';
require_once __DIR__ . '/../modele/Service.php';

class ServiceRepository {

    private $db;

    public function __construct() {
      $this->db = Database::getInstance()->getConnection();
    }


    public function findAll() {

        try {

            $req = "SELECT * FROM services";

            $stmt = $this->db->prepare($req);
            $stmt->execute();

            $services = [];
            
            while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $services[] = new Service($row['name'], $row['pathImg'], $row['id']);
            }
    
            return $services;

        } catch (Exception $e) {

            error_log($e->getMessage());
            throw new Exception("Erreur lors de la récupération des services.");
        }        
    }


}