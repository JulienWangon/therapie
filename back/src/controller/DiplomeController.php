<?php

require_once __DIR__ . '/../repository/DiplomeRepository.php';
require_once __DIR__ . '/../class/ResponseHelper.php';


class DiplomeController {

    private $diplomeRepository;

    public function __construct(DiplomeRepository $diplomeRepository) {

      $this->diplomeRepository = $diplomeRepository;
    }

    public function diplomesList() {

        try {

            $diplomes = $this->diplomeRepository->findAll();
            $formattedDiplomes = array_map(function ($diplome) {
              return [
                  'id' => $diplome->getId(),
                  'diplome' => $diplome->getDiplome(),  
                  'intitule' => $diplome->getIntitule(),
                  'lieu' => $diplome->getLieu()
              ];
            }, $diplomes);

            ResponseHelper::sendSuccess($formattedDiplomes);

        } catch (Exception $e) {

            error_log($e->getMessage());
            ResponseHelper::sendError('Erreur de récupération des diplômes.', 500);
        }
    }
}