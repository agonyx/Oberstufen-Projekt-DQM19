import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesDescribtionComponent } from './advantages-describtion.component';

describe('AdvantagesDescribtionComponent', () => {
  let component: AdvantagesDescribtionComponent;
  let fixture: ComponentFixture<AdvantagesDescribtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvantagesDescribtionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantagesDescribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
