import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptUserComponent } from './except-user.component';

describe('ExceptUserComponent', () => {
  let component: ExceptUserComponent;
  let fixture: ComponentFixture<ExceptUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceptUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
