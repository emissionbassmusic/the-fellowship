import { Component, OnInit } from '@angular/core';
import { ReflectionConstants } from 'src/app/widgets/reflection-page/reflections.constants';

@Component({
  selector: 'app-reflection-page',
  templateUrl: './reflection-page.component.html',
  styleUrls: ['./reflection-page.component.scss']
})
export class ReflectionPageComponent implements OnInit {

  isLoading: boolean | undefined;
  today = new Date();
  date = '';
  title = '';
  content1 = '';
  footer = '';
  content2 = '';

  ngOnInit(): void {
    window.scroll(0,0);
    const dateString = this.today.getMonth().toString() + '/' + this.today.getDate().toString();
    this.getDailyReflection(dateString);
  }

  /**
   * Get daily reflection content for page
   * @param currentDate
   */
  getDailyReflection(currentDate: string) {
    const reflectionContent = ReflectionConstants.dailyReflections;
    const promise = new Promise((resolve, reject) => {
      this.isLoading = true;
      console.log('Start');
      reflectionContent.forEach((reflection) => {
        if (currentDate === reflection.date) {
          this.date = reflection.reflection.day;
          this.title = reflection.reflection.title;
          this.content1 = reflection.reflection.content1;
          this.footer = reflection.reflection.footer;
          this.content2 = reflection.reflection.content2;
          resolve(true);
        }
      })
    })
    promise.then(() => {
      this.isLoading = false;
      console.log('All done!');
    });
  }

}
