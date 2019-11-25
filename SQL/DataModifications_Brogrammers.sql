update supplier set hubZipCode="90045" where hubZipCode="12345";

delete from supplier where hubZipCode="54301";

insert into Product
select 
"Brussel Sprouts",
"Vegetable",
4,
4,
supplierName from Supplier
where
supplierName = "Miles";

