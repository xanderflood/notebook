package dbi

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"time"

	"github.com/xanderflood/notebook/pkg/models"
)

//Item Item
// TODO index on:
//   user uuid
//   last used
type Item struct {
	Metadata
	UserUUID     string         `gorm:"column:user_uuid"`
	Name         string         `gorm:"column:name"`
	LastUsed     time.Time      `gorm:"column:last_used"`
	NumRemaining int            `gorm:"column:num_remaining"`
	NumProduced  int            `gorm:"column:num_produced"`
	NumConsumed  int            `gorm:"column:num_consumed"`
	Properties   ItemProperties `gorm:"column:properties;type:text"`
	History      History        `gorm:"column:history;type:text"`
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

//ItemProperties list of item properties
type ItemProperties []models.ItemProperty

//Scan makes these types database/sql-queryable
func (ips *ItemProperties) Scan(s interface{}) (err error) {
	jsonStr, ok := s.(string)
	if !ok {
		return errors.New("expected string")
	}

	err = json.Unmarshal([]byte(jsonStr), (*[]models.ItemProperty)(ips))
	return
}

//Value makes these types database/sql-loadable
func (ips ItemProperties) Value() (driver.Value, error) {
	return json.Marshal([]models.ItemProperty(ips))
}

//DBItem convert models.Item to Item
func DBItem(item models.Item) Item {
	i := Item{
		Metadata: DBModel(item.Metadata),
		UserUUID: item.UserUUID,
	}

	if item.Name != nil {
		i.Name = *item.Name
	}
	if item.LastUsed != nil {
		i.LastUsed = *item.LastUsed
	}
	if item.NumRemaining != nil {
		i.NumRemaining = *item.NumRemaining
	}
	if item.NumProduced != nil {
		i.NumProduced = *item.NumProduced
	}
	if item.NumConsumed != nil {
		i.NumConsumed = *item.NumConsumed
	}
	if item.Properties != nil {
		i.Properties = *item.Properties
	}
	if item.History != nil {
		i.History = *item.History
	}

	return i
}

//ToModel get a JSON-able version of this entry. This function
//is basically display-layer code
func (i Item) ToModel() models.Item {
	return models.Item{
		Metadata:     i.Metadata.ToModel(),
		UserUUID:     i.UserUUID,
		Name:         &i.Name,
		LastUsed:     &i.LastUsed,
		NumRemaining: &i.NumRemaining,
		NumProduced:  &i.NumProduced,
		NumConsumed:  &i.NumConsumed,
		Properties:   (*[]models.ItemProperty)(&i.Properties),
		History:      (*[]string)(&i.History),
	}
}
