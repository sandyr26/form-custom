<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Headers: X-Requested-With");

    $servername = "localhost";
    $username = "asterlot_admin";
    $password = "monopoly1234";
    $db="asterlot_form_custom";
    $conn = mysqli_connect($servername, $username, $password,$db);

    $risk_id=$_POST['risk_id'];
	$risk_name=$_POST['risk_name'];
	$risk_probability=$_POST['risk_probability'];
	$risk_impact=$_POST['risk_impact'];
	$severity_question=$_POST['severity_question'];
	$severity_value=$_POST['severity_value'];
	$time_stamp=$_POST['time_stamp'];

	$sql = "INSERT INTO `form-custom` (`risk_id`, `risk_name`, `risk_probability`, `risk_impact`, `severity_question`, `severity_value`, `time_stamp`) VALUES ('$risk_id', '$risk_name', '$risk_probability', '$risk_impact', '$severity_question', '$severity_value', '$time_stamp');";

	if (mysqli_query($conn, $sql)) {
		echo json_encode(array("statusCode"=>200));
	} 
	else {
		echo json_encode(array("statusCode Could not connect"=>201));
	}
	mysqli_close($conn);
?>