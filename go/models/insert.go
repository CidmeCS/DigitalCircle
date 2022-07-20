package models

import (
	"ApiComPostgres/db"
	"time"
)

func Insert(tb01 TB01) (id int64, err error) {

	conn, err := db.OpenConnection()
	if err != nil {

		return
	}

	defer conn.Close()

	dia := time.Now().String()[0:19]

	sql := `INSERT INTO tb01 (col_texto, col_dt) VALUES ($1,$2) RETURNING id`

	err = conn.QueryRow(sql, tb01.Col_texto, dia).Scan(&id)
	return
}
