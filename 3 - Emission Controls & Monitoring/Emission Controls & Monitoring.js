<script src="/sites/all/libraries/js/highcharts7/code/highcharts.js"></script>
<script src="/sites/all/libraries/js/highcharts7/code/modules/exporting.js"></script>
<script src="/sites/all/libraries/js/highcharts7/code/modules/export-data.js"></script>
<script src="/sites/all/libraries/js/highcharts7/code/modules/accessibility.js"></script>
<script src="/sites/all/libraries/js/highcharts7/code/modules/drilldown.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
<script>
//Javascript and custom CSS for the Progress Report
//Emissions controls and monitoring section
//Below are the required Javascript source code like highcharts and jQuery

var $ = jQuery;

//First and foremost, set the years below
//Report year is the year that the Progress Report is covering
var reportYear = 2023;
//Current year is the... current year...
var currentYear = 2024;
//Update the "Last Updated:" below
var credits = ("EPA, " + currentYear + "<br/>Last Updated: 11/2024");
var colors = ["#058DC7", "#ed561b", "#50b432", "#dddf00", "#d97c16", "#665683", "#cf2772", "#3262ae", "#47a8a2", "#8a6a55", "#899338", "#777781"];

var title1="SO₂ Emissions Controls in the ARP and CSAPR SO₂ Program, "+reportYear;
var title2="CSAPR SO₂ Program Monitoring Methodology, "+reportYear;
var title3="NOₓ Emissions Controls in CSAPR NOₓ Annual Program, "+reportYear;
var title4="CSAPR NOₓ Annual Program Monitoring Methodology, "+reportYear;
var title5="NOₓ Emissions Controls in CSAPR NOₓ Ozone Season Program, "+reportYear;
var title6 = "CSAPR NOₓ Ozone Season Program Monitoring Methodology, " + reportYear;
var title7 = "Mercury Controls at MATS-Affected Sources, " + reportYear;

var figure1Captions = 'Notes:<br/>•  To more easily see all layers on the chart, try turning off some categories by clicking items in the legend.<br />•  Due to rounding, percentages shown may not add up to 100%.<br />•  The acronyms represent the two control types. FGD is flue-gas desulfurization, and CFB is circulating fluidized bed.';

var figure2Captions = 'Notes:<br/>•  To more easily see all layers on the chart, try turning off some categories by clicking items in the legend.<br/>•  This figure displays CSAPR units which reported SO₂ emissions in '+reportYear+', with a breakdown by SO₂ monitoring methodology and primary fuel type group (coal, gas, oil, and other). The total number of CSAPR units that reported SO₂ emissions in ' +reportYear+ ' was 2,087. Among those, 375 units monitored SO₂ using CEMS, and 323 are coal-fired units.<br />•  Percent totals may not add up to 100 percent due to rounding.<br />•  "Other fuel units" include units that combusted primarily wood, waste, or other non-fossil fuel (which also boost mercury and HCl removal by ACI and DSI).';

var figure3Captions = 'Notes:<br/>•  To more easily see all layers on the chart, try turning off some categories by clicking items in the legend.<br/>•  Due to rounding, percentages shown may not add up to 100%.<br />•  “SCR” refers to selective catalytic reduction; “SNCR” fuel refers to selective non-catalytic reduction; "Combustion Only” refers to low NOₓ burners, combustion modification/fuel reburning, and/or overfire air; and “Other” fuel refers to units that burn fuels such as waste, wood, petroleum coke, or tire-derived fuel.<br />•  "Other fuel units" include units that combusted primarily wood, waste, or other non-fossil fuel (which also boost mercury and HCl removal by ACI and DSI).';

var figure4Captions = 'Notes:<br/>•  To more easily see all layers on the chart, try turning off some categories by clicking items in the legend.<br/>•  This figure displays CSAPR units which reported NOₓ emissions in '+reportYear+', with a breakdown by NOₓ monitoring methodology and primary fuel type group (coal, gas, oil, and other). The total number of CSAPR units that reported NOₓ emissions in ' +reportYear+ ' was 2,087. Among those, 1,382 units monitored NOₓ using CEMS, and 323 are coal-fired units.<br />•  Percent totals may not add up to 100 percent due to rounding.<br />•  "Other fuel units" include units that combusted primarily wood, waste, or other non-fossil fuel (which also boost mercury and HCl removal by ACI and DSI).';

var figure5Captions = 'Notes:<br/>•  To more easily see all layers on the chart, try turning off some categories by clicking items in the legend.<br/>•  Due to rounding, percentages shown may not add up to 100%.<br />• “SCR” refers to selective catalytic reduction; “SNCR” fuel refers to selective non-catalytic reduction; "Combustion Only” refers to low NOₓ burners, combustion modification/fuel reburning, and/or overfire air; and “Other” fuel refers to units that burn fuels such as waste, wood, petroleum coke, or tire-derived fuel.<br />•  There is a small amount of generation from units with “Other” controls and from “Uncontrolled” units. The data for these units is not easily visible on the full chart. To more clearly see the generation data for these units, especially for Uncontrolled and Other fuel types, use the interactive features of the figure: click on the boxes in the legend to turn off the blue, dark orange, and green categories of control types (labeled “Combustion Only,” “SCR,” and “SNCR”) and turn on the yellow and light orange categories of control types (labeled “Uncontrolled” “Other”).';

var figure6Captions = 'Notes:<br/>•  To more easily see all layers on the chart, try turning off some categories by clicking items in the legend.<br/>•  This figure displays CSAPR units which reported ozone season NOₓ emissions in '+reportYear+', with a breakdown by ozone season NOₓ monitoring methodology and primary fuel type group (coal, gas, oil, and other). The total number of CSAPR units that reported ozone season NOₓ emissions in '+reportYear+' was 2,468. Among those, 1,806 units monitored NOₓ using CEMS, and 325 are coal-fired units.<br />•  Percent totals may not add up to 100 percent due to rounding.<br />•  "Other fuel units" include units that combusted primarily wood, waste, or other non-fossil fuel (which also boost mercury and HCl removal by ACI and DSI).';

var figure7Captions = 'Notes:<br/>•  Percent totals may not add up to 100 percent due to rounding.<br />•  This data is from the MATS-affected sources that submitted hourly emissions data to EPA. Units not reporting data (e.g. those monitoring using periodic testing) are not included in this report.';

//FIGURE 1 DATA – GLOAD column from Thuy's data
var fig1Legend = [
  {name: 'CFB w/limestone', data: null},
  {name: 'Coal w/FGD', data: null},
  {name: 'Coal and Oil w/o post-combustion controls', data: null},
];
var fig1Series1 = [{
    name: 'CFB w/limestone',
    data: [12703902],
    id: 'series1'
  },
  {
    name: 'Coal w/FGD',
    data: [614257209],
    id: 'series2'
  },
  {
    name: 'Coal and Oil w/o post-combustion controls',
    data: [105538350],
    id: 'series3'
  }
];
//UNITS column from Thuy's data
var fig1Series2 = [{
  name: 'CFB w/limestone', 
y: 38,
id: 'series1'
},
{
name: 'Coal w/FGD',
y: 306,
id: 'series2'
},
{
 name: 'Coal and Oil w/o post-combustion controls', 
y: 92,
id: 'series3'
}
];

//FIGURE 2 DATA – UNITS column from Thuy's data
var fig2Legend = [
  ['Gas Units w/CEMS', null],
  ['Gas Units w/o CEMS', null],
  ['Oil Units w/CEMS', null],
  ['Oil Units w/o CEMS', null],
  ['Other Units w/CEMS', null],
  ['Other Units w/o CEMS', null],
  ['Coal Units w/CEMS', null],
];
var fig2Series1 = [
  ['Gas Units w/CEMS', 19],
  ['Gas Units w/o CEMS', 1510],
  ['Oil Units w/CEMS', 5],
  ['Oil Units w/o CEMS', 195],
  ['Other Units w/CEMS', 31],
  ['Other Units w/o CEMS', 1],
  ['Coal Units w/CEMS', 280],
];
//SO2MASS column from Thuy's data
var fig2Series2 = [
  ['Gas Units w/CEMS', 584],
  ['Gas Units w/o CEMS', 3248],
  ['Oil Units w/CEMS', 193],
  ['Oil Units w/o CEMS', 366],
  ['Other Units w/CEMS', 16501],
  ['Other Units w/o CEMS', 63],
  ['Coal Units w/CEMS', 372046],
];
//END FIGURE 2 DATA

