function toggleOffer(element, units, price) {
    element.classList.toggle('expanded');

    const isExpanded = element.classList.contains('expanded');
    const total = document.getElementById('total-price');
    if (isExpanded) {
      total.textContent = `Total: $${price.toFixed(2)} USD`;
    } else {
      total.textContent = `Total: $0.00 USD`;
    }

 
    document.querySelectorAll('.offer').forEach(offer => {
      if (offer !== element) offer.classList.remove('expanded');
    });
  }