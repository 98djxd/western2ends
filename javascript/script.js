// menu navigation links
function toggleMenu() {
  var menuLinks = document.querySelector(".menu-links");
  menuLinks.classList.toggle("show");
}

//Frequently asked questions and answers
function toggleAnswer(button) {
  const answer = button.nextElementSibling;
  answer.style.display =
    answer.style.display === "none" || answer.style.display === ""
      ? "block"
      : "none";
}

//Cookies message which will disappear in 4 seconds
document.addEventListener("DOMContentLoaded", function () {
  var cookiesMessage = document.getElementById("cookiesMessage");

  setTimeout(function () {
    cookiesMessage.style.display = "none";
  }, 4000);
});
