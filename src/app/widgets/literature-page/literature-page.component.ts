import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-literature-page',
  templateUrl: './literature-page.component.html',
  styleUrls: ['./literature-page.component.scss']
})
export class LiteraturePageComponent implements OnInit, AfterViewInit {

  pdfURL = '';
  customElement: any;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    window.scroll(0,0);
    this.buildIframe(this.getBookType(this.appService.bookType));
  }

  ngAfterViewInit(): void {
    const appendPdf = document.getElementById('pdfFile');
    appendPdf?.appendChild(this.customElement);
  }

  /**
   * Set book type url
   */
  getBookType(bookType: string) {
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
    return bookUrl;
  }

  /**
   * Build iFrame based on book type
   * @param bookUrl
   */
  buildIframe(bookUrl: string) {
    this.pdfURL = document.location.href + bookUrl;
    this.customElement = document.createElement('iframe');
    this.customElement.setAttribute('id', 'pdfContent');
    this.customElement.setAttribute('src', this.pdfURL);
    this.customElement.setAttribute('style', 'height: 100%; width:100%');
  }

  /**
   * Show landing page
   */
  goBack() {
    this.appService.appPage = 'home';
  }

}
