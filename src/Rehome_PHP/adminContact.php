<?php

require 'db_connection.php';

require 'email.php';

header('Access-Control-Allow-Origin: http://localhost:3000'); 
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Origin: *'); 
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  exit;
}


$rawData = file_get_contents("php://input");

  
  $requestData = json_decode($rawData, true);

  $email = $requestData['email'];
  $response = $requestData['response'];

  $sql = "select * from contactus where email='".$email."'";
	$result = $conn->query($sql);

	if ($result->num_rows >= 1) {
    	$serviceReq = generateRandomString(8);

    		$emailBody=getEmailBody($serviceReq,$response);
    		smtp_mailer($email,'Regarding Service request',$emailBody);

		    echo json_encode(['message' => 'Message has been sent to provided email id']);
		    return json_encode(['message' => 'Message has been sent to provided email id']);
		

		
	}else{
		echo json_encode(['message' => 'Provided Email Id is not present']);
 		return json_encode(['message' => 'Provided Email Id is not present']);
	}


function getEmailBody($serviceReq,$response){
	$emailBody= '<!DOCTYPE html>
			      <html>
			            <head>
			                <meta charset="UTF-8">
			                <title>Email Template</title>
			            </head>
			            <body style="font-family: Arial, sans-serif;">
			                <h4>Dear User, </h4>
			                <p>Greetings from ReHome!.</p>
                           <p> We have received your inquiry and would like to inform you that  '. $response .'.</p>
                           <p> Your generated Service ID for this inquiry is: '. $serviceReq .'. </p>
                           <p> Please make sure to reference this Service ID in any future correspondence or communication related to this inquiry, as it will help us efficiently track and address your request.</p>
			                <p>Thank you once again for considering ReHome for your needs. We look forward to the opportunity to serve you.</p>
			                
			                <p>Best regards,</p>
			                <p>ReHome</p>
			            </body>
			      </html>';

	return $emailBody;		      
}

function generateRandomString($length = 8) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';

    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }

    return $randomString;
}
?>