//FIGURE 3 DATA – GLOAD column from Thuy's data
//Legend data
var fig3Legend = [
  {name: 'Combustion Only', data: null},
  {name: 'SCR', data: null},
  {name: 'SNCR', data: null},
  {name: 'Uncontrolled', data: null},
  {name: 'Other', data: null},
];
//Below data is sorted as Coal, Oil, Gas, Oil, other
var fig3Series1 = [{
    name: 'Combustion Only',
    data: [92055845, 1138831, 78739271, 0],
    id: 'series1'
  },
  {
    name: 'SCR',
    data: [363533908, 84700, 635950990, 0],
    id: 'series2'
  },
  {
    name: 'SNCR',
    data: [21321098, 0, 3398527, 18],
    id: 'series3'
  },
  {
    name: 'Uncontrolled',
    data: [1051860, 777087, 7253157, 343065],
    id: 'series4'
  },
  {
    name: 'Other',
    data: [0, 310341, 25538380, 1404480],
    id: 'series5'
  }
];
//This data is each of the types of controls added together
var fig3Series2 = [{
  name: 'Combustion Only',
  y: 171933947,
  id: 'series1'
},
{
  name: 'SCR',
  y: 999569598,
  id: 'series2'
},
{
  name: 'SNCR',
  y: 25147574,
  id: 'series3'
},
{
 name: 'Uncontrolled', 
 y: 8284802,
 id: 'series4'
},
{
 name: 'Other',
y: 9425169,
id: 'series5'
}
];
//END FIGURE 3 DATA

//FIGURE 4 DATA – UNITS column from Thuy's data
var fig4Legend = [
  {name: 'Gas Units w/CEMS', data: null},
  {name: 'Gas Units w/o CEMS', data: null},
  {name: 'Oil Units w/CEMS', data: null},
  {name: 'Oil Units w/o CEMS', data: null},
  {name: 'Other Units w/CEMS', data: null},
  {name: 'Other Units w/o CEMS', data: null},
  {name: 'Coal Units w/CEMS', data: null},
]
var fig4Series1 = [{
  name: 'Gas Units w/CEMS',
  y: 1021
},{
  name: 'Gas Units w/o CEMS',
  y: 508
},{
  name: 'Oil Units w/CEMS', 
  y: 21
},{
  name: 'Oil Units w/o CEMS',
  y: 179
},{
  name: 'Other Units w/CEMS',
  y: 32
},{
  name: 'Other Units w/o CEMS',
  y: null
},{
  name: 'Coal Units w/CEMS',
  y: 280
}];
//NOXM Column from Thuy's data
var fig4Series2 = [{
name: 'Gas Units w/CEMS',
y: 51341
},{
 name: 'Gas Units w/o CEMS',
 y: 8480
 },{
 name: 'Oil Units w/CEMS', 
 y: 706
},{
  name: 'Oil Units w/o CEMS',
  y: 1217
},{
  name: 'Other Units w/CEMS',
  y: 7110
},{
  name: 'Other Units w/o CEMS',
  y: null
},{
  name: 'Coal Units w/CEMS',
  y: 268561
}];
//END FIGURE 4 DATA

//FIGURE 5 DATA – GLOAD column
//Below data is sorted as Coal, Oil, Gas, other
var fig5Legend=[{
    name: 'Combustion Only',
    data: null
},{
   name: 'SCR',
   data: null
},{
   name: 'SNCR',
   data: null
},{
    name: 'Uncontrolled',
   data: null
},{
   name: 'Other',
   data: null
}];

var fig5Series1 = [{
    name: 'Combustion Only',
    data: [67258567, 558682, 114623205, 0]
  },
  {
    name: 'SCR',
    data: [168104861, 52984, 409757904, 0]
  },
  {
    name: 'SNCR',
    data: [9942883, 0, 2763916, 1525569]
  },
  {
    name: 'Uncontrolled',
    data: [1175725, 510448, 12063461, 0]
  },
  {
    name: 'Other',
    data: [0, 158709, 16384100, 528011]
  }
];
//The data below is each of the controls added together
var fig5Series2 = [{
  name: 'Combustion Only',
  y: 182440453
},{
  name: 'SCR',
  y: 577915748
},{
  name: 'SNCR', 
  y: 14232368
},{
  name: 'Uncontrolled', 
  y: 13749634
},{
  name: 'Other',
  y: 17070820
}];
//END FIGURE 5 DATA

//FIGURE 6 DATA – UNITS column from Thuy's data
var fig6Legend = [{
name: 'Gas Units w/CEMS', y: null},
{name: 'Gas Units w/o CEMS', y: null},
{name: 'Oil Units w/CEMS', y: null},
{name: 'Oil Units w/o CEMS', y: null},
{name: 'Other Units w/CEMS', y: null},
{name: 'Other Units w/o CEMS', y: null},
{name: 'Coal Units w/CEMS', y: 284}];

var fig6Series1 = [{
name: 'Gas Units w/CEMS',
y: 1461
},{
name: 'Gas Units w/o CEMS',
y: 494
},{
name: 'Oil Units w/CEMS',
y: 21
},{
name: 'Oil Units w/o CEMS',
y: 129
},{
name: 'Other Units w/CEMS',
y: 34
},{
name: 'Other Units w/o CEMS', 
y: null
},{
name: 'Coal Units w/CEMS',
y: 284
}];
//NOXM Column from Thuy's data
var fig6Series2 = [{
  name: 'Gas Units w/CEMS', 
  y: 65608
},{
  name: 'Gas Units w/o CEMS', 
  y: 6674
},{
  name: 'Oil Units w/CEMS',
  y: 407
},{
  name: 'Oil Units w/o CEMS',
  y: 671
},{
  name: 'Other Units w/CEMS',
  y: 2496
},{
  name: 'Other Units w/o CEMS',
  y: null
},{
  name: 'Coal Units w/CEMS',
  y: 120580
}];
//END FIGURE 6 DATA

//FIGURE 7 DATA
var fig7Legend = [
{name: 'FGD',  y: null},
{name: 'ACI', y: null},
{name: 'Both FGD & ACI', y: null},
{name: 'No Post Combustion Controls', y: null}];

var fig7Series1 = [{
  name: 'FGD',
  y: 165
},{
  name: 'ACI',
  y: 41
},{
  name: 'Both FGD & ACI',
  y: 119
},{
  name: 'No Post Combustion Controls',
  y: 27
}];
var fig7Series2 = [{
  name: 'FGD',
  y: 303190063
},{
  name: 'ACI',
  y: 82804331
},{
  name: 'Both FGD & ACI',
  y: 289003179
},{
  name: 'No Post Combustion Controls', 
  y: 17345167
}];
//END FIGURE 7 DATA

