export class EmployeeLogic{
    constructor(){
        this.employees = [
            {EmpNo:101, EmpName: 'A', DeptName: 'IT', Designation:'Manager', Salary:67290},
            {EmpNo:102, EmpName: 'B', DeptName: 'HRD', Designation:'Lead', Salary:68290},
            {EmpNo:103, EmpName: 'C', DeptName: 'Sales', Designation:'Sr. Manager', Salary:47290},
            {EmpNo:104, EmpName: 'D', DeptName: 'Training', Designation:'Staff', Salary:57290}
        ];
    }

    getEmployees(){
        return this.employees;        
    }
    saveEmployees(emp) {
        this.employees.push(emp);
        return this.employees;
    }
}