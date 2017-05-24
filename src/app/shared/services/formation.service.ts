import { environment } from './../../../environments/environment';
import { Formation } from './../models/formation';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class FormationService {

  constructor(private http: Http) { }

  fetch(): Observable<Array<Formation>> {
    return this.http.get(`${environment.apiUrl}/formations`).map((res: Response) => res.json());
  }

  save(model: Formation): Observable<Formation> {
    return this.http.post(`${environment.apiUrl}/formations`, model).map((res: Response) => res.json());
  }

  find(id: string): Observable<Formation> {
    return this.http.get(`${environment.apiUrl}/formations/${id}`).map((res: Response) => res.json());
  }

  remove(id: string): Observable<Formation> {
    return this.http.delete(`${environment.apiUrl}/formations/${id}`).map((res: Response) => res.json());
  }

  edit(id: string, model: Formation): Observable<Formation> {
    return this.http.put(`${environment.apiUrl}/formations/${id}`, model).map((res: Response) => res.json());
  }

}


