import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsDataComponent } from './admins-data.component';

describe('AdminsDataComponent', () => {
  let component: AdminsDataComponent;
  let fixture: ComponentFixture<AdminsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
