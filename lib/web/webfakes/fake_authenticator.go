// Code generated by counterfeiter. DO NOT EDIT.
package webfakes

import (
	"net/http"
	"sync"

	"github.com/xanderflood/notebook/lib/web"
)

type FakeAuthenticator struct {
	AuthenticateStub        func(w http.ResponseWriter, r *http.Request, claimsObj web.Authorization) bool
	authenticateMutex       sync.RWMutex
	authenticateArgsForCall []struct {
		w         http.ResponseWriter
		r         *http.Request
		claimsObj web.Authorization
	}
	authenticateReturns struct {
		result1 bool
	}
	authenticateReturnsOnCall map[int]struct {
		result1 bool
	}
	invocations      map[string][][]interface{}
	invocationsMutex sync.RWMutex
}

func (fake *FakeAuthenticator) Authenticate(w http.ResponseWriter, r *http.Request, claimsObj web.Authorization) bool {
	fake.authenticateMutex.Lock()
	ret, specificReturn := fake.authenticateReturnsOnCall[len(fake.authenticateArgsForCall)]
	fake.authenticateArgsForCall = append(fake.authenticateArgsForCall, struct {
		w         http.ResponseWriter
		r         *http.Request
		claimsObj web.Authorization
	}{w, r, claimsObj})
	fake.recordInvocation("Authenticate", []interface{}{w, r, claimsObj})
	fake.authenticateMutex.Unlock()
	if fake.AuthenticateStub != nil {
		return fake.AuthenticateStub(w, r, claimsObj)
	}
	if specificReturn {
		return ret.result1
	}
	return fake.authenticateReturns.result1
}

func (fake *FakeAuthenticator) AuthenticateCallCount() int {
	fake.authenticateMutex.RLock()
	defer fake.authenticateMutex.RUnlock()
	return len(fake.authenticateArgsForCall)
}

func (fake *FakeAuthenticator) AuthenticateArgsForCall(i int) (http.ResponseWriter, *http.Request, web.Authorization) {
	fake.authenticateMutex.RLock()
	defer fake.authenticateMutex.RUnlock()
	return fake.authenticateArgsForCall[i].w, fake.authenticateArgsForCall[i].r, fake.authenticateArgsForCall[i].claimsObj
}

func (fake *FakeAuthenticator) AuthenticateReturns(result1 bool) {
	fake.AuthenticateStub = nil
	fake.authenticateReturns = struct {
		result1 bool
	}{result1}
}

func (fake *FakeAuthenticator) AuthenticateReturnsOnCall(i int, result1 bool) {
	fake.AuthenticateStub = nil
	if fake.authenticateReturnsOnCall == nil {
		fake.authenticateReturnsOnCall = make(map[int]struct {
			result1 bool
		})
	}
	fake.authenticateReturnsOnCall[i] = struct {
		result1 bool
	}{result1}
}

func (fake *FakeAuthenticator) Invocations() map[string][][]interface{} {
	fake.invocationsMutex.RLock()
	defer fake.invocationsMutex.RUnlock()
	fake.authenticateMutex.RLock()
	defer fake.authenticateMutex.RUnlock()
	copiedInvocations := map[string][][]interface{}{}
	for key, value := range fake.invocations {
		copiedInvocations[key] = value
	}
	return copiedInvocations
}

func (fake *FakeAuthenticator) recordInvocation(key string, args []interface{}) {
	fake.invocationsMutex.Lock()
	defer fake.invocationsMutex.Unlock()
	if fake.invocations == nil {
		fake.invocations = map[string][][]interface{}{}
	}
	if fake.invocations[key] == nil {
		fake.invocations[key] = [][]interface{}{}
	}
	fake.invocations[key] = append(fake.invocations[key], args)
}

var _ web.Authenticator = new(FakeAuthenticator)
