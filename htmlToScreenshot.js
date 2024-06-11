// Create a new script element
var script = document.createElement("script");

// Set the source of the script to the CDN-hosted html2canvas library
script.src =
  "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js";

// Once the html2canvas script is loaded, execute the main script
script.onload = function () {
  // Main script starts here
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "F3") {
      event.preventDefault(); // Prevent default Ctrl + F3 behavior

      takeScreenshot();
    }
  });

  function takeScreenshot() {
    // Select the element you want to screenshot
    var element = document.body;

    // Use html2canvas to take a screenshot of the element
    html2canvas(element).then(function (canvas) {
      // Convert the canvas to a data URL
      var imageData = canvas.toDataURL("image/png");

      // Write image data to clipboard
      navigator.clipboard
        .write([
          new ClipboardItem({
            "image/png": canvas,
          }),
        ])
        .then(function () {
          console.log("Image copied to clipboard");
        })
        .catch(function (error) {
          console.error("Failed to copy image to clipboard:", error);
        });
    });
  }
  // Main script ends here
};

// Append the script element to the document's head
document.head.appendChild(script);
