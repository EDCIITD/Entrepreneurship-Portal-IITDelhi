<?php
			$type=$_POST['type'];
			$dir='../'+$type+'/img/';

			$name=$_POST['fid']; 
			if(move_uploaded_file($_FILES['img']['tmp_name'], $dir.$name.".png"))
			 echo $name;
			else
			 echo $_FILES['img']['error'];

?>

