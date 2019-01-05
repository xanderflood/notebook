package models

import (
	"errors"
	"time"

	uuid "github.com/nu7hatch/gouuid"
	"github.com/xanderflood/notebook/lib/tools"
)

//TODO JWT authentication following
// https://medium.com/@raul_11817/securing-golang-api-using-json-web-token-jwt-2dc363792a48

func getUUID() string {
	var u *uuid.UUID
	for {
		var err error
		u, err = uuid.NewV4()
		if err == nil {
			break
		}
	}

	return u.String()
}

//Metadata model attributes
type Metadata struct {
	UUID     string     `json:"uuid"`
	Created  *time.Time `json:"created,omitempty"`
	Modified *time.Time `json:"modified,omitempty"`
}

//Create mark as created
func (m *Metadata) Create() {
	now := time.Now().UTC()
	m.Created = &now
	m.Modified = &now
	m.UUID = getUUID()
}

//Update mark as Updated
func (m *Metadata) Update() {
	now := time.Now().UTC()
	m.Modified = &now
}

//User User
type User struct {
	UUID *string `json:"uuid"`
}

//Entry Entry
// HASH_KEY UserUUID
// RANGE_KEY Moment
type Entry struct {
	Metadata
	UserUUID     string         `json:"user_uuid"`
	Moment       *time.Time     `json:"moment,omitempty"`
	Transactions *[]Transaction `json:"transactions,omitempty"`
}

//Validate validate the entry
func (e Entry) Validate() error {
	if (e.Moment != nil) && (*e.Moment != time.Time{}) {
		return errors.New("moment is not valid")
	}
	if e.Transactions != nil {
		for _, t := range *e.Transactions {
			if len(string(t.Type)) == 0 {
				return errors.New("moment is not valid")
			}
			if tools.IsUUID(t.ItemUUID) {
				return errors.New("moment is not valid")
			}
			if t.Count <= 0 {
				return errors.New("transaction count must be positive")
			}
		}
	}

	// if (i.LastUsed != nil) && (*i.LastUsed != time.Time{}) {
	// 	return errors.New("last_used is not valid")
	// }

	return nil
}

//TransactionType TransactionType
type TransactionType string

const (
	//TransactionTypeProduced "Produced"
	TransactionTypeProduced = "Produced"
	//TransactionTypeConsumed "Consumed"
	TransactionTypeConsumed = "Consumed"
)

//Transaction Transaction
type Transaction struct {
	Type     TransactionType `json:"type,omitempty"`
	ItemUUID string          `json:"item_uuid,omitempty"`
	Count    int             `json:"count,omitempty"`
}

//Item Item
// HASH_KEY UserUUID
// RANGE_KEY LastUsed
type Item struct {
	Metadata
	UserUUID     string          `json:"user_uuid" sql:"index"`
	LastUsed     *time.Time      `json:"last_used,omitempty" sql:"index"`
	Properties   *[]ItemProperty `json:"properties,omitempty"`
	NumRemaining *int            `json:"num_remaining,omitempty"`
	NumProduced  *int            `json:"num_produced,omitempty"`
	NumConsumed  *int            `json:"num_consumed,omitempty"`
	History      *[]string
}

//ItemProperty ItemProperty
type ItemProperty struct {
	Name  string `json:"name"`
	Value string `json:"value"`
}

//Validate validate the item
func (i Item) Validate() error {
	if (i.LastUsed != nil) && (*i.LastUsed != time.Time{}) {
		return errors.New("last_used is not valid")
	}
	if (i.NumRemaining != nil) && *i.NumRemaining <= 0 {
		return errors.New("num_remaining cannot be negative")
	}
	if (i.NumProduced != nil) && *i.NumProduced <= 0 {
		return errors.New("num_produced cannot be negative")
	}
	if (i.NumConsumed != nil) && *i.NumConsumed <= 0 {
		return errors.New("num_consumed cannot be negative")
	}
	return nil
}
