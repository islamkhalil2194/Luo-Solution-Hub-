document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     MOBILE NAVIGATION
     ===================================================== */

  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("siteNav");

  if (navToggle && siteNav) {

    navToggle.addEventListener("click", () => {

      siteNav.classList.toggle("open");

      const isOpen = siteNav.classList.contains("open");

      navToggle.setAttribute("aria-expanded", isOpen);

    });

    // Close mobile menu when clicking a link
    siteNav.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        siteNav.classList.remove("open");

        navToggle.setAttribute("aria-expanded", "false");

      });

    });
  }


  /* =====================================================
     HEADER SHADOW ON SCROLL
     ===================================================== */

  const header = document.querySelector(".site-header");

  function updateHeader() {

    if (!header) return;

    if (window.scrollY > 30) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  }

  window.addEventListener("scroll", updateHeader);

  updateHeader();


  /* =====================================================
     SCROLL REVEAL ANIMATION
     ===================================================== */

  const revealElements = document.querySelectorAll(
    ".service-card, .steps li, .trust-stats > div, .cta-inner"
  );

  revealElements.forEach(element => {

    element.classList.add("reveal");

  });


  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(element => {

    observer.observe(element);

  });


  /* =====================================================
     ACTIVE NAVIGATION
     ===================================================== */

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".site-nav a").forEach(link => {

    const linkPage =
      link.getAttribute("href").split("/").pop().split("#")[0];

    if (
      linkPage === currentPage &&
      !link.classList.contains("nav-cta")
    ) {

      link.classList.add("active");

    }

  });


  /* =====================================================
     WHATSAPP NUMBER
     ===================================================== */

  // Full international number, no + or spaces, for wa.me links.
  const whatsappNumber = "255757370700";


  /* =====================================================
     BOOKING FORM -> WHATSAPP
     ===================================================== */

  const bookingForm = document.getElementById("bookingForm");

  if (bookingForm) {

    bookingForm.addEventListener("submit", (event) => {

      event.preventDefault();

      const name = bookingForm.name.value.trim();
      const phone = bookingForm.phone.value.trim();
      const service = bookingForm.service.value;
      const date = bookingForm.date.value;
      const message = bookingForm.message.value.trim();

      let text = `Hello LUO SOLUTION HUB, I'd like to book an appointment.\n\n`;
      text += `Name: ${name}\n`;
      text += `Phone: ${phone}\n`;
      text += `Service: ${service}\n`;

      if (date) {
        text += `Preferred date: ${date}\n`;
      }

      if (message) {
        text += `Details: ${message}\n`;
      }

      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

      window.open(url, "_blank");

    });
  }


  /* =====================================================
     TRACK FORM -> WHATSAPP
     ===================================================== */

  const trackForm = document.getElementById("trackForm");

  if (trackForm) {

    trackForm.addEventListener("submit", (event) => {

      event.preventDefault();

      const name = trackForm.name.value.trim();
      const phone = trackForm.phone.value.trim();
      const reference = trackForm.reference.value.trim();

      let text = `Hello LUO SOLUTION HUB, I'd like to check on my application status.\n\n`;
      text += `Name: ${name}\n`;
      text += `Phone: ${phone}\n`;
      text += `Reference / service: ${reference}\n`;

      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

      window.open(url, "_blank");

    });
  }


  /* =====================================================
     CONTACT FORM -> EMAIL
     ===================================================== */

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

      event.preventDefault();

      const name = contactForm.name.value.trim();
      const contactInfo = contactForm.contactInfo.value.trim();
      const message = contactForm.message.value.trim();

      const subject = `Website enquiry from ${name}`;

      let body = `Name: ${name}\n`;
      body += `Phone/Email: ${contactInfo}\n\n`;
      body += `Message:\n${message}`;

      const url = `mailto:islamkhalil2194@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = url;

    });
  }

});
