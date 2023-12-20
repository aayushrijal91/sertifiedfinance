<?php
include __DIR__ . '/env.php';

$site = "Sertified Finance";
$phone_number = "1300 041 041";
// $admin_email = 'arijal@aiims.com.au';
$admin_email = 'hello@sertified.finance';
$cc_email = "arijal@aiims.com.au";
$bcc_email = "kalbassit@aiims.com.au";
$no_reply_email = 'info@sertified.finance';
$recaptcha_client_secret = $client_secret;
$recaptcha_server_secret = $server_secret;

$facebook_link = "https://www.facebook.com/SertifiedFinance";
$instagram_link = "https://www.instagram.com/sertifiedfinance/";
$youtube_link = "";
$linkedin_link = "https://www.linkedin.com/company/89724813/";
$tiktok_link = "https://www.tiktok.com/@sertifiedfinance";

function renderImg($filename, $folder, $classname = "")
{
    $filename_without_ext = preg_replace('/\\.[^.\\s]{3,4}$/', '', $filename);
    $src = "./assets/images/" . $folder . "/" . $filename;

    if (file_exists("./assets/images/" . $folder . "/" . $filename_without_ext . ".webp")) {
        $src = "./assets/images/" . $folder . "/" . $filename_without_ext . ".webp";
    }

    return "<img src=" . $src . " alt=" . $filename_without_ext . " class='" . $classname . "'>";
}
