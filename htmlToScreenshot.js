// Check if html2canvas is already loaded
if (typeof html2canvas === 'undefined') {
  // If html2canvas is not loaded, load it from CDN
  var script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js";
  document.head.appendChild(script);

  // Once html2canvas is loaded, execute the main script
  script.onload = function() {
    mainScript();
  };
} else {
  // If html2canvas is already loaded, execute the main script directly
  mainScript();
}

function mainScript() {
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
}
