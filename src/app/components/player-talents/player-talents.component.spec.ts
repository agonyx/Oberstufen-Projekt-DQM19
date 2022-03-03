import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTalentsComponent } from './player-talents.component';

describe('PlayerTalentsComponent', () => {
  let component: PlayerTalentsComponent;
  let fixture: ComponentFixture<PlayerTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerTalentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
