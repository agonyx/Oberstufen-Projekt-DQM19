import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerEquipmentComponent } from './player-equipment.component';

describe('PlayerEquipmentComponent', () => {
  let component: PlayerEquipmentComponent;
  let fixture: ComponentFixture<PlayerEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
