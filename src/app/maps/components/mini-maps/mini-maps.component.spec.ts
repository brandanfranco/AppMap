import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniMapsComponent } from './mini-maps.component';

describe('MiniMapsComponent', () => {
  let component: MiniMapsComponent;
  let fixture: ComponentFixture<MiniMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
