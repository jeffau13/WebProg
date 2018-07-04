<!DOCTYPE html>
<html>

<head>
    <title>Calendar</title>
    <link rel="stylesheet" href="calendar.css">
</head>

<body>
    <h1>Assignment Part 2</h1>
    <form action="calendar.php" method="post">
                <div id="today">
                   
                   
                <?php
                date_default_timezone_set('America/New_York');
                $t=time();
                
                echo( "The current date is: " . date("Y-m-d",$t).
                 "<br> The current time is: " . date("h:i:sa"));
                ?>

                </div>
        <br>
        <div id="options">
            Hours Displayed:
            <select name="number">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12" selected="selected">12</option>
            </select>
            <input type="submit" name="button">
            <input type="reset">
        </div>
    </form>
        <?php 
        $rows= $_POST['number'];
        
        echo("
        <table>
            <tr>
                <th>Hours</th>
                <th>Student 1</th>
                <th>Student 2</th>
                <th>Student 3</th>
            </tr>
            ");
            for ($x = 0; $x < $rows; $x++) {
            $hour = date('h')+ $x;
            if($hour<=12){
                    echo("
                    <tr>
                        <td> $hour </td>
                        <td>  </td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                    ");
            }
            else{
                $hour=$hour-12;
                echo("
                    <tr>
                        <td> $hour </td>
                        <td>  </td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                    ");
            }

        }
               
           
        echo("</table>");
       
       ?>

        </body>

</html>