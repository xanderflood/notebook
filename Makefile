commands := $(shell ls cmd/ | awk '{split($$0,a,"/"); print a[1]}' | tr '\n' ' ')

$(commands):
	@echo "Building go bin $@"
	mkdir -p build/$@
	cd cmd/$@ && go build -o ../../build/$@/$@ && cd -

go: $(commands)

ui:
	@echo "Building backend"
	cd ui/notebook && ng build --prod --output-path=../../build/api/public/ && cd -

devui:
	@echo "Building backend"
	cd ui/notebook && ng build --output-path=../../build/api/public/ && cd -

run: api ui start
gorun: api start
ngrun: ui start
start:
	echo "starting"
	./start api

gen:
	go generate ./...

clean:
	rm build/api/api
	rm build/api/public/*.html
	rm build/api/public/*.js
	rm build/api/public/*.map
	rm build/api/public/*.ico

.PHONY: ui @(commands) go run gorun ngrun start gen clean
