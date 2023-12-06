-- table creation 
CREATE TABLE public.exotic_cars
(
    car_id serial NOT NULL,
    make character varying NOT NULL,
    model character varying NOT NULL,
    year integer NOT NULL,
    vin character varying NOT NULL,
    country character varying NOT NULL,
    mileage bigint NOT NULL,
    PRIMARY KEY (car_id)
);

ALTER TABLE IF EXISTS public.exotic_cars
    OWNER to postgres;
