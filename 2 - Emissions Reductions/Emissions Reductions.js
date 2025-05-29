<script src="https://code.highcharts.com/maps/10.3.1/highmaps.js"></script>
<script src="https://code.highcharts.com/10.3.3/modules/exporting.js"></script>
<script src="/sites/all/libraries/js/highcharts7/code/highcharts.js"></script>
<script src="/sites/all/libraries/js/highcharts7/code/modules/tilemap.js"></script>
<script src="/sites/all/libraries/js/highcharts7/code/modules/exporting.js"></script>
<script src="/sites/all/libraries/js/highcharts7/code/modules/export-data.js"></script>
<script src="/sites/all/libraries/js/highcharts7/code/modules/accessibility.js"></script>
<script src="/sites/all/libraries/js/highcharts7/code/modules/drilldown.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
<script>

//Javascript and custom CSS for the Progress Report
//Emissions reductions section
//Datasets and current years are up front to assist with future updates
//Start of the actual script
//Below are the required Javascript source code like highcharts and jQuery

var $ = jQuery;

//Code below is for the content switcher function (when buttons or links are clicked, switch to that pollutant)
//Create variables for each section
var so2Section = document.getElementById("so2");
var noxSection = document.getElementById("nox");
var osnoxSection= document.getElementById("osnox");
var co2Section = document.getElementById("co2");
var hgSection = document.getElementById("hg");
//Create variables for buttons
var so2Button = document.getElementById("so2Button");
var noxButton = document.getElementById("noxButton");
var osnoxButton= document.getElementById("osnoxButton");
var co2Button = document.getElementById("co2Button");
var hgButton = document.getElementById("hgButton");
//Pull the links for each pollutant (e.g., "class=so2Link")
var so2Links = document.getElementsByClassName("so2Link");
var noxLinks = document.getElementsByClassName("noxLink");
var osnoxLinks = document.getElementsByClassName("osnoxLink");
var co2Links = document.getElementsByClassName("co2Link");
var hgLinks = document.getElementsByClassName("hgLink");

//Hide content when no button is pressed
so2Section.classList.add("hide");
noxSection.classList.add("hide");
osnoxSection.classList.add("hide");
co2Section.classList.add("hide");
hgSection.classList.add("hide");
//Create functions for each pollutant (show this pollutant, hide others)
function so2Function(){
window.location.hash = "#so2";
so2Section.classList.remove("hide");
noxSection.classList.add("hide");
osnoxSection.classList.add("hide");
co2Section.classList.add("hide");
hgSection.classList.add("hide");
}
function noxFunction(){
window.location.hash = "#nox";
so2Section.classList.add("hide");
noxSection.classList.remove("hide");
osnoxSection.classList.add("hide");
co2Section.classList.add("hide");
hgSection.classList.add("hide");
}
function osnoxFunction(){
window.location.hash = "#osnox";
so2Section.classList.add("hide");
noxSection.classList.add("hide");
osnoxSection.classList.remove("hide");
co2Section.classList.add("hide");
hgSection.classList.add("hide");
}
function co2Function(){
window.location.hash = "#co2";
so2Section.classList.add("hide");
noxSection.classList.add("hide");
osnoxSection.classList.add("hide");
co2Section.classList.remove("hide");
hgSection.classList.add("hide");
}
function hgFunction(){
window.location.hash = "#hg";
so2Section.classList.add("hide");
noxSection.classList.add("hide");
osnoxSection.classList.add("hide");
co2Section.classList.add("hide");
hgSection.classList.remove("hide");
}
//Add an event listener to the buttons and execute the function for the matching pollutant
so2Button.addEventListener("click", so2Function);
noxButton.addEventListener("click", noxFunction);
osnoxButton.addEventListener("click", osnoxFunction);
co2Button.addEventListener("click", co2Function);
hgButton.addEventListener("click", hgFunction);
//Add event listeners to links for each pollutant
for (var i=0; i<so2Links.length; i++) {
    so2Links[i].addEventListener("click", so2Function);
}
for (var i=0; i<noxLinks.length; i++) {
    noxLinks[i].addEventListener("click", noxFunction);
}
for (var i=0; i<osnoxLinks.length; i++) {
    osnoxLinks[i].addEventListener("click", osnoxFunction);
}
for (var i=0; i<co2Links.length; i++) {
    co2Links[i].addEventListener("click", co2Function);
}
for (var i=0; i<hgLinks.length; i++) {
    hgLinks[i].addEventListener("click", hgFunction);
}

//Run the functions if the URL has is detected (e.g., #so2)
if(window.location.hash === "#so2") {
   so2Function();
}
if(window.location.hash === "#nox") {
   noxFunction();
}
if(window.location.hash === "#osnox") {
   osnoxFunction();
}
if(window.location.hash === "#co2") {
   co2Function();
}
if(window.location.hash === "#hg") {
   hgFunction();
}

//Set the years below
//Report year is the year that this Progress Report is covering
var reportYear = 2023;
//Current year is the... current year...
var currentYear = 2024;
//Update the "Last Updated:" below
var credits = ("EPA, " + currentYear + "<br/>Last Updated: 09/2024");

//Sets the xAxis for several charts.
//In 2026, add a 2025 item below before the reportYear (e.g. 2020, 2025, reportYear)
var axis = [1980, 1990, 1995, 2000, 2005, 2010, 2015, 2020, reportYear];
//Sets the "slider years" for the map viz (currently figure 2 but that might change)
var sliderYears = [1990, 2000, 2010, 2020, reportYear];
var co2SliderYears = [1995, 2000, 2010, 2020, reportYear];
var osSliderYears = [2000, 2010, 2020, reportYear];
var matsSliderYears = [2010, 2018, 2020, 2022, reportYear];
var fig3Years= ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022','2023'];
//Percent change data
var pctYears = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
var years = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023];
var matsYears = [2010,2017,2018,2019,2020,2021,2022,reportYear];
var so2PctData = [0, 6, 9, 11, 5, -5, -10, -14, -10, -13, -14, -21, -25, -36, -51, -56, -62, -72, -73, -73, -81, -87, -89, -89, -92, -93, -92, -93, -96];
var noxPctData = [0, 3, 3, 2, -6, -13, -19, -23, -29, -36, -38, -42, -44, -49, -65, -64, -66, -71, -71, -72, -76, -79, -82, -83, -85, -87, -87, -87, -90];
var co2PctData = [0, 3, 6, 10, 11, 13, 11, 12, 14, 15, 18, 15, 19, 17, 6, 13, 9, 2, 3, 3, -3, -8, -11, -11, -18, -27, -21, -22,-28];
var osnoxPctData = [null, null, 0,6,-5,-14,-21,-26,-38,-53,-51,-54,-55,-58,-67,-64,-65,-69,-71,-73,-76,-78,-82,-83,-85,-87,-86,-87, -89];
//End percent change data

