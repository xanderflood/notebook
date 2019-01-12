package web

import (
	"encoding/json"
	"io"
	"net/http"
)

//JSONStandardRespond standard json response
func JSONStandardRespond(w http.ResponseWriter, body interface{}, status int) {
	//TODO log the message and status at detail level
	w.Header().Set("Content-Type", "application/json;charset=utf-8")
	w.WriteHeader(status)

	if body == nil {
		return
	}

	bodyR, ok := body.(io.Reader)
	if ok {
		io.Copy(w, bodyR)
		return
	}

	data, err := json.Marshal(body)
	if err != nil {
		//TODO log
		return
	}

	_, err = w.Write(data)
	if err != nil {
		//TODO log
		return
	}
}

//JSONErrorResponse standard json response
type JSONErrorResponse struct {
	Status int    `json:"status"`
	Error  string `json:"error"`
}

//JSONErrorRespond error json response
func JSONErrorRespond(w http.ResponseWriter, message string, status int) {
	JSONStandardRespond(w, JSONErrorResponse{
		Status: status,
		Error:  message,
	}, status)
}
