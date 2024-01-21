<?php

$request = $_SERVER['REQUEST_URI'];

// echo $request;

switch ($request) {
    case '/user-management-system-vanillajs/frontend/views':
    case '/user-management-system-vanillajs/frontend/views/':
        require __DIR__ . '/home.php';
        break;

    // case '/user-management-system-vanillajs/frontend/views/edit':
    //     require __DIR__ . "/edit-user.php";
    //     break;

    default: 
        $filename = __DIR__ . ".php";
        echo $filename;
        if (file_exists($filename)) {
            require $filename;
            break;
        }
};
?>