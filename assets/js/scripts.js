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
};

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
  }, 200);
}


let slideIndex = 1;
const slides = document.querySelectorAll('.certification-item');
const totalSlides = slides.length;
const carousel = document.querySelector('.carousel');

const firstSlide = slides[0].cloneNode(true);
const lastSlide = slides[totalSlides - 1].cloneNode(true);

carousel.appendChild(firstSlide);
carousel.insertBefore(lastSlide, slides[0]);

carousel.style.transform = `translateX(-${320}px)`;

function showSlide(index) {
  const totalSlidesIncludingClones = totalSlides + 2;
  const offset = -index * 320;

  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(${offset}px)`;

  if (index === 0) {
    setTimeout(() => {
      carousel.style.transition = 'none';
      carousel.style.transform = `translateX(-${totalSlides * 320}px)`;
      slideIndex = totalSlides;
    }, 500);
  } else if (index === totalSlidesIncludingClones - 1) {
    setTimeout(() => {
      carousel.style.transition = 'none';
      carousel.style.transform = `translateX(-${320}px)`;
      slideIndex = 1;
    }, 500);
  }
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", function () {
  showSlide(slideIndex);
});