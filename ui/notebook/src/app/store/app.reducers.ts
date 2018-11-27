import { AppState, EntriesAndItemsManager, EntryFormState } from './app.state';
import * as AppActions from './app.actions';

import { Entry } from '../models/entry.model';
import { Item } from '../models/item.model';
import { Repository } from './repository';

const defaultState: EntriesAndItemsManager = AppState.default().app;

export function AppReducer(state = defaultState, action: AppActions.AppAction) {
  console.log("reducing", state, action);

  switch (action.type) {
    /////////////////
    // get entries //
    /////////////////
    case AppActions.GET_ENTRIES: {
      return {
        ...state,
        entries: {
          ...state.entries,
          loading: true,
        },
      }
    }
    case AppActions.GET_ENTRIES_SUCCESS: {
      return {
        ...state,
        entries: {
          ...state.entries,
          loading: false,
          repository: new Repository<Entry>(
            action.entries.map(entry => new EntryFormState(entry))),
        },
      }
    }
    case AppActions.GET_ENTRIES_ERROR: {
      return {
        ...state,
        entries: {
          ...state.entries,
          loading: false,
        },
      }
    }

    ///////////////
    // get items //
    ///////////////
    case AppActions.GET_ITEMS: {
      return {
        ...state,
        items: {
          ...state.items,
          loading: true,
        },
      }
    }
    case AppActions.GET_ITEMS_SUCCESS: {
      return {
        ...state,
        items: {
          ...state.items,
          loading: false,
          repository: new Repository<Item>(action.items),
        },
      }
    }
    case AppActions.GET_ITEMS_ERROR: {
      return {
        ...state,
        items: {
          ...state.items,
          loading: false,
        },
      }
    }

    ////////////////
    // save entry //
    ////////////////
    case AppActions.SAVE_ENTRY: {
      return updateEntryFormState(
        state, action.entry.uuid, { loading: true },
      );
    }
    case AppActions.SAVE_ENTRY_SUCCESS: {
      return updateEntryFormState(
        state, action.entry.uuid, {
          subject: action.entry,
          editing: false,
          loading: false,
        },
      );
    }
    case AppActions.SAVE_ENTRY_ERROR: {
      return updateEntryFormState(
        state, action.entry.uuid, { loading: false },
      );
    }

    ///////////////
    // save item //
    ///////////////
    case AppActions.SAVE_ITEM: {
      return {
        ...state,
        itemForm: {
          ...state.itemForm,
          loading: true,
        },
      };
    }
    case AppActions.SAVE_ITEM_SUCCESS: {
      return {
        ...state,
        itemForm: {
          ...state.itemForm,
          loading: false,
        },
        items: {
          ...state.items,
          repository: state.items.repository.save(action.item),
        },
      };
    }
    case AppActions.SAVE_ITEM_ERROR: {
      return {
        ...state,
        itemForm: {
          ...state.itemForm,
          loading: false,
        },
      };
    }

    //////////////////
    // delete entry //
    //////////////////
    case AppActions.DELETE_ENTRY: {
      return updateEntryFormState(
        state, action.entry.uuid, { loading: true },
      );
    }
    case AppActions.DELETE_ENTRY_SUCCESS: {
      return updateEntryFormState(
        state, action.entry.uuid, { loading: false },
      );
    }
    case AppActions.DELETE_ENTRY_ERROR: {
      return updateEntryFormState(
        state, action.entry.uuid, { loading: false },
      );
    }

    /////////////////
    // delete item //
    /////////////////
    case AppActions.DELETE_ITEM: {
      return {
        ...state,
        itemForm: {
          ...state.itemForm,
          loading: true,
        },
      };
    }
    case AppActions.DELETE_ITEM_SUCCESS: {
      //TODO temporarily replace with delete marker
      // remove it a second later


      return {
        ...state,
        itemForm: {
          ...state.itemForm,
          loading: false,
        },
        items: {
          ...state.items,
          repository: state.items.repository.delete(action.item.uuid),
        },
      };
    }
    case AppActions.DELETE_ITEM_ERROR: {
      return {
        ...state,
        itemForm: {
          ...state.itemForm,
          loading: false,
        },
      };
    }

    ///////////////
    // new entry //
    ///////////////
    case AppActions.NEW_ENTRY: {
      return updateNewEntryFormState(state, {
          subject: new Entry(),
          editing: true,
        },
      );
    }
    case AppActions.EDIT_ENTRY: {
      return updateEntryFormState(state, action.entry.uuid, {
          editing: true,
        },
      );
    }
    case AppActions.CANCEL_ENTRY: {
      return updateEntryFormState(state, action.entry.uuid, {
          editing: false,
        },
      );
    }

    //////////////
    // new item //
    //////////////
    case AppActions.NEW_ITEM: {
      return {
        ...state,
        itemForm: {
          ...state.itemForm,
          subject: new Item(),
          editing: true,
        },
      };
    }
    case AppActions.EDIT_ITEM: {
      return {
        ...state,
        itemForm: {
          ...state.itemForm,
          subject: action.item,
          editing: false,
        },
      };
    }
    case AppActions.CANCEL_ITEM: {
      return {
        ...state,
        itemForm: {
          ...state.itemForm,
          editing: false,
        },
      };
    }

    default:
      return state;
  }
}

function updateEntryFormState(
  state: EntriesAndItemsManager,
  uuid: string,
  update: any,
): EntriesAndItemsManager {
  if (uuid && uuid.length > 0) {
    var form = state.entries.repository.fetch(uuid);
    return {
      ...state,
      entries: {
        ...state.entries,
        repository: state.entries.repository.save({
          ...form,
          ...update,
        }),
      },
    };
  } else {
    return updateNewEntryFormState(state, update);
  }
}

function updateNewEntryFormState(
  state: EntriesAndItemsManager,
  update: any,
): EntriesAndItemsManager {
  return {
    ...state,
    newEntryForm: {
      ...state.newEntryForm,
      subject: {
        ...state.newEntryForm.subject,
        ...update,
      },
    },
  };
}
