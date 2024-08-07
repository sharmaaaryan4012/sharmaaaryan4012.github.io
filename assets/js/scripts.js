/*
    Project: Personal Portfolio
    Owner: Aaryan Sharma
    Date: 13th June 2024
    File: scripts.js
*/

function toggleDropdown() {
  const dropdown = document.getElementById('dropdownMenu');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function openModal(email) {
  document.getElementById('modalText').textContent = email;
  document.getElementById('emailModal').style.display = "block";
}

function closeModal() {
  document.getElementById('emailModal').style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById('emailModal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

window.onload = function() {
  const validPages = ['index.html', 'projects.html', 'experience.html', '404.html'];
  const currentPath = window.location.pathname.split('/').pop();

  if (!validPages.includes(currentPath) && currentPath !== '') {
    window.location.href = '404.html';
  }
};

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

function transitionToPage(url) {
  document.body.classList.add('page-transition');
  setTimeout(function() {
    window.location.href = url;
  }, 200); // Matches the duration of the transition
}