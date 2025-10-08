
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