//Percent change chart
Highcharts.chart('pctChangeContainer', {
  credits: false,
  title: {
    text: "Annual Percent Change of Emissions, 1995-2023",
    //style: {
    //  fontWeight: 'bold'
    //}
  },
  yAxis: {
    min: -100,
    title: {
      text: 'Percent Change (%)'
    },
    labels: {
      formatter: function() {
        return this.value + "%";
      }
    },
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    plotLines: [{
      value: 0,
      width: 1,
      color: '#aaa',
      zIndex: 10
    }],
  },
  xAxis: {
    categories: pctYears,
    tickInterval: 1,
    tickLength: 10,
    tickWidth: 1,
    tickmarkPlacement: "on",
  },
  legend: {
        width: '105%',
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal',
padding: 0,
x: 25,
  reversed: true,
        useHTML: true,
        labelFormatter: function() {
        if(this.name=="Sulfur Dioxide"){
        return "<span style='display: block; text-align: center; overflow: auto;'>Sulfur Dioxide" + "<br>" + "<span style='color: #058dc7; font-size: 1.4em;'>-96%</span></span>"
        }
               else if(this.name=="Annual Nitrogen Oxides"){
        return "<span style='display: block; text-align: center; overflow: auto;'>Annual Nitrogen Oxides" + "<br>" + "<span style='color: orange; font-size: 1.4em;'>-90%</span></span>"
        }
                       else if(this.name=="Ozone Season Nitrogen Oxides"){
        return "<span style='display: block; text-align: center; overflow: auto;'>Ozone Season Nitrogen Oxides" + "<br>" + "<span style='color: orangered; font-size: 1.4em;'>-89%</span></span>"
        }
                              else if(this.name=="Carbon Dioxide"){
        return "<span style='display: block; text-align: center; overflow: auto;'>Carbon Dioxide" + "<br>" + "<span style='color: grey; font-size: 1.4em;'>-28%</span></span>"
        }
       
  },
  },
  series: [
          {
      marker: {
        symbol: 'circle'
      },
      name: 'Carbon Dioxide',
      color: "grey",
      data: co2PctData,
    },
  {
        marker: {
        symbol: 'circle'
      },
      name: "Ozone Season Nitrogen Oxides",
      color: "orangered",
      data: osnoxPctData,
    },
        {
      marker: {
        symbol: 'circle'
      },
      name: 'Annual Nitrogen Oxides',
      color: "orange",
      data: noxPctData,
    },
  {
      marker: {
        symbol: 'circle'
      },
      name: 'Sulfur Dioxide',
      color: "#058DC7",
      data: so2PctData,
    },
  ],
  tooltip: {
    valueSuffix: '%'
  },
  exporting: {
sourceWidth: 875,
sourceHeight: 500,
    menuItemDefinitions: {
      // Custom definition
      xls: {
        onclick: function() {
//update this to the new URL for the data download file each year
          window.open('https://www.epa.gov/system/files/documents/2024-07/view-2023-capd-emissions-data.xlsx');
        },
        text: 'Download data'
      }
    },
    buttons: {
      contextButton: {
        menuItems: ['viewFullscreen', 'xls', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadSVG']
      }
    }
  }
});
//End percent change chart


//Default U.S. Data for map bar chart - update the last number for the current report year
var defaultSO2Data = [15733106, 11202078, 5120758, 787212, 650377];
var defaultNOxData = [6410541, 5104634, 2063093, 737094, 639686];
var defaultOSNOxData = [2200535, 914497, 341183, 294435];
var defaultMATSData = [53509, 7418, 5284, 5761, 4771];
var defaultCO2Data = [2157600978, 2451451814, 2432423278, 1583478768, 1554734854];
//Captions/notes for SO2 Figure 1
var figure1SO2Captions = "Notes:<br/>• 1991-1994 data are not available for Sulfur Dioxide.";
//Captions/notes for SO2 Figure 3
var figure3SO2Captions = "Notes:<br/>• The data shown here reflect totals for those units required to comply with each program in each respective year. This means that the CSAPR-only SO₂ program units are not included in the SO₂ data prior to 2015.<br/>• Fuel type represents primary fuel type; units might combust more than one fuel.";
//Captions/notes for NOx Figure 1
var figure1NOxCaptions = "Notes:<br/>• 1991-1994 data are not available for Nitrogen Oxides.";
//Captions/notes for NOx Figure 3
var figure3NOxCaptions = "Notes:<br />• The data shown here for the annual programs reflect totals for those units required to comply with each program in each respective year. This means that the CSAPR NOₓ annual program units are not included in the annual NOₓ emissions data prior to 2015.<br />• Fuel type represents primary fuel type; units might combust more than one fuel.";
//Captions/notes for Ozone Season NOx Figure 1
var figure1OSNOxCaptions = "Notes:<br/>• 1990-1996 data are not available for Ozone Season Nitrogen Oxides.";
//Captions/notes for NOx Figure 3
var figure3OSNOxCaptions = "Notes:<br />• The data shown here for the ozone season program reflect totals for those units required to comply with each program in each respective year. This means that the CSAPR NOₓ ozone season only program units are not included in the ozone season NOₓ emissions data prior to 2015.<br />• Fuel type represents primary fuel type; units might combust more than one fuel.";
var figure3CO2Captions = "Notes:<br/>• Fuel type represents primary fuel type; units might combust more than one fuel.";
//Captions/notes for MATS Figure 1
var figure1MATSCaptions = "Notes:<br/>• Mercury emissions data are not available for 79 low emitting electricity generating units (LEEs).";
var figure1CO2Captions = "1990-1994 data are not available for Carbon Dioxide.";
var genData=[null,null,null,null,null,null,null,2.23,2.33,2.38,2.48,2.45,2.47,2.52,2.57,2.73,2.71,2.82,2.77,2.63,2.79,2.71,2.69,2.68,2.69,2.65,2.58,2.48,2.60,2.52,2.36,2.44,2.49,2.44];
var osGenData=[null,null,null,null,null,null,null,0.99,1.09,1.11,1.12,1.11,1.13,1.12,1.07,1.24,1.25,1.29,1.24,1.17,1.29,1.26,1.27,1.21,1.2,1.23,1.24,1.16,1.22,1.17,1.11,1.16,1.17];
var so2Data=[15.73,null,null,null,null,11.83,12.51,12.94,13.09,12.45,11.20,10.64,10.20,10.59,10.26,10.22,9.39,8.93,7.62,5.82,5.17,4.55,3.32,3.24,3.16,2.22,1.49,1.34,1.26,0.97,0.79,0.94,0.85,0.65];
var noxData=[6.4,null,null,null,null,5.84,6.01,6.03,5.97,5.5,5.1,4.71,4.47,4.17,3.76,3.63,3.41,3.28,3.0,2.02,2.1,1.98,1.71,1.72,1.66,1.38,1.2,1.07,1.02,0.88,0.74,0.78,0.75,0.64];
var osnoxData=[null,null,null,null,null,null,null,2.57,2.72,2.45,2.20,2.03,1.9,1.6,1.2,1.27,1.18,1.15,1.07,0.82,0.91,0.87,0.77,0.73,0.68,0.62,0.55,0.47,0.44,0.39,0.34,0.36,0.32,0.29];
var matsData=[26.8, 4.2, 3.7, 3.2, 2.6, 3.0, 2.9, 2.4];
var co2Data=[null,null,null,null,null,2.16,2.23,2.3,2.38,2.39,2.45,2.39,2.42,2.47,2.48,2.54,2.49,2.57,2.52,2.3,2.45,2.35,2.21,2.23,2.23,2.09,1.99,1.92,1.93,1.77,1.59,1.7,1.7,1.56];


//Setting the states that should appear on the map
const basemapData = [['us-al', 0],  ['us-az', 0],  ['us-ar', 0],  ['us-ca', 0],  ['us-co', 1],  ['us-ct', 0],  ['us-de', 0],  ['us-dc', 0],  ['us-fl', 0],  ['us-ga', 1],  ['us-id', 0],  ['us-il', 12],  ['us-in', 13],  ['us-ia', 14],  ['us-ks', 15],  ['us-ky', 16],  ['us-la', 17],  ['us-me', 18],  ['us-md', 19],  ['us-ma', 20],  ['us-mi', 21],  ['us-mn', 22],  ['us-ms', 23],  ['us-mo', 24],  ['us-mt', 25],  ['us-ne', 26],  ['us-nv', 27],  ['us-nh', 28],  ['us-nj', 29],  ['us-nm', 30],  ['us-ny', 31],  ['us-nc', 32],  ['us-nd', 33],  ['us-oh', 34],  ['us-ok', 35],  ['us-or', 36],  ['us-pa', 37],  ['us-ri', 38],  ['us-sc', 39],  ['us-sd', 40],  ['us-tn', 41],  ['us-tx', 42],  ['us-ut', 43],  ['us-va', 0],  ['us-vt', 44],  ['us-wa', 46],  ['us-wv', 47],  ['us-wi', 48],  ['us-wy', 49]];
//List of CSAPR states. Add to this list using "us-" then the state
//abbreviation, followed by empty data (0) like the examples below
const csaprStates = [['us-al', 0],  ['us-ga', 0],  ['us-il', 0],  ['us-in', 0],  ['us-ia', 0],  ['us-ks', 0],  ['us-ky', 0],  ['us-md', 0],  ['us-mi', 0],  ['us-mn', 0],  ['us-mo', 0],  ['us-ne', 0],  ['us-nj', 0],  ['us-ny', 0],  ['us-nc', 0],  ['us-oh', 0],  ['us-pa', 0],  ['us-sc', 0],  ['us-tn', 0],  ['us-va', 0],  ['us-wv', 0],  ['us-wi', 0]];
//1990 State SO2 Data
const so2MapData1990 = [["us-al", 528627],  ["us-ar", 69160],  ["us-az", 119898],  ["us-ca", 7365],  ["us-co", 83186],  ["us-ct", 52408],  ["us-dc", 2523],  ["us-de", 46741],  ["us-fl", 645131],  ["us-ga", 874630],  ["us-ia", 173033],  ["us-id", 0],  ["us-il", 893793],  ["us-in", 1499176],  ["us-ks", 87676],  ["us-ky", 905084],  ["us-la", 98703],  ["us-ma", 232012],  ["us-md", 282453],  ["us-me", 11330],  ["us-mi", 369845],  ["us-mn", 81166],  ["us-mo", 775726],  ["us-ms", 119071],  ["us-mt", 17922],  ["us-nc", 336451],  ["us-nd", 123464],  ["us-ne", 50378],  ["us-nh", 67863],  ["us-nj", 74979],  ["us-nm", 63839],  ["us-nv", 55780],  ["us-ny", 414789],  ["us-oh", 2211606],  ["us-ok", 101852],  ["us-or", 4936],  ["us-pa", 1213385],  ["us-ri", 1090],  ["us-sc", 167414],  ["us-sd", 28906],  ["us-tn", 796528],  ["us-tx", 462345],  ["us-ut", 32051],  ["us-va", 158626],  ["us-vt", 0],  ["us-wa", 58434],  ["us-wi", 282243],  ["us-wv", 968611],  ["us-wy", 80877]];
//2000 State SO2 Data
const so2MapData2000 = [["us-al", 512075],  ["us-ar", 75057],  ["us-az", 71556],  ["us-ca", 380],  ["us-co", 87176],  ["us-ct", 36918],  ["us-dc", 958],  ["us-de", 40291],  ["us-fl", 570061],  ["us-ga", 518746],  ["us-ia", 137267],  ["us-id", 2],  ["us-il", 429850],  ["us-in", 874617],  ["us-ks", 116285],  ["us-ky", 584917],  ["us-la", 110401],  ["us-ma", 112039],  ["us-md", 252829],  ["us-me", 10593],  ["us-mi", 369830],  ["us-mn", 93072],  ["us-mo", 222724],  ["us-ms", 129913],  ["us-mt", 20247],  ["us-nc", 453442],  ["us-nd", 149806],  ["us-ne", 60234],  ["us-nh", 51326],  ["us-nj", 60037],  ["us-nm", 68617],  ["us-nv", 53203],  ["us-ny", 283345],  ["us-oh", 1209458],  ["us-ok", 93417],  ["us-or", 14387],  ["us-pa", 935168],  ["us-ri", 6],  ["us-sc", 200301],  ["us-sd", 13533],  ["us-tn", 424973],  ["us-tx", 557510],  ["us-ut", 27202],  ["us-va", 214232],  ["us-vt", 9],  ["us-wa", 83623],  ["us-wi", 196830],  ["us-wv", 593315],  ["us-wy", 80300]];
//2010 State SO2 Data
const so2MapData2010 = [["us-al", 204189],  ["us-ar", 67084],  ["us-az", 36445],  ["us-ca", 227],  ["us-co", 45862],  ["us-ct", 1955],  ["us-dc", 874],  ["us-de", 14492],  ["us-fl", 138345],  ["us-ga", 218836],  ["us-ia", 104650],  ["us-id", 3],  ["us-il", 220093],  ["us-in", 414764],  ["us-ks", 45251],  ["us-ky", 271509],  ["us-la", 98505],  ["us-ma", 36892],  ["us-md", 28670],  ["us-me", 820],  ["us-mi", 242188],  ["us-mn", 41574],  ["us-mo", 236217],  ["us-ms", 54696],  ["us-mt", 19896],  ["us-nc", 116627],  ["us-nd", 124096],  ["us-ne", 64184],  ["us-nh", 36834],  ["us-nj", 13011],  ["us-nm", 16570],  ["us-nv", 7889],  ["us-ny", 46797],  ["us-oh", 572127],  ["us-ok", 85135],  ["us-or", 15696],  ["us-pa", 393196],  ["us-ri", 18],  ["us-sc", 94613],  ["us-sd", 12589],  ["us-tn", 119023],  ["us-tx", 461871],  ["us-ut", 21598],  ["us-va", 91775],  ["us-vt", 2],  ["us-wa", 2661],  ["us-wi", 109472],  ["us-wv", 106088],  ["us-wy", 64849]];
//2020 State SO2 Data
const so2MapData2020 = [["us-al", 3280],  ["us-ar", 22230],  ["us-az", 8222],  ["us-ca", 173],  ["us-co", 9082],  ["us-ct", 131],  ["us-dc", 0],  ["us-de", 296],  ["us-fl", 16561],  ["us-ga", 6968],  ["us-ia", 17614],  ["us-id", 9],  ["us-il", 36063],  ["us-in", 37381],  ["us-ks", 4126],  ["us-ky", 37979],  ["us-la", 11699],  ["us-ma", 62],  ["us-md", 3279],  ["us-me", 53],  ["us-mi", 34465],  ["us-mn", 5799],  ["us-mo", 91937],  ["us-ms", 2629],  ["us-mt", 3572],  ["us-nc", 14994],  ["us-nd", 34383],  ["us-ne", 39549],  ["us-nh", 152],  ["us-nj", 1081],  ["us-nm", 3142],  ["us-nv", 2092],  ["us-ny", 975],  ["us-oh", 74032],  ["us-ok", 7365],  ["us-or", 2632],  ["us-pa", 33602],  ["us-ri", 18],  ["us-sc", 4966],  ["us-sd", 667],  ["us-tn", 9372],  ["us-tx", 129897],  ["us-ut", 7576],  ["us-va", 1525],  ["us-vt", 1],  ["us-wa", 1600],  ["us-wi", 4510],  ["us-wv", 33421],  ["us-wy", 26936]];
//Current Year State SO2 Data
const so2MapDataCurrent = [["us-al", 2024],  ["us-ar", 25935],  ["us-az", 6984],  ["us-ca", 184],  ["us-co", 9364],  ["us-ct", 194],  ["us-dc", 0],  ["us-de", 170],  ["us-fl", 10807],  ["us-ga", 7999],  ["us-ia", 18327],  ["us-id", 14],  ["us-il", 23813],  ["us-in", 24614],  ["us-ks", 3262],  ["us-ky", 34827],  ["us-la", 11601],  ["us-ma", 109],  ["us-md", 1621],  ["us-me", 146],  ["us-mi", 25694],  ["us-mn", 3844],  ["us-mo", 72614],  ["us-ms", 2798],  ["us-mt", 5567],  ["us-nc", 8886],  ["us-nd", 34297],  ["us-ne", 41722],  ["us-nh", 224],  ["us-nj", 77],  ["us-nm", 1846],  ["us-nv", 2868],  ["us-ny", 645],  ["us-oh", 40533],  ["us-ok", 9395],  ["us-or", 43],  ["us-pa", 23887],  ["us-ri", 23],  ["us-sc", 7425],  ["us-sd", 732],  ["us-tn", 7843],  ["us-tx", 104350],  ["us-ut", 4486],  ["us-va", 530],  ["us-vt", 1],  ["us-wa", 1239],  ["us-wi", 3633],  ["us-wv", 39162],  ["us-wy", 23995]];
//1990 State NOx Data
const noxMapData1990 = [  ["us-al", 187320],  ["us-ar", 39525],  ["us-az", 72730],  ["us-ca", 110601],  ["us-co", 88848],  ["us-ct", 22673],  ["us-dc", 23726],  ["us-de", 23726],  ["us-fl", 285785],  ["us-ga", 228804],  ["us-ia", 78309],  ["us-id", 0],  ["us-il", 259730],  ["us-in", 421752],  ["us-ks", 69366],  ["us-ky", 345010],  ["us-la", 85772],  ["us-ma", 92288],  ["us-md", 117580],  ["us-me", 3701],  ["us-mi", 205587],  ["us-mn", 83139],  ["us-mo", 193778],  ["us-ms", 48511],  ["us-mt", 31554],  ["us-nc", 204851],  ["us-nd", 100553],  ["us-ne", 32957],  ["us-nh", 30244],  ["us-nj", 65843],  ["us-nm", 95189],  ["us-nv", 48790],  ["us-ny", 174120],  ["us-oh", 534054],  ["us-ok", 89904],  ["us-or", 2837],  ["us-pa", 425206],  ["us-ri", 1965],  ["us-sc", 96473],  ["us-sd", 19149],  ["us-tn", 236504],  ["us-tx", 452174],  ["us-ut", 71108],  ["us-va", 84042],  ["us-vt", 189],  ["us-wa", 16915],  ["us-wi", 96246],  ["us-wv", 335021],  ["us-wy", 99414]];
//2000 State NOx Data
const noxMapData2000 = [  ["us-al", 181102],  ["us-ar", 51775],  ["us-az", 96490],  ["us-ca", 19868],  ["us-co", 70802],  ["us-ct", 12090],  ["us-dc", 273],  ["us-de", 10494],  ["us-fl", 292508],  ["us-ga", 184552],  ["us-ia", 78663],  ["us-id", 112],  ["us-il", 227287],  ["us-in", 334522],  ["us-ks", 90638],  ["us-ky", 246632],  ["us-la", 98590],  ["us-ma", 31828],  ["us-md", 78474],  ["us-me", 2960],  ["us-mi", 161039],  ["us-mn", 83544],  ["us-mo", 158317],  ["us-ms", 62142],  ["us-mt", 34844],  ["us-nc", 160858],  ["us-nd", 78676],  ["us-ne", 42425],  ["us-nh", 8648],  ["us-nj", 29470],  ["us-nm", 86287],  ["us-nv", 46492],  ["us-ny", 81876],  ["us-oh", 375155],  ["us-ok", 92930],  ["us-or", 8510],  ["us-pa", 209330],  ["us-ri", 334],  ["us-sc", 87775],  ["us-sd", 17057],  ["us-tn", 156010],  ["us-tx", 382025],  ["us-ut", 75484],  ["us-va", 81228],  ["us-vt", 320],  ["us-wa", 20206],  ["us-wi", 105949],  ["us-wv", 259229],  ["us-wy", 88814]
];
//2010 State NOx Data
const noxMapData2010 = [
["us-al", 63290], ["us-ar", 37786], ["us-az", 60524], ["us-ca", 4502], ["us-co", 54876], ["us-ct", 2053], ["us-dc", 373], ["us-de", 4131], ["us-fl", 73148], ["us-ga", 60522], ["us-ia", 44443], ["us-id", 113], ["us-il", 76300], ["us-in", 120924], ["us-ks", 48947], ["us-ky", 91824], ["us-la", 46575], ["us-ma", 7851], ["us-md", 18572], ["us-me", 719], ["us-mi", 76130], ["us-mn", 31173], ["us-mo", 58364], ["us-ms", 29773], ["us-mt", 21728], ["us-nc", 49611], ["us-nd", 54744], ["us-ne", 37417], ["us-nh", 4778], ["us-nj", 6436], ["us-nm", 60258], ["us-nv", 10812], ["us-ny", 23711], ["us-oh", 104839], ["us-ok", 71439], ["us-or", 9730], ["us-pa", 125486], ["us-ri", 578], ["us-sc", 26794], ["us-sd", 12433], ["us-tn", 31074], ["us-tx", 146105], ["us-ut", 61415], ["us-va", 33085], ["us-vt", 143], ["us-wa", 11980], ["us-wi", 33289], ["us-wv", 51393], ["us-wy", 60902]
];
//2020 State NOx Data
const noxMapData2020 = [
["us-al", 13764], ["us-ar", 12646], ["us-az", 16194], ["us-ca", 2385], ["us-co", 16725], ["us-ct", 870], ["us-dc", 0], ["us-de", 392], ["us-fl", 29632], ["us-ga", 13396], ["us-ia", 11905], ["us-id", 331], ["us-il", 19264], ["us-in", 39588], ["us-ks", 11374], ["us-ky", 28624], ["us-la", 22689], ["us-ma", 593], ["us-md", 2258], ["us-me", 144], ["us-mi", 24657], ["us-mn", 9963], ["us-mo", 50814], ["us-ms", 13237], ["us-mt", 6954], ["us-nc", 22859], ["us-nd", 29897], ["us-ne", 17861], ["us-nh", 565], ["us-nj", 2464], ["us-nm", 12624], ["us-nv", 3846], ["us-ny", 6813], ["us-oh", 40388], ["us-ok", 16464], ["us-or", 2535], ["us-pa", 24960], ["us-ri", 484], ["us-sc", 8072], ["us-sd", 997], ["us-tn", 6929], ["us-tx", 81106], ["us-ut", 27373], ["us-va", 8824], ["us-vt", 124], ["us-wa", 6042], ["us-wi", 10806], ["us-wv", 29876], ["us-wy", 26795]
];
//Current Year State NOx Data
const noxMapDataCurrent = [  ["us-al", 12536],  ["us-ar", 14664],  ["us-az", 12972],  ["us-ca", 2497],  ["us-co", 13562],  ["us-ct", 848],  ["us-dc", 0],  ["us-de", 388],  ["us-fl", 25074],  ["us-ga", 15184],  ["us-ia", 13348],  ["us-id", 567],  ["us-il", 12141],  ["us-in", 29526],  ["us-ks", 10409],  ["us-ky", 29982],  ["us-la", 18296],  ["us-ma", 639],  ["us-md", 2012],  ["us-me", 255],  ["us-mi", 21983],  ["us-mn", 9310],  ["us-mo", 34910],  ["us-ms", 11811],  ["us-mt", 9088],  ["us-nc", 23658],  ["us-nd", 28545],  ["us-ne", 18383],  ["us-nh", 747],  ["us-nj", 1751],  ["us-nm", 6208],  ["us-nv", 3552],  ["us-ny", 6617],  ["us-oh", 21844],  ["us-ok", 18635],  ["us-or", 796],  ["us-pa", 12829],  ["us-ri", 618],  ["us-sc", 10619],  ["us-sd", 1086],  ["us-tn", 7335],  ["us-tx", 82860],  ["us-ut", 19077],  ["us-va", 5812],  ["us-vt", 109],  ["us-wa", 4900],  ["us-wi", 9912], ["us-wv", 27477], ["us-wy", 24314]];
//2000 State Ozone Season NOx Data
const osnoxMapData2000 = [ ["us-al", 79034], ["us-ar", 26318], ["us-az", 43201], ["us-ca", 10479], ["us-co", 29677], ["us-ct", 4205], ["us-dc", 134], ["us-de", 4109], ["us-fl", 144188], ["us-ga", 85499], ["us-ia", 32486], ["us-id", 48], ["us-il", 100813], ["us-in", 133880], ["us-ks", 41055], ["us-ky", 101525], ["us-la", 47924], ["us-ma", 12454], ["us-md", 27002], ["us-me", 979], ["us-mi", 73146], ["us-mn", 35115], ["us-mo", 65569], ["us-ms", 28065], ["us-mt", 12046], ["us-nc", 65795], ["us-nd", 33188], ["us-ne", 18494], ["us-nh", 2032], ["us-nj", 10503], ["us-nm", 38863], ["us-nv", 20662], ["us-ny", 33329], ["us-oh", 155724], ["us-ok", 44599], ["us-or", 2253], ["us-pa", 80093], ["us-ri", 132], ["us-sc", 38538], ["us-sd", 6836], ["us-tn", 66331], ["us-tx", 184713], ["us-ut", 33061], ["us-va", 34477], ["us-vt", 137], ["us-wa", 7157], ["us-wi", 43838], ["us-wv", 105151], ["us-wy", 35680]];
//2010 State Ozone Season NOx Data
const osnoxMapData2010 = [ ["us-al", 27469], ["us-ar", 18299], ["us-az", 26728], ["us-ca", 2016], ["us-co", 23256], ["us-ct", 1299], ["us-dc", 350], ["us-de", 2150], ["us-fl", 34350], ["us-ga", 26779], ["us-ia", 18725], ["us-id", 54], ["us-il", 28040], ["us-in", 52553], ["us-ks", 22342], ["us-ky", 39030], ["us-la", 22869], ["us-ma", 3358], ["us-md", 8979], ["us-me", 350], ["us-mi", 32877], ["us-mn", 13803], ["us-mo", 25467], ["us-ms", 16088], ["us-mt", 8403], ["us-nc", 22457], ["us-nd", 21598], ["us-ne", 15621], ["us-nh", 2150], ["us-nj", 3532], ["us-nm", 27097], ["us-nv", 4634], ["us-ny", 11713], ["us-oh", 47547], ["us-ok", 34917], ["us-or", 3134], ["us-pa", 54910], ["us-ri", 253], ["us-sc", 13017], ["us-sd", 4675], ["us-tn", 14505], ["us-tx", 68582], ["us-ut", 26952], ["us-va", 15907], ["us-vt", 62], ["us-wa", 4297], ["us-wi", 14480], ["us-wv", 23437], ["us-wy", 23546]];
//2020 State Ozone Season NOx Data
const osnoxMapData2020 = [ ["us-al", 7285], ["us-ar", 7546], ["us-az", 8351], ["us-ca", 1116], ["us-co", 6967], ["us-ct", 460], ["us-dc", 0], ["us-de", 258], ["us-fl", 13856], ["us-ga", 5128], ["us-ia", 5971], ["us-id", 137], ["us-il", 9622], ["us-in", 15209], ["us-ks", 5586], ["us-ky", 12219], ["us-la", 12760], ["us-ma", 318], ["us-md", 1281], ["us-me", 79], ["us-mi", 8681], ["us-mn", 4329], ["us-mo", 21224], ["us-ms", 7901], ["us-mt", 2254], ["us-nc", 11849], ["us-nd", 12162], ["us-ne", 7671], ["us-nh", 200], ["us-nj", 577], ["us-nm", 5840], ["us-nv", 2296], ["us-ny", 2923], ["us-oh", 13732], ["us-ok", 10281], ["us-or", 1207], ["us-pa", 10925], ["us-ri", 248], ["us-sc", 3894], ["us-sd", 383], ["us-tn", 4043], ["us-tx", 40611], ["us-ut", 11782], ["us-va", 3850], ["us-vt", 44], ["us-wa", 1848], ["us-wi", 5000], ["us-wv", 13888], ["us-wy", 11076]];
//Current Year State Ozone Season NOx Data
const osnoxMapDataCurrent = [ ["us-al", 6576], ["us-ar", 8379], ["us-az", 5885], ["us-ca", 1050], ["us-co", 5568], ["us-ct", 336], ["us-dc", 0], ["us-de", 238], ["us-fl", 12604], ["us-ga", 5403], ["us-ia", 7799], ["us-id", 228], ["us-il", 5301], ["us-in", 8682], ["us-ks", 5154], ["us-ky", 11902], ["us-la", 10051], ["us-ma", 328], ["us-md", 1235], ["us-me", 113], ["us-mi", 7308], ["us-mn", 3919], ["us-mo", 10131], ["us-ms", 6174], ["us-mt", 3389], ["us-nc", 12037], ["us-nd", 12043], ["us-ne", 8987], ["us-nh", 240], ["us-nj", 647], ["us-nm", 3035], ["us-nv", 1618], ["us-ny", 3098], ["us-oh", 7061], ["us-ok", 12422], ["us-or", 314], ["us-pa", 5463], ["us-ri", 330], ["us-sc", 5407], ["us-sd", 628], ["us-tn", 3728], ["us-tx", 46908], ["us-ut", 7704], ["us-va", 2062], ["us-vt", 43], ["us-wa", 1574], ["us-wi", 5036], ["us-wv", 10972], ["us-wy", 10378] ];
//2010 state MATS data
const matsMapData2010 = [["us-ak", 9], ["us-al", 2046], ["us-ar", 1191], ["us-az", 1207],  ["us-ca", 1], ["us-co", 753], ["us-de", 55], ["us-fl", 1195], ["us-ga", 1578], ["us-ia", 1879], ["us-il", 1485], ["us-in", 2229], ["us-ks", 1248], ["us-ky", 1563], ["us-la", 1764], ["us-ma", 87], ["us-md", 236], ["us-me", 14], ["us-mi", 2049], ["us-mn", 907], ["us-mo", 2344], ["us-ms", 906], ["us-mt", 238], ["us-nc", 1414], ["us-nd", 3280], ["us-ne", 1381], ["us-nh", 210], ["us-nj", 94], ["us-nm", 186], ["us-nv", 16], ["us-ny", 249], ["us-oh", 2912], ["us-ok", 1031], ["us-or", 135], ["us-pa", 2728], ["us-sc", 465], ["us-sd", 188], ["us-tn", 1615], ["us-tx", 6814], ["us-ut", 392], ["us-va", 716], ["us-wa", 296], ["us-wi", 1272], ["us-wv", 1432], ["us-wy", 1607]];
//2018 state MATS data
const matsMapData2018 = [["us-ak", 0], ["us-al", 157], ["us-ar", 205], ["us-az", 229], ["us-ca", 0], ["us-co", 138], ["us-de", 2], ["us-fl", 89], ["us-ga", 172], ["us-ia", 144], ["us-il", 337], ["us-in", 344], ["us-ks", 99], ["us-ky", 292], ["us-la", 101], ["us-ma", 0], ["us-md", 37], ["us-me", 0], ["us-mi", 229], ["us-mn", 125], ["us-mo", 404], ["us-ms", 23], ["us-mt", 109], ["us-nc", 144], ["us-nd", 914], ["us-ne", 149], ["us-nh", 4], ["us-nj", 0], ["us-nm", 25], ["us-nv", 13], ["us-ny", 1], ["us-oh", 336], ["us-ok", 105], ["us-or", 7], ["us-pa", 151], ["us-sc", 67], ["us-sd", 14], ["us-tn", 96], ["us-tx", 1327], ["us-ut", 0], ["us-va", 14], ["us-wa", 42], ["us-wi", 149], ["us-wv", 319], ["us-wy", 305]];
//2020 state MATS data
const matsMapData2020 = [["us-ak", 7], ["us-al", 115], ["us-ar", 99], ["us-az", 98], ["us-ca", 0], ["us-co", 99], ["us-de", 1], ["us-fl", 42], ["us-ga", 73], ["us-ia", 74], ["us-il", 162], ["us-in", 228], ["us-ks", 83], ["us-ky", 187], ["us-la", 40], ["us-ma", 0], ["us-md", 11], ["us-me", 0], ["us-mi", 157], ["us-mn", 93], ["us-mo", 345], ["us-ms", 47], ["us-mt", 63], ["us-nc", 117], ["us-nd", 829], ["us-ne", 109], ["us-nh", 1], ["us-nj", 0], ["us-nm", 26], ["us-nv", 9], ["us-ny", 0], ["us-oh", 161], ["us-ok", 41], ["us-or", 8], ["us-pa", 114], ["us-sc", 52], ["us-sd", 3], ["us-tn", 27], ["us-tx", 1145], ["us-ut", 0], ["us-va", 3], ["us-wa", 57], ["us-wi", 87], ["us-wv", 210], ["us-wy", 254]];
//2022 state MATS data
const matsMapData2022 = [["us-ak", 6], ["us-al", 189], ["us-ar", 127], ["us-az", 92], ["us-ca", 0], ["us-co", 129], ["us-de", 1], ["us-fl", 47], ["us-ga", 63], ["us-ia", 115], ["us-il", 225], ["us-in", 229], ["us-ks", 80], ["us-ky", 197], ["us-la", 61], ["us-ma", 0], ["us-md", 18], ["us-me", 0], ["us-mi", 200], ["us-mn", 120], ["us-mo", 313], ["us-ms", 70], ["us-mt", 69], ["us-nc", 100], ["us-nd", 857], ["us-ne", 112], ["us-nh", 1], ["us-nj", 0], ["us-nm", 40], ["us-nv", 15], ["us-ny", 0], ["us-oh", 174], ["us-ok", 73], ["us-or", 0], ["us-pa", 90], ["us-sc", 63], ["us-sd", 10], ["us-tn", 70], ["us-tx", 1136], ["us-ut", 0], ["us-va", 6], ["us-wa", 29], ["us-wi", 90], ["us-wv", 241], ["us-wy", 302]];
//Current year state MATS data
const matsMapDataCurrent = [["us-ak", 5], ["us-al", 116], ["us-ar", 111], ["us-az", 93], ["us-ca", 0], ["us-co", 129], ["us-de", 0], ["us-fl", 48], ["us-ga", 73], ["us-ia", 80], ["us-il", 124], ["us-in", 182], ["us-ks", 49], ["us-ky", 166], ["us-la", 33], ["us-ma", 0], ["us-md", 4], ["us-me", 0], ["us-mi", 130], ["us-mn", 90], ["us-mo", 247], ["us-ms", 70], ["us-mt", 75], ["us-nc", 96], ["us-nd", 772], ["us-ne", 97], ["us-nh", 1], ["us-nj", 0], ["us-nm", 27], ["us-nv", 12], ["us-ny", 0], ["us-oh", 139], ["us-ok", 42], ["us-or", 0], ["us-pa", 28], ["us-sc", 76], ["us-sd", 6], ["us-tn", 82], ["us-tx", 905], ["us-ut", 0], ["us-va", 1], ["us-wa", 30], ["us-wi", 87], ["us-wv", 253], ["us-wy", 292]];

//1990 State CO2 Data
const co2MapData1995 = [  ["us-al", 75079806],  ["us-ar", 27535504],  ["us-az", 36664010],  ["us-ca", 22035846],  ["us-co", 34470650],  ["us-ct", 6194220],  ["us-dc", 218461],  ["us-de", 7095370],  ["us-fl", 107968766],  ["us-ga", 73302450],  ["us-ia", 38270770],  ["us-id", 173035],  ["us-il", 82652988],  ["us-in", 123282473],  ["us-ks", 35425941],  ["us-ky", 100026432],  ["us-la", 41519341],  ["us-ma", 19139278],  ["us-md", 32512481],  ["us-me", 848139],  ["us-mi", 66348051],  ["us-mn", 34252317],  ["us-mo", 64864808],  ["us-ms", 18196499],  ["us-mt", 17034892],  ["us-nc", 61192891],  ["us-nd", 36792194],  ["us-ne", 19027344],  ["us-nh", 4859100],  ["us-nj", 10228856],  ["us-nm", 31321954],  ["us-nv", 20453871],  ["us-ny", 54000913],  ["us-oh", 131253325],  ["us-ok", 42623108],  ["us-or", 1861637],  ["us-pa", 141620885],  ["us-ri", 270330],  ["us-sc", 27501278],  ["us-sd", 3133447],  ["us-tn", 66079743],  ["us-tx", 189233253],  ["us-ut", 37476749],  ["us-va", 28753807],  ["us-vt", 209528],  ["us-wa", 6946854],  ["us-wi", 47032042],  ["us-wv", 81572841],  ["us-wy", 49042500]];
//2000 State CO2 Data
const co2MapData2000 = [  ["us-al", 88806364],  ["us-ar", 31886795],  ["us-az", 49404158],  ["us-ca", 41068209],  ["us-co", 41883007],  ["us-ct", 9747714],  ["us-dc", 173186],  ["us-de", 6240205],  ["us-fl", 127617422],  ["us-ga", 85426769],  ["us-ia", 40307118],  ["us-id", 419440],  ["us-il", 94666352],  ["us-in", 139331418],  ["us-ks", 41430221],  ["us-ky", 103637012],  ["us-la", 54064750],  ["us-ma", 21470002],  ["us-md", 32660929],  ["us-me", 3156289],  ["us-mi", 76961860],  ["us-mn", 38796256],  ["us-mo", 73923988],  ["us-ms", 24290634],  ["us-mt", 18400545],  ["us-nc", 74056727],  ["us-nd", 37150465],  ["us-ne", 21602701],  ["us-nh", 5178730],  ["us-nj", 11194723],  ["us-nm", 35977993],  ["us-nv", 24422530],  ["us-ny", 57114439],  ["us-oh", 136413489],  ["us-ok", 45685955],  ["us-or", 6481876],  ["us-pa", 112322935],  ["us-ri", 1182345],  ["us-sc", 41170491],  ["us-sd", 4224849],  ["us-tn", 64243056],  ["us-tx", 243736710],  ["us-ut", 37533163],  ["us-va", 39663882],  ["us-vt", 404811],  ["us-wa", 11149303],  ["us-wi", 51880119],  ["us-wv", 91711604],  ["us-wy", 51178275]];
//2010 State CO2 Data
const co2MapData2010 = [["us-al", 85171207], ["us-ar", 36654388], ["us-az", 60713242], ["us-ca", 37086792], ["us-co", 45099380], ["us-ct", 6652568], ["us-dc", 220765], ["us-de", 3939747], ["us-fl", 131136979], ["us-ga", 87577540], ["us-ia", 45401248], ["us-id", 693069], ["us-il", 107086483], ["us-in", 124350073], ["us-ks", 39756090], ["us-ky", 101674687], ["us-la", 52660501], ["us-ma", 19480390], ["us-md", 26328311], ["us-me", 3943457], ["us-mi", 74375752], ["us-mn", 34123982], ["us-mo", 83255296], ["us-ms", 30618950], ["us-mt", 21356366], ["us-nc", 74293631], ["us-nd", 33609781], ["us-ne", 26402128], ["us-nh", 6420303], ["us-nj", 14638010], ["us-nm", 32658815], ["us-nv", 17182378], ["us-ny", 40292436], ["us-oh", 125084089], ["us-ok", 49871771], ["us-or", 10873651], ["us-pa", 123507628], ["us-ri", 3504392], ["us-sc", 44782132], ["us-sd", 3765614], ["us-tn", 46553657], ["us-tx", 257125054], ["us-ut", 36985780], ["us-va", 32598616], ["us-vt", 444647], ["us-wa", 14560989], ["us-wi", 50189072], ["us-wv", 78338976], ["us-wy", 49382465]];
//2020 State CO2 Data
const co2MapData2020 = [ ["us-al", 49577223], ["us-ar", 26064912], ["us-az", 38939092], ["us-ca", 34992425], ["us-co", 32729518], ["us-ct", 9367470], ["us-dc", 0], ["us-de", 1820150], ["us-fl", 101665832], ["us-ga", 43020679], ["us-ia", 18267241], ["us-id", 1807680], ["us-il", 46106951], ["us-in", 64715102], ["us-ks", 21574058], ["us-ky", 53697955], ["us-la", 38286766], ["us-ma", 6266731], ["us-md", 10161264], ["us-me", 867339], ["us-mi", 44463775], ["us-mn", 21773100], ["us-mo", 57522442], ["us-ms", 29514931], ["us-mt", 9714926], ["us-nc", 40194474], ["us-nd", 30155165], ["us-ne", 21493209], ["us-nh", 2619828], ["us-nj", 14883722], ["us-nm", 21228401], ["us-nv", 13310023], ["us-ny", 26841331], ["us-oh", 75005610], ["us-ok", 28587255], ["us-or", 9635341], ["us-pa", 77857197], ["us-ri", 3580279], ["us-sc", 24971410], ["us-sd", 2647503], ["us-tn", 22060599], ["us-tx", 200908612], ["us-ut", 28107741], ["us-va", 32756022], ["us-vt", 384305], ["us-wa", 12258196], ["us-wi", 36338110], ["us-wv", 53818573], ["us-wy", 40918300]];
//Current Year State CO2 Data
const co2MapDataCurrent = [  ["us-al", 49640122], ["us-ar", 31565803], ["us-az", 37161807], ["us-ca", 36662738], ["us-co", 30817222], ["us-ct", 9817576], ["us-dc", 0], ["us-de", 1490363], ["us-fl", 98417154], ["us-ga", 46311023], ["us-ia", 21897895], ["us-id", 2726038], ["us-il", 41367805], ["us-in", 60472486], ["us-ks", 20956335], ["us-ky", 54971233], ["us-la", 38922758], ["us-ma", 6417866], ["us-md", 9071174], ["us-me", 1664501], ["us-mi", 47776796], ["us-mn", 20898704], ["us-mo", 47802286], ["us-ms", 29947941], ["us-mt", 13228704], ["us-nc", 39806673], ["us-nd", 28434941], ["us-ne", 19838271], ["us-nh", 2888027], ["us-nj", 12371323], ["us-nm", 14936900], ["us-nv", 12867270], ["us-ny", 28037365], ["us-oh", 70304348], ["us-ok", 28423963], ["us-or", 8760623], ["us-pa", 74394531], ["us-ri", 4271126], ["us-sc", 28093120], ["us-sd", 3180189], ["us-tn", 25168401], ["us-tx", 208435436], ["us-ut", 22862293], ["us-va", 24461503], ["us-vt", 329390], ["us-wa", 12714632], ["us-wi", 35362308], ["us-wv", 50116828], ["us-wy", 38669063]];

//This section sets individual state data based on the mapData for each year - you will only need to update the data above, and it will automatically be reflected in the individual state data below.
//In 2031, add another item to each state array below like mapData2030[0][1] followed by the mapDataCurrent array.
//This section sets individual state data based on the mapData for each year - you will only need to update the data above, and it will automatically be reflected in the individual state data below.
//In 2031, add another item to each state array below like mapData2030[0][1] followed by the mapDataCurrent array.

//Don't change anything below this line for map functionality (until 2030)
var states = ["al","ar","az","ca","co","ct","dc","de","fl","ga","ia","id","il","in","ks","ky","la","md","ma","me","mi","mn","mo","ms","mt","nc","nd","ne","nh","nj","nm","nv","ny","oh","ok","or","pa","ri","sd","sc","tn","tx","ut","va","vt","wa","wi","wv","wy"];
var matsStates = ["ak", "al", "ar", "az", "ca", "co", "de", "fl", "ga", "ia", "il", "in", "ks", "ky", "la", "ma", "md", "me", "mi", "mn", "mo", "ms", "mt", "nc", "nd", "ne", "nh", "nj", "nm", "nv", "ny", "oh", "ok", "or", "pa", "sc", "sd", "tn", "tx", "ut", "va", "wa", "wi", "wv", "wy"];
var stateSO2Data = [];
var stateNOxData = [];
var stateOSNOxData = [];
var stateMATSData = [];
var stateCO2Data = [];
//Creating state-by-state data arrays based on data above
//For SO2 and NOx
for (var i = 0; i < states.length; i++) {
  stateSO2Data[i] = [so2MapData1990[i][1], so2MapData2000[i][1], so2MapData2010[i][1], so2MapData2020[i][1], so2MapDataCurrent[i][1]];
  window[states[i] + 'SO2Data'] = stateSO2Data[i];
stateNOxData[i] = [noxMapData1990[i][1], noxMapData2000[i][1], noxMapData2010[i][1], noxMapData2020[i][1], noxMapDataCurrent[i][1]];
  window[states[i] + 'NOxData'] = stateNOxData[i];
    stateCO2Data[i] = [co2MapData1995[i][1], co2MapData2000[i][1], co2MapData2010[i][1], co2MapData2020[i][1], co2MapDataCurrent[i][1]];
  window[states[i] + 'CO2Data'] = stateCO2Data[i];
}
//For Ozone Season NOx
for (var i = 0; i < states.length; i++) {
//OS NOx state-by-state data arrays
    stateOSNOxData[i] = [osnoxMapData2000[i][1], osnoxMapData2010[i][1], osnoxMapData2020[i][1], osnoxMapDataCurrent[i][1]];
  window[states[i] + 'OSNOxData'] = stateOSNOxData[i];
}
//For MATS
for (var i = 0; i < matsStates.length; i++) {
    stateMATSData[i] = [matsMapData2010[i][1], matsMapData2018[i][1], matsMapData2020[i][1], matsMapDataCurrent[i][1]];
  window[matsStates[i] + 'MATSData'] = stateMATSData[i];
}
//LOCAL EXPORTING
//The following code was borrowed from Highcharts Forums https://www.highcharts.com/forum/viewtopic.php?t=37189
//TOP AND BOTTOM CHART EXPORT
Highcharts.getSVG = function(charts) {
  var svgArr = [],
    top = 0,
    width = 0;

  Highcharts.each(charts, function(chart) {
    var svg = chart.getSVG(),
      // Get width/height of SVG for export
      svgWidth = +svg.match(
        /^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/
      )[1],
      svgHeight = +svg.match(
        /^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/
      )[1];

    svg = svg.replace(
      '<svg',
      '<g transform="translate(0,' + top + ')" '
    );
    svg = svg.replace('</svg>', '</g>');

    top += svgHeight;
    width = Math.max(width, svgWidth);

    svgArr.push(svg);
  });

  return '<svg height="' + top + '" width="' + width +
    '" version="1.1" xmlns="http://www.w3.org/2000/svg">' +
    svgArr.join('') + '</svg>';
};

/**
 * Create a global exportCharts method that takes an array of charts as an
 * argument, and exporting options as the second argument
 */
Highcharts.exportCharts = function(charts, options) {

  // Merge the options
  options = Highcharts.merge(Highcharts.getOptions().exporting, options);

  // Post to export server
  Highcharts.post(options.url, {
    filename: options.filename || 'chart',
    type: options.type,
    width: options.width,
    svg: Highcharts.getSVG(charts)
  });
};
//SIDE-TO-SIDE CHART EXPORT
Highcharts.getSVGSide = function(charts) {
  var svgArr = [],
    top = 0,
    width = 0;

  Highcharts.each(charts, function(chart, i) {
    var svg = chart.getSVG(),
      // Get width/height of SVG for export
      svgWidth = +svg.match(
        /^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/
      )[1],
      svgHeight = +svg.match(
        /^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/
      )[1];

    svg = svg.replace(
      '<svg',
      '<g transform="translate(' + i * svgWidth + ',' + 0 + ')" '
    );
    svg = svg.replace('</svg>', '</g>');

    top += svgHeight;
    width = Math.max(width, 2 * svgWidth);

    svgArr.push(svg);
  });

  return '<svg height="' + (top / 2) + '" width="' + width +
    '" version="1.1" xmlns="http://www.w3.org/2000/svg">' +
    svgArr.join('') + '</svg>';
};

/**
 * Create a global exportCharts method that takes an array of charts as an
 * argument, and exporting options as the second argument
 */
Highcharts.exportChartsSide = function(charts, options) {

  // Merge the options
  options = Highcharts.merge(Highcharts.getOptions().exporting, options);

  // Post to export server
  Highcharts.post(options.url, {
    filename: options.filename || 'chart',
    type: options.type,
    width: options.width,
    svg: Highcharts.getSVGSide(charts)
  });
};

//Data for final figures

var so2CoalDataTop = [10707589, 10055246, 9865496, 10149151, 9841549, 9835384, 9240311, 8764796, 7514057, 5653331, 5051638, 4478888, 3267930, 3194102, 3105147, 2185019, 1465798, 1316450, 1237424, 952180, 770281, 927253, 834239, 639136];
var so2GasDataTop = [108146, 147855, 61730, 104548, 105748, 91377, 40321, 44848, 29087, 22608, 19397, 6521, 6704, 5868, 7717, 8444, 9327, 7684, 10010, 5953, 5488, 7960, 9106, 6404];
var so2OilDataTop = [384430, 431970, 263340, 337250, 308046, 292159, 104371, 116568, 64341, 37943, 27918, 10714, 3800, 5910, 8918, 10579, 2664, 2046, 4578, 1010, 649, 735, 3368, 972];
var so2OtherDataTop = [1332, 1799, 4281, 3789, 3864, 3714, 7499, 7304, 8964, 8319, 21802, 7180, 5586, 6532, 5838, 12212, 12328, 11711, 11896, 10008, 10774, 6530, 4953, 3847];

var noxCoalDataTop = [4586560, 4240625, 4126292, 3859844, 3485343, 3355638, 3207495, 3068397, 2815864, 1823460, 1895979, 1782290, 1516372, 1561173, 1507394, 1212969, 1029334, 920124, 852972, 704524, 569017, 624103, 581632, 463759];
var noxGasDataTop = [354597, 302171, 235164, 194086, 167443, 167394, 148580, 158575, 142645, 136182, 142408, 136230, 146893, 121613, 113870, 145397, 154600, 132040, 157889, 163251, 160112, 146177, 158521, 168734];
var noxOilDataTop = [161677, 162232, 108462, 110445, 104232, 103913, 45660, 50673, 32761, 21368, 19523, 14147, 10753, 7206, 9108, 11924, 8739, 3934, 5993, 2399, 1718, 2544, 3904, 2202];
var noxOtherDataTop = [1522, 1536, 3781, 3418, 6177, 5764, 7336, 5469, 4997, 3314, 5128, 4588, 3989, 4567, 5801, 7450, 7005, 7252, 7215, 6404, 5976, 5736, 5404, 4316];

var osnoxCoalDataTop = [1926070, 1790649, 1711256, 1444615, 1067804, 1117342, 1065399, 1032673, 971511, 739497, 821341, 784687, 680083, 666456, 622372, 535114, 460832, 390448, 353832, 295777, 253062, 281819, 236521, 198027];
var osnoxGasDataTop = [195972, 160482, 128056, 105273, 86036, 95937, 83748, 86672, 76297, 72152, 78706, 76035, 81659, 63365, 54776, 72120, 84177, 69728, 85266, 89473, 84655, 73561, 83391, 93203];
var osnoxOilDataTop = [77891, 76482, 53425, 47741, 44166, 51672, 26616, 25280, 17448, 10232, 12422, 8042, 5920, 3680, 3051, 4689, 4466, 1883, 1775, 1214, 1146, 1035, 1332, 1195];
var osnoxOtherDataTop = [602, 657, 2015, 1071, 2582, 2393, 3242, 2398, 2195, 1278, 2027, 1727, 1592, 2042, 2544, 3578, 3716, 2825, 2754, 2671, 2197, 2878, 2645, 2009];

var co2CoalDataTop = [2123107969, 2050109720, 2078930725, 2114975593, 2106706186, 2137462605, 2104626621, 2136059965, 2100071827, 1874382949, 1981609112, 1870977790, 1646548270, 1716601248, 1713156302, 1494904437, 1380408734, 1342807658, 1276627206, 1077206098, 873814116, 1006916935, 946320389, 778754687];
var co2GasDataTop = [245979120, 262575560, 277713491, 281417762, 305997109, 334248567, 352275901, 389099521, 385269877, 395865700, 423226016, 432258053, 521347041, 476669865, 480477941, 575041025, 593275182, 554580859, 632582801, 674952766, 693135713, 671708873, 719436578, 766912225];
var co2OilDataTop = [81202365, 80426554, 63854267, 65872700, 62400042, 64772869, 30951735, 34088810, 25017363, 17314315, 18278788, 13320180, 11845407, 8004957, 8296879, 10413113, 7469428, 3225498, 4758743, 2314010, 1641367, 1481510, 2720510, 1929458];
var co2OtherDataTop = [1162364, 1161583, 1954023, 1875195, 2947234, 2912506, 5394441, 5829587, 6718680, 6375795, 7967753, 8754710, 7729516, 10076393, 13353130, 13101479, 13073532, 13762463, 14117502, 11768317, 11925784, 13292346, 12580061, 9507614];

var so2CoalDataBottom = [2014141164, 1946276123, 1966888180, 2018352250, 2021197052, 2058988791, 2039272267, 2061841197, 2027959218, 1819291910, 1918277344, 1808118031, 1584916611, 1660636289, 1656998215, 1433366404, 1320277012, 1285802128, 1227456385, 1032277454, 832509441, 963991138, 906902785, 743193014];
var so2GasDataBottom = [366636640, 404375732, 428904777, 424387336, 474654252, 595509907, 628324800, 714632070, 706606532, 758352516, 810625123, 846988073, 1050913794, 974466475, 980088223, 1191630846, 1238564059, 1174496424, 1349290456, 1462538809, 1508415933, 1459017785, 1562252167, 1680762424];
var so2OilDataBottom = [93302790, 93215807, 75284942, 75011271, 72675422, 75657106, 39358066, 44327406, 33319568, 25080809, 27165353, 20132607, 19536727, 13198979, 14068619, 17247903, 14060787, 6358729, 8450213, 3958215, 2180465, 2042937, 3573701, 2697225];
var so2OtherDataBottom = [2296490, 2656505, 1672492, 902315, 1748406, 1716096, 2031195, 2517899, 2877085, 2875301, 3832958, 5334007, 4633171, 6649203, 8080785, 7245485, 7074216, 7249505, 7509531, 5676098, 5806498, 6772544, 5989504, 3776143];

var noxCoalDataBottom = [2014141164, 1946276123, 1966888180, 2018352250, 2021197052, 2058988791, 2039272267, 2061841197, 2027959218, 1819291910, 1918277344, 1808118031, 1584916611, 1660636289, 1656998215, 1433366404, 1320277012, 1285802128, 1227456385, 1032277454, 832509441, 963991138, 906902785, 743193014];
var noxGasDataBottom = [366636640, 404375732, 428904777, 424387336, 474654252, 595509907, 628324800, 714632070, 706606532, 758352516, 810625123, 846988073, 1050913794, 974466475, 980088223, 1191630846, 1238564059, 1174496424, 1349290456, 1462538809, 1508415933, 1459017785, 1562252167, 1680762424];
var noxOilDataBottom = [93302790, 93215807, 75284942, 75011271, 72675422, 75657106, 39358066, 44327406, 33319568, 25080809, 27165353, 20132607, 19536727, 13198979, 14068619, 17247903, 14060787, 6358729, 8450213, 3958215, 2180465, 2042937, 3573701, 2697225];
var noxOtherDataBottom = [2296490, 2656505, 1672492, 902315, 1748406, 1716096, 2031195, 2517899, 2877085, 2875301, 3832958, 5334007, 4633171, 6649203, 8080785, 7245485, 7074216, 7249505, 7509531, 5676098, 5806498, 6772544, 5989504, 3776143];

var osnoxCoalDataBottom = [871884532, 849480250, 862132953, 864479248, 799908738, 895294399, 886791870, 896005528, 873583522, 766339605, 846292400, 817205764, 718461815, 727331736, 713074482, 658579757, 621006904, 582740267, 549412504, 460917816, 389427690, 464022169, 408740365, 349751676];
var osnoxGasDataBottom = [199506231, 211697654, 229420438, 221067328, 237721390, 309960059, 339640840, 366085680, 341781699, 377222445, 407457066, 416906811, 518112393, 457590385, 461726181, 561796040, 608074589, 572099057, 667716791, 706224244, 713380905, 692684268, 761718108, 812364310];
var osnoxOilDataBottom = [44439830, 44715547, 37761911, 33167689, 31926951, 37501864, 22451685, 22347373, 17997656, 12073511, 17130389, 11849570, 10558083, 7073407, 5418319, 7740189, 7137627, 3207135, 3269470, 2440216, 1768066, 1307934, 1688010, 1507865];
var osnoxOtherDataBottom = [971837, 1181811, 893091, 359623, 740145, 751418, 881957, 1157924, 1309783, 1288660, 1835873, 2389158, 1683503, 3266691, 3740367, 3475929, 3458783, 3166993, 3163360, 2928552, 2662180, 2880115, 2647540, 2344114];

var co2CoalDataBottom = [2014088446, 1946214472, 1966841004, 2018217906, 2021074164, 2058869124, 2039202376, 2061732445, 2027914056, 1819269158, 1918224841, 1808100277, 1584904682, 1660620380, 1656983122, 1433365486, 1320271693, 1285801931, 1227455513, 1031236687, 832506396, 963978076, 906920253, 743193014];
var co2GasDataBottom = [369998424, 407747068, 432179339, 427308074, 477788584, 597988764, 630123570, 716746293, 707151548, 757709029, 810874324, 846908486, 1052014925, 974274386, 981130202, 1194487416, 1241876355, 1176642887, 1352203359, 1465272194, 1508420851, 1459231182, 1562260242, 1680762424];
var co2OilDataBottom = [89993725, 89906122, 72057557, 72224877, 69663978, 73211975, 37527181, 42192024, 32029275, 23678414, 24993545, 17892137, 16485997, 10795236, 11162198, 14393085, 10775630, 4565913, 6492430, 3262733, 2180465, 2042937, 3573701, 2697225];
var co2OtherDataBottom = [2296490, 2656505, 1672492, 902315, 1748406, 1716096, 2031195, 2517899, 2877085, 2875301, 3832958, 5334007, 4633171, 6649203, 8080785, 7245485, 7074216, 7249505, 7509531, 5676098, 5806498, 6772544, 5989504, 3776143];

var colors = ["#058DC7", "#ed561b", "#50b432", "#dddf00", "#d97c16", "#665683", "#cf2772", "#3262ae", "#47a8a2", "#8a6a55", "#899338", "#777781"];

//This sets global options for Highcharts such as making the legend items show up as a square and not a circle
Highcharts.setOptions({
  legend: {
    //this makes legend items a square and not a circle
    symbolRadius: 0
  },
  yAxis: {
    //For some reason, Highcharts doesn't put the last data on top
    //So we reverse the stack order like so:
    reversedStacks: false,
  },
  //Setting credits for all highcharts on this page. Will link to Air Markets and use the dates provided at the beginning of this JavaScript Code
  credits: {
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -20,
      y: -15
    }
  },
  //Setting default export size to be large / high-res
  exporting: {
    sourceWidth: 875,
    sourceHeight: 500,
  }
});
//End of Global Options