//Creating export function
Highcharts.getSVG = function(charts) {
  let svgArr = [],
    width = 0,
    height = 0;

  // Get the SVG for the first chart and add it to the array
  let chart0 = charts[0],
    svg0 = chart0.getSVG(),
    svgWidth0 = +svg0.match((/^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/)[1]),
    svgHeight0 = +svg0.match(/^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/)[1];
  svg0 = svg0.replace('<svg', '<g transform="translate(0, 0)" ');
  svg0 = svg0.replace('</svg>', '</g>');
  svgArr.push(svg0);

  // Get the SVGs for the second and third charts and add them to the array
  let chart1 = charts[1],
    chart2 = charts[2],
    svg1 = chart1.getSVG(),
    svg2 = chart2.getSVG(),
    svgWidth1 = +svg1.match(/^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/)[1],
    svgWidth2 = +svg2.match(/^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/)[1],
    svgHeight1 = +svg1.match(/^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/)[1],
    svgHeight2 = +svg2.match(/^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/)[1];
  svg1 = svg1.replace('<svg', '<g transform="translate(0,' + svgHeight0 + ')" ');
  svg1 = svg1.replace('</svg>', '</g>');
  svg2 = svg2.replace('<svg', '<g transform="translate(' + svgWidth1 + ',' + svgHeight0 + ')" ');
  svg2 = svg2.replace('</svg>', '</g>');
  svgArr.push(svg1, svg2);
  
    // Get the SVG for the fourth chart and add it to the array
  let chart3 = charts[3],
    svg3 = chart3.getSVG(),
    svgWidth3 = +svg3.match((/^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/)[1]),
    svgHeight3 = +svg3.match(/^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/)[1];
  svg3 = svg3.replace('<svg', '<g transform="translate(0,'+ (svgHeight0 + Math.max(svgHeight1, svgHeight2)) + ')" ');
  svg3 = svg3.replace('</svg>', '</g>');
  svgArr.push(svg3);

  // Calculate the width and height of the combined SVG
  width = Math.max(svgWidth1 + svgWidth2);
  height = svgHeight0 + Math.max(svgHeight1, svgHeight2) + svgHeight3;
  return '<svg height="' + height + '" width="' + width +
    '" version="1.1" xmlns="http://www.w3.org/2000/svg">' +
    svgArr.join('') + '</svg>';
};

//Setting global highcharts settings
Highcharts.exportCharts = function(charts, options) {

  // Merge the options
  options = Highcharts.merge(Highcharts.getOptions().exporting, options);

  // Post to export server
  Highcharts.post(options.url, {
    filename: options.filename || reportYear+"_figure_export",
    type: options.type,
    width: options.width,
    svg: Highcharts.getSVG(charts)
  });
};

Highcharts.setOptions({
  colors: colors
});

Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  }
});

// Helper function to toggle point visibility in fig1Chart2 based on fig1Chart1's series
function togglePiePointVisibility1(seriesName, show) {
  const pieSeries = fig1Chart2.series[0];
  const point = pieSeries.data.find(point => point.name === seriesName);
  if (point) {
    point.setVisible(show);
  }
}

//FIGURE 1 Javascript
// Function to toggle visibility of points across both fig1Chart1 and fig1Chart2
function togglePointVisibility1(itemName) {
  [fig1Chart1, fig1Chart2].forEach(chart => {
    chart.series[0].data.forEach(point => {
      if (point.name === itemName) {
        point.setVisible(!point.visible);
      }
      });
      chart.series.forEach(series => {
      if (series.name === itemName) {
          series.setVisible(!series.visible); // Toggle this series' visibility
        // Find the corresponding legend item and toggle muted style
        const legendItems = document.querySelectorAll('#fig1Container4 .highcharts-legend-item');
        legendItems.forEach(legendItem => {
          const legendText = legendItem.querySelector('text');
          const legendIcon = legendItem.querySelector('rect, path'); // Select icon elements (rect or path)

          if (legendText && legendText.textContent.trim() === itemName) {
            legendText.classList.toggle('muted-legend-item', !series.visible); // Toggle muted style on text
            if (legendIcon) {
              legendIcon.setAttribute('fill', series.visible ? series.color : '#cccccc'); // Toggle icon color
            }
          }
        });
      }
    });
  });
  }
//Title chart
const fig1Title = Highcharts.chart('fig1Container0',{
    chart: {height: 50,},
        exporting:{enabled: false, sourceWidth: 1200},
                credits:{enabled: false},
title:{text:title1,}});

//Captions chart
const fig1Captions = Highcharts.chart('fig1Container4',{
    chart: {type: 'pie', height: 150,},
        exporting:{enabled: false, sourceWidth: 1200},
				title:{text: ""},
      series: [{
    data: fig1Legend, // Use fig1Legend to display categories in the legend only
    showInLegend: true,
  }],
      plotOptions: {
        pie: {
            size: -10,
        },
      events: {
        legendItemClick: function (event) {
          const seriesVisible = this.visible;
          togglePiePointVisibility(this.name, !seriesVisible); // Toggle pie point visibility
          toggleLegendAppearance(this, isVisible); // Toggle muted appearance
          this.setVisible(!seriesVisible); // Toggle this series' visibility
        }
      }
    },
    legend: {
    align: 'center',
    y: -40,
    verticalAlign: 'top',
    symbolRadius: 0,
    layout: 'horizontal',
    itemDistance: 4,
    //itemStyle: { fontSize: '9px' },
    itemHiddenStyle: {
      color: '#cccccc', // Dimmed color when hidden
      fontWeight: 'normal'
    },
    labelFormatter: function() { return this.name; }
  },
  //Captions are where the notes go!
  caption: {
    text: figure1Captions,
    align: "left",
    verticalAlign: "top",
    margin: 0,
    y: 70,
    style: {
      fontSize: '8px',
    },
  },
credits: {
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -20,
      y: -15}
  },
});

// Add click event to legend items within fig1Captions
fig1Captions.series[0].data.forEach(legendItem => {
  Highcharts.addEvent(legendItem, 'legendItemClick', function (e) {
    e.preventDefault(); // Prevent default legend item click behavior
    togglePointVisibility1(this.name); // Toggle visibility on both charts
  });
});

// Chart 1 (left one - column chart)
const fig1Chart1 = Highcharts.chart('fig1Container1', {
  chart: {
    height: 350,
marginBottom: 35,
    defaultSeriesType: 'column',
  },
  title: {
    text: "Generation (million MWh) by SO₂ Emission Control Type"
  },
  legend: {
    enabled: false,
    symbolRadius: 0
  },
  xAxis: {
    categories: [""]
  },
  yAxis: {
    min: 0,
    title: { enabled: false },
    labels: {
      formatter: function() { return this.value / 1000000; }
    },
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        formatter: function() { return Highcharts.numberFormat(this.y / 1000000, 0); },
        style: { fontWeight: "none", color: "#5e5e5e", fontSize: "10px" }
      },
    },
         events: {
        legendItemClick: function (event) {
          event.preventDefault();
          const seriesVisible = this.visible;
          togglePiePointVisibility1(this.name, !seriesVisible); // Toggle pie point visibility
          this.setVisible(!seriesVisible); // Toggle this series' visibility
        }
      }
  },
  exporting: { enabled: false },
  tooltip: {
    headerFormat: "",
    pointFormat: '<span style="font-size: 10px;">{series.name}</span><br/><b>{point.y:,.0f} MWh</b>'
  },
  series: fig1Series1,
  credits: { enabled: false }
});

// Chart 2 (right one - pie chart)
const fig1Chart2 = Highcharts.chart('fig1Container2', {
  chart: {
    height: 350,
    defaultSeriesType: 'pie',
  },
  legend: { enabled: false },
  title: {
    text: "Percentage of Generation with and without SO₂ Emissions Controls"
  },
  exporting: {
    menuItemDefinitions: {
      // Custom definition
      downloadPNG: {
        onclick: function() {
          Highcharts.exportCharts([fig1Title, fig1Chart1, fig1Chart2, fig1Captions]);
        },
        text: 'Download PNG'
      },
      downloadJPEG: {
        onclick: function() {
          Highcharts.exportCharts([fig1Title, fig1Chart1, fig1Chart2, fig1Captions], {
            type: 'image/jpeg'
          });
        },
        text: 'Download JPEG',
      },
      downloadPDF: {
        onclick: function() {
          Highcharts.exportCharts([fig1Title, fig1Chart1, fig1Chart2, fig1Captions], {
            type: 'application/pdf'
          });
        },
        text: 'Download PDF',
      },
      downloadSVG: {
        onclick: function() {
          Highcharts.exportCharts([fig1Title, fig1Chart1, fig1Chart2, fig1Captions], {
            type: 'image/svg+xml'
          });
        },
        text: 'Download SVG vector image',
      }
    },
    buttons: {
      contextButton: {
        menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']

        //{"viewFullscreen": {}, "printChart": {}, "separator": {}, "downloadPNG": {}, "downloadJPEG": {}, "downloadPDF": {}, "downloadSVG": {}}
      }
    }
  },
  plotOptions: {
    pie: {
      size: '60%',
      showInLegend: true,
      dataLabels: {
        enabled: true,
        padding: 0
      },
      allowPointSelect: true,
    },
    events: {
        legendItemClick: function (event) {
          event.preventDefault();
          const seriesVisible = this.visible;
          togglePiePointVisibility1(this.name, !seriesVisible); // Toggle pie point visibility
          this.setVisible(!seriesVisible); // Toggle this series' visibility
        }
      }
    },
  tooltip: {
    headerFormat: "",
    pointFormat: '<span style="font-size: 10px;">{point.name}</span><br/><b>{point.y:,.0f} MWh ({point.percentage:.0f}%)</b>'
  },
  series: [{
    data: fig1Series2,
    dataLabels: {
      enabled: true,
      padding: 0,
      format: '{point.name}<br /><b>{point.percentage:.0f}%</b>',
      style: { fontWeight: "none", color: "#5e5e5e", fontSize: "10px" }
    }
  }],
  credits: { enabled: false }
});
//END FIGURE 1 CODE


