<?php

require_once __DIR__ . '/../database/Database.php';
require_once __DIR__ . '/../modele/User.php';

class UserRepository {

    private $db;

    public function __construct() {
      $this->db = Database::getInstance()->getConnection();
    }

    public function findByEmail($email) {

        try {

            $req = "SELECT * FROM users WHERE email = :email";

            $stmt = $this->db->prepare($req);
            $stmt->bindValue(":email", $email, PDO::PARAM_STR);
            $stmt->execute();

            $data = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($data){
                return new User($data['lastName'], $data['firstName'], $data['email'], $data['password'], $data['id']);
            }
            return null;

        } catch (Exception $e) {

          error_log($e->getMessage());
          throw new Exception("Erreur lors de la récupération de l'utilisateur");
        }
    }
}