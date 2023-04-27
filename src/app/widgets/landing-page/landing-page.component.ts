import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  @ViewChild(TemplateRef)
  template!: TemplateRef<any>;

  bottomSheetContent: string | undefined;
  showMeetingBtn: boolean | undefined;
  soberDateSelection: any | undefined;
  soberTime: any | undefined;

  constructor(readonly bottomSheet: MatBottomSheet, private router: Router,
              private appService: AppService) {}

  ngOnInit(): void {
    window.scroll(0,0);
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
      case 'reflection': {
        this.bottomSheetContent = '';
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
    alert('Daily reflections is still a work in progress. Thanks!');
    // this.appService.appPage = 'reflection';
    // this.router.navigate(['/daily-reflection']);
  }

  /**
   * Enter dates to determine sobriety time
   */
  sobrietyCalculator() {
    // const today = new Date();
    // const year = today.getFullYear() - this.soberDateSelection.getFullYear();
    // const month = today.getMonth() - this.soberDateSelection.getMonth();
    // const day = today.getDate() - this.soberDateSelection.getDate();
    let soberYear;
    let soberMonth;
    let soberDay;
    // console.log(today.getFullYear());
    // console.log(today.getMonth());
    // console.log(today.getDate());
    // console.log( this.soberDateSelection.getFullYear());
    // console.log( this.soberDateSelection.getMonth());
    // console.log( this.soberDateSelection.getDate());
    const today = new Date();
    const diff = Math.floor(today.getTime() - this.soberDateSelection.getTime());
    const day = 1000 * 60 * 60 * 24;
    const days = Math.floor(diff/day);
    const months = Math.floor(days/30);
    const years = Math.floor(months/12);
    // message += days + " days "
    // message += months + " months "
    // message += years + " years ago \n"
    years > 0 ? soberYear = years + ' year ' : soberYear = '';
    years > 1 ? soberYear = years + ' years ' : soberYear = soberYear;
    months > 0 ? soberMonth = months + ' month ' : soberMonth = '';
    months > 1 ? soberMonth = months + ' months ' : soberMonth = soberMonth;
    days > 0 ? soberDay = days + ' day ' : soberDay = '';
    days > 1 ? soberDay = days + ' days ' : soberDay = soberDay;
    months > 0 ? soberDay = '( ' + soberDay + ')' : soberDay = soberDay;

    this.soberTime = (soberYear + soberMonth + soberDay);
    days > 0 ? this.openBottomSheet('soberTime') : this.openBottomSheet('soberTimeTryAgain');

    let el: any = '';
    el =  document.getElementById('bottomSheetContent');
    el.style.display = 'flex';
    el.style.justifyContent = 'center';
    el.style.paddingTop = '1rem';
    el.style.paddingBottom = '1rem';
  }
}
