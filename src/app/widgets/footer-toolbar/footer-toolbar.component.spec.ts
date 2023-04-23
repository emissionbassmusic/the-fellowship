import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterToolbarComponent } from './footer-toolbar.component';

describe('FooterToolbarComponent', () => {
  let component: FooterToolbarComponent;
  let fixture: ComponentFixture<FooterToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
