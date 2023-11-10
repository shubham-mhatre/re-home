<?php

require 'db_connection.php';


header('Access-Control-Allow-Origin: http://localhost:3000'); // Replace '*' with the specific frontend origin (e.g., 'http://localhost:3000')
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Origin: *'); // Replace '*' with the specific frontend origin
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  exit;
}
 
  $sql = "
  SELECT 'user' AS source, COUNT(1) AS count FROM users
  UNION ALL
  SELECT 'ITEM_ID' AS source, COUNT(1) AS count FROM add_items
  UNION ALL
  SELECT 'ITEM_ID' AS source, COUNT(1) AS count FROM add_items where STATUS='SOLD'
  ";

  $result = $conn->query($sql);
  if (!$result) {
      die('Error executing the query: ' . $conn->error);
  }

  $data = array();
  while ($row = $result->fetch_assoc()) {
      $data[] = $row;
  }
  $conn->close();

  header('Content-Type: application/json');
  echo json_encode($data);

?>