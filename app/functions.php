<?php
include __DIR__ . '/env.php';

$site = "Sertified Finance";
$phone_number = "1300 041 041";
$admin_email = 'arijal@aiims.com.au';
$bcc_email = "";
$no_reply_email = 'info@website.com.au';
$recaptcha_client_secret = $client_secret;
$recaptcha_server_secret = $server_secret;

$facebook_link = "#";
$instagram_link = "#";
$youtube_link = "#";
$linkedin_link = "#";
$tiktok_link = "#";

function renderImg($filename, $folder, $classname = "")
{
    $filename_without_ext = preg_replace('/\\.[^.\\s]{3,4}$/', '', $filename);
    $src = "./assets/images/" . $folder . "/" . $filename;

    if (file_exists("./assets/images/" . $folder . "/" . $filename_without_ext . ".webp")) {
        $src = "./assets/images/" . $folder . "/" . $filename_without_ext . ".webp";
    }

    return "<img src=" . $src . " alt=" . $filename_without_ext . " class='" . $classname . "'>";
}
