<?php
	
			$dir='../team/dp/';
			$now = new DateTime();
			$name=$now->getTimestamp(); 
			if(move_uploaded_file($_FILES['img']['tmp_name'], $dir.$name.".png"))
			 echo $name;
			else
			 echo $_FILES['prof-pic']['error'];

?>