//START FIGURE 2 CODE
// Legend, captions, and credits container
const fig2Captions = Highcharts.chart('fig2Container4', {
 chart: {
    type: 'pie',
    height: 150,
  },
  exporting: { enabled: false,  sourceWidth: 1200 },
  title: { text: "" },
  series: [{
    data: fig2Legend, // Use fig2Legend to display categories in the legend only
    showInLegend: true,

  }],
    plotOptions: {
        pie: {
            size: -10
        }
    },
  legend: {
    align: 'center',
    y: -85,
    verticalAlign: 'top',
    layout: 'horizontal',
    symbolRadius: 0,
    itemDistance: 20,
    //itemStyle: { fontSize: '9px' },
    labelFormatter: function() { return this.name; }
  },
    caption: {
    y: 65,
    text: figure2Captions,
    align: "left",
    verticalAlign: "top",
    margin: 0,
    style: { fontSize: '8px' }
  },
  credits: {
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -20,
      y: -15
    }
  }
});

// Function to toggle visibility of points across both fig2Chart1 and fig2Chart2
function togglePointVisibility2(pointName) {
  [fig2Chart1, fig2Chart2].forEach(chart => {
    chart.series[0].data.forEach(point => {
      if (point.name === pointName) {
        point.setVisible(!point.visible);
                 // Find the corresponding legend item and toggle muted style
        // Find the corresponding legend item and toggle muted style
        const legendItems = document.querySelectorAll('#fig2Container4 .highcharts-legend-item');
        legendItems.forEach(legendItem => {
          const legendText = legendItem.querySelector('text');
          const legendIcon = legendItem.querySelector('rect, path'); // Select icon elements (rect or path)

          if (legendText && legendText.textContent.trim() === pointName) {
            legendText.classList.toggle('muted-legend-item', !point.visible); // Toggle muted style on text
            if (legendIcon) {
              legendIcon.setAttribute('fill', point.visible ? point.color : '#cccccc'); // Toggle icon color
            }
          }
        });
      }
    });
  });
  }

// Add click event to legend items within fig2Captions
fig2Captions.series[0].data.forEach(legendItem => {
  Highcharts.addEvent(legendItem, 'legendItemClick', function (e) {
    e.preventDefault(); // Prevent default legend item click behavior
    togglePointVisibility2(this.name); // Toggle visibility on both charts
  });
});

const fig2Title = Highcharts.chart('fig2Container0',{
    chart: {height: 50,},
        exporting:{enabled: false, sourceWidth: 1200},
                credits:{enabled: false},
title:{text:title2,}});

//Chart 1 (left one)
const fig2Chart1 = Highcharts.chart('fig2Container1', {
  chart: {
    defaultSeriesType: 'pie',
  },
  title: {
    text: "Monitoring Methodology by Number of Units"
  },
    legend: {
    enabled: false
  },
  exporting:{enabled: false},
  plotOptions: {
    series: {
      states: {
        hover: {
          enabled: false
        }
      }
    },
    pie: {
     size: '60%',
      showInLegend: true,
      dataLabels: {
        enabled: true,
        padding: 0
      }
    },
    allowPointSelect: true
  },
  tooltip: {
    headerFormat: "",
    pointFormat: '<span style="font-size: 10px;">{point.name}</span><br/><b>{point.y:,.0f} ({point.percentage:.0f}%)</b>'
  },
  series: [{
    data: fig2Series1,
    dataLabels: {
      enabled: true,
      padding: 0,
      format: '{point.name}<br /><b>{point.percentage:.0f}%</b>',
      style: {
        fontWeight: "none",
        color: "#5e5e5e",
        fontSize: "10px"
      }
    }
  },
  ],
  credits: {
    enabled: false
  },
});
//Chart 2 (right one)
const fig2Chart2 = Highcharts.chart('fig2Container2', {
  chart: {
    defaultSeriesType: 'pie',
  },
    legend: {
    enabled: false,
  },
  title: {
    text: "Monitoring Methodology by SO₂ Emissions"
  },
  exporting: {
    menuItemDefinitions: {
      // Custom definition
      downloadPNG: {
        onclick: function() {
          Highcharts.exportCharts([fig2Title, fig2Chart1, fig2Chart2, fig2Captions]);
        },
        text: 'Download PNG'
      },
      downloadJPEG: {
        onclick: function() {
          Highcharts.exportCharts([fig2Title, fig2Chart1, fig2Chart2, fig2Captions], {
            type: 'image/jpeg'
          });
        },
        text: 'Download JPEG',
      },
      downloadPDF: {
        onclick: function() {
          Highcharts.exportCharts([fig2Title, fig2Chart1, fig2Chart2, fig2Captions], {
            type: 'application/pdf'
          });
        },
        text: 'Download PDF',
      },
      downloadSVG: {
        onclick: function() {
          Highcharts.exportCharts([fig2Title, fig2Chart1, fig2Chart2, fig2Captions], {
            type: 'image/svg+xml'
          });
        },
        text: 'Download SVG vector image',
      }
    },
    buttons: {
      contextButton: {
        menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']

        //{"viewFullscreen": {}, "printChart": {}, "separator": {}, "downloadPNG": {}, "downloadJPEG": {}, "downloadPDF": {}, "downloadSVG": {}}
      }
    }
  },
  plotOptions: {
    series: {
      states: {
        hover: {
          enabled: false
        }
      }
    },
    pie: {
     size: '60%',
      showInLegend: true,
        startAngle: 0,
      dataLabels: {
        enabled: true,
        padding: 0
      }
    },
    allowPointSelect: true
  },
  tooltip: {
    headerFormat: "",
    pointFormat: '<span style="font-size: 10px;">{point.name}</span><br/><b>{point.y:,.0f} ({point.percentage:.0f}%)</b>'
  },
  series: [{
    data: fig2Series2,
    dataLabels: {
      enabled: true,
      padding: 0,
      format: '{point.name}<br /><b>{point.percentage:.0f}%</b>',
      style: {
        fontWeight: "none",
        color: "#5e5e5e",
        fontSize: "10px"
      }
    }
  }],
  credits: {
    enabled: false
  },
});
//END FIGURE 2 CODE

//START FIGURE 3 CODE
// Function to toggle visibility of points across both fig3Chart1 and fig3Chart2
function togglePointVisibility3(itemName) {
  [fig3Chart1, fig3Chart2].forEach(chart => {
    chart.series[0].data.forEach(point => {
      if (point.name === itemName) {
        point.setVisible(!point.visible);
      }
      });
      chart.series.forEach(series => {
      if (series.name === itemName) {
          series.setVisible(!series.visible); // Toggle this series' visibility
        // Find the corresponding legend item and toggle muted style
        const legendItems = document.querySelectorAll('#fig3Container4 .highcharts-legend-item');
        legendItems.forEach(legendItem => {
          const legendText = legendItem.querySelector('text');
          const legendIcon = legendItem.querySelector('rect, path'); // Select icon elements (rect or path)

          if (legendText && legendText.textContent.trim() === itemName) {
            legendText.classList.toggle('muted-legend-item', !series.visible); // Toggle muted style on text
            if (legendIcon) {
              legendIcon.setAttribute('fill', series.visible ? series.color : '#cccccc'); // Toggle icon color
            }
          }
        });
      }
    });
  });
  }
