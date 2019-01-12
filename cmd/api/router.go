package main

import (
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"

	"github.com/xanderflood/notebook/lib/middleware"
	"github.com/xanderflood/notebook/lib/tools"
	"github.com/xanderflood/notebook/pkg/api"
)

//NewRouter new router
func NewRouter(
	service api.Service,
	log tools.Logger,
) http.Handler {
	router := mux.NewRouter()

	//index
	router.HandleFunc("/api/items", service.GetItems).Methods("GET")
	router.HandleFunc("/api/entries", service.GetEntries).Methods("GET")
	router.HandleFunc("/api/item/:id", service.GetItem).Methods("GET")
	router.HandleFunc("/api/entry/:id", service.GetEntry).Methods("GET")
	router.HandleFunc("/api/items", service.CreateItem).Methods("POST")
	router.HandleFunc("/api/entries", service.CreateEntry).Methods("POST")
	router.HandleFunc("/api/items", service.UpdateItem).Methods("PATCH")
	router.HandleFunc("/api/entries", service.UpdateEntry).Methods("PATCH")
	router.HandleFunc("/api/items", service.DeleteItem).Methods("DELETE")
	router.HandleFunc("/api/entries", service.DeleteEntry).Methods("DELETE")

	return middleware.Wrap(
		log,
		handlers.CORS(
			handlers.AllowedHeaders([]string{"Content-Type", "Authorization"}),
			handlers.AllowedMethods([]string{"GET", "POST", "PATCH", "DELETE", "HEAD", "OPTIONS"}),
			handlers.AllowedOrigins([]string{"*"}),
		)(router),
	)
}
