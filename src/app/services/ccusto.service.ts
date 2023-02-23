import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CCustosInterface } from './ICCustos';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CcustoService {

  SERVER_URL = 'http://localhost:8080';
  
  httpOptions= {
    header: new HttpHeaders({
      'Content-Type': 'application/json'  
    })
  };

  constructor(private http: HttpClient) {
   }

   public postCCusto (postData:any): Observable<CCustosInterface>{
    return this.http.post<CCustosInterface>(`${this.SERVER_URL}/ccustos`, postData).pipe(take(1));
  }

  public getAllCCusto (): Observable<CCustosInterface[]>{
    return this.http.get<CCustosInterface[]>(`${this.SERVER_URL}/ccustos`);
  }

  public deleteCCusto (id:number):Observable<any>{
    return this.http.delete(`${this.SERVER_URL}/ccustos/${id}`, {responseType: 'text'});
  }
}
