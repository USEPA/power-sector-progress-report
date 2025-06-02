<script src="/sites/all/libraries/js/highcharts7/code/highcharts.js"></script>
<script src="/sites/all/libraries/js/highcharts7/code/modules/exporting.js"></script>
<script src="/sites/all/libraries/js/highcharts7/code/modules/export-data.js"></script>
<script src="/sites/all/libraries/js/highcharts7/code/modules/accessibility.js"></script>
<script src="/sites/all/libraries/js/highcharts7/code/modules/drilldown.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
<script>

//set variables

var $ = jQuery;
var reportYear = 2023;
var currentYear = 2024;
var credits = ("EPA, " + currentYear + "<br/>Last Updated: 09/24");

var colors = ["#058dc7", "#ed561b", "#50b432", "#dddf00", "#d97c16", "#665683", "#cf2772", "#3262ae", "#47a8a2", "#8a6a55", "#899338", "#777781"];

//FIGURE 3 DATA
var fig3Series1 = [
{
    name: 'Near Areas of Potential EJ Concern',
    id: 'series1',
    data: [1527449],
    color: '#ed561b'
  },
  {
    name: 'Other Areas',
    id: 'series2',
    data: [924641],
    color: '#058dc7'
  },
];
var fig3Series2 = [
{
    name: 'Near Areas of Potential EJ Concern',
    id: 'series1',
    data: [276487, 347605, 164842],
    //percentData: [47, 46, 46],
    color: '#ed561b',
  },
  {
    name: 'Other Areas',
    id: 'series2',
    data: [373892, 310585, 138779],
    //percentData: [53, 54, 54],
    color: '#058dc7',
  },
];
//END FIGURE 3 DATA

//FIGURE 4 DATA
var fig4Data = [
  {
    name: 'Other Areas',
    data: [-6, -64, -49, -49],
    color: '#058dc7'
  },
{
    name: 'Near Areas of Potential EJ Concern',
    data: [8, -79, -51, -46],
    color: '#ed561b'
  },
];

//END FIGURE 4 DATA

/**
 * Create a global getSVG method that takes an array of charts as an
 * argument
 */
Highcharts.getSVG = function(charts) {
  let svgArr = [],
    top = 0,
    width = 0;

  Highcharts.each(charts, function(chart) {
    let svg = chart.getSVG(),
      // Get width/height of SVG for export
      svgWidth = +svg.match(
        /^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/
      )[1],
      svgHeight = +svg.match(
        /^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/
      )[1];

    svg = svg.replace(
      '<svg',
      '<g transform="translate('+width+', 0 )" '
    );
    svg = svg.replace('</svg>', '</g>');

    width += svgWidth;
		top = Math.max(top, svgHeight);
	
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
    filename: options.filename || '2023-Generation-versus-2023-Emissions',
    type: options.type,
    width: options.width,
    svg: Highcharts.getSVG(charts)
  });
};

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
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  },
  //Setting credits for all highcharts on this page. Will link to Air Markets and use the dates provided at the beginning of this JavaScript Code
  credits: {
    text: credits,
    href: 'http://www.epa.gov/airmarkets',
    position: {
        align: 'right',
        verticalAlign: 'bottom',
        x: -20,
        y: -20
    }
  },
  //Setting default export size to be large / high-res
  exporting: {
    sourceWidth: 1000,
    sourceHeight: 600,
        buttons: {
            contextButton: {
                menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']
}
}
  }
});
//End of Global Options

//START FIGURE 3 CODE
/**
 * Create a global getSVG method that takes an array of charts as an
 * argument
 */