//Title chart
const fig3Title = Highcharts.chart('fig3Container0',{
    chart: {height: 50,},
        exporting:{enabled: false, sourceWidth: 1200},
                credits:{enabled: false},
title:{text:title3,}});

//Captions chart
const fig3Captions = Highcharts.chart('fig3Container4',{
    chart: {type: 'pie', height: 140,},
        exporting:{enabled: false, sourceWidth: 1200},
				title:{text: ""},
      series: [{
    data: fig3Legend, // Use fig1Legend to display categories in the legend only
    showInLegend: true,
  }],
      plotOptions: {
        pie: {
            size: -10,
        },
      events: {
        legendItemClick: function (event) {
          const seriesVisible = this.visible;
          togglePiePointVisibility(this.name, !seriesVisible); // Toggle pie point visibility
          toggleLegendAppearance(this, isVisible); // Toggle muted appearance
          this.setVisible(!seriesVisible); // Toggle this series' visibility
        }
      }
    },
    legend: {
    align: 'center',
    y: -65,
    verticalAlign: 'top',
    symbolRadius: 0,
    layout: 'horizontal',
    itemDistance: 4,
    //itemStyle: { fontSize: '9px' },
    itemHiddenStyle: {
      color: '#cccccc', // Dimmed color when hidden
      fontWeight: 'normal'
    },
    labelFormatter: function() { return this.name; }
  },
  //Captions are where the notes go!
  caption: {
    text: figure3Captions,
    align: "left",
    verticalAlign: "top",
    margin: 0,
    y: 60,
    style: {
      fontSize: '8px',
    },
  },
credits: {
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -20,
      y: -15}
  },
});

// Add click event to legend items within fig1Captions
fig3Captions.series[0].data.forEach(legendItem => {
  Highcharts.addEvent(legendItem, 'legendItemClick', function (e) {
    e.preventDefault(); // Prevent default legend item click behavior
    togglePointVisibility3(this.name); // Toggle visibility on both charts
  });
});

//Chart 1 (left one)
const fig3Chart1 = Highcharts.chart('fig3Container1', {
  chart: {
    height: 350,
    marginBottom: 35,
    defaultSeriesType: 'column',
  },
  title: {
    text: "Generation (million MWh) by NOₓ Control Type"
  },
    legend: {
    enabled: false
  },
                xAxis: {
                    categories: ["Coal", "Oil", "Gas", "Other"]
                },
                yAxis: {
                    labels: {
                        formatter: function () {
                            return this.value / 1000000;
                        }
                    },
                    stackLabels: {
                        enabled: true,
                        formatter: function () {
                            return Highcharts.numberFormat(this.total / 1000000, 0)
                        },
                        style: {
                            fontWeight: "none",
                            color: "#5e5e5e",
                            fontSize: "10px"
                        }
                    }
                },
  plotOptions: {
        column: {
            stacking: 'normal',
        },
    series: {
      dataLabels: {
        enabled: false,
        formatter: function() { return Highcharts.numberFormat(this.y / 1000000, 0); },
        style: { fontWeight: "none", color: "#5e5e5e", fontSize: "10px" }
      },
         events: {
        legendItemClick: function (event) {
          event.preventDefault();
          const seriesVisible = this.visible;
          togglePiePointVisibility3(this.name, !seriesVisible); // Toggle pie point visibility
          this.setVisible(!seriesVisible); // Toggle this series' visibility
        }
      }
      }
  },
  exporting: {
    enabled: false,
  },
                tooltip: {
                    shared: true,
                    headerFormat: '<span style="font-size: 10px;">{point.x}</span><br/>',
                    pointFormat: '<span style="color:{point.color};">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
                },
  series: fig3Series1,
  credits: {
    enabled: false
  },
});
//Chart 2 (right one)
const fig3Chart2 = Highcharts.chart('fig3Container2', {
  chart: {
    height: 350,
    defaultSeriesType: 'pie',
  },
    legend: {
//disabling the legend of the right charts since it is duplicative with the legend on the left charts
enabled: false,
  },
  title: {
    text: "Percentage of Generation with and without NOₓ Emissions Controls"
  },
  exporting: {
    menuItemDefinitions: {
      // Custom definition
      downloadPNG: {
        onclick: function() {
          Highcharts.exportCharts([fig3Title, fig3Chart1, fig3Chart2, fig3Captions]);
        },
        text: 'Download PNG'
      },
      downloadJPEG: {
        onclick: function() {
          Highcharts.exportCharts([fig3Title, fig3Chart1, fig3Chart2, fig3Captions], {
            type: 'image/jpeg'
          });
        },
        text: 'Download JPEG',
      },
      downloadPDF: {
        onclick: function() {
          Highcharts.exportCharts([fig3Title, fig3Chart1, fig3Chart2, fig3Captions], {
            type: 'application/pdf'
          });
        },
        text: 'Download PDF',
      },
      downloadSVG: {
        onclick: function() {
          Highcharts.exportCharts([fig3Title, fig3Chart3, fig3Chart2, fig3Captions], {
            type: 'image/svg+xml'
          });
        },
        text: 'Download SVG vector image',
      }
    },
    buttons: {
      contextButton: {
        menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']

        //{"viewFullscreen": {}, "printChart": {}, "separator": {}, "downloadPNG": {}, "downloadJPEG": {}, "downloadPDF": {}, "downloadSVG": {}}
      }
    }
  },
  plotOptions: {
    pie: {
      size: '60%',
      showInLegend: true,
      dataLabels: {
        enabled: true,
        padding: 0
      },
      allowPointSelect: true,
    },
    events: {
        legendItemClick: function (event) {
          event.preventDefault();
          const seriesVisible = this.visible;
          togglePiePointVisibility3(this.name, !seriesVisible); // Toggle pie point visibility
          this.setVisible(!seriesVisible); // Toggle this series' visibility
        }
      }
    },
  tooltip: {
    headerFormat: "",
    pointFormat: '<span style="font-size: 10px;">{point.name}</span><br/><b>{point.y:,.0f} MWh ({point.percentage:.0f}%)</b>'
  },
  series: [{
    data: fig3Series2,
    dataLabels: {
      enabled: true,
      padding: 0,
      format: '{point.name}<br /><b>{point.percentage:.0f}%</b>',
      style: {
        fontWeight: "none",
        color: "#5e5e5e",
        fontSize: "10px"
      }
    }
  }],
  credits: {
    enabled: false
  },
});
//END FIGURE 3 CODE

//FIGURE 4 CODE
// Legend, captions, and credits container
const fig4Captions = Highcharts.chart('fig4Container4', {
 chart: {
    type: 'pie',
    height: 150,
  },
  exporting: { enabled: false,  sourceWidth: 1200 },
  title: { text: "" },
  series: [{
    data: fig4Legend, // Use fig4Legend to display categories in the legend only
    showInLegend: true,
  }],
    plotOptions: {
        pie: {
            size: -10
        }
    },
  legend: {
    align: 'center',
    y: -85,
    verticalAlign: 'top',
    layout: 'horizontal',
    symbolRadius: 0,
    itemDistance: 20,
    //itemStyle: { fontSize: '9px' },
    labelFormatter: function() { return this.name; }
  },
    caption: {
    y: 65,
    text: figure4Captions,
    align: "left",
    verticalAlign: "top",
    margin: 0,
    style: { fontSize: '8px' }
  },
  credits: {
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -20,
      y: -15
    }
  }
});

// Function to toggle visibility of points across both fig4Chart1 and fig4Chart2
function togglePointVisibility4(pointName) {
  [fig4Chart1, fig4Chart2].forEach(chart => {
    chart.series[0].data.forEach(point => {
      if (point.name === pointName) {
        point.setVisible(!point.visible);
                 // Find the corresponding legend item and toggle muted style
        // Find the corresponding legend item and toggle muted style
        const legendItems = document.querySelectorAll('#fig4Container4 .highcharts-legend-item');
        legendItems.forEach(legendItem => {
          const legendText = legendItem.querySelector('text');
          const legendIcon = legendItem.querySelector('rect, path'); // Select icon elements (rect or path)

          if (legendText && legendText.textContent.trim() === pointName) {
            legendText.classList.toggle('muted-legend-item', !point.visible); // Toggle muted style on text
            if (legendIcon) {
              legendIcon.setAttribute('fill', point.visible ? point.color : '#cccccc'); // Toggle icon color
            }
          }
        });
      }
    });
  });
  }

