import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoriModComponent } from './autori-mod.component';

describe('AutoriModComponent', () => {
  let component: AutoriModComponent;
  let fixture: ComponentFixture<AutoriModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoriModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoriModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
