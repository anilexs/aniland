<?php 
require_once "inc/header.php"; ?>
<link rel="stylesheet" href="asset/css/index.css">
<script src="asset/js/index.js"></script>
<title><?= $trad['home'] ?></title>
<div class="left">
    <?php require_once "inc/nav.php"; ?>
</div>
<div class="right">
    <?php
    if (array_key_exists($geo, $allowedPages) && file_exists('load/'.$geo.'.php')) { ?>
        <div class="rightOpt p-<?= $geo ?> on">
            <?php require_once 'load/'.$allowedPages[$geo].'.php'; ?>
        </div>
    <?php } else { ?>
        <div class="rightOpt p-error on">
            errorsasasasasasasasasasasasa
        </div>
    <?php }

    foreach ($allowedPages as $page => $val) {
        if ($page !== $geo) { ?> 
            <div class="rightOpt p-<?= $page ?> off"></div>
        <?php }
    } ?>
</div>
<?php require_once "inc/footer.php"; ?>