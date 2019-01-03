package main

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/xanderflood/notebook/lib/middleware"
	"github.com/xanderflood/notebook/lib/tools"
	"github.com/xanderflood/notebook/pkg/api"
)

//NewRouter new router
func NewRouter(
	service api.Service,
	log tools.Logger,
	publicAssetsPath string,
) http.Handler {
	r := mux.NewRouter()

	//index
	r.HandleFunc("/api/items", service.GetItems).Methods("GET")
	r.HandleFunc("/api/entries", service.GetEntries).Methods("GET")
	r.HandleFunc("/api/item/:id", service.GetItem).Methods("GET")
	r.HandleFunc("/api/entry/:id", service.GetEntry).Methods("GET")
	r.HandleFunc("/api/items", service.CreateItem).Methods("POST")
	r.HandleFunc("/api/entries", service.CreateEntry).Methods("POST")
	r.HandleFunc("/api/items", service.UpdateItem).Methods("PATCH")
	r.HandleFunc("/api/entries", service.UpdateEntry).Methods("PATCH")
	r.HandleFunc("/api/items", service.DeleteItem).Methods("DELETE")
	r.HandleFunc("/api/entries", service.DeleteEntry).Methods("DELETE")

	//otherwise, serve public assets directory
	r.PathPrefix("/").Handler(
		http.FileServer(
			http.Dir(publicAssetsPath),
		),
	)

	return http.HandlerFunc(middleware.Wrap(log, r))
}
