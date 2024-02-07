let userPoints = 50;

function showPoints() {
    document.getElementById("points").innerText = `${userPoints} Points`;
}

window.onload = function() {
    document.getElementById("points").innerText = `${userPoints} Points`;
}

function showPopup(){
    document.getElementById("popup").style.opacity = "100%";
    document.getElementById("popup").style.pointerEvents = "all";
    document.getElementById("popup-bg").style.opacity = "50%";
    document.getElementById("popup-bg").style.pointerEvents = "all";
}

function closePopup(){
    document.getElementById("popup").style.opacity = "0%";
    document.getElementById("popup").style.pointerEvents = "none";
    document.getElementById("popup-bg").style.opacity = "0%";
    document.getElementById("popup-bg").style.pointerEvents = "none";
}

function addToDo(){
    const input = document.getElementById('inputTask').value
    document.getElementById("myForm").reset();

    var ul = document.getElementById("list");
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(input));
    li.className = "close";
    li.onclick = function() {
        li.classList.toggle("checked");
    }

    const closeBtn = document.createElement("button");
    closeBtn.className = "closeBtn"
    closeBtn.innerText = "X";
    closeBtn.onclick = function() {
        closeBtn.parentElement.style.display = "none";
    }
    li.appendChild(closeBtn);

    ul.appendChild(li);
    closePopup();
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
const prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById("navbar").style.bottom = "0px";
  } else {
    document.getElementById("navbar").style.bottom = "-65px";
  }
  prevScrollpos = currentScrollPos;
}