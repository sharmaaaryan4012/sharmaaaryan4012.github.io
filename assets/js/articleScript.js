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

  // Initialize the carousel when the page loads
  initializeCarousel();
});

function transitionToPage(url) {
  document.body.classList.add('page-transition');
  setTimeout(function() {
    window.location.href = url;
  }, 200); // Matches the duration of the transition
}

let articleIndex = 1;
const articleCarousel = document.querySelector('.carousel');
const articles = document.querySelectorAll('.article-item');
const totalArticles = articles.length;

// Clone the first and last articles for wrap-around effect
const firstArticle = articles[0].cloneNode(true);
const lastArticle = articles[totalArticles - 1].cloneNode(true);

// Add cloned elements to the carousel
articleCarousel.appendChild(firstArticle);
articleCarousel.insertBefore(lastArticle, articles[0]);

function initializeCarousel() {
  articleCarousel.style.transform = `translateX(-${320}px)`; // Adjust the width as per article-item width

  function showArticle(index) {
    const totalArticlesIncludingClones = totalArticles + 2;
    const offset = -index * 320; // Each article is 320px wide

    articleCarousel.style.transition = 'transform 0.5s ease-in-out';
    articleCarousel.style.transform = `translateX(${offset}px)`;

    // Wrap-around effect logic
    if (index === 0) {
      // Jump from first clone to last real article
      setTimeout(() => {
        articleCarousel.style.transition = 'none';
        articleCarousel.style.transform = `translateX(-${totalArticles * 320}px)`;
        articleIndex = totalArticles;
      }, 500); // Matches the transition duration
    } else if (index === totalArticlesIncludingClones - 1) {
      // Jump from last clone to first real article
      setTimeout(() => {
        articleCarousel.style.transition = 'none';
        articleCarousel.style.transform = `translateX(-${320}px)`;
        articleIndex = 1;
      }, 500);
    }
  }

  function nextSlide() {
    articleIndex++;
    showArticle(articleIndex);
  }

  function prevSlide() {
    articleIndex--;
    showArticle(articleIndex);
  }

  // Add event listeners to next and previous buttons
  document.querySelector('.next-btn').addEventListener('click', nextSlide);
  document.querySelector('.prev-btn').addEventListener('click', prevSlide);

  // Initialize the first slide
  showArticle(articleIndex);
}