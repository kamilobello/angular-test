import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { ListaComponent } from './vistas/lista/lista.component';
import { DetalleComponent } from './vistas/detalle/detalle.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [UsuariosComponent, ListaComponent, DetalleComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class UsuariosModule { }
