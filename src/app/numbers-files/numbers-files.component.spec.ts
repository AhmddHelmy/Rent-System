import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersFilesComponent } from './numbers-files.component';

describe('NumbersFilesComponent', () => {
  let component: NumbersFilesComponent;
  let fixture: ComponentFixture<NumbersFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumbersFilesComponent]
    });
    fixture = TestBed.createComponent(NumbersFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
