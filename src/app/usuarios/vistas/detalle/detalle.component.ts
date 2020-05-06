import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.sass']
})
export class DetalleComponent implements OnInit {
  id$: Observable<string>;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id$ = this.route.params.pipe(map(parametros => parametros.id))
  }

  irPaginaLista() {
    this.router.navigate(['/usuarios/lista'])
  }
}
