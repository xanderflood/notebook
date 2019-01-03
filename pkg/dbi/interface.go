package dbi

import (
	"context"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/request"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/xanderflood/notebook/pkg/models"
)

//DynamoClient minimal dynamodb client
//go:generate counterfeiter . DynamoClient
type DynamoClient interface {
	QueryWithContext(ctx aws.Context, input *dynamodb.QueryInput, opts ...request.Option) (*dynamodb.QueryOutput, error)
	PutItemWithContext(ctx aws.Context, input *dynamodb.PutItemInput, opts ...request.Option) (*dynamodb.PutItemOutput, error)
	GetItemWithContext(ctx aws.Context, input *dynamodb.GetItemInput, opts ...request.Option) (*dynamodb.GetItemOutput, error)
	DeleteItemWithContext(ctx aws.Context, input *dynamodb.DeleteItemInput, opts ...request.Option) (*dynamodb.DeleteItemOutput, error)
}

//Interface minimal database interface
//go:generate counterfeiter . Interface
type Interface interface {
	GetItems(ctx context.Context, userUUID string, nextToken string) ([]models.Item, string, error)
	GetEntries(ctx context.Context, userUUID string, nextToken string) ([]models.Entry, string, error)
	GetItem(ctx context.Context, userUUID string, uuid string) (models.Item, error)
	GetEntry(ctx context.Context, userUUID string, uuid string) (models.Entry, error)
	CreateItem(ctx context.Context, userUUID string, item models.Item) (models.Item, error)
	CreateEntry(ctx context.Context, userUUID string, entry models.Entry) (models.Entry, error)
	UpdateItem(ctx context.Context, userUUID string, item models.Item) (models.Item, error)
	UpdateEntry(ctx context.Context, userUUID string, entry models.Entry) (models.Entry, error)
	DeleteItem(ctx context.Context, userUUID string, uuid string) error
	DeleteEntry(ctx context.Context, userUUID string, uuid string) error
}

//ClientError signals that a 400 is appropriate
type ClientError error
