window.onload = function() {
  onchangeDoseInterval();
  calcDaysSupply();
}
/**
  * Changes label text depending on drug route.
  * Triggered by onchange event.
*/
function onchangeDoseInterval() {
  const doseInterval = document.getElementById('doseInterval');
  const lblNumDoses = document.getElementById('lblNumDoses');
  lblNumDoses.innerHTML = 'Number of Doses <u>'+doseInterval.options[doseInterval.selectedIndex].text+'</u>';
  calcDaysSupply();
}

/**
  * Clear calculation to prevent confusion.
  * Triggered by onchange event.
*/
function clearResult() {
  document.getElementById('output').innerHTML = '';
}

/**
  * Calculate and display days supply.
  * Triggered by onchange event.
*/
function calcDaysSupply() {
  const doseInterval = document.getElementById('doseInterval');
  const qtyFilled = document.getElementById('qtyFilled').value;
  const numDoses = document.getElementById('numDoses').value;
  const daysSupply = document.getElementById('daysSupply');
  daysSupply.innerHTML = (qtyFilled/numDoses)*doseInterval.value;
  clearResult();
}

/**
  * Calculate and display PDC.
  * Triggered by onclick event.
*/
function calc() {
  // Get data from form
  const doseInterval = document.getElementById('doseInterval').value;
  const qtyRemaining = document.getElementById('qtyRemaining').value;
  const qtyFilled = document.getElementById('qtyFilled').value;
  const numDoses = document.getElementById('numDoses').value;
  const daysSupply = document.getElementById('daysSupply').innerHTML;
  var PDC;
  // Data validation and calculation
  if (qtyRemaining < 0 || qtyFilled < 1 || numDoses < 0 || daysSupply < 1) {
    clearResult();
    return alert('Invalid inputs')
  } else {
    PDC = (doseInterval/numDoses*(qtyFilled-qtyRemaining))/daysSupply*100;
    document.getElementById('output').innerHTML = PDC.toFixed(2)+'%';
  }
}
