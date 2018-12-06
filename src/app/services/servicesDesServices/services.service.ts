import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ServicesService {

  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    const url = 'http://localhost:8803/services';
    return this.http.get(url);
   }

}
