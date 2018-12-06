
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BiensService {

  constructor(private http: HttpClient) { }

    getBiens(): Observable<any> {
     const url = 'http://localhost:8803/biens';
     return this.http.get(url);
    }


}
