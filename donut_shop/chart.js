var locationsArray = propertiesArray.map(function(store) {
   return store.location;
});

var colorsArray = ['#8B0000', '#98FB98', '#BA55D3', '#DC143C', '#FFD700'];



DonutShop.prototype.newShopChart = function(totals, location) {
    var segment = {};
    segment.value = this.dailyTotals;
    segment.color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    segment.label = this.location
    data.push(segment);
}


var data = [
    {
        value: propertiesArray[0].dailyTotals,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: propertiesArray[0].location
    },
    {
        value: propertiesArray[1].dailyTotals,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: propertiesArray[1].location
    },
    {
        value: propertiesArray[2].dailyTotals,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: propertiesArray[2].location
    }
]



var ctx = document.getElementById("chart").getContext("2d");
var myDoughnutChart = new Chart(ctx).Doughnut(data);



// var doughnutData = [
//     {
//         value: locationsArray[0],
//         color: "#46BFBD",
//         label: 'Red'

//     },
//     {
//         value: locationsArray[1],
//         color:"#F7464A",
//         label: 'Green'
//     }

// ]

// var DoughnutOptions = {
//   segmentShowStroke: true,
//   animateScale: true,
//   animateRotate: false
// }


// var ctx = document.getElementById('chart').getContext('2d');
// var myChart = new Chart(ctx).Doughnut(doughnutData, DoughnutOptions);
// myChart.doughnutData[1].value = 10;
// myChart.update();