//Chart options for the first figure - annual SO2 emissions

//SO2 figure 1
var so2Figure1 = Highcharts.chart('so2Figure1', {
  credits: false,
  title: {
    text: "Annual Sulfur Dioxide Emissions, 1990-"+reportYear,
    //style:{fontWeight: 'bold' }
  },
  yAxis: [{
       gridLineWidth: 0,
       minorGridLineWidth: 0,
    title: {
      text: 'Sulfur Dioxide (million short tons)'
    },
  }, { // Secondary yAxis
       gridLineWidth: 0,
       minorGridLineWidth: 0,
        title: {
            text: 'Gross Generation (billion MWh)',
        },
        opposite: true,
        min: 0,
        }],
  xAxis: {
    tickInterval: 1,
    categories: years,
      labels: {
      style: {fontSize: "9.5px"},
      step: 1,
      rotation: -45,
        formatter() {
//every 5 years - add 2025 in 2026
        if(this.value == 1990 ||
           this.value == 1995 ||
           this.value == 2000 ||
           this.value == 2005 ||
           this.value == 2010 ||
           this.value == 2015 ||
           this.value == 2020 ||
           this.value == reportYear) {
            return this.value
        };
      },
      allowOverlap: true,
      style: {fontSize: "9.5px"},
      rotation: -45,
      },
    showLastLabel: true,
    tickLength: 5,
    tickWidth: 1,
    tickmarkPlacement: "on",
  },
  series: [{
      type: 'column',
      color: "#058DC7",
      data: so2Data,
      name: "Sulfur Dioxide (million short tons)",
      yAxis: 0,
      groupPadding: 0,
      dataLabels:{
      enabled: false,
crop: false,
overflow: 'allow',
      style: {
             fontWeight: 'regular',
             fontSize: "10px"
             },
    },
    },
    {
      type: 'line',
      color: "#50b432",
      name: "Gross Generation (billion MWh)",
      data: genData,
      yAxis: 1,
      marker:{enabled:false},
      lineWidth: 5,
      }
  ],
  exporting: {
    sourceWidth: 875,
    buttons: {
      contextButton: {
        menuItems: [{
          textKey: "downloadPNG",
          onclick: function() {
            Highcharts.exportCharts([so2Figure1], {
              filename: 'SO₂ Emissions From CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadJPEG',
          onclick: function() {
            Highcharts.exportCharts([so2Figure1], {
              type: 'image/jpeg',
              filename: 'SO₂ Emissions From CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadPDF',
          onclick: function() {
            Highcharts.exportCharts([so2Figure1], {
              type: 'application/pdf',
              filename: 'SO₂ Emissions From CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadSVG',
          onclick: function() {
            Highcharts.exportCharts([so2Figure1], {
              type: 'image/svg+xml',
              filename: 'SO₂ Emissions From CSAPR and ARP Sources'
            });
          }
        }, {
          text: 'Download data',
          onclick: function() {
            window.open('https://www.epa.gov/system/files/documents/2024-07/view-2023-capd-emissions-data.xlsx');
          }
        }]
      }
    }
  },
//Captions are where the notes go!
  caption: {
    text: figure1SO2Captions,
    style: {
      fontSize: '8px'
    },
  }
});  
//NOx Figure 1
var noxFigure1 = Highcharts.chart('noxFigure1', {
  credits: false,
  title: {
    text: "Annual Nitrogen Oxides Emissions, 1990-"+reportYear,
    //style:{fontWeight: 'bold' }
  },
  yAxis: [{
       gridLineWidth: 0,
       minorGridLineWidth: 0,
    title: {
      text: 'Nitrogen Oxides (million short tons)'
    },
  }, { // Secondary yAxis
       gridLineWidth: 0,
       minorGridLineWidth: 0,
        title: {
            text: 'Gross Generation (billion MWh)',
        },
        opposite: true,
        min: 0,
        }],
  xAxis: {
    tickInterval: 1,
    categories: years,
      labels: {
      style: {fontSize: "9.5px"},
      step: 1,
      rotation: -45,
        formatter() {
//every 5 years - add 2025 in 2026
        if(this.value == 1990 ||
           this.value == 1995 ||
           this.value == 2000 ||
           this.value == 2005 ||
           this.value == 2010 ||
           this.value == 2015 ||
           this.value == 2020 ||
           this.value == reportYear) {
            return this.value
        };
      },
      allowOverlap: true,
      style: {fontSize: "9.5px"},
      rotation: -45,
      },
    showLastLabel: true,
    tickLength: 5,
    tickWidth: 1,
    tickmarkPlacement: "on",
  },
  series: [{
      type: 'column',
      color: "orange",
      data: noxData,
      name: "Nitrogen Oxides (million short tons)",
      yAxis: 0,
      groupPadding: 0,
      dataLabels:{
      enabled: false,
crop: false,
overflow: 'allow',
      style: {
             fontWeight: 'regular',
             fontSize: "10px"
             },
    },
    },
    {
      type: 'line',
      color: "#50b432",
      name: "Gross Generation (billion MWh)",
      data: genData,
      yAxis: 1,
      marker:{enabled:false},
      lineWidth: 5,
      }
  ],
  exporting: {
    sourceWidth: 875,
    buttons: {
      contextButton: {
        menuItems: [{
          textKey: "downloadPNG",
          onclick: function() {
            Highcharts.exportCharts([noxFigure1], {
              filename: 'NOₓ Emissions From CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadJPEG',
          onclick: function() {
            Highcharts.exportCharts([noxFigure1], {
              type: 'image/jpeg',
              filename: 'NOₓ Emissions From CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadPDF',
          onclick: function() {
            Highcharts.exportCharts([noxFigure1], {
              type: 'application/pdf',
              filename: 'NOₓ Emissions From CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadSVG',
          onclick: function() {
            Highcharts.exportCharts([noxFigure1], {
              type: 'image/svg+xml',
              filename: 'NOₓ Emissions From CSAPR and ARP Sources'
            });
          }
        }, {
          text: 'Download data',
          onclick: function() {
            window.open('https://www.epa.gov/system/files/documents/2024-07/view-2023-capd-emissions-data.xlsx');
          }
        }]
      }
    }
  },
//Captions are where the notes go!
  caption: {
    text: figure1NOxCaptions,
    style: {
      fontSize: '8px'
    },
  }
});  
//Ozone Season NOx Figure 1
var osnoxFigure1 = Highcharts.chart('osnoxFigure1', {
  credits: false,
  title: {
    text: "Ozone Season Nitrogen Oxides Emissions, 1997-"+reportYear,
    //style:{fontWeight: 'bold' }
  },
  yAxis: [{
       gridLineWidth: 0,
       minorGridLineWidth: 0,
    title: {
      text: 'Nitrogen Oxides (million short tons)'
    },
  }, { // Secondary yAxis
       gridLineWidth: 0,
       minorGridLineWidth: 0,
        title: {
            text: 'Gross Generation (billion MWh)',
        },
        opposite: true,
        min: 0,
        }],
  xAxis: {
    tickInterval: 1,
    categories: years,
      labels: {
      style: {fontSize: "9.5px"},
      step: 1,
      rotation: -45,
        formatter() {
//every 5 years - add 2025 in 2026
        if(this.value == 1990 ||
           this.value == 1995 ||
           this.value == 2000 ||
           this.value == 2005 ||
           this.value == 2010 ||
           this.value == 2015 ||
           this.value == 2020 ||
           this.value == reportYear) {
            return this.value
        };
      },
      allowOverlap: true,
      style: {fontSize: "9.5px"},
      rotation: -45,
      },
    showLastLabel: true,
    tickLength: 5,
    tickWidth: 1,
    tickmarkPlacement: "on",
  },
  series: [{
      type: 'column',
      color: "orange",
      data: osnoxData,
      name: "Nitrogen Oxides (million short tons)",
      yAxis: 0,
      groupPadding: 0,
      dataLabels:{
      enabled: false,
crop: false,
overflow: 'allow',
      style: {
             fontWeight: 'regular',
             fontSize: "10px"
             },
    },
    },
    {
      type: 'line',
      color: "#50b432",
      name: "Gross Generation (billion MWh)",
      data: osGenData,
      yAxis: 1,
      marker:{enabled:false},
      lineWidth: 5,
      }
  ],
  exporting: {
    sourceWidth: 875,
    buttons: {
      contextButton: {
        menuItems: [{
          textKey: "downloadPNG",
          onclick: function() {
            Highcharts.exportCharts([osnoxFigure1], {
              filename: 'Seasonal NOₓ Emissions From CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadJPEG',
          onclick: function() {
            Highcharts.exportCharts([osnoxFigure1], {
              type: 'image/jpeg',
              filename: 'Seasonal NOₓ Emissions From CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadPDF',
          onclick: function() {
            Highcharts.exportCharts([osnoxFigure1], {
              type: 'application/pdf',
              filename: 'Seasonal NOₓ Emissions From CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadSVG',
          onclick: function() {
            Highcharts.exportCharts([osnoxFigure1], {
              type: 'image/svg+xml',
              filename: 'Seasonal NOₓ Emissions From CSAPR and ARP Sources'
            });
          }
        }, {
          text: 'Download data',
          onclick: function() {
            window.open('https://www.epa.gov/system/files/documents/2024-07/view-2023-capd-emissions-data.xlsx');
          }
        }]
      }
    }
  },
//Captions are where the notes go!
  caption: {
    text: figure1OSNOxCaptions,
    style: {
      fontSize: '8px'
    },
  }
});
//MATS Figure 1
Highcharts.chart('matsFigure1', {
  credits: false,
  title: {
    text: 'Mercury Emissions from MATS Sources, 2010-'+reportYear,
   // style:{fontWeight: 'bold' }
  },
  yAxis: {
       gridLineWidth: 0,
       minorGridLineWidth: 0,
    title: {
      text: 'Emissions (tons)'
    },
  },
  xAxis: {
    categories: matsYears,
    tickInterval: 1,
      labels: {
      style: {fontSize: "9.5px"},
      step: 1,
      rotation: -45
      },
    tickLength: 10,
    tickWidth: 1,
    tickmarkPlacement: "on",
  },
  series: [{
      type: 'column',
      color: 'purple',
      data: matsData,
      name: "Mercury Emissions (tons)",
      yAxis: 0,
      groupPadding: 0,
      dataLabels:{
      enabled: false,
      style: {
             fontWeight: 'regular',
             fontSize: '10px'
             },
    },
    }],
  exporting: {
        menuItemDefinitions: {
            // Custom definition
            xls: {
                onclick: function () {                    window.open('https://www.epa.gov/system/files/documents/2024-07/view-2023-capd-emissions-data.xlsx');
                },
                text: 'Download data'
            }
        },
        buttons: {
            contextButton: {
                menuItems: ['viewFullscreen', 'xls', 'separator','downloadPNG', 'downloadJPEG', 'downloadSVG']
            }
        }
    },
//Captions are where the notes go!
  caption: {
    text: figure1MATSCaptions,
    style: {
      fontSize: '8px'
    },
  }
});
//CO2 Figure 1
Highcharts.chart('co2Figure1', {
  credits: false,
  title: {
    text: 'Annual Carbon Dioxide Emissions, 1995-'+reportYear,
   // style:{fontWeight: 'bold' }
  },
  yAxis: [{
       gridLineWidth: 0,
       minorGridLineWidth: 0,
    title: {
      text: 'Carbon Dioxide (billion tons)'
    },
  }, { // Secondary yAxis
       gridLineWidth: 0,
       minorGridLineWidth: 0,
        title: {
            text: 'Gross Generation (billion MWh)',
        },
        opposite: true,
        min: 0,
        }],
  xAxis: {
    tickInterval: 1,
    categories: years,
      labels: {
      style: {fontSize: "9.5px"},
      step: 1,
      rotation: -45,
        formatter() {
//every 5 years - add 2025 in 2026
        if(this.value == 1990 ||
           this.value == 1995 ||
           this.value == 2000 ||
           this.value == 2005 ||
           this.value == 2010 ||
           this.value == 2015 ||
           this.value == 2020 ||
           this.value == reportYear) {
            return this.value
        };
      },
      allowOverlap: true,
      style: {fontSize: "9.5px"},
      rotation: -45,
      },
    showLastLabel: true,
    tickLength: 5,
    tickWidth: 1,
    tickmarkPlacement: "on",
  },
  series: [{
      type: 'column',
      color: 'grey',
      data: co2Data,
      name: "Carbon Dioxide (billion tons)",
      yAxis: 0,
      groupPadding: 0,
      dataLabels:{
      enabled: false,
      style: {
             fontWeight: 'regular',
             fontSize: '10px'
             },
    },
    },
    {
      type: 'line',
      color: 'green',
      data: genData,
      name: "Gross Generation (billion MWh)",
      yAxis: 1,
      marker:{enabled:false},
      lineWidth: 5,
      }
  ],
  exporting: {
        menuItemDefinitions: {
            // Custom definition
            xls: {
                onclick: function () {
                    window.open('https://www.epa.gov/system/files/documents/2024-07/view-2023-capd-emissions-data.xlsx');
                },
                text: 'Download data'
            }
        },
        buttons: {
            contextButton: {
                menuItems: ['viewFullscreen', 'xls', 'separator','downloadPNG', 'downloadJPEG', 'downloadSVG']
            }
        }
    },
//Captions are where the notes go!
  caption: {
    text: figure1CO2Captions,
    style: {
      fontSize: '8px'
    },
  }
});
//END OF FIGURE 1 CODE




//START OF FIGURE 2 CODE
//Chapter 3 figure 2
// START MAP CODE
var topology;
$.ajax({
  method: "GET",
  url: "https://code.highcharts.com/mapdata/1.1/countries/us/custom/us-all-mainland.topo.json",
  dataType: 'json',
  type: 'GET',
  contentType: 'application/json',
  success: function(data) {
    // it returns json Object "data"
    topology = data;

//Putting below code for bar charts within the AJAX function
//Otherwise, the exporting function breaks
//BEGIN CREATE BAR
var so2BarChartOptions = {
  colors: colors,
  chart: {
    type: 'column',
  },
  title: {
    text: "SO₂ Emissions (tons)"
  },
  credits: {
    enabled: false
  },
tooltip:{
valueSuffix: ' tons'
},
  xAxis: {
    categories: sliderYears,
  },
  yAxis:{title:{enabled:false}},
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      clip: false
    }
  },
  legend: {
    //this makes legend items a square and not a circle
    symbolRadius: 0
  },
  exporting: {
    sourceWidth: 875,
    buttons: {
      contextButton: {
        menuItems: [{
          textKey: "downloadPNG",
          onclick: function() {
            Highcharts.exportChartsSide([so2MapChart, so2MapBarChart], {
              filename: 'State-by-State SO₂ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadJPEG',
          onclick: function() {
            Highcharts.exportChartsSide([so2MapChart, so2MapBarChart], {
              type: 'image/jpeg',
              filename: 'State-by-State SO₂ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadPDF',
          onclick: function() {
            Highcharts.exportChartsSide([so2MapChart, so2MapBarChart], {
              type: 'application/pdf',
              filename: 'State-by-State SO₂ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadSVG',
          onclick: function() {
            Highcharts.exportChartsSide([so2MapChart, so2MapBarChart], {
              type: 'image/svg+xml',
              filename: 'State-by-State SO₂ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          text: 'Download data',
          onclick: function() {
            window.open('https://www.epa.gov/system/files/documents/2024-07/view-2023-capd-emissions-data.xlsx');
          }
        }]
      }
    }
  }
};
//Now, assemble the SO2 bar chart
var so2MapBarChart = Highcharts.chart('so2MapBarChart', so2BarChartOptions);
so2MapBarChart.addSeries({
  name: "Contiguous United States",
  data: defaultSO2Data
});
//NOx Bar Chart Options
var noxBarChartOptions = {
  colors: colors,
  chart: {
    type: 'column',
  },
  title: {
    text: "NOₓ Emissions (tons)"
  },
  credits: {
    enabled: false
  },
tooltip:{
valueSuffix: ' tons'
},
  xAxis: {
    categories: sliderYears,
  },
yAxis:{title:{enabled:false}},
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  legend: {
    //this makes legend items a square and not a circle
    symbolRadius: 0
  },
  exporting: {
    sourceWidth: 875,
    buttons: {
      contextButton: {
        menuItems: [{
          textKey: "downloadPNG",
          onclick: function() {
            Highcharts.exportChartsSide([noxMapChart, noxMapBarChart], {
              filename: 'State-by-State NOₓ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadJPEG',
          onclick: function() {
            Highcharts.exportChartsSide([noxMapChart, noxMapBarChart], {
              type: 'image/jpeg',
              filename: 'State-by-State NOₓ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadPDF',
          onclick: function() {
            Highcharts.exportChartsSide([noxMapChart, noxMapBarChart], {
              type: 'application/pdf',
              filename: 'State-by-State NOₓ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadSVG',
          onclick: function() {
            Highcharts.exportChartsSide([noxMapChart, noxMapBarChart], {
              type: 'image/svg+xml',
              filename: 'State-by-State NOₓ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          text: 'Download data',
          onclick: function() {
            window.open('https://www.epa.gov/system/files/documents/2024-07/view-2023-capd-emissions-data.xlsx');
          }
        }]
      }
    }
  }
};
//Now, assemble the NOx bar chart
var noxMapBarChart = Highcharts.chart('noxMapBarChart', noxBarChartOptions);
noxMapBarChart.addSeries({
  name: "Contiguous United States",
  data: defaultNOxData
});

//Ozone Season NOx Bar Chart Options
var osnoxBarChartOptions = {
  colors: colors,
  chart: {
    type: 'column',
  },
  title: {
    text: "Ozone Season NOₓ Emissions (tons)"
  },
tooltip:{
valueSuffix: ' tons'
},
  credits: {
    enabled: false
  },
  xAxis: {
    categories: osSliderYears,
  },
  yAxis:{title:{enabled:false}},
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  legend: {
    //this makes legend items a square and not a circle
    symbolRadius: 0
  },
  exporting: {
    sourceWidth: 875,
    buttons: {
      contextButton: {
        menuItems: [{
          textKey: "downloadPNG",
          onclick: function() {
            Highcharts.exportChartsSide([osnoxMapChart, osnoxMapBarChart], {
              filename: 'State-by-State Ozone Season NOₓ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadJPEG',
          onclick: function() {
            Highcharts.exportChartsSide([osnoxMapChart, osnoxMapBarChart], {
              type: 'image/jpeg',
              filename: 'State-by-State Ozone Season NOₓ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadPDF',
          onclick: function() {
            Highcharts.exportChartsSide([osnoxMapChart, osnoxMapBarChart], {
              type: 'application/pdf',
              filename: 'State-by-State Ozone Season NOₓ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadSVG',
          onclick: function() {
            Highcharts.exportChartsSide([osnoxMapChart, osnoxMapBarChart], {
              type: 'image/svg+xml',
              filename: 'State-by-State Ozone Season NOₓ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          text: 'Download data',
          onclick: function() {
            window.open('https://www.epa.gov/system/files/documents/2024-07/view-2023-capd-emissions-data.xlsx');
          }
        }]
      }
    }
  }
};
//Now, assemble the Ozone Season NOx bar chart
var osnoxMapBarChart = Highcharts.chart('osnoxMapBarChart', osnoxBarChartOptions);
osnoxMapBarChart.addSeries({
  name: "Contiguous United States",
  data: defaultOSNOxData
});
//MATS bar chart options
var matsBarChartOptions = {
  colors: colors,
  chart: {
    type: 'column',
  },
  title: {
    text: "Mercury Emissions (lbs)"
  },
tooltip:{
valueSuffix: ' lbs'
},
  credits: {
    enabled: false
  },
  xAxis: {
    categories: matsSliderYears,
  },
  yAxis:{title:{enabled:false}},
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  legend: {
    //this makes legend items a square and not a circle
    symbolRadius: 0
  },
  exporting: {
    sourceWidth: 875,
    buttons: {
      contextButton: {
        menuItems: [{
          textKey: "downloadPNG",
          onclick: function() {
            Highcharts.exportChartsSide([matsMapChart, matsMapBarChart], {
              filename: 'State-by-State Mercury Emissions from MATS Sources'
            });
          }
        }, {
          textKey: 'downloadJPEG',
          onclick: function() {
            Highcharts.exportChartsSide([matsMapChart, matsMapBarChart], {
              type: 'image/jpeg',
              filename: 'State-by-State Mercury Emissions from MATS Sources'
            });
          }
        }, {
          textKey: 'downloadPDF',
          onclick: function() {
            Highcharts.exportChartsSide([matsMapChart, matsMapBarChart], {
              type: 'application/pdf',
              filename: 'State-by-State Mercury Emissions from MATS Sources'
            });
          }
        }, {
          textKey: 'downloadSVG',
          onclick: function() {
            Highcharts.exportChartsSide([matsMapChart, matsMapBarChart], {
              type: 'image/svg+xml',
              filename: 'State-by-State Mercury Emissions from MATS Sources'
            });
          }
        }, {
          text: 'Download data',
          onclick: function() {
            window.open('https://www.epa.gov/system/files/documents/2024-07/view-2023-capd-emissions-data.xlsx');
          }
        }]
      }
    }
  }
};
//Now, assemble the MATS bar chart
var matsMapBarChart = Highcharts.chart('matsMapBarChart', matsBarChartOptions);
matsMapBarChart.addSeries({
  name: "Contiguous United States",
  data: defaultMATSData
});
//CO2 Bar Chart settings
var co2BarChartOptions = {
  colors: colors,
  chart: {
    type: 'column',
  },
  title: {
    text: "CO₂ Emissions (tons)"
  },
tooltip:{
valueSuffix: ' tons'
},
  credits: {
    enabled: false
  },
  xAxis: {
    categories: co2SliderYears,
  },
  yAxis:{title:{enabled:false}},
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  legend: {
    //this makes legend items a square and not a circle
    symbolRadius: 0
  },
  exporting: {
    sourceWidth: 875,
    buttons: {
      contextButton: {
        menuItems: [{
          textKey: "downloadPNG",
          onclick: function() {
            Highcharts.exportChartsSide([co2MapChart, co2MapBarChart], {
              filename: 'State-by-State CO₂ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadJPEG',
          onclick: function() {
            Highcharts.exportChartsSide([co2MapChart, co2MapBarChart], {
              type: 'image/jpeg',
              filename: 'State-by-State CO₂ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadPDF',
          onclick: function() {
            Highcharts.exportChartsSide([co2MapChart, co2MapBarChart], {
              type: 'application/pdf',
              filename: 'State-by-State CO₂ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadSVG',
          onclick: function() {
            Highcharts.exportChartsSide([co2MapChart, co2MapBarChart], {
              type: 'image/svg+xml',
              filename: 'State-by-State CO₂ Emissions from CSAPR and ARP Sources'
            });
          }
        }, {
          text: 'Download data',
          onclick: function() {
            window.open('https://www.epa.gov/system/files/documents/2024-07/view-2023-capd-emissions-data.xlsx');
          }
        }]
      }
    }
  }
};
//Now, assemble the CO2 bar chart
var co2MapBarChart = Highcharts.chart('co2MapBarChart', co2BarChartOptions);
co2MapBarChart.addSeries({
  name: "Contiguous United States",
  data: defaultCO2Data
});



    //SO2 Map Settings
    var so2MapChart = Highcharts.mapChart('so2MapContainer', {
      chart: {
        map: topology,
      },
      title: {
        text: 'State-by-State SO₂ Emissions from CSAPR and ARP Sources, 1990–' + reportYear
      },
      mapNavigation: {
        enableMouseWheelZoom: false,
        enabled: true,
        scrollZoom: false,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
      credits: {
        enabled: false
      },
      legend: {
        //this makes legend items a square and not a circle
        symbolRadius: 0,
        itemWidth: 325
      },
      plotOptions: {
        map: {
          //showInLegend: true,
          tooltip: {
            headerFormat: "",
            pointFormat: '{point.name}<br />(Click for details)</span>'
          }
        },
        series: {
          allowPointSelect: true,
          point: {
            events: {
              select: function() {
                if (so2MapBarChart.series[0].name == "Contiguous United States") {
                  so2MapBarChart.series[0].remove();
                }
                var selected = (this.properties["postal-code"]).toLowerCase() + "SO2Data";
                var selectName = this.name;
                console.log(selectName);
                var selectData = (window[selected]);
                console.log(selectData);
                var seriesLength = so2MapBarChart.series.length;
                so2MapBarChart.addSeries({
                  name: selectName,
                  data: selectData,
                }, true);
              },
              unselect: function() {
                var seriesLength = so2MapBarChart.series.length;
                for (var i = seriesLength - 1; i > -1; i--) {
                  //chart.series[i].remove();
                  if (so2MapBarChart.series[i].name == this.name) {
                    so2MapBarChart.series[i].remove();
                  }
                }
                if (so2MapBarChart.series.length == 0) {
                  so2MapBarChart.addSeries({
                    name: "Contiguous United States",
                    data: defaultSO2Data,
                  }, true);
                }
              }
            }
          },
        },
        mapbubble: {
          // setting the max keeps the scale consistent across the maps with different years data
          //Maximum bubble size is based on the maximum number
          //this is the absolute max emissions number for any year
          zMax: 2211606,
          zMin: 0,
          minSize: 0
        }
      },
      exporting: {
        enabled: false
      },
      series: [{
          data: basemapData,
          showInLegend: false,
          zIndex: 1,
          color: '#efefef',
          allAreas: false,
        },
        {
          name: "CSAPR states controlled for fine particles",
          data: csaprStates,
          zIndex: 2,
          color: '#a9c077',
          legend: {
            //this makes legend items a square and not a circle
            symbolRadius: 0
          },
          allAreas: false
        },
        {
          data: so2MapData1990,
          name: '1990 SO₂ Emissions (tons)',
          type: 'mapbubble',
          color: '#7156A4',
          zIndex: 3,
          maxSize: 55,
          allAreas: false,
        }
      ]
    });
    //Annual NOx Map Settings
    var noxMapChart = Highcharts.mapChart('noxMapContainer', {
      chart: {
        map: topology,
      },
      title: {
        text: 'State-by-State NOₓ Emissions from CSAPR and ARP Sources, 1990–' + reportYear
      },
      mapNavigation: {
        enableMouseWheelZoom: false,
        enabled: true,
        scrollZoom: false,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
      credits: {
        enabled: false
      },
      legend: {
        //this makes legend items a square and not a circle
        symbolRadius: 0
      },
      plotOptions: {
        map: {
          //showInLegend: true,
          tooltip: {
            headerFormat: "",
            pointFormat: '{point.name}<br />(Click for details)</span>'
          }
        },
        series: {
          allowPointSelect: true,
          point: {
            events: {
              select: function() {
                if (noxMapBarChart.series[0].name == "Contiguous United States") {
                  noxMapBarChart.series[0].remove();
                }
                var selected = (this.properties["postal-code"]).toLowerCase() + "NOxData";
                var selectName = this.name;
                console.log(selectName);
                var selectData = (window[selected]);
                console.log(selectData);
                var seriesLength = noxMapBarChart.series.length;
                noxMapBarChart.addSeries({
                  name: selectName,
                  data: selectData,
                }, true);
              },
              unselect: function() {
                var seriesLength = noxMapBarChart.series.length;
                for (var i = seriesLength - 1; i > -1; i--) {
                  //chart.series[i].remove();
                  if (noxMapBarChart.series[i].name == this.name) {
                    noxMapBarChart.series[i].remove();
                  }
                }
                if (noxMapBarChart.series.length == 0) {
                  noxMapBarChart.addSeries({
                    name: "Contiguous United States",
                    data: defaultNOxData,
                  }, true);
                }
              }
            }
          },
        },
        mapbubble: {
          // setting the max keeps the scale consistent across the maps with different years data
          //Maximum bubble size is based on the maximum number
          //this is the absolute max emissions number for any year
          zMax: 534054,
          zMin: 0,
          minSize: 0
        }
      },
      exporting: {
        enabled: false
      },
      series: [{
          data: basemapData,
          showInLegend: false,
          zIndex: 1,
          color: '#efefef',
          allAreas: false,
        },
        {
          name: "CSAPR states controlled for fine particles",
          data: csaprStates,
          zIndex: 2,
          color: '#a2d7ed',
          legend: {
            //this makes legend items a square and not a circle
            symbolRadius: 0
          },
          allAreas: false
        },
        {
          data: noxMapData1990,
          name: '1990 NOₓ Emissions (tons)',
          type: 'mapbubble',
          color: '#7156A4',
          zIndex: 3,
          maxSize: 55,
          allAreas: false,
        }
      ]
    });
    //Ozone Season NOx Map settings
    var osnoxMapChart = Highcharts.mapChart('osnoxMapContainer', {
      chart: {
        map: topology,
      },
      title: {
        text: 'State-by-State Ozone Seaon NOₓ Emissions from CSAPR and ARP Sources, 1990–' + reportYear
      },
      mapNavigation: {
        enableMouseWheelZoom: false,
        enabled: true,
        scrollZoom: false,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
      credits: {
        enabled: false
      },
      legend: {
        //this makes legend items a square and not a circle
        symbolRadius: 0
      },
      plotOptions: {
        map: {
          //showInLegend: true,
          tooltip: {
            headerFormat: "",
            pointFormat: '{point.name}<br />(Click for details)</span>'
          }
        },
        series: {
          allowPointSelect: true,
          point: {
            events: {
              select: function() {
                if (osnoxMapBarChart.series[0].name == "Contiguous United States") {
                  osnoxMapBarChart.series[0].remove();
                }
                var selected = (this.properties["postal-code"]).toLowerCase() + "OSNOxData";
                var selectName = this.name;
                console.log(selectName);
                var selectData = (window[selected]);
                console.log(selectData);
                var seriesLength = osnoxMapBarChart.series.length;
                osnoxMapBarChart.addSeries({
                  name: selectName,
                  data: selectData,
                }, true);
              },
              unselect: function() {
                var seriesLength = osnoxMapBarChart.series.length;
                for (var i = seriesLength - 1; i > -1; i--) {
                  //chart.series[i].remove();
                  if (osnoxMapBarChart.series[i].name == this.name) {
                    osnoxMapBarChart.series[i].remove();
                  }
                }
                if (osnoxMapBarChart.series.length == 0) {
                  osnoxMapBarChart.addSeries({
                    name: "Contiguous United States",
                    data: defaultOSNOxData,
                  }, true);
                }
              }
            }
          },
        },
        mapbubble: {
          // setting the max keeps the scale consistent across the maps with different years data
          //Maximum bubble size is based on the maximum number
          //this is the absolute max emissions number for any year
          zMax: 184713,
          zMin: 0,
          minSize: 0
        }
      },
      exporting: {
        enabled: false
      },
      series: [{
          data: basemapData,
          showInLegend: false,
          zIndex: 1,
          color: '#efefef',
          allAreas: false,
        },
        {
          name: "CSAPR states controlled for ozone",
          data: csaprStates,
          zIndex: 2,
          color: '#a2d7ed',
          legend: {
            //this makes legend items a square and not a circle
            symbolRadius: 0
          },
          allAreas: false
        },
        {
        //Default data year to show
          data: osnoxMapData2000,
          name: '2000 Ozone Season NOₓ Emissions (tons)',
          type: 'mapbubble',
          color: '#7156A4',
          zIndex: 3,
          maxSize: 55,
          allAreas: false,
        }
      ]
    });
    //MATS map settings
    var matsMapChart = Highcharts.mapChart('matsMapContainer', {
      chart: {
        map: topology,
      },
      title: {
        text: 'State-by-State Mercury Emissions from MATS, 2010–' + reportYear
      },
      mapNavigation: {
        enableMouseWheelZoom: false,
        enabled: true,
        scrollZoom: false,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
      credits: {
        enabled: false
      },
      legend: {
        //this makes legend items a square and not a circle
        symbolRadius: 0
      },
      plotOptions: {
        map: {
          //showInLegend: true,
          tooltip: {
            headerFormat: "",
            pointFormat: '{point.name}<br />(Click for details)</span>'
          }
        },
        series: {
          allowPointSelect: true,
          point: {
            events: {
              select: function() {
                if (matsMapBarChart.series[0].name == "Contiguous United States") {
                  matsMapBarChart.series[0].remove();
                }
                var selected = (this.properties["postal-code"]).toLowerCase() + "MATSData";
                var selectName = this.name;
                console.log(selectName);
                var selectData = (window[selected]);
                console.log(selectData);
                var seriesLength = matsMapBarChart.series.length;
                matsMapBarChart.addSeries({
                  name: selectName,
                  data: selectData,
                }, true);
              },
              unselect: function() {
                var seriesLength = matsMapBarChart.series.length;
                for (var i = seriesLength - 1; i > -1; i--) {
                  //chart.series[i].remove();
                  if (matsMapBarChart.series[i].name == this.name) {
                    matsMapBarChart.series[i].remove();
                  }
                }
                if (matsMapBarChart.series.length == 0) {
                  matsMapBarChart.addSeries({
                    name: "Contiguous United States",
                    data: defaultMATSData,
                  }, true);
                }
              }
            }
          },
        },
        mapbubble: {
          // setting the max keeps the scale consistent across the maps with different years data
          //Maximum bubble size is based on the maximum number
          //this is the absolute max emissions number for any year
          zMax: 1327,
          zMin: 0,
          minSize: 0
        }
      },
      exporting: {
        enabled: false
      },
      series: [{
          data: basemapData,
          showInLegend: false,
          zIndex: 1,
          color: '#efefef',
          allAreas: false,
        },
        {
        //Default data year to show
          data: matsMapData2010,
          name: '2010 Mercury Emissions (lbs)',
          type: 'mapbubble',
          color: '#7156A4',
          zIndex: 3,
          maxSize: 35,
          allAreas: false,
        }
      ]
    });
    //CO2 Map Settings
   var co2MapChart = Highcharts.mapChart('co2MapContainer', {
      chart: {
        map: topology,
      },
      title: {
        text: 'State-by-State CO₂ Emissions from CSAPR and ARP Sources, 1990–' + reportYear
      },
      mapNavigation: {
        enableMouseWheelZoom: false,
        enabled: true,
        scrollZoom: false,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
      credits: {
        enabled: false
      },
      legend: {
        //this makes legend items a square and not a circle
        symbolRadius: 0
      },
      plotOptions: {
        map: {
          //showInLegend: true,
          tooltip: {
            headerFormat: "",
            pointFormat: '{point.name}<br />(Click for details)</span>'
          }
        },
        series: {
          allowPointSelect: true,
          point: {
            events: {
              select: function() {
                if (co2MapBarChart.series[0].name == "Contiguous United States") {
                  co2MapBarChart.series[0].remove();
                }
                var selected = (this.properties["postal-code"]).toLowerCase() + "CO2Data";
                var selectName = this.name;
                console.log(selectName);
                var selectData = (window[selected]);
                console.log(selectData);
                var seriesLength = co2MapBarChart.series.length;
                co2MapBarChart.addSeries({
                  name: selectName,
                  data: selectData,
                }, true);
              },
              unselect: function() {
                var seriesLength = co2MapBarChart.series.length;
                for (var i = seriesLength - 1; i > -1; i--) {
                  //chart.series[i].remove();
                  if (co2MapBarChart.series[i].name == this.name) {
                    co2MapBarChart.series[i].remove();
                  }
                }
                if (co2MapBarChart.series.length == 0) {
                  co2MapBarChart.addSeries({
                    name: "Contiguous United States",
                    data: defaultCO2Data,
                  }, true);
                }
              }
            }
          },
        },
        mapbubble: {
          // setting the max keeps the scale consistent across the maps with different years data
          //Maximum bubble size is based on the maximum number
          //this is the absolute max emissions number for any year
          zMax: 257125054,
          zMin: 0,
          minSize: 0
        }
      },
      exporting: {
        enabled: false
      },
      series: [{
          data: basemapData,
          showInLegend: false,
          zIndex: 1,
          color: '#efefef',
          allAreas: false,
        },
        {
          data: co2MapData1995,
          name: '1995 CO₂ Emissions (tons)',
          type: 'mapbubble',
          color: '#7156A4',
          zIndex: 3,
          maxSize: 55,
          allAreas: false,
        }
      ]
    });
    //SO2 Slider Settings
    var so2DataYear;
    $("#so2Slider").slider({
        value: 0,
        min: 0,
        max: 4,
        //change this number to 6 if you need to add another year option to the slider (shouldn't be until 2030)
        step: 1
      })
      .on("slide", function(event, ui) {
        so2DataYear = sliderYears[ui.value];
        console.log(so2DataYear);
        so2MapChart.series[2].setName(so2DataYear + " SO₂ Emissions (tons)");
        if (so2DataYear == 1990 || so2DataYear == '') {
          so2MapChart.series[2].setData(so2MapData1990);
        } else if (so2DataYear == 2000) {
          so2MapChart.series[2].setData(so2MapData2000);
        } else if (so2DataYear == 2010) {
          so2MapChart.series[2].setData(so2MapData2010);
        } else if (so2DataYear == 2020) {
          so2MapChart.series[2].setData(so2MapData2020);
        } else if (so2DataYear == reportYear) {
          so2MapChart.series[2].setData(so2MapDataCurrent);
        }
        so2MapChart.redraw();
      })
      .each(function() {
        // Add labels to slider whose values 
        // are specified by min & max
        // Get the options for this slider
        var opt = $(this).data().uiSlider.options;
        // Get the number of possible values
        var vals = opt.max - opt.min;
        // Space out values
        for (var i = 0; i <= vals; i++) {
          var el = ($('<label><small>' + (sliderYears[i]) + '</label>').css('left', (i / vals * 100) + '%'));
          //Based on the number of years in the first array in figure2Data, add year labels to the slider
          $("#so2Slider").append(el);
        }
        // End of slider code
      });
      //start of Annual NOx Slider code
    var noxDataYear;
    $("#noxSlider").slider({
        value: 0,
        min: 0,
        max: 4,
        //change this number to 6 if you need to add another year option to the slider (shouldn't be until 2030)
        step: 1
      })
      .on("slide", function(event, ui) {
        noxDataYear = sliderYears[ui.value];
        console.log(noxDataYear);
        noxMapChart.series[2].setName(noxDataYear + " NOₓ Emissions (tons)");
        if (noxDataYear == 1990 || noxDataYear == '') {
          noxMapChart.series[2].setData(noxMapData1990);
        } else if (noxDataYear == 2000) {
          noxMapChart.series[2].setData(noxMapData2000);
        } else if (noxDataYear == 2010) {
          noxMapChart.series[2].setData(noxMapData2010);
        } else if (noxDataYear == 2020) {
          noxMapChart.series[2].setData(noxMapData2020);
        } else if (noxDataYear == reportYear) {
          noxMapChart.series[2].setData(noxMapDataCurrent);
        }
        noxMapChart.redraw();
      })
      .each(function() {
        // Add labels to slider whose values 
        // are specified by min & max
        // Get the options for this slider
        var opt = $(this).data().uiSlider.options;
        // Get the number of possible values
        var vals = opt.max - opt.min;
        // Space out values
        for (var i = 0; i <= vals; i++) {
          var el = ($('<label><small>' + (sliderYears[i]) + '</label>').css('left', (i / vals * 100) + '%'));
          //Based on the number of years in the first array in figure2Data, add year labels to the slider
          $("#noxSlider").append(el);
        }
        // End of slider code
      });
      //start of Ozone Season NOx slider
          var osnoxDataYear;
    $("#osnoxSlider").slider({
        value: 0,
        min: 0,
        max: 3,
        //change this number to 6 if you need to add another year option to the slider (shouldn't be until 2030)
        step: 1
      })
      .on("slide", function(event, ui) {
       osnoxDataYear = osSliderYears[ui.value];
        console.log(osnoxDataYear);
        osnoxMapChart.series[2].setName(osnoxDataYear + " Ozone Season NOₓ Emissions (tons)");
        if (osnoxDataYear == 2000 || osnoxDataYear == '') {
          osnoxMapChart.series[2].setData(osnoxMapData2000);
        } else if (osnoxDataYear == 2010) {
          osnoxMapChart.series[2].setData(osnoxMapData2010);
        } else if (osnoxDataYear == 2020) {
          osnoxMapChart.series[2].setData(osnoxMapData2020);
        } else if (osnoxDataYear == reportYear) {
          osnoxMapChart.series[2].setData(osnoxMapDataCurrent);
        }
        osnoxMapChart.redraw();
      })
      .each(function() {
        // Add labels to slider whose values 
        // are specified by min & max
        // Get the options for this slider
        var opt = $(this).data().uiSlider.options;
        // Get the number of possible values
        var vals = opt.max - opt.min;
        // Space out values
        for (var i = 0; i <= vals; i++) {
          var el = ($('<label><small>' + (osSliderYears[i]) + '</label>').css('left', (i / vals * 100) + '%'));
          //Based on the number of years in the first array in figure2Data, add year labels to the slider
          $("#osnoxSlider").append(el);
        }
        // End of slider code
      });
//start of mercury slider
var matsDataYear;
    $("#matsSlider").slider({
        value: 0,
        min: 0,
        max: 4,
        //change this number to 6 if you need to add another year option to the slider (shouldn't be until 2025)
        step: 1
      })
      .on("slide", function(event, ui) {
       matsDataYear = matsSliderYears[ui.value];
        console.log(matsDataYear);
        matsMapChart.series[1].setName(matsDataYear + " Mercury Emissions (lbs)");
        if (matsDataYear == 2010 || matsDataYear == '') {
matsMapChart.series[1].setData(matsMapData2010);
        } else if (matsDataYear == 2018) {       matsMapChart.series[1].setData(matsMapData2018);
        } else if (matsDataYear == 2020) {
matsMapChart.series[1].setData(matsMapData2020);
        } else if (matsDataYear == 2022) {
matsMapChart.series[1].setData(matsMapData2022);
        } else if (matsDataYear == reportYear) {   matsMapChart.series[1].setData(matsMapDataCurrent);
        }
        matsMapChart.redraw();
      })
      .each(function() {
        // Add labels to slider whose values 
        // are specified by min & max
        // Get the options for this slider
        var opt = $(this).data().uiSlider.options;
        // Get the number of possible values
        var vals = opt.max - opt.min;
        // Space out values
        for (var i = 0; i <= vals; i++) {
          var el = ($('<label><small>' + (matsSliderYears[i]) + '</label>').css('left', (i / vals * 100) + '%'));
          //Based on the number of years in the first array in figure2Data, add year labels to the slider
          $("#matsSlider").append(el);
        }
        // End of slider code
      });
//CO2 Slider Settings
    var co2DataYear;
    $("#co2Slider").slider({
        value: 0,
        min: 0,
        max: 4,
        //change this number to 6 if you need to add another year option to the slider (shouldn't be until 2030)
        step: 1
      })
      .on("slide", function(event, ui) {
        co2DataYear = co2SliderYears[ui.value];
        console.log(co2DataYear);
        co2MapChart.series[1].setName(co2DataYear + " CO₂ Emissions (tons)");
        if (co2DataYear == 1995 || co2DataYear == '') {
          co2MapChart.series[1].setData(co2MapData1995);
        } else if (co2DataYear == 2000) {
          co2MapChart.series[1].setData(co2MapData2000);
        } else if (co2DataYear == 2010) {
          co2MapChart.series[1].setData(co2MapData2010);
        } else if (co2DataYear == 2020) {
          co2MapChart.series[1].setData(co2MapData2020);
        } else if (co2DataYear == reportYear) {
          co2MapChart.series[1].setData(co2MapDataCurrent);
        }
        co2MapChart.redraw();
      })
      .each(function() {
        // Add labels to slider whose values 
        // are specified by min & max
        // Get the options for this slider
        var opt = $(this).data().uiSlider.options;
        // Get the number of possible values
        var vals = opt.max - opt.min;
        // Space out values
        for (var i = 0; i <= vals; i++) {
          var el = ($('<label><small>' + (co2SliderYears[i]) + '</label>').css('left', (i / vals * 100) + '%'));
          //Based on the number of years in the first array in figure2Data, add year labels to the slider
          $("#co2Slider").append(el);
        }
        // End of slider code
      });
  }
 //end of successful ajax call function - all map-based functions must be within this ajax call 
});
//END CREATE MAP
//END OF FIGURE 2 CODE


//START OF FIGURE 3 CODE

//Chapter 3 figure 3 - SO2
//Chart options for the first figure - annual SO2 emissions
//Top chart
var so2TopChart = Highcharts.chart('so2Figure3Top', {
  colors: colors,
  chart: {
    type: 'area',
  },
  title: {
    text: "Comparison of SO₂ Emissions and Generation for CSAPR and ARP Sources, 2000–" + reportYear
  },
  xAxis: {
    tickLength: 10,
    tickWidth: 1,
    tickmarkPlacement: "on",
    categories: fig3Years
  },
  yAxis: {
    tickInterval: 5000000,
    title: {text: "SO₂ Emissions (million tons)"},
    labels: {formatter: function () {
    return (this.value/1000000)
    }
  }
  },
  plotOptions: {
    area: {
      stacking: "normal"
    },
    series: {
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            radius: 5
          }
        }
      }
    }
  },
  credits: {
    enabled: false
  },
  exporting: {
    sourceWidth: 875,
    buttons: {
      contextButton: {
        menuItems: [{
          textKey: "downloadPNG",
          onclick: function() {
            Highcharts.exportCharts([so2TopChart, so2BottomChart], {
              filename: 'Comparison of SO2 Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadJPEG',
          onclick: function() {
            Highcharts.exportCharts([so2TopChart, so2BottomChart], {
              type: 'image/jpeg',
              filename: 'Comparison of SO2 Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadPDF',
          onclick: function() {
            Highcharts.exportCharts([so2TopChart, so2BottomChart], {
              type: 'application/pdf',
              filename: 'Comparison of SO2 Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadSVG',
          onclick: function() {
            Highcharts.exportCharts([so2TopChart, so2BottomChart], {
              type: 'image/svg+xml',
              filename: 'Comparison of SO2 Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }]
      }
    }
  },
  subtitle: {
    text: "SO₂ Emissions"
  },
  series: [{
      name: 'Coal',
      data: so2CoalDataTop
    },
    {
      name: 'Gas',
      data: so2GasDataTop
    },
    {
      name: 'Oil',
      data: so2OilDataTop
    },
    {
      name: 'Other',
      data: so2OtherDataTop
    }
  ]
});
//End top chart options

//Start Bottom Chart copy code
var so2BottomChart = Highcharts.chart('so2Figure3Bottom', {
  colors: colors,
  chart: {
    type: 'line'
  },
  title: {
    text: 'SO2 Generation chart',
    style:{fontSize: '0px'}
  },
  subtitle: {
    text: "Generation"
  },
  xAxis: {
    tickLength: 10,
    tickWidth: 1,
    tickmarkPlacement: "on",
    categories: fig3Years
  },
  yAxis: {
    title: {text: "Generation (million MWh)"},
    labels: {
      formatter: function() {
        return this.value / 1000000;
      }
    },
    min: 0
  },
  credits: {
    enabled: true,
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -20,
      y: -15
    }
  },
  exporting: {
    enabled: false,
    sourceWidth: 875
  },
  tooltip: {
    valueDecimals: 0
  },
  plotOptions: {
    series: {
      allowPointSelect: false,
      stacking: false,
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            radius: 5
          }
        }
      }
    }
  },
  series: [{
      name: 'Coal',
      data: so2CoalDataBottom,
      lineWidth: 2
    },
    {
      name: 'Gas',
      data: so2GasDataBottom,
      lineWidth: 2
    },
    {
      name: 'Oil',
      data: so2OilDataBottom,
      lineWidth: 2
    },
    {
      name: 'Other',
      data: so2OtherDataBottom,
      lineWidth: 2
    }
  ],
  caption: {
    text: figure3SO2Captions,
    style: {
      fontSize: '8px'
    },
  },
});
//End bottom chart options
//Chapter 3 figure 3 - NOx
//Chart options for the first figure - annual NOx emissions
//Top chart
var noxTopChart = Highcharts.chart('noxFigure3Top', {
  colors: colors,
  chart: {
    type: 'area',
  },
  title: {
    text: "Comparison of NOₓ Emissions and Generation for CSAPR and ARP Sources, 2000–" + reportYear
  },
  xAxis: {
    tickLength: 10,
    tickWidth: 1,
    tickmarkPlacement: "on",
    categories: fig3Years

  },
  yAxis: {
    max: 6000000,
    tickInterval: 2000000,
    title: {text: "NOₓ Emissions (million tons)"},
    labels: {formatter: function () {
    return (this.value/1000000)
    },
  }
  },
  plotOptions: {
    area: {
      stacking: "normal"
    },
    series: {
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            radius: 5
          }
        }
      }
    }
  },
  credits: {
    enabled: false
  },
  exporting: {
    sourceWidth: 875,
    buttons: {
      contextButton: {
        menuItems: [{
          textKey: "downloadPNG",
          onclick: function() {
            Highcharts.exportCharts([noxTopChart, noxBottomChart], {
              filename: 'Comparison of NOx Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadJPEG',
          onclick: function() {
            Highcharts.exportCharts([noxTopChart, noxBottomChart], {
              type: 'image/jpeg',
              filename: 'Comparison of NOx Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadPDF',
          onclick: function() {
            Highcharts.exportCharts([noxTopChart, noxBottomChart], {
              type: 'application/pdf',
              filename: 'Comparison of NOx Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadSVG',
          onclick: function() {
            Highcharts.exportCharts([noxTopChart, noxBottomChart], {
              type: 'image/svg+xml',
              filename: 'Comparison of NOx Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }]
      }
    }
  },
  subtitle: {
    text: "NOₓ Emissions"
  },
  series: [{
      name: 'Coal',
      data: noxCoalDataTop
    },
    {
      name: 'Gas',
      data: noxGasDataTop
    },
    {
      name: 'Oil',
      data: noxOilDataTop
    },
    {
      name: 'Other',
      data: noxOtherDataTop
    }
  ]
});
//End top chart options

//Start Bottom Chart copy code
var noxBottomChart = Highcharts.chart('noxFigure3Bottom', {
  colors: colors,
  chart: {
    type: 'line'
  },
  title: {
    text: 'NOx Generation Chart',
    style:{fontSize: '0px'}
  },
  subtitle: {
    text: "Generation"
  },
  xAxis: {
    tickLength: 10,
    tickWidth: 1,
    tickmarkPlacement: "on",
    categories: fig3Years
  },
  yAxis: {
    title: {text: "Generation (million MWh)"},
    labels: {
      formatter: function() {
        return this.value / 1000000;
      }
    },
    min: 0
  },
  credits: {
    enabled: true,
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -20,
      y: -15
    }
  },
  exporting: {
    enabled: false,
    sourceWidth: 875
  },
  tooltip: {
    valueDecimals: 0
  },
  plotOptions: {
    series: {
      allowPointSelect: false,
      stacking: false,
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            radius: 5
          }
        }
      }
    }
  },
  series: [{
      name: 'Coal',
      data: noxCoalDataBottom,
      lineWidth: 2
    },
    {
      name: 'Gas',
      data: noxGasDataBottom,
      lineWidth: 2
    },
    {
      name: 'Oil',
      data: noxOilDataBottom,
      lineWidth: 2
    },
    {
      name: 'Other',
      data: noxOtherDataBottom,
      lineWidth: 2
    }
  ],
  caption: {
    text: figure3NOxCaptions,
    style: {
      fontSize: '8px'
    },
  },
});
//End bottom chart options
//Chapter 3 figure 3 - Ozone Season NOx
//Chart options for the first figure - Ozone Season NOx emissions
//Top chart
var osnoxTopChart = Highcharts.chart('osnoxFigure3Top', {
  colors: colors,
  chart: {
    type: 'area',
  },
  title: {
    text: "Comparison of Ozone Season NOₓ Emissions and Generation for CSAPR and ARP Sources, 2000–" + reportYear
  },
  xAxis: {
    tickLength: 10,
    tickWidth: 1,
    tickmarkPlacement: "on",
    categories: fig3Years

  },
  yAxis: {
    max: 3000000,
    tickInterval: 1000000,
    title: {text: "NOₓ Emissions (million tons)"},
    labels: {formatter: function () {
    return (this.value/1000000)
    },
  }
  },
  plotOptions: {
    area: {
      stacking: "normal"
    },
    series: {
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            radius: 5
          }
        }
      }
    }
  },
  credits: {
    enabled: false
  },
  exporting: {
    sourceWidth: 875,
    buttons: {
      contextButton: {
        menuItems: [{
          textKey: "downloadPNG",
          onclick: function() {
            Highcharts.exportCharts([osnoxTopChart, osnoxBottomChart], {
              filename: 'Comparison of Ozone Season NOx Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadJPEG',
          onclick: function() {
            Highcharts.exportCharts([osnoxTopChart, osnoxBottomChart], {
              type: 'image/jpeg',
              filename: 'Comparison of Ozone Season NOx Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadPDF',
          onclick: function() {
            Highcharts.exportCharts([osnoxTopChart, osnoxBottomChart], {
              type: 'application/pdf',
              filename: 'Comparison of Ozone Season NOx Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadSVG',
          onclick: function() {
            Highcharts.exportCharts([osnoxTopChart, osnoxBottomChart], {
              type: 'image/svg+xml',
              filename: 'Comparison of Ozone Season NOx Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }]
      }
    }
  },
  subtitle: {
    text: "Ozone Season NOₓ Emissions"
  },
  series: [{
      name: 'Coal',
      data: osnoxCoalDataTop
    },
    {
      name: 'Gas',
      data: osnoxGasDataTop
    },
    {
      name: 'Oil',
      data: osnoxOilDataTop
    },
    {
      name: 'Other',
      data: osnoxOtherDataTop
    }
  ]
});
//End top chart options

//Start Bottom Chart copy code
var osnoxBottomChart = Highcharts.chart('osnoxFigure3Bottom', {
  colors: colors,
  chart: {
    type: 'line'
  },
  title: {
    text: 'Ozone Season NOx Generation Chart',
    style:{fontSize: '0px'}
  },
  subtitle: {
    text: "Generation"
  },
  xAxis: {
    tickLength: 10,
    tickWidth: 1,
    tickmarkPlacement: "on",
    categories: fig3Years
  },
  yAxis: {
    title: {text: "Generation (million MWh)"},
    labels: {
      formatter: function() {
        return this.value / 1000000;
      }
    },
    min: 0
  },
  credits: {
    enabled: true,
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -20,
      y: -15
    }
  },
  exporting: {
    enabled: false,
    sourceWidth: 875
  },
  tooltip: {
    valueDecimals: 0
  },
  plotOptions: {
    series: {
      allowPointSelect: false,
      stacking: false,
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            radius: 5
          }
        }
      }
    }
  },
  series: [{
      name: 'Coal',
      data: osnoxCoalDataBottom,
      lineWidth: 2
    },
    {
      name: 'Gas',
      data: osnoxGasDataBottom,
      lineWidth: 2
    },
    {
      name: 'Oil',
      data: osnoxOilDataBottom,
      lineWidth: 2
    },
    {
      name: 'Other',
      data: osnoxOtherDataBottom,
      lineWidth: 2
    }
  ],
  caption: {
    text: figure3OSNOxCaptions,
    style: {
      fontSize: '8px'
    },
  },
});
//End bottom chart options
var co2TopChart = Highcharts.chart('co2Figure3Top', {
  colors: colors,
  chart: {
    type: 'area',
  },
  title: {
    text: "Comparison of CO₂ Emissions and Generation for CSAPR and ARP Sources, 2000–" + reportYear
  },
  xAxis: {
    tickLength: 10,
    tickWidth: 1,
    tickmarkPlacement: "on",
    categories: fig3Years
  },
  yAxis: {
    tickInterval: 500000000,
    title: {text: "CO₂ Emissions (billion tons)"},
    labels: {formatter: function () {
    return (this.value/100000000)
    }
  }
  },
  plotOptions: {
    area: {
      stacking: "normal"
    },
    series: {
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            radius: 5
          }
        }
      }
    }
  },
  credits: {
    enabled: false
  },
  exporting: {
    sourceWidth: 875,
    buttons: {
      contextButton: {
        menuItems: [{
          textKey: "downloadPNG",
          onclick: function() {
            Highcharts.exportCharts([co2TopChart, co2BottomChart], {
              filename: 'Comparison of CO2 Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadJPEG',
          onclick: function() {
            Highcharts.exportCharts([co2TopChart, co2BottomChart], {
              type: 'image/jpeg',
              filename: 'Comparison of CO2 Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadPDF',
          onclick: function() {
            Highcharts.exportCharts([co2TopChart, co2BottomChart], {
              type: 'application/pdf',
              filename: 'Comparison of CO2 Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }, {
          textKey: 'downloadSVG',
          onclick: function() {
            Highcharts.exportCharts([co2TopChart, co2BottomChart], {
              type: 'image/svg+xml',
              filename: 'Comparison of CO2 Emissions and Generation for CSAPR and ARP Sources'
            });
          }
        }]
      }
    }
  },
  subtitle: {
    text: "CO₂ Emissions"
  },
  series: [{
      name: 'Coal',
      data: co2CoalDataTop
    },
    {
      name: 'Gas',
      data: co2GasDataTop
    },
    {
      name: 'Oil',
      data: co2OilDataTop
    },
    {
      name: 'Other',
      data: co2OtherDataTop
    }
  ]
});
//End top chart options

//Start Bottom Chart copy code
var co2BottomChart = Highcharts.chart('co2Figure3Bottom', {
  colors: colors,
  chart: {
    type: 'line'
  },
  title: {
    text: 'CO2 Generation Chart',
    style:{fontSize: '0px'}
  },
  subtitle: {
    text: "Generation"
  },
  xAxis: {
    tickLength: 10,
    tickWidth: 1,
    tickmarkPlacement: "on",
    categories: fig3Years
  },
  yAxis: {
    title: {text: "Generation (million MWh)"},
    labels: {
      formatter: function() {
        return this.value / 1000000;
      }
    },
    min: 0
  },
  credits: {
    enabled: true,
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -20,
      y: -15
    }
  },
  exporting: {
    enabled: false,
    sourceWidth: 875
  },
  tooltip: {
    valueDecimals: 0
  },
  plotOptions: {
    series: {
      allowPointSelect: false,
      stacking: false,
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            radius: 5
          }
        }
      }
    }
  },
  series: [{
      name: 'Coal',
      data: co2CoalDataBottom,
      lineWidth: 2
    },
    {
      name: 'Gas',
      data: co2GasDataBottom,
      lineWidth: 2
    },
    {
      name: 'Oil',
      data: co2OilDataBottom,
      lineWidth: 2
    },
    {
      name: 'Other',
      data: co2OtherDataBottom,
      lineWidth: 2
    }
  ],
  caption: {
    text: figure3SO2Captions,
    style: {
      fontSize: '8px'
    },
  },
});
//End bottom chart options
//END OF FIGURE 3 CODE



Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  },
  legend: {
    //this makes legend items a square and not a circle
    symbolRadius: 0
  },
  yAxis: {
    //For some reason, Highcharts doesn't put the last data on top
    //So we reverse the stack order like so:
    reversedStacks: false,
  },
  //Setting credits for all highcharts on this page. Will link to Air Markets and use the dates provided at the beginning of this JavaScript Code
  credits: {
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -20,
      y: -15
    }
  },
  //Setting default export size to be large / high-res
  exporting: {
    sourceWidth: 875,
    sourceHeight: 500,
    // fallbackToExportServer: false // Ensure the export happens on the client side or not at all
  }
});
//End of Global Options
//END COPY CODE
</script>
