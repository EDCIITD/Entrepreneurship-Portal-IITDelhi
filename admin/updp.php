<?php
	
			$dir='../team/dp/';
			$now = new DateTime();
			$name=$now->getTimestamp(); 
			move_uploaded_file($_FILES['img']['tmp_name'], $dir.$name.".png")
			echo $name;

?>

