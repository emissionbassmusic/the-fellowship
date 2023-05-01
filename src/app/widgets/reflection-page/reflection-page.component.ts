import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';
import { ReflectionConstants } from 'src/app/widgets/reflection-page/reflections.constants';

@Component({
  selector: 'app-reflection-page',
  templateUrl: './reflection-page.component.html',
  styleUrls: ['./reflection-page.component.scss']
})
export class ReflectionPageComponent implements OnInit {

  isLoading = true;
  today = new Date();
  dateSelection = new Date();
  date = '';
  title = '';
  content1 = '';
  footer = '';
  content2 = '';
  reflectionFailure = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    window.scroll(0,0);
    this.getDailyReflection(this.today);
  }

  /**
   * Get daily reflection content for page
   * @param currentDate
   */
  getDailyReflection(currentDate: any) {
    currentDate = currentDate.getMonth().toString() + '/' + currentDate.getDate().toString();
    const reflectionContent = ReflectionConstants.dailyReflections;
    const promise = new Promise((resolve, reject) => {
      this.isLoading = true;
      this.clearReflection();
      reflectionContent.forEach((reflection) => {
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
    this.appService.appPage = 'home';
    if (this.reflectionFailure) {
      this.appService.reflectionFailure = true;
    }
  }

}
