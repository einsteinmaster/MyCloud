<?php
error_reporting(E_ALL);
ini_set('display_errors','On');

$inipath = php_ini_loaded_file();

if ($inipath) {
    echo 'Loaded php.ini: ' . $inipath;
} else {
   echo 'A php.ini file is not loaded';
}

/* Get the name of the file uploaded to Apache */
$filename = $_FILES['file']['name'];

/* Prepare to save the file upload to the upload folder */
$location = "/var/www/html/upload/".$filename;

$source = $_FILES['file']['tmp_name'];

echo '<p>';
echo 'Source: '.$source. ' exists: '.file_exists($source);
echo '<br/>';
echo 'Destination: '.$location.' exists '.file_exists($location);
echo '</p>';

/* Permanently save the file upload to the upload folder */
if ( move_uploaded_file($source, $location) ) {
  echo '<p>The HTML5 and php file upload was a success!</p>';
} else {
  echo '<p>The php and HTML5 file upload failed.</p>';
}
?>
