<?php

class Database {

    //Variable statique prcivée pour lstocker l'instance unique de la classe
    private static $instance = null;

    //Proriété privée pour maintenir la connexion à la base de données
    private $connection;

    //Constructeur privé pour empêcher 'instanciation direct de la classe
    private function __construct() {
        try {
          //Tentative de connexion à la base de données en utilisant PDO
          $this->connection = new PDO("mysql:host=localhost;dbname=ottaviani;charset=utf8", "root", "");
          // Configuration des attributs de PDO pour lancer des exceptions en cas d'erreur
          $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            throw new Exception("Erreur de connexion à la base de données" . $e->getMessage());
        }        
    }

    // Méthode statique publique pour accéder à l'instance unique de la classe
    public static function getInstance() {
        if(self::$instance === null) {
            try {
              self::$instance = new Database();
            } catch (Exception $e) {
              error_log($e->getMessage());
            }
        }
        return self::$instance;
    }

    // Méthode pour obtenir l'objet de connexion à la base de données
    public function getConnection() {
      return $this->connection;
    }

    // Méthode privée __clone pour empêcher le clonage de l'objet
    private function __clone() {
      // Empêcher le clonage de l'objet pour maintenir l'unicité de l'instance
      throw new Exception("Cloning a singleton is not allowed");
    }
          
}