import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTalentsComponent } from './body-talents.component';

describe('BodyTalentsComponent', () => {
  let component: BodyTalentsComponent;
  let fixture: ComponentFixture<BodyTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTalentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
