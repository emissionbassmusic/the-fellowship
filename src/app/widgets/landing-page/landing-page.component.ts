import { AfterViewChecked, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snackbar/snackbar.component';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app-service.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s ease-out',
        style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('1s ease-in',
        style({opacity: 0}))
      ])
    ])
  ]
})
export class LandingPageComponent implements OnInit, AfterViewChecked {

  @ViewChild(TemplateRef)
  template!: TemplateRef<any>;

  snackbarContent = 'Sorry, we\'re having trouble.';
  snackbarDurationInSec = 3;
  bottomSheetContent: string | undefined;
  showMeetingBtn: boolean | undefined;
  soberDateSelection: any | undefined;
  soberTime: any | undefined;

  constructor(readonly bottomSheet: MatBottomSheet, private router: Router,
              private appService: AppService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    window.scroll(0,0);
  }

  ngAfterViewChecked(): void {
    if (this.appService.reflectionFailure) {
      this.snackbarContent = 'Cannot retrieve daily reflection right now.';
      this.snackBar.openFromComponent(SnackBarComponent, {
        duration: this.snackbarDurationInSec * 1000,
        data: this.snackbarContent
      });
      this.appService.reflectionFailure = false;
    }
  }

  /**
   * Open drawer from bottom
   */
  openBottomSheet(content: string, config?: MatBottomSheetConfig) {
    this.showMeetingBtn = false;
    switch (content) {
      case 'whatIsAA': {
        this.bottomSheetContent = '<h3>What is A.A.?</h3><p>Alcoholics Anonymous is a fellowship of people who come together to solve their drinking problem.  It doesn\'t cost anything to attend A.A. meetings. There are no age or education requirements to participate. Membership is open to anyone who wants to do something about their drinking problem.<br><br>A.A.\'s primary purpose is to help alcoholics to achieve sobriety.<br></p>';
        this.showMeetingBtn = true;
        break;
      }
      case 'reflectionFail': {
        this.bottomSheetContent = '<h2>Sorry, cannot retreive the daily reflection. Please try again later.</h2>';
        break;
      }
      case 'soberTime': {
        this.bottomSheetContent = 'You\'ve been sober for ' + this.soberTime;
        break;
      }
      case 'soberTimeTryAgain': {
        this.bottomSheetContent = 'Can\'t calculate your sober time. This might be an invalid date. Please try again.';
        break;
      }
      default: {
        this.bottomSheetContent = 'Sorry, we\'re having trouble getting this content.'
        break;
      }
    }
    return this.bottomSheet.open(this.template, config);
  }

  /**
   * Open AA links in new tab
   * Find meetings, Big Book, 12 & 12
   */
  openLink(url: string) {
    window.open(url, '_blank');
  }

  /**
   * Routes to literature page
   * Router not working right with github refresh
   */
  // goToLiterature(bookType: string) {
  //   this.appService.appPage = 'literature';
  //   this.appService.bookType = bookType;
  //   // this.router.navigate(['/literature']);
  // }

  /**
   * Open literature PDF in browser pdf plugin
   * @param bookType
   * @returns PDF to open in browser
   */
  openLiteraturePdf(bookType: string) {
    let bookUrl = ''
    switch (bookType) {
      case 'bigBook': {
        bookUrl = 'assets/pdfs/AA-BigBook-4th-Edition.pdf'
        break;
      }
      case '12&12': {
        bookUrl = 'assets/pdfs/AA-12-Steps-12-Traditions.pdf'
        break;
      }
      default: {
        bookUrl = 'assets/pdfs/AA-BigBook-4th-Edition.pdf'
        break;
      }
    }
    return window.open(document.location.href + bookUrl, '_self');
  }

  /**
   * Routes to daily reflection page
   * Router not working right with github refresh
   */
  goToDailyReflection() {
      this.appService.appPage = 'reflection';
    // this.router.navigate(['/daily-reflection']);
  }

  /**
   * Enter dates to determine sobriety time
   */
  calculateSobriety() {
    let soberYear;
    let soberMonth;
    let soberDay;
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - this.soberDateSelection.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    let days: any = (diffDays % 365) - 1;
    years > 0 ? soberYear = years + ' year ' : soberYear = '';
    years > 1 ? soberYear = years + ' years ' : soberYear = soberYear;
    months > 0 ? soberMonth = months + ' month ' : soberMonth = '';
    months > 1 ? soberMonth = months + ' months ' : soberMonth = soberMonth;
    days > 0 ? soberDay = days + ' day ' : soberDay = '';
    days > 1 ? soberDay = days + ' days ' : soberDay = soberDay;
    months > 0 ? soberDay = '( ' + soberDay + ')' : soberDay = soberDay;
    this.soberTime = (soberYear + soberMonth + soberDay);
    const tryAgain = (days === 0 && months === 0 && years === 0);
    tryAgain ? this.openBottomSheet('soberTimeTryAgain') : this.openBottomSheet('soberTime');

    let el: any = '';
    el =  document.getElementById('bottomSheetContent');
    el.style.display = 'flex';
    el.style.justifyContent = 'center';
    el.style.paddingTop = '1rem';
    el.style.paddingBottom = '1rem';
  }
}
