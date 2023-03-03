import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredinputformComponent } from './requiredinputform.component';

describe('RequiredinputformComponent', () => {
  let component: RequiredinputformComponent;
  let fixture: ComponentFixture<RequiredinputformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredinputformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequiredinputformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
