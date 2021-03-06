// Code generated by counterfeiter. DO NOT EDIT.
package toolsfakes

import (
	"sync"

	"github.com/xanderflood/notebook/lib/tools"
)

type FakeUUIDer struct {
	UUIDStub        func() string
	uUIDMutex       sync.RWMutex
	uUIDArgsForCall []struct{}
	uUIDReturns     struct {
		result1 string
	}
	uUIDReturnsOnCall map[int]struct {
		result1 string
	}
	invocations      map[string][][]interface{}
	invocationsMutex sync.RWMutex
}

func (fake *FakeUUIDer) UUID() string {
	fake.uUIDMutex.Lock()
	ret, specificReturn := fake.uUIDReturnsOnCall[len(fake.uUIDArgsForCall)]
	fake.uUIDArgsForCall = append(fake.uUIDArgsForCall, struct{}{})
	fake.recordInvocation("UUID", []interface{}{})
	fake.uUIDMutex.Unlock()
	if fake.UUIDStub != nil {
		return fake.UUIDStub()
	}
	if specificReturn {
		return ret.result1
	}
	return fake.uUIDReturns.result1
}

func (fake *FakeUUIDer) UUIDCallCount() int {
	fake.uUIDMutex.RLock()
	defer fake.uUIDMutex.RUnlock()
	return len(fake.uUIDArgsForCall)
}

func (fake *FakeUUIDer) UUIDReturns(result1 string) {
	fake.UUIDStub = nil
	fake.uUIDReturns = struct {
		result1 string
	}{result1}
}

func (fake *FakeUUIDer) UUIDReturnsOnCall(i int, result1 string) {
	fake.UUIDStub = nil
	if fake.uUIDReturnsOnCall == nil {
		fake.uUIDReturnsOnCall = make(map[int]struct {
			result1 string
		})
	}
	fake.uUIDReturnsOnCall[i] = struct {
		result1 string
	}{result1}
}

func (fake *FakeUUIDer) Invocations() map[string][][]interface{} {
	fake.invocationsMutex.RLock()
	defer fake.invocationsMutex.RUnlock()
	fake.uUIDMutex.RLock()
	defer fake.uUIDMutex.RUnlock()
	copiedInvocations := map[string][][]interface{}{}
	for key, value := range fake.invocations {
		copiedInvocations[key] = value
	}
	return copiedInvocations
}

func (fake *FakeUUIDer) recordInvocation(key string, args []interface{}) {
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

var _ tools.UUIDer = new(FakeUUIDer)
