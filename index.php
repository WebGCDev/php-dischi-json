<?php
//viene caricato il file Json
$stringcdmusic = file_get_contents('dischi.json');
//Qualsiasi browser utilizziamo interpreterà il tipo di file e lo visualizzerà nel modo corretto
header('Content-Type: application/json');
//Eseguiamo il file Json
echo ($stringcdmusic);