// Add click event to legend items within fig4Captions
fig4Captions.series[0].data.forEach(legendItem => {
  Highcharts.addEvent(legendItem, 'legendItemClick', function (e) {
    e.preventDefault(); // Prevent default legend item click behavior
    togglePointVisibility4(this.name); // Toggle visibility on both charts
  });
});

const fig4Title = Highcharts.chart('fig4Container0',{
    chart: {height: 50,},
        exporting:{enabled: false, sourceWidth: 1200},
                credits:{enabled: false},
title:{text:title4,}});

//Chart 1 (left one)
const fig4Chart1 = Highcharts.chart('fig4Container1', {
  chart: {
    defaultSeriesType: 'pie',
  },
  title: {
    text: "Monitoring Methodology by Number of Units"
  },
    legend: {enabled: false},
  exporting:{enabled: false},
  plotOptions: {
    series: {
      states: {
        hover: {
          enabled: false
        }
      }
    },
    pie: {
     size: '60%',
      showInLegend: true,
      dataLabels: {
        enabled: true,
        padding: 0
      }
    },
    allowPointSelect: true
  },
  tooltip: {
    headerFormat: "",
    pointFormat: '<span style="font-size: 10px;">{point.name}</span><br/><b>{point.y:,.0f} ({point.percentage:.0f}%)</b>'
  },
  series: [{
    data: fig4Series1,
    dataLabels: {
      enabled: true,
      padding: 0,
      format: '{point.name}<br /><b>{point.percentage:.0f}%</b>',
      style: {
        fontWeight: "none",
        color: "#5e5e5e",
        fontSize: "10px"
      }
    }
  }],
  credits: {
    enabled: false
  },
});
//Chart 2 (right one)
const fig4Chart2 = Highcharts.chart('fig4Container2', {
  chart: {
    defaultSeriesType: 'pie',
  },
    legend: {enabled: false},
  title: {
    text: "Monitoring Methodology by NOₓ Emissions"
  },
  exporting: {
    menuItemDefinitions: {
      // Custom definition
      downloadPNG: {
        onclick: function() {
          Highcharts.exportCharts([fig4Title, fig4Chart1, fig4Chart2, fig4Captions]);
        },
        text: 'Download PNG'
      },
      downloadJPEG: {
        onclick: function() {
          Highcharts.exportCharts([fig4Title, fig4Chart1, fig4Chart2, fig4Captions], {
            type: 'image/jpeg'
          });
        },
        text: 'Download JPEG',
      },
      downloadPDF: {
        onclick: function() {
          Highcharts.exportCharts([fig4Title, fig4Chart1, fig4Chart2, fig4Captions], {
            type: 'application/pdf'
          });
        },
        text: 'Download PDF',
      },
      downloadSVG: {
        onclick: function() {
          Highcharts.exportCharts([fig4Title, fig4Chart1, fig4Chart2, fig4Captions], {
            type: 'image/svg+xml'
          });
        },
        text: 'Download SVG vector image',
      }
    },
    buttons: {
      contextButton: {
        menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']

        //{"viewFullscreen": {}, "printChart": {}, "separator": {}, "downloadPNG": {}, "downloadJPEG": {}, "downloadPDF": {}, "downloadSVG": {}}
      }
    }
  },
  plotOptions: {
    series: {
      states: {
        hover: {
          enabled: false
        }
      }
    },
    pie: {
     size: '60%',
      showInLegend: true,
        startAngle: 0,
      dataLabels: {
        enabled: true,
        padding: 0
      }
    },
    allowPointSelect: true
  },
  tooltip: {
    headerFormat: "",
    pointFormat: '<span style="font-size: 10px;">{point.name}</span><br/><b>{point.y:,.0f} ({point.percentage:.0f}%)</b>'
  },
  series: [{
    data: fig4Series2,
    dataLabels: {
      enabled: true,
      padding: 0,
      format: '{point.name}<br /><b>{point.percentage:.0f}%</b>',
      style: {
        fontWeight: "none",
        color: "#5e5e5e",
        fontSize: "10px"
      }
    }
  }],
  credits: {
    enabled: false
  },
});
//END FIGURE 4 CODE

//START FIGURE 5 CODE
// Function to toggle visibility of points across both fig5Chart1 and fig5Chart2
function togglePointVisibility5(itemName) {
  [fig5Chart1, fig5Chart2].forEach(chart => {
    chart.series[0].data.forEach(point => {
      if (point.name === itemName) {
        point.setVisible(!point.visible);
      }
      });
      chart.series.forEach(series => {
      if (series.name === itemName) {
          series.setVisible(!series.visible); // Toggle this series' visibility
        // Find the corresponding legend item and toggle muted style
        const legendItems = document.querySelectorAll('#fig5Container4 .highcharts-legend-item');
        legendItems.forEach(legendItem => {
          const legendText = legendItem.querySelector('text');
          const legendIcon = legendItem.querySelector('rect, path'); // Select icon elements (rect or path)
          if (legendText && legendText.textContent.trim() === itemName) {
            legendText.classList.toggle('muted-legend-item', !series.visible); // Toggle muted style on text
            if (legendIcon) {
              legendIcon.setAttribute('fill', series.visible ? series.color : '#cccccc'); // Toggle icon color
            }
          }
        });
      }
    });
  });
  }
//Title chart
const fig5Title = Highcharts.chart('fig5Container0',{
    chart: {height: 50,},
        exporting:{enabled: false, sourceWidth: 1200},
                credits:{enabled: false},
title:{text:title5,}});

//Captions chart
const fig5Captions = Highcharts.chart('fig5Container4',{
    chart: {type: 'pie', height: 140,},
        exporting:{enabled: false, sourceWidth: 1200},
				title:{text: ""},
      series: [{
    data: fig5Legend, // Use fig5Legend to display categories in the legend only
    showInLegend: true,
  }],
      plotOptions: {
        pie: {
            size: -10,
        },
      events: {
        legendItemClick: function (event) {
          const seriesVisible = this.visible;
          togglePiePointVisibility(this.name, !seriesVisible); // Toggle pie point visibility
          toggleLegendAppearance(this, isVisible); // Toggle muted appearance
          this.setVisible(!seriesVisible); // Toggle this series' visibility
        }
      }
    },
    legend: {
    align: 'center',
    y: -100,
    verticalAlign: 'top',
    symbolRadius: 0,
    layout: 'horizontal',
    itemDistance: 4,
    //itemStyle: { fontSize: '9px' },
    itemHiddenStyle: {
      color: '#cccccc', // Dimmed color when hidden
      fontWeight: 'normal'
    },
    labelFormatter: function() { return this.name; }
  },
  //Captions are where the notes go!
  caption: {
    text: figure5Captions,
    align: "left",
    verticalAlign: "top",
    margin: 0,
    y: 35,
    style: {
      fontSize: '8px',
    },
  },
credits: {
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -20,
      y: -15}
  },
});

// Add click event to legend items within fig5Captions
fig5Captions.series[0].data.forEach(legendItem => {
  Highcharts.addEvent(legendItem, 'legendItemClick', function (e) {
    e.preventDefault(); // Prevent default legend item click behavior
    togglePointVisibility5(this.name); // Toggle visibility on both charts
  });
});

