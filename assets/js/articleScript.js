function showPopup(articleId) {
  document.getElementById("popup").style.display = "block";
  document.getElementById(articleId).style.display = "block";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
  const articles = document.querySelectorAll(".article");
  articles.forEach(article => {
    article.style.display = "none";
  });
}
