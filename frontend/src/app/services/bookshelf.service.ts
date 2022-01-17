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
  getItem(): Observable<any> {
    return this.http.get(`${baseUrl}/book/${this.detailItemId}`);
  }
  create(shelfName: any): Observable<any> {
    let newItem = {
      bookId: this.detailItemId,
      shelf: shelfName
    }
    return this.http.post(`${baseUrl}`, newItem)
  }
  update(data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${this.detailItemId}`, data)
  }
  delete(): Observable <any> {
    return this.http.delete(`${baseUrl}/${this.detailItemId}`)
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
