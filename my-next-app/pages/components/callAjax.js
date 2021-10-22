const CallAjax=({products})=>{
    if(products === undefined || products.length === 0){
        return (
            <div>
                <strong>
                    No Records to Display
                </strong>
            </div>
        );
    }
    return(
        <div>
            <h2>Getting the Ajax Data</h2>
         
                <ul>{
                products.map((prod, idx)=>(
                        <li key={idx}> 
                            {prod.ProductName}
                        </li>
                ))}
                </ul>
           
        </div>
    );
};

export async function getStaticProps(){
    console.log('Calling AJAX');
    const response = await fetch("https://apiapptrainingnewapp.azurewebsites.net/api/Products");
    const products = await response.json();
    console.log(`Received Data ${JSON.stringify(products)}`);

    // the 'products' will be a props type that will be passed to component
    return {
        props: {
            products
        }
    }
} 




export default CallAjax;