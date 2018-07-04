<html>

<head>
    <?php //setting all the options
$font=$_POST['font'];
$size=$_POST['size'];
$words=$_POST['words'];
$color=$_POST['color'];
?>
    <?php
    echo "<style>
        body {
            text-align:center;
        }
        h1{
            font-family:$font;
            color:$color;
        }
       
    </style>";
     ?>
    <title>Your Text</title>
</head>

<body>
    <h1>Here's your processed text:</h1>
    <div class="pageContainer centerText">
        <?php
        echo "<p style='color:$color;font-size:$size;font-family:$font;'> $words</p>";
        ?>
    </div>
</body>

</html>