// === Countdown Timer ===
const endDate = new Date("2025-10-20T23:59:59").getTime();
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = endDate - now;
  if (distance < 0) {
    clearInterval(timer);
    const promo = document.getElementById("promoSection");
    if (promo) promo.remove();
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

// === Info Modal ===
const infoList = document.getElementById("infoList");
const infoModal = document.getElementById("infoModal");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.getElementById("closeModal");
if (infoList && infoModal && closeModal) {
  infoList.addEventListener("click", (e) => {
    if (e.target.matches(".list-group-item")) {
      const targetId = e.target.getAttribute("data-target");
      modalDetails.innerHTML = infoDetails[targetId] || "<p>No details found.</p>";
      infoModal.classList.add("active");
    }
  });
  closeModal.addEventListener("click", () => infoModal.classList.remove("active"));
}

// === Footer Year ===
document.getElementById("currentYear").textContent = new Date().getFullYear();

// === Marquee Close ===
const closeMarqueeBtn = document.getElementById("closeMarqueeBtn");
if (closeMarqueeBtn) {
  closeMarqueeBtn.addEventListener("click", () => {
    const bar = document.getElementById("announcementBar");
    const navbar = document.getElementById("mainNavbar");
    bar?.classList.add("hidden");
    navbar?.classList.add("no-marquee");
  });
}

// === Desktop Search Toggle ===
const searchToggle = document.getElementById("searchToggle");
if (searchToggle) {
  searchToggle.addEventListener("click", () => {
    const search = document.getElementById("desktopSearch");
    search?.classList.toggle("d-none");
  });
}

// === Amazon-style Live Search ===
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if (searchInput && searchResults) {
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();
    searchResults.innerHTML = "";
    if (query.length < 2) {
      searchResults.style.display = "none";
      return;
    }

    const results = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        (p.category && p.category.toLowerCase().includes(query))
    );

    if (results.length === 0) {
      searchResults.innerHTML = `<div class="list-group-item text-muted small">No matches found</div>`;
      searchResults.style.display = "block";
      return;
    }

    results.forEach((p) => {
      const item = document.createElement("a");
      item.href = `product.html?id=${p.id}`;
      item.className = "list-group-item list-group-item-action d-flex align-items-center";
      item.innerHTML = `
        <img src="${p.image}" alt="${p.name}" class="me-3 rounded" style="width:45px; height:45px; object-fit:cover;">
        <div>
          <div class="fw-semibold">${p.name}</div>
          <small class="text-muted">${p.category || "General"}</small>
        </div>
      `;
      searchResults.appendChild(item);
    });
    searchResults.style.display = "block";
  });

  // Hide dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchResults.contains(e.target) && e.target !== searchInput) {
      searchResults.style.display = "none";
    }
  });
}
