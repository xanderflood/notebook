import { AppState, EntriesAndItemsManager, EntryFormState } from './app.state';
import * as AppActions from './app.actions';

import { Entry } from '../models/entry.model';
import { Item } from '../models/item.model';
import { Transaction } from '../models/transaction.model';
import { Repository } from './repository';

const defaultState: EntriesAndItemsManager = AppState.default().app;

export function AppReducer(state = defaultState, action: AppActions.AppAction) {
  // console.log("reducing", state, action);

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
          repository: new Repository<EntryFormState>(
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

    //////////////////
    // create entry //
    //////////////////
    case AppActions.CREATE_ENTRY: {
      return {
        ...state,
        entries: {
          ...state.entries,
          repository: state.entries.repository.update(action.entry.uuid, {
            loading: true,
          }),
        }
      };
    }
    case AppActions.CREATE_ENTRY_SUCCESS: {
      return {
        ...state,
        entries: {
          ...state.entries,
          repository: state.entries.repository.update(action.uuid, {
            subject: action.entry,
            loading: false,
            editing: false,
          }),
        }
      };
    }
    case AppActions.CREATE_ENTRY_ERROR: {
      return {
        ...state,
        entries: {
          ...state.entries,
          repository: state.entries.repository.update(action.entry.uuid, {
            loading: false,
          }),
        }
      };
    }

    //////////////////
    // update entry //
    //////////////////
    case AppActions.UPDATE_ENTRY: {
      return {
        ...state,
        entries: {
          ...state.entries,
          repository: state.entries.repository.update(action.entry.uuid, {
            loading: true,
          }),
        }
      };
    }
    case AppActions.UPDATE_ENTRY_SUCCESS: {
      return {
        ...state,
        entries: {
          ...state.entries,
          repository: state.entries.repository.update(action.uuid, {
            subject: action.entry,
            loading: false,
            editing: false,
          }),
        }
      };
    }
    case AppActions.UPDATE_ENTRY_ERROR: {
      return {
        ...state,
        entries: {
          ...state.entries,
          repository: state.entries.repository.update(action.entry.uuid, {
            loading: false,
          }),
        }
      };
    }

    /////////////////
    // create item //
    /////////////////
    case AppActions.CREATE_ITEM: {
      return {
        ...state,
        itemForm: {
          ...state.itemForm,
          loading: true,
        },
      };
    }
    case AppActions.CREATE_ITEM_SUCCESS: {
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
    case AppActions.CREATE_ITEM_ERROR: {
      return {
        ...state,
        itemForm: {
          ...state.itemForm,
          loading: false,
          error: action.error,
        },
      };
    }

    /////////////////
    // update item //
    /////////////////
    case AppActions.UPDATE_ITEM: {
      return {
        ...state,
        itemForm: {
          ...state.itemForm,
          loading: true,
        },
      };
    }
    case AppActions.UPDATE_ITEM_SUCCESS: {
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
    case AppActions.UPDATE_ITEM_ERROR: {
      return {
        ...state,
        itemForm: {
          ...state.itemForm,
          loading: false,
          error: action.error,
        },
      };
    }

    //////////////////
    // delete entry //
    //////////////////
    case AppActions.DELETE_ENTRY: {
      return {
        ...state,
        entries: {
          ...state.entries,
          repository: state.entries.repository.update(action.entry.uuid, {
            loading: true,
          }),
        }
      };
    }
    case AppActions.DELETE_ENTRY_SUCCESS: {
      //TODO temporarily replace with delete marker
      // remove it a second later

      return {
        ...state,
        entries: {
          ...state.entries,
          repository: state.entries.repository.delete(action.entry.uuid),
        }
      };
    }
    case AppActions.DELETE_ENTRY_ERROR: {
      return {
        ...state,
        entries: {
          ...state.entries,
          repository: state.entries.repository.update(action.entry.uuid, {
            loading: false,
          }),
        }
      };
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
      return {
        ...state,
        entries: {
          ...state.entries,
          repository: state.entries.repository.save(new EntryFormState(
            new Entry([new Transaction()]), true,
          )),
        }
      };
    }
    case AppActions.EDIT_ENTRY: {
      return {
        ...state,
        entries: {
          ...state.entries,
          repository: state.entries.repository.update(action.entry.uuid, {
            editing: true,
          }),
        }
      };
    }
    case AppActions.CANCEL_ENTRY: {
      if (action.entry.uuid.length > 0) {
        return {
          ...state,
          entries: {
            ...state.entries,
            repository: state.entries.repository.update(action.entry.uuid, {
              editing: false,
            }),
          }
        };
      } else {
        return {
          ...state,
          entries: {
            ...state.entries,
            repository: state.entries.repository.delete(""),
          }
        };
      }
    }

    //////////////
    // new item //
    //////////////
    case AppActions.CANCEL_ITEM: {
      return state;
    }

    default:
      return state;
  }
}
