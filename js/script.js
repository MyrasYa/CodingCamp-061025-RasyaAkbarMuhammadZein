document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const formResult = document.getElementById("form-result");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const interestSelect = document.getElementById("interest");
      const interestText =
        interestSelect.options[interestSelect.selectedIndex].text;

      if (!name || !email || !interestSelect.value) {
        formResult.innerHTML = "<p>Please fill out all fields.</p>";
        formResult.style.display = "inline-block";
        formResult.style.backgroundColor = "rgba(255, 107, 107, 0.5)";
        return;
      }

      const message = `
        <p><strong>Thank you, ${name}!</strong></p>
        <p>We have received your inquiry regarding "<strong>${interestText}</strong>".</p>
        <p>A confirmation has been sent to <strong>${email}</strong>.</p>
      `;

      formResult.innerHTML = message;
      formResult.style.display = "block";
      formResult.style.backgroundColor = "rgba(144, 238, 144, 0.5)";
      formResult.style.backgroundColor = "rgba(144, 238, 144, 0.5)"; // Optional

      contactForm.reset();
    });
  } else {
    console.error("Element with ID 'contact-form' not found.");
  }

  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }
});
