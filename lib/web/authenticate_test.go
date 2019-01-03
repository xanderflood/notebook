package web_test

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"net/http/httptest"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/xanderflood/notebook/lib/tools/toolsfakes"
	"github.com/xanderflood/notebook/lib/web"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

type Authorization struct {
	jwt.StandardClaims
	Foo string `json:"clm,omitempty"`
}

func (a Authorization) Valid() error {
	if a.Foo != "my-clm-claim" {
		return errors.New("invalid foo")
	}

	return nil
}

var _ = Describe("AuthenticatorAgent", func() {
	Describe("Authenticate", func() {
		var (
			logger        *toolsfakes.FakeLogger
			authenticator *web.AuthenticatorAgent

			expectedAuth Authorization
			auth         Authorization

			r *http.Request
			w *httptest.ResponseRecorder

			authOk bool
		)

		var requestFromClaims = func(claimsObj web.Authorization) *http.Request {
			token := jwt.NewWithClaims(jwt.SigningMethodHS256, claimsObj)
			tokenString, err := token.SignedString(authenticator.SigningSecret)

			r, err := http.NewRequest("GET", "http://here.net/", nil)
			Expect(err).To(BeNil())
			r.Header.Set("Authorization", fmt.Sprintf("Bearer %s", tokenString))

			return r
		}

		BeforeEach(func() {
			logger = &toolsfakes.FakeLogger{}
			expectedAuth = Authorization{
				StandardClaims: jwt.StandardClaims{
					Issuer: "xanderflood.com",
				},
				Foo: "my-clm-claim",
			}
			auth = Authorization{}

			authenticator = web.NewAuthenticator(logger, "signing-secret")

			r = requestFromClaims(expectedAuth)
			w = httptest.NewRecorder()
		})

		JustBeforeEach(func() {
			authOk = authenticator.Authenticate(w, r, &auth)
		})

		Context("when all goes well", func() {
			It("succeeds", func() {
				By("not setting any response headers")
				Expect(w.Header()).To(BeEmpty())

				By("not generating a response code")
				Expect(w.Flushed).To(BeFalse())

				By("not writing anything to the body")
				Expect(w.Body.String()).To(BeEmpty())

				By("faithfully round-tripping the Authorization object")
				Expect(auth).To(Equal(expectedAuth))

				By("returning true")
				Expect(authOk).To(BeTrue())
			})
		})

		var assertAuthorizationErr = func(message string) {
			By("writing a message in the WWW-Authenticate header")
			Expect(w.Header().Get("WWW-Authenticate")).To(Equal(message))

			By("responding with a 401")
			Expect(w.Code).To(Equal(401))

			By("writing a message in the body")
			claims := web.JSONErrorResponse{}
			Expect(json.Unmarshal(w.Body.Bytes(), &claims)).To(BeNil())
			Expect(claims.Error).To(Equal(message))

			By("returning false")
			Expect(authOk).To(BeFalse())
		}

		Context("when the Authorization is malformed", func() {
			BeforeEach(func() {
				r.Header.Set("Authorization", "no-token-here")
			})

			It("fails", func() {
				assertAuthorizationErr("invalid `Authorization` header: expected bearer token")
			})
		})

		Context("when the token is improperly signed", func() {
			BeforeEach(func() {
				authenticator.SigningSecret = []byte("another-secret")
			})

			It("fails", func() {
				assertAuthorizationErr("invalid token")
			})
		})

		Context("when the token has no sub claim", func() {
			BeforeEach(func() {
				expectedAuth.Foo = ""

				r = requestFromClaims(expectedAuth)
			})

			It("fails", func() {
				assertAuthorizationErr("invalid token")
			})
		})
	})
})
