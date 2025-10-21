import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetryCanvas } from './poetry-canvas';

describe('PoetryCanvas', () => {
  let component: PoetryCanvas;
  let fixture: ComponentFixture<PoetryCanvas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoetryCanvas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoetryCanvas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
