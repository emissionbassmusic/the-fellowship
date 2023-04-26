import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionPageComponent } from './reflection-page.component';

describe('ReflectionPageComponent', () => {
  let component: ReflectionPageComponent;
  let fixture: ComponentFixture<ReflectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
