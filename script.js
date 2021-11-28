function removeWish() {
  let wish = document.getElementsByClassName("wish")[0];
  let sen = document.getElementsByClassName("sen")[0];
  let timer = document.getElementById("timer");
  wish.style.color = "Red";
  wish.style.display = "none";
  sen.style.display = "block";
  timer.style.display = "block";
}

var countDownDate = new Date("Nov 28, 2006 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = now - countDownDate;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var Years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let senb = document.getElementsByClassName("senb")[0];
  senb.innerHTML = "AGE: " + Years + "Years";

  document.getElementById("timer").innerHTML =
    days +
    " days <br>" +
    hours +
    " hours <br>" +
    minutes +
    " minutes <br>" +
    seconds +
    " seconds <br>";
}, 1000);
