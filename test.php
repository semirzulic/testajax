<?php

$name = "";
if (isset($_GET['namep'])) {
	$name = $_GET['namep'];
}

echo "<div class='phpresponse'>hello ".$name."</div>";


?>