Highcharts.getSVG = function(charts) {
  let svgArr = [],
    top = 0,
    width = 0;

  Highcharts.each(charts, function(chart) {
    let svg = chart.getSVG(),
      // Get width/height of SVG for export
      svgWidth = +svg.match(
        /^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/
      )[1],
      svgHeight = +svg.match(
        /^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/
      )[1];

    svg = svg.replace(
      '<svg',
      '<g transform="translate('+width+', 0 )" '
    );
    svg = svg.replace('</svg>', '</g>');

    width += svgWidth;
		top = Math.max(top, svgHeight);
	
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
    filename: options.filename || '2023-Generation-versus-2023-Emissions',
    type: options.type,
    width: options.width,
    svg: Highcharts.getSVG(charts)
  });
};
Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  }
});
const fig3Chart1 = Highcharts.chart('fig3Container1', {
  chart: {
    defaultSeriesType: 'column',
  },
  title: {
    text: "Power Plant Generation, 2023"
  },
  legend: {
    reversed: true,
enabled: false,
  },
  xAxis: {
    categories: ['Load']
  },
  yAxis: {
    title: {
      text: "GWh"
    },
    labels: {
      format: '{value:,.0f}'
    }
  },
    tooltip: {
        style: {
            fontSize: '0.75em',
        }
    },
  exporting: {
  	enabled: false,
        sourceWidth: 600,
        sourceHeight: 600
  },
  plotOptions: {
                series: {
                events: {
                    legendItemClick: function (event) {
                        var XYZ = $('#fig3Container2').highcharts(),
                            series = XYZ.get(this.options.id); //get corresponding series

                        if (series) {
                            if (this.visible) {
                                series.hide();
                            } else {
                                series.show();
                            }
                        }
                    }
                }
            },
    column: {
      groupPadding: 0,
      pointPadding: 0,
      stacking: 'normal',
      pointWidth: 55,
      dataLabels: {
        color: '#FFFFFF',
        enabled: true,
        align: 'center',
        style: {
         fontSize: '12px',
         textOutline: 'none',
        },
        formatter: function() {
          return Math.round(100 * this.y / this.total) + '%';
        }
      }
    }
  },

  series: fig3Series1,
  credits: {
    enabled: false
  },
});
const fig3Chart2 = Highcharts.chart('fig3Container2', {
  chart: {
    defaultSeriesType: 'column',
  },
  title: {
    text: "Power Plant Emissions, 2023"
  },
  legend: {
    layout: 'vertical',
//   itemMarginTop: 0,
//   itemMarginBottom: 0,
//   width: '100%',
//   borderWidth: 1,
  //         itemStyle: {
    //        fontSize: '14px'
      //  }
  },
  xAxis: {
    categories: ['SO₂', 'NOₓ', 'Ozone Season NOₓ']
  },
  yAxis: {
    title: {
      text: "Tons"
    },
    labels: {
      format: '{value:,.0f}'
    }
  },
            exporting:{
        sourceWidth: 1000,
        sourceHeight: 600,
             menuItemDefinitions: {
            // Custom definition
            downloadPNG: {
                onclick: function () {
                	Highcharts.exportCharts([fig3Chart1, fig3Chart2]);
                },
                text: 'Download PNG'
            },
            downloadJPEG: {
            onclick: function(){
            Highcharts.exportCharts([fig3Chart1, fig3Chart2],{
            type: 'image/jpeg'
            });
            },
            text: 'Download JPEG',
            },
            downloadPDF: {
            onclick: function(){
            Highcharts.exportCharts([fig3Chart1, fig3Chart2],{
            type: 'application/pdf'
            });
            },
            text: 'Download PDF',
            },
            downloadSVG: {
            onclick: function(){
            Highcharts.exportCharts([fig3Chart1, fig3Chart2],{
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
//When one legend item is clicked off, this applies to both the right and the left graph
                events: {
                    legendItemClick: function (event) {
                        var XYZ = $('#fig3Container1').highcharts(),
                            series = XYZ.get(this.options.id); //get corresponding series

                        if (series) {
                            if (this.visible) {
                                series.hide();
                            } else {
                                series.show();
                            }
                        }
                    }
                },
            },
    column: {
      groupPadding: 0,
      pointPadding: 0,
      stacking: 'normal',
      pointWidth: 55,
      dataLabels: {
        color: '#FFFFFF',
        enabled: true,
        align: 'center',
        style: {
         fontSize: '12px',
         textOutline: 'none',
        },
        formatter: function() {
          return Math.round(100 * this.y / this.total) + '%';
        }
      },
        },
  },
  series: fig3Series2,
  credits: {
    enabled: false
  },
}, function(fig3Chart2){

    $.each(fig3Chart2.series, function(i, series){
    
        series.legendGroup.element.onmouseover = null;
    
    });

});
//END FIGURE 3 CODE

//START FIGURE 4 CODE
const fig4 = Highcharts.chart('fig4Container', {
    chart: {
        type: 'column'
    },
  title: {
    text: "Changes in Power Plant Emissions, 2014–2023",
  },
  legend: {
    enabled: true,
    enableMouseTracking: false,
  },
  xAxis: {
    categories: ['Generation', 'SO₂', 'NOₓ', 'Ozone Season NOₓ']
  },
  yAxis: {
    reverseStacks: true,
    stackLabels: {
      enabled: true,
      overflow: 'none',
      crop: false,
    },
    max: 10,
    tickInterval: 20,
    min: -90,
    title: {
      enabled: false
    },
    labels: {
      format: '{value}%'
    },
  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: true,
        align: 'center',
        color: '#000',
        style: {
          fontSize: '11px'
        },
        formatter: function() {
          return this.y + '%';
        }
      }
    }
  },
tooltip:{
        enabled: false
},
  series: fig4Data,
  credits: {
    enabled: false
  },
}, function(fig4){

    $.each(fig4.series, function(i, series){
    
        series.legendGroup.element.onmouseover = null;
    
    });

});
//END FIGURE 4 CODE

</script>
