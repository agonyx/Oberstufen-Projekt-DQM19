import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuestungComponent } from './ruestung.component';

describe('RuestungComponent', () => {
  let component: RuestungComponent;
  let fixture: ComponentFixture<RuestungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuestungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuestungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
