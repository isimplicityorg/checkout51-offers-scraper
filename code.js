// Get the <li> element that contains the offer information
const offerElement = document.querySelector('li.offer');
console.log(offerElement)
if (offerElement) {
  // Select the <div class="info"> element
  const infoElement = document.querySelector('.info');

  if (infoElement) {
    // Select <span> elements with specific classes
    const nameSpan = infoElement.querySelector('span.name.ng-binding');
    const descriptionSpan = infoElement.querySelector('span.description.ng-binding.ng-scope');
    const amountSpan = offerElement.querySelector('div.cb.ng-scope span.amount.ng-binding');

    // Extract the text content from the selected <span> elements
    const name = nameSpan ? nameSpan.textContent.trim() : '';
    const description = descriptionSpan ? descriptionSpan.textContent.trim() : '';
    const amount = amountSpan ? amountSpan.textContent.trim() : '';

    // Log the extracted information
    console.log('Name:', name);
    console.log('Description:', description);
    console.log('Amount:', amount);
  } else {
    console.log('Info element not found');
  }
} else {
  console.log('Offer element not found');
}

