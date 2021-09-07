# RDBMS using MySQL
1. Data Pertsistance Layer for Data Driven Line-of-Business (LOB) App
    - Creation of Table
        - Define Columns
            - Data Types
                - Numeric
                    - Int, smallint, tynyint, mediumint, bigint
                - String Datatypes
                    - char for Foxlength
                    - varchar for vaiable length
                    - Binary and Varbinary
                    - Text (No Case sensitive) and Blob (Case sensitive)
                    - ENum
                - Date Time
                    - Date, Time, DateTime,year
                - JSON 
                    - json
                - Spatial  
            - Constraints
                - Primary Key
                - Identity Key
                - Foreign Key
                - COmposite Key
                - Not Null
                - Auto Increament (Identity)
            - Relations
                - One-to-one
                - One-to-Many
                - Many-To-Many
            - Normalization
                -  Process of Reorganizing the data and its schema in following format
                    - No Repeatation of columns
                    - No Redudancy by avoiding the data repeatation  
                    - Only those column in a table which can be used to set relaionships in a single row value

DispacthName, VendorName, CustomerName, TruckNo, DriverName, OrderDate, DispatchDate, OrderQuantity, DispatchQuantity, DeliveryDestination, DelivaryName, DeliveryQuantity, Advance, DieselCost, TollTax, MaintenenceCost, VendorAddress, DriverAddress, CustomerAddress, DeliveryAddress, DispatchDate, ExpectedDeliveryDate,ActualDeliveryDate, Rate, TotalPaymentReceived, StartKm, EndKm, TotalKm, DriverSalary, NumberOfDrivers, CLeanerSalary, NumberOfCleaners, DispatchDuration, VendorContactNumber, DriverContactNumber, CustomerContactNumber, DeliverContactNumber, OrderNo, Salutations, DeliveryStatus

First Normal Form
    - Each Record Must be Unique, 
    - Each table cell must contain single value
    - Segrigate the infortmation ins seperate columns by creating separate tables
Second Normal Form
    - Complete FIrst Normal Form
    - Create a Primary Key, make sure that its is not functionaly dependnat on any other column, instead, it will be used to identity the row uniquely
        - Preferable, Primary Key must be Positive Integer, ans if string
            - EMail, MobileNumber, UserName
                - Make sure that use regular expression to validate or transform values entered by enduser in required format

VendorMaster
    - VendorId (Primary Key), VendorName, Address, City, State, PrimaryContactNo, MobileNo, SecondaryContactNo, VendorPanNumber, VendorGSTNumber, PinCode.
TruckMaster
    - TruckNo (Primary Key) [State]-[DistrictNo]-[Series]-[TruckNo]
        - MH12BV9078, MH-12-BV-9076, mh12bv9078, mh-12-bv-9078
        - AP1T0987, AP01T987           
    - TuckId, TruckNo, EngineNo, ChesisNo, VendorId (ForeignKey)
DriverMaster (Hired/Permanat)
    - DriverId, Name, COntactNo, MobileNo, Address, City, State, PinCode, EmergencyContactNum, VendorId(In Case of Permanant)
    - If Hired then create a seperate COlumn as EMployeementStatus         

3rd Normal Form
    - There must be 2nd normal exist
    - Eliminate transitive functional dependencies

e.g. Salutation is needed for Vemdor, Driver, Customer, ect
    - Mr.,Ms.,Mrs., Dr.
        - Table for Salutation
            - SalutatiuonId, SalutationName
    - DeliveryStatus
        - DelivaryStatusId, DerliuveryStatus
            - 1: Success
            - 2: Delayed
            - 3: Cancelled
            - 4: Rejected
            - 5: Pending        


# Using MySQL Practically
 Database Manipulation Statements
    - Data Definition Language (DDL), CReate [DATABASE,TABLE], Drop, Alter
    - Data Manipulation Language (DML), Insert, Update, Delete
    - Queries
        - Select
            - Wehere
            - Order by, Order by Desc
            - Group by
            - join
                - Simple Join
                - Left
                - Right


- Database Creation
    - Create Database [NAME];
- Set the Context of the database so that the tabe will be created  .   
    - Use [DATABASE-NAME]    ;
- Table Creation
    - Create Table [TABLE-NAME](COlumnName DataType Constratints,.......);
