let userName = document.getElementById("uname");
let repoName = document.getElementById("repname");
let form = document.getElementById("input-form");
let icon = document.getElementById("icons").value;
let color = document.getElementById("favcolor").value;
let card = document.getElementById("card");
const button = document.getElementById("submit");
const option = document.querySelectorAll('option');
button.addEventListener('click', createCard);


function createCard(e) {
  e.preventDefault();
  form.classList.add('hide');
  button.classList.add('hide');
  card.innerHTML = `<h2>Author: <span.style.color=${color} class="Author-name">${userName.value}<span></h2>
  <h3 class="card-icon">${pickIcon()}</h3>
  <p>This is my repository <span class="repo-name">${repoName.value}<span></p>
  <a href="https://github.com/vasilykudlotyak"><button class='sbtn'>Click me</button></a>`
}

function pickIcon() {
  let cardIcon = document.getElementsByClassName('card-icon');
  switch (icon) {
    case "GitHub":
      cardIcon.innerHTML = `<i class="fab fa-github"></i>`;
      break;
    case "Gitlab":
      cardIcon.innerHTML = `<i class="fab fa-gitlab"></i>`;
      break;
    case "Facebook":
      cardIcon.innerHTML = `<i class="fab fa-facebook-square"></i>`;
      break;
    case "Twitter":
      cardIcon.innerHTML = `<i class="fab fa-twitter"></i>`;
      break;
    case "Youtube":
      cardIcon.innerHTML = `<i class="fab fa-youtube"></i>`;
      break;
    case "Instagram":
      cardIcon.innerHTML = `<i class="fab fa-instagram"></i>`;
      break;
  }
}