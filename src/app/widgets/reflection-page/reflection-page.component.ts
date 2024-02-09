import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';
import { ReflectionConstants } from 'src/app/widgets/reflection-page/reflections.constants';

@Component({
  selector: 'app-reflection-page',
  templateUrl: './reflection-page.component.html',
  styleUrls: ['./reflection-page.component.scss'],
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
export class ReflectionPageComponent implements OnInit {

  isLoading = true;
  today = new Date();
  dateSelection = new Date();
  reflectionData: any;
  date = '';
  title = '';
  content1 = '';
  footer = '';
  content2 = '';
  reflectionFailure = false;
  dataInStorage = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    window.scroll(0,0);
    this.dataInStorage = this.appService.getReflectionData() !== null && this.appService.getReflectionData() !== undefined;
    if (this.dataInStorage) {
      this.reflectionData = this.appService.getReflectionData();
      this.getDailyReflection(this.today);
    } else {
      this.appService.getDailyReflectionsUrl().subscribe((response) => {
        this.reflectionData = response;
        this.getDailyReflection(this.today);
      }, error => {
        console.log('Error getting data from API! Getting from secret location :) error = ', error);
        this.reflectionData = ReflectionConstants.dailyReflections;
        this.getDailyReflection(this.today);
      });
    }
  }

  /**
   * Get daily reflection content for page
   * @param currentDate
   */
  getDailyReflection(currentDate: any) {
    currentDate = currentDate.getMonth().toString() + '/' + currentDate.getDate().toString();
    const promise = new Promise((resolve, reject) => {
      this.isLoading = true;
      if (!this.dataInStorage) {
        this.appService.setReflectionData(this.reflectionData);
      }
      this.clearReflection();
      this.reflectionData.forEach((reflection: any) => {
        if (currentDate === reflection.date) {
          this.date = reflection.reflection.day;
          this.title = reflection.reflection.title;
          this.content1 = reflection.reflection.content1;
          this.footer = reflection.reflection.footer;
          this.content2 = reflection.reflection.content2;
        }
      })
      resolve(true);
    })
    promise.then(() => {
      this.isLoading = false;
      this.reflectionFailure = (this.date === '' && this.title === '' && this.content1 === '' && this.footer === '' && this.content2 === '');
      if (this.reflectionFailure) {
        this.goHome();
      }
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 200)
    });
  }

  /**
   * Clear reflection content
   */
  clearReflection() {
    this.date = '';
    this.title = '';
    this.content1 = '';
    this.footer = '';
    this.content2 = ''
  }

  /**
   * Go to main landing page
   */
  goHome() {
    if (this.reflectionFailure) {
      this.appService.reflectionFailure = true;
    }
    this.appService.appPage = 'home';
  }

}
