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

  $itemid = $requestData['itemid'];
  $itemname = $requestData['itemname'];
  $id = $requestData['id'];

  $mysql= "select email from users where id='".$id."'";
  $sql = "select email from users where id in(select id from add_items where item_id='".$itemid."')";
	$result = $conn->query($sql);
    $resultmysql = $conn->query($mysql);
	if ($result->num_rows >= 1) {
            $row = $result->fetch_assoc();
            $recipientEmail = $row['email'];

            $rowdata = $resultmysql->fetch_assoc();
            $buyerEmail = $rowdata['email'];
    		$emailBody=getEmailBody($recipientEmail,  $itemname,$buyerEmail);
    		smtp_mailer($recipientEmail,'Regarding Service request',$emailBody);

		    echo json_encode(['message' => 'Message has been sent to provided email id']);
		    return json_encode(['message' => 'Message has been sent to provided email id']);
		

		
	}else{
		echo json_encode(['message' => 'Provided Email Id is not present']);
 		return json_encode(['message' => 'Provided Email Id is not present']);
	}


function getEmailBody($recipientEmail,  $itemname,$buyerEmail){
	$emailBody= '<!DOCTYPE html>
			      <html>
			            <head>
			                <meta charset="UTF-8">
			                <title>Email Template</title>
			            </head>
			            <body style="font-family: Arial, sans-serif;">
			                <h4>Dear '. $recipientEmail .', </h4>
			                <p>Greetings!.</p>
                           <p> '. $buyerEmail .' would like to buy the '. $itemname .' which you posted on ReHome.</p>
                           <p> If you are interested please contact user by email provided. </p>
			                <p>Best regards,</p>
			                <p>ReHome</p>
			            </body>
			      </html>';

	return $emailBody;		      
}

?>