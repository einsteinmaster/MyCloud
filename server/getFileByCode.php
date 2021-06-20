<?php
$code = $_GET['code'];
$dir = './upload/';
$cdir = scandir($dir);
foreach ($cdir as $key => $value)
{
	$fcode = hash("md5",$value);
	if($fcode == $code){
		$file = $_SERVER["DOCUMENT_ROOT"] . "/upload/" . $value;
		if (file_exists($file)) {
			header('Content-Description: File Transfer');
			header('Content-Type: application/octet-stream');
			header('Content-Disposition: attachment; filename="'.basename($file).'"');
			header('Expires: 0');
			header('Cache-Control: must-revalidate');
			header('Pragma: public');
			header('Content-Length: ' . filesize($file));
			readfile($file);
			die();        
		} else {
			die("Error: File not found.");
		} 
	}
}
