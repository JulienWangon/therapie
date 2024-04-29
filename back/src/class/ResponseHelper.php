<?php

class ResponseHelper {

    public static function sendSuccess($data, $status = 200) {
        http_response_code($status);

        echo json_encode([
            'status' => 'success',
            'data' => $data
        ]);
    }

    public static function sendError($message, $status = 500) {
        http_response_code($status);

        echo json_encode([
            'status' => 'error',
            'message' => $message
        ]);
    }

}