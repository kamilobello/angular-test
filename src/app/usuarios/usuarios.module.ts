import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { ListaComponent } from './vistas/lista/lista.component';
import { DetalleComponent } from './vistas/detalle/detalle.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatRippleModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [UsuariosComponent, ListaComponent, DetalleComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class UsuariosModule { }
