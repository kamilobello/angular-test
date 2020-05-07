import { Injectable } from '@angular/core';
import {IElemento} from "../modelos/IElemento";
import {combineLatest, interval, Observable, of} from "rxjs";
import {delay, flatMap, map, mapTo} from "rxjs/operators";
import {element} from "protractor";

const ELEMENT_DATA: IElemento[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const SHIBAS_IMAGES: string[] = [
  'https://www.rover.com/blog/wp-content/uploads/2019/11/shiba-dreamstime-960x540.jpg',
  'https://material.angular.io/assets/img/examples/shiba2.jpg',
  'https://vetstreet-brightspot.s3.amazonaws.com/05/ae6220a81c11e0a0d50050568d634f/file/Shiba-Inu-5-645mk070111.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZUcXZ5aSj_X4a4WweAE-TiFV9Zj54K31WKWevUtvxgFTLzZGc&usqp=CAU',
  'https://nation.com.mx/wp-content/uploads/2019/05/Shiba-Inu-flores.jpg'
]


@Injectable({
  providedIn: 'root'
})
export class ApiMockService {

  constructor() { }

  buscarListaDeElementos(): Observable<IElemento[]> {
    return interval(1000).pipe(mapTo(ELEMENT_DATA));
  }

  buscarElemento(id: number): Observable<IElemento> {
    return of(ELEMENT_DATA).pipe(map(lista => {
      const elemento = lista.find(elemento => elemento.position === id);
      return {
        ...elemento,
        indexImagen:  Math.floor(elemento.weight) % SHIBAS_IMAGES.length
      }
    }));
  }

  buscarListaDeImagenes(): Observable<string[]> {
    return of(SHIBAS_IMAGES)
  }

  buscarImagenPorPesoDeElemento(idElemento: number): Observable<string> {
    const apiElemento$ = this.buscarElemento(idElemento);
    const apiImagenes$ = this.buscarListaDeImagenes();
    return combineLatest(apiElemento$, apiImagenes$).pipe(map(resultado => {
      return resultado[1][resultado[0].indexImagen];
    }));
  }
}
