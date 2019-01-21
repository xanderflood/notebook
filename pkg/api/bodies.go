package api

import (
	"errors"

	"github.com/xanderflood/notebook/pkg/models"
)

//Request validatable interface request
//go:generate counterfeiter . Request
type Request interface {
	Validate() error
}

////////////////
// Batch gets //
////////////////

//GetItemsResponse GetItemsResponse
type GetItemsResponse struct {
	Items []models.Item `json:"items"`

	Token string `json:"nextToken"`
}

//GetEntriesResponse GetEntriesResponse
type GetEntriesResponse struct {
	Entries []models.Entry `json:"entries"`

	Token string `json:"nextToken"`
}

////////////
// Create //
////////////

//CreateItemRequest CreateItemRequest
type CreateItemRequest struct {
	models.Item
}

//Validate Validate
func (r *CreateItemRequest) Validate() error {
	if len(r.UUID) > 0 {
		return errors.New("cannot create item with UUID")
	}

	if r.Name == nil {
		return errors.New("name is required")
	}

	if r.Type == nil {
		return errors.New("type is required")
	}

	if r.Properties == nil {
		return errors.New("properies is required")
	}

	return r.Item.ValidatePresentFields()
}

//CreateItemResponse CreateItemResponse
type CreateItemResponse struct {
	models.Item
}

//CreateEntryRequest CreateEntryRequest
type CreateEntryRequest struct {
	models.Entry
}

//Validate Validate
func (r *CreateEntryRequest) Validate() error {
	if len(r.UUID) > 0 {
		return errors.New("cannot create entry with UUID")
	}

	if r.Moment == nil {
		return errors.New("moment is not valid")
	}

	if r.Transactions == nil {
		return errors.New("transactions is required")
	}

	return r.Entry.ValidatePresentFields()
}

//CreateEntryResponse CreateEntryResponse
type CreateEntryResponse struct {
	models.Entry
}
