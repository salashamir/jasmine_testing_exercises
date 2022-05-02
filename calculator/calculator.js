window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}
// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  // get inputs from dom
  const amountInput = document.getElementById('loan-amount');
  const yearsInput = document.getElementById('loan-years');
  const rateInput = document.getElementById('loan-rate');
  // put default values in the inputs
  const defaultValues = {amount: 5000, years: 4, rate: 5.9};
  // call a function to calculate the current monthly payment
  amountInput.value = defaultValues.amount;
  yearsInput.value = defaultValues.years;
  rateInput.value = defaultValues.rate;
  // update monthly payment
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  // get current values from UI
  const currentInputValues = getCurrentUIValues();
  // calculate monthly payment
  const monthlyPayment = calculateMonthlyPayment(currentInputValues);
  // update UI
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    const monthlyRate = (values.rate/100)/12;
    const n = Math.floor(values.years*12);
    const monthlyPayment = ((values.amount*monthlyRate)/(1-Math.pow((1+monthlyRate), -n))).toFixed(2);
    if(monthlyPayment === 'NaN') return "Please input valid numbers";
    return `$${monthlyPayment}`;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  // get UI element where payment will be displayed
  const monthlyPaymentUI = document.getElementById('monthly-payment');
  monthlyPaymentUI.innerText = monthly;
}
