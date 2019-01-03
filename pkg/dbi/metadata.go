package dbi

import (
	"time"

	"github.com/xanderflood/notebook/pkg/models"
)

//Metadata basic postgres/gorm model
type Metadata struct {
	UUID     string    `gorm:"column:uuid" gorm:"primary_key"`
	Modified time.Time `gorm:"column:modified"`
	Created  time.Time `gorm:"column:created"`
}

//DBItem convert models.Item to Item
func DBModel(model models.Metadata) Metadata {
	m := Metadata{
		UUID: model.UUID,
	}

	if model.Modified != nil {
		m.Modified = *model.Modified
	}
	if model.Created != nil {
		m.Created = *model.Created
	}

	return m
}

//ToModel get a JSON-able version of this entry
func (m Metadata) ToModel() models.Metadata {
	return models.Metadata{
		UUID:     m.UUID,
		Modified: &m.Modified,
		Created:  &m.Created,
	}
}
