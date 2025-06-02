<script src="/sites/all/modules/contrib/jquery_update/replace/jquery/1.7/jquery.min.js?v=1.7.2"></script>
<script src="/sites/all/libraries/js/highcharts7/code/highcharts.js"></script>
<script src="/sites/all/libraries/js/highcharts7/code/modules/heatmap.js"></script>
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
var reportYear = 2022;
var currentYear = 2024;
var credits = ("EPA, " + currentYear + "<br/>Last Updated: 02/" + currentYear);
var figure1SO2Captions = "Notes:<br/>• Data based on state, local, and EPA monitoring sites which are located primarily in urban areas.";
var colors = ["#058DC7", "#ed561b", "#50b432", "#dddf00", "#d97c16", "#665683", "#cf2772", "#3262ae", "#47a8a2", "#8a6a55", "#899338", "#777781"];
var figure2OzoneCaptions = "Notes:<br/>• 8-Hour daily maximum ozone concentration data from EPA’s AQS and daily meteorology data from the National Weather Service were retrieved for 378 ozone monitoring sites in the CSAPR Update region.<br/>• For a monitor to be included in this trends analysis, it had to provide complete and valid data for 75 percent of the days in the May to September period, for each of the years from 2000 to 2015. In urban areas with more than one monitoring site, the highest observed ozone concentration in the area was used for each day.<br/>• Seasonal mean ozone values indicate the average ozone concentrations across the U.S. The 98th percentile ozone values show the highest ozone concentrations across the U.S. NOₓ reductions are generally effective in reducing these peak ozone levels in all regions of the U.S.<br/><br/>";
var so2Figure1Data = [
[12.10221082, 11.66729035, 10.02487418, 10.03898432, 9.957132755, 9.987281395, 9.022627478, 8.676743887, 8.912318213, 8.616739929, 8.139113611, 8.201329527, 7.718884319, 7.50568421, 7.524958785, 5.87961672, 5.90795239, 5.924285478, 5.758566092, 5.546667088, 5.052067143, 4.8246882, 4.383522374, 4.163133223, 4.036458363, 4.191694284, 3.74444105, 3.627591766, 3.003703434, 2.365605557, 2.306470108, 2.050781675, 1.822491393, 1.55059991, 1.575827105, 1.219262468, 0.972786172, 0.840199469, 0.741525594, 0.687885725, 0.699141524, 0.680936491, 0.71764362],
[23.07177514, 21.54816908, 16.50854592, 18.10332191, 16.64855967, 17.72122366, 16.248712, 15.36878036, 15.27573236, 15.77644034, 14.5520564, 14.48764498, 13.08501171, 12.66899339, 13.1471297, 10.81974903, 10.35893608, 9.523127884, 9.610758356, 8.973500532, 7.796739507, 8.189382398, 7.222413793, 8.028289855, 7.316828214, 7.375144375, 6.507328208, 6.448090049, 5.294253404, 4.171516957, 4.653261632, 4.158462658, 3.601380104, 3.393841569, 3.262590263, 2.277829624, 1.957355702, 1.845013928, 1.542029499, 1.053915842, 1.690632516, 1.338032143, 1.283650965],
[2.91642568, 2.91642568, 2.91642568, 2.12393623, 1.48087876, 1.36863495, 1.61753397, 1.44126739, 1.68075009, 1.77318866, 1.45380272, 1.48564678, 1.78235847, 1.97257114, 1.74520391, 1.73021913, 1.99341785, 2.15784608, 2.21543217, 2.01324740, 2.11997109, 1.48919552, 0.96638656, 1.01260603, 1.36200429, 1.50432106, 1.36368407, 0.95757865, 0.80057586, 0.57079153, 0.44117647, 0.55436338, 0.31074130, 0.21281242, 0.24920006, 0.23895288, 0.14656365, 0.13981302, 0.20380460, 0.14423783, 0.14883560, 0.21387673, 0.20647230]
];
var ozoneFigure2Data = [
[49.68, 51.35, 53.74, 48.54, 45.94, 51.51, 48.61, 50.95, 46.71, 42.80, 46.50, 47.12, 49.57, 43.55, 42.96, 43.73, 43.55, 43.14, 42.59, 42.98, 41.01, 42.08, 42.65],
[52.25, 52.69, 53.72, 53.14, 49.31, 48.98, 48.05, 46.94, 45.79, 44.48, 45.44, 45.80, 45.68, 44.02, 43.81, 43.49, 42.91, 43.75, 43.14, 42.98, 41.11, 41.96, 41.79],
[83.84, 84.82, 90.94, 81.93, 73.95, 81.91, 77.74, 80.37, 71.84, 67.75, 71.89, 74.53, 77.69, 65.84, 65.29, 67.26, 67.34, 65.52, 68.45, 63.33, 63.14, 64.70, 64.52],
[85.69, 85.28, 87.84, 85.51, 79.68, 78.22, 77.25, 74.56, 71.57, 69.90, 70.38, 71.63, 71.70, 68.53, 68.93, 68.22, 65.87, 67.38, 66.41, 66.02, 63.79, 65.72, 64.49]
];
var figure1 = Highcharts.chart('so2Figure1Container', {
		title:{text: "National SO₂ Air Quality Trend, 1980–"+reportYear},
    xAxis: {
        categories: [1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,+ reportYear]
    },

    yAxis: {
        title: {text: "SO₂ Annual Mean Abient Concentration (ppb)"},
        max: 35,
        tickInterval: 5,
    },

    series: [{
    		name: "Average Concentration",
        data: so2Figure1Data[0],
        color: '#DDDF00',
           marker:{
     enabled:false
   }
    },
    {
    		name: "90% of sites have concentrations below this line",
        data: so2Figure1Data[1],
        color: '#50B432',
        dashStyle: 'ShortDot',
        marker:{
				enabled:false
  			}
    },
    {
    		name: "10% of sites have concentrations below this line",
        data: so2Figure1Data[2],
        color: '#ED561B',
        dashStyle: 'ShortDot',
        marker:{
    		enabled:false
   			}
    }
    ],
      credits: {
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -15,
      y: -15
    }
  },
  exporting: {
    sourceWidth: 1000,
    menuItemDefinitions: {
      // Custom definition
      xls: {
        onclick: function() {    window.open('https://www.epa.gov/system/files/documents/2023-07/2021_air_quality_so2.xlsx');
        },
        text: 'Download data'
      }
    },
    buttons: {
      contextButton: {
        menuItems: ['viewFullscreen', 'xls', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadSVG']
      }
    }
  },
  //Captions are where the notes go!
  caption: {
    text: figure1SO2Captions,
    style: {
      fontSize: '8px'
    },
    position: {
      y: 0
    }
  }
});

