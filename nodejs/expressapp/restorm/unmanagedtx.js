const path = require('path');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize("business", "root", "P@ssw0rd_", {
    host: 'localhost',
    dialect:'mysql',
    pool: {
         min: 0, max:5, idle:10000   
    },
    define:{
        timestamps:false // the suo-generated columns for concurrency 
    }
}); 

const modelDept = require(path.join(__dirname,'./models/department'))(sequelize, Sequelize.DataTypes);
const modelEmp = require(path.join(__dirname,'./models/employee'))(sequelize, Sequelize.DataTypes);

async function unManagedTx(){
    let trx = await sequelize.transaction();
    try {
       
                let t1 = await modelDept.create({
                    DeptNo:101,DeptName:'Dept_101', Location: 'Mumbai',Capacity:800
                },{transaction:trx}); // make the current statement as a part of TX Scope

                let t2 = await modelEmp.create({
                    EmpNo:302, EmpName: 'Emp_302', Designation: 'Manager', Salary:90000, DeptNo:10
                },{transaction:trx}); // make the current statement as a part of TX Scope
        await trx.commit(); // Commit Explicit
    }catch(ex){
        trx.rollback(); // Rollback Explicit
        console.log(`Error Occured ${ex.message}`);
    }
}

unManagedTx().then((res)=>{
    console.log(`Result = ${res}`);
}).catch((e)=>{
    console.log(`Aur Pareshan Mat Kar ${e.message}`);
});