import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/api/bookshelf'

@Injectable({
  providedIn: 'root'
})
export class BookshelfService {

  detailItemId: string = '';


  constructor(
    private http: HttpClient
  ) { }

  setDetailItemId(idString: string):void {
    this.detailItemId = idString;
  }

  getShelf(shelf: string): Observable<any> {
    return this.http.get(`${baseUrl}/${shelf}`)
  }
  getOne(): Observable<any> {
    return this.http.get(`${baseUrl}/${this.detailItemId}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}`, data)
  }
  update(data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${this.detailItemId}`, data)
  }
  delete(id: any): Observable <any> {
    return this.http.delete(`${baseUrl}/${id}`)
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
