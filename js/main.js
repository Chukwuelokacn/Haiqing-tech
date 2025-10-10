
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


document.getElementById("closeMarqueeBtn").addEventListener("click", function() {
  const marquee = document.getElementById("announcementBar");
  const navbar = document.getElementById("mainNavbar");

  marquee.classList.add("hidden");
  navbar.classList.add("no-marquee");

  // Optional: you can use sessionStorage if you want to hide it for that session only
  // localStorage.setItem("marqueeClosed", "true");
});

// On load, always show marquee (as requested)
window.addEventListener("load", function() {
  const navbar = document.getElementById("mainNavbar");
  navbar.classList.remove("no-marquee");
});




// === Hide Marquee on Click ===
document.getElementById("closeMarqueeBtn").addEventListener("click", function () {
  const bar = document.getElementById("announcementBar");
  bar.classList.add("hidden");

  const navbar = document.getElementById("mainNavbar");
  navbar.classList.add("no-marquee");
});

// === Search Toggle (Desktop) ===
document.getElementById("searchToggle").addEventListener("click", function () {
  const search = document.getElementById("desktopSearch");
  search.classList.toggle("d-none");
});


