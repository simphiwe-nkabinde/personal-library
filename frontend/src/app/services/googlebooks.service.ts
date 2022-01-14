import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GooglebooksService {

  detailItemId: string = '';

  constructor(
    private http: HttpClient
  ) { }

  getVolume(searchString: string): Observable<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + searchString);
  }

  setdetailItemId(idString: string):void {
    this.detailItemId = idString;
  }

  getItem(): Observable<any> {
    return this.http.get("https://www.googleapis.com/books/v1/volumes/" + this.detailItemId);
  }
}
