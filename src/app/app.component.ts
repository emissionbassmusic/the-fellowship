import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './services/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
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

  ngOnDestroy() {
    this.appService.removeReflectionData();
  }
}
