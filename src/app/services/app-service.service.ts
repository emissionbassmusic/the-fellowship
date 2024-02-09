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

  /**
   * Get reflection data from api
   * @returns daily reflection json data
   */
  getDailyReflectionsUrl(): Observable<any> {
    return this.http.get(window.location.origin + '/reflections');
  }

  /**
   * Stores reflection data in browser local storage
   * @param data json
   */
  setReflectionData(data: any) {
    localStorage.setItem('TFSHP_RFLT', JSON.stringify(data));
  }

  /**
   * Get refection data from browser local storage
   */
  getReflectionData() {
    let data: any = null;
    localStorage.getItem('TFSHP_RFLT') ? data = localStorage.getItem('TFSHP_RFLT')?.toString() : null;
    return JSON.parse(data);
  }

  /**
   * Removes data from browser storage
   */
  removeReflectionData() {
    localStorage.removeItem('TFSHP_RFLT');
  }
}
