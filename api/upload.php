<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Headers: X-Requested-With");

    $servername = "localhost";
    $username = "asterlot_admin";
    $password = "monopoly1234";
    $db="asterlot_form_custom";
    $conn = mysqli_connect($servername, $username, $password,$db);

    $data=$_POST['data'];

	$sql = "INSERT INTO `form-custom` (`phase`, `risk_number`, `risk_name`, `probability`, `impact`, `consequence_number`, `consequence_name`, `timestamp`, `company_name`, `job_title`, `role_name`) VALUES $data;";

	if (mysqli_query($conn, $sql)) {
		echo json_encode(200);
	} 
	else {
		echo json_encode(201);
	}
	mysqli_close($conn);
?>