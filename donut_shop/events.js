var clearButton = document.getElementById('clear');
var submitButton = document.getElementById('submit');
var userForm = document.getElementById('userForm');

clearButton.addEventListener('click', function(event) {
    event.preventDefault();
    rowCounter--;
    var lastRow = document.getElementById(rowCounter);
    lastRow.remove();
});

userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var newShop = new DonutShop(event.target.location.value, {minCustPH: event.target.min.value, maxCustPH: event.target.max.value, avgDonutsPerCust: event.target.avg.value});

    event.target.location.value = null;
    event.target.min.value = null;
    event.target.max.value = null;
    event.target.avg.value = null;

    newShop.hourlyDonuts();
    newShop.dailyDonuts();
    newShop.render();
});
