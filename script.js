document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const sidebarContent = document.getElementById("sidebar-content");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidebarContent.classList.toggle("active");
  });

  // Smooth scroll
  const links = document.querySelectorAll(".sidebar a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
        // Tutup sidebar di mobile setelah klik link
        if (window.innerWidth <= 768) {
          hamburger.classList.remove("active");
          sidebarContent.classList.remove("active");
        }
      }
    });
  });

  // Theme toggle
  const themeToggle = document.getElementById("toggle-theme");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });

  // Typing effect untuk homepage
  const typingText = document.getElementById("typing-text");
  const texts = ["Cyber Security", "Pen Tester"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    
    if (!isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex);
      charIndex++;
      if (charIndex > currentText.length) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
      }
    } else {
      typingText.textContent = currentText.substring(0, charIndex);
      charIndex--;
      if (charIndex < 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
        return;
      }
    }
    setTimeout(type, isDeleting ? 50 : 100);
  }

  type();

  // Base64 encode/decode functions
  window.encodeBase64 = function () {
    const input = document.getElementById("base64-input").value;
    const output = btoa(input);
    document.getElementById("base64-output").value = output;
  };

  window.decodeBase64 = function () {
    try {
      const input = document.getElementById("base64-input").value;
      const output = atob(input);
      document.getElementById("base64-output").value = output;
    } catch (e) {
      alert("Input bukan Base64 yang valid!");
    }
  };
});