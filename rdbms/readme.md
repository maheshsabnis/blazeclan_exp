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


# Assignmants# Date: 06-09-2021

Plan on paper and then Create Tables for Logistic
    - Vendor, Truck, Driver, Customer, Order (Placed by Customer), Destination (Rates [Either Per tone or based on Km]), Delivery (Place or Person where the order is delivered), DIspatch
        - DIspatch
            - The tbale that cointains all dispatch information
            - This table will be used for Following Reports
                - Customer wise Dispatch
                - Truck wise Dispatch
                - Ven wise Dispatch
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

