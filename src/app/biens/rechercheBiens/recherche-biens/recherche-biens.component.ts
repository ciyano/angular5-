import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recherche-biens',
  templateUrl: './recherche-biens.component.html',
  styleUrls: ['./recherche-biens.component.css']
})
export class RechercheBiensComponent implements OnInit {
  nomBien: string;
  constructor(private http: HttpClient) { }
  OnNameKeyUp(event: any) {
  this.nomBien = event.target.value;
  }

  ngOnInit() {
  }

  getBien() {
    this.http.get('http://localhost:8803/biens/?nomBien=${this.nomBien}')
    .subscribe((data: any[]) => {
      console.log(data);
    }
    );
  }
}
