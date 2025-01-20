// const express = require("express");
// const path = require("path");
// const fs = require("fs");

// const app = express();
// const port = 3000;

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, "public")));

// // Endpoint to serve images dynamically
// app.get("/images/:imageName", (req, res) => {
//   const { imageName } = req.params; // Get image name from the request
//   const imagePath = path.join(__dirname, "public", "images", imageName); // Construct full path to the image

//   fs.readFile(imagePath, (err, data) => {
//     if (err) {
//       console.error("Error loading image:", err);
//       res.status(404).send("Image not found.");
//     } else {
//       // Extract image extension and determine the MIME type
//       const ext = path.extname(imageName).toLowerCase();
//       let contentType = "image/jpeg"; // Default MIME type

//       switch (ext) {
//         case ".png":
//           contentType = "image/png";
//           break;
//         case ".gif":
//           contentType = "image/gif";
//           break;
//         case ".jpeg":
//           contentType = "image/jpeg";
//           break;
//         case ".bmp":
//           contentType = "image/bmp";
//           break;
//         // Add more types if needed
//         default:
//           contentType = "image/jpeg"; // Default to JPEG if not recognized
//       }

//       res.contentType(contentType); // Set correct MIME type in the response header
//       res.status(200).send(data); // Send image data as response
//     }
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

// Endpoint to serve images dynamically
app.get("/images/:imageName", (req, res) => {
  const { imageName } = req.params; // Get image name from the request
  const imagePath = path.join(
    "C:/Users/elans/OneDrive/Desktop/images_poc",
    imageName
  ); // Updated path to the image

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      console.error("Error loading image:", err);
      res.status(404).send("Image not found.");
    } else {
      // Extract image extension and determine the MIME type
      const ext = path.extname(imageName).toLowerCase();
      let contentType = "image/jpeg"; // Default MIME type

      switch (ext) {
        case ".png":
          contentType = "image/png";
          break;
        case ".gif":
          contentType = "image/gif";
          break;
        case ".jpeg":
        case ".jpg": // Added ".jpg" to the case for JPEG images
          contentType = "image/jpeg";
          break;
        case ".bmp":
          contentType = "image/bmp";
          break;
        default:
          contentType = "application/octet-stream"; // Default MIME type for unrecognized extensions
      }

      res.contentType(contentType); // Set correct MIME type in the response header
      res.status(200).send(data); // Send image data as response
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
