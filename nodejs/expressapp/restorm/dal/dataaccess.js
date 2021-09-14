const path = require('path');
const {Sequelize, DataTypes} = require('sequelize')


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


 
const modelDept = require(path.join(__dirname,'./../models/department'))(sequelize, Sequelize.DataTypes);
// Using ES 6 + Async/Await for Data ACcess
class DataAccess {
    async getAllDepartments(req,resp){
        await sequelize.sync({force:false});
        let depts = await modelDept.findAll();
        if(depts) {
            return resp.status(200).send (depts);
        }
        return resp.status(500).send ({msg:'Some Error Occured'});
    }

    async createDepartment(req,resp){
        let dept1 = req.body;
        await sequelize.sync({force:false});
        let dept = await modelDept.create(dept1);
        if(dept) {
            return resp.status(200).send (dept);
        }
        return resp.status(500).send ({msg:'Some Error Occured in create'});
    }
}

module.exports = DataAccess;