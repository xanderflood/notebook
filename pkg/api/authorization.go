package api

import (
	"errors"
	"fmt"
	"strings"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/xanderflood/notebook/lib/tools"
)

//Authorization JWT claims object
type Authorization struct {
	jwt.StandardClaims
	UserUUID string `json:"sub"`
}

//Valid checks whether this authorization is valid. Does
//not check whether this authorization grants permission
//for any particular action.
func (a *Authorization) Valid() error {
	if err := a.StandardClaims.Valid(); err != nil {
		return err
	}

	if len(strings.TrimSpace(a.UserUUID)) == 0 {
		return errors.New("`sub` claim not provided")
	}

	if !tools.IsUUID(a.UserUUID) {
		return fmt.Errorf("`sub` claim `%s` is not a valid v4UUID", a.UserUUID)
	}

	return nil
}
