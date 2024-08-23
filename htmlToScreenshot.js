// Check if html2canvas is already loaded
if (typeof html2canvas === "undefined") {
  // If html2canvas is not loaded, load it from CDN
  var script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js";
  document.head.appendChild(script);

  // Once html2canvas is loaded, execute the main script
  script.onload = function () {
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
    html2canvas(element, {
      onrendered: function (canvas) {
        // Convert the canvas to a data URL
        var dataURL = canvas.toDataURL("image/png");

        // Create a link element and set the data URL as the href
        var link = document.createElement("a");
        link.href = dataURL;
        link.download = "Untitled.png";

        // Append the link to the document body and trigger the download
        document.body.appendChild(link);
        link.click();

        // Remove the link from the document body
        document.body.removeChild(link);
      }
    });
  }
}
