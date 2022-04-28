import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NahkampfwaffenComponent } from './nahkampfwaffen.component';

describe('NahkampfwaffenComponent', () => {
  let component: NahkampfwaffenComponent;
  let fixture: ComponentFixture<NahkampfwaffenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NahkampfwaffenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NahkampfwaffenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
