// content.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "detectTransportClick") {
    // Selector for the "Two Wheeler" option
    const twoWheelerOption = document.querySelector(".your-two-wheeler-selector"); // Replace with the actual selector

    // Selector for the "Driving" option
    const drivingOption = document.querySelector(".your-driving-selector"); // Replace with the actual selector

    if (twoWheelerOption) {
      twoWheelerOption.addEventListener("click", function () {
        alert("Consider walking or biking for a lower carbon footprint today.");
      });
    }

    if (drivingOption) {
      drivingOption.addEventListener("click", function () {
        alert("Consider walking or biking for a lower carbon footprint today.");
      });
    }
  }
});

  
  