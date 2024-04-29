<?php


require_once __DIR__ . '/../database/Database.php';
require_once __DIR__ . '/../modele/Diplome.php';


class DiplomeRepository {

    private $db;

    public function __construct() {
        $this->db = Database::getInstance()->getConnection();
    }


    public function findAll() {

        try  {

            $req = "SELECT * FROM listediplome";
            $stmt = $this->db->prepare($req);
            $stmt->execute();

            $diplomes = [];

            while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
              $diplomes[] = new Diplome($row['diplome'], $row['intitule'], $row['lieu'], $row['id']);
            }

            return $diplomes;

        } catch (Exception $e) {

            error_log($e->getMessage());
            throw new Exception("Erreur lors de la récupération des diplômes.");
        }
    }
}