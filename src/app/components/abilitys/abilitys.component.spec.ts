import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitysComponent } from './abilitys.component';

describe('AbilitysComponent', () => {
  let component: AbilitysComponent;
  let fixture: ComponentFixture<AbilitysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilitysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
