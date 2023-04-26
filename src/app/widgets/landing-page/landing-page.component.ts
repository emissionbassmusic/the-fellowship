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
      default: {
        this.bottomSheetContent = 'Sorry, we\'re still working on this part!'
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
  goToLiterature(bookType: string) {
    this.appService.appPage = 'literature';
    this.appService.bookType = bookType;
    // this.router.navigate(['/literature']);
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
  sobrietyCalculator() {
    // TODO
    alert('Sorry, we\'re still working on this part!')
  }

}
