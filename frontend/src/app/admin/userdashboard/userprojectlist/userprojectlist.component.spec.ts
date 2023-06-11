import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprojectlistComponent } from './userprojectlist.component';

describe('UserprojectlistComponent', () => {
  let component: UserprojectlistComponent;
  let fixture: ComponentFixture<UserprojectlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserprojectlistComponent]
    });
    fixture = TestBed.createComponent(UserprojectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
