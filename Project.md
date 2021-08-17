# Day 1: Date: 17-08-2021
The XYZ Cements Transportation is the Organization in Cement Transportation.  This wants to automate a Dispatch from a Cement Company. The Organization, wants you to develop a comple Software that automates the Complete Dispatch Process . The Process is as follows
1. There are Orders received for Cement Transhipment as follows
    - Order No, OrderDate, Client, Location, Quantity, Expected Delivery Data
        - CLient can be third party or Godown of the Cement Manufacturing Company
2. XYZ Transportation has to do following for the transhipment
    - Assign Truck against the order based on Quantity
    - Truck may be own truck by XYZ Transportation or it many be hired from Vendor
    - Truck must be having drivers based on DIstance of Location
    - If Truck is from Vendor, XYZ Transportation only assign Order to it (no driver set)
    - For each Trip XYZ Transportation records folwoign info4rmation
        - TripId
        - OrderId
        - Destination
        - CLient
        - QUantity
        - Rate Per Tone Per Destination
        - Transpporter Name
        - Driver Name
        - Truck No
        - Advance Given
        - Toll Tax, Unloading Charges, Fuel Expenditure
            - Note Theye may be multiple Tolls for each trip ans also Fuel may be filled multiple times
        - Total Travel Distance
        - Cost of Trip
        - Profit/Loss
    - The System Must have masters for
        - Vendors
        - Trucks
        - Drivers
        - Destinations
        - Orders
    - The System Must Generate Following  Records
        - Per Day Total Transportation
        - Per Day Total Transportation by Own Trucks
        - Per Day Total Transportation by Hired Trucks
        - Per Day Per Truck Transportation
        - Per Day Per Desitination Transportation
        - Vendor wise MOnthly / Customn Time based Transportation
        - Truck wise Monthly / Custom Time Based Transportation
        - Driver wise Monthly / Custom Time Based Transportation
        - Final Profile /Loss Statements  by all trucks 


