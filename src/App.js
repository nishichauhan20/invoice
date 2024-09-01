import React from "react";
import { Outlet } from "react-router-dom";
import html2pdf from "html2pdf.js";
import "./App.css";

function App() {
  const downloadPDF = () => {
    const element = document.getElementById("contentToPrint");
    const options = {
      margin: [0, 0, 0, 0], // No margins
      filename: "govindEngineering.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: {
        unit: "in",
        format: "letter",
        orientation: "portrait",
        // Adjust page size as needed, e.g., "a4" or "letter"
        // In case of very long content, consider "a4" for more space
      },
    };

    // Clone the element to avoid modifying the original
    const cloneElement = element.cloneNode(true);

    // Optional: Adjust the height to fit the content on the page
    // Depending on your content, you might need to set a max-height or adjust styles
    cloneElement.style.width = "100%";
    cloneElement.style.pageBreakInside = "avoid";

    html2pdf().from(cloneElement).set(options).save();
  };

  return (
    <div className="App">
      <button onClick={downloadPDF} style={{ margin: "10px", padding: "10px" }}>
        Download PDF
      </button>
      <div id="contentToPrint">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

//import React from "react";
// import { Outlet } from "react-router-dom";
// import html2pdf from "html2pdf.js";
// import "./App.css";

// function App() {
//   const downloadPDF = () => {
//     // Get the content to be printed
//     const element = document.getElementById("contentToPrint");
//     const options = {
//       margin: [0, 0, 0, 0], // No margins: [top, right, bottom, left]
//       filename: "govindEngineering.pdf",
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2, useCORS: true },
//       jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//     };

//     // Exclude the "Add New Row" section
//     const cloneElement = element.cloneNode(true);
//     const addNewRowLink = cloneElement.querySelector(".add-new");
//     if (addNewRowLink) {
//       addNewRowLink.style.display = "none"; // Hide the link
//     }

//     html2pdf().from(cloneElement).set(options).save();
//   };

//   return (
//     <div className="App">
//       <button onClick={downloadPDF} style={{ margin: "10px", padding: "10px" }}>
//         Download PDF
//       </button>
//       <div id="contentToPrint">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import { Outlet } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Outlet />
//     </div>
//   );
// }

// export default App;
