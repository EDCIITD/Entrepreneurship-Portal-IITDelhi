<?php
	
			$dir='../team/dp/';

			
			$name=$_POST['fid']; 
			if(unlink($dir.$name.".png"))
			 echo $name;
			else
			 echo "Error";

?>

