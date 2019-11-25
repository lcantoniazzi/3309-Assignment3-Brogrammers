/*First type of insert*/
insert into Supplier(supplierName, street, city, houseNumber, zipCode, email, phoneNumber, hubZipCode) values("Mums Produce", "Bingas",  "Detroitt" , 01, 12045, "mumsproduce@gmail.com",4161234507,54301);

insert into Hub(zipCode, street, city, houseNumber)
values(94489,"Bin street","Hills",2);

/*Second type of insert*/
insert into Product
select 
"Carrot",
"Vegetable",
2,
2,
supplierName from Supplier
where
supplierName = "Dadds Produce";

/*Third type of insert*/
insert into Hub
select 
59999,
"Bingus Dingus Drive",
"Toronto",
23;