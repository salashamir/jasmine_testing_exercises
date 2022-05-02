describe('Payments functions tests (with build up + tear down):', function(){
  beforeEach(function(){
    billAmtInput.value = 60;
    tipAmtInput.value = 18;
  })
  describe('submitPaymentInfo() tests:', function(){
    it('should add a curPayment object to allPayments', function(){
      submitPaymentInfo();
      // check that length is 1 = object added
      expect(Object.keys(allPayments).length).toEqual(1);
      // check that object has correct property valeus
      expect(allPayments['payment1'].billAmt).toEqual('60');
      expect(allPayments['payment1'].tipAmt).toEqual('18');
      expect(allPayments['payment1'].tipPercent).toEqual(30);
    })
    it('should not add a curPayment object to allPayments if inputs empty', function(){
      billAmtInput.value = '';
      tipAmtInput.value = '';
      submitPaymentInfo();
      // check that length is 0
      expect(Object.keys(allPayments).length).toEqual(0);
    })
  })
  describe('createCurPayment() tests:', function(){
    it('should return a new payment', function(){
      const paymentToReturn = {
        billAmt: "60",
        tipAmt: "18",
        tipPercent: 30
      }

      expect(createCurPayment()).toEqual(paymentToReturn);
    })
  })
  describe('appendPaymentTable() tests:', function(){
    it('should append a row to the payments table', function(){
      const curPayment = createCurPayment();
      allPayments['payment1'] = curPayment;
      appendPaymentTable(curPayment);

      const tds = document.querySelectorAll('#paymentTable tbody tr td');
      expect(tds.length).toEqual(4);
      expect(tds[0].textContent).toEqual('$60');
      expect(tds[1].textContent).toEqual('$18');
      expect(tds[2].textContent).toEqual('30%');
      expect(tds[3].textContent).toEqual('X');
    })
  })
  afterEach(function(){
    // teardown logic
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = "";
    updateSummary();
  })
})