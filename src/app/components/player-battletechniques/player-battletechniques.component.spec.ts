import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBattletechniquesComponent } from './player-battletechniques.component';

describe('PlayerBattletechniquesComponent', () => {
  let component: PlayerBattletechniquesComponent;
  let fixture: ComponentFixture<PlayerBattletechniquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerBattletechniquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerBattletechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
