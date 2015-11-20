var clearButton = document.getElementById('clear');
var submitButton = document.getElementById('submit');
var userForm = document.getElementById('userForm');
var storeNameForm = document.getElementById('location');
var table = document.getElementById('donutTable');
var dropDown = document.getElementById('existing')
var updateLocation = document.getElementsByTagName('option');


clearButton.addEventListener('click', function(event) {
    event.preventDefault();
    rowCounter--;
    var lastRow = document.getElementById(rowCounter);
    lastRow.remove();
    propertiesArray.splice(propertiesArray.length - 1, 1);
});

userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (updateLocation.value != "blank") {
        update();
    }

    var newShop = new DonutShop(event.target.location.value, {minCustPH: event.target.min.value, maxCustPH: event.target.max.value, avgDonutsPerCust: event.target.avg.value});

    event.target.location.value = null;
    event.target.min.value = null;
    event.target.max.value = null;
    event.target.avg.value = null;

    newShop.arrayPush(newShop);
});


// var locationForm = event.target.location.value;
// var minForm = event.target.min.value;
// var maxForm = event.target.max.value;
// var avgForm = event.target.avg.value;

// for (var i=0; i<propertiesArray.length; i++) {
//     if (locationForm == propertiesArray[i].location) {
//         propertiesArray[i].minCustPH = minForm;
//         propertiesArray[i].maxCustPH = maxForm;
//         propertiesArray[i].avgDonutsPerCust = avgForm;
//     };
// }




