/*
    Project: Personal Portfolio
    Owner: Aaryan Sharma
    Date: 13th June 2024
    File: articleScript.js
*/

function toggleDropdown() {
  const dropdown = document.getElementById('dropdownMenu');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function openArticle(url) {
  window.open(url, '_blank');
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href]');

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetUrl = this.href;

      document.body.classList.add("page-transition");

      setTimeout(function () {
        window.location.href = targetUrl;
      }, 200);
    });
  });
});