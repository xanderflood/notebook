package dbi

import (
	"encoding/json"
	"errors"
	"time"

	"database/sql/driver"

	"github.com/xanderflood/notebook/pkg/models"
)

//Entry Entry
// TODO index on:
//   user uuid
//   moment
type Entry struct {
	Metadata
	UserUUID     string          `gorm:"column:user_uuid"`
	Moment       time.Time       `gorm:"column:moment"`
	Transactions TransactionList `gorm:"column:transactions;type:text"`
}

//TransactionList list of transactions
type TransactionList []models.Transaction

//Scan makes these types database/sql-queryable
func (el *TransactionList) Scan(s interface{}) (err error) {
	jsonStr, ok := s.(string)
	if !ok {
		return errors.New("expected string")
	}

	err = json.Unmarshal([]byte(jsonStr), (*[]models.Transaction)(el))
	return
}

//Value makes these types database/sql-loadable
func (el TransactionList) Value() (driver.Value, error) {
	return json.Marshal([]models.Transaction(el))
}

//DBEntry convert models.Entry to Entry
func DBEntry(entry models.Entry) Entry {
	e := Entry{
		Metadata: DBModel(entry.Metadata),
		UserUUID: entry.UserUUID,
	}

	if entry.Moment != nil {
		e.Moment = *entry.Moment
	}
	if entry.Transactions != nil {
		e.Transactions = *entry.Transactions
	}

	return e
}

//ToModel get a JSON-able version of this entry. This function
//is basically display-layer code
func (e Entry) ToModel() models.Entry {
	return models.Entry{
		Metadata:     e.Metadata.ToModel(),
		UserUUID:     e.UserUUID,
		Moment:       &e.Moment,
		Transactions: (*[]models.Transaction)(&e.Transactions),
	}
}
