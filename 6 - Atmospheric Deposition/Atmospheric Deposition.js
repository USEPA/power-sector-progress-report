<script src="https://code.highcharts.com/maps/highmaps.js"></script>
<script src="https://code.highcharts.com/maps/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>
<script src="https://code.highcharts.com/modules/annotations.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
<script>


//set variables

var $ = jQuery;
var reportYear = 2022;
var currentYear = 2023;
var credits = ("EPA, " + currentYear + "<br/>Last Updated: 07/22");
var figure1Captions = 'Notes:<br/>• To more clearly see the states included in the "CSAPR (SO₂ and annual NOₓ)" program, use the interactive features of the figure: click on the boxes in the legend to turn off the pink, orange, and green categories (labeled “CSAPR NOₓ Ozone Season”).';

var figure3Captions = 'Notes:<br/>• There is a small amount of generation from “Oil” or “Other” fuels. The data for these fuels is not easily visible on the full chart. To more clearly see the generation data for these fuels, use the interactive features of the figure: click on the boxes in the legend to turn off the blue and orange categories of fuels (labeled “Coal” and “Gas”) and turn on the green and yellow categories of fuels (labeled “Oil” and “Other”).';

var figure4Captions = 'Notes:<br/>• "Unclassified" units have not submitted a fuel type in their monitoring plan and did not report emissions.<br/>• "Other fuel units" include units that combusted primarily wood, waste, or other non-fossil fuel (which also boost mercury and HCl removal by ACI and DSI).<br>&nbsp;<br>';

var colors = ["#058dc7", "#ed561b", "#50b432", "#dddf00", "#d97c16", "#665683", "#cf2772", "#3262ae", "#47a8a2", "#8a6a55", "#899338", "#777781"];

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
  }
});
//End of Global Options

var fig3Years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, reportYear];
var electricityData = [{
    name: 'Coal',
    data: [2058988791, 2039272267, 2061841197, 2027959218, 1819291910, 1918277344, 1808118031, 1584916611, 1660636289, 1656999186, 1433367234, 1320279400, 1285802929, 1227459510, 1031238637, 832509441, 963991138, 906902785],
  },
  {
    name: 'Gas',
    data: [597869097, 630053679, 716637541, 707106386, 757686277, 810821820, 846890732, 1052002995, 974258478, 981114138, 1194485668, 1241868583, 1176641889, 1352199362, 1465270243, 1508415933, 1459017785, 1560243493],
  },
  {
    name: 'Oil',
    data: [73211975, 37527181, 42192024, 32029275, 23678414, 24993545, 17892137, 16485997, 10795236, 11162198, 14393085, 10775630, 4565913, 6492430, 3262733, 2180465, 2042937, 3572568],
  },
  {
    name: 'Other',
    data: [1716096, 2031195, 2517899, 2877085, 2875301, 3832958, 5334007, 4633171, 6649203, 8080785, 7245485, 7074216, 7249505, 7509531, 5676098, 5806498, 6772544, 5989504],
  }
];

var programData = [{
    name: 'Coal EGUs',
    data: [382, 454, 326, 328, 326],
  },
  {
    name: 'Gas EGUs',
    data: [80, 2680, 1523, 1962, 1523],
  },
  {
    name: 'Oil EGUs',
    data: [0, 80, 214, 161, 214],
  },
  {
    name: 'Other Fuel EGUs',
    data: [2, 27, 24, 24, 24],
  },
  {
  name: 'Unclassified EGUs',
  data: [0, 6, 0, 11, 0]
  }
];

var programs = [ "ARP NOₓ Program", "ARP SO₂ Program", "CSAPR NOₓ Annual Program", "CSAPR NOₓ Ozone Season Program", "CSAPR SO₂ Annual Programs"];


