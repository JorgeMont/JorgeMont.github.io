<?php
 $nombre = $_POST["nombre"];
 $email = $_POST["mail"];
 $subject = $_POST["asunto"];   
 $mensaje = $_POST["mensaje"];
 $telefono= $_POST["telefono"];
require("class.phpmailer.php");
 $mail = new phpmailer();
error_reporting(0);



  //Definimos las propiedades y llamamos a los métodos 
  //correspondientes del objeto mail

  //Con PluginDir le indicamos a la clase phpmailer donde se 
  //encuentra la clase smtp que como he comentado al principio de 
  //este ejemplo va a estar en el subdirectorio includes
  $mail->PluginDir ="mail/";

  //Con la propiedad Mailer le indicamos que vamos a usar un 
  //servidor smtp
  $mail->Mailer = "smtp";

  //Asignamos a Host el nombre de nuestro servidor smtp
  $mail->Host = "abogadosneri.com";

  //Le indicamos que el servidor smtp requiere autenticación
  $mail->SMTPAuth = true;

  //Le decimos cual es nuestro nombre de usuario y password
  $mail->Username = "contacto@abogadosneri.com"; 
  $mail->Password = "Resident12+";

  //Indicamos cual es nuestra dirección de correo y el nombre que 
  //queremos que vea el usuario que lee nuestro correo
  $mail->From = "contacto@abogadosneri.com";
  $mail->FromName = "Contacto ";

  //el valor por defecto 10 de Timeout es un poco escaso dado que voy a usar 
  //una cuenta gratuita, por tanto lo pongo a 30  
  $mail->Timeout=30;

  //Indicamos cual es la dirección de destino del correo
  $mail->AddAddress("neriabogados@gmail.com");
  $mail->addBCC('hugogrim12@gmail.com');//copia oculta


  //Asignamos asunto y cuerpo del mensaje
  //El cuerpo del mensaje lo ponemos en formato html, haciendo 
  //que se vea en negrita
  $mail->Subject = $subject;
  $mail->Body = "<h4>Mensaje enviado de sitio web </h4><br> Nombre: ".$nombre."<br>Telefono: ".$telefono."<br>Email: ".$email."<br>Mensaje: ".$mensaje;

  //Definimos AltBody por si el destinatario del correo no admite email con formato html 
  $mail->AltBody ="Mensaje enviado de sitio web  Nombre: ".$nombre."Email: ".$email."Mensaje: ".$mensaje;
;

  //se envia el mensaje, si no ha habido problemas 
  //la variable $exito tendra el valor true
  $exito = $mail->Send();

  //Si el mensaje no ha podido ser enviado se realizaran 4 intentos mas como mucho 
  //para intentar enviar el mensaje, cada intento se hara 5 segundos despues 
  //del anterior, para ello se usa la funcion sleep	
  $intentos=1; 
  while ((!$exito) && ($intentos < 5)) {
	sleep(5);
     	//echo $mail->ErrorInfo;
     	$exito = $mail->Send();
     	$intentos=$intentos+1;	
	
   }
 
		
   if(!$exito)
   {
	echo "Problemas enviando correo electrónico a ".$valor;
	echo "<br/>".$mail->ErrorInfo;	
   }
   else
   {
	echo "<h1>Mensaje enviado correctamente<h1>";
	echo "<h2>En un momento sera redirigido a la pagina principal<h2>";

   } 

?>
<?php echo '<meta http-equiv="Refresh" content="5;URL=index.html">'; ?>



