-- add new car using insert (HTTP POST)
insert into exotic_cars (make, model, year, vin, country, mileage)
values ('Lexus', 'LFA', 2012, 'ZAMJEHMMXMC1233463', 'Japan', 2000) 
returning*;