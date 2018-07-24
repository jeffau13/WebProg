var answer = Math.floor(Math.random() * 100);
var count = 0;

function start() {
    var attempt = document.getElementById("attempt").value;
    if (count <= 10) {
        count++;
        if (attempt == answer) {
            document.getElementById("result").innerHTML = "Congratulations Correct Guess";
            answer = Math.floor(Math.random() * 100);
        } else if (attempt < answer)
            document.getElementById("result").innerHTML = "Wrong Answer! Too Low";
        else if (attempt > answer)
            document.getElementById("result").innerHTML = "Wrong Answer! Too High";
        else
            document.getElementById("result").innerHTML = "Sorry! Invalid input. Please Enter a number between 0 - 100";
        document.getElementById("count").innerHTML = count;
    } else {
        start();
        document.getElementById("attempt").innerHTML = "New Random Number Generated";
        document.getElementById("count").innerHTML = count;
        answer = Math.floor(Math.random() * 100);
    }
}