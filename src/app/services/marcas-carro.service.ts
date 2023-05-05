import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarcaCarros } from '../models/MarcaCarros';
import { map } from 'rxjs/operators';


interface CarsResponse {
  Makes: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class MarcasCarroService {

  private API_CARROS = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes';
  constructor(
    private http: HttpClient
  ) { }

  private mapMarcas(marcas: any[]): MarcaCarros[] {

    return marcas.map((marca: any) => ({ codigo: marca.make_id, nome: marca.make_display }));
  }

  public getMarcas(): Observable<MarcaCarros[]> {
    return this.http.jsonp(this.API_CARROS, 'callback')
      .pipe(
        map((res: any) => this.mapMarcas(res.Makes))
 
      );
  }
}
