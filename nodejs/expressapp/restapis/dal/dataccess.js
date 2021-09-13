class DataAccess {
  constructor() {
    this.customers = [
      { CustId: 101, CuastName: "ABC" },
      { CustId: 102, CuastName: "DEF" },
      { CustId: 103, CuastName: "GHI" },
      { CustId: 104, CuastName: "JKL" },
    ];
  }
  getCustomers(req,resp){
    return this.customers;
  }

  saveCustomers(cust){
    this.customers.push(cust);
    return this.customers;
  }
}

module.exports = DataAccess;