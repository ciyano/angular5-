import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ajouter-biens',
  templateUrl: './ajouter-biens.component.html',
  styleUrls: ['./ajouter-biens.component.css']
})
export class AjouterBiensComponent implements OnInit {
  biens: any;
  preteur: string;
  nom: string;
  type: string;
  prix: string;
  etat: string;
  constructor(private http: Http) { }

  ngOnInit() {
  }

  addBien(preteur:string, nom:string, type:string, prix:string, etat:string):Observable <any>
  {
      let headers = new Headers({ 'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });
      console.log("ok :" + nom +" "+ type );
      let observable: Observable<any>;
      let url = "http://localhost:8803/biens";
      let body = {"preteur": preteur, "nom": nom, "type": type, "prix": prix, "etat": etat};
      observable = this.http.post(url,JSON.stringify(body), options).pipe(map((res:Response)=>  res.json()));


      return observable;
  }

  insertion(preteur, nom, type, prix, etat)
  {
      console.log ("nom: "+ nom);
      console.log ("type : " + type);
      this.addBien(this.preteur, this.nom, this.type, this.prix, this.etat).subscribe();
      console.log("fin de l'ajout");



  }

}
