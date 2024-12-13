const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
 
const backToTopBtn = document.getElementById("backToTopBtn");

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
