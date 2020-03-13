<?php
	
			$type=$_POST['type'];
			$dir='../'+$type+'/img/';

			
			$name=$_POST['fid']; 
			if(unlink($dir.$name.".png"))
			 echo $name;
			else
			 echo "Error";

?>

