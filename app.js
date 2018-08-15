'use strict';
// IGNORE - DAY 1 TEST CALCULATIONS
// var storePike = {
//   name: '1st and Pike',
//   minimumCustomer: 23,
//   maximumCustomer: 65,
//   averageCookiePerSale: 6.3,
//   totalPerHour: [],

//   customersPerHourRando:function() {
//     return Math.random() * (this.maximumCustomer - this.minimumCustomer) + this.minimumCustomer;
//   }
// };

// for(var ii = 0; ii <= 14; ii++) {
//   var result = storePike.customersPerHourRando() * storePike.averageCookiePerSale;
//   storePike.totalPerHour.push(result);

//   // totalPerHour
// }

// var totalPerHour = [];

var allStoreSales = [];

var salesProjectionsTable = document.getElementById('salesProjectionsTable');

function SalesData(name, minimumCustomer, maximumCustomer, averageCookiePerSale) {

  this.name = name;
  this.min = minimumCustomer;
  this.max = maximumCustomer;
  this.avg = averageCookiePerSale;
  allStoreSales.push(this);
}

new SalesData ('1st and Pike', 23,	65,	6.3);
new SalesData ('SeaTac Airport',	3,	24,	1.2);
new SalesData ('Seattle Center',	11,	38,	3.7);
new SalesData ('Capitol Hill',	20,	38,	2.3);
new SalesData ('Alki', 2,	16,	4.6);
    
SalesData.prototype.render = function() {

  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = this.min;
  trEl.appendChild(tdEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = this.max;
  trEl.appendChild(tdEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = this.avg;
  trEl.appendChild(tdEl);

  salesProjectionsTable.appendChild(trEl);
};

function makeHeaderRow() {

  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);


  var thEl = document.createElement('th');
  thEl.textContent = 'Minimum Customers';
  trEl.appendChild(thEl);


  var thEl = document.createElement('th');
  thEl.textContent = 'Maximum Customers';
  trEl.appendChild(thEl);


  var thEl = document.createElement('th');
  thEl.textContent = 'Average Sales Per Customer';
  trEl.appendChild(thEl);

  salesProjectionsTable.appendChild(trEl);
}

function renderAllStoreSales() {
  for (var i = 0; i < allStoreSales.length; i++) {
    allStoreSales[i].render();
  }
}

makeHeaderRow();
renderAllStoreSales();
