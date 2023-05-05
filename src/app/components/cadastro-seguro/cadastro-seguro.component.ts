import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarcaCarros } from 'src/app/models/MarcaCarros';
import { Seguro } from 'src/app/models/Seguro';
import { MarcasCarroService } from 'src/app/services/marcas-carro.service';
@Component({
  selector: 'app-cadastro-seguro',
  templateUrl: './cadastro-seguro.component.html',
  styleUrls: ['./cadastro-seguro.component.css']
})
export class  CadastroSeguroComponent implements OnInit{

  public seguro = new Seguro();

  public marcasCarros$!: Observable<MarcaCarros[]> ;

  constructor(
    private marcasCarroService: MarcasCarroService
  ){}

 ngOnInit() {
   this.marcasCarros$ = this.marcasCarroService.getMarcas();

   this.marcasCarros$.subscribe(marcas => console.log(marcas));

 }

}
