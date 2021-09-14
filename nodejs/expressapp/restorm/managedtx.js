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

async function managedTx(){
    try {
        // start transactions
        let trx = await sequelize.transaction(
            // the transaction scope
            async (t)=>{
                let t1 = await modelDept.create({
                    DeptNo:90,DeptName:'Dept_90', Location: 'Mumbai',Capacity:800
                },{transaction:t});

                let t2 = await modelEmp.create({
                    EmpNo:301, EmpName: 'Emp_301', Designation: 'Manager', Salary:90000, DeptNo:10
                },{transaction:t});
            }
        );
    }catch(ex){
        console.log(`Error Occured ${ex.message}`);
    }
}

managedTx().then((res)=>{
    console.log(`Result = ${res}`);
}).catch((e)=>{
    console.log(`Aur Pareshan Mat Kar ${e.message}`);
});