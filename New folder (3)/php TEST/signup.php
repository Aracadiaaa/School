<?php
    include("connection.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .form-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        input {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            box-sizing: border-box;
        }

        button {
            background-color: #4caf50;
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .form-container h2 {
            text-align: center;
        }

        .form-container form {
            display: flex;
            flex-direction: column;
        }

        .switch-form {
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>

<div class="form-container">
    <h2>Sign Up</h2>
    <form action="connection.php" method="post">

        <label for="fullname">Full Name:</label>
        <input type="text" id="signup_fullname" name="signup-fullname" required>
    
        <label for="username">Username:</label>
        <input type="text" id="signup_username" name="signup-username" required>
    
        <label for="email">Email:</label>
        <input type="email" id="signup_email" name="signup-email" required>
    
        <label for="password">Password:</label>
        <input type="password" id="signup_password" name="signup-password" required>
    
        <button type="submit">Sign Up</button>
    </form>

    <div class="switch-form">
        <p>Already have an account? <a href="login.html">Login here</a>.</p>
    </div>
</div>

</body>
</html>