//start of timeline code
Highcharts.chart('timelineContainer', {
  chart: {
    animation: false,
    type: 'bar',
  },
  title: {
    text: "Program History Timeline",
  },
  legend:{enabled: false},
    credits:{enabled: false},
  xAxis: {
    visible: false,
  },
  yAxis: {
    reversedStacks: true,
      title: {
      text: 'Years'
    },
  //set to false to hide horizontal lines
    visible: true,
    reversed: true,
    max: 27,
    tickInterval: 1,
    startOnTick: true,
    endOnTick: true,
    tickmarkPlacement: 'on',
    labels:{align: "center",
  rotation: 45,
  style:{fontSize: 9, 
  }
  },
    categories:[2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995],
  },
  plotOptions: {
    series: {
      animation: false,
      stacking: 'normal',
      align: 'center',
      dataLabels: {
        style: {
          align: 'center',
          fontSize: 10,
          textOutline: '.2px contrast',
          color: 'black'
        },
        align: 'center',
        enabled: true,
        allowOverlap: true,
        crop: false,
        overflow: 'none',
        formatter: function() {
          if (this.series.index == 6) {
            return 'CSAPR SO₂ Annual and' + '<br>' + 'Ozone Season NOₓ' + '</span>';
          }
          else if (this.series.index == 9) {
            return 'CSAPR Update' + '<br>' + 'Ozone Season NOₓ' + '</span>';
          } else {
            return this.series.name;
          }
        }
      },
      pointWidth: 44,
    }
  },
  series: [{
    name: 'ARP Phase 1',
    data: [5],
    //5 years (1995-2000)
    stack: 'acidrain',
    color: 'lightgreen',
  }, {
    name: 'ARP Phase 2',
    data: [10],  
    //10 years (2000-2010)
  stack: 'acidrain',
    color: 'lightgreen',
  }, {
    name: 'ARP Full Implementation',
    data: [12],
    //12 years (2010-2022)
    stack: 'acidrain',
    color: 'lightgreen',
  }, {
    name: 'OTC NBP',
    data: [3],
    //3 years (2000-2003)
    stack: 'two',
    color: 'orange',
  }, {
    name: 'NOₓ SIP <br>CALL NBTP',
    data: [6],
    //6 years (2003-2009)
    stack: 'two',
    color: 'orange',
  }, {
    name: 'CAIR Annual and <br>Ozone Season NOₓ',
    data: [6],
    //6 years (2009-2015)
    stack: 'two',
    color: 'lightblue',
  }, {
    name: 'CSAPR SO₂ Annual and <br> Ozone Season NOₓ',
    data: [7],
    //7 years (2015-2022)
    stack: 'two',
    color: 'plum',
  }, {
    name: 'CAIR SO₂',
    data: [6],
    //6 years (2009-2015)
    stack: 'three',
    color: 'lightblue',
  }, {
    name: '',
    data: [2],
    //blank space to push back CAIR SO2
    stack: 'three',
    color: 'transparent',
  }, {
    name: 'CSAPR Update -<br> Ozone Season NOₓ',
    data: [4],
    //2017 - reportYear
    stack: 'three',
    color: 'plum',
    years: '2017-Present'
  }, {
    name: '<span style="font-size:7px">RCU',
    data: [1],
    //2017- reportYear
    stack: 'three',
    color: 'plum',
    years: '2017-Present'
  }],
  tooltip: {
    enabled: true,
    followPointer: true,
    followTouchMove: true,
    formatter: function() {
      var string = "";
      if (this.series.index == 0) {
        string += '<br><strong>Acid Rain Program Phase 1</strong><br>1995-2000';
      } else if (this.series.index == 1) {
        string += '<br><strong>Acid Rain Program Phase 2</strong><br>2000-2010';
      } else if (this.series.index == 2) {
        string += '<br><strong>Acid Rain Program Full Implementation</strong><br>2010-Present';
      } else if (this.series.index == 3) {
        string += '<br><strong>Ozone Transport Comission<br><strong>NOₓ Budget Program</strong><br>2000-2003';
      } else if (this.series.index == 4) {
        string += '<br><strong>NOₓ State Implementation Plan Call<br><strong>NOₓ Budget Trading Program</strong><br>2003-2009';
      } else if (this.series.index == 5) {
        string += '<br><strong>Clean Air Interstate Rule<br><strong>Ozone Season NOₓ</strong><br>2009-2015';
      } else if (this.series.index == 6) {
        string += '<br><strong>Cross-State Air Pollution Rule<br><strong>SO₂ Annual and <strong>Ozone Season NOₓ</strong><br>2015-Present';
      } else if (this.series.index == 7) {
        string += '<br><strong>Clean Air Interstate Rule SO₂</strong><br>2009-2015';
      } else if (this.series.index == 8) {
        string += '<br><strong>Clean Air Interstate Rule SO₂</strong><br>2009-2015';
      } else if (this.series.index == 9) {
        string += '<br><strong>Cross-State Air Pollution Rule Update<br><strong>Ozone Season NOₓ</strong><br>2017-Present';
      }else if (this.series.index == 10) {
        string += '<br><strong>Revised Cross-State Air Pollution Rule Update<br><strong>Ozone Season NOₓ</strong><br>2021-Present';
      } else(string = "error");
      if (this.series.name == "") {
        return false
      } else {
        return string;
      }
    },
  },
  });
//end of timeline code


