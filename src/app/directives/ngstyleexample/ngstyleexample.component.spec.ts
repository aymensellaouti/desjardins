import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleexampleComponent } from './ngstyleexample.component';

describe('NgstyleexampleComponent', () => {
  let component: NgstyleexampleComponent;
  let fixture: ComponentFixture<NgstyleexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgstyleexampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgstyleexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
