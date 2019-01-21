package models

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"time"

	"github.com/xanderflood/notebook/lib/tools"
)

//Entry Entry
// HASH_KEY UserUUID
// RANGE_KEY Moment
type Entry struct {
	Metadata
	UserUUID     string          `json:"-" gorm:"column:user_uuid"`
	Moment       *tools.JSONTime `json:"moment,omitempty" gorm:"column:moment"`
	Transactions *Transactions   `json:"transactions,omitempty" gorm:"column:transactions;type:text"`
}

//Transaction Transaction
type Transaction struct {
	Type TransactionType `json:"type,omitempty"`
	//TODO switch back do json:"item_uuid,omitempty"
	ItemUUID string `json:"item_uuid,omitempty"`
	Count    int    `json:"count,omitempty"`
}

//Transactions list of transactions
type Transactions []Transaction

//TransactionType TransactionType
type TransactionType string

const (
	//TransactionTypeProduced "Produced"
	TransactionTypeProduced = "Produced"
	//TransactionTypeConsumed "Consumed"
	TransactionTypeConsumed = "Consumed"
	//TransactionTypeCultured "Cultured"
	TransactionTypeCultured = "Cultured"
	//TransactionTypeTransferred "Transferred"
	TransactionTypeTransferred = "Transferred"
)

//Scan makes these types database/sql-queryable
func (el *Transactions) Scan(s interface{}) (err error) {
	jsonStr, ok := s.(string)
	if !ok {
		return errors.New("expected string")
	}

	err = json.Unmarshal([]byte(jsonStr), (*[]Transaction)(el))
	return
}

//Value makes these types database/sql-loadable
func (el Transactions) Value() (driver.Value, error) {
	return json.Marshal([]Transaction(el))
}

//ValidatePresentFields check the validity of all non-nil fields.
//Validations to ensure that certain fields are set are defined
//on the various request objects in pkg/api/bodies.go.
func (e Entry) ValidatePresentFields() error {
	if (e.Moment != nil) && (*e.Moment != tools.JSONTime(time.Time{})) {
		return errors.New("moment is not valid")
	}

	if e.Transactions != nil {
		if len(*e.Transactions) == 0 {
			return errors.New("entry does not have any transactions")
		}

		for _, t := range *e.Transactions {
			if len(string(t.Type)) == 0 {
				return errors.New("type is not valid")
			}
			if !tools.IsUUID(t.ItemUUID) {
				return errors.New("itemUUID is not valid")
			}
			if t.Count <= 0 {
				return errors.New("transaction count must be positive")
			}
		}
	}

	if (e.Moment != nil) && (*e.Moment != tools.JSONTime(time.Time{})) {
		return errors.New("moment is not valid")
	}

	return nil
}
