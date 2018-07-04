<html>
    <head>
            <title>Text Form</title>
            <style type = "text/css">
            body{
                text-align: center;
                background-color: beige;}
            </style>
    </head>
    <body>
        <h1>Assignment 4.1</h1>
        <form action = "result.php" method = "post">
            Font:
            <select name = "font">
                <option value = "Arial" selected = "selected">Arial</option>
                <option value = "Georgia">GA</option>
                <option value = "sans-serif">Sans</option>
                <option value = "Courier New">Courier</option>
                <option value = "Garamond">Garamond</option>
                <option value = "Comic Sans MS">Comic</option>
                <option value = "Arial Black">Black</option>
            </select>
            Text Size:
            <select name = "size">
                <option value = "12px" selected="selected">12</option>
                <option value = "24px">24</option>
                <option value = "36px">36</option>
                <option value = "48px">48</option>
                <option value = "60px">60</option>
                <option value = "72px">72</option>
            </select>
            Font Color:
            <select name = "color">
                <option value = "#000000" selected = "selected">Black</option>
                <option value = "#FF0000">Red</option>
                <option value = "#FFA500">Orange</option>
                <option value = "#FFFF00">Yellow</option>
                <option value = "#008000">Green</option>
                <option value = "#0000FF">Blue</option>
                <option value = "#9932CC">Purple</option>
                <option value = "#FF69B4">Pink</option>
            </select>
            <br>
            <br>
            Enter your text here:<br>
            <textarea name = "words" rows = "20" cols = "150">
            </textarea>
            <br>
            <input type = "submit" value = "Create my Text Doc">
            <input type = "reset">
        </form>
    </body>
</html>