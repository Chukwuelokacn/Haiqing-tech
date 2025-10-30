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
const endDate = new Date("2025-11-02T23:59:59").getTime();
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

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("carouselContainer");
  const items = Array.from(document.querySelectorAll(".carousel-3d-item"));
  const prevBtn = document.getElementById("prevVideo");
  const nextBtn = document.getElementById("nextVideo");

  // find initial active index from DOM or fallback to 0
  let activeIndex = items.findIndex(i => i.classList.contains("active"));
  if (activeIndex === -1) activeIndex = 0;

  let zoomed = false;

  // helper to assign iframe src from data-src (lazy load)
  function setIframeSrc(item) {
    const iframe = item.querySelector("iframe");
    if (!iframe) return;
    const src = iframe.getAttribute("src") || iframe.dataset.src || item.dataset.src;
    // if already set, keep it
    if (!iframe.src || iframe.src === "about:blank") {
      // set the src only if data-src exists
      const ds = iframe.dataset.src || item.dataset.src;
      if (ds) iframe.src = ds;
    }
  }

  // helper to clear iframe src to stop playback (lightweight pause)
  function clearIframeSrc(item) {
    const iframe = item.querySelector("iframe");
    if (!iframe) return;
    // remove src to stop playback — we'll restore from data-src when needed
    // Keep dataset intact
    if (iframe.src && iframe.src !== "") {
      // use about:blank instead of empty string (safer)
      iframe.src = "about:blank";
    }
  }

  function updateCarousel() {
    // normalize classes
    items.forEach((it) => it.classList.remove("active", "prev1", "next1", "prev2", "next2"));

    const total = items.length;
    const prev1 = (activeIndex - 1 + total) % total;
    const next1 = (activeIndex + 1) % total;
    const prev2 = (activeIndex - 2 + total) % total;
    const next2 = (activeIndex + 2) % total;

    // assign classes
    items[activeIndex].classList.add("active");
    items[prev1].classList.add("prev1");
    items[next1].classList.add("next1");
    items[prev2].classList.add("prev2");
    items[next2].classList.add("next2");

    // lazy load: set src for active and neighbors; clear others to pause them
    items.forEach((item, idx) => {
      if (idx === activeIndex || idx === prev1 || idx === next1 || idx === prev2 || idx === next2) {
        setIframeSrc(item);
      } else {
        clearIframeSrc(item);
      }
    });
  }

  // init: set src for visible slides only
  updateCarousel();

  prevBtn.addEventListener("click", () => {
    if (zoomed) return;
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    if (zoomed) return;
    activeIndex = (activeIndex + 1) % items.length;
    updateCarousel();
  });

  // keyboard nav (left/right) and Esc to close zoom
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "Escape" && zoomed) {
      // close zoom
      const zi = items[activeIndex];
      if (zi) closeZoom(zi, activeIndex);
    }
  });

  // close zoom helpers
  function openZoom(item, index) {
    if (zoomed) return;
    item.classList.add("zoomed");
    zoomed = true;
    // hide others on mobile
    items.forEach((other, i) => { if (i !== index) other.classList.add("hidden-mobile"); });
    // hide arrows
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    // ensure iframe for the zoomed item is loaded
    setIframeSrc(item);
  }

  function closeZoom(item, index) {
    if (!zoomed) return;
    item.classList.remove("zoomed");
    zoomed = false;
    items.forEach((other) => other.classList.remove("hidden-mobile"));
    prevBtn.style.display = "";
    nextBtn.style.display = "";
    // after closing, refresh carousel classes & lazy load neighbors again
    updateCarousel();
  }

  // click / tap behavior for items
  items.forEach((item, index) => {
    item.addEventListener("click", (ev) => {
      // On mobile width: tapping the active slide toggles zoom
      if (window.innerWidth <= 768 && index === activeIndex) {
        if (!zoomed) openZoom(item, index);
        else closeZoom(item, index);
        return;
      }

      // On desktop: clicking a non-active slide makes it active
      if (index !== activeIndex && !zoomed) {
        activeIndex = index;
        updateCarousel();
      }
    });
  });

  // also close zoom when tapping outside the zoomed item
  container.addEventListener("click", (e) => {
    if (!zoomed) return;
    // if click target is outside the zoomed item, close
    const zoomedItem = items[activeIndex];
    if (!zoomedItem) return;
    if (!zoomedItem.contains(e.target)) {
      closeZoom(zoomedItem, activeIndex);
    }
  });

  // accessibility: give focus to carousel on hover for keyboard nav (optional convenience)
  const carousel = document.getElementById("videoCarousel3D");
  carousel.addEventListener("mouseenter", () => carousel.setAttribute("tabindex", "-1"));
  carousel.addEventListener("mouseleave", () => carousel.removeAttribute("tabindex"));

  // Handle resize: if we resized to desktop while zoomed, close zoom
  window.addEventListener("resize", () => {
    if (zoomed && window.innerWidth > 768) {
      const zi = items[activeIndex];
      if (zi) closeZoom(zi, activeIndex);
    }
  });
});

// === Footer Year ===
document.getElementById("currentYear").textContent = new Date().getFullYear();



