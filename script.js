document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const heroSection = document.getElementById("hero");
  const heroHeight = heroSection ? heroSection.offsetHeight : 0;

  // --- Sticky Header Effect ---
  window.addEventListener("scroll", () => {
    // Add a class when scrolling past the hero section (with a buffer)
    if (window.scrollY > heroHeight - 300) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Get the height of the fixed header to offset the scroll position
        const headerOffset = navbar.offsetHeight + 10;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

// --- Contact Form Message Box ---
// This function is called directly from the onsubmit attribute in the HTML
function showMessage() {
  const messageBox = document.getElementById("message-box");
  const form = document.querySelector(".contact-form");
  form.reset();
  messageBox.style.display = "block";
  setTimeout(() => (messageBox.style.display = "none"), 4000);
}