Highcharts.setOptions({
    colors: colors
});
var figure2 = Highcharts.chart('ozoneFigure2Container', {
		title:{text: "Season Average of 8-Hour Ozone Concentrations in CSAPR and CSAPR Update States, Unadjusted and Adjusted for Weather"},
    xAxis: {
        categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021, + reportYear],
      tickInterval: 1,
      plotLines: [{
      dashStyle: "longDash",
      zIndex: 5,
      width: 2,
      value: 3,
      label: {
        text: "Start of NBP",
        useHTML: true,
        verticalAlign: "bottom",
        textAlign: "right",
        y: -5,
        x: 5
      }
    }, {
      dashStyle: "longDash",
      zIndex: 1,
      width: 2,
      value: 9,
      label: {
        text: "Start of CAIR",
        useHTML: true,
        verticalAlign: "bottom",
        textAlign: "right",
        y: -5,
	x: 5
      }
    }, {
      dashStyle: "longDash",
      zIndex: 5,
      width: 2,
      value: 15,
      label: {
        text: "Start of CSAPR",
        useHTML: true,
        verticalAlign: "bottom",
        textAlign: "right",
        y: -5,
        x: 5
      }
    }]
    },

    yAxis: {
        title: {text: "Ozone Concentration (ppb)"},
        tickInterval: 25,
    },
    series: [
    {
    		name: "Unadjusted concentrations (seasonal mean)",
        data: ozoneFigure2Data[0],
           marker:{
     enabled:false
   }
    },
    {
    		name: "Adjusted concentrations (seasonal mean)",
        data: ozoneFigure2Data[1],
        marker:{
				enabled:false
  			}
    },
    {
    		name: "Unadjusted concentrations (98th percentile)",
        data: ozoneFigure2Data[2],
        marker:{
    		enabled:false
   			}
    },
    {
    		name: "Adjusted concentrations (98th percentile)",
        data: ozoneFigure2Data[3],
        marker:{
    		enabled:false
   			}
    }
    ],
      credits: {
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -15,
      y: -15
    }
  },
  exporting: {
    sourceWidth: 1000,
    menuItemDefinitions: {
      // Custom definition
      xls: {
        onclick: function() {
          window.open('https://www.epa.gov/system/files/documents/2023-07/2021_air_quality_so2.xlsx');
        },
        text: 'Download data'
      }
    },
    buttons: {
      contextButton: {
        menuItems: ['viewFullscreen', 'xls', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadSVG']
      }
    }
  },
  //Captions are where the notes go!
  caption: {
    text: figure2OzoneCaptions,
    style: {
      fontSize: '8px'
    },
    position: {
      y: 0
    }
  }
});

