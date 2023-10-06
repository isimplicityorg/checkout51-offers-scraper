var offers = []; // Array to store the offers
var currentUrl = window.location.href; // Get the current URL

// Get all <li> elements that contain offer information
var offerElements = document.querySelectorAll('li.offer');

// Iterate through each offer element
offerElements.forEach((offerElement, index) => {
  // Select the <div class="info"> element within the current offer element
  var infoElement = offerElement.querySelector('.info');

  if (infoElement) {
    // Select <span> elements with specific classes within the info element
    var nameSpan = infoElement.querySelector('span.name.ng-binding');
    var descriptionSpan = infoElement.querySelector('span.description.ng-binding.ng-scope');
    var amountSpan = offerElement.querySelector('div.cb.ng-scope span.amount.ng-binding');

    // Extract the text content from the selected <span> elements
    var varName = nameSpan ? nameSpan.textContent.trim() : '';
    var varDescription = descriptionSpan ? descriptionSpan.textContent.trim() : '';
    var varAmount = amountSpan ? amountSpan.textContent.trim() : '';
    var varOffer = `Offer${index + 1}`; // Generate a unique offer identifier

    // Push the offer data into the 'offers' array in the desired format
    var items = [varAmount, varName, varDescription, "NO EXPIRATION", "DIGITAL", "CHECKOUT51", currentUrl, "Food", "CHECKOUT51", varOffer + "-" + createCouponId("")];
    offers.push(createDatabaseJson(items));
  } else {
    console.log(`Info element not found for Offer ${index + 1}`);
  }
});

var jsonString = JSON.stringify(offers);
console.log(jsonString); // Log the formatted offers array