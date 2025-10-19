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

// === Scroll to Shop Section when Cart Icon Clicked ===
document.getElementById("cartIcon").addEventListener("click", function (e) {
  e.preventDefault();

  const shopSection = document.getElementById("shopSection");
  if (shopSection) {
    shopSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});

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


// === 3D Video Carousel ===
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-3d-item");
  const prevBtn = document.getElementById("prevVideo");
  const nextBtn = document.getElementById("nextVideo");
  let activeIndex = 0;

  // Lazy load current + neighbor iframes
  function loadVisibleVideos() {
    items.forEach((item, index) => {
      const iframe = item.querySelector("iframe");
      if (
        index === activeIndex ||
        index === (activeIndex + 1) % items.length ||
        index === (activeIndex - 1 + items.length) % items.length
      ) {
        if (!iframe.src && iframe.dataset.src) {
          iframe.src = iframe.dataset.src;
        }
      } else {
        iframe.removeAttribute("src");
      }
    });
  }

  // Update positions
  function updateCarousel() {
    items.forEach((item, index) => {
      item.classList.remove("active", "prev", "next");

      if (index === activeIndex) {
        item.classList.add("active");
      } else if (index === (activeIndex - 1 + items.length) % items.length) {
        item.classList.add("prev");
      } else if (index === (activeIndex + 1) % items.length) {
        item.classList.add("next");
      }
    });

    loadVisibleVideos();
  }

  // Navigation controls
  prevBtn.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % items.length;
    updateCarousel();
  });

  // Initialize
  updateCarousel();
});




// === Footer Year ===
document.getElementById("currentYear").textContent = new Date().getFullYear();


