package models

import (
	"time"
)

//TODO JWT authentication following
// https://medium.com/@raul_11817/securing-golang-api-using-json-web-token-jwt-2dc363792a48

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
	Type     *TransactionType `json:"type,omitempty"`
	ItemUUID *string          `json:"item_uuid,omitempty"`
	Count    *int             `json:"count,omitempty"`
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
