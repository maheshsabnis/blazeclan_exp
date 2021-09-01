class BusinessLogic {
     async get(){
        let result = await getDataWithPromise();
        return result;
     }
     async post(product){
        let result = await postDataWithPromise(product);
        return result;
     }

     async multipleGet(){
        let res1 = await getDataWithPromise();
        console.log(`Res 1 = ${res1}`);
        console.log();
        let res2 = await getDataWithPromise();
        console.log(`Res 2 = ${res2}`);
         // returning arry with to objects
        return [res1,res2];
     }

     // calling multiple promises using all
     // when all promises are resolved thne only Promise.all() will be resolve else
     // rejected
     getMultipleUsingPromise_all(){
        let promises = Promise.all([getDataWithPromise(),getDataWithPromiseNew()]);
        return promises;
     }   
}