package main

//Environment environment enum
type Environment int

const (
	//EnvironmentDebug Debug
	EnvironmentDebug Environment = iota
	//EnvironmentProduction Production
	EnvironmentProduction Environment = iota
)

//EnvironmentsByName environment names
var EnvironmentsByName = map[string]Environment{
	"DEBUG":      EnvironmentDebug,
	"PRODUCTION": EnvironmentProduction,
}
