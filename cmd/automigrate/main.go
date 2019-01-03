package main

import (
	"fmt"
	"log"

	flags "github.com/jessevdk/go-flags"
	"github.com/jinzhu/gorm"
	"github.com/xanderflood/notebook/pkg/dbi"

	//GORM postgres dialect
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var opts struct {
	LogLevel         string `long:"log-level" env:"LOG_LEVEL" default:"INFO"`
	JWTSigningSecret string `long:"jwt-signing-secret" env:"JWT_SIGNING_SECRET" required:"true"`
	PublicRoot       string `long:"public-root" env:"PUBLIC_ROOT" required:"true"`
	Environment      string `long:"environment" env:"ENVIRONMENT" default:"PRODUCTION"`
	PageSize         int    `long:"page-size" env:"PAGE_SIZE" required:"true"`
	DBURL            string `long:"db-url" env:"DB_URL" required:"true"`
	EntryTableName   string `long:"entry-table-name" env:"ENTRY_TABLE_NAME" default:"notebook-entries"`
	ItemTableName    string `long:"item-table-name" env:"ITEM_TABLE_NAME" default:"notebook-items"`
}

func main() {
	fmt.Println("Automigrating")

	_, err := flags.Parse(&opts)
	if err != nil {
		log.Fatal(err)
	}

	db, err := gorm.Open("postgres", opts.DBURL)
	if err != nil {
		log.Fatal(err)
	}

	db.AutoMigrate(&dbi.Item{}, &dbi.Entry{})
}
