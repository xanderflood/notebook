package dbi

import (
	"context"
	"errors"
	"strings"

	perrors "github.com/pkg/errors"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
	"github.com/aws/aws-sdk-go/service/dynamodb/expression"
	"github.com/xanderflood/notebook/pkg/models"
)

//DynamoDBI DynamoDBI
type DynamoDBI struct {
	client     DynamoClient
	itemTable  string
	entryTable string
}

// //New new dynamo backend
// func New(
// 	client DynamoClient,
// 	itemTable string,
// 	entryTable string,
// ) Interface {
// 	return &DynamoDBI{
// 		client:     client,
// 		itemTable:  itemTable,
// 		entryTable: entryTable,
// 	}
// }

//
// TODO: backing this app with performant dynamo queries
// would require several secondary indexes, meaning expensive
// writes and ~$10+/mo. Probably not worth it for now.
//

//GetItems GetItems
func (db *DynamoDBI) GetItems(ctx context.Context, userUUID string, nextToken string) ([]models.Item, string, error) {
	keyCond := expression.Key("UserUUID").Equal(expression.Value(userUUID))
	proj := expression.NamesList(
		expression.Name("UUID"),
		expression.Name("Properties"),
		expression.Name("NumRemaing"),
		expression.Name("NumProduced"),
		expression.Name("NumConsumed"),
	)

	builder := expression.NewBuilder().
		WithKeyCondition(keyCond).
		WithProjection(proj)
	expression, err := builder.Build()
	if err != nil {
		return nil, "", perrors.Wrapf(err, "failed building dynamodb get items request for user `%s` with next token `%s`", userUUID, nextToken)
	}

	var startKey map[string]*dynamodb.AttributeValue
	nextToken = strings.TrimSpace(nextToken)
	if len(nextToken) > 0 {
		startKey = map[string]*dynamodb.AttributeValue{
			"UserUUID": &dynamodb.AttributeValue{S: aws.String(userUUID)},
			"UUID":     &dynamodb.AttributeValue{S: aws.String(nextToken)},
		}
	}

	input := &dynamodb.QueryInput{
		TableName:                 aws.String(db.itemTable),
		KeyConditionExpression:    expression.KeyCondition(),
		ProjectionExpression:      expression.Projection(),
		ExpressionAttributeNames:  expression.Names(),
		ExpressionAttributeValues: expression.Values(),
		ExclusiveStartKey:         startKey,
	}

	output, err := db.client.QueryWithContext(ctx, input)
	if err != nil {
		return nil, "", perrors.Wrapf(err, "failed to get items for user `%s` with start key `%s`", userUUID, nextToken)
	}

	var items []models.Item
	err = dynamodbattribute.UnmarshalListOfMaps(output.Items, &items)
	return items, *output.LastEvaluatedKey["UUID"].S, perrors.Wrapf(err, "failed to unmarshal get items response for user %s with start key %s", userUUID, nextToken)
}

//GetEntries GetEntries
func (db *DynamoDBI) GetEntries(ctx context.Context, userUUID string, nextToken string) ([]models.Entry, string, error) {
	keyCond := expression.Key("UserUUID").Equal(expression.Value(userUUID))
	proj := expression.NamesList(
		expression.Name("UUID"),
		expression.Name("Moment"),
		expression.Name("Transactions"),
	)

	builder := expression.NewBuilder().
		WithKeyCondition(keyCond).
		WithProjection(proj)
	expression, err := builder.Build()
	if err != nil {
		return nil, "", perrors.Wrapf(err, "failed building dynamodb get entries request for user %s with next token %s", userUUID, nextToken)
	}

	input := &dynamodb.QueryInput{
		TableName:              aws.String(db.entryTable),
		KeyConditionExpression: expression.KeyCondition(),
		ProjectionExpression:   expression.Projection(),
		ExclusiveStartKey: map[string]*dynamodb.AttributeValue{
			"UserUUID": &dynamodb.AttributeValue{S: aws.String(userUUID)},
			"UUID":     &dynamodb.AttributeValue{S: aws.String(nextToken)},
		},
	}

	output, err := db.client.QueryWithContext(ctx, input)
	if err != nil {
		return nil, "", perrors.Wrapf(err, "failed to get entries for user %s with start key %s", userUUID, nextToken)
	}

	var entries []models.Entry
	err = dynamodbattribute.UnmarshalListOfMaps(output.Items, &entries)
	return entries, *output.LastEvaluatedKey["UUID"].S, perrors.Wrapf(err, "failed to unmarshal get entries response for user %s with start key %s", userUUID, nextToken)
}

//GetItem GetItem
func (db *DynamoDBI) GetItem(ctx context.Context, userUUID string, uuid string) (models.Item, error) {
	return models.Item{}, errors.New("not yet implemented")
}

//GetEntry GetEntry
func (db *DynamoDBI) GetEntry(ctx context.Context, userUUID string, uuid string) (models.Entry, error) {
	return models.Entry{}, errors.New("not yet implemented")
}

//CreateItem CreateItem
func (db *DynamoDBI) CreateItem(ctx context.Context, userUUID string, item models.Item) (models.Item, error) {
	return models.Item{}, errors.New("not yet implemented")
}

//CreateEntry CreateEntry
func (db *DynamoDBI) CreateEntry(ctx context.Context, userUUID string, entry models.Entry) (models.Entry, error) {
	return models.Entry{}, errors.New("not yet implemented")
}

//UpdateItem UpdateItem
func (db *DynamoDBI) UpdateItem(ctx context.Context, userUUID string, item models.Item) (models.Item, error) {
	return models.Item{}, errors.New("not yet implemented")
}

//UpdateEntry UpdateEntry
func (db *DynamoDBI) UpdateEntry(ctx context.Context, userUUID string, entry models.Entry) (models.Entry, error) {
	return models.Entry{}, errors.New("not yet implemented")
}

//DeleteItem DeleteItem
func (db *DynamoDBI) DeleteItem(ctx context.Context, userUUID string, uuid string) error {
	return errors.New("not yet implemnted")
}

//DeleteEntry DeleteEntry
func (db *DynamoDBI) DeleteEntry(ctx context.Context, userUUID string, uuid string) error {
	return errors.New("not yet implemnted")
}
