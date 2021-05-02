import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UtentiListaComponent} from './utenti/utenti-lista/utenti-lista.component';
import {UtentiCreateComponent} from './utenti/utenti-create/utenti-create.component';
import {DataTableComponent} from './data-table/data-table.component';
const routes: Routes = [
  {path: 'utenti', component: UtentiListaComponent},
  {path: 'new-utenti', component: UtentiCreateComponent},
  {path: 'table', component: DataTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
