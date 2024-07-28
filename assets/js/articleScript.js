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