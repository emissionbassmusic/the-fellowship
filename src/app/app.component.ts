import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './services/app-service.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('pageTransition', [
      state('start', style({
        opacity: 0.1
      })),
      state('end', style({
        opacity: 1
      })),
      transition('* => end',
        animate('0.3s eas-in'))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'theFellowship';
  appPage = 'home';

  constructor(private router: Router, private appService: AppService) {}

  ngOnInit() {
    // Routing not working right with github
    // this.router.navigate(['/home']);
    setInterval(() => {
      this.appPage = this.appService.appPage;
    }, 1000)
  }
}
