package models

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"strings"
	"time"
)

//Item Item
// HASH_KEY UserUUID
// RANGE_KEY LastUsed
type Item struct {
	Metadata
	UserUUID     string          `json:"-" gorm:"column:user_uuid"`
	Name         *string         `json:"name" gorm:"column:name"`
	Type         *ItemType       `json:"type,omitempty" gorm:"column:type"`
	LastUsed     *time.Time      `json:"lastUsed,omitempty" gorm:"column:last_used"`
	NumRemaining *int            `json:"numRemaining,omitempty" gorm:"column:num_remaining"`
	NumProduced  *int            `json:"numProduced,omitempty" gorm:"column:num_produced"`
	NumConsumed  *int            `json:"numConsumed,omitempty" gorm:"column:num_consumed"`
	Properties   *ItemProperties `json:"properties,omitempty" gorm:"column:properties;type:text"`
	History      *History        `json:"history,omitempty" gorm:"column:history;type:text"`
	Individuals  *[]string       `json:"gorm,omitempty" gorm:"column:gorm;type:text"`
}

//ItemType ItemType
type ItemType string

//ItemProperties list of item properties
type ItemProperties []ItemProperty

//Scan makes these types database/sql-queryable
func (ips *ItemProperties) Scan(s interface{}) (err error) {
	jsonStr, ok := s.(string)
	if !ok {
		return errors.New("expected string")
	}

	err = json.Unmarshal([]byte(jsonStr), (*[]ItemProperty)(ips))
	return
}

//Value makes these types database/sql-loadable
func (ips ItemProperties) Value() (driver.Value, error) {
	return json.Marshal([]ItemProperty(ips))
}

//History list of entry UUIDs
type History []string

//Scan makes these types database/sql-queryable
func (h *History) Scan(s interface{}) (err error) {
	jsonStr, ok := s.(string)
	if !ok {
		return errors.New("expected string")
	}

	err = json.Unmarshal([]byte(jsonStr), (*[]string)(h))
	return
}

//Value makes these types database/sql-loadable
func (h History) Value() (driver.Value, error) {
	return json.Marshal([]string(h))
}

//Individuals list of individual UUIDs
type Individuals []string

//Scan makes these types database/sql-queryable
func (i *Individuals) Scan(s interface{}) (err error) {
	jsonStr, ok := s.(string)
	if !ok {
		return errors.New("expected string")
	}

	err = json.Unmarshal([]byte(jsonStr), (*[]string)(i))
	return
}

//Value makes these types database/sql-loadable
func (i Individuals) Value() (driver.Value, error) {
	return json.Marshal([]string(i))
}

const (
	//ItemTypeInventory "Inventory"
	ItemTypeInventory = "Inventory"
	//ItemTypeUnique "Unique"
	ItemTypeUnique = "Unique"
)

//ItemProperty ItemProperty
type ItemProperty struct {
	Name  string `json:"name"`
	Value string `json:"value"`
}

//ValidatePresentFields validate the item
func (i Item) ValidatePresentFields() error {
	if (i.Name != nil) && len(strings.TrimSpace(*i.Name)) == 0 {
		return errors.New("name is required")
	}
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
	//TODO confirm validity of all enum fields!!!!
	// use a map[ItemType]struct{} to keep track
	return nil
}
