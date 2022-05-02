describe('calculateMonthlyPayment() tests', function(){
  it('should calculate the monthly rate correctly', function () {
    const values = {amount:10000, years:7, rate:6.2};
    expect(calculateMonthlyPayment(values)).toEqual('$147.05');
  });
  
  it("should return a result with 2 decimal places", function() {
    const values = {amount:5000,years:4,rate:5.813};
    expect(calculateMonthlyPayment(values)).toEqual('$117.00');
  });

  it("should be able to handle large interest rates", function(){
    const values = {amount:55000,years:28,rate:99};
    expect(calculateMonthlyPayment(values)).toEqual('$4537.50');
  })

  it("should return an error message for invalid inputs", function(){
    const values = {amount:true,years:'rneiu',rate:null};
    expect(calculateMonthlyPayment(values)).toEqual('Please input valid numbers');
  })
})