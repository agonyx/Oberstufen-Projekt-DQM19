import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FernkampfwaffenComponent } from './fernkampfwaffen.component';

describe('FernkampfwaffenComponent', () => {
  let component: FernkampfwaffenComponent;
  let fixture: ComponentFixture<FernkampfwaffenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FernkampfwaffenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FernkampfwaffenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
