import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app-service.service';
import { PrayerConstants } from '../dialogs/prayers/prayers.constants';
import { PrayersComponent } from '../dialogs/prayers/prayers.component';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog, public appService: AppService) {}

  ngOnInit(): void {

  }

  /**
   * Open AA meeting finder in new tab
   */
  findMeeting() {
    window.open('https://www.aa.org/find-aa', '_blank');
  }

  /**
   * Download big book PDF
   */
  getBigBook() {
    window.open('https://www.aa.org/the-big-book', '_blank');
  }

  /**
   * Open prayer dialogs
   */
  openPrayers(prayerNumber: number) {
    switch (prayerNumber) {
      case 1: {
        this.appService.prayerHeader = 'First Step Prayer';
        this.appService.prayerBody = PrayerConstants.firstPrayer;
        this.triggerDialog();
        break;
      }
      case 2: {
        this.appService.prayerHeader = 'Second Step Prayer';
        this.appService.prayerBody = PrayerConstants.secondPrayer;
        this.triggerDialog();
        break;
      }
      case 3: {
        this.appService.prayerHeader = 'Third Step Prayer';
        this.appService.prayerBody = PrayerConstants.thirdPrayer;
        this.triggerDialog();
        break;
      }
      case 4: {
        this.appService.prayerHeader = 'Fourth Step Prayer';
        this.appService.prayerBody = PrayerConstants.fourthPrayer;
        this.triggerDialog();
        break;
      }
      case 5: {
        this.appService.prayerHeader = 'Fifth Step Prayer';
        this.appService.prayerBody = PrayerConstants.fifthPrayer;
        this.triggerDialog();
        break;
      }
      case 6: {
        this.appService.prayerHeader = 'Sixth Step Prayer';
        this.appService.prayerBody = PrayerConstants.sixthPrayer;
        this.triggerDialog();
        break;
      }
      case 7: {
        this.appService.prayerHeader = 'Seventh Step Prayer';
        this.appService.prayerBody = PrayerConstants.seventhPrayer;
        this.triggerDialog();
        break;
      }
      case 8: {
        this.appService.prayerHeader = 'Eighth Step Prayer';
        this.appService.prayerBody = PrayerConstants.eighthPrayer;
        this.triggerDialog();
        break;
      }
      case 9: {
        this.appService.prayerHeader = 'Nineth Step Prayer';
        this.appService.prayerBody = PrayerConstants.ninethPrayer;
        this.triggerDialog();
        break;
      }
      case 10: {
        this.appService.prayerHeader = 'Tenth Step Prayer';
        this.appService.prayerBody = PrayerConstants.tenthPrayer;
        this.triggerDialog();
        break;
      }
      case 11: {
        this.appService.prayerHeader = 'Eleventh Step Prayer';
        this.appService.prayerBody = PrayerConstants.eleventhPrayer;
        this.triggerDialog();
        break;
      }
      case 12: {
        this.appService.prayerHeader = 'Tweleveth Step Prayer';
        this.appService.prayerBody = PrayerConstants.twelvethPrayer;
        this.triggerDialog();
        break;
      }
      case 13: {
        this.appService.prayerHeader = 'Serenity Prayer';
        this.appService.prayerBody = PrayerConstants.serenityPrayer;
        this.triggerDialog();
        break;
      }
      case 14: {
        this.appService.prayerHeader = 'The Lords Prayer';
        this.appService.prayerBody = PrayerConstants.lordsPrayer;
        this.triggerDialog();
        break;
      }
      case 15: {
        this.appService.prayerHeader = 'St Francis Prayer';
        this.appService.prayerBody = PrayerConstants.stFrancisPrayer;
        this.triggerDialog();
        break;
      }
      case 16: {
        this.appService.prayerHeader = 'Morning Prayer';
        this.appService.prayerBody = PrayerConstants.morningPrayer;
        this.triggerDialog();
        break;
      }
      case 17: {
        this.appService.prayerHeader = 'Night Prayer';
        this.appService.prayerBody = PrayerConstants.nightPrayer;
        this.triggerDialog();
        break;
      }
      case 18: {
        this.appService.prayerHeader = 'Great Spirit Prayer';
        this.appService.prayerBody = PrayerConstants.greatSpiritPrayer;
        this.triggerDialog();
        break;
      }
      default: {
        this.appService.prayerHeader = 'Sorry, can\'t retreive prayer.'
        this.appService.prayerBody = 'Have a blessed day!'
        this.triggerDialog();
        break;
      }
    }
  }

  triggerDialog() {
    const dialogRef = this.dialog.open(PrayersComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
