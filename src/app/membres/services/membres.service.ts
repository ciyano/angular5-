import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MembresService {

  constructor(private http: Http, private httpp: HttpClient) { }

    getMembres(): Observable<any> {
     const url = 'http://localhost:8803/membres';
     return this.httpp.get(url);
    }

    addUser(nom:string, prenom:string, adresse:string, telephone:string, email:string, password :string):Observable <any>
    {
        let headers = new Headers({ 'Content-Type':'application/json'});
        let options = new RequestOptions({ headers: headers });
        console.log("ok :" + nom +" "+ prenom );
        let observable: Observable<any>;
        let url = "http://localhost:8803/membres";
        let body = {"nom": nom, "prenom": prenom, "adresse": adresse, "telephone": telephone, "email": email, "password": password};
        observable = this.http.post(url,JSON.stringify(body), options).pipe(map((res:Response)=>  res.json()));


        return observable;
    }

}
