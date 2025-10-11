document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const formResult = document.getElementById("form-result");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const interestSelect = document.getElementById("interest");

    const interestText =
      interestSelect.options[interestSelect.selectedIndex].text;
    const interestValue = interestSelect.value;

    if (!name || !email || !interestValue) {
      formResult.innerHTML =
        '<p style="color: red;">Harap isi semua kolom terlebih dahulu.</p>';
      formResult.style.display = "block";
      console.log("Harap isi semua kolom terlebih dahulu.");
      return;
    }

    const outputMessage = `
      <p><strong>Terima kasih, ${name}!</strong></p>
      <p>Data Anda telah kami terima:</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Interest:</strong> ${interestText}</p>
    `;

    formResult.innerHTML = outputMessage;
    formResult.style.display = "block";

    contactForm.reset();
  });
});
