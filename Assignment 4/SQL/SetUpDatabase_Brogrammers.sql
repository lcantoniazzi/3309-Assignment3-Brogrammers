create database brogrammersgrocery;
use brogrammersgrocery;

Create table Product(
productName varchar(30) not null primary key,
productType varchar(30) not null,
stockLevel int,
price int not null,
supplierName varchar(30) references Supplier(supplierName));

Create table Supplier(
supplierName varchar(30) not null primary key,
street varchar(30) not null,
city varchar(30) not null,
houseNumber int not null,
zipCode int(5) not null check(zipCode>9999),
email varchar(30) not null,
phoneNumber int unsigned not null,
hubZipCode int not null references Hub(zipCode));

create table Staff(
employeeID varchar(30) not null primary key,
sinNo int(9) not null check(sinNo>99999999),
fname varchar(15) not null,
lname varchar(15) not null,
hubZipCode int(5) not null check(hubZipCode>9999) references Hub(zipCode),
SupervisorID varchar(30) not null references Supervisor(EmployeeID),
position varchar(30) not null references Job(position));

create table Customer(
custName varchar(30) not null,
username varchar(30) not null primary key,
email varchar(30) not null,
phoneNumber int(10) not null check(phoneNumber>999999999),
hubZipCode int(5) not null check(hubZipCode>9999) references Hub(zipCode));

create table Review(
content varChar(300),
rating int(1) not null check(rating<6),
username varchar(30) not null references Customer(username),
product varchar(30) not null references Product(productName),
primary key(username,product));

create table Transaction(
orderID varchar(30) not null,
paymentStatus boolean not null,
deliveryStatus boolean not null,
pickupStatus boolean not null,
orderDate date not null,
hubZipCode int(5) not null check(hubZipCode>9999) references Hub(zipCode),
username varchar(30) not null references Customer(username));

create table Hub(
street varchar(30) not null,
city varchar(30) not null,
houseNumber int not null,
zipCode int(5) not null check(zipCode>9999) primary key);

create table Containing(
OrderID varchar(30) not null references Transaction(OrderID),
product varchar(30) not null references Product(productName),
quantity int(3) check(quantity>0), 
primary key (OrderID, product));

create table Job(
postion varchar(30) not null primary key,
salary int not null);

insert into Supplier(supplierName, street, city, houseNumber, zipCode, email, phoneNumber, hubZipCode) values("Miles", "Bannon",  "Toronto" ,11, 12045, "Miles@gmail.com",4161234507,54301);
insert into Supplier(supplierName, street, city, houseNumber, zipCode, email, phoneNumber, hubZipCode) values("Lucas", "Ballacaine",  "Toronto" ,30, 12345, "Lucas@gmail.com",4161234509,54302);
insert into Supplier(supplierName, street, city, houseNumber, zipCode, email, phoneNumber, hubZipCode) values("Ian", "Durie",  "London" ,300, 12543, "Ian@gmail.com",4161224507,54302);
insert into Supplier(supplierName, street, city, houseNumber, zipCode, email, phoneNumber, hubZipCode) values("Mark", "Richmond",  "Washington" ,14, 12555, "Mark@gmail.com",4161234588,54301);

insert into Product
select 
"Carrot",
"Vegetable",
2,
2,
supplierName from Supplier
where
supplierName = "Miles";

insert into Product
select 
"Chicken",
"Meat",
3,
6,
supplierName from Supplier
where
supplierName = "Miles";

insert into Product
select 
"Cucumber",
"Vegetable",
10,
3,
supplierName from Supplier
where
supplierName = "Lucas";

insert into Product
select 
"Green Pepper",
"Vegetable",
14,
2,
supplierName from Supplier
where
supplierName = "Lucas";

insert into Product
select 
"Steak",
"Meat",
10,
18,
supplierName from Supplier
where
supplierName = "Ian";

insert into Product
select 
"Milk",
"Dairy",
100,
2,
supplierName from Supplier
where
supplierName = "Mark";
