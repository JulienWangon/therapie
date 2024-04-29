<?php

require_once __DIR__ . '/../repository/ServiceRepository.php';
require_once __DIR__ . '/../class/ResponseHelper.php';


class ServiceController {

    private $serviceRepository;

    public function __construct(ServiceRepository $serviceRepository) {

      $this->serviceRepository = $serviceRepository;
    }

    public function listServices() {

        try {
            $services = $this->serviceRepository->findAll();
            $formattedServices = array_map(function ($service) {
                return [
                    'id' => $service->getId(),
                    'name' => $service->getName(),  
                    'path' => $service->getPathImg()
                ];
            }, $services);
            
            ResponseHelper::sendSuccess($formattedServices);

        } catch (Exception $e) {
          
            error_log($e->getMessage()); // Log de l'erreur pour débogage
            ResponseHelper::sendError('Erreur de récupération des services.', 500);
        }
    }
}