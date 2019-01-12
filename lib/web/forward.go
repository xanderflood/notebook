package web

import (
	"net/http"
)

//Forward forward this request to a port on localhost
func Forward(port int) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		// res, err := http.DefaultClient.Do(r)
		// if err != nil {
		// 	spew.Dump(err)
		// 	JSONStandardRespond(w, nil, http.StatusBadGateway)
		// 	return
		// }

		// for k, vs := range res.Header {
		// 	for _, v := range vs {
		// 		w.Header().Add(k, v)
		// 	}
		// }

		// w.WriteHeader(res.StatusCode)

		// if res.Body != nil {
		// 	io.Copy(w, res.Body)
		// 	res.Body.Close()
		// }
	})
}
