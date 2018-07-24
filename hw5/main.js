function start() {
    //Store hourly wage
    var hourlyPay = 15;

    //Array to hold all employees data
    var hoursWorked = new Array();
    var i = 0,
        hours;
    var totalPay = 0;


    hours = parseInt(prompt(" Enter number of hours Worked. (Enter -1 when finished) "));


    while (hours != -1) {

        hoursWorked[i] = hours;
        i++;

        hours = parseInt(prompt(" Enter number of hours Worked. (Enter -1 when finished) "));
    }
    //Creating table header with three columns
    var payout = "<table border=1><tr><td style='width: 100px; text-align: center;'> Employee # </td>";
    payout += "<td style='width: 200px; text-align: center;'> Number of hours worked </td>";
    payout += "<td style='width: 200px; text-align: center;'> Employee Pay </td></tr>";


    for (var k = 0; k < hoursWorked.length; k++) {
        var pay = 0;
        if (hoursWorked[k] >= 40)
            pay = parseFloat((40 * hourlyPay) + ((hoursWorked[k] - 40) * 1.5 * hourlyPay));

        else
            pay = parseFloat(hoursWorked[k] * hourlyPay);


        totalPay += pay;


        payout += "<tr><td style='width: 100px;  text-align: center;'>" + (k + 1) + " </td>";
        payout += "<td style='width: 200px;  text-align: center;'> " + hoursWorked[k] + " </td>";
        payout += "<td style='width: 200px;  text-align: center;'> $ " + pay + " </td></tr>"
    }

    payout += "</table>";


    document.getElementById("print").innerHTML = payout;


    document.getElementById("totalPay").innerHTML = "Total pay of all employees: $ " + totalPay;
}