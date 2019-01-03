package api

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/xanderflood/notebook/lib/tools"
	"github.com/xanderflood/notebook/lib/web"
	"github.com/xanderflood/notebook/pkg/dbi"
)

//Service minimal interface for handling backend requests
//go:generate counterfeiter . Service
type Service interface {
	GetItems(w http.ResponseWriter, r *http.Request)
	GetEntries(w http.ResponseWriter, r *http.Request)
	GetItem(w http.ResponseWriter, r *http.Request)
	GetEntry(w http.ResponseWriter, r *http.Request)
	CreateItem(w http.ResponseWriter, r *http.Request)
	CreateEntry(w http.ResponseWriter, r *http.Request)
	UpdateItem(w http.ResponseWriter, r *http.Request)
	UpdateEntry(w http.ResponseWriter, r *http.Request)
	DeleteItem(w http.ResponseWriter, r *http.Request)
	DeleteEntry(w http.ResponseWriter, r *http.Request)
}

//Frontmatterer handle authentication frontmatter common to all API requests
//go:generate counterfeiter . Service
type Frontmatterer interface {
	Frontmatter(w http.ResponseWriter, r *http.Request, body Request) (Authorization, bool)
}

//ServiceAgent standard Service implementation
type ServiceAgent struct {
	frontmatterer Frontmatterer
	authenticator web.Authenticator
	log           tools.Logger
	db            dbi.Interface
	vars          web.VarsGetter
}

//New create a new backend handler
func New(
	authenticator web.Authenticator,
	log tools.Logger,
	db dbi.Interface,
	vars web.VarsGetter,
) *ServiceAgent {
	sa := &ServiceAgent{
		authenticator: authenticator,
		log:           log,
		db:            db,
		vars:          vars,
	}
	sa.frontmatterer = sa

	return sa
}

//WithFrontmatter for injecting alternative frontmatter. Mutates the objet
//and returns it for chaining.
func (sa *ServiceAgent) WithFrontmatter(f Frontmatterer) *ServiceAgent {
	sa.frontmatterer = f
	return sa
}

//Frontmatter generic pre-handlers used by all routes. `body` is
//required to be of a pointer type, and the request body will
//be unmarshalled into it.
func (sa *ServiceAgent) Frontmatter(w http.ResponseWriter, r *http.Request, body Request) (Authorization, bool) {
	auth := Authorization{}
	if authOk := sa.authenticator.Authenticate(w, r, &auth); !authOk {
		return auth, false
	}

	if body != nil {
		bodyData, err := ioutil.ReadAll(r.Body)
		if err != nil {
			sa.log.Error(err)
			web.JSONErrorRespond(w, "failed to read response body", http.StatusInternalServerError)
			return auth, false
		}

		err = json.Unmarshal(bodyData, &body)
		if err != nil {
			sa.log.Error(err)
			web.JSONErrorRespond(w, "could not parse body - expected valid JSON", http.StatusBadRequest)
			return auth, false
		}

		if err := body.Validate(); err != nil {
			sa.log.Error(err)
			web.JSONErrorRespond(w,
				fmt.Sprintf("invalid request body: %s", err.Error()),
				http.StatusBadRequest)
			return auth, false
		}
	}

	return auth, true
}

//GetItems GetItems
func (sa *ServiceAgent) GetItems(w http.ResponseWriter, r *http.Request) {
	auth, ok := sa.frontmatterer.Frontmatter(w, r, nil)
	if !ok {
		return
	}

	token := r.URL.Query().Get("token")
	if len(token) <= 0 {
		token = "0"
	}

	items, token, err := sa.db.GetItems(r.Context(), auth.UserUUID, token)
	if err != nil {
		sa.log.Error(err)
		web.JSONErrorRespond(w, "request failed", http.StatusInternalServerError)
		return
	}

	response := GetItemsResponse{
		Items: items,
		Token: token,
	}
	web.JSONStandardRespond(w, response, http.StatusOK)
}

//GetEntries GetEntries
func (sa *ServiceAgent) GetEntries(w http.ResponseWriter, r *http.Request) {
	auth, ok := sa.frontmatterer.Frontmatter(w, r, nil)
	if !ok {
		return
	}

	token := r.URL.Query().Get("token")
	if len(token) <= 0 {
		token = "0"
	}

	entries, token, err := sa.db.GetEntries(r.Context(), auth.UserUUID, token)
	if err != nil {
		sa.log.Error(err)
		web.JSONErrorRespond(w, "request failed", http.StatusInternalServerError)
		return
	}

	response := GetEntriesResponse{
		Entries: entries,
		Token:   token,
	}
	web.JSONStandardRespond(w, response, http.StatusOK)
}

//GetItem GetItem
func (sa *ServiceAgent) GetItem(w http.ResponseWriter, r *http.Request) {
	web.JSONStandardRespond(w, nil, http.StatusNotImplemented)
}

//GetEntry GetEntry
func (sa *ServiceAgent) GetEntry(w http.ResponseWriter, r *http.Request) {
	web.JSONStandardRespond(w, nil, http.StatusNotImplemented)
}

//CreateItem CreateItem
func (sa *ServiceAgent) CreateItem(w http.ResponseWriter, r *http.Request) {
	body := CreateItemRequest{}
	auth, ok := sa.frontmatterer.Frontmatter(w, r, &body)
	if !ok {
		return
	}

	result, err := sa.db.CreateItem(r.Context(), auth.UserUUID, body.Item)
	if err != nil {
		sa.log.Error(err)
		web.JSONErrorRespond(w, "request failed", http.StatusInternalServerError)
		return
	}

	response := CreateItemResponse{
		Item: result,
	}
	web.JSONStandardRespond(w, response, http.StatusOK)
}

//CreateEntry CreateEntry
func (sa *ServiceAgent) CreateEntry(w http.ResponseWriter, r *http.Request) {
	body := CreateEntryRequest{}
	auth, ok := sa.frontmatterer.Frontmatter(w, r, &body)
	if !ok {
		return
	}

	result, err := sa.db.CreateEntry(r.Context(), auth.UserUUID, body.Entry)
	if err != nil {
		sa.log.Error(err)
		web.JSONErrorRespond(w, "request failed", http.StatusInternalServerError)
		return
	}

	response := CreateEntryResponse{
		Entry: result,
	}
	web.JSONStandardRespond(w, response, http.StatusOK)
}

//UpdateItem UpdateItem
func (sa *ServiceAgent) UpdateItem(w http.ResponseWriter, r *http.Request) {
	web.JSONStandardRespond(w, nil, http.StatusNotImplemented)
}

//UpdateEntry UpdateEntry
func (sa *ServiceAgent) UpdateEntry(w http.ResponseWriter, r *http.Request) {
	web.JSONStandardRespond(w, nil, http.StatusNotImplemented)
}

//DeleteItem DeleteItem
func (sa *ServiceAgent) DeleteItem(w http.ResponseWriter, r *http.Request) {
	web.JSONStandardRespond(w, nil, http.StatusNotImplemented)
}

//DeleteEntry DeleteEntry
func (sa *ServiceAgent) DeleteEntry(w http.ResponseWriter, r *http.Request) {
	web.JSONStandardRespond(w, nil, http.StatusNotImplemented)
}
