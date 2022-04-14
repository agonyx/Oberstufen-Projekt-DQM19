import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTalentsComponent } from './work-talents.component';

describe('WorkTalentsComponent', () => {
  let component: WorkTalentsComponent;
  let fixture: ComponentFixture<WorkTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkTalentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