var figure2OzoneCaptions = "Notes:<br/>• For a PM₂.₅ monitoring site to be included in the trends analysis, it had to meet all of the following criteria: 1) each site-year quarterly mean concentration value had to encompass at least 11 or more samples, 2) all four quarterly mean values had to be valid for a given year (i.e., meet criterion #1), and 3) all 22 years of site-level seasonal means had to be valid for the given site (i.e. meet criteria #1 and #2).<br/>•  Annual “cool” season mean values for each site-year were computed as the average of the first and fourth quarterly mean values. Annual “warm” season mean values for each site-year were computed as the average of the second and third quarterly mean values. For a given year, all of the seasonal mean values for the monitoring sites located in the CSAPR region were then averaged together to obtain a single year (composite) seasonal mean value.<br/>";
//keep the extra break at the end to make space for the credits
var colors = ["#058DC7", "#ed561b", "#50b432", "#dddf00", "#d97c16", "#665683", "#cf2772", "#3262ae", "#47a8a2", "#8a6a55", "#899338", "#777781"];
var pmFigure3Data = [
[15.23419484, 13.61133487, 12.20686107, 12.57746827, 12.0908909, 13.11530501, 11.77925298, 12.15684798, 11.08972302, 10.66541469, 10.95784315, 9.946019194, 9.955421677, 9.186901718, 9.658171823, 8.751780371, 8.475384266, 8.368072315, 7.743434573, 8.202886702, 7.688153903, 8.271312008, 7.967755581],
[14.76431477, 15.35744395, 15.48911817, 14.84677437, 14.22388521, 16.11847303, 14.05166819, 14.38167487, 12.56351423, 10.3804124, 11.33374369, 11.24541617, 9.8616525, 9.531737742, 9.543603605, 9.386715839, 7.825272492, 7.874980016, 8.363555548, 7.862972258, 7.497031339, 9.036247105, 7.523478597]
];
Highcharts.setOptions({
    colors: colors
});
var figure3 = Highcharts.chart('pmFigure3Container', {
		title:{text: "PM₂.₅ Seasonal Trends, 2000–"+reportYear},
    xAxis: {
        categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,reportYear],
      tickInterval: 1,
    },

    yAxis: {
        title: {text: "PM₂.₅ Average Concentration (μg/m³)"},
        tickInterval: 5,
    },
    series: [
    {
    		name: "Cool Season",
        data: pmFigure3Data[0],
           marker:{
     enabled:false
   }
    },
    {
    		name: "Warm Season",
        data: pmFigure3Data[1],
        marker:{
				enabled:false
  			}
    },
    ],
      credits: {
    text: credits,
    href: 'http://www.epa.gov/power-sector',
    position: {
      align: 'right',
      verticalAlign: 'bottom',
      x: -15,
      y: -18
    }
  },
  exporting: {
    sourceWidth: 1000,
    menuItemDefinitions: {
      // Custom definition
      xls: {
        onclick: function() {          window.open('https://www.epa.gov/system/files/documents/2023-07/2021_air_quality_so2.xlsx');
        },
        text: 'Download data'
      }
    },
    buttons: {
      contextButton: {
        menuItems: ['viewFullscreen', 'xls', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadSVG']
      }
    }
  },
  //Captions are where the notes go!
  caption: {
    text: figure2OzoneCaptions,
    style: {
      fontSize: '8px'
    },
  }
});

</script>
