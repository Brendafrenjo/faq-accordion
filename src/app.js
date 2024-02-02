document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      const isActive = faq.classList.toggle("active");

      const plusIcon = faq.querySelector(".plus-icon");
      const minusIcon = faq.querySelector(".minus-icon");

      if (isActive) {
        plusIcon.classList.add("visible");
        minusIcon.classList.remove("hidden");
      } else {
        plusIcon.classList.remove("hidden");
        minusIcon.classList.add("visible");
      }
    });
  });
});
