import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainfilesComponent } from './mainfiles.component';

describe('MainfilesComponent', () => {
  let component: MainfilesComponent;
  let fixture: ComponentFixture<MainfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainfilesComponent]
    });
    fixture = TestBed.createComponent(MainfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