- Table Oprations
    - Adding Colum
        - Alter Table [TABLE-NAME] Add Column [ColumnName] Datatype COnstratints;
    - Renaming the columns
        - Alter Table [TABLE-NAME] change [OLD-COLUMN-NAME] [NET-COLUMN-NAME] datatype;
    - Drop COlumn
        - ALter Table [TABLE_NAME] DROP COLUMN [COLUMN-NAME]
    - DROP Table
        - DROP Table [TABLE-NAME]
    - Remove All Records from Table
        - Truncate Table [TABLE-NAME]

- Working with Select


- Powerful mechanism of Data Read
    - Using Select Queries
        - COnsider Following Clouses for Accessing the data
            - Where Clause
            - Orde By (Ascending / Descending)
            - Group By
            - IN for Range
        - Consider Using Aggrigate Functions
            - SUm() / Max() / Min() / Average() /  Count(), etc
        - COnsider Using Joins
            - Define Strategy of reading data from Multiple Tables 
            - REad data on COndition between two tables, simple join
            - Read all data from Left table and read only matching data  on condition from Right Table, Left Join
            - REad all data from Right Join and read onlt matching data on condition from left table, right Join        
    - COnsider Using Views
        -They are the Logical Data Repositories created from original table to prevent all column values to be exposed to the client    
            - They are used for creating reports from the original Table    
    - Using Stored Procs
        - THis is a code block that will be compiled and executed in the DB Processing engine
        - THis always resides on the DB Server and can be invoked using 
            - COmmands
            - COmmands with Input Parameters
            - Commands with Output Parameters
        - Stored Procs can contains Logic and Queries (Select, DML) and can work on one or more tables at a time            
        - SInce they are in Pre-COmpiled form, the execution is fatser

        
# Assignmants# Date: 06-09-2021

Plan on paper and then Create Tables for Logistic
    - Vendor, Truck, Driver, Customer, Order (Placed by Customer), Destination (Rates [Either Per tone or based on Km]), Delivery (Place or Person where the order is delivered), DIspatch
        - DIspatch
            - The tbale that cointains all dispatch information
            - This table will be used for Following Reports
                - Customer wise Dispatch
                - Truck wise Dispatch
                - Vendor wise Dispatch
                - Destionation wise Dispatch
                - Driver wise Dispatch
                - DIspatch Report like OnTime, Delay, Cancel
                - Fuel COnsumerd
                - Expendeture Mased on Dispatch
                    - Driver Salary, Amount Paid to Vendor, Fuel, Maintenence, Delay, Loading and Unloading CHarges, etc
                - Profile-LOss Statement Per Truck
                - Profile-LOss Statement Per Driver
                - Profile-LOss Statement Per Order
                - Profile-LOss Statement Per Desitnation
            - One DIspatch May carry multiple Orders from Same or DIfferent Customers          

- CReate a DIspatch for the Customer Mahesh to Deliver the Sofaset and Dining Table from Mumbai to Pune on date 01-09-2021
    - Pick up on 01-09-2021 and Delivery Note later than 02-09-2021 

       
        - Order (Order Table)
        - PickUp Location (Desitnation)
        - Deliver Location (Desitnation)
        - Pickup Material 
        - Pickup date
        - Expected Delivery Date
        - Set the Rates. (Destiation with Rates)
        - Assign a vehicle Vehicle (Vehicle Master)
        - Assign a Driver (Driver Master)
        - Monitor Expenditure
            - Fuel COst, Driver COst, Toll, Naka, Loading Charges, Unloading CHarges

- Dispatch (UI)
    - DispatchUniqueId (Auo_Increment) Primary Key
    - DispatchDate
    - OrderId
         - CustomerId (Can be omitted if the Customer is parent of the Order Table)
         - Provide Details of Pickup Location, Delivery Location, Maytrial, PickupDate, ExpectedDeliveryDate 
            - The Moment the Destination (PickUp and Delivery) is displayed the system should immediately provide the Toll Tax Value

# Date:07-09-2021
1. Print the Third Max Salary of the Employee
2. Display EmpName, DEsignation, DeptNo of the Employees Having Max, second max and third max salary per department 
3. Create a View that will store result of Task 2 and make sure that5 it will be updated when new records are added in Empployee and Department Tables