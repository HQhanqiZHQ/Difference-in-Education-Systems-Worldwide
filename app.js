console.log('Is this working?');

let viz;
//add Share Link to Tableau Public in here
const url = "https://public.tableau.com/views/STA313frontpage/Dashboard1?:language=zh-CN&onFirstInteraction=function()%20%7B%0A%20%20%20%20%20%20%20%20workbook%20%3D%20viz.getWorkbook();%0A%20%20%20%20%20%20%20%20activeSheet%20%3D%20workbook.getActiveSheet();%0A%20%20%20%20%20%20%20%20console.log(%22My%20dashboard%20is%20interactive%22);%0A%20%20%20%20%7D&:toolbar=n&:display_count=n&:origin=viz_share_link";
const vizContainer = document.getElementById('vizContainer');

//sub1
let viz1;
const url1 = "https://public.tableau.com/views/liveintegration1/Dashboard1";
const vizContainerSub1 = document.getElementById('vizContainerSub1');

//sub2
let viz2;
const url2 = "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";
const vizContainerSub2 = document.getElementById('vizContainerSub2');

//sub3
let viz3;
const url3 = "https://public.tableau.com/views/SuperbowlOutcomes/Final?%3Adisplay_static_image=y&amp";
const vizContainerSub3 = document.getElementById('vizContainerSub3');

const options = {
    hideToolbar: true,
    hideTabs: false,
    height: 1000,
    width: 1200,
    onFirstInteraction: function() {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log("My dashboard is interactive");
    }
};
const options1 = {
    hideTabs: true,
    height: 1000,
    width: 1200,
    onFirstInteraction: function() {
        workbook = viz1.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log("My dashboard is interactive");
    }
};

const options2 = {
    hideTabs: true,
    height: 1000,
    width: 1200,
    onFirstInteraction: function() {
        workbook = viz2.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log("My dashboard is interactive");
    }
};


const options3 = {
    hideTabs: true,
    height: 1000,
    width: 1200,
    onFirstInteraction: function() {
        workbook = viz3.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log("My dashboard is interactive");
    }
};


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

/**
 * Finds the correct size of the dashboard in this screen.
 */
function findDashboardSize() {
	var minHeight = 630;
	var maxHeight = 885;
	var minWidth  = 1000;
	
	// The minus 100px leaves us room for the header/footer. Adjust as needed.
	var height = $('body').height() - 100;
	
	if (height < minHeight) {
		height = minHeight;
	}
	if (height > maxHeight) {
		height = maxHeight;
	}
	
	var width = Math.round(height/(minHeight/minWidth));
	return {
		'width'  : width,
		'height' : height
	}
}