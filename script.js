function removeWish() {
  let wish = document.getElementsByClassName("wish")[0];
  let sen = document.getElementsByClassName("sen")[0];
  let timer = document.getElementById("timer");
  wish.style.color = "Red";
  wish.style.display = "none";
  sen.style.display = "block";
  timer.style.display = "block";
}
