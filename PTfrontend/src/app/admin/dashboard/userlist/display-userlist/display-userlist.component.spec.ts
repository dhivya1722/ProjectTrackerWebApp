import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserlistComponent } from './display-userlist.component';

describe('DisplayUserlistComponent', () => {
  let component: DisplayUserlistComponent;
  let fixture: ComponentFixture<DisplayUserlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayUserlistComponent]
    });
    fixture = TestBed.createComponent(DisplayUserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
