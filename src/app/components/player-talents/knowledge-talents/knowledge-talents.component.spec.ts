import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeTalentsComponent } from './knowledge-talents.component';

describe('KnowledgeTalentsComponent', () => {
  let component: KnowledgeTalentsComponent;
  let fixture: ComponentFixture<KnowledgeTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeTalentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
