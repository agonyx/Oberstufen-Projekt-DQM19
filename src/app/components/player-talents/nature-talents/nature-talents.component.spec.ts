import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureTalentsComponent } from './nature-talents.component';

describe('NatureTalentsComponent', () => {
  let component: NatureTalentsComponent;
  let fixture: ComponentFixture<NatureTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatureTalentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
