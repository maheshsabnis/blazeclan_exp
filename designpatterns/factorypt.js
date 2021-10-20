// USing Factory Method

class SQLServerAccess {
    connect(){
        console.log('====================================');
        console.log('Connected to SQL Server');
        console.log('====================================');
    }
}

class MySQLServerAccess {
    connect(){
        console.log('====================================');
        console.log('Connected to MySQL Server');
        console.log('====================================');
    }
}

class DataFactory {
    constructor(){
        this.ds  =undefined;
    }
    // Factory Method
    getDataObject(criteria){
        if(criteria === "SQL"){
            this.ds = new SQLServerAccess();
        }
        if(criteria === "MySQL"){
            this.ds = new MySQLServerAccess();
        }
        return this.ds;
    }
}


class Client {
    constructor(){
        this.dbObject = undefined;
        // the client is exposed to the actual Data Access Classes
        // this.sql = new SQLServerAccess();
        // this.mysql  = new MySQLServerAccess(); 
        this.dbFactory = new DataFactory();
    }

    getConnect(){
        // this.sql.connect();
        // this.mysql.connect();

        this.dbObject = this.dbFactory.getDataObject("MySQL");
        this.dbObject.connect();
    }
}

let c = new Client();
c.getConnect();