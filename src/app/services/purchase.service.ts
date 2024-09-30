import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Category } from '../models/categories.interface';


@Injectable({
    providedIn: 'root'
  })
  export class purchaseService {
    
    private _refresh$ = new Subject<void>()

    constructor(private http: HttpClient) {  }

    get refresh$(){
      return this._refresh$;
    }

    getAllPurchaseServ(): Observable<any>{
      return this.http.get(`${environment.URLServer}/purchasing/getAllPurchases`);
    }

    getAllCategoriesServ() : Observable <Category[]> {
      return this.http.get<Category[]>(`${environment.URLServer}/purchasing/getAllCategories`)
    }

    getSummaryPerMonthServ(){
      return this.http.get(`${environment.URLServer}/purchasing/getSummaryPerMonth`)
    }

    deletePurchaseServ(idPurchase: number, status: string) : Observable<any>{
      return this.http.put(`${environment.URLServer}/purchasing/deletePurchase/${idPurchase}`, { status });
    }
      
  }