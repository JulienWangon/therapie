<?php

require_once __DIR__ . '/../repository/ContactInfoRepository.php';
require_once __DIR__ . '/../class/ResponseHelper.php';


class ContactInfoController {

    private $contactInfoRepository;

    public function __construct(ContactInfoRepository $contactInfoRepository) {

        $this->contactInfoRepository = $contactInfoRepository;
    }

    public function getContactInfo() {

        try {

            $contactsInfo = $this->contactInfoRepository->findContactInfo();
            $formattedContactInfo = array_map(function ($contactInfo) {
              return [
                  'id' => $contactInfo->getId(),
                  'number' => $contactInfo->getNumber(),  
                  'street' => $contactInfo->getStreet(),
                  'zipCode' => $contactInfo->getZipCode(),
                  'city' => $contactInfo->getCity(),
                  'phone' => $contactInfo->getPhone()
              ];
            }, $contactsInfo);

            ResponseHelper::sendSuccess($formattedContactInfo);

        } catch (Exception $e) {

            error_log($e->getMessage());
            ResponseHelper::sendError('Erreur de récupération des informations de contact.', 500);
        }
    }
}