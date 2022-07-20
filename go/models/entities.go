package models

import (
	"time"
)

type TB01 struct {
	Id        int64     `json:"id"`
	Col_texto string    `json:"col_texto"`
	Col_dt    time.Time `json:"col_dt"`
}