//Below code brings-in map from Highcharts for figure 1
    (async () => {
    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/us/custom/us-all-mainland.topo.json'
    ).then(response => response.json());
//Map is now set to the variable (constant) called "topology"

//This data sets the state for each category
    const basemapData = [
        ['us-ma', null], ['us-wa', null], ['us-ca', null], ['us-or', null],
        ['us-wi', null], ['us-me', null], ['us-mi', null], ['us-nv', null],
        ['us-nm', null], ['us-co', null], ['us-wy', null], ['us-ks', null],
        ['us-ne', null], ['us-ok', null], ['us-mo', null], ['us-il', null],
        ['us-in', null], ['us-vt', null], ['us-ar', null], ['us-tx', null],
        ['us-ri', null], ['us-al', null], ['us-ms', null], ['us-nc', null],
        ['us-va', null], ['us-ia', null], ['us-md', null], ['us-de', null],
        ['us-pa', null], ['us-nj', null], ['us-ny', null], ['us-id', null],
        ['us-sd', null], ['us-ct', null], ['us-nh', null], ['us-ky', null],
        ['us-oh', null], ['us-tn', null], ['us-wv', null], ['us-dc', null],
        ['us-la', null], ['us-fl', null], ['us-ga', null], ['us-sc', null],
        ['us-mn', null], ['us-mt', null], ['us-nd', null], ['us-az', null],
        ['us-ut', null]
    ];
        const CSAPRannual =[
        ['us-mn', 0],['us-ne', 0],['us-sc', 0],['us-nc', 0],['us-ks', 0],['us-ia', 0],['us-mo', 0],['us-il', 0],['us-wi', 0],['us-mi', 0],['us-in', 0],['us-oh', 0],['us-ky', 0],['us-tn', 0],['us-al', 0],['us-va', 0],['us-wv', 0],['us-md', 0],['us-pa', 0],['us-nj', 0],['us-ny', 0],['us-ga', 0]
    ];
    const CSAPRannualTest = [["Minnesota"],["Nebraska"]];
        const ozoneGroup1 =[
        ['us-ga', 0],
    ];
            const ozoneGroup2 =[
        ['us-tx', 0],['us-ok', 0],['us-ks', 0],['us-mo', 0],['us-ak', 0],['us-ia', 0],['us-wi', 0],['us-ms', 0],['us-ar', 0],['us-al', 0],['us-tn', 0],
    ];
            const ozoneGroup3 =[
        ['us-ny', 0],['us-nj', 0],['us-pa', 0],['us-md', 0],['us-va', 0],['us-wv', 0],['us-ky', 0],['us-oh', 0],['us-ky', 0],['us-in', 0],['us-mi', 0],['us-il', 0],['us-la', 0],
    ];

//start of map viz code

Highcharts.mapChart('mapContainer', {
        chart: {
            map: topology,
        },
        title: {
            text: "Map of CSAPR Implementation for " + reportYear
        },

        legend: {
            enabled: true
        },
  credits: {
    enabled: false
  },
  //Captions are where the notes go!
  caption: {
    text: figure1Captions,
    style: {
      fontSize: '8.5px'
    },
    },
        plotOptions: {
            map: {
                allAreas: false,
                dataLabels: {
                    enabled: false,
                    color: '#FFFFFF',
                    style: {
                        fontWeight: 'bold'
                    },
                },
            },
},
//Custom tooltip popups based on state
                tooltip: {
                formatter: function(){
                var csaprTooltip;
                var group1Tooltip;
                var group2Tooltip;
                var group3Tooltip;
                var csaprColor='#20A0BA';
                var group1Color='#CC2874';
                var group2Color='#DD8A2E';
                var group3Color='#60BC40';
                
if (this.point.name == "Minnesota" || this.point.name == "Nebraska" || this.point.name == "South Carolina" || this.point.name == "North Carolina"|| this.point.name == "Kansas" || this.point.name == "Iowa" || this.point.name == "Missouri" || this.point.name == "South Illinois"|| this.point.name == "Wisconsin"|| this.point.name == "Michigan"|| this.point.name == "Indiana"|| this.point.name == "Ohio"|| this.point.name == "Kentucky"|| this.point.name == "Tennessee"|| this.point.name == "Alabama"|| this.point.name == "Virginia"|| this.point.name == "West Virginia"|| this.point.name == "Maryland"|| this.point.name == "Pennsylvania"|| this.point.name == "New Jersey"|| this.point.name == "New York"|| this.point.name == "Georgia"|| this.point.name == "Illinois"){
                csaprTooltip = '<br/><span style="color:' + csaprColor + '">\u25CF</span> CSAPR (SO₂ and annual NOₓ)';
                }else{csaprTooltip = ""}
                
                if(this.point.name=="Georgia"){
                group1Tooltip='<br/><span style="color:' + group1Color + '">\u25CF</span> CSAPR NOₓ Ozone Season Group 1'
                }else{group1Tooltip = ""}
                               
                if(this.point.name=="Texas"|| this.point.name=="Oklahoma"|| this.point.name=="Kansas"|| this.point.name=="Missouri"|| this.point.name=="Iowa"|| this.point.name=="Wisconsin"|| this.point.name=="Mississippi"|| this.point.name=="Alabama"|| this.point.name=="Arkansas"|| this.point.name=="Tennessee"){
                group2Tooltip='<br/><span style="color:' + group2Color + '">\u25CF</span> CSAPR NOₓ Ozone Season Group 2'
                }else{group2Tooltip = ""}

                if(this.point.name=="New York"|| this.point.name=="New Jersey"|| this.point.name=="Pennsylvania"|| this.point.name=="Maryland"|| this.point.name=="Virginia"|| this.point.name=="West Virginia"|| this.point.name=="Kentucky"|| this.point.name=="Indiana"|| this.point.name=="Michigan"|| this.point.name=="Illinois"|| this.point.name=="Louisiana"|| this.point.name=="Ohio"|| this.point.name=="Illinois"){
                group3Tooltip='<br/><span style="color:' + group3Color + '">\u25CF</span> CSAPR NOₓ Ozone Season Group 3'
                }else{group3Tooltip = ""}                

								return this.point.name + "<br><b>" + csaprTooltip + group1Tooltip + group2Tooltip + group3Tooltip;
                },
                },
        series: [{
            name: 'basemap',
            data: basemapData,
            showInLegend: false,
            color: '#efefef'
            },{
            name: 'CSAPR (SO₂ and annual NOₓ)',
            data: CSAPRannual,
            dataLabels:false,
            color:'#20A0BA',
        },{
            name: 'CSAPR NOₓ Ozone Season Group 1',
            data: ozoneGroup1,
            dataLabels:false,
            color:'#CC2874',
        },{
            name: 'CSAPR NOₓ Ozone Season Group 2',
            data: ozoneGroup2,
            dataLabels:false,
            color:'#DD8A2E',
        },{
            name: 'CSAPR NOₓ Ozone Season Group 3',
            data: ozoneGroup3,
            dataLabels:false,
            color:'#60BC40',
        },{
            name: 'The ARP covers sources in all of the lower 48 states',
            dataLabels:false,
            color:'#FFFFFF',
        },{
            name: 'The MATS covers sources in all 50 states and US territories',
            dataLabels:false,
            color:'#FFFFFF',
        }],
    });
})();
//End of map viz code


