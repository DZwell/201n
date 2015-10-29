
var DonutShop = function(location, stats) {
    this.location = location;
    this.minCustPH = stats.minCustPH;
    this.maxCustPH = stats.maxCustPH;
    this.avgDonutsPerCust = stats.avgDonutsPerCust;
    this.hourlyTotals = [];
    this.randCustomers = function(minCustPH, maxCustPH) {
        return Math.floor(Math.random() * (this.maxCustPH - this.minCustPH)) + this.minCustPH;
    };
    this.hourlyDonuts = function() {
        hourly =  this.avgDonutsPerCust * this.randCustomers();
        this.hourlyTotals.push(hourly);
    };
};


var Downtown = new DonutShop('Downtown', {minCustPH: 8, maxCustPH: 43, avgDonutsPerCust: 4.5});
var CapitolHill = new DonutShop('Capitol Hill', {minCustPH: 4, maxCustPH: 37, avgDonutsPerCust: 2});
var SouthLakeUnion = new DonutShop('South Lake Union', {minCustPH: 9, maxCustPH: 23, avgDonutsPerCust: 6.33});
var Wedgewood = new DonutShop('Wedgewood', {minCustPH: 2, maxCustPH: 28, avgDonutsPerCust: 1.25});
var Ballard = new DonutShop('Ballard', {minCustPH: 8, maxCustPH: 58, avgDonutsPerCust: 3.75});








