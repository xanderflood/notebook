package dbi

import (
	"context"
	"errors"
	"strconv"

	"github.com/davecgh/go-spew/spew"
	perrors "github.com/pkg/errors"

	"github.com/xanderflood/notebook/pkg/models"

	"github.com/jinzhu/gorm"
)

//GormClient GORM client
type GormClient struct {
	db         *gorm.DB
	itemTable  string
	entryTable string
	pageSize   int
}

//NewGormClient new GORM backend
func NewGormClient(
	db *gorm.DB,
	itemTable string,
	entryTable string,
	pageSize int,
) *GormClient {
	return &GormClient{
		db:         db,
		itemTable:  itemTable,
		entryTable: entryTable,
		pageSize:   pageSize,
	}
}

//GetItems nextToken is a page number
func (pc *GormClient) GetItems(ctx context.Context, userUUID string, nextToken string) ([]models.Item, string, error) {
	pageNum, err := strconv.ParseInt(nextToken, 10, 32)
	if err != nil {
		return nil, "", ClientError(errors.New("expected an integer"))
	}

	items := []models.Item{}
	offset := int(pageNum-1) * pc.pageSize
	err = pc.db.
		Where(&models.Item{UserUUID: userUUID}).
		Offset(offset).
		Limit(pc.pageSize).
		Find(&items).Error
	if err != nil {
		return nil, "", perrors.Wrapf(err, "failed to query item page `%v` for user `%s`", pageNum, userUUID)
	}

	spew.Dump(items)

	nextPage := strconv.FormatInt(int64(pageNum+1), 10)
	return items, nextPage, nil
}

//GetEntries GetEntries
func (pc *GormClient) GetEntries(ctx context.Context, userUUID string, nextToken string) ([]models.Entry, string, error) {
	pageNum, err := strconv.ParseInt(nextToken, 10, 32)
	if err != nil {
		return nil, "", ClientError(errors.New("expected an integer"))
	}

	entries := []models.Entry{}
	offset := int(pageNum-1) * pc.pageSize
	err = pc.db.Where(&models.Entry{UserUUID: userUUID}).
		Offset(offset).
		Limit(pc.pageSize).
		Find(&entries).Error
	if err != nil {
		return nil, "", perrors.Wrapf(err, "failed to query entry page `%v` for user `%s`", pageNum, userUUID)
	}

	nextPage := strconv.FormatInt(int64(pageNum+1), 10)
	return entries, nextPage, nil
}

//GetItem GetItem
func (pc *GormClient) GetItem(ctx context.Context, userUUID string, uuid string) (models.Item, error) {
	return models.Item{}, errors.New("not yet implemented")
}

//GetEntry GetEntry
func (pc *GormClient) GetEntry(ctx context.Context, userUUID string, uuid string) (models.Entry, error) {
	return models.Entry{}, errors.New("not yet implemented")
}

//CreateItem CreateItem
func (pc *GormClient) CreateItem(ctx context.Context, userUUID string, item models.Item) (models.Item, error) {
	item.Metadata.Create()
	item.UserUUID = userUUID

	spew.Dump(item)

	return item, pc.db.Create(item).Error
}

//CreateEntry CreateEntry
func (pc *GormClient) CreateEntry(ctx context.Context, userUUID string, entry models.Entry) (models.Entry, error) {
	entry.Metadata.Create()
	entry.UserUUID = userUUID

	spew.Dump(entry)
	//TODO; update all items! use a DB transaction

	return entry, pc.db.Create(entry).Error
}

//UpdateItem UpdateItem
func (pc *GormClient) UpdateItem(ctx context.Context, userUUID string, item models.Item) (models.Item, error) {
	item.Metadata.Update()

	err := pc.db.Update(item).Error
	if err != nil {
		return models.Item{}, perrors.Wrapf(err, "failed to update item `%s` for user %s", item.UUID, userUUID)
	}

	//TODO create individuals, depending on type

	return item, nil
}

//UpdateEntry UpdateEntry
func (pc *GormClient) UpdateEntry(ctx context.Context, userUUID string, entry models.Entry) (models.Entry, error) {
	entry.Metadata.Update()

	err := pc.db.Update(entry).Error
	if err != nil {
		return models.Entry{}, perrors.Wrapf(err, "failed to update entry `%s` for user %s", entry.UUID, userUUID)
	}

	spew.Dump(entry)
	//TODO; update all items! use a DB transaction

	return entry, nil
}

//DeleteItem DeleteItem
func (pc *GormClient) DeleteItem(ctx context.Context, userUUID string, uuid string) error {
	return errors.New("not yet implemented")
}

//DeleteEntry DeleteEntry
func (pc *GormClient) DeleteEntry(ctx context.Context, userUUID string, uuid string) error {
	return errors.New("not yet implemented")
}
