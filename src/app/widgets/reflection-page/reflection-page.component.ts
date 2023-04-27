import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reflection-page',
  templateUrl: './reflection-page.component.html',
  styleUrls: ['./reflection-page.component.scss']
})
export class ReflectionPageComponent implements OnInit {

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
