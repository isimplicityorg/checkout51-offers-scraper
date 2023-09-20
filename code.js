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
    const name = nameSpan ? nameSpan.textContent.trim() : '';
    const description = descriptionSpan ? descriptionSpan.textContent.trim() : '';
    const amount = amountSpan ? amountSpan.textContent.trim() : '';

    // Log the extracted information for the current offer
    console.log(`Offer ${index + 1}:`);
    console.log('Name:', name);
    console.log('Description:', description);
    console.log('Amount:', amount);
    console.log('-------------------------');
  } else {
    console.log(`Info element not found for Offer ${index + 1}`);
  }
});
