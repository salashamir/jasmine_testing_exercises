describe('Helper functions tests featuring setup + teardown', function(){
  beforeEach(function(){
    billAmtInput.value = 200;
    tipAmtInput.value = 35;
    submitPaymentInfo();
  })
  describe('sumPaymentTotal() tests:', function(){
    it('should sum all tip amounts from allPayments on sumPaymentTotal()', function(){
      expect(sumPaymentTotal('tipAmt')).toEqual(35);
      billAmtInput.value = 72;
      tipAmtInput.value = 15;
      submitPaymentInfo();
      expect(sumPaymentTotal('tipAmt')).toEqual(50);
    })
    it('should sum all bill amounts from allPayments on sumPaymentTotal()', function(){
      expect(sumPaymentTotal('billAmt')).toEqual(200);
      billAmtInput.value = 72;
      tipAmtInput.value = 15;
      submitPaymentInfo();
      expect(sumPaymentTotal('billAmt')).toEqual(272);
    })
    it('should sum all tip percents from allPayments on sumPaymentTotal()', function(){
      expect(sumPaymentTotal('tipPercent')).toEqual(18);
      billAmtInput.value = 72;
      tipAmtInput.value = 15;
      submitPaymentInfo();
      expect(sumPaymentTotal('tipPercent')).toEqual(39);
    })
  })
  describe('calculateTipPercent() tests:', function(){
    it('should calculate the tip percent based on bill amount and tip amount inputs', function(){
      expect(calculateTipPercent(100,15)).toEqual(15);
      expect(calculateTipPercent(115,34)).toEqual(30);
    })
  })
  describe('appendTd() tests:', function(){
    it('should create a new td with the input value and append it to the tr', function(){
      const newTr = document.createElement('tr');
      expect(newTr.children.length).toEqual(0);
      appendTd(newTr, 'value');
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstElementChild.textContent).toEqual('value');
    })
  })
  describe('appendDeleteBtn() tests:', function(){
    it('should create a new td with an X as text value and append it to the tr', function(){
      const newTr = document.createElement('tr');
    expect(newTr.children.length).toEqual(0);
    appendDeleteBtn(newTr, 'server');
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstElementChild.textContent).toEqual('X');
    })
  })
  afterEach(function(){
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = "";
    summaryTds.forEach(td => {
      td.innerHTML = "";
    })
    allPayments = {};
    paymentId = 0;
  })
})
