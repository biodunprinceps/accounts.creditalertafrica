import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameratriggerComponent } from './cameratrigger.component';

describe('CameratriggerComponent', () => {
  let component: CameratriggerComponent;
  let fixture: ComponentFixture<CameratriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameratriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameratriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
