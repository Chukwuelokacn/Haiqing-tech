
  // 🕒 Set your target end date here
  const endDate = new Date("2025-10-20T23:59:59").getTime();

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("promoSection").remove();
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  }, 1000);


  // Get elements
const infoList = document.getElementById("infoList");
const infoModal = document.getElementById("infoModal");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.getElementById("closeModal");

// Click handler
infoList.addEventListener("click", (e) => {
  if (e.target && e.target.matches(".list-group-item")) {
    const targetId = e.target.getAttribute("data-target");
    modalDetails.innerHTML = infoDetails[targetId] || "<p>No details found.</p>";
    infoModal.classList.add("active");
  }
});

// Close handler
closeModal.addEventListener("click", () => {
  infoModal.classList.remove("active");
});


// Automatically update footer year
  document.getElementById("currentYear").textContent = new Date().getFullYear();

