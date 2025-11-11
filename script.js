function viewDetails(propertyId) {
  // Save selected property
  localStorage.setItem("selectedProperty", propertyId);
  window.location.href = "detail.html";
}

