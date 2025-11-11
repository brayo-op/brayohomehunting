function viewDetails(propertyId) {
    
  localStorage.setItem("selectedProperty", propertyId);
  window.location.href = "detail.html";
}

window.location.href = 'home.html';