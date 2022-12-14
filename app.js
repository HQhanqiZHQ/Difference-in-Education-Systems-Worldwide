console.log('Is this working?');

let viz;

//add Share Link to Tableau Public in here
const url = "https://public.tableau.com/views/Superstore_24/Overview";

const vizContainer = document.getElementById('vizContainer');

//sub1
let viz1;
const url1 = "https://public.tableau.com/views/liveintegration1/Dashboard1";
const vizContainerSub1 = document.getElementById('vizContainerSub1');

const options = {
    hideTabs: true,
    height: 1000,
    width: 1200,
    onFirstInteraction: function() {
        workbook = viz1.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log("My dashboard is interactive");
    }
};

//create a function to generate the viz element
function initViz() {
    console.log('Executing the initViz function!');
    viz = new tableau.Viz(vizContainer, url, options);
}

//create a function to generate the viz element
function initViz1() {
    console.log('Executing the initViz function!');
    viz1 = new tableau.Viz(vizContainerSub1, url1, options1);
}

// run the initViz function when the page loads
document.addEventListener("DOMContentLoaded", initViz);

const exportPDF = document.getElementById('exportPDF');
const exportImage = document.getElementById('exportImage');


//click on the pdf button to generate pdf of dashboard
function generatePDF() {
    viz.showExportPDFDialog()
}

exportPDF.addEventListener("click", function () {
    generatePDF();
  });

//click on image to generate image of dashboard
function generateImage() {
    viz.showExportImageDialog()
}

exportImage.addEventListener("click", function () {
    generateImage();
  });
