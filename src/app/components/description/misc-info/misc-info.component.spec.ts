import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscInfoComponent } from './misc-info.component';

describe('MiscInfoComponent', () => {
  let component: MiscInfoComponent;
  let fixture: ComponentFixture<MiscInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
