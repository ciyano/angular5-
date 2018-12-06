import { Component, OnInit } from '@angular/core';
import { MembresService } from './services/membres.service';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {
  public membres: Object[];

  constructor(public membresService: MembresService) { }

  ngOnInit() {
    this.membresService.getMembres().subscribe(res => this.membres = res);
}

}
