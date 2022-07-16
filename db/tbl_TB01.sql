-- Table: public.TB01

-- DROP TABLE IF EXISTS public."TB01";

CREATE TABLE IF NOT EXISTS public."TB01"
(
    id integer NOT NULL,
    col_texto "char"[],
    col_dt date,
    CONSTRAINT "TB01_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."TB01"
    OWNER to postgres;