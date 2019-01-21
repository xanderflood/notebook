package tools

import (
	"errors"
	"fmt"
	"time"
)

//JSONTime JSON-marshallable RFC3339 time type
type JSONTime time.Time

//MarshalJSON marshal
func (jt JSONTime) MarshalJSON() ([]byte, error) {
	timestamp := fmt.Sprintf(`"%s"`, time.Time(jt).Format(time.RFC3339))
	return []byte(timestamp), nil
}

//UnmarshalJSON marshal
func (jt *JSONTime) UnmarshalJSON(bs []byte) error {
	fmt.Println(string(bs))
	var timestamp string
	_, err := fmt.Sscanf(string(bs), `"%s"`, &timestamp)
	if err != nil {
		return errors.New("expected JSON string expression")
	}

	t, err := time.Parse(time.RFC3339, timestamp)
	if err != nil {
		return err
	}

	*jt = JSONTime(t)
	return err
}
