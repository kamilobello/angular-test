import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {flatMap, map} from "rxjs/operators";
import {Observable} from "rxjs";
import {IElemento} from "../../modelos/IElemento";
import {ApiMockService} from "../../servicios/api-mock.service";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.sass']
})
export class DetalleComponent implements OnInit {
  id$: Observable<string>;
  datos$: Observable<IElemento>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private api: ApiMockService) { }

  ngOnInit(): void {
    this.id$ = this.route.params.pipe(map(parametros => parametros.id));
    this.datos$ = this.id$.pipe(flatMap(id => this.api.buscarElemento(+id)));
  }

  obtenerImagenShiba(id: number): Observable<string> {
    return this.api.buscarImagenPorPesoDeElemento(id);
  }

  irPaginaLista() {
    this.router.navigate(['/usuarios/lista'])
  }
}
