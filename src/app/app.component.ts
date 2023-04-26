import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'theFellowship';
  appPage = 'home';

  constructor(private router: Router) {}

  ngOnInit() {
    // Do I ned this?
    this.router.navigate(['/home']);
  }
}
