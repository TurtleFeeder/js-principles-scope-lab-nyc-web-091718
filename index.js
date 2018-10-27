// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// setting a variable w/o let or const inside a function makes it global.
function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'hopefully not bob';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bobby?';
}
