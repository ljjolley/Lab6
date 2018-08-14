'use strict';

var storePike = {
  name: '1st and Pike',
  minimumCustomer: 23,
  maximumCustomer: 65,
  averageCookiePerSale: 6.3,
  totalPerHour: [],

  customersPerHourRando:function() {
    return Math.random() * (this.maximumCustomer - this.minimumCustomer) + this.minimumCustomer;
  }
};

for(var ii = 0; ii <= 14; ii++) {
  var result = storePike.customersPerHourRando() * storePike.averageCookiePerSale;
  storePike.totalPerHour.push(result);

  // totalPerHour
}
