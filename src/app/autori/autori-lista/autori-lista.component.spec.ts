import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoriListaComponent } from './autori-lista.component';

describe('AutoriListaComponent', () => {
  let component: AutoriListaComponent;
  let fixture: ComponentFixture<AutoriListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoriListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoriListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
