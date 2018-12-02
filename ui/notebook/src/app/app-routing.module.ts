import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component';
import { InventoryComponent } from './inventory/inventory.component';

//
// TODO:
// https://www.sitepoint.com/component-routing-angular-router/
// Add a "resolver" for each route. This implements a hook
// that executes _before_ the component is activated, so that
// nothing displays until the data has been fetched. This can also
// manage a loading animation, maybe
//

const routes: Routes = [  {
    path: '',
    redirectTo: 'log',
    pathMatch: 'full'
  },
  {
    path: 'log',
    component: EntryListComponent,
  },
  {
    path: 'inventory',
    component: InventoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
