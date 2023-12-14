<?php include __DIR__ . '/functions.php'; ?>

<?php
$thankyoupage = true;
include __DIR__ . '/src/header.php'; ?>

<div class="thankyou-wrapper mt-[103px] text-white text-center py-3" style="background-color: green;">
    We’ll get back to you asap, in the meantime you can contact us directly by calling <a href="tel:<?= $phone_number ?>"><?= $phone_number ?></a>
</div>

<?php include __DIR__ . '/src/main.php'; ?>

<?php include __DIR__ . '/src/footer.php'; ?>