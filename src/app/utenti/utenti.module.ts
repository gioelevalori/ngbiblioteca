import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtentiModComponent } from './utenti-mod/utenti-mod.component';
import { UtentiListaComponent } from './utenti-lista/utenti-lista.component';
import { UtentiCreateComponent } from './utenti-create/utenti-create.component';
import { TableModule } from '@fundamental-ngx/core';
import { FormModule } from '@fundamental-ngx/core';
import { ButtonModule } from '@fundamental-ngx/core';


@NgModule({
  declarations: [
    UtentiModComponent,
    UtentiListaComponent,
    UtentiCreateComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    FormModule,
    ButtonModule
  ]
})
export class UtentiModule { }
