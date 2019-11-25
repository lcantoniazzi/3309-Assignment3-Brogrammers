
/*create view yeet as select * from supplier;

create view Dingus	as select * from supplier where city = "Detroitt";

create view Captain as select * from supplier group by city;*/

create or replace view yeet as
select * from customer;
