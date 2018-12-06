import { Component, OnInit } from '@angular/core';
import { BiensService } from './services/biens.service';

@Component({
  selector: 'app-biens',
  templateUrl: './biens.component.html',
  styleUrls: ['./biens.component.css']
})
export class BiensComponent implements OnInit {
  public biens: Object[];

  constructor(public biensService: BiensService) { }

  ngOnInit() {
    this.biensService.getBiens().subscribe(res => this.biens = res);
  }


}
