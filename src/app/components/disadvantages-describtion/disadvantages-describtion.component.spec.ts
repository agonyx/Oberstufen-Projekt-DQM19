import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisadvantagesDescribtionComponent } from './disadvantages-describtion.component';

describe('DisadvantagesDescribtionComponent', () => {
  let component: DisadvantagesDescribtionComponent;
  let fixture: ComponentFixture<DisadvantagesDescribtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisadvantagesDescribtionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisadvantagesDescribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
