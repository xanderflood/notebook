import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

// component libraries
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatNativeDateModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';

// http stuff
import { HttpClientModule } from '@angular/common/http';
import { mockBackendProvider } from './mocks/backend.mock';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppReducer } from './store/app.reducers'
import { AppEffects } from './store/app.effects'

// components
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryComponent } from './entry/entry.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ItemSelectorComponent } from './item-selector/item-selector.component';
import { ItemFormDialog } from './item-form-dialog/item-form-dialog.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemPropertiesComponent } from './item-properties/item-properties.component';
import { ItemPropertiesFormComponent } from './item-properties-form/item-properties-form.component';
import { InventoryComponent } from './inventory/inventory.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ItemComponent } from './nav-menu/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    EntryComponent,
    TransactionComponent,
    ItemSelectorComponent,
    ItemFormComponent,
    ItemFormDialog,
    ItemPropertiesComponent,
    ItemPropertiesFormComponent,
    ItemFormDialog,
    InventoryComponent,
    NavMenuComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,

    StoreModule.forRoot({ app: AppReducer }),
    EffectsModule.forRoot([AppEffects]),
    environment.reduxDevTools ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],

    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatDatepickerModule, MatNativeDateModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatMenuModule,
    MatTableModule
  ],
  entryComponents: [ItemFormDialog, SnackComponent],
  providers: environment.mockBackend ? [mockBackendProvider] : [],
  bootstrap: [AppComponent]
})
export class AppModule { }
