
var DonutShop = function(location, stats) {
    this.location = location;
    this.minCustPH = stats.minCustPH;
    this.maxCustPH = stats.maxCustPH;
    this.avgDonutsPerCust = stats.avgDonutsPerCust;
    this.hourlyTotals = [];
    this.dailyTotals = [];
    this.randCustomers = function(minCustPH, maxCustPH) {
        return Math.floor(Math.random() * (this.maxCustPH - this.minCustPH)) + this.minCustPH;
    };
    this.hourlyDonuts = function() {
        for (var i = 0; i < 11; i++){
            hourly =  this.avgDonutsPerCust * this.randCustomers();
            this.hourlyTotals.push(hourly);
        };
    };
    this.dailyDonuts = function() {
        var total = 0;
        for (var i = 0; i < this.hourlyTotals.length; i++) {
            total += this.hourlyTotals[i];
        };
        this.dailyTotals.push(total);
    }
};

DonutShop.prototype.render = function() {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = this.location;
    tr.appendChild(td);

    for(var i = 0; i < this.hourlyTotals.length; i++) {
        td = document.createElement('td');
        td.innerHTML = this.hourlyTotals[i];
        tr.appendChild(td);
    };

    td = document.createElement('td');
    td.innerHTML = this.dailyTotals;
    tr.appendChild(td);
    body = document.getElementById('body').appendChild(tr);
};



var downtown = new DonutShop('Downtown', {minCustPH: 8, maxCustPH: 43, avgDonutsPerCust: 4.5});
var capitolHill = new DonutShop('Capitol Hill', {minCustPH: 4, maxCustPH: 37, avgDonutsPerCust: 2});
var southLakeUnion = new DonutShop('South Lake Union', {minCustPH: 9, maxCustPH: 23, avgDonutsPerCust: 6.33});
var wedgewood = new DonutShop('Wedgewood', {minCustPH: 2, maxCustPH: 28, avgDonutsPerCust: 1.25});
var ballard = new DonutShop('Ballard', {minCustPH: 8, maxCustPH: 58, avgDonutsPerCust: 3.75});

downtown.hourlyDonuts();
downtown.dailyDonuts();
downtown.render();

capitolHill.hourlyDonuts();
capitolHill.dailyDonuts();
capitolHill.render();

southLakeUnion.hourlyDonuts();
southLakeUnion.dailyDonuts();
southLakeUnion.render();

wedgewood.hourlyDonuts();
wedgewood.dailyDonuts();
wedgewood.render();

ballard.hourlyDonuts();
ballard.dailyDonuts();
ballard.render();


