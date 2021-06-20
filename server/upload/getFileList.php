<?php

class ArrElem{
	public $name = "undefined";
	public $code = "undefined";
}

$dir = '.';
$result = array();
$cdir = scandir($dir);
foreach ($cdir as $key => $value)
{
	$arrelem = new ArrElem();
	$arrelem->name = $value;
	$arrelem->code = hash("md5",$value);
	array_push($result, $arrelem);
}
echo json_encode($result);
