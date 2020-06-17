/* eslint-disable prefer-arrow-callback, no-var, no-tabs */
$(document).ready(function () {
  // Add specific code to this theme here
 
  var submit = document.getElementById('customerSave', 'addressSave', 'passwordSave');
  submit.addEventListener('click', clicked);
  submit.addEventListener('click', validate);
});