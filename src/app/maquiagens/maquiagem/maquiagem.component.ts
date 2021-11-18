import { Component, Input, OnInit } from '@angular/core';
import { Maquiagem} from './maquiagem.model';

@Component({
  selector: 'app-maquiagem',
  templateUrl: './maquiagem.component.html',
  styleUrls: ['./maquiagem.component.css']
})
export class MaquiagemComponent implements OnInit {

  @Input() maquiagem: Maquiagem;
  constructor() { }

  ngOnInit(): void {
  }

}
