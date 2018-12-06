import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recherche-biens-membres',
  templateUrl: './recherche-biens-membres.component.html',
  styleUrls: ['./recherche-biens-membres.component.css']
})
export class RechercheBiensMembresComponent implements OnInit {

  constructor(private http: HttpClient) { }
  nomBien: string = '';
  reponse: any;
  nom: any;
  ngOnInit() {
  }
  chercher() {
    const obs = this.http.get('http://localhost:8803/RechercheBiens/biens/' + this.nomBien);
    obs.subscribe((reponse) => {
      this.reponse = reponse;
      console.log(reponse);
    });

  }

}
