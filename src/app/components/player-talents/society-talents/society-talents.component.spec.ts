import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyTalentsComponent } from './society-talents.component';

describe('SocietyTalentsComponent', () => {
  let component: SocietyTalentsComponent;
  let fixture: ComponentFixture<SocietyTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyTalentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
