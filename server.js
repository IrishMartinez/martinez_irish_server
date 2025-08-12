const express = require(`express`);
const app = express();
const PORT = 3000;

app.get(`/`, (req,res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 style="color: #c52d53ff; font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
    Server Under Maintenance
    </h1>

    <p style="color: #555; font-family: Arial, sans-serif; text-align: center; font-size: 18px; margin: 20px;">
    We are currently performing scheduled maintenance. Please check back later.
    </p>

    <p style="color: #633030ff; font-family: Arial, sans-serif; text-align: center; font-size: 16px;">
    Thank you for your patience!
    </p>

    
</body>
</html>`
        
        );
});

app.listen(PORT, () => {
    console.log(`Server is  running on http://localhost:${PORT}`);
});
