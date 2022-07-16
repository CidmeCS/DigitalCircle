-- Table: public.TB01

-- DROP TABLE IF EXISTS public."TB01";

CREATE TABLE IF NOT EXISTS public."TB01"
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    col_texto "char"[],
    col_dt date,
    CONSTRAINT "TB01_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."TB01"
    OWNER to postgres;