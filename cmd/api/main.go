package main

import (
	"fmt"
	"log"
	"net/http"
	"strings"
	"time"

	flags "github.com/jessevdk/go-flags"
	"github.com/jinzhu/gorm"

	"github.com/xanderflood/dev-o"

	"github.com/xanderflood/notebook/lib/tools"
	"github.com/xanderflood/notebook/lib/web"
	"github.com/xanderflood/notebook/pkg/api"
	"github.com/xanderflood/notebook/pkg/dbi"

	//GORM postgres dialect
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var opts struct {
	LogLevel         string `long:"log-level" env:"LOG_LEVEL" default:"INFO"`
	JWTSigningSecret string `long:"jwt-signing-secret" env:"JWT_SIGNING_SECRET" required:"true"`
	Environment      string `long:"environment" env:"ENVIRONMENT" default:"PRODUCTION"`
	PageSize         int    `long:"page-size" env:"PAGE_SIZE" required:"true"`
	DBURL            string `long:"db-url" env:"DB_URL" required:"true"`
	EntryTableName   string `long:"entry-table-name" env:"ENTRY_TABLE_NAME" default:"notebook-entries"`
	ItemTableName    string `long:"item-table-name" env:"ITEM_TABLE_NAME" default:"notebook-items"`
}

func main() {
	fmt.Println("Starting notebook server")

	_, err := flags.Parse(&opts)
	if err != nil {
		log.Fatal(err)
	}

	logger := tools.NewStdoutLogger(tools.LogLevelDebug, "notebook")

	env, ok := EnvironmentsByName[strings.ToUpper(opts.Environment)]
	if !ok {
		log.Fatalf("Invalid environment provided: %s", opts.Environment)
	}

	if env == EnvironmentDebug {
		logger.Info("dev mode detected - starting dev-o file watcher")
		_, err := devo.Autoreload(
			devo.WithTarget("github.com/xanderflood/notebook/cmd/api"),
			devo.WhileMonitoring("github.com/xanderflood/notebook"),
		)
		if err != nil {
			log.Fatal(err)
		}
	}

	db, err := gorm.Open("postgres", opts.DBURL)
	if err != nil {
		log.Fatal(err)
	}

	authenticator := web.NewAuthenticator(logger, opts.JWTSigningSecret)
	dbInterface := dbi.NewGormClient(db, opts.ItemTableName, opts.EntryTableName, opts.PageSize)
	vars := web.MuxVars{}
	service := api.New(authenticator, logger, dbInterface, vars)

	router := NewRouter(service, logger)
	s := &http.Server{
		Addr:           ":4200",
		Handler:        router,
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}
	log.Fatal(s.ListenAndServe())
}
