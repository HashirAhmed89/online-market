// ----------------- HOME PAGE -----------------
document.addEventListener("DOMContentLoaded", () => {
  // Type animation for home page heading
  let heading_home = "Fresh Friends";
  let h = 0;
  function typeHomeText() {
    if (h < heading_home.length) {
      let logoEl = document.getElementById("logo");
      if (logoEl) {
        logoEl.innerText += heading_home.charAt(h);
      }
      h++;
      setTimeout(typeHomeText, 100);
    }
  }
  if (document.getElementById("logo")) {
    typeHomeText();
  }

  // Home email subscribe
  let subscribeBtn = document.getElementById("Subscribe");
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
      let emailInput = document.getElementById("home-email");
      if (!emailInput) return;

      let home_email = emailInput.value.trim();
      if (home_email === "") {
        alert("Please enter your email!");
        return;
      }

      
      let emails = JSON.parse(localStorage.getItem("homeEmails")) || [];
      emails.push(home_email);
      localStorage.setItem("homeEmails", JSON.stringify(emails));

      emailInput.value = "";
      alert("Email saved successfully!");
    });
  }
});

// ----------------- ABOUT PAGE -----------------
document.addEventListener("DOMContentLoaded", () => {
  let btn_learnmore = document.getElementById("btn_learnmore");
  let back_btn = document.getElementById("back_btn");
  let output = document.getElementById("output");

  if (btn_learnmore && back_btn && output) {
    btn_learnmore.addEventListener("click", () => {
      output.style.display = "block";
      back_btn.style.display = "inline-block";
      btn_learnmore.style.display = "none";
    });

    back_btn.addEventListener("click", () => {
      output.style.display = "none";
      back_btn.style.display = "none";
      btn_learnmore.style.display = "inline-block";
    });
  }

  // Heading animation for about page
  let heading_about = "About Fresh Finds";
  let i = 0;
  function typetext() {
    if (i < heading_about.length) {
      let headingEl = document.getElementById("heading");
      if (headingEl) {
        headingEl.innerText += heading_about.charAt(i);
      }
      i++;
      setTimeout(typetext, 100);
    }
  }
  if (document.getElementById("heading")) {
    typetext();
  }
});

// ----------------- PRODUCT PAGE -----------------
function addToCart() {
  const sizeEl = document.getElementById("size");
  const qtyEl = document.getElementById("qty");

  if (!sizeEl || !qtyEl) return;

  const size = sizeEl.value;
  const qty = qtyEl.value;

  if (size === "Choose Size") {
    alert("Please select a shoe size.");
    return;
  }
  alert(`Added ${qty} pair(s) of Stylish Sneakers (Size: ${size}) to your cart!`);
}

// ----------------- SERVICES PAGE -----------------
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");
  if (cards.length > 0) {
    cards.forEach((card, index) => {
      card.style.opacity = 0;
      card.style.transform = "translateY(30px)";
      setTimeout(() => {
        card.style.transition = "all 0.6s ease";
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, index * 150);
    });
  }
});

// ----------------- CONTACT PAGE -----------------
document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let successMessage = document.getElementById("successMessage");

    if (name === "" || email === "" || message === "") {
      successMessage.textContent = "❌ Please fill in all fields!";
      successMessage.style.color = "red";
      successMessage.style.display = "block";
    } else {
      let storedData = JSON.parse(localStorage.getItem("contactData")) || [];
      storedData.push({ name, email, message });
      localStorage.setItem("contactData", JSON.stringify(storedData));
      successMessage.textContent = "✅ Message saved successfully!";
      successMessage.style.color = "green";
      successMessage.style.display = "block";
      form.reset();
    }
  });
});
