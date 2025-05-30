<!--Required Javascript source code like highcharts and jQuery-->
<script src="https://rawgit.com/mholt/PapaParse/master/papaparse.js"></script>
<script src="https://code.highcharts.com/stock/highstock.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script src="https://code.highcharts.com/stock/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>

<script>
(async () => {

// Constants and Configurations
const CONFIG = {
  complianceYear: 2023,
  colors: [
    'rgba( 0,   154, 253, 0.9 )',
    'rgba( 253, 99,  0,   0.9 )',
    'rgba( 40,  40,  56,  0.9 )',
    'rgba( 253, 0,   154, 0.9 )',
    'rgba( 154, 253, 0,   0.9 )',
    'rgba( 145, 44,  138, 0.9 )',
    'rgba( 45,  47,  238, 0.9 )',
    'rgba( 177, 69,  0,   0.9 )',
    'rgba( 140, 140, 156, 0.9 )',
    'rgba( 238, 46,  47,  0.9 )',
    'rgba( 44,  145, 51,  0.9 )',
    'rgba( 103, 16,  192, 0.9 )'
  ],
  lang: {
    thousandsSep: ",",
    numericSymbols: [' thousand', ' million']
  },
  papaparseUrls: {
    allocationsDeductions: 'https://www.epa.gov/system/files/other-files/2024-10/capd-allocations-deductions-2023-progress-report.csv',
    priceVolumeData: 'https://www.epa.gov/system/files/other-files/2024-10/capd-price-volume-data-2023-progress-report.csv',
    volumeDeductionsData: 'https://www.epa.gov/system/files/other-files/2024-10/capd-volume-deductions-data-2023-progress-report.csv'
  },
  highchartsDefaults: {
    tooltip: {
      useHTML: true,
      headerFormat: '{point.point.id}<br>',
      pointFormat: '<b>{point.y:,.0f} Allowances</b>',
    },
    credits: {
      text: 'Source: EPA, 2024'
    },
    lang: {
      thousandsSep: ",",
      numericSymbols: [' thousand', ' million']
    }
  }
};


// Set compliance year dynamically
const complianceYear = CONFIG.complianceYear;
const complianceSpans = document.getElementsByClassName("complianceYearSpan");
for (let i = 0; i < complianceSpans.length; i++) {
  complianceSpans[i].innerHTML = complianceYear;
}

////////////////////////////////////////
// Program Compliance highlight object //
////////////////////////////////////////

// Javascript below pulls in the numbers for these objects from the files uploaded -- THESE ARE PLACEHOLDERS

const highlightProgramComplianceText = {
  ARP: {
    tradingProgramName:"Acid Rain Trading Program (SO<sub>2</sub>)",
    pollutant:"SO<sub>2</sub>",
    allocatedCurrent:"##",
    bankedPrevious:"##",
    deductedCurrent:"##",
    diffeneceInDeductions:"##",
    diffeneceType:"##",
    bankedCurrent:"##",
    assuranceTriggered:[]
  },
  CSSO2G1: {
    tradingProgramName:"CSAPR Annual SO<sub>2</sub> Group 1 Trading Program",
    pollutant:"SO<sub>2</sub>",
    allocatedCurrent:"##",
    bankedPrevious:"##",
    deductedCurrent:"##",
    diffeneceInDeductions:"##",
    diffeneceType:"##",
    bankedCurrent:"##",
    assuranceTriggered:[]
  },
  CSSO2G2: {
    tradingProgramName:"CSAPR Annual SO<sub>2</sub> Group 2 Trading Program",
    pollutant:"SO<sub>2</sub>",
    allocatedCurrent:"##",
    bankedPrevious:"##",
    deductedCurrent:"##",
    diffeneceInDeductions:"##",
    diffeneceType:"##",
    bankedCurrent:"##",
    assuranceTriggered:[]
  },
  CSNOX: {
    tradingProgramName:"CSAPR NO<sub>x</sub> Annual Trading Program",
    pollutant:"NO<sub>x</sub>",
    allocatedCurrent:"##",
    bankedPrevious:"##",
    deductedCurrent:"##",
    diffeneceInDeductions:"##",
    diffeneceType:"##",
    bankedCurrent:"##",
    assuranceTriggered:[]
  },
  CSOSG1: {
    tradingProgramName:"CSAPR NO<sub>x</sub> Ozone Season Group 1 Trading Program",
    pollutant:"NO<sub>x</sub>",
    allocatedCurrent:"##",
    bankedPrevious:"##",
    deductedCurrent:"##",
    diffeneceInDeductions:"##",
    diffeneceType:"##",
    bankedCurrent:"##",
    assuranceTriggered:[]
  },
  CSOSG2: {
    tradingProgramName:"CSAPR NO<sub>x</sub> Ozone Season Group 2 Trading Program",
    pollutant:"NO<sub>x</sub>",
    allocatedCurrent:"##",
    bankedPrevious:"##",
    deductedCurrent:"##",
    diffeneceInDeductions:"##",
    diffeneceType:"##",
    bankedCurrent:"##",
    assuranceTriggered:[
      {
        assuranceState:"Missouri",
        assuranceExceeded:"##",
        assuranceAdditionalSurrender:"##",
        yearsTriggered: [2020, 2021]
      },{
        assuranceState:"Mississippi",
        assuranceExceeded:"##",
        assuranceAdditionalSurrender:"##",
        yearsTriggered: [2019, 2020]
      }
    ]
  },
  CSOSG2E: {
    tradingProgramName:"CSAPR NO<sub>x</sub> Ozone Season Expanded Group 2 Trading Program",
    pollutant:"NO<sub>x</sub>",
    allocatedCurrent:"##",
    bankedPrevious:"##",
    deductedCurrent:"##",
    diffeneceInDeductions:"##",
    diffeneceType:"##",
    bankedCurrent:"##",
    assuranceTriggered:[]
  },
  CSOSG3: {
    tradingProgramName:"CSAPR NO<sub>x</sub> Ozone Season Group 3 Trading Program",
    pollutant:"NO<sub>x</sub>",
    allocatedCurrent:"##",
    bankedPrevious:"##",
    deductedCurrent:"##",
    diffeneceInDeductions:"##",
    diffeneceType:"##",
    bankedCurrent:"##",
    assuranceTriggered:[]
  }
};

//////////////////////////////////
// Market Activity highlight object //
//////////////////////////////////

// Javascript below pulls in the numbers for these objects from the files uploaded -- THESE ARE PLACEHOLDERS

const highlightMarketActivityText = {
  ARP: {
    tradeVolume:"##",
    difference:"##",
    differenceType:"##",
    tradingProgramName:"Acid Rain Trading Program (SO<sub>2</sub>)",
    price:"##",
  },
  CSSO2G1: {
    tradeVolume:"##",
    difference:"##",
    differenceType:"##",
    tradingProgramName:"CSAPR Annual SO<sub>2</sub> Group 1 Trading Program",
    price:"##",
  },
  CSSO2G2: {
    tradeVolume:"##",
    difference:"##",
    differenceType:"##",
    tradingProgramName:"CSAPR Annual SO<sub>2</sub> Group 2 Trading Program",
    price:"##",
  },
  CSNOX: {
    tradeVolume:"##",
    difference:"##",
    differenceType:"##",
    tradingProgramName:"CSAPR NO<sub>x</sub> Annual Trading Program",
    price:"##",
  },
  CSOSG1: {
    tradeVolume:"##",
    difference:"##",
    differenceType:"##",
    tradingProgramName:"CSAPR NO<sub>x</sub> Ozone Season Group 1 Trading Program",
    price:"##",
  },
  CSOSG2: {
    tradeVolume:"##",
    difference:"##",
    differenceType:"##",
    tradingProgramName:"CSAPR NO<sub>x</sub> Ozone Season Group 2 Trading Program",
    price:"##",
  },
  CSOSG2E: {
    tradeVolume:"##",
    difference:"##",
    differenceType:"##",
    tradingProgramName:"CSAPR NO<sub>x</sub> Ozone Season Expanded Group 2 Trading Program",
    price:"##",
  },
  CSOSG3: {
    tradeVolume:"##",
    difference:"##",
    differenceType:"##",
    tradingProgramName:"CSAPR NO<sub>x</sub> Ozone Season Group 3 Trading Program",
    price:"##",
  },
};

///////////////////////////////////
// Program Compliance JS section //
///////////////////////////////////

(function(H) {
  H.wrap(
    H.Legend.prototype,
    'init',
    function(proceed, chart, options) {
      
      if (options.enableMouseTracking === false) {
        this.setItemEvents = false;
      }
      
      proceed.apply(this, [chart, options]);
    }
  );
})(Highcharts);
// global highcharts options
Highcharts.setOptions({
  colors: CONFIG.colors,
  lang: CONFIG.lang
});

var waterfallAllocationDeductChart = Highcharts.chart('programAllocationDeductChart', {
    chart: {
      type: 'waterfall',
      animation: false
    },

    title: {
      text: 'Load some data!'
    },
    caption: {
      text: 'Note: <br><ul><li>Allocation calculations consider approved State Implementation Plans (SIP), pending and complete applicability determinations, and other program specific scenarios (e.g., program revintaging and conversions). Deductions consider only deductions at time of compliance and do not include additional deductions from a facility resubmission.</li></ul>'
    },
    credits: {
      text: 'Source: EPA, 2024'
    },

    legend: {
      enableMouseTracking: false,
      itemStyle: {
        cursor: 'auto'
      }
    },

    xAxis: {
      type: 'category',
      uniqueNames: false,
      labels: {
        enabled: false
        //align: 'right',
        //x: 15,
      },
      scrollbar: {
        enabled: true
      },
      gridLineWidth: 0,
      plotBands: [
        {
          id: "band1",
          from: -0.5,
          to: 2.5,
          color : '#e6f5ff',
          label: {text: 2015}
        },
        {
          id: "band2",
          from: 2.5,
          to: 5.5,
          color : '#ffffff',
          label: {text: 2016}
        },
        {
          id: "band3",
          from: 5.5,
          to: 8.5,
          color : '#e6f5ff',
          label: {text: 2017}
        },
        {
          id: "band4",
          from: 8.5,
          to: 11.5,
          color : '#ffffff',
          label: {text: 2018}
        },
        {
          id: "band5",
          from: 11.5,
          to: 14.5,
          color : '#e6f5ff',
          label: {text: 2019}
        },
        {
          id: "band6",
          from: 14.5,
          to: 17.5,
          color : '#ffffff',
          label: {text: 2020}
        },
        {
          id: "band7",
          from: 17.5,
          to: 20.5,
          color : '#e6f5ff',
          label: {text: 2020}
        },
      ]
    },

    yAxis: {
      endOnTick: true,
      title: {
        text: 'Allowances'
      }
    },

    tooltip: {
      useHTML: true,
      headerFormat: '{point.point.id}<br>',
      pointFormat: '<b>{point.y:,.0f} Allowances</b>',
    },

    plotOptions: {
      series: {
        events: {
          legendItemClick: function() {
            return false;
          }
        }
      }
    },

    series: [{
      name: 'Total Bank',
      color: Highcharts.getOptions().colors[2],
      grouping: false,
      data: [],
      animation: false
    }, {
      name: 'Allowance Allocations',
      color: Highcharts.getOptions().colors[0],
      grouping: false,
      data: [],
      animation: false
    }, {
      name: 'Allowance Deductions',
      upColor: Highcharts.getOptions().colors[0],
      color: Highcharts.getOptions().colors[1],
      data: [
        {name:"Allocations", id:"Allocations in 2015", y:1269873}, {name:"Deductions", id:"Deductions in 2015", y:-905865}, 
        {name:"Total Bank", id:"Total Bank in 2015", isSum: true,color: Highcharts.getOptions().colors[2]},
        {name:"Allocations", id:"Allocations in 2016", y:1269873}, {name:"Deductions", id:"Deductions in 2016", y:-830899}, 
        {name:"Total Bank", id:"Total Bank in 2016", isSum: true,color: Highcharts.getOptions().colors[2]},
        {name:"Allocations", id:"Allocations in 2017", y:1069265}, {name:"Deductions", id:"Deductions in 2017", y:-586004}, 
        {name:"Total Bank", id:"Total Bank in 2017", isSum: true,color: Highcharts.getOptions().colors[2]},
        {name:"Allocations", id:"Allocations in 2018", y:1069265}, {name:"Deductions", id:"Deductions in 2018", y:-589687}, 
        {name:"Total Bank", id:"Total Bank in 2018", isSum: true,color: Highcharts.getOptions().colors[2]},
        {name:"Allocations", id:"Allocations in 2019", y:1069265}, {name:"Deductions", id:"Deductions in 2019", y:-487507}, 
        {name:"Total Bank", id:"Total Bank in 2019", isSum: true,color: Highcharts.getOptions().colors[2]},
        {name:"Allocations", id:"Allocations in 2020", y:1069265}, {name:"Deductions", id:"Deductions in 2020", y:-405462}, 
        {name:"Total Bank", id:"Total Bank in 2020", isSum: true,color: Highcharts.getOptions().colors[2]},
        {name:"Allocations", id:"Allocations in 2021", y:1069265}, {name:"Deductions", id:"Deductions in 2021", y:-440236}, 
        {name:"Total Bank", id:"Total Bank in 2021", isSum: true,color: Highcharts.getOptions().colors[2]}
      ],
      pointPadding: 0,
      dashStyle: 'ShortDash',
      lineWidth: 2,
      animation: false
    }]
  });

var stateAllocationDeductChart = Highcharts.chart('stateAllocationDeductChart', {
    chart: {
        height: 500,
        type: 'column',
        animation: false,
        zooming: {
            type: 'y'
        },
    },
    title: {
        text: 'Column chart'
    },
    caption: {
      text: 'Note: <br><ul><li>Graph displays allocations to and deductions from facility compliance accounts and does not reflect balances of allowances held in general accounts, which are not associated with individual states. Deductions consider only deductions at time of compliance and do not include additional deductions at a later date from a facility resubmission.</li></ul>'
    },
    credits: {
      text: 'Source: EPA, 2023'
    },
    tooltip: {
      formatter: function (tooltip) {
          tooltipArr = tooltip.defaultFormatter.call(this, tooltip);
          if (this.color == Highcharts.getOptions().colors[9]){
tooltipArr[2] = "<strong>This state triggered their assurance provision.<strong>"
}
          return tooltipArr;
      }
  },
    xAxis: {
        type: 'category',
        title: {
            text: "State"
        }
    },
    yAxis: {
        title: {
            text: "Allowances"
        }
    },
    series: [{
        name: 'Allowance Allocations',
        data: [{
            name: 'AL',
            y: 1
        }, {
            name: 'AR',
            y: 5
        }, {
            name: 'NY',
            y: 5
        }],
        animation: false
    }, {
        name: 'Allowance Deductions',
        data: [{
            name: 'AL',
            y: 3
        }, {
            name: 'AR',
            y: 2
        }, {
            name: 'NY',
            y: 5
        }],
        animation: false
    }]
});

// chart functions //

let programComplianceArrayOfObjs = null;
let programComplianceProgramSelectedData = null;

function yaxisFormatter(chart, yIndex, variableTxt, extraTxtLabel='') {
  chartMax = chart.yAxis[yIndex].max;
  if (chartMax > 1000 ){
    if (chartMax < 1000000){
      chart.yAxis[yIndex].setTitle({text: variableTxt+" (thousand"+extraTxtLabel+")"});
      chart.yAxis[yIndex].update({labels: {
                  formatter: function(){
                      return this.value/1000;
                  }
                }});
    }
    else {
      chart.yAxis[yIndex].setTitle({text: variableTxt+" (million"+extraTxtLabel+")"});
      chart.yAxis[yIndex].update({labels: {
                  formatter: function(){
                      return this.value/1000000;
                  }
              }});
    }
  }
  else {
    chart.yAxis[yIndex].setTitle({text: variableTxt});
      chart.yAxis[yIndex].update({labels: {
                  formatter: function(){
                      return this.value;
                  }
                }});
  }
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function calculateProgramComplianceValues(){
  // map the values from the csv file to each object in highlightProgramComplianceText 
  for (var program in highlightProgramComplianceText) {
    // fliter programComplianceArrayOfObjs by the program 
    var programComplianceData = programComplianceArrayOfObjs.filter(object => {
      return object.programCodeInfo === program;
    });
    var programAggData = aggregateYearLevel(programComplianceData);
    programAggData.sort(function(a, b) {
        return a.year - b.year;
    });
    // get the sum of all totalAllocations
    var totalAllocations = programAggData.reduce(function(prev, cur) {
        return prev + cur.totalAllocations;
    }, 0);
    // get the sum of all totalDeductions
    var totalDeductions = programAggData.reduce(function(prev, cur) {
        return prev + cur.totalDeductions;
    }, 0);
    // get the of totalDeductions up the the previous year of the compliance year
    var prevYearTotalDeductions = programAggData.reduce(function(prev, cur) {
        if (cur.year === complianceYear) {
            return prev;
        } else {
            return prev + cur.totalDeductions;
        }
    }, 0);
    // get the of totalAllocations up the the previous year of the compliance yeart
    var prevYearTotalAllocations = programAggData.reduce(function(prev, cur) {
        if (cur.year === complianceYear) {
            return prev;
        } else {
            return prev + cur.totalAllocations;
        }
    }, 0);
    // get compliance data for the complianceYear
    var programComplianceYear = programAggData.filter(object => {
        return object.year === complianceYear;
    });
    // get compliance data for the complianceYear - 1
    var programComplianceYearMinusOne = programAggData.filter(object => {
        return object.year === complianceYear - 1;
    });
    // get the sum of totalAllocations of programComplianceYear
    var programComplianceYearTotalAllocations = programComplianceYear.reduce(function(prev, cur) {
        return prev + cur.totalAllocations;
    }, 0);
    // get the sum of totalDeductions of programComplianceYear
    var programComplianceYearTotalDeductions = programComplianceYear.reduce(function(prev, cur) {
        return prev + cur.totalDeductions;
    }, 0);
    // get the sum of totalDeductions of programComplianceYearMinusOne
    var programComplianceYearMinusOneTotalDeductions = programComplianceYearMinusOne.reduce(function(prev, cur) {
        return prev + cur.totalDeductions;
    }, 0);
    // if the difference between programComplianceYearTotalDeductions and programComplianceYearMinusOneTotalDeductions if negative, then the differenceType is "decrease" else "increase"
    if (programComplianceYearTotalDeductions - programComplianceYearMinusOneTotalDeductions < 0) {
      highlightProgramComplianceText[program].diffeneceType = "decrease";
    } else {
      highlightProgramComplianceText[program].diffeneceType = "increase";
    }
    // set values in highlightProgramComplianceText
    highlightProgramComplianceText[program].allocatedCurrent = programComplianceYearTotalAllocations.toLocaleString();
    highlightProgramComplianceText[program].bankedPrevious = (prevYearTotalAllocations - prevYearTotalDeductions).toLocaleString();
    highlightProgramComplianceText[program].deductedCurrent = programComplianceYearTotalDeductions.toLocaleString();
    highlightProgramComplianceText[program].diffeneceInDeductions = Math.abs(programComplianceYearTotalDeductions - programComplianceYearMinusOneTotalDeductions).toLocaleString();
    highlightProgramComplianceText[program].bankedCurrent = (totalAllocations - totalDeductions).toLocaleString();
    
  }
}

function renderProgramComplianceTable() {
  const prevComplianceYear = complianceYear - 1;
  let table = '<div class="usa-table-container" tabindex="0"><table class="usa-table usa-table--compact usa-table--striped"><caption>Detailed Program Reconciliation Summary</caption>';
  table += '<thead><tr><th>Trading Program</th><th>Allocated for ' + complianceYear + '</th><th>Banked from Previous Years</th><th>Deducted for ' + complianceYear + '</th><th>Difference in Deductions from ' + prevComplianceYear + '</th><th>Allowance Banked After ' + complianceYear + ' Compliance</th></tr></thead><tbody>';
  
  for (var program in highlightProgramComplianceText) {
    const programData = highlightProgramComplianceText[program];
    table += `<tr><td>${programData.tradingProgramName}</td>`;
    table += `<td class="text-center">${programData.allocatedCurrent}</td>`;
    table += `<td class="text-center">${programData.bankedPrevious}</td>`;
    table += `<td class="text-center">${programData.deductedCurrent}</td>`;
    table += `<td class="text-center">${programData.diffeneceType === "decrease" ? '-' : '+'}${programData.diffeneceInDeductions}</td>`;
    table += `<td class="text-center">${programData.bankedCurrent}</td></tr>`;
  }

  table += "</tbody></table></div>";
  document.getElementById("programComplianceProgramSelectedTable").innerHTML = table;
}

function updateProgramComplianceCharts(programComplianceYearSelected,programSelected){
  programComplianceProgramSelectedData = programComplianceArrayOfObjs.filter(object => {
      return object.programCodeInfo === programSelected;
  });

  programSelectedData = programComplianceProgramSelectedData;

  var programAggData = aggregateYearLevel(programSelectedData);
  programAggData.sort(function(a, b) {
      return a.year - b.year;
  });
  updateWaterfallAllocationDeductChart(programAggData);

  // get the sum of all totalAllocations
  var totalAllocations = programAggData.reduce(function(prev, cur) {
      return prev + cur.totalAllocations;
  }, 0);
  // get the sum of all totalDeductions
  var totalDeductions = programAggData.reduce(function(prev, cur) {
      return prev + cur.totalDeductions;
  }, 0);
  // get the of totalDeductions up the the previous year of the compliance year
  var prevYearTotalDeductions = programAggData.reduce(function(prev, cur) {
      if (cur.year === complianceYear) {
          return prev;
      } else {
          return prev + cur.totalDeductions;
      }
  }, 0);
  // get the of totalAllocations up the the previous year of the compliance yeart
  var prevYearTotalAllocations = programAggData.reduce(function(prev, cur) {
      if (cur.year === complianceYear) {
          return prev;
      } else {
          return prev + cur.totalAllocations;
      }
  }, 0);
  // get compliance data for the complianceYear
  var programComplianceYear = programAggData.filter(object => {
      return object.year === complianceYear;
  });
  // get compliance data for the complianceYear - 1
  var programComplianceYearMinusOne = programAggData.filter(object => {
      return object.year === complianceYear - 1;
  });
  // get the sum of totalAllocations of programComplianceYear
  var programComplianceYearTotalAllocations = programComplianceYear.reduce(function(prev, cur) {
      return prev + cur.totalAllocations;
  }, 0);
  // get the sum of totalDeductions of programComplianceYear
  var programComplianceYearTotalDeductions = programComplianceYear.reduce(function(prev, cur) {
      return prev + cur.totalDeductions;
  }, 0);
  // get the sum of totalDeductions of programComplianceYearMinusOne
  var programComplianceYearMinusOneTotalDeductions = programComplianceYearMinusOne.reduce(function(prev, cur) {
      return prev + cur.totalDeductions;
  }, 0);
  // get object of highlightProgramComplianceText for the programSelected
  var highlightProgramSelectedComplianceText = highlightProgramComplianceText[programSelected];
  // assign highlightProgramSelectedComplianceText. in comma format
  highlightProgramSelectedComplianceText.allocatedCurrent = programComplianceYearTotalAllocations.toLocaleString();
  highlightProgramSelectedComplianceText.bankedPrevious = (prevYearTotalAllocations - prevYearTotalDeductions).toLocaleString();
  highlightProgramSelectedComplianceText.deductedCurrent = programComplianceYearTotalDeductions.toLocaleString();
  // get the absolute value of the difference between programComplianceYearTotalDeductions and programComplianceYearMinusOneTotalDeductions
  highlightProgramSelectedComplianceText.diffeneceInDeductions = Math.abs(programComplianceYearTotalDeductions - programComplianceYearMinusOneTotalDeductions).toLocaleString();
  // if the difference between programComplianceYearTotalDeductions and programComplianceYearMinusOneTotalDeductions if negative, then the differenceType is "decrease" else "increase"
  if (programComplianceYearTotalDeductions - programComplianceYearMinusOneTotalDeductions < 0) {
      highlightProgramSelectedComplianceText.diffeneceType = "decrease";
  } else {
      highlightProgramSelectedComplianceText.diffeneceType = "increase";
  }
  highlightProgramSelectedComplianceText.bankedCurrent = (totalAllocations - totalDeductions).toLocaleString();


  if (programSelected== "ARP"){
document.getElementById("stateAllocationDeductContainer").style.display = "none";
  }
  else {
    document.getElementById("stateAllocationDeductContainer").style.display = "block";
// For year slider
  programYearsAll = [];
  programSelectedData.forEach(function(object) {
    programYearsAll.push(object.year);
  });
  programYears = programYearsAll.filter(onlyUnique);

  var minYear = Math.min.apply(Math, programYears);

  programCompliancebBeginYearLabel.innerHTML = minYear;
  programComplianceYearSlider.min = minYear;
  programComplianceYearSlider.setAttribute('min',minYear);
  programComplianceYearSlider.setAttribute('aria-valuemin',minYear);
  programComplianceEndYearLabel.innerHTML = programComplianceYearSelected;
  programComplianceYearSlider.max = programComplianceYearSelected;
  programComplianceYearSlider.setAttribute('max',programComplianceYearSelected);
  programComplianceYearSlider.setAttribute('aria-valuemax',programComplianceYearSelected);
  programComplianceYearSlider.value = programComplianceYearSelected;
  programComplianceYearSlider.setAttribute('value',programComplianceYearSelected);
  programComplianceYearSlider.setAttribute('aria-valuenow',programComplianceYearSelected);
  var tickString = "";

  for (var i = 1; i <= programYears.length; i++){
      tickString = tickString.concat('<span class="tick"></span>');
  }
  programComplianceYearSliderTicks.innerHTML = tickString;
  setValue();

  updateStateAllocationDeductChart(programComplianceYearSelected,alphabeticalSort);
  }
}

function updateWaterfallAllocationDeductChart(programSelectedData) {
    var startBandIndex = -0.5;
    var bandStep = 3;
    var idIndex = 1;
    var color = '#e6f5ff';

    var seriesData = [];

    const bandIds = [];
    waterfallAllocationDeductChart.xAxis[0].plotLinesAndBands.forEach(function (a) {
      bandIds.push(a.id)
    });
    bandIds.forEach(function(id) {
      waterfallAllocationDeductChart.xAxis[0].removePlotBand(id);
    });

    programSelectedData.forEach(function (a) {
      waterfallAllocationDeductChart.xAxis[0].addPlotBand({
      id: "band"+String(idIndex),
      from: startBandIndex,
      to: startBandIndex+bandStep,
      color : color,
      label: {text: a.year}
      });
      startBandIndex += bandStep;
      idIndex += 1;
      if (color == '#e6f5ff'){color = '#ffffff'}
      else {color = '#e6f5ff'}
      //seriesData.push({name:"Allocations '"+String(a.year).slice(2), y:a.totalAllocations})
      //seriesData.push({name:"Deductions '"+String(a.year).slice(2), y:((-1)*a.totalDeductions)})
      seriesData.push({name:"Allocations", id:"Allocations in "+String(a.year), y:a.totalAllocations})
      seriesData.push({name:"Deductions", id:"Deductions in "+String(a.year), y:((-1)*a.totalDeductions)})
      //seriesData.push({name:"Total Bank '"+String(a.year).slice(2), isSum: true, color: Highcharts.getOptions().colors[2]})
      seriesData.push({name:"Total Bank", id:"Total Bank in "+String(a.year), isSum: true, color: Highcharts.getOptions().colors[2]})
        
    });
    
    var maxStdValue = 17;
    //waterfallAllocationDeductChart.xAxis[0].update({max:seriesData.length-1,min:0});
    //waterfallAllocationDeductChart.xAxis[0].setExtremes(0, seriesData.length-1);
    var newTitle = "Cumulative Allowance Balance ";
    var prgTitle = programComplianceProgramSelectedFullName;
    newTitle = newTitle + " of the " + prgTitle;

    waterfallAllocationDeductChart.setTitle({text: newTitle});
    waterfallAllocationDeductChart.series[2].remove( false );
    waterfallAllocationDeductChart.addSeries({
        name: 'Allowance Deductions',
        crisp: false,
        upColor: Highcharts.getOptions().colors[0],
        color: Highcharts.getOptions().colors[1],
        data: seriesData,
        pointPadding: 0,
        cropThreshold: seriesData.length,
        dashStyle: 'ShortDash',
        lineWidth: 2,
        animation: false});

    yaxisFormatter(waterfallAllocationDeductChart, 0, "Allowances");
    if (programSelectedData[0].programCodeInfo == "ARP") {
      waterfallAllocationDeductChart.xAxis[0].update({max:maxStdValue,min:0});
      waterfallAllocationDeductChart.xAxis[0].setExtremes(seriesData.length-1- maxStdValue,seriesData.length-1);
    }
    else {
      waterfallAllocationDeductChart.xAxis[0].update({max:seriesData.length-1,min:0});
      waterfallAllocationDeductChart.xAxis[0].setExtremes(0, seriesData.length-1);
    };
    
};

function updateStateAllocationDeductChart(programComplianceYearSelected,sortfunction){
  
  var yearProgramData = programComplianceProgramSelectedData.filter(object => {
    return object.year === programComplianceYearSelected;
  });
  
  var sortYearProgramData = yearProgramData.sort(sortfunction);

  var prgTitle = programComplianceProgramSelectedFullName;
  var newTitle = prgTitle + " State-level Allowance Allocations and Deductions for "+ programComplianceYearSelected;
  
  var allocatedData = sortYearProgramData.map(({
    stateName: name, totalAllocations: y, 
    ...rest
  }) => ({
    name, y,
    ...rest
  }));
  var deductedData = sortYearProgramData.map(({
    stateName: name, totalDeductions: y, 
    ...rest
  }) => ({
    name, y,
    ...rest
  }));

  if (highlightProgramComplianceText[programComplianceProgramSelected].assuranceTriggered.length > 0){
    var statesTriggeredAssurance = [];
    highlightProgramComplianceText[programComplianceProgramSelected].assuranceTriggered.forEach(function (obj) {
      if (obj.yearsTriggered.includes(programComplianceYearSelected)){
        
        var result = deductedData.find(item => item.name === obj.assuranceState);
        result[["color"]] = Highcharts.getOptions().colors[9];
        var index = deductedData.findIndex(item => item.name === obj.assuranceState);

        deductedData[index] = result;
      }
    });
  }

  clearStateAllocationDeductChart();

  stateAllocationDeductChart.setTitle({text: newTitle});

  stateAllocationDeductChart.addSeries({
    name: 'Allowance Allocations',
    data: allocatedData,
    animation: false
  });
  stateAllocationDeductChart.addSeries({
    name: 'Allowance Deductions',
    data: deductedData,
    animation: false
  });

  yaxisFormatter(stateAllocationDeductChart, 0, "Allowances");
};

function clearStateAllocationDeductChart(){
  while( stateAllocationDeductChart.series.length > 0 ) {
    stateAllocationDeductChart.series[0].remove( false );
  }
};

function aggregateYearLevel(programComplianceArrayOfObjs) {
  programAggregation = [];

  programComplianceArrayOfObjs.forEach(function (a) {
    if ( !this[a.year] ) {
      if ( !this[a.year] ) {
        this[a.year] = {
          programCodeInfo: a.programCodeInfo,
          year: a.year,
          totalAllocations: 0,
          totalDeductions: 0,
        };
        programAggregation.push(this[a.year]);
      }
    }
    this[a.year].totalAllocations += a.totalAllocations;
    this[a.year].totalDeductions += a.totalDeductions;
  }, Object.create(null));

  return(programAggregation);
};

// Button/Input functions //

var programComplianceProgramSelectedText = document.getElementById('programComplianceProgramSelectedDisplay');
var programComplianceYearSlider = document.getElementById('programComplianceRangeSelect');
var programComplianceYearSliderTicks = document.getElementsByClassName('ticks')[0];
var programCompliancebBeginYearLabel = document.getElementById("begin-year-label");
var programComplianceEndYearLabel = document.getElementById("end-year-label");
var programComplianceSortOption = document.getElementById('programComplianceSortOptions');
var programComplianceProgramSelected = "CSNOX";
var programComplianceProgramSelectedFullName = "CSAPR NO<sub>x</sub> Annual Trading Program"
var programComplianceYearSelected = complianceYear;
var programComplianceSortSelected = "name";

programComplianceProgramSelect.onchange = function() {
  programComplianceProgramSelected = programComplianceProgramSelect.value;
  programComplianceProgramSelectedFullName = highlightProgramComplianceText[programComplianceProgramSelected].tradingProgramName;
  programComplianceProgramSelectedText.innerHTML = programComplianceProgramSelectedFullName;
  programComplianceSortOption.selectedIndex = 0;
  programComplianceSortSelected = "name";
  programComplianceYearSelected = complianceYear;
  updateProgramComplianceCharts(programComplianceYearSelected,programComplianceProgramSelected);
}

const
        range = document.getElementById('programComplianceRangeSelect'),
        tooltip = document.getElementById('tooltip'),
        setValue = ()=>{
            const
                newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
                newPosition = 16 - (newValue * 0.32);
            tooltip.innerHTML = `<span>${range.value}</span>`;
            tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
            document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
        };
range.value = complianceYear;
range.addEventListener('input', setValue);

programComplianceYearSliderTicks.innerHTML = '<span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span>'
programComplianceYearSlider.addEventListener('change', (e) => {
  programComplianceYearSelected = parseInt(programComplianceYearSlider.value);
  if (programComplianceSortSelected == "name"){
    updateStateAllocationDeductChart(programComplianceYearSelected,alphabeticalSort)
  }
  else {
    updateStateAllocationDeductChart(programComplianceYearSelected,greatestToLeastSort)
  }
});

function alphabeticalSort(a, b) {
  if (a.stateName < b.stateName) {
      return -1;
  }
  if (a.stateName > b.stateName) {
      return 1;
  }
  return 0;
}
function greatestToLeastSort(a, b) {
  return parseFloat(b[programComplianceSortSelected]) - parseFloat(a[programComplianceSortSelected]);
}

programComplianceSortOption.onchange = function() {
  programComplianceSortSelected = programComplianceSortOption.value;
  if (programComplianceSortSelected == "name"){
    updateStateAllocationDeductChart(programComplianceYearSelected,alphabeticalSort)
  }
  else {
    updateStateAllocationDeductChart(programComplianceYearSelected,greatestToLeastSort)
  }
};

// Parsing function for the Program Compliance section
Papa.parse(CONFIG.papaparseUrls.allocationsDeductions, {
  dynamicTyping: true,
  header: true,
  download: true,
  complete: function(results) {
      var rawResults = results.data;
      
      programComplianceArrayOfObjs = rawResults.filter(element => {
          return Object.values(element)[0] !== null;
      });
      // Call the functions in sequence
      calculateProgramComplianceValues();
      renderProgramComplianceTable();
      updateProgramComplianceCharts(programComplianceYearSelected,programComplianceProgramSelected);
      programComplianceProgramSelectedFullName = highlightProgramComplianceText[programComplianceProgramSelected].tradingProgramName;
      programComplianceProgramSelectedText.innerHTML = programComplianceProgramSelectedFullName;
  }
});

////////////////////////////////
// Market Activity JS section //
////////////////////////////////

let weeklyTransArrayOfObjs = null;

var weeklyTransChart = Highcharts.chart('weeklyTransactionsContainer', {
    chart: {
        zoomType: 'xy',
        height: 600,
    },
    title: {
        text: 'Weekly Private Transactions & Allowance Price',
    },
    credits: {
      text: 'Source: Transaction Data - EPA, 2023; Price Data - S&P Global Market Intelligence, 2023'
    },
    exporting: {
        enabled: false
    },
    caption: {
      text: "Note: <br><ul><li>EPA does not set or track allowance prices but provides a graphical representation of average weekly prices for each trading program as a public service. Price data is sourced from third parties. Private transactions include only trades (of any vintage year allowance) between facility, unit, and/or general accounts. For details on control period dates see the <a href='https://www.epa.gov/sites/default/files/2020-07/documents/allowancedataguide.pdf'>Allowance Data Guide</a>.</li></ul>"
    },
    plotOptions: {
        series: {
            connectNulls: true,
            borderColor: '#ffffff',
            pointPadding: 0,
            groupPadding: 0,
            borderWidth: 0.05
        }
    },
    xAxis: [{
        tickInterval: 10,
        title: {
            text: 'Week (Date Range: January 1, '+(complianceYear)+' to June 1, '+(complianceYear+1)+')',
            style: {
                //color: Highcharts.getOptions().colors[1]
            }
        },
        //type: 'category',
        type: 'categories',
        //data:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        crosshair: true,
        plotLines: [{
          color: '#FF0000',
          width: 2,
          value: 9 + (4/7),
          zIndex: 3,
          label: {
              text: (complianceYear-1)+' Control Period - Transfer Deadline',
              verticalAlign: 'middle',
              textAlign: 'center'
          }
        }]
    }],
    yAxis: [{ // Primary yAxis
        title: {
            text: 'Volume of Allowances Traded'
        }
    }, { // Secondary yAxis
        title: {
            text: 'Weekly Allowance Price (USD)',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
      formatter: function (tooltip) {
          var items = this.points || splat(this);
          var s;
          // Build the header
          //s = [tooltip.tooltipFooterHeaderFormatter(items[0])];
          s = ['<span>Week Range:<br/><b>' + items[0].point.custom + '</b></span><br/>'];
          // build the values
          s = s.concat(tooltip.bodyFormatter(items));
          // footer -- Custom
          //s.push('<span>Week Range:<br/><b>' + items[0].point.custom + '</b></span>');
          return s;
        },
      shared: true
    },
    legend: {
        layout: "horizontal",
        floating: false,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series:[{
        name: 'Trading Volume',
        type: 'area',
        //data: [0, 1137, 145, 53840, 10180, 14060, 15511, 10711, 2362, 0, 15, 117, 0, 0, 0, 0, 2960, 585, 220004, 0, 2630, 513, 0, 0, 0, 2253, 4050, 0, 376, 0, 2127, 259, 0, 0, 0, 83, 0, 0, 0, 0, 58, 0, 0, 0, 0, 5, 0, 9, 0, 155, 9, 416, 0, 0, 0, 66, 950, 5596, 9441, 4675],
        data: [{
            //name: 'AL',
            custom: 'date range',
            x: 0,
            y: 3
        }, {
            //name: 'AR',
            custom: 'date range',
            x: 1,
            y: 2
        }, {
            //name: 'NY',
            custom: 'date range',
            x: 2,
            y: 5
        }],
        tooltip: {
            valueSuffix: null
        },
        color:'#1B1B1B',
        marker: {enabled: false}

    },
    {
        name: 'Allowance Price',
        type: 'spline',
        yAxis: 1,
        //data: [0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33],
        data: [{
            //name: 'AL',
            custom: 'date range',
            x: 0,
            y: 6
        }, {
            //name: 'AR',
            custom: 'date range',
            x: 1,
            y: 3
        }, {
            //name: 'NY',
            custom: 'date range',
            x: 2,
            y: 7
          }],
        tooltip: {
            valueSuffix: null,
            valuePrefix: '$'
        },
        color:'#4F97D1',
        lineWidth: 3,
        marker: {enabled: false}
    }]
});

function calculateWeeklyTransactionValues() {
  // loop through each object in highlightMarketActivityText and calculate the average price for each program
  for (var program in highlightMarketActivityText) {
    var programData = weeklyTransArrayOfObjs.filter(object => {
        return object.programCodeInfo === program;
    });
    // get the average price for the program
    var avgPrice = programData.reduce((a, b) => a + b.avgPriceWeek, 0) / programData.length;
    // if avgPrice is NaN, set it to "N/A"
    if (isNaN(avgPrice)) {
      highlightMarketActivityText[program]['price'] = "Not available";
    }
    else {
      // set highlightMarketActivityText price to avgPrice
      highlightMarketActivityText[program]['price'] = avgPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    }
  }
}

function calculateVolumeDeductionValues(){
  // loop through each object in highlightMarketActivityText and calculate the tradeVolume, difference, and differenceType for each program
  for (var program in highlightMarketActivityText) {
    var programData = transDeductionsArrayOfObjs.filter(object => {
        return object.programCodeInfo === program;
    });
    // find the index with the complianceYear
    var programData = programData.filter(object => {
        return object.year === complianceYear;
    });

    
    // get the tradeVolume and complianceDeductions for the program
    var tradeVolume = programData.reduce((a, b) => a + b.volume, 0);
    var complianceDeductions = programData.reduce((a, b) => a + b.complianceDeductions, 0);
    // get the difference
    var difference = tradeVolume - complianceDeductions;
    // if difference is negative, set differenceType to "decrease" else "increase"
    if (difference < 0) {
      highlightMarketActivityText[program]['differenceType'] = "decrease";
    } else {
      highlightMarketActivityText[program]['differenceType'] = "increase";
    }
    // set highlightMarketActivityText
    highlightMarketActivityText[program]['tradeVolume'] = tradeVolume.toLocaleString();
    highlightMarketActivityText[program]['difference'] = Math.abs(difference).toLocaleString();
    highlightMarketActivityText[program]['differenceType'] = difference < 0 ? "decrease" : "increase";
  }
}

function renderMarketActivityTable() {
  let table = '<div class="usa-table-container" tabindex="0"><table class="usa-table usa-table--compact usa-table--striped"><caption>Detailed Program Market Activity Summary</caption>';
  table += '<thead><tr><th>Trading Program</th><th>Allowances traded in ' + complianceYear + '</th><th>Difference in allowance traded minus control period emissions</th><th>Average allowance price</th></tr></thead><tbody>';
  
  for (var program in highlightMarketActivityText) {
    const programData = highlightMarketActivityText[program];
    table += `<tr><td>${programData.tradingProgramName}</td>`;
    table += `<td class="text-center">${programData.tradeVolume}</td>`;
    table += `<td class="text-center">${programData.differenceType === "decrease" ? '-' : '+'}${programData.difference}</td>`;
    table += `<td class="text-center">${programData.price}</td></tr>`;
  }

  table += "</tbody></table></div>";
  document.getElementById("marketActivityProgramSelectedTable").innerHTML = table;
}

function updateWeeklyTransactionsChart(marketActivityProgramSelected){

  var marketActivityProgramSelectedData = weeklyTransArrayOfObjs.filter(object => {
      return object.programCodeInfo === marketActivityProgramSelected;
  });
  
  var prgTitle = marketActivityProgramSelectedFullName;
  var newTitle = 'Weekly Private Transactions & Allowance Price: ' + prgTitle
  
  var volumeData = marketActivityProgramSelectedData.map(({
    week: x, avgVolumeWeek: y, dateRange : custom,
    ...rest
  }) => ({
    x, y, custom,
    ...rest
  }));
  var priceData = marketActivityProgramSelectedData.map(({
    week: x, avgPriceWeek: y, dateRange : custom,
    ...rest
  }) => ({
    x, y, custom,
    ...rest
  }));

  // get the average y value for the price data
  var priceDataAvg = priceData.reduce((a, b) => a + b.y, 0) / priceData.length;
  // set highlightMarketActivityText price to priceDataAvg
  highlightMarketActivityText[marketActivityProgramSelected]['price'] = priceDataAvg.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  clearWeeklyTransChart();

  weeklyTransChart.setTitle({text: newTitle});

  var deadlineIndexPast = 0;
  var deadlineIndexCur = 0;
  var addOzoneBand = false;

  if (marketActivityProgramSelected == "ARP"){
    deadlineIndexPast = 9;
    deadlineIndexCur = 61;
  }
  else if (marketActivityProgramSelected == "CSOSG2" | marketActivityProgramSelected == "CSOSG3"){
    deadlineIndexPast = 22;
    deadlineIndexCur = 74;
    addOzoneBand = true;
  }
  else {
    deadlineIndexPast = 22;
    deadlineIndexCur = 74;
  }

  weeklyTransChart.xAxis[0].addPlotLine({
    color: '#FF0000',
    width: 2,
    value: deadlineIndexPast,
    zIndex: 3,
    label: {
        text: (complianceYear-1)+' Control Period - Transfer Deadline',
        verticalAlign: 'middle',
        textAlign: 'center'
    }
  });

  weeklyTransChart.xAxis[0].addPlotLine({
    color: '#FF0000',
    width: 2,
    value: deadlineIndexCur,
    zIndex: 3,
    label: {
        text: (complianceYear)+' Control Period - Transfer Deadline',
        verticalAlign: 'middle',
        textAlign: 'center'
    }
  });

  if (addOzoneBand) {
    weeklyTransChart.xAxis[0].addPlotBand({
      color: '#FCFFC5',
      from: 18 + (2/7),
      to: 40, 
        label: {
          text: complianceYear+' Ozone Season',
          align: 'center',
          x: 0
        }
    });
  }

  weeklyTransChart.addSeries({
      name: 'Allowance Trading Volume',
      type: 'area',
      data: volumeData,
      tooltip: {
          valueSuffix: null
      },
      color:'#1B1B1B',
      marker: {enabled: false}

  });
  weeklyTransChart.addSeries({
      name: 'Allowance Price',
      type: 'spline',
      yAxis: 1,
      data: priceData,
      tooltip: {
          valueSuffix: null,
          valuePrefix: '$'
      },
      color:'#4F97D1',
      lineWidth: 3,
      marker: {enabled: false}
  });

  yaxisFormatter(weeklyTransChart, 0, 'Volume of Allowances Traded');
  yaxisFormatter(weeklyTransChart, 1, 'Allowance Price (USD)');

};

function clearWeeklyTransChart(){
  const bandLineIds = [];
  weeklyTransChart.xAxis[0].plotLinesAndBands.forEach(function (a) {
    bandLineIds.push(a.id)
  });
  bandLineIds.forEach(function(id) {
    weeklyTransChart.xAxis[0].removePlotBand(id);
  });

  while( weeklyTransChart.series.length > 0 ) {
    weeklyTransChart.series[0].remove( false );
  }
};

var transactionDeductChart = Highcharts.chart('transactionsDeductionsContainer', {
  chart: {
    zoomType: 'xy',
    height: 500,
  },
  title: {
    text: 'Private Transactions & Compliance Deductions',
  },
  credits: {
      text: 'Source: EPA, 2023'
    },
    caption: {
      text: "Note: <br><ul><li>Volume of allowances traded include private transactions (of any vintage year allowance) between facility, unit, and/or general accounts for a program's control period up until its allowance transfer deadline. Reference the <a href='https://www.epa.gov/sites/default/files/2020-07/documents/allowancedataguide.pdf'>Allowance Data Guide</a> for full details on control period dates.</li></ul>"
    },
  xAxis: [{
    type: 'category',
    crosshair: true,
    plotBands: [{ // ARP Phase 1
              color: '#e6e6e6',
              borderColor: '#1b1b1b',
              borderWidth: 0.25,
              from: 2016.5,
              to: 2019.5, 
              label: {
                  text: 'Phase 1',
                  align: 'center',
                  x: 0
              }
          }]
  }],
  yAxis: [{ // Primary yAxis
    title: {
      text: 'Volume of Allowances Traded',
      style: {
        //color: Highcharts.getOptions().colors[1]
      }
    }
  }, { // Secondary yAxis
    title: {
      text: 'Allowance Deductions for Compliance (short tons)',
      style: {
        color: Highcharts.getOptions().colors[0]
      }
    },
    gridLineColor:'#adadad',
    labels: {
      style: {
        color: Highcharts.getOptions().colors[0]
      },
      //format: '{value:,.0f}'
    },
    opposite: true,
    //max: 300000
  }],
  tooltip: {
      shared: true
  },
  legend: {
    layout: "horizontal",
    floating: false,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || // theme
      'rgba(255,255,255,0.25)'
  },
  series:[{
    name: 'Deductions',
    type: 'column',
    yAxis: 1,
    //data: [294558, 289754, 251804, 227495, 121892, null],
    data: [{x:2017,y:294558},{x:2018,y:289754},{x:2019,y:251804},{x:2020,y:227495},{x:2021,y:121892},{x:2022,y:null}],
    tooltip: {
        valueSuffix: ' short tons'
    },
    marker: {
      symbol: 'circle'
    },
    color:'#4F97D1'
  },
  {
    name: 'Trading Volume',
    type: 'spline',
    //data: [126319, 123894, 155176, 142415, 149580, 27911],
    data: [{x:2017,y:126319},{x:2018,y:123894},{x:2019,y:155176},{x:2020,y:142415},{x:2021,y:149580},{x:2022,y:27911}],
    tooltip: {
        valueSuffix: null
    },
    marker: {
      symbol: 'circle'
    },
    color:'#1B1B1B'

  }
  ]
});

let transDeductionsArrayOfObjs = null;

function updatetransactionDeductionChart(marketActivityProgramSelected){

  var marketActivityProgramSelectedData = transDeductionsArrayOfObjs.filter(object => {
      return object.programCodeInfo === marketActivityProgramSelected;
  });
  
  var prgTitle = marketActivityProgramSelectedFullName;
  var newTitle = 'Private Transactions & Compliance Deductions: ' + prgTitle
  
  var complianceData = marketActivityProgramSelectedData.map(({
    year: x, complianceDeductions: y, 
    ...rest
  }) => ({
    x, y,
    ...rest
  }));
  var volumeData = marketActivityProgramSelectedData.map(({
    year: x, volume: y, 
    ...rest
  }) => ({
    x, y,
    ...rest
  }));


  // find y value where x = complianceYear 
  var complianceYearVolumeIndex = volumeData.findIndex(function(element){
    if(element.x == complianceYear){
      return element.y;
    }
  });
  var complianceYearVolume = volumeData[complianceYearVolumeIndex].y
  highlightMarketActivityText[marketActivityProgramSelected]['tradeVolume'] = complianceYearVolume.toLocaleString();

  // find y value where x = complianceYear 
  var complianceYearComplianceIndex = complianceData.findIndex(function(element){
    if(element.x == complianceYear){
      return element.y;
    }
  });
  var complianceYearDeduct = complianceData[complianceYearComplianceIndex].y

  // if complianceYearDeduct is greater than complianceYearVolume, then set highlightMarketActivityText differenceType to 'less'
  if (complianceYearDeduct > complianceYearVolume){
    highlightMarketActivityText[marketActivityProgramSelected]['differenceType'] = 'less';
  } else {
    highlightMarketActivityText[marketActivityProgramSelected]['differenceType'] = 'more';
  }
  
  // get the absolute value of the difference between complianceYearDeduct and complianceYearVolume
  var complianceYearDifference = Math.abs(complianceYearDeduct - complianceYearVolume);
  highlightMarketActivityText[marketActivityProgramSelected]['difference'] = complianceYearDifference.toLocaleString();
  
  

  clearTransDeductionChart();

  var deductionMax = Math.round(Math.max(...complianceData.map(o => o.y)));
  var volumeMax = Math.round(Math.max(...volumeData.map(o => o.y)));

  var maxYvalue = (deductionMax > volumeMax) ? deductionMax : volumeMax;
  var maxDigets = maxYvalue.toString().length;

  var extremeValue = Math.ceil(maxYvalue/10^maxDigets-2)*10^maxDigets-2;

  transactionDeductChart.yAxis[0].update({min:0,max:extremeValue});
  transactionDeductChart.yAxis[1].update({min:0,max:extremeValue});

  transactionDeductChart.setTitle({text: newTitle});

  if (marketActivityProgramSelected == "ARP"){
    transactionDeductChart.xAxis[0].addPlotBand({
      color: '#e6e6e6',
      borderColor: '#1b1b1b',
      borderWidth: 0.25,
      from: 1994.5,
      to: 2000.5, 
      label: {
        text: 'Phase 1',
        align: 'center',
        x: 0
      }
    });
    transactionDeductChart.xAxis[0].addPlotBand({
      color: '#f3f3f3',
      borderColor: '#1b1b1b',
      borderWidth: 0.25,
      from: 2000.5,
      to: complianceYear+0.5, 
      label: {
        text: 'Phase 2',
        align: 'center',
        x: 0
      }
    });
  };
  
  transactionDeductChart.addSeries({
    name: 'Allowance Deductions',
    type: 'column',
    yAxis: 1,
    data: complianceData,
    tooltip: {
        valueSuffix: ' short tons'
    },
    marker: {
      symbol: 'circle'
    },
    color:'#4F97D1'
  });
  
  transactionDeductChart.addSeries({
    name: 'Allowance Trading Volume',
    type: 'spline',
    data: volumeData,
    tooltip: {
        valueSuffix: null
    },
    marker: {
      symbol: 'circle'
    },
    color:'#1B1B1B'
  });

  yaxisFormatter(transactionDeductChart, 0, 'Volume of Allowances Traded');
  yaxisFormatter(transactionDeductChart, 1, 'Allowance Deductions for Compliance', ' short tons');

};

function clearTransDeductionChart(){

  const bandLineIds = [];
  transactionDeductChart.xAxis[0].plotLinesAndBands.forEach(function (a) {
    bandLineIds.push(a.id)
  });
  bandLineIds.forEach(function(id) {
    transactionDeductChart.xAxis[0].removePlotBand(id);
  });

  while( transactionDeductChart.series.length > 0 ) {
    transactionDeductChart.series[0].remove( false );
  }
};


var marketActivityProgramSelectedText = document.getElementById('marketActivityProgramSelectedDisplay');
var marketActivityHighlightsText = document.getElementById('marketActivityProgramSelectedHighlights');
var marketActivityProgramSelected = "CSNOX";
var marketActivityProgramSelectedFullName = "CSAPR NO<sub>x</sub> Annual Trading Program"

marketActivityProgramSelect.onchange = function() {
  marketActivityProgramSelected = marketActivityProgramSelect.value;
  marketActivityProgramSelectedFullName = highlightMarketActivityText[marketActivityProgramSelected].tradingProgramName;
  marketActivityProgramSelectedText.innerHTML = marketActivityProgramSelectedFullName;
  if (marketActivityProgramSelected == "CSOSG1" | marketActivityProgramSelected == "CSOSG2E"){
    document.getElementById("weeklyTransactionsContainer").style.display = "none";
  }
  else {
    document.getElementById("weeklyTransactionsContainer").style.display = "block";
    updateWeeklyTransactionsChart(marketActivityProgramSelected);
  }
  updatetransactionDeductionChart(marketActivityProgramSelected);
}

// Parsing function for the Weekly Transaction chart
Papa.parse(CONFIG.papaparseUrls.priceVolumeData, {
  dynamicTyping: true,
  header: true,
  download: true,
  complete: function(results) {
      var rawResults = results.data;
      
      weeklyTransArrayOfObjs = rawResults.filter(element => {
        return Object.values(element)[0] !== null;
      });
      weeklyTransArrayOfObjs = weeklyTransArrayOfObjs.filter(element => {
        return Object.values(element)[0] !== 'undefined';
      });
      weeklyTransArrayOfObjs.forEach(element => {
        element['dates'] = JSON.parse(element['dates']);
        element['dateRange'] = element['dates'][0].toString() + ' to ' + element['dates'][element['dates'].length - 1].toString();
      });

      updateWeeklyTransactionsChart(marketActivityProgramSelected);
      calculateWeeklyTransactionValues();
  }
});

// Parsing function for the Transactions and Deductions chart
Papa.parse(CONFIG.papaparseUrls.volumeDeductionsData, {
  dynamicTyping: true,
  header: true,
  download: true,
  complete: function(results) {
      var rawResults = results.data;
      
      transDeductionsArrayOfObjs = rawResults.filter(element => {
        return Object.values(element)[0] !== null;
      });

      updatetransactionDeductionChart(marketActivityProgramSelected);
      calculateVolumeDeductionValues();
  marketActivityProgramSelectedText.innerHTML = marketActivityProgramSelectedFullName;
      renderMarketActivityTable();
  }
});

})();
</script>
