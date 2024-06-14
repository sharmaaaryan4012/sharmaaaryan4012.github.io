/*
    Project: Personal Portfolio
    Owner: Aaryan Sharma
    Date: 13th June 2024
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
