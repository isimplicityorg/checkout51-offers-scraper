const offers = []; // Array to store the offers
const currentUrl = window.location.href; // Get the current URL

// Get all <li> elements that contain offer information
const offerElements = document.querySelectorAll('li.offer');

// Iterate through each offer element
offerElements.forEach((offerElement, index) => {
  // Select the <div class="info"> element within the current offer element
  const infoElement = offerElement.querySelector('.info');

  if (infoElement) {
    // Select <span> elements with specific classes within the info element
    const nameSpan = infoElement.querySelector('span.name.ng-binding');
    const descriptionSpan = infoElement.querySelector('span.description.ng-binding.ng-scope');
    const amountSpan = offerElement.querySelector('div.cb.ng-scope span.amount.ng-binding');

    // Extract the text content from the selected <span> elements
    const varName = nameSpan ? nameSpan.textContent.trim() : '';
    const varDescription = descriptionSpan ? descriptionSpan.textContent.trim() : '';
    const varAmount = amountSpan ? amountSpan.textContent.trim() : '';
    const varOffer = `Offer${index + 1}`; // Generate a unique offer identifier

    // Push the offer data into the 'offers' array in the desired format
    offers.push({
      cashBack: varAmount,
      offerName: varName,
      offerDetails: varDescription,
      expiration: "NO EXPIRATION",
      insertDate: "DIGITAL",
      insertId: "CHECKOUT51",
      url: currentUrl,
      categories: "Food",
      source: "CHECKOUT51",
      couponId: `${varOffer}-${Math.random().toString(36).substring(7)}`
    });
  } else {
    console.log(`Info element not found for Offer ${index + 1}`);
  }
});

const jsonString = JSON.stringify(offers);
console.log(jsonString); // Log the formatted offers array