//Start of figure 3 code
Highcharts.chart('fig3Container', {
  colors: colors,
  chart: {
    type: 'column',
  },
  title: {
    text: "Electricity Generation from ARP- and CSAPR-Affected Power Plants, 2005-"+reportYear
  },
credits: {
enabled: true
},
  legend: {
    enabled: true,
    symbolRadius: 0
  },
  xAxis: {
    categories: fig3Years,
    tickmarkPlacement: "between",
    tickLength: 10,
  labels:{ style: {
         fontSize: '9px',
         }
         }
  },
  caption: {
    text: figure3Captions,
    style: {
      fontSize: '8.5px',
    },
    },
  yAxis: {
    title: {
      text: "Generation (million MWh)"
    },
    labels: {
      formatter: function() {
        return this.value / 1000000;
      }
    },
    stackLabels: {
      enabled: true,
      formatter: function() {
        return Highcharts.numberFormat(this.total / 1000000, 0)
      },
      style: {
        fontWeight: "none",
        color: "#5e5e5e",
        fontSize: "9px"
      }
    },
  },
  plotOptions: {
    column: {
      groupPadding: 0,
      pointPadding: 0.25,
      stacking: 'normal',
    }
  },
  tooltip: {
    shared: true
  },
  series: electricityData,
});
//end Figure 3 code

//start figure 4 code
Highcharts.chart('fig4Container', {
colors: colors,
  chart: {
    type: 'column',
  },
  title: {
    text: "Regulated Emissions Sources in CSAPR and ARP, " + reportYear
  },
credits: {
enabled: true
},
  legend: {
    enabled: true,
    symbolRadius: 0,
  },
  caption: {
    text: figure4Captions,
    style: {
      fontSize: '8.5px'
    },
    },
  xAxis: {
    categories: programs
  },
  yAxis: {
    title: {
      text: "Number of Units"
    },
    labels: {
      format: '{value:,.0f}'
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'normal',
        fontSize: 10,
      },
    },

  },

  plotOptions: {
    column: {
      groupPadding: 0,
      pointPadding: 0.2,
      stacking: 'normal',
    }
  },
  series: programData,
});
//end figure 4 code

</script>
