class UserInfo {
    constructor(){
        this.firstName = 'Mahesh';
        this.lastName ='Sabnis';
        this.email= 'sabnis_m@hotmail.com';
        this._UserSecrte = "*******";
        this.occupation="Self-Employed";
    }
}
// handler can have trp methods as follows
// 1. get(target,prop), to read property (prop) from target object
// 2. set(target,prop,val), to write value(val) in property(prop) of teh target object
// 3. ownKeys(target), to read all properties of target object
// 4. ownValues(target), to read values of all properties of the target object
const handler={
    get(target,prop){
        // prevent an access of _UserSecret property
        if(prop.startsWith('_')){
            throw new Error('Vaue of the property cannot be read');
        }else {
            let val = target[prop];
            return val; // return the value of the property 
        }
    },
    // do not change the Email
    set(target,prop,val){
        if(prop=== "email"){
            throw new Error('EMail property cannot be Written');
        }else {
            target[prop] = val;
            return true; // return the updated value
        }
    },
    ownKeys(target){
        let keys = Object.keys(target);
        // filter oute properties starts from _
        let props = keys.filter((p,i)=>{
            return p[0] !== '_';
        });
        return props;
    },

    ownValues(target){
        let values = Object.values(target);
      
        return values;
    },
};

const proxy = new Proxy(new UserInfo(),handler);

function Consumer(){
  try {
     console.log(`First Name is = ${proxy.firstName}` );
     console.log(`Last Name is = ${proxy.lastName}` );
     console.log(`Email is = ${proxy.email}` );
     console.log(`Occupation is = ${proxy.occupation}` );
     // console.log(`User Secret is = ${proxy._UserSecrte}` );

     proxy.firstName = "MAHESH IT SERVICES";
     proxy.lastName = "Training COmpany";
     console.log(`First Name is = ${proxy.firstName}` );
     console.log(`Last Name is = ${proxy.lastName}` );
    // proxy.email = "msit@hotmail.com";
   ///  console.log(`Email is = ${proxy.email}` );
    console.log(`All Keys ${Object.keys(proxy)}`);
    console.log(`All Values ${Object.values(proxy)}`);
  }catch(e){
      console.log(e.message);
  }   
}
Consumer();