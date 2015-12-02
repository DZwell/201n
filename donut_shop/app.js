// Gives row unique ID so it can be deleted \\
var rowCounter = 0;
var propertiesArray = [];

var DonutShop = function(location, stats) {
    this.location = location;
    this.minCustPH = stats.minCustPH;
    this.maxCustPH = stats.maxCustPH;
    this.avgDonutsPerCust = stats.avgDonutsPerCust;
    this.hourlyTotals = [];
    this.dailyTotals = [];
    this.randCustomers = function() {
        return Math.floor(Math.random() * (this.maxCustPH - this.minCustPH)) + this.minCustPH;
    };
    this.hourlyDonuts = function() {
        for (var i = 0; i < 11; i++){
            hourly =  Math.round(this.avgDonutsPerCust * this.randCustomers());
            this.hourlyTotals.push(hourly);
        };
    };
    this.dailyDonuts = function() {
        var total = 0;
        for (var i = 0; i < this.hourlyTotals.length; i++) {
            total += this.hourlyTotals[i];
        };
        this.dailyTotals.push(total);
    };
};

DonutShop.prototype.render = function() {
    var tr = document.createElement('tr');
    tr.id = rowCounter++;
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
    document.getElementById('body').appendChild(tr);
};

DonutShop.prototype.handleNewLocation = function(location) {
    this.hourlyDonuts();
    this.dailyDonuts();
    propertiesArray.push(location);
    populateDropDown(location);
    this.render();
};

DonutShop.prototype.update = function(location) {
    var myNode = document.getElementById("body");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    for (var i = 0; i < propertiesArray.length; i++) {
        // if (propertiesArray[i].location != dropDown.options[dropDown.selectedIndex].value) {
        //     console.log(dropDown.options[dropDown.selectedIndex].value);
        //     // propertiesArray[i].hourlyDonuts();
        //     // propertiesArray[i].dailyDonuts();
        //     propertiesArray[i].render();
        // }
        if (propertiesArray[i].location == dropDown.options[dropDown.selectedIndex].value) {
            console.log('array: ' + propertiesArray[i].location)
            console.log('dropDown: ' + dropDown.options[dropDown.selectedIndex].value);
            propertiesArray.splice(propertiesArray[i], 1, location);
            // propertiesArray[i].hourlyDonuts();
            // propertiesArray[i].dailyDonuts();
            // propertiesArray[i].render();
        }
    }
    console.log(propertiesArray);
    dropDown.lastChild.remove();
    resetDropDown();
};

function populateDropDown(store) {
    var stores = document.getElementById('existing');
    var store = store.location;
    var el = document.createElement('option');
    el.value = store;
    el.innerHTML = store;
    stores.appendChild(el);
};

var downtown = new DonutShop('Downtown', {minCustPH: 8, maxCustPH: 43, avgDonutsPerCust: 4.5});
var capitolHill = new DonutShop('Capitol Hill', {minCustPH: 4, maxCustPH: 37, avgDonutsPerCust: 2});
var southLakeUnion = new DonutShop('South Lake Union', {minCustPH: 9, maxCustPH: 23, avgDonutsPerCust: 6.33});
var wedgewood = new DonutShop('Wedgewood', {minCustPH: 2, maxCustPH: 28, avgDonutsPerCust: 1.25});
var ballard = new DonutShop('Ballard', {minCustPH: 8, maxCustPH: 58, avgDonutsPerCust: 3.75});

downtown.handleNewLocation(downtown);
capitolHill.handleNewLocation(capitolHill);
southLakeUnion.handleNewLocation(southLakeUnion);
wedgewood.handleNewLocation(wedgewood);
ballard.handleNewLocation(ballard);



