const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize("CFB2", "root", "P@ssw0rd_",{
    host: 'localhost',
    dialect: 'mysql',
    // define:{
    //     timestamps:false // prevent genarating createdAt and updatedAt columns for tables
    // }
});

// define a Model
// Parameter 1: The Table NAme
// Parameter 2: the COlumn definitions as attributes
const people = sequelize.define('people', {
    peopleid:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    age: {
        type:DataTypes.INTEGER
    }
});

const occupation = sequelize.define('occupation',{
    ocupationType:{
        type: DataTypes.STRING
    }
});

// the prople is belongs to occupation
people.belongsTo(occupation);


const data = [
    {peopleid:101, firstName: 'Mahesh', lastName:'Sabnis', age:45},
    {peopleid:102, firstName: 'Tejas', lastName:'Sabnis', age:17},
    {peopleid:103, firstName: 'Amit', lastName:'Chande', age:43}
];

// create a Table in Database
// Create a tab;e if not exists else overwrite
sequelize.sync({force:true}).then(()=>{
    // create a people table
    people.bulkCreate(data).then(()=>{
        console.log('Multiple Records are inserted in the table');
        // create a parent table to people is belongs to
        occupation.create({ocupationType:'Self-Employed'}).then(()=>{
              console.log('Occupation ios alos created');  
        });
    });


    
}).catch((error)=>{
    console.log(`Error Occured ${error.message}`);
});
console.log('Tabl;e CReated');