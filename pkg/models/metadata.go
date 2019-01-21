package models

import (
	"time"

	uuid "github.com/nu7hatch/gouuid"
)

func createUUID() string {
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
	UUID     string     `json:"uuid" gorm:"column:uuid" gorm:"primary_key"`
	Created  *time.Time `json:"created,omitempty" gorm:"column:modified"`
	Modified *time.Time `json:"modified,omitempty" gorm:"column:created"`
}

//Create mark as created
func (m *Metadata) Create() {
	now := time.Now().UTC()
	m.Created = &now
	m.Modified = &now
	m.UUID = createUUID()
}

//Update mark as Updated
func (m *Metadata) Update() {
	now := time.Now().UTC()
	m.Modified = &now
}
