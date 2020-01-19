<?php
	
			$dir='../team/dp/';
			$name=$_POST['fid']; 
			if(move_uploaded_file($_FILES['dp']['tmp_name'], $dir.$name.".png"))
			 echo $name;
			else
			 echo $_FILES['dp']['error'];

?>

