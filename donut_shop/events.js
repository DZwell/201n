var clearButton = document.getElementById('clear');
var userForm = document.getElementById('userForm');
var storeNameForm = document.getElementById('location');
var table = document.getElementById('donutTable');
var dropDown = document.getElementById('existing')
var updateLocation = dropDown.options[dropDown.selectedIndex].value


function disableLocationField() {
    if (dropDown.value != "blank") {
        storeNameForm.disabled = true;
    };
};

function resetDropDown() {
    dropDown.selectedIndex = 0;
    storeNameForm.removeAttribute('disabled');
};


clearButton.addEventListener('click', function(event) {
    event.preventDefault();
    rowCounter--;
    var lastRow = document.getElementById(rowCounter);
    lastRow.remove();
    propertiesArray.splice(propertiesArray.length - 1, 1);
});

userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var newShop = new DonutShop(event.target.location.value, {minCustPH: event.target.min.value, maxCustPH: event.target.max.value, avgDonutsPerCust: event.target.avg.value});

    newShop.newShopChart(newShop.dailyTotals, newShop.location);
    myDoughnutChart.update();

    if (dropDown.value != 'blank') {
        newShop.location = dropDown.options[dropDown.selectedIndex].value;
    };

    event.target.location.value = null;
    event.target.min.value = null;
    event.target.max.value = null;
    event.target.avg.value = null;

    newShop.arrayPush(newShop);
    resetDropDown();
});



