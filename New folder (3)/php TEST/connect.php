<?php
    $fullname = $_POST['signup-fullname'];
    $username = $_POST['signup-username'];
    $email = $_POST['signup-email'];
    $password = $_POST['signup-password'];

    $conn = new mysqli('localhost', 'root', '', 'sign-in');
    
    if($conn->connect_error) {
        die('Connection failed: ' . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO sign-in (signup_fullname, signup_username, signup_email, signup_password) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $fullname, $username, $email, $password);
        $stmt->execute();
        echo "Registration Success...";
        $stmt->close();
        $conn->close();
    }
?>
