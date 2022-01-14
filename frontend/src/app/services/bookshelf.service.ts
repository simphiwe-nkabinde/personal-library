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

  getShelfCompleted(): Observable<any> {
    return this.http.get(`${baseUrl}/shelf/completed`)
  }
  getOne(): Observable<any> {
    return this.http.get(`${baseUrl}/${this.detailItemId}`);
  }
  getShelfReading(): Observable<any> {
    return this.http.get(`${baseUrl}/shelf/reading`)
  }
  getShelfwishList(): Observable<any> {
    return this.http.get(`${baseUrl}/shelf/wishlist`)
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
