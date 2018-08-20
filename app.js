'use strict';

var allStoreSales = [];

var salesProjectionsTable = document.getElementById('salesProjectionsTable');

function SalesData(name, minimumCustomer, maximumCustomer, averageCookiePerSale) {
  this.name = name;
  this.min = minimumCustomer;
  this.max = maximumCustomer;
  this.avg = averageCookiePerSale;
  this.hourlySales = [];
  allStoreSales.push(this);
}

new SalesData ('1st and Pike', 23,	65,	6.3);
new SalesData ('SeaTac Airport',	3,	24,	1.2);
new SalesData ('Seattle Center',	11,	38,	3.7);
new SalesData ('Capitol Hill',	20,	38,	2.3);
new SalesData ('Alki', 2,	16,	4.6);

// Generates random sales number
SalesData.prototype.customersPerHourRando = function() {
  return Math.random() * (this.max - this.min) + this.min;
};

SalesData.prototype.render = function() {
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  var dailyTotal = 0;
  var hourlyTotal = 0;

  for ( var i = 0; i < 14; i++) {
    hourlyTotal = Math.floor(this.avg * this.customersPerHourRando());
    tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotal;
    dailyTotal = dailyTotal + hourlyTotal;
    trEl.appendChild(tdEl);
    this.hourlySales.push(hourlyTotal);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = dailyTotal;
  trEl.appendChild(tdEl);

  salesProjectionsTable.appendChild(trEl);
};
// This section created the footer row with the hourly totals
var footerRow = document.createElement('tr');
function makeFooterRow () {
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Total';
  footerRow.appendChild(tdEl);

  var totalSales = 0;

  for ( var i = 0; i < 14; i++) {
    var hourlyTotal = 0;
    for (var n = 0; n < allStoreSales.length; n++) {
      hourlyTotal = allStoreSales[n].hourlySales[i] + hourlyTotal;
    }
    // All Location Daily Total
    totalSales = totalSales + hourlyTotal;
    tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotal;
    footerRow.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = totalSales;
  footerRow.appendChild(tdEl);

  salesProjectionsTable.appendChild(footerRow);

}
// Function to create the header row with hourly columns
function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);


  thEl = document.createElement('th');
  thEl.textContent = '6:00am';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '7:00am';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '8:00am';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '9:00am';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '10:00am';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '11:00am';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '12:00pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '1:00pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '2:00pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '3:00pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '4:00pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '5:00pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '6:00pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '7:00pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);

  salesProjectionsTable.appendChild(trEl);
}

function renderAllStoreSales() {
  for (var i = 0; i < allStoreSales.length; i++) {
    allStoreSales[i].render();
  }
}

// Actions for Button

function addStore(event) {
  event.preventDefault();
  var formStoreName = document.getElementById('storeName').value;
  var formMinCustomer = document.getElementById('minCustomer').value;
  var formMaxCustomer = document.getElementById('maxCustomer').value;
  var formAvgCookie = document.getElementById('averageCookie').value;
  var formData = new SalesData (formStoreName, formMinCustomer,	formMaxCustomer,	formAvgCookie);
  footerRow.innerHTML='';
  formData.render();
  makeFooterRow();
  return false;
}
makeHeaderRow();
renderAllStoreSales();
makeFooterRow ();
