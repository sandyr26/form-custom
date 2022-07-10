<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");

    $servername = "localhost";
    $username = "asterlot_admin";
    $password = "monopoly1234";
    $db="asterlot_form_custom";
    $conn = mysqli_connect($servername, $username, $password,$db);

	$sql = "SELECT DISTINCT `time_stamp` FROM `form-custom`";

    $result = mysql_query($sql);

    while($row = mysql_fetch_array($result, MYSQL_ASSOC)) {

        // If you want to display all results from the query at once:
        print_r($row);
    }

	if (mysqli_query($conn, $sql)) {
		// echo json_encode(array("statusCode"=>200));
		// echo json_encode(array($sql));
	} 
	else {
		echo json_encode(array("statusCode Could not connect"=>201));
	}
	mysqli_close($conn);
?>