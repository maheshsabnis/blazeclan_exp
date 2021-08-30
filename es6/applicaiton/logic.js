class Dispatch {
    #dispatchOrders = [];
    constructor(){
        this.#dispatchOrders.push({
            DispatchId:101, OrderNo:'Ord-0088', TruckNo:'MH-12-YU-9093', DestinationName:'Mumbai', DelivaryName:'Godown', Quantity:40,StartDate: '08/29/2021', StartTime:'13:30', ExpectedReturnDate:'08/31/2021', ExpectedReturnTime: '15:50', DriverName: 'Vijay' 
        });
    }    

    getAllDIspatches(){
        return this.#dispatchOrders;
    }
    getAllDIspatchesByCriteria(criteria, fromDate,toDate){
        // e.g. criteria = {DestinationName='Aurangabad'}
        // method will return all dispatches for Aurangabad with two dates
        return this.#dispatchOrders;
    }
    createDispatchRequest(dispatchObject){
        // dispatchObject = {order,truck,drivername,desitnation,deliveryname}
        // this information will be saved in dispatchOrders array
    }
    updateDispatchRequest(dispatchObject){
        // this cannot be executed for diatatched that is already started or completed 
    }
    deleteDispatchRequest(dispatchObject){
        // this cannot be executed for diatatched that is already started or completed 
    }
    getCompletedOrders(){
        // return only those orders which are completed
        // this should show Days/Time for Delivery
    }
    getCalcelledOrders(){}
}

class UIGenerator {
    generateList(datasource){
        // dataSource: Array of Drivers, Trucks, Destinations. DelivaryName, Orders
    }
    generateTable(datasource){
        // generate table for displaying new created ordersm orders in transit (not completed)
    }
}