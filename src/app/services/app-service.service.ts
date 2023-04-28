import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  appPage = 'home';
  bookType = 'bigBook';
  prayerHeader = '';
  prayerBody = '';
  reflectionFailure = false;

  constructor() { }
}
