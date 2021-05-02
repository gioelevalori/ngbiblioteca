import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoriCreateComponent } from './autori-create.component';

describe('AutoriCreateComponent', () => {
  let component: AutoriCreateComponent;
  let fixture: ComponentFixture<AutoriCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoriCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoriCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
