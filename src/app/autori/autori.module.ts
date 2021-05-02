import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoriListaComponent } from './autori-lista/autori-lista.component';
import { AutoriCreateComponent } from './autori-create/autori-create.component';
import { AutoriModComponent } from './autori-mod/autori-mod.component';



@NgModule({
  declarations: [
    AutoriListaComponent,
    AutoriCreateComponent,
    AutoriModComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AutoriModule { }
