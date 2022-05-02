
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  };
  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

// will append a delete button to each table row 
function appendDeleteBtn(tr, type){
  let newTd = document.createElement('td');
  newTd.className = "deleteBtn";
  newTd.innerText = "X";
  type === 'server'? newTd.addEventListener('click', removeElementServer): newTd.addEventListener('click', removeElementPayment);
  
  tr.append(newTd);
}

function removeElementServer(e){
  // get parent element(row)
  const row = e.target.closest('tr');
  // remove from object
  delete allServers[row.id];
  updateServerTable();
  row.parentElement.removeChild(row);
}

function removeElementPayment(e){
  const row = e.target.closest('tr');
  // remove from object
  delete allPayments[row.id];
  row.parentElement.removeChild(row);
  // update summary
  updateSummary();
}