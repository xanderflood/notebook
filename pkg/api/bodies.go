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

	//TODO validations on properties?

	return nil
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

	if len(*r.Transactions) <= 0 {
		return errors.New("entry does not contain any transactions")
	}

	return nil
}

//CreateEntryResponse CreateEntryResponse
type CreateEntryResponse struct {
	models.Entry
}
