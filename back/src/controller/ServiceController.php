<?php

require_once __DIR__ . '/../repository/ServiceRepository.php';
require_once __DIR__ . '/../class/ResponseHelper.php';


class ServiceController {

    private $serviceRepository;
    private $baseUrl;

    public function __construct(ServiceRepository $serviceRepository) {

        $this->serviceRepository = $serviceRepository;
        $this->baseUrl = $_ENV['BASE_URL'] ?? $_SERVER['BASE_URL']; 
    }

    public function listServices() {

        try {
            $services = $this->serviceRepository->findAll();
            $formattedServices = array_map(function ($service) {
                error_log('Base URL: ' . $this->baseUrl);
            error_log('Image Path: ' . $service->getPathImg());
                $fullImagePath = $this->baseUrl . $service->getPathImg();
                error_log('Full Image Path: ' . $fullImagePath); // Vérifiez ce log
                return [
                    'id' => $service->getId(),
                    'name' => $service->getName(),  
                    'path' => $fullImagePath
                ];
            }, $services);
            
            ResponseHelper::sendSuccess($formattedServices);

        } catch (Exception $e) {
          
            error_log($e->getMessage());
            ResponseHelper::sendError('Erreur de récupération des services.', 500);
        }
    }
}