import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class purchasigService {

  constructor(private http: HttpClient) { }

  getAllPurchases() : Observable<any> {
    console.log("Esta entrando al servicio del front")
   
    return this.http.get(`${environment.URLServer}/purchasing/`);
  }
    
}