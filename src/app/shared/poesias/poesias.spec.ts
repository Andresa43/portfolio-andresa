import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poesias } from './poesias';

describe('Poesias', () => {
  let component: Poesias;
  let fixture: ComponentFixture<Poesias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poesias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poesias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
