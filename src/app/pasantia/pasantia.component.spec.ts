import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasantiaComponent } from './pasantia.component';

describe('PasantiaComponent', () => {
  let component: PasantiaComponent;
  let fixture: ComponentFixture<PasantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasantiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
