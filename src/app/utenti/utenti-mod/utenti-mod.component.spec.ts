import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtentiModComponent } from './utenti-mod.component';

describe('UtentiModComponent', () => {
  let component: UtentiModComponent;
  let fixture: ComponentFixture<UtentiModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtentiModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtentiModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
