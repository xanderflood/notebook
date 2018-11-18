import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ItemSelectorComponent, NewItemFormDialog } from './item-selector/item-selector.component';
import { NewItemFormComponent } from './new-item-form/new-item-form.component';
import { fakeBackendProvider } from './fake-backend.service';
import { ItemPropertiesComponent } from './item-properties/item-properties.component';
import { ItemPropertiesFormComponent } from './item-properties-form/item-properties-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    TransactionComponent,
    ItemSelectorComponent,
    NewItemFormComponent,
    NewItemFormDialog,
    ItemPropertiesComponent,
    ItemPropertiesFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),

    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatDatepickerModule, MatNativeDateModule,
    MatAutocompleteModule,
    MatRadioModule
  ],
  entryComponents: [NewItemFormDialog],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