//Chart 1 (left one)
const fig5Chart1 = Highcharts.chart('fig5Container1', {
  chart: {
    height: 350,
    marginBottom: 35,
    defaultSeriesType: 'column',
  },
  title: {
    text: "Generation (million MWh) by NOₓ Control Type"
  },
    legend: {
    enabled: false
  },
                xAxis: {
                    categories: ["Coal", "Oil", "Gas", "Other"]
                },
                yAxis: {
                    labels: {
                        formatter: function () {
                            return this.value / 1000000;
                        }
                    },
                    stackLabels: {
                        enabled: true,
                        formatter: function () {
                            return Highcharts.numberFormat(this.total / 1000000, 0)
                        },
                        style: {
                            fontWeight: "none",
                            color: "#5e5e5e",
                            fontSize: "10px"
                        }
                    }
                },
  plotOptions: {
        column: {
            stacking: 'normal',
        },
    series: {
      dataLabels: {
        enabled: false,
        formatter: function() { return Highcharts.numberFormat(this.y / 1000000, 0); },
        style: { fontWeight: "none", color: "#5e5e5e", fontSize: "10px" }
      },
      events: {
        legendItemClick: function (event) {
          event.preventDefault();
          const seriesVisible = this.visible;
          togglePiePointVisibility5(this.name, !seriesVisible); // Toggle pie point visibility
          this.setVisible(!seriesVisible); // Toggle this series' visibility
        }
      }
    }
  },
  exporting: {
    enabled: false,
  },
                tooltip: {
                    shared: true,
                    headerFormat: '<span style="font-size: 10px;">{point.x}</span><br/>',
                    pointFormat: '<span style="color:{point.color};">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
                },
  series: fig5Series1,
  credits: {
    enabled: false
  },
});
//Chart 2 (right one)
const fig5Chart2 = Highcharts.chart('fig5Container2', {
  chart: {
    height: 350,
    defaultSeriesType: 'pie',
  },
legend:{
    //disabling the legend of the right charts since it is duplicative with the legend on the left charts
enabled: false,
  },
  title: {
    text: "Percentage of Generation with and without NOₓ Emissions Controls"
  },
  exporting: {
    menuItemDefinitions: {
      // Custom definition
      downloadPNG: {
        onclick: function() {
          Highcharts.exportCharts([fig5Title, fig5Chart1, fig5Chart2, fig5Captions]);
        },
        text: 'Download PNG'
      },
      downloadJPEG: {
        onclick: function() {
          Highcharts.exportCharts([fig5Title, fig5Chart1, fig5Chart2, fig5Captions], {
            type: 'image/jpeg'
          });
        },
        text: 'Download JPEG',
      },
      downloadPDF: {
        onclick: function() {
          Highcharts.exportCharts([fig5Title, fig5Chart1, fig5Chart2, fig5Captions], {
            type: 'application/pdf'
          });
        },
        text: 'Download PDF',
      },
      downloadSVG: {
        onclick: function() {
          Highcharts.exportCharts([fig5Title, fig5Chart3, fig5Chart2, fig5Captions], {
            type: 'image/svg+xml'
          });
        },
        text: 'Download SVG vector image',
      }
    },
    buttons: {
      contextButton: {
        menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']

        //{"viewFullscreen": {}, "printChart": {}, "separator": {}, "downloadPNG": {}, "downloadJPEG": {}, "downloadPDF": {}, "downloadSVG": {}}
      }
    }
  },
  plotOptions: {
    pie: {
             size: '60%',
      showInLegend: true,
      dataLabels: {
        enabled: true,
        padding: 0
      },
      allowPointSelect: true,
    }
  },
  tooltip: {
    headerFormat: "",
    pointFormat: '<span style="font-size: 10px;">{point.name}</span><br/><b>{point.y:,.0f} ({point.percentage:.0f}%)</b>'
  },
  series: [{
    data: fig5Series2,
    dataLabels: {
      enabled: true,
      padding: 0,
      format: '{point.name}<br /><b>{point.percentage:.0f}%</b>',
      style: {
        fontWeight: "none",
        color: "#5e5e5e",
        fontSize: "10px"
      }
    }
  }],
  credits: {
    enabled: false
  },
});
//END FIGURE 5 CODE

//START FIGURE 6 CODE
// Legend, captions, and credits container
const fig6Captions = Highcharts.chart('fig6Container4', {
 chart: {
    type: 'pie',
    height: 150,
  },
  exporting: { enabled: false,  sourceWidth: 1200 },
  title: { text: "" },
  series: [{
    data: fig6Legend, // Use fig6Legend to display categories in the legend only
    showInLegend: true,
  }],
    plotOptions: {
        pie: {
            size: -10
        }
    },
  legend: {
    align: 'center',
    y: -85,
    verticalAlign: 'top',
    layout: 'horizontal',
    symbolRadius: 0,
    itemDistance: 20,
    //itemStyle: { fontSize: '9px' },
    labelFormatter: function() { return this.name; }
  },
    caption: {
    y: 65,
    text: figure6Captions,
    align: "left",
    verticalAlign: "top",
    margin: 0,
    style: { fontSize: '8px' }
  },
  credits: {
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -20,
      y: -15
    }
  }
});

// Function to toggle visibility of points across both fig6Chart1 and fig6Chart2
function togglePointVisibility6(pointName) {
  [fig6Chart1, fig6Chart2].forEach(chart => {
    chart.series[0].data.forEach(point => {
      if (point.name === pointName) {
        point.setVisible(!point.visible);
        // Find the corresponding legend item and toggle muted style
        const legendItems = document.querySelectorAll('#fig6Container4 .highcharts-legend-item');
        legendItems.forEach(legendItem => {
          const legendText = legendItem.querySelector('text');
          const legendIcon = legendItem.querySelector('rect, path'); // Select icon elements (rect or path)
          if (legendText && legendText.textContent.trim() === pointName) {
            legendText.classList.toggle('muted-legend-item', !point.visible); // Toggle muted style on text
            if (legendIcon) {
              legendIcon.setAttribute('fill', point.visible ? point.color : '#cccccc'); // Toggle icon color
            }
          }
        });
      }
    });
  });
  }

// Add click event to legend items within fig6Captions
fig6Captions.series[0].data.forEach(legendItem => {
  Highcharts.addEvent(legendItem, 'legendItemClick', function (e) {
    e.preventDefault(); // Prevent default legend item click behavior
    togglePointVisibility6(this.name); // Toggle visibility on both charts
  });
});

const fig6Title = Highcharts.chart('fig6Container0',{
    chart: {height: 50,},
        exporting:{enabled: false, sourceWidth: 1200},
                credits:{enabled: false},
title:{text:title6,}});

//Chart 1 (left one)
const fig6Chart1 = Highcharts.chart('fig6Container1', {
  chart: {
    defaultSeriesType: 'pie',
  },
  title: {
    text: "Monitoring Methodology by Number of Units"
  },
    legend: {enabled: false},
  exporting:{enabled: false},
  plotOptions: {
    series: {
      states: {
        hover: {
          enabled: false
        }
      }
    },
    pie: {
     size: '60%',
      showInLegend: true,
      dataLabels: {
        enabled: true,
        padding: 0
      }
    },
    allowPointSelect: true
  },
  tooltip: {
    headerFormat: "",
    pointFormat: '<span style="font-size: 10px;">{point.name}</span><br/><b>{point.y:,.0f} ({point.percentage:.0f}%)</b>'
  },
  series: [{
    data: fig6Series1,
    dataLabels: {
      enabled: true,
      padding: 0,
      format: '{point.name}<br /><b>{point.percentage:.0f}%</b>',
      style: {
        fontWeight: "none",
        color: "#5e5e5e",
        fontSize: "10px"
      }
    }
  }],
  credits: {
    enabled: false
  },
});
//Chart 2 (right one)
const fig6Chart2 = Highcharts.chart('fig6Container2', {
  chart: {
    defaultSeriesType: 'pie',
  },
    legend: {enabled: false},
  title: {
    text: "Monitoring Methodology by Ozone Emissions"
  },
  exporting: {
    menuItemDefinitions: {
      // Custom definition
      downloadPNG: {
        onclick: function() {
          Highcharts.exportCharts([fig6Title, fig6Chart1, fig6Chart2, fig6Captions]);
        },
        text: 'Download PNG'
      },
      downloadJPEG: {
        onclick: function() {
          Highcharts.exportCharts([fig6Title, fig6Chart1, fig6Chart2, fig6Captions], {
            type: 'image/jpeg'
          });
        },
        text: 'Download JPEG',
      },
      downloadPDF: {
        onclick: function() {
          Highcharts.exportCharts([fig6Title, fig6Chart1, fig6Chart2, fig6Captions], {
            type: 'application/pdf'
          });
        },
        text: 'Download PDF',
      },
      downloadSVG: {
        onclick: function() {
          Highcharts.exportCharts([fig6Title, fig6Chart1, fig6Chart2, fig6Captions], {
            type: 'image/svg+xml'
          });
        },
        text: 'Download SVG vector image',
      }
    },
    buttons: {
      contextButton: {
        menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']

        //{"viewFullscreen": {}, "printChart": {}, "separator": {}, "downloadPNG": {}, "downloadJPEG": {}, "downloadPDF": {}, "downloadSVG": {}}
      }
    }
  },

  plotOptions: {
    series: {
      states: {
        hover: {
          enabled: false
        }
      }
    },
    pie: {
     size: '60%',
      showInLegend: true,
        startAngle: 0,
      dataLabels: {
        enabled: true,
        padding: 0
      }
    },
    allowPointSelect: true
  },
  tooltip: {
    headerFormat: "",
    pointFormat: '<span style="font-size: 10px;">{point.name}</span><br/><b>{point.y:,.0f} ({point.percentage:.0f}%)</b>'
  },
  series: [{
    data: fig6Series2,
    dataLabels: {
      enabled: true,
      padding: 0,
      format: '{point.name}<br /><b>{point.percentage:.0f}%</b>',
      style: {
        fontWeight: "none",
        color: "#5e5e5e",
        fontSize: "10px"
      }
    }
  }],
  credits: {
    enabled: false
  },
});
//END FIGURE 6 CODE

