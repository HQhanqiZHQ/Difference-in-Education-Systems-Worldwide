console.log('Is this working?');

let viz;
//add Share Link to Tableau Public in here
const url = "https://public.tableau.com/views/Superstore_24/Overview";
const vizContainer = document.getElementById('vizContainer');


//create a function to generate the viz element
function initViz() {
    console.log('Executing the initViz function!');
    viz = new tableau.Viz(vizContainer, url, options);
    viz1 = new tableau.Viz(vizContainerSub1, url1, options1);
    viz2 = new tableau.Viz(vizContainerSub2, url2, options2);
    viz3 = new tableau.Viz(vizContainerSub3, url3, options3);
}


// run the initViz function when the page loads
document.addEventListener("DOMContentLoaded", initViz);

const exportPDF = document.getElementById('exportPDF');
const exportImage = document.getElementById('exportImage');

// generate PDF
//click on the pdf button to generate pdf of dashboard
function generatePDF() {
    viz.showExportPDFDialog()
}

exportPDF.addEventListener("click", function () {
    generatePDF();
  });

// generate image
//click on image to generate image of dashboard
function generateImage() {
    viz.showExportImageDialog()
}

exportImage.addEventListener("click", function () {
    generateImage();
  });
