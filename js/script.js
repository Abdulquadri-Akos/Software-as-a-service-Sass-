// FAQ Accordions
document.addEventListener("DOMContentLoaded", () => {
  // Select the FAQ content container
  const faqContainer = document.querySelector(".faq-content");

  // Add an Event listener on it
  faqContainer.addEventListener("click", (e) => {
    // Select the Group Header
    const groupHeader = e.target.closest(".faq-group-header");

    //  Condition to stop the body p from showing null and exit.
    if (!groupHeader) return;

    // Select the group FAQ-Group and select Group Body
    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    // Toggle the icon
    icon.classList.toggle("fa-minus");
    icon.classList.toggle("fa-add");

    // Toggle the body
    groupBody.classList.toggle("open");

    // Select all FAQ Group, because we want to LOOP
    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    // LOOP using forEach
    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        // Select other group body
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");

        // Select other group icon
        const otherIcon = otherGroup.querySelector("i");

        // Remove open from the default selected accordion
        otherGroupBody.classList.remove("open");

        // Change the sign behaviours
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});

// Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  // create variables and select the elements
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Add an event listener on the hamburger button
  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