//FIGURE 7 CODE
// Legend, captions, and credits container
const fig7Captions = Highcharts.chart('fig7Container4', {
 chart: {
    type: 'pie',
    height: 140,
  },
  exporting: { enabled: false,  sourceWidth: 1200 },
  title: { text: "" },
  series: [{
    data: fig7Legend, // Use fig7Legend to display categories in the legend only
    showInLegend: true,
  }],
    plotOptions: {
        pie: {
            size: -10
        }
    },
  legend: {
    align: 'center',
    y: -50,
    verticalAlign: 'top',
    layout: 'horizontal',
    symbolRadius: 0,
    itemDistance: 20,
    //itemStyle: { fontSize: '9px' },
    labelFormatter: function() { return this.name; }
  },
    caption: {
    y: 60,
    text: figure7Captions,
    align: "left",
    verticalAlign: "top",
    margin: 0,
    style: { fontSize: '8px' }
  },
  credits: {
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -20,
      y: -15
    }
  }
});

// Function to toggle visibility of points across both fig7Chart1 and fig7Chart2
function togglePointVisibility7(pointName) {
  [fig7Chart1, fig7Chart2].forEach(chart => {
    chart.series[0].data.forEach(point => {
      if (point.name === pointName) {
        point.setVisible(!point.visible);
        // Find the corresponding legend item and toggle muted style
        const legendItems = document.querySelectorAll('#fig7Container4 .highcharts-legend-item');
        legendItems.forEach(legendItem => {
          const legendText = legendItem.querySelector('text');
          const legendIcon = legendItem.querySelector('rect, path'); // Select icon elements (rect or path)
          if (legendText && legendText.textContent.trim() === pointName) {
            legendText.classList.toggle('muted-legend-item', !point.visible); // Toggle muted style on text
            if (legendIcon) {
              legendIcon.setAttribute('fill', point.visible ? point.color : '#cccccc'); // Toggle icon color
            }
          }
        });
      }
    });
  });
  }

// Add click event to legend items within fig7Captions
fig7Captions.series[0].data.forEach(legendItem => {
  Highcharts.addEvent(legendItem, 'legendItemClick', function (e) {
    e.preventDefault(); // Prevent default legend item click behavior
    togglePointVisibility7(this.name); // Toggle visibility on both charts
  });
});

const fig7Title = Highcharts.chart('fig7Container0',{
    chart: {height: 50,},
        exporting:{enabled: false, sourceWidth: 1200},
                credits:{enabled: false},
title:{text:title7,}});

//Chart 1 (left one)
const fig7Chart1 = Highcharts.chart('fig7Container1', {
  chart: {
    defaultSeriesType: 'pie',
  },
  title: {
    text: "Mercury Controls on MATS Covered Units (units)"
  },
  legend: {
    //this makes legend items a square and not a circle
    symbolRadius: 0,
        layout: 'horizontal', // default
        itemDistance: 4,
itemStyle: { fontSize: '9px'}
  },
    legend: {enabled: false},
  exporting:{enabled: false},
  plotOptions: {
    series: {
      states: {
        hover: {
          enabled: false
        }
      }
    },
    pie: {
     size: '60%',
      showInLegend: true,
      dataLabels: {
        enabled: true,
        padding: 0
      }
    },
    allowPointSelect: true
  },
  tooltip: {
    headerFormat: "",
    pointFormat: '<span style="font-size: 10px;">{point.name}</span><br/><b>{point.y:,.0f} ({point.percentage:.0f}%)</b>'
  },
  series: [{
    data: fig7Series1,
    dataLabels: {
      enabled: true,
      padding: 0,
      format: '{point.name}<br /><b>{point.percentage:.0f}%</b>',
      style: {
        fontWeight: "none",
        color: "#5e5e5e",
        fontSize: "10px"
      }
    }
  }],
  credits: {
    enabled: false
  },
});
//Chart 2 (right one)
const fig7Chart2 = Highcharts.chart('fig7Container2', {
  chart: {
    defaultSeriesType: 'pie',
  },
    legend: {enabled: false},
  title: {
    text: "Mercury Controls on MATS Covered Units (MWh)"
  },
  exporting: {
    menuItemDefinitions: {
      // Custom definition
      downloadPNG: {
        onclick: function() {
          Highcharts.exportCharts([fig7Title, fig7Chart1, fig7Chart2, fig7Captions]);
        },
        text: 'Download PNG'
      },
      downloadJPEG: {
        onclick: function() {
          Highcharts.exportCharts([fig7Title, fig7Chart1, fig7Chart2, fig7Captions], {
            type: 'image/jpeg'
          });
        },
        text: 'Download JPEG',
      },
      downloadPDF: {
        onclick: function() {
          Highcharts.exportCharts([fig7Title, fig7Chart1, fig7Chart2, fig7Captions], {
            type: 'application/pdf'
          });
        },
        text: 'Download PDF',
      },
      downloadSVG: {
        onclick: function() {
          Highcharts.exportCharts([fig7Title, fig7Chart1, fig7Chart2, fig7Captions], {
            type: 'image/svg+xml'
          });
        },
        text: 'Download SVG vector image',
      }
    },
    buttons: {
      contextButton: {
        menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']

        //{"viewFullscreen": {}, "printChart": {}, "separator": {}, "downloadPNG": {}, "downloadJPEG": {}, "downloadPDF": {}, "downloadSVG": {}}
      }
    }
  },

  plotOptions: {
    series: {
      states: {
        hover: {
          enabled: false
        }
      }
    },
    pie: {
     size: '60%',
      showInLegend: true,
        startAngle: 0,
      dataLabels: {
        enabled: true,
        padding: 0
      }
    },
    allowPointSelect: true
  },
  tooltip: {
    headerFormat: "",
    pointFormat: '<span style="font-size: 10px;">{point.name}</span><br/><b>{point.y:,.0f} ({point.percentage:.0f}%)</b>'
  },
  series: [{
    data: fig7Series2,
    dataLabels: {
      enabled: true,
      padding: 0,
      format: '{point.name}<br /><b>{point.percentage:.0f}%</b>',
      style: {
        fontWeight: "none",
        color: "#5e5e5e",
        fontSize: "10px"
      }
    }
  }],
  credits: {
    enabled: false
  },
});
//END FIGURE 7 CODE



//removing proxy buttons from charts
const proxyButtons = document.getElementsByClassName('highcharts-a11y-proxy-button');
for (let i = 0; i < proxyButtons.length; i++) {
proxyButtons[i].removeAttribute("style");
}
</script>
