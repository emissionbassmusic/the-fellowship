import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';
import { animate, style, transition, trigger } from '@angular/animations';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  header: string;
  image: string;
  url: string;
  id: string;
}

@Component({
  selector: 'app-podcast-page',
  templateUrl: './podcast-page.component.html',
  styleUrls: ['./podcast-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('500ms ease-out',
        style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('1s ease-in',
        style({opacity: 0}))
      ])
    ])
  ]
})
export class PodcastPageComponent implements OnInit {

  tiles: Tile[] = [
    {cols: 4, rows: 1, color: '#DDBDF1', header: 'Sober Cast', image: 'the-fellowship/assets/images/sobercast_header.png', url: 'https://sobercast.com', id: 'Sober Cast'},
    {cols: 2, rows: 1, color: 'lightgreen',  header: 'Grapevine Podcast', image: 'https://artwork.captivate.fm/0ad84761-e27d-40a0-be3f-982e28f5cfed/NA7eDTnRxVFYjt4qJyGSFDog.jpeg?width=800&height=800', url: 'https://www.aagrapevine.org/podcast', id: 'Grapevine Podcast'},
    {cols: 2, rows: 1, color: 'lightpink', header: 'Transitions Daily', image: 'https://images.libsyn.com/p/assets/0/b/3/9/0b39ce823b8c1bc0/dailyaaemails-alcoholicsanonymous-howtogetsober.jpg?h=200&auto=compress', url: 'https://dailyaaemails-alcoholicsanonymous-howtogetsober.libsyn.com', id: 'Transitions Daily'},
    {cols: 4, rows: 1, color: 'lightblue', header: 'Odomtology Recovery Media', image: 'the-fellowship/assets/images/AA_logo.png', url: 'https://www.youtube.com/@OdomtologyBooks', id: 'Odomtology'}
  ];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    window.scroll(0,0);
  }

  /**
   * Navigates to podcast site
   */
  navigateToPodcast(url: string) {
    window.open(url, '_blank');
  }

  /**
   * Go to main landing page
   */
  goHome() {
    this.appService.appPage = 'home';
  }

}
