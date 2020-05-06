import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from './usuarios.component';
import {ListaComponent} from "./vistas/lista/lista.component";
import {DetalleComponent} from "./vistas/detalle/detalle.component";

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    children: [
      { path: '', redirectTo: '/usuarios/lista', pathMatch: 'full'},
      { path: 'lista', component: ListaComponent, children: [] },
      { path: 'detalle', component: DetalleComponent, children: [] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
