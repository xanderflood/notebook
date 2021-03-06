import { createSelector } from 'reselect';
import { createFeatureSelector } from '@ngrx/store'

import { AppState, EntriesAndItemsManager, EntriesData, ItemsData, EntryFormState, ItemFormState } from './app.state'
import { Item } from '../models/item.model'

export const getDataState = (state: AppState) => state.app;

/////////////////
// data stores //
/////////////////

//entry forms
export const getEntriesStoreState = createSelector(
  getDataState,
  state => state.entries,
);
export const getEntryLoading = createSelector(
  getEntriesStoreState,
  entries => entries.loading,
);
export const getEntriesRepository = createSelector(
  getEntriesStoreState,
  entries => entries.repository,
);
export const getEntriesArray = createSelector(
  getEntriesRepository,
  repo => repo.all(),
);

//items
export const getItemsStoreState = createSelector(
  getDataState,
  state => state.items,
);
export const getItemsLoading = createSelector(
  getItemsStoreState,
  items => items.loading,
);
export const getItemsRepository = createSelector(
  getItemsStoreState,
  entries => entries.repository,
);
export const getItemsArray = createSelector(
  getItemsRepository,
  repo => repo.all(),
);
export const getItemData = (uuid: string) => createSelector(
  getItemsRepository,
  repo => {
    var item = repo.fetch(uuid);
    return item ? item.copy() as Item : item;
  },
);

///////////
// forms //
///////////

//entries
export const getEntryFormState = (uuid: string) => createSelector(
  getDataState,
  state => {
    var efs = state.entries.repository.fetch(uuid);
    return efs ? efs.copy() as EntryFormState : efs;
  }
);
export const getEntryFormStateEditing = (uuid: string) => createSelector(
  getEntryFormState(uuid),
  formState => formState ? formState.editing : false,
);
export const getEntryFormStateLoading = (uuid: string) => createSelector(
  getEntryFormState(uuid),
  formState => formState ? formState.loading : false,
);
export const getEntryFormStateSubject = (uuid: string) => createSelector(
  getEntryFormState(uuid),
  formState => formState ? formState.subject : null,
);
export const getEntryFormStateError = (uuid: string) => createSelector(
  getEntryFormState(uuid),
  formState => formState ? formState.error : "",
);

//items
export const getItemFormState = createSelector(
  getDataState,
  state => state.itemForm,
);
export const getItemFormLoading = createSelector(
  getItemFormState,
  state => state.loading,
);
export const getItemFormError = createSelector(
  getItemFormState,
  state => state.error,
);
