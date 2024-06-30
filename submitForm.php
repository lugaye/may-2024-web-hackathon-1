<?php
// This file setsup a conncetion to mysql to allow data to be posted to an existing table created with mysql.

// Database configuration variables.
$serverName = "localhost";
$userName   = "root";
$password = "Geeksf0rGeeks";
$dbName = "myfirstdb";

// Creating the connection to the DB.
$connection = new mysqli($serverName, $userName, $password, $dbName);

// Checking if the connection was successful or not using an if statement.
if ($connection->connect_error){
    die("An error occurred failed to connect to". $dbName. $connection_error);
}


// Get the form data that is posted when a user submits data.
$name = $_POST['Name'];
$email = $_POST['Email'];
$message = $_POST['Message'];

// Create an insert statement that handles the insertion of data.
$stmt = $connection->prepare("INSERT INTO portfolioviewers (Name, Email, Message) VALUES (?,?,?)");
$stmt->bind_param('sss', $name, $email, $message);

//Checks if the querry was executed successfully or an error occured. 
if ($stmt->execute()){
    echo "New Record created Successfully";
}else{
    echo "Error:" . $stmt->error;
}

//Closes the statement and the connection after performing execution of the querry. 
$stmt->close();
$connection->close();
?>