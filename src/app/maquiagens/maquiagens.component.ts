import { Component, OnInit } from '@angular/core';
import { Maquiagem } from './maquiagem/maquiagem.model';
import { MaquiagensService } from './maquiagens.service';

@Component({
  selector: 'app-maquiagens',
  templateUrl: './maquiagens.component.html',
  styleUrls: ['./maquiagens.component.css']
})
export class MaquiagensComponent implements OnInit {


  maquiagens: Maquiagem[];
  private _router: any;

  constructor(private maquiagensService: MaquiagensService) { }

  ngOnInit(): void {
    this.maquiagensService.maquiagens().subscribe(maquiagens =>{
      this.maquiagens=maquiagens;
      });
  }

}
