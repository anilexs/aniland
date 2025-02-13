</head>
<body>
<?php
if(isset($_COOKIE[''])){ ?>
    <nav>
        
    </nav>
<?php }else{ ?>
    <nav>
        <ul>
            <li>
                <div class="opt home">
                    <div class="logo"><i class="fa-solid fa-house"></i></div>
                    <div class="text"><?= $trad['home'] ?></div>
                </div>
            </li>
            <li>
                <div class="opt profil">
                    <div class="logo"><i class="fa-solid fa-user"></i></div>
                    <div class="text"><?= $trad['profil'] ?></div>
                </div>
            </li>
            <li>
                <div class="opt wall">
                    <div class="logo"><i class="fa-solid fa-sack-dollar"></i></div>
                    <div class="text"><?= $trad['wall'] ?></div>
                </div>
            </li>
            <li>
                <div class="opt concours">
                    <div class="logo"><i class="fas fa-gift"></i></div>
                    <div class="text">concours</div>
                </div>
            </li>
            <li>
                <div class="opt leaderboard">
                    <div class="logo"><i class="fa-solid fa-list-ul"></i></div>
                    <div class="text">classement</div>
                </div>
            </li>
            <li>
                <div class="opt arcade">
                    <div class="logo"><i class="fa-solid fa-gamepad"></i></div>
                    <div class="text">arcad</div>
                </div>
            </li>
            <li>
                <div class="opt parametres">
                    <div class="logo"><i class="fa-solid fa-gear"></i></div>
                    <div class="text">paramètres</div>
                </div>
            </li>
            <li class="langLi">
                <div class="optLangue">
                    <?php foreach ($country as $iso => $tab) { 
                        if($iso != $lang){ ?>
                            <div class="langOpt">
                                <div class="flagOpt">
                                    <img src="<?= $tab['flag'] ?>" alt="">
                                </div>
                                <div class="isoOpt"><?= $tab['lang'] ?></div>
                            </div>
                        <?php } ?>
                    <?php } ?>
                </div>
                <div class="opt lang">
                    <div class="flag">
                        <img src="<?= $country[$lang]['flag'] ?>" alt="">
                    </div>
                    <div class="text"><?= $country[$lang]['lang'] ?></div>
                </div>
            </li>
        </ul>
    </nav>
<?php } ?>