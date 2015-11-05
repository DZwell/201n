var DonutShop = window.DonutShop;
var td = document.createElement('td');
var tr = document.createElement('tr');
var body = document.getElementById('body');
var clearButton = document.getElementById('clear');
var submitButton = document.getElementById('submit');
var userForm = document.getElementById('userForm');
var locationForm = document.getElementById('location');

// Clears User Form \\
clearButton.addEventListener('click', function(event) {
    userForm.texContent = '';
    event.preventDefault();
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
