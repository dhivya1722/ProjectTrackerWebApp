import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProjectlistComponent } from './display-projectlist.component';

describe('DisplayProjectlistComponent', () => {
  let component: DisplayProjectlistComponent;
  let fixture: ComponentFixture<DisplayProjectlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayProjectlistComponent]
    });
    fixture = TestBed.createComponent(DisplayProjectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
