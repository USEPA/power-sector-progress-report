<script src="https://code.highcharts.com/maps/10.3.3/highmaps.js"></script>
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
//set variables
var $ = jQuery;
//update these years with each new report
var reportYear = 2022;
var currentYear = 2024;
var credits = "EPA, " + currentYear + "<br/>Last Updated: 07/22";
var colors = ["#058DC7", "#ed561b", "#50b432", "#dddf00", "#d97c16", "#665683", "#cf2772", "#3262ae", "#47a8a2", "#8a6a55", "#899338", "#777781"];

var figure1Captions = 'Notes:<br/>• To more clearly see the states included in the "CSAPR (SO₂ and annual NOₓ)" program, use the interactive features of the figure: click on the boxes in the legend to turn off the pink, orange, and green categories (labeled “CSAPR NOₓ Ozone Season”).';

const basemapData = [ ['us-ct', 0],  ['us-de', 0],  ['us-dc', 0],    ['us-il', 12],  ['us-in', 13],  ['us-ky', 16],  ['us-me', 18],  ['us-md', 19],  ['us-ma', 20],  ['us-mi', 21], ['us-nh', 28],  ['us-nj', 29],  ['us-ny', 31], ['us-nc', 32],  ['us-oh', 34],  ['us-pa', 37],  ['us-ri', 38],  ['us-tn', 41], ['us-va', 0],  ['us-vt', 44], ['us-wv', 47],  ['us-wi', 48]];


//Ajax function to pull in LTM data from CSV file
//URL below can be replaced when a new CSV is uploaded
Highcharts.setOptions({
    colors: colors
});
$.ajax({
  method: "GET",
  url: "https://www.epa.gov/system/files/other-files/2024-02/ecosystem_response_ecosystems_f1.csv",
  dataType: "text",
  data: {}
}).done(function(data){
            // will contain rows of returned data
            var dataRows = [];
            // process the data
            (function () {
                // splits data on line breaks and remove last empty row
                var allRows = data.split(/\r?\n/);
                // iterate over allRows, skipping header row
                for (var i = 1; i < allRows.length; i++) {
                    // splits all rows on commas and pushes each row into dataRows
                    var row = allRows[i].split(",");
                    dataRows.push(row);
                }
            })(); // end processing data

            // variables for parsing data into Highcharts-friendly format
            var dataLtmLakes = []; // Declare variable before use
            var dataLtmStreams = [];

$.each(dataRows, function (key, value) {
var siteName = value[1]?.replace(":", ",");

    if (value[3] === "LTM") {
        for (var i = 7; i < 12; i++) {
            if (value[i] === "DES") { value[i] = "Decreasing trend, significant"; }
            else if (value[i] === "INS") { value[i] = "Increasing trend, significant"; }
            else if (value[i] === "DENS") { value[i] = "Decreasing trend, non-significant"; }
            else if (value[i] === "INNS") { value[i] = "Increasing trend, non-significant"; }
            else if (value[i] === "NC") { value[i] = "No change in trend"; }
        }

        var siteLtm = {
            name: siteName,
            lat: parseFloat(value[5]),
            lon: parseFloat(value[6]),
            siteID: value[0],
            region: value[4],
            sulfate: value[7],
            nitrate: value[8],
            anc: value[9],
            doc: value[10],
            base: value[11]
        };

        if (value[2] === "lake") {
            dataLtmLakes.push(siteLtm);
        } else {
            dataLtmStreams.push(siteLtm);
        }
    }
});
            //log the data
            (function () {
                window.console.log("LTM Lakes:", dataLtmLakes);
                window.console.log("LTM Streams:", dataLtmStreams);
            })(); // end logging the data
  $.ajax({
  method: "GET",
url:"https://code.highcharts.com/mapdata/countries/us/custom/us-all-mainland.topo.json",
      dataType: 'json',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
      // it returns json Object "data"
      topology = data;
      
  var ltmMapChart = Highcharts.mapChart('mapContainer', {
    chart: {
      map: topology,
    },
    title: {
      text: "Long-Term Monitoring Program Sites and Trends 1990-" + reportYear
    },
subtitle:{
text: "(hover over a site for more information)"
},
    mapNavigation: {
      enableMouseWheelZoom: true,
      enabled: true,
      scrollZoom: true,
                    buttonOptions: {
                        alignTo: "spacingBox",
                        x: 1
                    },
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      map: {
        //showInLegend: true,
        tooltip: {
          headerFormat: "",
        }
      },
mappoint: {
                        dataLabels: {
                            enabled: false
                        }
                    },
                    series: {
                        marker: {
                            radius: 4,
                            lineColor: "#333",
                            lineWidth: 0.5
                        }
}
      },
    exporting:{enabled: false},
                tooltip: {
                    useHTML: true,
                    formatter: function () {
                        if (this.point.sulfate === null) {
                            return "<table class=\"tooltipTable\"><tr><td>Site ID: </td><td><strong>" + this.point.siteID + "</strong></td></tr>" +
                                "<tr><td>Site Name: </td><td><strong>" + this.point.name + "</strong></td></tr></table>";
                        } else {
                            return "<table class=\"tooltipTable\"><tr><td>Site ID: </td><td><strong>" + this.point.siteID + "</strong></td></tr>" +
                                "<tr><td>Site Name: </td><td><strong>" + this.point.name + "</strong></td></tr>" +
                                "<tr><td>Region: </td><td><strong>" + this.point.region + "</strong></td></tr>" +
                                "<tr><td>Sulfate trend: </td><td><strong>" + this.point.sulfate + "</strong></td></tr>" +
                                "<tr><td>Nitrate trend: </td><td><strong>" + this.point.nitrate + "</strong></td></tr>" +
                                "<tr><td>ANC trend: </td><td><strong>" + this.point.anc + "</strong></td></tr>" +
                                "<tr><td>Base Cations trend: </td><td><strong>" + this.point.base + "</strong></td></tr></table>";
                        }
                    },
                    followPointer: false
                },
    series: [{
        data: basemapData,
        showInLegend: false,
        zIndex: -1,
        color: '#efefef',
        allAreas: false,
        enableMouseTracking: false
      },
                {
                    type: "mappoint",
                    name: "LTM lakes",
                    color: Highcharts.getOptions().colors[0],
                    data: dataLtmLakes,
                    marker:{symbol:"circle"}
                }, {
                    type: "mappoint",
                    name: "LTM streams",
                    color: Highcharts.getOptions().colors[4],
                    data: dataLtmStreams,
                    marker:{symbol:"circle"}
                }]
 });
  }
});
})
</script>
