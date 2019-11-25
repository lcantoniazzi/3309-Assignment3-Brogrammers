
select productName 
from product;

select productName 
from product
where price <5;

select productName, product.supplierName
from product
inner join supplier
on product.supplierName = supplier.supplierName
where product.supplierName = "Miles";

select count(supplierName), city
from supplier
group by city;

select supplierName
from supplier
where exists (select productName from product where price < 10);

select productName, product.supplierName
from product
left join supplier
on product.supplierName = supplier.supplierName
where product.supplierName = "Miles";