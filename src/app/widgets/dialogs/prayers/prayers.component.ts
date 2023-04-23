import { Component } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-prayers',
  templateUrl: './prayers.component.html',
  styleUrls: ['./prayers.component.scss']
})
export class PrayersComponent {

  constructor(public appService: AppService) {}

  prayerHeader = this.appService.prayerHeader;
  prayerBody = this.appService.prayerBody;

}
