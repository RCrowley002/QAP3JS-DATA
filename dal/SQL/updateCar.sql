-- update a car using update (HTTP PUT)
update exotic_cars set mileage = 7000
where car_id = 4
returning *;