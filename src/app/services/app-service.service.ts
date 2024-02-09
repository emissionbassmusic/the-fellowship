import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  appPage = 'home';
  bookType = 'bigBook';
  prayerHeader = '';
  prayerBody = '';
  reflectionFailure = false;

  constructor(private http: HttpClient) { }

  getDailyReflectionsUrl(): Observable<any> {
    return this.http.get(window.location.origin + '/reflections');
  }
}
